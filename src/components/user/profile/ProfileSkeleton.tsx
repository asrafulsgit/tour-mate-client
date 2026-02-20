import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function UserProfileSkeleton() {
  return (
    <main className="grow">
      {/* Header Skeleton */}
      <div className="border-b border-border py-6">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-72" />
        </div>
      </div>

      {/* Profile Content */}
      <section className="py-4 sm:py-8">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-4">
          
          {/* Profile Card */}
          <Card className="p-6 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Skeleton className="w-full h-full rounded-full" />
              <Skeleton className="absolute bottom-0 right-0 h-8 w-8 rounded-full" />
            </div>

            <Skeleton className="h-6 w-40 mx-auto mb-2" />

            <div className="flex justify-center gap-2 mb-4">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>

            <Skeleton className="h-4 w-32 mx-auto mb-4" />

            <Skeleton className="h-10 w-40 mx-auto rounded-md" />
          </Card>

          {/* Account Info Card */}
          <Card className="p-6">
            <div className="space-y-6">
              <Skeleton className="h-6 w-48" />

              {/* Full Name */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-1/2" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-5 w-5 rounded-full" />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-5 w-1/3" />
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>

              {/* Danger Zone */}
              <div className="pt-6 border-t border-border space-y-4">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          </Card>

        </div>
      </section>
    </main>
  );
}