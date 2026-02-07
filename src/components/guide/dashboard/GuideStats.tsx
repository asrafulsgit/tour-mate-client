import { Card } from "@/components/ui/card";
import DashboardStatsCard from "@/components/user/DashboardStatsCard";
import {
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

const GuideStats = () => {
  const stats = {
    totalEarnings: 1524,
    completedTours: 20,
    upcomingTours: 5,
    totalGuests: 5000,
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
      <DashboardStatsCard
        title="Total Earnings"
        value={`$${stats.totalEarnings}`}
        icon={<DollarSign className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Completed Tours"
        value={stats.completedTours}
        icon={<CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Upcoming Tours"
        value={stats.completedTours}
        icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Total Guests"
        value={stats.completedTours}
        icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
    </div>
  );
};

export default GuideStats;
