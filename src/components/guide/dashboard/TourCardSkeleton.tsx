import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TourCardsSkeleton = ({length}:{length:number}) => {
  return Array.from({ length }).map((_, index) => (
    <Card key={index} className="p-3 sm:p-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-6">
        {/* Image Skeleton */}
        <div className="relative h-40 rounded-lg overflow-hidden md:col-span-1">
          <Skeleton className="h-full w-full rounded-lg" />
        </div>

        {/* Details Skeleton */}
        <div className="md:col-span-3">
          {/* Title & Location */}
          <div className="flex items-start justify-between mb-3">
            <div className="space-y-2 w-full">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex gap-3">
            <Skeleton className="h-9 w-28 rounded-md" />
          </div>
        </div>
      </div>
    </Card>
  ));
};

export default TourCardsSkeleton;
