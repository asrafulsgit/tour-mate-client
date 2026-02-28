import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2, Loader } from "lucide-react";
import Image from "next/image";
import {
  useApproveApplicationMutation,
  useGetGuideApplicationQuery,
  useRejectApplicationMutation,
} from "@/redux/features/guide";
import DialogSkeleton from "../user-management/DialogSkeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type ModalState =
  | { type: "DETAILS"; id: string }
  | { type: "REJECT"; id: string }
  | { type: "APPROVE"; id: string }
  | null;

function GuideDialogs({
  modal,
  onClose,
}: {
  modal: ModalState;
  onClose: () => void;
}) {
  if (!modal) return null;
  const [reason, setReason] = useState("");

  const { data, isLoading, error } = useGetGuideApplicationQuery({
    id: modal?.id,
  });
  const application = data?.data;
  const [approveApplication, { isLoading: approveLoading }] =
    useApproveApplicationMutation();
  const [rejectApplication, { isLoading: rejectLoading }] =
    useRejectApplicationMutation();
  const handleApprove = async () => {
    if (!application?._id) return;
    try {
      await approveApplication({
        id: application?._id,
      }).unwrap();
      onClose();
      toast.success("Application approved!");
    } catch (error: any) {
      console.error(error.data.message);
      toast.error(error?.data?.message || "Approve application failed");
    }
  };
  const handleReject = async () => {
    if (!application?._id) return;
    try {
      await rejectApplication({
        id: application?._id,
      }).unwrap();
      onClose();
      toast.success("Application rejected!");
    } catch (error: any) {
      console.error(error.data.message);
      toast.error(error?.data?.message || "Reject application failed");
    }
  };

  if (isLoading) {
    return <DialogSkeleton open />;
  }
  if (error || !application) {
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="text-center py-6">
          <DialogTitle className="text-center text-red-600">
            Application not found
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>;
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className={cn("", "p-3 sm:p-6")}>
        {!isLoading && application && (
          <>
            {modal.type === "DETAILS" && (
              <>
                <DialogHeader>
                  <DialogTitle>Application Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Division:</strong> {application.divisionId.name}
                  </p>
                  <p className="mb-2">
                    <strong> NID Photo </strong>
                  </p>
                  <div className="flex gap-2">
                    {application.nidPhotos.map((nid, i) => (
                      <div
                        key={i}
                        className="w-30 sm:w-40 h-20 sm:h-24 relative rounded-lg overflow-hidden"
                      >
                        <Image
                          src={nid || "/public/placeholder.png"}
                          alt={`NID-${i + 1}`}
                          fill
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="/public/placeholder.png"
                          priority={i === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* APPROVE */}
            {modal.type === "APPROVE" && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" />
                    Approve Application
                  </DialogTitle>
                </DialogHeader>

                <p className="text-sm text-muted-foreground">
                  Are you sure you want to approve{" "}
                  <span className="font-semibold text-foreground">
                    {application.userId.name}
                  </span>
                  ? They will be granted guide access immediately.
                </p>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleApprove}
                    disabled={approveLoading}
                  >
                    {approveLoading ? (
                      <>
                        <Loader className="size-4 animate-spin" />
                        Approve
                      </>
                    ) : (
                      `Approve`
                    )}
                  </Button>
                </div>
              </>
            )}

            {modal.type === "REJECT" && (
              <>
                <DialogHeader>
                  <DialogTitle>Reject Application</DialogTitle>
                </DialogHeader>

                <Textarea
                  placeholder="Reason for rejection..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant="destructive" disabled={rejectLoading} onClick={handleReject}>
                    {rejectLoading ? (
                      <>
                        <Loader className="size-4 animate-spin" />
                        Reject
                      </>
                    ) : (
                      `Reject`
                    )}
                    
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
export default GuideDialogs;
