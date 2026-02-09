import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { mockTours } from "@/mock/tours";
import { Trash2 } from "lucide-react";

function DeleteModel({
  modal,
  onClose,
}: {
  modal: boolean;
  onClose: () => void;
}) {
  if (!modal) return null;

  const tour = mockTours[0];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="mt-8">
        <DialogTitle>Delete Tour?</DialogTitle>
        <div>
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 mx-auto">
            <Trash2 size={24} className="text-red-600" />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-2">
            This action cannot be undone. The tour data will be permanently deleted.
          </p>
          <p className="text-sm font-semibold text-foreground text-center mb-2 sm:mb-6">
            {tour.title}
          </p>
        </div>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default DeleteModel;
