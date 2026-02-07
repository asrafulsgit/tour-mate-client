import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdminUser, adminUsers } from "@/mock/users";
import UserProfileModel from "./UserProfileModel";
import UserBlockModel from "./UserBlockModel";
import UserDeleteModel from "./UserDeleteModel";

type ModalState =
  | { type: "NONE" }
  | { type: "VIEW"; id: string }
  | { type: "BLOCK"; id: string }
  | { type: "DELETE"; id: string };

export default function UserDialogs({
  modal,
  onClose,
}: {
  modal: ModalState;
  onClose: () => void;
}) {
  if (modal.type === "NONE") return null;

  const user = adminUsers[0];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="mt-8">
        {modal.type === "VIEW" && (
          <>
            <DialogHeader>
              <DialogTitle>User Profile</DialogTitle>
            </DialogHeader>
            <UserProfileModel user={user} />
          </>
        )}

        {modal.type === "BLOCK" && (
          <>
            <UserBlockModel
              user={{ name: user.name, isActive: user.isActive }}
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="destructive">Confirm</Button>
            </div>
          </>
        )}

        {modal.type === "DELETE" && (
          <>
            <UserDeleteModel name={user.name} />
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
