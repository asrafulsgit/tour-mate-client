"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import UserHeader from "@/components/user/UserHeader";
import BookingsTable from "./BookingsTable";

function BookingManagementPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="grow">
      <UserHeader
        title="Booking Management"
        subTitle="Manage and confirm tour bookings"
      />

      <section className="sm:pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          {/* Filters */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-muted-foreground"
              />
              <Input
                placeholder="Search bookings..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </div>

          {/* Table */}
          <BookingsTable />
        </div>
      </section>
    </main>
  );
}
export default BookingManagementPage;
