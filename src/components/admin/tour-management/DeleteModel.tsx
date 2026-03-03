import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; 
import { Loader, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDeleteTourMutation } from "@/redux/features/tour";
import { toast } from "sonner";

interface DeleteModelProps {
  data: { name: string; id: string };
  open: boolean;
  onClose: () => void;
}

function DeleteModel({ data, open, onClose }: DeleteModelProps) {
  const [deleteTour, { isLoading }] = useDeleteTourMutation();

  const handleDelete = async () => {
    try {
      await deleteTour(data.id).unwrap();
      toast.success("Tour delete successfull");
      onClose();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to delete tour");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Delete Tour?</DialogTitle>
        <div>
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 mx-auto">
            <Trash2 size={24} className="text-red-600" />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-2">
            This action cannot be undone. The tour data will be permanently
            deleted.
          </p>
          <p className="text-sm font-semibold text-foreground text-center mb-2 sm:mb-6">
            {data.name}
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDelete}
            className={cn("", "cursor-pointer")}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader className="size-4 animate-spin" />
                Delete
              </>
            ) : (
              `Delete`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default DeleteModel;
