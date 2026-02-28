"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo } from "react"; 
import { MAX_FILE_SIZE, MAX_FILES } from "./lib/tour-validations";

interface ImageUploadFieldProps {
  value: File[];
  onChange: (files: File[]) => void;
  existingImages ?: number
}

export function ImageUploadField({ value, onChange,existingImages=0 }: ImageUploadFieldProps) {
  const handleUpload = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    
    input.onchange = (e) => {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      
      // Validate file size
      const validFiles = files.filter(
        (file) => file.size <= MAX_FILE_SIZE
      );

      if (validFiles.length !== files.length) {
        toast.error(`Some files exceed ${MAX_FILE_SIZE / (1024 * 1024)}MB limit`);
      }

      // Check total files limit
      const totalFiles = [...value, ...validFiles];
      if (totalFiles.length > MAX_FILES) {
        toast.error(`Maximum ${MAX_FILES} images allowed`);
        return;
      }

      onChange(totalFiles);
    };
    
    input.click();
  }, [value, onChange]);

  const removeImage = useCallback((index: number) => {
    const newImages = [...value];
    newImages.splice(index, 1);
    onChange(newImages);
  }, [value, onChange]);

  const imagePreviews = useMemo(() => {
    return value.map((file, index) => ({
      id: `${file.name}-${index}-${file.lastModified}`,
      url: URL.createObjectURL(file),
      index,
    }));
  }, [value]);

  return (
    <FormItem>
      <FormLabel>Images</FormLabel>
      <FormControl>
        <div className="space-y-4">
          {value.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {imagePreviews.map(({ id, url, index }) => (
                <div key={id} className="relative group">
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={url}
                      alt={`Preview ${index + 1}`}
                      width={200}
                      height={100}
                      className="w-full h-full object-cover"
                      onLoad={() => URL.revokeObjectURL(url)}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <X size={12} />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {value.length + existingImages < MAX_FILES && (
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleUpload}
              >
                <Upload size={16} className="mr-2" />
                Upload Images ({value.length+existingImages}/{MAX_FILES})
              </Button>
              <span className="text-sm text-muted-foreground">
                Max {MAX_FILES} images, {MAX_FILE_SIZE / (1024 * 1024)}MB each
              </span>
            </div>
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}