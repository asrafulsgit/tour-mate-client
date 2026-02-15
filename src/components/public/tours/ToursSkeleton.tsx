import { Skeleton } from "@/components/ui/skeleton";

function ToursSkeleton({ count = 6 }: { count?: number }) {
  return Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      className="bg-card rounded-lg overflow-hidden border border-border h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Skeleton className="w-full h-full" />
        <Skeleton className="absolute top-3 right-3 h-6 w-20 rounded-full" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow space-y-3">
        {/* Title */}
        <Skeleton className="h-5 w-3/4" />

        {/* Description */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />

        {/* Location */}
        <Skeleton className="h-4 w-1/2" />

        {/* Meta Row */}
        <div className="flex gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-12" />
        </div>

        {/* Included */}
        <div className="pb-4 border-b border-border space-y-2">
          <Skeleton className="h-3 w-20" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-10 rounded-full" />
          </div>
        </div>

        {/* Price & Reviews */}
        <div className="flex justify-between items-center mt-auto">
          <div className="space-y-2">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  ));
}
export default ToursSkeleton;
