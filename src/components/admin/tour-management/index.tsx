"use client";

import UserHeader from "@/components/user/UserHeader";
import ToursTable from "./ToursTable"; 
import FilterSection from "./FilterSection";

function TourManagementPage() { 

  return (
    <main className="grow">
      <UserHeader
        title="Tour Management"
        subTitle="Create, edit, and manage tours"
      />

      <section className="sm:pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 space-y-6">
          {/* Filters */}
          <FilterSection />

          {/* Table */}
          <ToursTable />
        </div>
      </section>
    </main>
  );
}

export default TourManagementPage;
