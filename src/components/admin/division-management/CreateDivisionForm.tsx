"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Loader, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCreateDivisionMutation } from "@/redux/features/division";
import { toast } from "sonner";
import { useRef } from "react";

const divisionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  thumbnail: z
    .instanceof(File, { message: "Thumbnail should be a file" })
    .refine(
      (file) => ["image/png", "image/jpeg"].includes(file.type),
      "Only PNG and JPG files are allowed",
    )
    .optional(),
});
type DivisionFormValues = z.infer<typeof divisionSchema>;

function CreateDivisionForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const form = useForm<DivisionFormValues>({
    resolver: zodResolver(divisionSchema),
    defaultValues: {
      name: "",
      thumbnail: undefined,
    },
  });

  const thumbnailFile = useWatch({ control: form.control, name: "thumbnail" });
  const getPreviewUrl = (file?: File) => {
    if (!file) return null;
    return URL.createObjectURL(file);
  };
  const [createDivision, { isLoading: createLoading }] =
    useCreateDivisionMutation();

  const onSubmit = async (values: DivisionFormValues) => {
    const formdata = new FormData();
    if (values?.thumbnail) {
      formdata.append("image", values.thumbnail);
    }
    formdata.append("name", values.name);

    try {
      await createDivision(formdata).unwrap();
      form.reset();
      toast.success("Division created!");
      handleCancell();
    } catch (error: any) {
      console.error(error.data.message);
      toast.error(error?.data?.message || "Create division failed");
    }
  };

  const handleCancell = () => {
    router.back();
  };

  const handleClearImage = () => {
    form.resetField("thumbnail");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Card className="bg-none sm:py-2 border-none shadow-none">
          <CardContent className="space-y-4 p-0 ">
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <Input placeholder="Enter division name" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="thumbnail"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Thumbnail</FormLabel>
                  <FormControl>
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  </FormControl>
                  <FormMessage />
                  {thumbnailFile && (
                    <div className="mt-2">
                      <div className="flex gap-2 items-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Preview
                        </p>
                        <Button
                          size={"xs"}
                          variant="outline"
                          className={cn("", "cursor-pointer")}
                          onClick={handleClearImage}
                        >
                          <X size={16} />
                        </Button>
                      </div>
                      <Image
                        src={getPreviewUrl(thumbnailFile) ?? ""}
                        alt="Thumbnail preview"
                        width={200}
                        height={100}
                        className="object-cover rounded-md border"
                      />
                    </div>
                  )}
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        {/* Form Actions */}
        <div className="flex justify-end gap-4 px-4">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className={cn("", "cursor-pointer")}
            onClick={handleCancell}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={createLoading}
            className={cn("", "cursor-pointer")}
            size="lg"
          >
            {createLoading ? (
              <>
                <Loader className="size-4 animate-spin" />
                Create Division
              </>
            ) : (
              `Create Division`
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreateDivisionForm;
