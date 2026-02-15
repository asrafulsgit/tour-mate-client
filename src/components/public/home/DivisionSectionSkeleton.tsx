import { Skeleton } from "@/components/ui/skeleton";

function DivisionCardSkeleton({ count = 8 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-lg border border-border bg-background h-56"
        >
          {/* Image Skeleton */}
          <Skeleton className="absolute inset-0 w-full h-full" />

          {/* Gradient Overlay (keeps same visual layering) */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <Skeleton className="h-7 w-40 bg-white/40" />
          </div>
        </div>
      ))}
    </>
  );
}
export default DivisionCardSkeleton;
