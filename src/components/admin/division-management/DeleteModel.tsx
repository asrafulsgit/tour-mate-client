import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader, Trash2 } from "lucide-react";
import {
  useDeleteDivisionMutation,
  useGetDivisionQuery,
} from "@/redux/features/division";
import DialogSkeleton from "../user-management/DialogSkeleton";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type ModalState = { type: "DELETE"; id: string } | null;

function DeleteModel({
  modal,
  onClose,
}: {
  modal: ModalState;
  onClose: () => void;
}) {
  if (!modal) return null;
  const { data, isLoading, error } = useGetDivisionQuery(modal?.id);
  const division = data?.data;
  const [deleteDivision, { isLoading: deleteLoading }] =
    useDeleteDivisionMutation();
  if (isLoading) return <DialogSkeleton open />;
  const handleDelete = async () => {
    if (!division?._id) return;
    try {
      await deleteDivision(division._id).unwrap();
      toast.success("Division Deleted!");
      onClose();
    } catch (error: any) {
      console.error(error.data.message);
      toast.error(error?.data?.message || "Delete division failed");
    }
  };
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="mt-8">
        {modal.type === "DELETE" && (
          <>
            <DialogTitle>Delete Division?</DialogTitle>
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 mx-auto">
                <Trash2 size={24} className="text-red-600" />
              </div>
              <p className="text-sm text-muted-foreground text-center mb-2">
                This action cannot be undone. The division will be permanently
                deleted.
              </p>
              <p className="text-sm font-semibold text-foreground text-center mb-2 sm:mb-6">
                {division?.name}
              </p>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                disabled={deleteLoading}
                onClick={handleDelete}
                className={cn("","cursor-pointer")}
              >
                {deleteLoading ? (
                  <>
                    <Loader className="size-4 animate-spin" />
                    Delete
                  </>
                ) : (
                  `Delete`
                )}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
export default DeleteModel;
