"use client";
import { Button } from "@/components/ui/button";
const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`;
  };
  return (
    <Button
      variant="outline"
      onClick={handleGoogleLogin}
      className="cursor-pointer w-full bg-transparent"
    >
      Google
    </Button>
  );
};

export default GoogleLogin;
