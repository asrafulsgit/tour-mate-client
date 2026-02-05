"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle2 } from "lucide-react";
import { MOCK_USERS, User as IUser } from "@/mock/users";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import UserHeader from "../UserHeader";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "Sarah Johnson",
    phone: "+1-555-0100",
    bio: "Travel enthusiast and adventure seeker. Love exploring new cultures and meeting people from around the world.",
  });
  const user: IUser = MOCK_USERS[0];

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
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={user?.avatar || "https://via.placeholder.com/150"}
                  alt={user?.name}
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                />
                <button className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition">
                  <Camera size={16} />
                </button>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-1">
                {user?.name}
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="secondary">Member</Badge>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle2 size={14} className="mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Member since {user?.joinDate}
              </p>
              <Link href="/user/profile/update">
                <Button variant="default">Edit Profile</Button>
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
                  <p className="text-foreground sm:text-lg">{formData.name}</p>
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
                  <p className="text-foreground sm:text-lg">{formData.phone}</p>
                </div>

                {/* Bio */}
                <div className="space-y-1.5">
                  <Label>Bio</Label>
                  <p className="text-foreground text-base leading-relaxed">
                    {formData.bio}
                  </p>
                </div>

                {/* Danger Zone */}
                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    Danger Zone
                  </h4>
                  <Button
                    variant="destructive"
                    className="w-full justify-start"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
