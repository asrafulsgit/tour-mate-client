import { Card } from "@/components/ui/card";
import { AlertCircle, Calendar, CheckCircle2, DollarSign } from "lucide-react";
import DashboardStatsCard from "../DashboardStatsCard";

const UserStats = () => {
  const stats = {
    totalBookings: 150,
    confirmedBookings: 200,
    pendingBookings: 150,
    totalSpent: 10000,
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pb-8">
      <DashboardStatsCard
        title="Total Bookings"
        value={stats.totalBookings}
        icon={<Calendar className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Confirmed"
        value={stats.confirmedBookings}
        icon={<CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="green"
      />
      <DashboardStatsCard
        title="Pending"
        value={stats.pendingBookings}
        icon={<AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="yellow"
      />
      <DashboardStatsCard
        title="Total Spent"
        value={`$${stats.totalSpent}`}
        icon={<DollarSign className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="accent"
      />
    </div>
  );
};

export default UserStats;


