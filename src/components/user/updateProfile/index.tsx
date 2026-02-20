"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Phone, Save, MapPin, Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import BackButton from "@/components/shared/BackButton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { useGetUserQuery, useUpdateUserMutation } from "@/redux/features/user";
import { useEffect } from "react";
import ProfileUpateSkeleton from "./ProfileUpdateSkeletonForm";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const profileSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().optional(),
  address: z.string().optional(),
  bio: z.string().max(300, "Bio cannot exceed 300 characters").optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

function EditProfileForm() {
  const router = useRouter();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      bio: "",
    },
  });

  const { data, isLoading, isError } = useGetUserQuery();
  const [updateUser, { isLoading: updateUserLoading }] =
    useUpdateUserMutation();

  const user = data?.data;
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
        bio: "",
      });
    }
  }, [user]);
  if (isLoading) return <ProfileUpateSkeleton />;
  if (isError) return <ApiErrorPage name="Profile edit" />;
  const onSubmit = async (values: ProfileFormValues) => {
    if (!user?._id) return toast.error("User Id is not found");
    try {
      await updateUser({
        id: user?._id,
        data: values,
      }).unwrap();
      toast.success("User updated successfully!");
      router.push("/user/profile");
    } catch (error: any) {
      console.error(error.data.message);
      toast.error("User profile update failed");
    }
  };
  const handleReset = () => {
    form.reset();
    router.back();
  };
  return (
    <section className="py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-4">
        <Card className="p-4 sm:p-6 gap-4">
          <div className="flex gap-2 items-center">
            <BackButton />
            <h3 className="text-lg font-semibold text-foreground">
              Edit Profile Information
            </h3>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <User size={16} className="inline" />
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your full name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email (Disabled) */}
              <FormItem>
                <FormLabel>
                  <Mail size={16} className="inline" />
                  Email (Cannot be changed)
                </FormLabel>
                <FormControl>
                  <Input
                    value={user?.email || ""}
                    disabled
                    className="bg-muted"
                  />
                </FormControl>
              </FormItem>

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Phone size={16} className="inline" />
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        {...field}
                        placeholder="Enter phone number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <MapPin size={16} className="inline" />
                      Address
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              {/* <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        {...field}
                        placeholder="Tell us about yourself..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={handleReset}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={updateUserLoading}
                  className={"flex-1 cursor-pointer"}
                >
                  {isLoading ? (
                    <>
                      <Loader className="size-4 animate-spin" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Save size={16} className="mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}

export default EditProfileForm;
