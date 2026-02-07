import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { mockGuideApplications } from "@/mock/guide-applications";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

type ModalState =
  | { type: "NONE" }
  | { type: "DETAILS"; id: string }
  | { type: "REJECT"; id: string }
  | { type: "APPROVE"; id: string };

function GuideDialogs({
  modal,
  onClose,
}: {
  modal: ModalState;
  onClose: () => void;
}) {
  const [reason, setReason] = useState("");

  if (modal.type === "NONE") return null;
  const app =
    mockGuideApplications.find((i) => i.id === modal.id) ??
    mockGuideApplications[0];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        {modal.type === "DETAILS" && (
          <>
            <DialogHeader>
              <DialogTitle>Application Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Division:</strong> {app.division}
              </p>
              <p className="mb-2">
                <strong> NID Photo </strong>
              </p>
              <Image
                src={app.nidPhoto || "/placeholder.svg"}
                alt="NID"
                width={ 8}
                height={96}
                className="w-32 h-24 rounded-lg object-cover"
              />
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
                {app.userName}
              </span>
              ? They will be granted guide access immediately.
            </p>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  // TODO: call approve API here
                  console.log("Approved:", app.id);
                  onClose();
                }}
              >
                Approve
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
              <Button
                variant="destructive"
                onClick={() => {
                  alert(`Rejected ${app.userName} for: ${reason}`);
                  setReason("");
                  onClose();
                }}
              >
                Reject
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
export default GuideDialogs;
