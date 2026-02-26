import { Badge } from "@/components/ui/badge"; 
import { User } from "@/redux/features/user/user.types";
import { format } from "date-fns";
import { Shield } from "lucide-react";
import Image from "next/image";

const UserProfileModel = ({ user }: { user: User }) => {
  
  return (
    <div className="-mx-4 max-h-[60vh] overflow-y-auto p-1 sm:p-6 space-y-4 sm:space-y-6">
      {/* Profile Header */}
      <div
        className="flex items-center gap-4 pb-4 
          sm:pb-6 border-b border-border"
      >
        <Image
          src={user.picture || "/placeholder.svg"}
          alt={user.name}
          width={80}
          height={80}
          className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-400 rounded-full object-cover"
        />
        <div>
          <h2
            className="text-xl sm:text-2xl font-bold 
              text-foreground"
          >
            {user.name}
          </h2>
          <div className="flex gap-2 mt-1 sm:mt-2">
            <Badge
              className={`
                    ${
                      user.isActive === "ACTIVE"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }
                  `}
            >
              {user.isActive}
            </Badge>
            {user.isVerified && (
              <Badge className="bg-blue-100 text-blue-800">
                <Shield size={12} className="mr-1" />
                Verified
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 
          gap-2 sm:gap-4"
      >
        <div>
          <p className="text-xs text-muted-foreground sm:mb-1">Email</p>
          <p className="text-foreground font-medium">{user.email}</p>
        </div>
        {user.phone && <div>
          <p className="text-xs text-muted-foreground sm:mb-1">Phone</p>
          <p className="text-foreground font-medium">{user.phone}</p>
        </div>}
        {user.address && <div>
          <p className="text-xs text-muted-foreground sm:mb-1">Address</p>
          <p className="text-foreground font-medium">{user.address}</p>
        </div>}
        <div>
          <p className="text-xs text-muted-foreground mb-1">Role</p>
          <p className="text-foreground font-medium">{user.role}</p>
        </div>
      </div>
 
      {/* Authentication Methods */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">
          Authentication Methods
        </p>
        <div className="space-y-2">
          {user.auths.map((auth, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 bg-muted rounded-lg"
            >
              <Shield size={16} className="text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground capitalize">
                  {auth.provider}
                </p>
                <p className="text-xs text-muted-foreground">
                  {auth.providerId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Member Since</p>
          <p className="text-foreground font-semibold">{format(user.createdAt,"yyyy-MM-dd")}</p>
        </div> 
      </div>
    </div>
  );
};

export default UserProfileModel;
