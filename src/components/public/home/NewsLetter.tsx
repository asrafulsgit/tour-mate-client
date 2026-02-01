import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading text-3xl sm:text-4xl font-bold mb-4">
          Get Travel Updates & Exclusive Offers
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Subscribe to our newsletter for the latest tours, tips, and special
          promotions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-primary-foreground text-foreground placeholder:text-muted-foreground"
          />
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Subscribe
          </Button>
        </div>
        <p className="text-sm opacity-75 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
