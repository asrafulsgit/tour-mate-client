"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import FilterSection from "./FilterSection";
import ToursSection from "./Tours";
import { useState } from "react";

const Tours = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <main className="grow max-w-7xl px-2 sm:px-4">
        <div className="border-b border-border py-4">
          <SectionHeader
            title="Explore Tours"
            subTitle="Discover amazing experiences around the world"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 sm:py-8 w-full">
          <div
            className={`md:col-span-1 ${mobileFiltersOpen ? "block" : "hidden md:block"}`}
          >
            <FilterSection
              onMobileFiltersClose={() =>
                setMobileFiltersOpen(!mobileFiltersOpen)
              }
            />
          </div>
          <div className="md:col-span-3 w-full">
            <ToursSection
              onMobileFiltersOpen={() =>
                setMobileFiltersOpen(!mobileFiltersOpen)
              }
              isMobileOpen={!mobileFiltersOpen}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Tours;
