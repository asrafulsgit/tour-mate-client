import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSendOtpMutation, useVerifyOtpMutation } from "@/redux/features/auth/auth.api";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const EmailSchema = z.object({
  email: z.email()
});

export function VerifyForm() {
  const [sendOtp]= useSendOtpMutation(); 
  const [verifyOtp]= useVerifyOtpMutation(); 
  const {state} = useLocation();
  const navigate = useNavigate();
  const [email,setEmail]= useState(state);
  const [isConfirm,setIsConfirm]=useState(false);
  
  useEffect(()=>{
      if(!email){
        navigate('/');
      }
  },[email])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const emailForm = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: email,
    },
  });

  const onSubmit=async(data: z.infer<typeof FormSchema>)=> {
    const verifyInfo = {
      otp : data.pin,
      email
    }
    try {
      await verifyOtp(verifyInfo).unwrap();
      toast.success('Account verification successfully'); 
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }
  const onSubmitEmail=async(data: z.infer<typeof EmailSchema>)=>{
    try {
      await sendOtp(data).unwrap();
      toast.success('Email sent successfully');
      setIsConfirm((prev)=> !prev);
    } catch (error) {
      console.log(error);
    }
  }

 

  return (

    isConfirm ? (
    <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-center space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-center items-center">
                <FormLabel>One-Time Password</FormLabel>
                <FormControl className="text-center">
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      ) : (
      
      <Form {...emailForm}>
                  <form onSubmit={emailForm.handleSubmit(onSubmitEmail)} 
                  className="w-[300px]">
                    <FieldGroup>
                      <div className="flex flex-col items-center gap-2 text-center">
                      <h1 className="text-2xl font-bold">Verify Your account</h1>
                      <p className="text-muted-foreground text-balance">
                        Verification code will be send your email
                      </p>
                    </div>
                      <FormField
                        control={emailForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="m@example.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
               
                       
                      
                      <Field>
                        <Button type="submit" className="cursor-pointer">
                          Send
                        </Button>
                      </Field>
      
                    </FieldGroup>
                  </form>
                </Form>
      )
      
  );
}
