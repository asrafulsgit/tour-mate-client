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
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ur } from "zod/v4/locales";
import {
  useGetDivisionQuery,
  useUpdateDivisionMutation,
} from "@/redux/features/division";
import UpdateDivisionFormSkeleton from "./UpdateDivisionFormSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { toast } from "sonner";

const divisionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z
    .instanceof(File, { message: "Thumbnail should be a file" })
    .refine(
      (file) => ["image/png", "image/jpeg"].includes(file.type),
      "Only PNG and JPG files are allowed",
    )
    .optional(),
});
type DivisionFormValues = z.infer<typeof divisionSchema>;

function UpdateDivisionForm() {
  const router = useRouter();
  const divisionId = useParams().id as string;
  const [thumbnail, setThumbnail] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<DivisionFormValues>({
    resolver: zodResolver(divisionSchema),
    defaultValues: {
      name: "",
      image: undefined,
    },
  });
  const { data, isLoading, error } = useGetDivisionQuery(divisionId);
  const [updateDivision, { isLoading: updateLoading }] =
    useUpdateDivisionMutation();
  useEffect(() => {
    const division = data?.data;
    if (division) {
      if (division?.thumbnail) {
        setThumbnail(division?.thumbnail);
      }
      console.log(division?.thumbnail);
      form.reset({
        name: division.name || "",
      });
    }
  }, [data, form]);

  const onSubmit = async (values: DivisionFormValues) => {
    const formdata = new FormData();
    if (values?.image) {
      formdata.append("image", values.image);
    }
    formdata.append("name", values.name);

    try {
      await updateDivision({ formData: formdata, id: divisionId }).unwrap();
      form.reset();
      toast.success("Division updated!");
      handleCancell();
    } catch (error: any) {
      console.error(error.data.message);
      toast.error(error?.data?.message || "Update division failed");
    }
  };

  const handleCancell = () => {
    router.back();
  };

  const handleClearImage = () => {
    form.resetField("image");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setThumbnail("");
  };

  if (isLoading) return <UpdateDivisionFormSkeleton />;
  if (error) return <ApiErrorPage name="division" />;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Card className="bg-none border-none shadow-none">
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
              name="image"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Thumbnail</FormLabel>
                  <FormControl>
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        const file = e.target.files?.[0];

                        if (file) {
                          field.onChange(file);
                          const previewUrl = URL.createObjectURL(file);
                          setThumbnail(previewUrl);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />

                  {thumbnail && (
                    <div className="mt-2">
                      <div className="flex gap-2 items-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          Preview
                        </p>
                        <Button
                          size="xs"
                          type="button"
                          variant="outline"
                          className="cursor-pointer"
                          onClick={handleClearImage}
                        >
                          <X size={16} />
                        </Button>
                      </div>

                      <Image
                        src={thumbnail}
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
            disabled={updateLoading}
            className={cn("", "cursor-pointer")}
            size="lg"
          >
            {updateLoading ? (
              <>
                <Loader className="size-4 animate-spin" />
                Update Division
              </>
            ) : (
              `Update Division`
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateDivisionForm;
