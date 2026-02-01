"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const emailSchema = z.object({
  email: z
    .string({ error: "Email is required" })
    .email("Invalid email address"),
});
type VerifyEmailFormValues = z.infer<typeof emailSchema>;
const VerifyEmailForm = () => {
  const router = useRouter();
  const form = useForm<VerifyEmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: VerifyEmailFormValues) => {
    console.log("values:", values);
    router.push(`/auth/verify-email/verification?email=${values.email}`);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-1">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <FormControl>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                  <Input
                    {...field}
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="cursor-pointer w-full">
          Send Otp
        </Button>

        <div className="text-center">
          <Link
            href="/auth/login"
            className="text-sm text-primary hover:underline"
          >
            Back to Sign In
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default VerifyEmailForm;
