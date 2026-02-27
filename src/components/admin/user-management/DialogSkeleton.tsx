import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogSkeletonProps {
  open: boolean;
}

export default function DialogSkeleton({ open }: DialogSkeletonProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="space-y-2">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-64" />
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="space-y-4 py-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <DialogFooter className="gap-2 sm:justify-end">
          <Skeleton className="h-10 w-20 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
