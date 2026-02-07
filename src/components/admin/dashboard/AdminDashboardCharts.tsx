import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
const bookingsData = [
  { month: "Jan", completed: 45, pending: 12, cancelled: 3 },
  { month: "Feb", completed: 52, pending: 8, cancelled: 2 },
  { month: "Mar", completed: 48, pending: 15, cancelled: 4 },
  { month: "Apr", completed: 61, pending: 10, cancelled: 1 },
  { month: "May", completed: 55, pending: 12, cancelled: 3 },
  { month: "Jun", completed: 67, pending: 9, cancelled: 2 },
];

const paymentData = [
  { name: "Successful", value: 325, color: "#10b981" },
  { name: "Pending", value: 47, color: "#f59e0b" },
  { name: "Failed", value: 12, color: "#ef4444" },
];
const AdminDashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* Bookings Chart */}
      <Card className="p-3 md:p-6 lg:col-span-2 gap-2 sm:gap-6">
        <h3 className="text-lg font-semibold text-foreground">
          Bookings Overview
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bookingsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: `1px solid var(--color-border)`,
              }}
            />
            <Legend />
            <Bar dataKey="completed" fill="#10b981" />
            <Bar dataKey="pending" fill="#f59e0b" />
            <Bar dataKey="cancelled" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Payment Status Pie */}
      <Card className="p-3 md:p-6 gap-2 sm:gap-6">
        <h3 className="text-lg font-semibold text-foreground sm:mb-4">
          Payment Status
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={paymentData}
              cx="50%"
              cy="45%"
              outerRadius={100}
              labelLine={false}
              dataKey="value"
            >
              {paymentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: 12,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default AdminDashboardCharts;
