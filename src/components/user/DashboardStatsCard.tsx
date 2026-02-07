import { Card } from "../ui/card";

const DashboardStatsCard = ({ title, value, icon, color }: any) => (
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

export default DashboardStatsCard;