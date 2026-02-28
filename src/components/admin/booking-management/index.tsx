"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import UserHeader from "@/components/user/UserHeader";
import BookingsTable from "./BookingsTable";
import FilterSection from "./FilterSection";

function BookingManagementPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="grow">
      <UserHeader
        title="Booking Management"
        subTitle="Manage and confirm tour bookings"
      />

      <section className="sm:pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 space-y-6">
          {/* Filters */}
          <FilterSection />

          {/* Table */}
          <BookingsTable />
        </div>
      </section>
    </main>
  );
}
export default BookingManagementPage;
