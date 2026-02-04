import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 

const BlogSubscribe = () => {
  return (
    <section className="py-8 sm:py-16 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
        <h2 className="heading text-2xl sm:text-4xl font-bold mb-4">
          Never Miss a Story
        </h2>
        <p className="sm:text-lg mb-8 opacity-90">
          Subscribe to our blog for the latest travel tips, guides, and stories
          delivered to your inbox.
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
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default BlogSubscribe;
