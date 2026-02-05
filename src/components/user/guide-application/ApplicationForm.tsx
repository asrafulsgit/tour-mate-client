"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockDivisions } from "@/mock/divisions";
import { AlertCircle, Upload } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    division: "",
    experience: "",
    nidPhoto: null as File | null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, nidPhoto: file }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.division) {
      newErrors.division = "Please select a division";
    }
    if (!formData.experience || formData.experience.length < 20) {
      newErrors.experience =
        "Please provide at least 20 characters describing your experience";
    }
    if (!formData.nidPhoto) {
      newErrors.nidPhoto = "Please upload your NID photo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <Card className="p-4 sm:p-8 gap-3 sm:gap-6">
      <h2 className="text-xl font-bold text-foreground">
        Guide Application Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Division Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Select Division <span className="text-red-600">*</span>
          </label>
          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.division ? "border-red-500" : "border-border"
            }`}
          >
            <option value="">Choose a division...</option>
            {mockDivisions.map((div) => (
              <option key={div.id} value={div.name}>
                {div.name}, {div.country}
              </option>
            ))}
          </select>
          {errors.division && (
            <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.division}
            </p>
          )}
        </div>

        {/* NID Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Upload NID Photo <span className="text-red-600">*</span>
          </label>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition cursor-pointer ${
              errors.nidPhoto
                ? "border-red-500 bg-red-50"
                : "border-border hover:border-primary"
            }`}
          >
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              id="nid-upload"
            />
            <label htmlFor="nid-upload" className="cursor-pointer block">
              <Upload
                size={32}
                className="mx-auto mb-2 text-muted-foreground"
              />
              <p className="font-medium text-foreground mb-1">
                Click to upload NID photo
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG up to 5MB
              </p>
              {formData.nidPhoto && (
                <p className="text-sm text-green-600 font-medium mt-2">
                  ✓ {formData.nidPhoto.name}
                </p>
              )}
            </label>
          </div>
          {errors.nidPhoto && (
            <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.nidPhoto}
            </p>
          )}
        </div>

        {/* Agreement */}
        <div className="bg-muted p-4 rounded-lg">
          <div className="flex gap-3">
            <input
              type="checkbox"
              id="agreement"
              required
              className="w-4 h-4 mt-1 shrink-0"
            />
            <label htmlFor="agreement" className="text-sm text-foreground">
              I agree to TourMate's Guide Terms and Conditions.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-3 sm:pt-4">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
          <Link href="/dashboard" className="flex-1">
            <Button
              type="button"
              variant="outline"
              className="w-full bg-transparent"
            >
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default ApplicationForm;
