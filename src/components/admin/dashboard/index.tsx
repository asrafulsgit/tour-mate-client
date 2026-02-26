"use client";
// import UserHeader from "@/components/user/UserHeader";
// import AdminDashboardStats from "./AdminDashboardStats";
// import AdminDashboardCharts from "./AdminDashboardCharts";

// export default function AdminDashboardPage() {
//   return (
//     <main className="grow">
//       {/* Header */}
//       <UserHeader
//         title="Admin Dashboard"
//         subTitle="System overview and analytics"
//       />
//       {/* Content */}
//       <section className="md:pt-4 pb-8">
//         <div className="max-w-7xl mx-auto px-2 sm:px-4 space-y-8">
//           {/* Stats Grid */}
//           <AdminDashboardStats />

//           {/* Charts Row */}
//           <AdminDashboardCharts />
//         </div>
//       </section>
//     </main>
//   );
// }

import UserHeader from "@/components/user/UserHeader";

import DashboardSection from "./DashboardSection";

const AdminDashboardPage = () => {
  return (
    <main className="grow">
      <UserHeader title="Overview" />
      <DashboardSection />
    </main>
  );
};

export default AdminDashboardPage;
