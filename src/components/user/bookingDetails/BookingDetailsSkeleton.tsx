import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function BookingDetailsSkeleton() {
  return (
    <main className="grow">
      <section className="pb-8 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-4">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">

            {/* Booking Status Timeline */}
            <Card className="p-4 sm:p-6 gap-3 sm:gap-6">
              <Skeleton className="h-6 w-40 mb-4" />
              <div className="flex items-center justify-between">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <Skeleton className="w-8 sm:w-12 h-8 sm:h-12 rounded-full" />
                    <Skeleton className="h-3 w-10 sm:w-12 text-center" />
                    <Skeleton className="h-3 w-10 sm:w-12 font-medium text-center" />
                    {i < 2 && <div className="flex-1 h-1 bg-border my-6" />}
                  </div>
                ))}
              </div>
            </Card>

            {/* Tour Information */}
            <Card className="p-4 sm:p-6 gap-3 sm:gap-6">
              <Skeleton className="h-6 w-40 mb-4" />
              <div className="flex flex-wrap gap-3 sm:gap-6">
                <Skeleton className="w-full sm:w-32 h-50 sm:h-32 rounded-lg" />
                <div className="grow space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Skeleton className="h-5 w-5 rounded-sm" />
                        <div className="space-y-1 w-full">
                          <Skeleton className="h-3 w-20" />
                          <Skeleton className="h-4 w-28" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Payment Summary */}
            <Card className="p-4 sm:p-6 sticky top-20 gap-3 sm:gap-6">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-3 sm:mb-2 pb-6 border-b border-border">
                <Skeleton className="h-5 w-full flex justify-between" />
              </div>
              <Skeleton className="h-8 w-full rounded-md" />
            </Card>
          </div>

        </div>
      </section>
    </main>
  );
}