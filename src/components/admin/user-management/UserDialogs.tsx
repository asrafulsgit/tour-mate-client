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
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from "@/redux/features/user";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import DialogSkeleton from "./DialogSkeleton";

type ModalState =
  | { type: "VIEW"; id: string }
  | { type: "BLOCK"; id: string }
  | { type: "DELETE"; id: string }
  | null;

export default function UserDialogs({
  modal,
  onClose,
}: {
  modal: ModalState;
  onClose: () => void;
}) {
  const isOpen = modal !== null;

  const { data, isLoading } = useGetUserDetailsQuery(
    { id: modal?.id ?? "" },
    { skip: !isOpen },
  );

  if (!isOpen) return null;

  if (isLoading) {
    return <DialogSkeleton open />;
  }

  const user = data?.data;
  if (!user) return null;

  const [updateUser, { isLoading: updateUserStatusLoading }] =
    useUpdateUserMutation();
  const userStatus = user.isActive;
  const handleBlock = async () => {
    try {
      await updateUser({
        id: user?._id,
        data: { isActive: userStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE" },
      }).unwrap();
      toast.success("User status Update successfully!");
    } catch (error: any) {
      console.error(error.data.message);
      toast.error(error?.data?.message || "User status update failed");
    }
  };

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
              <Button
                className={cn("", "cursor-pointer")}
                variant={userStatus === "ACTIVE" ? "destructive" : "secondary"}
                onClick={handleBlock}
                disabled={updateUserStatusLoading}
              >
                {isLoading ? (
                  <>
                    <Loader className="size-4 animate-spin" />
                    Confirm
                  </>
                ) : (
                  `Confirm`
                )}
              </Button>
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
