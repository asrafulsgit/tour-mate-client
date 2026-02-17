import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailsSkeleton() {
  return (
    <main className="grow space-y-8">
      {/* Hero Section */}
      <section className="pb-4 border-b border-border">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 sm:pt-4 space-y-4">
          <div className="rounded-lg h-48 sm:h-58 flex items-center justify-center mb-4 sm:mb-8 mt-4 sm:mt-0 ">
            <Skeleton className="w-full h-full rounded-lg" />
          </div>

          <div className="space-y-2 sm:space-y-4">
            {/* Type Badge */}
            <Skeleton className="h-6 w-24 rounded-full mb-2 sm:mb-4" />

            {/* Title */}
            <Skeleton className="h-8 sm:h-12 w-3/4 rounded" />

            {/* Meta Info */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-24 rounded" />
              <Skeleton className="h-4 w-1 rounded" />
              <Skeleton className="h-4 w-32 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-6 sm:py-12">
        <div className="max-w-3xl mx-auto px-2 sm:px-4 space-y-6">
          <article className="prose prose-invert max-w-none">
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full rounded" />
              ))}
            </div>
          </article>

          {/* Author Bio */}
          <div className="mt-6 sm:mt-12 p-3 sm:p-6 bg-card border border-border rounded-lg flex items-start gap-4">
            <Skeleton className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-5 w-1/3 rounded" />
              <Skeleton className="h-4 w-2/3 rounded" />
              <Skeleton className="h-4 w-full rounded" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
