import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ReviewSkeleton = () => {
  return Array.from({ length: 3 }).map((_, i) => (
    <Card key={i} className="p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" /> 
    </Card>
  ));
};

export default ReviewSkeleton;
