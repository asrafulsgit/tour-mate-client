"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle2, Loader } from "lucide-react";
import { MOCK_USERS, User as IUser } from "@/mock/users";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import UserHeader from "../UserHeader";
import { useGetUserQuery, useUpdateUserMutation } from "@/redux/features/user";
import UserProfileSkeleton from "./ProfileSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { format } from "date-fns";
import { Role } from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export const profileSchema = z.object({
  picture: z
    .instanceof(File, { message: "Image is required" })
    .refine((file) => file.size <= 1 * 1024 * 1024, {
      message: "Max file size is 1MB",
    })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only image files are allowed",
    }),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;

function ProfilePage() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  const { data, isLoading, isError } = useGetUserQuery();
  const [updateUser, { isLoading: updatePictureLoading }] =
    useUpdateUserMutation();
  const user = data?.data;
  if (isLoading) return <UserProfileSkeleton />;
  if (isError) return <ApiErrorPage name="User profile" />;
  const onSubmit = async (data: ProfileFormValues) => { 
    if (!user?._id) return toast.error("User Id is not found");
    try {
      const formData = new FormData();
      formData.append("image", data.picture);
      await updateUser({
        id: user?._id,
        data: formData,
      }).unwrap();
    } catch (error: any) {
      console.error(error.data.message);
      toast.error(error.data.message || "Profile update failed!")
    }
  };
  return (
    <main className="grow">
      {/* Profile Header */}
      <UserHeader
        title="My Profile"
        subTitle="Manage your account and personal information"
      />

      {/* Profile Content */}
      <section className="py-4 sm:py-8">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-4">
          <div className="lg:col-span-1">
            <Card className="p-6 text-center gap-0">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="picture"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative w-32 h-32 mx-auto">
                          <Image
                            src={user?.picture || "uploads/image.jpg"}
                            alt="Preview"
                            fill
                            sizes="128px"
                            className="rounded-full object-cover border-4 border-primary/20"
                          />
                          <label className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-2 rounded-full cursor-pointer hover:bg-primary/90 transition">
                            {updatePictureLoading ? <Loader className="size-4 animate-spin" /> : <Camera size={16} />}
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  field.onChange(file);
                                  form.handleSubmit(onSubmit)();
                                }
                              }}
                            />
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Form>
              <h2 className="text-xl font-bold text-foreground mb-1">
                {user?.name}
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge
                  variant={
                    user?.role === Role.USER
                      ? "default"
                      : user?.role === "GUIDE"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {user?.role}
                </Badge>
                <Badge variant={user?.isVerified ? "secondary" : "destructive"}>
                  <CheckCircle2 size={14} />
                  {user?.isVerified ? "Verified" : "Unverified"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Member since{" "}
                {user?.createdAt &&
                  format(new Date(user.createdAt), "dd MMM yyyy")}
              </p>
              <Link href="/user/profile/update">
                <Button variant="default" className={cn("", "cursor-pointer")}>
                  Edit Profile
                </Button>
              </Link>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="space-y-4 sm:space-y-6">
                <CardTitle>Account Information</CardTitle>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <Label>Full Name</Label>
                  <p className="text-foreground sm:text-lg">{user?.name}</p>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label>Email</Label>
                  <div className="flex items-center gap-2">
                    <p className="text-foreground sm:text-lg">{user?.email}</p>
                    <CheckCircle2 size={18} className="text-green-600" />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label>Phone Number</Label>
                  <p className="text-foreground sm:text-lg">{user?.phone}</p>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label>Address</Label>
                  <p className="text-foreground sm:text-lg">{user?.address}</p>
                </div>

                {/* Bio */}
                <div className="space-y-1.5">
                  <Label>Bio</Label>
                  {/* <p className="text-foreground text-base leading-relaxed">
                    {user?.bio}
                  </p> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
export default ProfilePage;
