"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader, Send } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useSendMessageMutation } from "@/redux/features/contact";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [sendMessage, { isLoading, error, data }] = useSendMessageMutation();

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    try {
      await sendMessage(data).unwrap();
      toast.success("Thank you! We've received your message");
      form.reset();
    } catch (err: any) {
      console.error(err);
      toast.error(err.data.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <label className="block text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <label className="block text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <label className="block text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <FormControl>
                      <Input placeholder="What is this about?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <label className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className={cn("","w-full cursor-pointer")} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader className="size-4 animate-spin" />
                    Send Message
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
