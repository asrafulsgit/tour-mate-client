"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import BackButton from "@/components/shared/BackButton";

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {!submitted ? (
            <Card>
              <CardHeader className="space-y-2">
                <div className="flex gap-2 items-center">
                    <BackButton />
                <CardTitle className="text-xl sm:text-2xl">Forgot Password?</CardTitle>
                </div>
                <CardDescription>
                  Enter your email address and we'll send you a link to reset
                  your password.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ForgotPasswordForm
                  onFormSubmit={() => setSubmitted(true)}
                  onEmail={(email: string) => setEmail(email)}
                />
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
                <CardTitle className="text-2xl">Check Your Email</CardTitle>
                <CardDescription>
                  We've sent a password reset link to <strong>{email}</strong>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    What's next?
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Check your email for the reset link</li>
                    <li>• Click the link to create a new password</li>
                    <li>• Return here to sign in with your new password</li>
                  </ul>
                </div>

                <Button
                  className="w-full bg-transparent"
                  variant="outline"
                  asChild
                >
                  <Link href="/auth/login">Back to Sign In</Link>
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Didn't receive an email?{" "}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary hover:underline"
                  >
                    Try again
                  </button>
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
export default ForgotPassword;
