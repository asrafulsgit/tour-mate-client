"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import OtpForm from "./OtpInput";
import { useSearchParams } from "next/navigation";

function Verification() {
  const params = useSearchParams();
  const email = params.get("email");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {!submitted ? (
            <Card>
              <CardHeader className="space-y-2 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Verify Your Email</CardTitle>
                <CardDescription>
                  We've sent a verification code to <strong>{email}</strong>
                </CardDescription>
              </CardHeader>

              <CardContent>
                {email && (
                  <OtpForm
                    onFormSubmit={() => setSubmitted(true)}
                    email={email}
                  />
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="space-y-2 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Email Verified!</CardTitle>
                <CardDescription>
                  Your email has been successfully verified.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-foreground font-medium mb-2">
                    You're all set!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Your account is now fully verified. You can start exploring
                    tours and booking experiences.
                  </p>
                </div>

                <Button className="w-full" asChild>
                  <Link href="/auth/login">Back to signin</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
export default Verification;
