"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const BecomeAGuideApplicationForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };
  return (
    <section className="py-8 sm:py-16 bg-card border-y border-border">
      <div className="max-w-2xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6 sm:mb-12 text-center">
          Apply Now
        </h2>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStep === 1 && (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div> 
                </>
              )} 
              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Submit Application
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BecomeAGuideApplicationForm;
