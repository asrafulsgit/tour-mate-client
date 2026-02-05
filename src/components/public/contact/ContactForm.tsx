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
import { Send } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Subject
              </label>
              <Input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 border border-border rounded-md bg-card text-foreground 
                placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                focus:ring-primary"
              />
            </div>

            <Button type="submit" className="w-full">
              <Send size={18} className="mr-2" />
              Send Message
            </Button>

            {submitted && (
              <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded-md text-sm">
                Thank you! We've received your message and will get back to you
                soon.
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
