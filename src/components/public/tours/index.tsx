"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import FilterSection from "./FilterSection";
import ToursSection from "./Tours";
import { useState } from "react";

const Tours = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-b border-border py-4">
          <SectionHeader
            title="Explore Tours"
            subTitle="Discover {filteredTours.length} amazing experiences around the world"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
          <div
            className={`lg:col-span-1 ${mobileFiltersOpen ? "block" : "hidden lg:block"}`}
          >
            <FilterSection
              onMobileFiltersClose={() =>
                setMobileFiltersOpen(!mobileFiltersOpen)
              }
            />
          </div>
          <ToursSection
            onMobileFiltersOpen={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          />
        </div>
      </div>
    </>
  );
};

export default Tours;
