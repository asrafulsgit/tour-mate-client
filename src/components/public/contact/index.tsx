"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import ContactHero from "./Hero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <main className="grow">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Section */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4  ">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
export default ContactPage;
