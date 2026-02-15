import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function TourDetailsSkeleton() {
  return (
    <main className="max-w-7xl sm:px-4">
      {/* Hero Image */}
      <section className="relative w-full h-56 sm:h-96 overflow-hidden">
        <Skeleton className="w-full h-full rounded-none" />
      </section>

      <div className="py-4 sm:py-6 px-2 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title + Meta */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>

              <div className="flex gap-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="p-4 space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-5 w-28" />
                </Card>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>

            {/* Itinerary */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-28" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>

            {/* What's Included */}
            <Card className="p-4 space-y-4">
              <Skeleton className="h-6 w-40" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </Card>

            {/* Amenities */}
            <Card className="p-4 space-y-4">
              <Skeleton className="h-6 w-28" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </Card>

            {/* Guide */}
            <Card className="p-4 space-y-4">
              <Skeleton className="h-6 w-28" />
              <div className="flex items-center gap-4">
                <Skeleton className="w-16 h-16 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT BOOKING SIDEBAR */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="p-6 space-y-4">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-8 w-40" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <div className="flex gap-2">
                  <Skeleton className="h-10 w-10" />
                  <Skeleton className="h-10 flex-1" />
                  <Skeleton className="h-10 w-10" />
                </div>
              </div>

              <Skeleton className="h-6 w-full" />

              <Skeleton className="h-10 w-full rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />

              <Skeleton className="h-12 w-full rounded-lg" />
            </Card>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8 space-y-4">
          <Skeleton className="h-6 w-28" />
        </div>
      </div>
    </main>
  );
}
export default TourDetailsSkeleton;
