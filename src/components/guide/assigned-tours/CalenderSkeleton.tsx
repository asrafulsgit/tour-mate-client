import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ToursCalendarSectionSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
      {/* Calendar Section Skeleton */}
      <div className="md:col-span-1">
        <Card className="p-3 lg:p-6 sticky top-8 space-y-4 lg:space-y-6">
          {/* Calendar Placeholder */}
          <Skeleton className="h-80 w-full rounded-lg" />

          {/* Summary Placeholder */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </Card>
      </div>
    </div>
  );
}
