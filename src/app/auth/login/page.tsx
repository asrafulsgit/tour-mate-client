  
import SigninForm from "@/components/auth/signin/SigninForm";
import GoogleLogin from "@/components/auth/signup/GoogleLogin";
import Logo from "@/components/shared/Logo";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; 
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md p-4 sm:p-8">
        {/* Header */}
        <div className="text-center  sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Logo />
            <Title />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue exploring
          </p>
        </div>

        <SigninForm />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Signup */}
         <GoogleLogin />

        {/* Sign up Link */}
        <p className="text-center text-muted-foreground text-sm">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-primary hover:text-primary/80 transition font-medium"
          >
            Sign Up
          </Link>
        </p> 
      </Card>
    </div>
  );
};

export default page;
