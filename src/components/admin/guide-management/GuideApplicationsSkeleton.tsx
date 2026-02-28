import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

interface GuideApplicationCardsSkeletonProps {
  count?: number;
}

export default function GuideApplicationsSkeleton({
  count = 3,
}: GuideApplicationCardsSkeletonProps) {
  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, i) => (
        <Card key={i} className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start justify-between">

            {/* Left Content */}
            <div className="grow">

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="h-6 w-6 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-52" />
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-4 mb-4">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="space-y-2">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex sm:flex-col gap-2 mt-4 sm:mt-0">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </div>

          </div>
        </Card>
      ))}
    </div>
  );
}