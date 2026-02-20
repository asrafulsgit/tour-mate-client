import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function ProfileUpateSkeleton() {
  return (
    <section className="py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-4">
        <Card className="p-4 sm:p-6 gap-4">
          {/* Header Row */}
          <div className="flex gap-2 items-center">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-6 w-56" />
          </div>

          <div className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-10 w-full rounded-md bg-muted" />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <Skeleton className="h-10 flex-1 rounded-md" />
              <Skeleton className="h-10 flex-1 rounded-md" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
