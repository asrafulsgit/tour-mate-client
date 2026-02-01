import { Button } from "@/components/ui/button";
import Link from "next/link";
const BecomeAGuide = () => {
  return (
    <section className="py-10 sm:py-15 bg-linear-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Become a Guide
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Share your passion for travel and earn money by guiding fellow
          adventurers through your hometown or favorite destinations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 sm:mb-8">
          <Button size="lg" asChild>
            <Link href="/become-a-guide">Apply as a Guide</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/help-center">Learn More</Link>
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-12 text-center">
          <div>
            <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">2,500+</div>
            <p className="text-sm sm:text-base text-muted-foreground">Active Guides</p>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">$500K+</div>
            <p className="text-sm sm:text-base text-muted-foreground">Earned by Guides</p>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">4.8★</div>
            <p className="text-sm sm:text-base text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAGuide;
