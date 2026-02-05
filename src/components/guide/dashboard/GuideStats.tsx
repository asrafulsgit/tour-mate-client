import { Card } from "@/components/ui/card";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <Card className="p-4 sm:p-6 from-primary/10 to-primary/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Earnings</p>
            <p className="text-2xl sm:text-3xl font-bold text-primary">
              ${stats.totalEarnings}
            </p>
            <p className="text-xs  text-muted-foreground mt-1"> 
              BDT
            </p>
          </div>
          <DollarSign size={32} className="text-primary opacity-20" />
        </div>
      </Card>

      <Card className="p-4 sm:p-6 from-green-500/10 to-green-500/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Completed Tours
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-green-600">
              {stats.completedTours}
            </p>
            <p className="text-xs text-muted-foreground mt-1">All time</p>
          </div>
          <CheckCircle2 size={32} className="text-green-500 opacity-20" />
        </div>
      </Card>

      <Card className="p-4 sm:p-6 from-blue-500/10 to-blue-500/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Upcoming Tours</p>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">
              {stats.upcomingTours}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Scheduled</p>
          </div>
          <Clock size={32} className="text-blue-500 opacity-20" />
        </div>
      </Card>

      <Card className="p-4 sm:p-6 from-accent/10 to-accent/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Guests</p>
            <p className="text-2xl sm:text-3xl font-bold text-accent">
              {stats.totalGuests}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Guided</p>
          </div>
          <Users size={32} className="text-accent opacity-20" />
        </div>
      </Card>
    </div>
  );
};

export default GuideStats;
