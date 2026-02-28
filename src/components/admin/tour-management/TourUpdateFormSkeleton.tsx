import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function TourUpdateFormSkeleton() {
  return (
    <div className="space-y-4">
      <Card className="border-none shadow-none sm:py-2">
        <CardContent className="space-y-6 p-0">

          {/* Title */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-24 w-full rounded-md" />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Cost */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            ))}
          </div>

          {/* Capacity */}
          <div className="grid grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            ))}
          </div>

          {/* Select Fields */}
          <div className="grid grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            ))}
          </div>

          {/* Guide */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Dynamic Array Sections */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-5 w-36" />
              {[...Array(2)].map((__, j) => (
                <Skeleton
                  key={j}
                  className="h-10 w-full rounded-md"
                />
              ))}
              <Skeleton className="h-8 w-28 rounded-md" />
            </div>
          ))}

          {/* Image Upload */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-28 w-full rounded-lg" />
          </div>

          {/* Image Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="aspect-square rounded-lg"
              />
            ))}
          </div>

        </CardContent>
      </Card>

      {/* Form Actions */}
      <div className="flex justify-end gap-4 px-4">
        <Skeleton className="h-11 w-28 rounded-md" />
        <Skeleton className="h-11 w-36 rounded-md" />
      </div>
    </div>
  );
}