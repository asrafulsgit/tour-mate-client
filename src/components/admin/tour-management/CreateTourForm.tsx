"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useGetTourTypesQuery } from "@/redux/features/tourType";
import { Skeleton } from "@/components/ui/skeleton";
import { Combobox } from "@/components/shared/combobox";
import { useGetAllDivisionsQuery } from "@/redux/features/division";
import { DynamicArrayField } from "./ArrayInput";
import { ImageUploadField } from "./MutlipleImageUploader";
import { CreateTourFormValues, createTourSchema } from "./lib/tour-validations";
import { useCrateTourMutation } from "@/redux/features/tour";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetAllGuideApplicationsQuery } from "@/redux/features/guide";

function CreatetourForm() {
  const router = useRouter();

  const form = useForm<CreateTourFormValues>({
    resolver: zodResolver(createTourSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      costFrom: 0,
      startDate: "",
      endDate: "",
      maxGuest: 1,
      minAge: 0,
      division: "",
      tourType: "",
      guide: "",
      included: [],
      amenities: [],
      tourPlan: [],
      images: [],
    },
  });

  const { data: tourTypeData, isLoading: tourTypeLoading } =
    useGetTourTypesQuery();
  const { data: divisionsData, isLoading: divisionsLoading } =
    useGetAllDivisionsQuery();
  const { data: guidesData, isLoading: guidesLoading } =
    useGetAllGuideApplicationsQuery({
      status: "APPROVED",
    });

  const tourTypes =
    tourTypeData?.data?.map((type) => ({
      value: type._id,
      label: type.name,
    })) ?? [];

  const divisions =
    divisionsData?.data?.map((division) => ({
      value: division._id,
      label: division.name,
    })) ?? [];

  const guides =
    guidesData?.data?.map((guide) => ({
      value: guide.userId._id,
      label: `${guide.userId.name} (${guide.divisionId.name})`,
    })) ?? [];

  const today = new Date().toISOString().split("T")[0];
  const startDate = form.watch("startDate");

  const [createTour, { isLoading }] = useCrateTourMutation();

  const onSubmit = async (data: CreateTourFormValues) => {
    try {
      const formData = new FormData();

      // Append simple fields
      Object.entries(data).forEach(([key, value]) => {
        if (!["images", "included", "amenities", "tourPlan"].includes(key)) {
          // Skip empty strings for optional fields
          if (value !== "" && value !== undefined && value !== null) {
            formData.append(key, String(value));
          }
        }
      });

      // Append arrays - extract values from objects
      data.included?.forEach((item) => formData.append("included", item.value));
      data.amenities?.forEach((item) =>
        formData.append("amenities", item.value),
      );
      data.tourPlan?.forEach((item) => formData.append("tourPlan", item.value));

      // Append files
      data?.images?.forEach((file) => formData.append("images", file));

      // API call
      await createTour(formData).unwrap();
      form.reset();
      toast.success("Tour created successfully!");
      handleCancell();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to create tour");
    }
  };

  const handleCancell = () => {
    router.back();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Card className="border-none shadow-none sm:py-2">
          <CardContent className="space-y-4 p-0">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Tour title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tour description"
                      {...field}
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Tour location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="costFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cost From ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      placeholder="0"
                      {...field}
                      onChange={(e) =>
                        field.onChange(e.target.valueAsNumber || 0)
                      }
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} min={today} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} min={startDate || today} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Capacity */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="maxGuest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Guests</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        {...field}
                        onChange={(e) =>
                          field.onChange(e.target.valueAsNumber || 1)
                        }
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="minAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={(e) =>
                          field.onChange(e.target.valueAsNumber || 0)
                        }
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Selections */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="division"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Division</FormLabel>
                    <FormControl>
                      {divisionsLoading ? (
                        <Skeleton className="h-10 w-full rounded-md" />
                      ) : (
                        <Combobox
                          options={divisions}
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Select division"
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tourType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tour Type</FormLabel>
                    <FormControl>
                      {tourTypeLoading ? (
                        <Skeleton className="h-10 w-full rounded-md" />
                      ) : (
                        <Combobox
                          options={tourTypes}
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Select tour type"
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="guide"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assign Guide</FormLabel>
                  <FormControl>
                    {guidesLoading ? (
                      <Skeleton className="h-10 w-full rounded-md" />
                    ) : (
                      <Combobox
                        options={guides}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select guide"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dynamic Arrays */}
            <DynamicArrayField
              name="included"
              label="Included Items"
              placeholder="e.g., Breakfast, Hotel pickup"
            />

            <DynamicArrayField
              name="amenities"
              label="Amenities"
              placeholder="e.g., WiFi, AC, Pool"
            />

            <DynamicArrayField
              name="tourPlan"
              label="Tour Plan"
              placeholder="Describe day's activities"
              useTextarea
            />

            {/* Images */}
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <ImageUploadField
                  value={field.value ?? []}
                  onChange={field.onChange}
                />
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
            onClick={handleCancell}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className={cn("", "cursor-pointer")}
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader className="size-4 animate-spin" />
                Create Tour
              </>
            ) : (
              `Create Tour`
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreatetourForm;
