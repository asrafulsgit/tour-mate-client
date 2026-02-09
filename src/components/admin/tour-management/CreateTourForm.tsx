"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const tourSchema = z.object({
  title: z.string({ error: "Title is required" }),
  description: z.string({ error: "Description is required" }),
});
type TourFormValues = z.infer<typeof tourSchema>;

function CreatetourForm() {
  const router = useRouter();

  const form = useForm<TourFormValues>({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: TourFormValues) => {
    console.log("tour values:", values);
  };

  const handleCancell = () => {
    router.back();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Card className="bg-none border-none shadow-none">
          <CardContent className="space-y-4 p-0 ">
            {/* title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <Input placeholder="Enter tour title" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <Input placeholder="Enter tour description" {...field} />
                  <FormMessage />
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
            onClick={handleCancell}
          >
            Cancel
          </Button>
          <Button type="submit" size="lg">
            Create Tour
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreatetourForm;
