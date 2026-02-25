import { Card } from "@/components/ui/card";
import { AlertCircle, Calendar, CheckCircle2, DollarSign } from "lucide-react";
import DashboardStatsCard from "../DashboardStatsCard";
import { useGetUserBookingStatsQuery } from "@/redux/features/user";
import StatsCardsSkeleton from "./StatsSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";

const UserStats = () => {
  const { data, isLoading, error } = useGetUserBookingStatsQuery();
  const stats = data?.data;
  if (isLoading) return <StatsCardsSkeleton />;
  if (error) return <ApiErrorPage name="user stats" isButton={false} />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pb-8">
      <DashboardStatsCard
        title="Total Bookings"
        value={stats?.totalBooking}
        icon={<Calendar className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <DashboardStatsCard
        title="Confirmed"
        value={stats?.confirmBooking}
        icon={<CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="green"
      />
      <DashboardStatsCard
        title="Pending"
        value={stats?.pendingBooking}
        icon={<AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="yellow"
      />
      <DashboardStatsCard
        title="Total Spent"
        value={`$${stats?.totalSpent}`}
        icon={<DollarSign className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="accent"
      />
    </div>
  );
};

export default UserStats;
