import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const AboutCTA = () => {
  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
        <h2 className="heading text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-6">
          Join Our Community
        </h2>
        <p className=" sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're a traveler seeking authentic experiences or a guide
          ready to share your passion, we'd love to have you join us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/tours">
              Explore Tours
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/become-a-guide">
              Become a Guide
              <ArrowRight size={18}  />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
