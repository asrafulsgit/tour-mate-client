"use client";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import GuideCard from "./GuideCard";
import ReviewCard from "./ReviewCard";
import BookingCard from "./BookingCard";
import { useGetTourDetailsQuery } from "@/redux/features/tour";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { useGetReviewsQuery } from "@/redux/features/review";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import TourDetailsSkeleton from "./TourDetailsSkeleton";
import ReviewSkeleton from "./ReviewSkeleton"; 

function TourDetailPage() {
  const params = useParams();
  const tourId = params.id as string;
  const { data, isLoading, error } = useGetTourDetailsQuery(tourId);
  const tour = data?.data;
  if (isLoading) return <TourDetailsSkeleton />;
  if (error) return <ApiErrorPage name="Tour details" />;

  return (
    <main className="grow max-w-7xl mx-auto sm:px-4">
      {/* Hero Image */}
      <section className="relative w-full h-56 sm:h-96 md:h-96 overflow-hidden">
        <Image
          src={tour?.images[0] || "uploads/image.jpg"}
          alt={tour?.title || "tour thumnail"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
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
                    {tour?.title}
                  </h1>
                  <Badge
                    className="text-xs sm:text-base bg-accent 
                text-accent-foreground"
                  >
                    {tour?.tourType.name}
                  </Badge>
                </div>

                <div
                  className="flex 
              items-center gap-2 sm:gap-4 text-xs sm:text-sm 
              text-muted-foreground mb-4"
                >
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{tour?.location}</span>
                  </div>
                  <div className="flex items-center gap-1 min-w-25">
                    <Star size={16} className="fill-accent text-accent" />
                    <span className="text-foreground font-semibold">
                      {tour?.rating}
                    </span>
                    <span>({tour?.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 sm:mb-8 pb-4 sm:pb-8 border-b border-border">
                <Card className="gap-0 sm:py-4">
                  <CardHeader className="sm:px-4">
                    <CardTitle className="text-xs text-muted-foreground">
                      Tour Dates
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="heading text-sm font-semibold text-foreground sm:px-4">
                    {tour?.startDate &&
                      format(new Date(tour?.startDate), "MMM dd, yyyy")}{" "}
                    -{" "}
                    {tour?.endDate &&
                      format(new Date(tour?.endDate), "MMM dd, yyyy")}
                  </CardContent>
                </Card>

                <Card className="gap-0 sm:py-4">
                  <CardHeader className="sm:px-4">
                    <CardTitle className="text-xs text-muted-foreground">
                      Max Guests
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="heading text-lg font-semibold text-foreground flex items-center gap-2 sm:px-4">
                    <Users size={16} />
                    {tour?.maxGuest}
                  </CardContent>
                </Card>

                <Card className="gap-0 sm:py-4">
                  <CardHeader className="sm:px-4">
                    <CardTitle className="text-xs text-muted-foreground">
                      Minimum Age
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="heading text-lg font-semibold text-foreground sm:px-4">
                    {tour?.minAge}+ years
                  </CardContent>
                </Card>

                <Card className="gap-0 sm:py-4">
                  <CardHeader className="sm:px-4">
                    <CardTitle className="text-xs text-muted-foreground">
                      Cancellation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="heading text-lg font-semibold text-foreground sm:px-4">
                    Free
                  </CardContent>
                </Card>
              </div>

              {/* Description */}
              <div className="mb-4 sm:mb-8">
                <h2
                  className="text-lg sm:text-xl font-bold 
              text-foreground mb-1 sm:mb-2"
                >
                  About This Tour
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {tour?.description}
                </p>
              </div>

              {/* Itinerary */}
              <div className="mb-4 sm:mb-8">
                <h2 className="heading text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-4">
                  Itinerary
                </h2>
                <div className="space-y-2">
                  {tour?.tourPlan.map((dayPlan, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <div
                        className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary text-primary-foreground 
                      rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm"
                      >
                        {index + 1}
                      </div>
                      <div className="grow text-sm sm:text-base">
                        <p className="text-muted-foreground">{dayPlan}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <Card className="mb-4 sm:mb-6 gap-0 sm:gap-1 py-4">
                <CardHeader className="px-4">
                  <CardTitle className="heading text-lg sm:text-xl font-bold text-foreground">
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 px-4">
                  {tour?.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="mb-4 sm:mb-8 gap-0 sm:gap-1 py-4">
                <CardHeader className="px-4">
                  <CardTitle className="heading text-lg sm:text-xl font-bold text-foreground">
                    Amenities
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 px-4">
                  {tour?.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Guide Section */}
              {tour?.guide && <GuideCard guide={tour?.guide} />}
            </div>
            {/* Booking Sidebar */}
            <div className="lg:col-span-1 lg:sticky lg:top-20 lg:h-screen">
              {tour && <BookingCard tour={tour} />}
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
              <Reviews tourId={tourId} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Reviews = ({ tourId }: { tourId: string }) => {
  const { data, isLoading, error } = useGetReviewsQuery(tourId);

  if (isLoading) return <ReviewSkeleton />;
  if (error) return <p>Failed to fetch reviews</p>;
  return data?.data.map((review) => (
    <ReviewCard key={review._id} review={review} />
  ));
};

export default TourDetailPage;
