"use client";
import {
  GuideApplicationFormValues,
  guideApplicationSchema,
} from "@/components/public/become-a-guide/ApplicationForm";
import { Combobox } from "@/components/shared/combobox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useGetAllDivisionsQuery } from "@/redux/features/division";
import { useApplyGuideMutation } from "@/redux/features/guide";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Upload } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ApplicationForm = ({
  onHandleStatus,
}: {
  onHandleStatus: () => void;
}) => {
  const form = useForm<GuideApplicationFormValues>({
    resolver: zodResolver(guideApplicationSchema),
    defaultValues: {
      divisionId: "",
      images: [],
    },
  });

  const {
    data,
    isLoading: divisionsLoading,
    error,
  } = useGetAllDivisionsQuery();
  const divisions = data?.data;

  const [applyGuide, { isLoading }] = useApplyGuideMutation();
  const onSubmit = async (data: GuideApplicationFormValues) => {
    try {
      const formData = new FormData();
      formData.append("divisionId", data.divisionId);
      data.images.forEach((file) => formData.append("images", file));
      await applyGuide(formData).unwrap();
      onHandleStatus();
      toast.success("Application Submitted");
    } catch (err: any) {
      toast.error(err.data.message || "Something went wrong!");
    }
  };

  return (
    <Card className="p-4 sm:p-8 gap-3 sm:gap-6">
      <h2 className="text-xl font-bold text-foreground">
        Guide Application Form
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6"
        >
          {/* Division */}
          {divisionsLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full rounded-md" />{" "}
            </div>
          ) : (
            <FormField
              control={form.control}
              name="divisionId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Division</FormLabel>
                  <FormControl>
                    <Combobox
                      options={
                        divisions?.map((division) => ({
                          value: division._id,
                          label: division.name,
                        })) ?? []
                      }
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select Division"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* NID Front Upload */}
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Upload NID Front & Back{" "}
                  <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-4">
                    {[0, 1].map((index) => (
                      <div
                        key={index}
                        className="border-2 border-dashed rounded-lg p-4 sm:p-8 text-center hover:border-primary transition"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          id={`nid-upload-${index}`}
                          onChange={(e) => {
                            const files = Array.from(field.value || []);
                            files[index] = e.target.files?.[0];
                            field.onChange(files);
                          }}
                        />
                        <label
                          htmlFor={`nid-upload-${index}`}
                          className="cursor-pointer block"
                        >
                          <Upload
                            size={32}
                            className="mx-auto mb-2 text-muted-foreground"
                          />
                          <p className="font-medium mb-1">
                            Click to upload{" "}
                            {index === 0 ? "NID Front" : "NID Back"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PNG, JPG up to 5MB
                          </p>
                          {field.value?.[index] && (
                            <p className="text-sm text-green-600 mt-2">
                              ✓ {field.value[index].name}
                            </p>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="flex gap-3 sm:pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className={cn("", "flex-1 cursor-pointer")}
            >
              {isLoading ? (
                <>
                  <Loader className="size-4 animate-spin" />
                  Submit Application
                </>
              ) : (
                `Submit Application`
              )}
            </Button>

            <Link href="/" className="flex-1">
              <Button
                type="button"
                variant="outline"
                className={cn("", "w-full cursor-pointer")}
              >
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ApplicationForm;
