"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BackButton from "@/components/shared/BackButton";
import VerifyEmailForm from "@/components/auth/verify-email/VerifyEmailForm";

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-2">
              <div className="flex gap-2 items-center">
                <BackButton />
                <CardTitle className="text-xl sm:text-2xl">
                  Email Verification?
                </CardTitle>
              </div>
              <CardDescription>
                 Enter your email address and we'll send you a 6 digit code to verify your email.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <VerifyEmailForm  />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
export default ForgotPassword;
