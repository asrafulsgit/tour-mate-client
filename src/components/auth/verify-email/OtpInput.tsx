"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RotateCcw } from "lucide-react";

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

const otpSchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
});

type OtpFormValues = z.infer<typeof otpSchema>;

function OtpForm({ onFormSubmit,email }: { onFormSubmit: () => void,email : string }) {

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (values: OtpFormValues) => {
    const payload = {
      ...values,
      email,
    };
    console.log("OTP:", payload);
    onFormSubmit();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* OTP Input */}
        <FormField
          control={form.control}
          name="code"
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
          className="w-full"
          disabled={form.watch("code").length !== 6}
        >
          Verify Email
        </Button>

        {/* Resend */}
        <div className="space-y-2">
          <p className="text-center text-sm text-muted-foreground">
            Didn’t receive a code?
          </p>

          <Button
            type="button"
            variant="outline"
            className="w-full bg-transparent"
            onClick={() => form.reset({ code: "" })}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Resend Code
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default OtpForm;
