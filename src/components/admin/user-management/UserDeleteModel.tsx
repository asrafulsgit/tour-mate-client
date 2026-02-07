import { Card } from "@/components/ui/card";
import { DialogTitle } from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

const UserDeleteModel = ({ name }: { name: string }) => {
  return (
    <>
      <DialogTitle>Delete User Account?</DialogTitle>
      <div>
        <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 mx-auto">
          <Trash2 size={24} className="text-red-600" />
        </div>
        <p className="text-sm text-muted-foreground text-center mb-2">
          This action cannot be undone. The user account and all associated data
          will be permanently deleted.
        </p>
        <p className="text-sm font-semibold text-foreground text-center mb-2 sm:mb-6">
          {name}
        </p>
      </div>
    </>
  );
};

export default UserDeleteModel;
