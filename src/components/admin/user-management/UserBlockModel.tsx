import { DialogTitle } from "@/components/ui/dialog";
import { AlertTriangle, Lock, LockOpen } from "lucide-react";

const UserBlockModel = ({
  user,
}: {
  user: { name: string; isActive: string };
}) => {
  const isActive = user.isActive === "ACTIVE"
  return (
    <>
      <DialogTitle>
        {isActive ? "Block User?" : "Unblock User?"}
      </DialogTitle> 
      <div>
        <div className={`flex items-center justify-center w-12 h-12 ${isActive ? "bg-orange-100" : "bg-green-100"}   rounded-full mb-4 mx-auto`}>
          {isActive ? <Lock size={24} className="text-orange-600" /> : <LockOpen size={24} className="text-green-600"/>}
        </div>
        <h3 className="text-lg font-semibold text-foreground text-center mb-2">
          {isActive ? "Block User" : "Unblock User"}?
        </h3>
        <p className="text-sm text-muted-foreground text-center mb-2 sm:mb-6">
          {isActive
            ? `Are you sure you want to block ${user.name}? They won't be able to access their account.`
            : `Are you sure you want to unblock ${user.name}? They'll regain full access.`}
        </p>
      </div>
    </>
  );
};

export default UserBlockModel;
