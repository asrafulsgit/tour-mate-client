"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { useSendOtpMutation, useVerifyOtpMutation } from "@/redux/features/otp";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const otpSchema = z.object({
  otp: z.string().length(6, "Verification code must be 6 digits"),
});

type OtpFormValues = z.infer<typeof otpSchema>;

function OtpForm({
  onFormSubmit,
  email,
}: {
  onFormSubmit: () => void;
  email: string;
}) {
  const router = useRouter();
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const [verifyOtp, { isLoading, error, data }] = useVerifyOtpMutation();

  const onSubmit = async (values: OtpFormValues) => {
    const payload = {
      ...values,
      email,
    };
    try {
      await verifyOtp(payload).unwrap();
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message || "Failed to verify OTP");
    }
  };

  const [sendOtp, { isLoading: resendLoading }] = useSendOtpMutation();

  const handleResend = async () => {
    form.reset({ otp: "" });
    try {
      await sendOtp({ email }).unwrap();
      toast.success("Otp resend successfull");
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message || "Failed to send OTP");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* OTP Input */}
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <Label>Verification Code</Label>
              <FormControl>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} {...field} className="gap-2">
                    <InputOTPGroup>
                      {[...Array(6)].map((_, i) => (
                        <InputOTPSlot
                          key={i}
                          index={i}
                          className="h-12 w-12 text-xl"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </FormControl>
              <p className="text-xs text-muted-foreground text-center">
                Enter the 6-digit code sent to your email
              </p>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          className={cn("", "w-full cursor-pointer")}
          disabled={form.watch("otp").length !== 6 || isLoading}
        >
          {isLoading ? (
            <>
              <Loader className="size-4 animate-spin" />
              Verify Email
            </>
          ) : (
            `Verify Email`
          )}
        </Button>

        {/* Resend */}
        <div className="space-y-2">
          <p className="text-center text-sm text-muted-foreground">
            Didn’t receive a code?
          </p>

          <Button
            type="button"
            variant="outline"
            className={cn("", "w-full bg-transparent cursor-pointer")}
            onClick={handleResend}
            disabled={resendLoading}
          >
            {resendLoading ? (
              <>
                <Loader className="size-4 animate-spin" />
                Resend Code
              </>
            ) : (
              <>
                <RotateCcw className="mr-2 h-4 w-4" />
                Resend Code
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default OtpForm;
