import GoogleLogin from "@/components/auth/signup/GoogleLogin";
import SignupForm from "@/components/auth/signup/SignupForm";
import Logo from "@/components/shared/Logo";
import Title from "@/components/shared/Title"; 
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md p-4 sm:p-8">
        {/* Header */}
        <div className="text-center sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Logo />
            <Title />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Create Your Account
          </h1>
          <p className="text-muted-foreground">
            Start exploring amazing tours today
          </p>
        </div>

        <SignupForm />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">
              Or sign up with
            </span>
          </div>
        </div>

        {/* Social Signup */}
        <GoogleLogin />

        {/* Sign In Link */}
        <p className="text-center text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-primary hover:text-primary/80 transition font-medium"
          >
            Sign In
          </Link>
        </p>

        {/* Benefits */}
        <div className=" pt-8 border-t border-border">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="text-primary shrink-0 mt-0.5"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Easy Booking
                </p>
                <p className="text-xs text-muted-foreground">
                  Book tours in just a few clicks
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="text-primary  shrink-0 mt-0.5"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Expert Guides
                </p>
                <p className="text-xs text-muted-foreground">
                  Connect with local experts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="text-primary shrink-0 mt-0.5"
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Safe & Secure
                </p>
                <p className="text-xs text-muted-foreground">
                  Your bookings are protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
