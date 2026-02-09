import {
  Dialog,
  DialogContent, 
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; 
import { mockDivisions } from "@/mock/divisions";
import { Trash2 } from "lucide-react";

type ModalState = { type: "NONE" } | { type: "DELETE"; id: string };

function DeleteModel({
  modal,
  onClose,
}: {
  modal: ModalState;
  onClose: () => void;
}) {
  if (modal.type === "NONE") return null;

  const division = mockDivisions[0];

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
                {division.name}
              </p>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
export default DeleteModel;
