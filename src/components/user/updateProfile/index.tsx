"use client";
import BackButton from "@/components/shared/BackButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MOCK_USERS, User as IUser } from "@/mock/users";
import { CheckCircle2, Mail, Phone, Save, User } from "lucide-react";
import React, { useState } from "react";

const UpdateProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "Sarah Johnson",
    phone: "+1-555-0100",
    bio: "Travel enthusiast and adventure seeker. Love exploring new cultures and meeting people from around the world.",
  });
  const user: IUser = MOCK_USERS[0];
  const [isSaving, setIsSaving] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Profile updated successfully!");
    }, 1000);
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

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <User size={16} className="inline mr-2" />
              Full Name
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Email (Locked) */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <Mail size={16} className="inline mr-2" />
              Email (Cannot be changed)
            </label>
            <Input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full bg-muted"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <Phone size={16} className="inline mr-2" />
              Phone Number
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell us about yourself..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving} className="flex-1">
              <Save size={16} className="mr-2" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default UpdateProfilePage;
