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
import { cn } from "@/lib/utils";
import { useCrateSubscriptionMutation } from "@/redux/features/subscription";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const subscriptionFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type SubscriptionFormValues = z.infer<typeof subscriptionFormSchema>;

const NewsLetter = () => {
  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const [createSubscription, { isLoading }] = useCrateSubscriptionMutation();

  const onSubmit = async (data: SubscriptionFormValues) => {
    try {
      await createSubscription(data).unwrap();
      toast.success("Subscription successfull");
      form.reset();
    } catch (err: any) {
      toast.error(err.data.message || "Something went wrong");
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
        <h2 className="heading text-3xl sm:text-4xl font-bold mb-4">
          Get Travel Updates & Exclusive Offers
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Subscribe to our newsletter for the latest tours, tips, and special
          promotions.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center justify-center sm:flex-row gap-2 max-w-lg mx-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1 w-full">
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} 
                      className={cn("","flex-1 bg-primary-foreground text-foreground placeholder:text-muted-foreground")}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                {isLoading ? (
                  <>
                    <Loader className="size-4 animate-spin" />
                    Subscribe
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
          </form>
        </Form>

        <p className="text-sm opacity-75 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
