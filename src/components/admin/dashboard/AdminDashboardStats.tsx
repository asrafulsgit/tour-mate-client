import { Card } from "@/components/ui/card";
import DashboardStatsCard from "@/components/user/DashboardStatsCard";
import {
  AlertCircle,
  CreditCard,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";

const AdminDashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
      <DashboardStatsCard
        title="Total Users"
        value={`2,543`}
        icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Active Tours"
        value={`156`}
        icon={<MapPin className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Total Revenue"
        value={`$197,450`}
        icon={<MapPin className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Total Guides"
        value={`14`}
        icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
    </div>
  );
};

export default AdminDashboardStats;
