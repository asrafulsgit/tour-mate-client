import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function UpdateDivisionFormSkeleton() {
  return (
    <div className="space-y-4">
      <Card className="bg-none border-none shadow-none">
        <CardContent className="space-y-6 p-0">

          {/* Name Field */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Thumbnail Upload */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full rounded-md" />

            {/* Preview Section */}
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-6 w-6 rounded-md" />
              </div>

              <Skeleton className="h-32 w-52 rounded-md" />
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Form Actions */}
      <div className="flex justify-end gap-4 px-4">
        <Skeleton className="h-11 w-28 rounded-md" />
        <Skeleton className="h-11 w-40 rounded-md" />
      </div>
    </div>
  );
}