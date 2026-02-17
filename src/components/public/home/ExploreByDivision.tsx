"use client";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import SectionHeader from "@/components/shared/SectionHeader";
import { useGetDivisionsWithTourCountQuery } from "@/redux/features/division";
import Image from "next/image";
import Link from "next/link";
import DivisionCardSkeleton from "./DivisionSectionSkeleton";

const ExploreByDivision = () => {
  return (
    <section className="py-10 sm:py-15 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <SectionHeader
          title="Explore by Division"
          subTitle="Discover amazing experiences across Bangladesh"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <Divisions />
        </div>
      </div>
    </section>
  );
};

const Divisions = () => {
  const { data, isLoading, error } = useGetDivisionsWithTourCountQuery();
  const divisions = data?.data;

  if (isLoading) return <DivisionCardSkeleton />;
  if (error) return <ApiErrorPage name="Divisions" />;
  return divisions?.map((division) => (
    <Link
      key={division._id}
      href={`/tours?division=${division._id}`}
      className="group relative overflow-hidden rounded-lg border border-border bg-background hover:border-primary transition cursor-pointer h-56"
    >
      {/* Thumbnail Image */}
      <Image
        src={division.thumbnail || "/placeholder.svg"}
        alt={division.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-1">{division.name}</h3>
      </div>
    </Link>
  ));
};

export default ExploreByDivision;
