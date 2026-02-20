import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

function StatsCardsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pb-8">
      {Array.from({ length: count }).map((_, i) => (
        <Card
          key={i}
          className="bg-background rounded-lg border border-border p-4"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              {/* Title */}
              <Skeleton className="h-4 w-24" />

              {/* Value */}
              <Skeleton className="h-8 w-20" />
            </div>

            {/* Icon */}
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default StatsCardsSkeleton;
