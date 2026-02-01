import SectionHeader from "@/components/shared/SectionHeader";
import { TourCard } from "@/components/shared/TourCard";
import { Button } from "@/components/ui/button";
import { mockTours } from "@/mock/tours";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedTours = () => {
  const featuredTours = mockTours.slice(0, 6);
  return (
    <section className="py-10 sm:py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <SectionHeader
            title="Featured Tours"
            subTitle="Explore our most popular experiences"
          />
          <Button
            variant="outline"
            asChild
            className="hidden sm:flex bg-transparent"
          >
            <Link href="/tour">
              View All Tours
              <ArrowRight size={18} className="ml-1.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="flex sm:hidden mt-8">
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/tour">
              View All Tours
              <ArrowRight size={18} className="ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
