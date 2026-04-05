"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import { TourCard } from "@/components/shared/TourCard";
import { Button } from "@/components/ui/button"; 
import { useGetAllToursQuery } from "@/redux/features/tour";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ToursSkeleton from "../tours/ToursSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";

const FeaturedTours = () => {
  return (
    <section className="py-10 sm:py-15">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
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
            <Link href="/tours">
              View All Tours
              <ArrowRight size={18} className="ml-1.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3 md:gap-6">
          <Tours />
        </div>

        <div className="flex sm:hidden mt-8">
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/tours">
              View All Tours
              <ArrowRight size={18} className="ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Tours = () => {
  const { data, isLoading, error } = useGetAllToursQuery({
    limit: 6,
  });
  if (isLoading ) return <ToursSkeleton />;
  if (error) return <ApiErrorPage name="Fetured tours" isButton={false} />;
  return data?.data.map((tour) => <TourCard key={tour._id} tour={tour} />);
};

export default FeaturedTours;
