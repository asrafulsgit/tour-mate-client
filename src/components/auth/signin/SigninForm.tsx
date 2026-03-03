"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Lock, User, Eye, EyeOff, Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/features/auth";
import { toast } from "sonner";
import { CUSTOM_ERROR } from "@/constants/custom_error_code";

const signinSchema = z.object({
  email: z
    .string({ error: "Email is required" })
    .email("Invalid email address"),
  password: z.string({ error: "Password is required" }),

  rememberMe: z.boolean().optional(),
});
type SigninFormValues = z.infer<typeof signinSchema>;

function SigninForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const [loginUser, { isLoading, error, data }] = useLoginMutation();
  const onSubmit = async (values: SigninFormValues) => {
    try {
      await loginUser(values).unwrap();
      toast.success("Signin successfull");
      router.push("/");
    } catch (error: any) {
      if (error.data.code === CUSTOM_ERROR.USER_NOT_VERIFIED) {
        return router.push("/auth/verify-email");
      }
      toast.error(error.data.message || "Something went wrorng!");
    }
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
              <Label className="block text-sm font-medium text-foreground">
                Email Address
              </Label>
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

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label className="block text-sm font-medium text-foreground">
                Password
              </Label>
              <FormControl>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          {/* remember me */}
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-start gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(val) => field.onChange(val)}
                  />
                </FormControl>
                <span className="text-sm text-muted-foreground">
                  Remember me
                </span>
              </FormItem>
            )}
          />
          <Link
            href="/auth/forgot-password"
            className="text-sm text-primary hover:text-primary/80 transition"
          >
            Forgot password?
          </Link>
        </div>
        {/* Submit */}
        <Button
          disabled={isLoading}
          type="submit"
          className="cursor-pointer w-full py-2 sm:mt-6"
        >
          {isLoading ? (
            <>
              <Loader className="size-4 animate-spin" />
              Sign In
            </>
          ) : (
            `Sign In`
          )}
        </Button>
      </form>
    </Form>
  );
}

export default SigninForm;
