"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

const GoogleSuccessfull = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (accessToken && refreshToken) {
      Cookies.set("accessToken", accessToken, {
        expires: 7,
        path: "/",
        secure: true,
        sameSite: "none",
      });

      Cookies.set("refreshToken", refreshToken, {
        expires: 30,
        path: "/",
        secure: true,
        sameSite: "none",
      });
      router.push("/");
    } else {
      router.push("/auth/google/failed");
    }
  }, [searchParams, router]);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">
                Google login successfull
              </CardTitle>
              <CardDescription>
                <strong>{email}</strong>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GoogleSuccessfull;
