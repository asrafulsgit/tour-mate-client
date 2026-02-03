"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users, Share2, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { mockReviews, mockTours } from "@/mock/tours";
import BackButton from "@/components/shared/BackButton";
import GuideCard from "./GuideCard";
import ReviewCard from "./ReviewCard";
import BookingCard from "./BookingCard";

function TourDetailPage() {
  const params = useParams();
  const tourId = params.id as string;
  const tour = mockTours.find((t) => t.id === tourId);
  const tourReviews = mockReviews.filter((r) => r.tourId === tourId);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!tour) {
    return (
      <div className="grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Tour not found
          </h1>
          <Button asChild>
            <Link href="/tours">Back to Tours</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="grow max-w-7xl mx-auto sm:px-4">
      {/* Back Button */}
      <div className="py-3 hidden sm:block">
        <BackButton />
      </div>

      {/* Hero Image */}
      <section className="relative w-full h-56 sm:h-96 md:h-96 overflow-hidden">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={isWishlisted ? "bg-red-500 text-white" : ""}
          >
            <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
          </Button>
          <Button size="icon" variant="secondary">
            <Share2 size={20} />
          </Button>
        </div>
      </section>

      <div className="py-4 sm:py-6 px-2 sm:px-0">
        <div className="">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 ">
            <div className="lg:col-span-2">
              {/* Title and Meta */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h1 className="heading text-xl sm:text-3xl  font-bold text-foreground">
                    {tour.title}
                  </h1>
                  <Badge
                    className="text-xs sm:text-base bg-accent 
                text-accent-foreground"
                  >
                    {tour.category}
                  </Badge>
                </div>

                <div
                  className="flex 
              items-center gap-4 text-xs sm:text-sm 
              text-muted-foreground mb-4"
                >
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-accent text-accent" />
                    <span className="text-foreground font-semibold">
                      {tour.rating}
                    </span>
                    <span>({tour.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 
            mb-4  pb-4  border-b border-border"
              >
                <div
                  className="bg-card p-4 rounded-lg border 
              border-border"
                >
                  <p className="text-xs text-muted-foreground mb-1">Duration</p>
                  <p
                    className="text-base sm:text-lg font-semibold 
                text-foreground flex items-center gap-2"
                  >
                    <Clock size={16} />
                    {tour.duration}
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">
                    Group Size
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                    <Users size={16} />
                    {tour.groupSize} max
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4 sm:mb-8">
                <h2
                  className="text-lg sm:text-xl font-bold 
              text-foreground mb-1 sm:mb-2"
                >
                  About This Tour
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {tour.description}
                </p>
              </div>

              {/* Guide Section */}
              <GuideCard tour={tour} />
            </div>
            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <BookingCard tour={tour} />
            </div>
          </div>
          {/* Reviews */}
          <div className="">
            <h2
              className="text-lg sm:text-xl font-bold 
              text-foreground mb-2 sm:mb-3"
            >
              Reviews
            </h2>
            <div className="space-y-2">
              {tourReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TourDetailPage;
