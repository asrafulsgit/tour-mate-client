import React from "react";
import {
  useGetBookingStatsQuery,
  useGetPaymentStatsQuery,
  useGetTourStatsQuery,
  useGetUserStatsQuery,
} from "@/redux/features/stats";
import {
  Users,
  Map,
  CalendarCheck,
  CreditCard,
  TrendingUp,
  UserCheck,
  DollarSign,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import StatsCard from "./StatsCard";
import AdminDashboardSkeleton from "./AdminDashboardSkeleton";
import { cn } from "@/lib/utils";

const roleColors: { [key: string]: string } = {
  USER: "hsl(172, 66%, 40%)", // green
  GUIDE: "hsl(210, 80%, 52%)", // blue
  ADMIN: "hsl(38, 92%, 50%)", // yellow
  SUPER_ADMIN: "hsl(280, 60%, 55%)", // red
};

// const toursByType = [
//   { name: "Adventure", count: 3 },
//   { name: "Beach", count: 1 },
//   { name: "Historical", count: 1 },
//   { name: "Nature", count: 1 },
//   { name: "Photography", count: 1 },
// ];

// const toursByDivision = [
//   { name: "Sylhet", count: 3 },
//   { name: "Chittagong", count: 3 },
//   { name: "Khulna", count: 1 },
// ];

// const bookingsByStatus = [
//   { name: "Complete", value: 2, fill: "hsl(152, 60%, 42%)" },
//   { name: "Cancelled", value: 7, fill: "hsl(0, 72%, 51%)" },
// ];

const bookingColors: { [key: string]: string } = {
  COMPLETE: "hsl(152, 60%, 42%)",
  CANCEL: "hsl(0, 72%, 51%)",
};

const paymentColors: { [key: string]: string } = {
  UNPAID: "hsl(38, 92%, 50%)",
  PAID: "hsl(152, 60%, 42%)",
  CANCELLED: "hsl(0, 72%, 51%)",
  REFUNDED: "hsl(280, 60%, 55%)",
};
// const topTours = [
//   { name: "Jaflong & Lalakhal", bookings: 7 },
//   { name: "Ratargul Swamp Forest", bookings: 2 },
// ];

const DashboardSection = () => {
  const { data: userData, isLoading: userLoading } = useGetUserStatsQuery();
  const userStats = userData?.data;
  const userChartData = userStats?.usersByRole?.map((role: any) => ({
    name: role._id,
    value: role.count,
    fill: roleColors[role._id] || "#ccc",
  }));
  const { data: tourData, isLoading: tourLoading } = useGetTourStatsQuery();
  const tourStats = tourData?.data;

  const { data: bookingData, isLoading: bookingLoading } =
    useGetBookingStatsQuery();
  const bookingStats = bookingData?.data;
  const bookingChartData = bookingStats?.totalBookingByStatus?.map(
    (booking: any) => ({
      name: booking._id,
      value: booking.count,
      fill: bookingColors[booking._id] || "#ccc",
    }),
  );
  const { data: paymentData, isLoading: paymentLoading } =
    useGetPaymentStatsQuery();
  const paymentStats = paymentData?.data;
  const paymentChartData = paymentStats?.totalPaymentByStatus?.map(
    (payment: any) => ({
      name: payment._id,
      value: payment.count,
      fill: paymentColors[payment._id] || "#ccc",
    }),
  );
  if (userLoading || tourLoading || bookingLoading || paymentLoading) {
    return <AdminDashboardSkeleton />;
  }

  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-4  space-y-6">
      {/* Top Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value={userStats?.totalUsers || 0}
          subtitle={`${userStats?.totalActiveUsers || 0} active · ${userStats?.totalBlockedUsers || 0} blocked`}
          icon={Users}
          trend={{
            value: `${userStats?.newUsersInLast30Days || 0} new this month`,
            positive: true,
          }}
          variant="primary"
        />
        <StatsCard
          title="Total Tours"
          value={tourStats?.totalTour || 0}
          subtitle={`Avg. cost BDT ${tourStats?.avgTourCost[0].avgCostFrom.toFixed(2) || 0}`}
          icon={Map}
          variant="info"
        />
        <StatsCard
          title="Total Bookings"
          value={bookingStats?.totalBooking || 0}
          subtitle={`${bookingStats?.bookingsLast30Days || 0} in last 30 days`}
          icon={CalendarCheck}
          trend={{
            value: `${bookingStats?.bookingsLast7Days} this week`,
            positive: true,
          }}
          variant="warning"
        />
        <StatsCard
          title="Total Revenue"
          value={`BDT ${paymentStats?.totalRevenue[0].totalRevenue || 0}`}
          subtitle={`Avg.  BDT ${paymentStats?.avgPaymentAmount[0].avgPaymentAMount.toFixed(2)} per payment`}
          icon={DollarSign}
          variant="success"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-4 md:grid-cols-5">
        {/* Users by Role */}
        <Card className={cn("", "col-span-3 md:col-span-2 gap-0 sm:gap-3")}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 font-display text-base">
              <UserCheck className="h-4 w-4 text-primary" />
              Users by Role
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={userChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {userChartData?.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(220, 13%, 90%)",
                    fontSize: "13px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: "12px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tours by Type */}
        <Card className={cn("", "col-span-3 gap-3")}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 font-display text-base">
              <BarChart3 className="h-4 w-4 text-info" />
              Tours by Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={tourStats?.totalTourByTourType}
                barSize={30}
                margin={{ top: 0, right: 0, bottom: 0, left: -35 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(220, 13%, 92%)"
                />
                <XAxis dataKey="_id" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(220, 13%, 90%)",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="hsl(172, 66%, 40%)"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Tours by Division */}
        <Card className={cn("", "gap-3")}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 font-display text-base">
              <Map className="h-4 w-4 text-warning" />
              Tours by Division
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={tourStats?.totalTourByDivision}
                layout="vertical"
                barSize={24}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(220, 13%, 92%)"
                />
                <XAxis
                  type="number"
                  allowDecimals={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  type="category"
                  dataKey="_id"
                  tick={{ fontSize: 12 }}
                  width={72}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(220, 13%, 90%)",
                    fontSize: "13px",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="hsl(38, 92%, 50%)"
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Booking Status */}
        <Card className={cn("", "gap-3")}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 font-display text-base">
              <CalendarCheck className="h-4 w-4 text-success" />
              Booking Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={bookingChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {bookingChartData?.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(220, 13%, 90%)",
                    fontSize: "13px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: "12px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Payment Status */}
        <Card className={cn("", "gap-3")}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 font-display text-base">
              <CreditCard className="h-4 w-4 text-destructive" />
              Payment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={paymentChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {paymentChartData?.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(220, 13%, 90%)",
                    fontSize: "13px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: "12px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Tours Table */}
      <Card className={cn("","gap-0")}>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 font-display text-base">
            <TrendingUp className="h-4 w-4 text-primary" />
            Most Booked Tours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tourStats?.totalHighestBookedTour.map((booking, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border bg-muted/30 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                    #{i + 1}
                  </span>
                  <span className="text-sm font-medium line-clamp-1">
                    {booking.tour.title}
                  </span>
                </div>
                <span className="min-w-21 rounded-full bg-primary/10 px-2 sm:px-3 py-1 text-xs font-semibold text-primary">
                  {booking.bookingCount} bookings
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default DashboardSection;
