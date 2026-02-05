import { Card } from "@/components/ui/card";
import { AlertCircle, Calendar, CheckCircle2, DollarSign } from "lucide-react";

const UserStats = () => {
  const stats = {
    totalBookings: 150,
    confirmedBookings: 200,
    pendingBookings: 150,
    totalSpent: 10000,
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 sm:py-12">
      <StatCard
        title="Total Bookings"
        value={stats.totalBookings}
        icon={<Calendar className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="primary"
      />
      <StatCard
        title="Confirmed"
        value={stats.confirmedBookings}
        icon={<CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="green"
      />
      <StatCard
        title="Pending"
        value={stats.pendingBookings}
        icon={<AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="yellow"
      />
      <StatCard
        title="Total Spent"
        value={`$${stats.totalSpent}`}
        icon={<DollarSign className="w-6 h-6 sm:w-8 sm:h-8 opacity-20" />}
        color="accent"
      />
    </div>
  );
};

export default UserStats;

const StatCard = ({ title, value, icon, color }: any) => (
  <Card className={`bg-background rounded-lg border border-border p-4`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-3xl font-bold text-primary">{value}</p>
      </div>
      {icon}
    </div>
  </Card>
);
