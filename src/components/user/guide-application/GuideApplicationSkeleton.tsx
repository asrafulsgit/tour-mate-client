import { Skeleton } from "@/components/ui/skeleton";

export default function ApplicationSectionSkeleton() {
  return (
    <section className="pb-8">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">

        {/* Tabs Skeleton */}
        <div className="flex gap-4 mb-4 sm:mb-8 border-b border-border">
          <Skeleton className="h-8 w-24 rounded-md" />
          <Skeleton className="h-8 w-32 rounded-md" />
        </div>

        {/* Success Message Skeleton */}
        <div className="mb-6 space-y-2">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>

        {/* Main Content Skeleton */}
        <div className="space-y-6">

          {/* Card-like container */}
          <div className="p-4 sm:p-6 border rounded-xl space-y-4">

            {/* Title */}
            <Skeleton className="h-6 w-40" />

            {/* Info rows */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            ))}

            {/* Button Skeleton */}
            <Skeleton className="h-10 w-32 rounded-md" />
          </div>

        </div>
      </div>
    </section>
  );
}