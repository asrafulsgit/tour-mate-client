import { Badge } from "@/components/ui/badge"; 
import { MOCK_USERS, User } from "@/mock/users"; 
import UserHeader from "../UserHeader";

const UserDashboardHeader = () => {
  const user: User = MOCK_USERS[0];
  return (
    <> 
    <section className="bg-card border-b border-border py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Avatar */}
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl sm:text-4xl text-primary-foreground font-bold">
                {user?.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">{user?.name}</h2>
            <p className="text-sm text-muted-foreground">{user?.email}</p>

            <div className="flex justify-center sm:justify-start  items-center sm:items-start flex-wrap gap-2 mt-2">
              <Badge variant="secondary">Member since {user?.joinDate}</Badge>
              <Badge variant="secondary">8 tours completed</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
};

export default UserDashboardHeader;
