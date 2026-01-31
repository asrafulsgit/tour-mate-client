"use client";

import React, { useState } from "react"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

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

  const onSubmit = (values: SigninFormValues) => {
    console.log("Signin values:", values);
    router.push("/");
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

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
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
              <span className="text-sm text-muted-foreground">Remember me</span>
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type="submit" className="cursor-pointer w-full py-2 sm:mt-6">
          Sign In
        </Button>
      </form>
    </Form>
  );
}

export default SigninForm;
