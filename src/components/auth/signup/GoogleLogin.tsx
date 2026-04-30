"use client";
import { Button } from "@/components/ui/button";
const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/google`;
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
