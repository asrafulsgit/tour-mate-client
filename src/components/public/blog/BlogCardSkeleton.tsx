import { Skeleton } from "@/components/ui/skeleton";

function BlogCardSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="border border-border rounded-lg overflow-hidden"
        >
          {/* Thumbnail Area */}
          <div className="p-6 h-40 flex items-center justify-center bg-muted">
            <Skeleton className="h-16 w-16 rounded-md" />
          </div>

          {/* Content */}
          <div className="p-3 sm:p-6">
            {/* Category Badge */}
            <div className="mb-3">
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            {/* Title */}
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-3/4 mb-4" />

            {/* Description */}
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-4" />

            {/* Date */}
            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="h-4 w-4 rounded-sm" />
              <Skeleton className="h-4 w-28" />
            </div>

            {/* Read More */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-4 rounded-sm" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default BlogCardSkeleton;
