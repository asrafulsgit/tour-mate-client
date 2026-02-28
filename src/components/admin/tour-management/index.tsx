"use client";

import { useState } from "react";
import UserHeader from "@/components/user/UserHeader";
import ToursTable from "./ToursTable";
import DeleteModel from "./DeleteModel";

import FilterSection from "./FilterSection";

function TourManagementPage() {
  const [modal, setModal] = useState<boolean>(false);

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
          <ToursTable onDelete={() => setModal(true)} />
        </div>
      </section>

      {/* Dialogs */}
      <DeleteModel modal={modal} onClose={() => setModal(false)} />
    </main>
  );
}

export default TourManagementPage;
