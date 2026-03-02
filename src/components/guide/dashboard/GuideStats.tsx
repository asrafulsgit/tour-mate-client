import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { Card } from "@/components/ui/card";
import StatsCardsSkeleton from "@/components/user/dashboard/StatsSkeleton";
import DashboardStatsCard from "@/components/user/DashboardStatsCard";
import { useGetGuideStatsQuery } from "@/redux/features/guide";
import {
  CheckCircle2,
  CircleCheck,
  Clock,
  DollarSign,
  Loader,
  TrendingUp,
  Users,
} from "lucide-react";

const GuideStats = () => {
  const { data, isLoading, error } = useGetGuideStatsQuery();
  const stats = data?.data;
  if (isLoading) return <StatsCardsSkeleton />;
  if (error) return <ApiErrorPage name="stats" />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
      <DashboardStatsCard
        title="Completed Tours"
        value={`${stats?.completedTours}`}
        icon={<CircleCheck className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Pending Tours"
        value={stats?.pendingTours}
        icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Upcoming Tours"
        value={stats?.upcomingTours}
        icon={<Loader className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Total Guests"
        value={stats?.totalGuests}
        icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
    </div>
  );
};

export default GuideStats;
