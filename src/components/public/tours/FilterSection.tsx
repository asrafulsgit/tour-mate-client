"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, DollarSign, Star, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useSearchParams } from "next/navigation";
import { useGetAllDivisionsQuery } from "@/redux/features/division";
import { Combobox } from "@/components/shared/combobox";
import { useGetTourTypesQuery } from "@/redux/features/tourType";
import { Skeleton } from "@/components/ui/skeleton";
import useQueryManager from "@/hooks/useQueryManager";
import { cn } from "@/lib/utils";

function FilterSection({
  onMobileFiltersClose,
}: {
  onMobileFiltersClose: () => void;
}) {
  const { getQuery, setQuery, clearQuery } = useQueryManager();
  const {
    data,
    isLoading: divisionsLoading,
    error,
  } = useGetAllDivisionsQuery();
  const divisions = data?.data;
  const { data: tourTypeData, isLoading: tourTypeLoading } =
    useGetTourTypesQuery();
  const tourTypes = tourTypeData?.data;

  return (
    <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <button
          onClick={() => onMobileFiltersClose()}
          className="lg:hidden text-muted-foreground hover:text-foreground"
        >
          <X size={20} />
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">
          Search
        </label>
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
          <Input
            placeholder="Search tours..."
            onChange={(e) => setQuery("search", e.target.value)}
            value={getQuery("search") ?? ""}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">Type</h3>
        {tourTypeLoading ? (
          <Skeleton className="h-10 w-full rounded-md" />
        ) : (
          <Combobox
            options={
              tourTypes?.map((type) => ({
                value: type._id,
                label: type.name,
              })) ?? []
            }
            value={getQuery("type") as string}
            onChange={(id) => setQuery("type", id)}
            placeholder="Select type"
            className="w-full"
          />
        )}
      </div>
      {/* {divisions } */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">Division</h3>
        {divisionsLoading ? (
          <Skeleton className="h-10 w-full rounded-md" />
        ) : (
          <Combobox
            options={
              divisions?.map((division) => ({
                value: division._id,
                label: division.name,
              })) ?? []
            }
            value={getQuery("division") as string}
            onChange={(id) => setQuery("division", id)}
            placeholder="Select Division"
            className="w-full"
          />
        )}
      </div>

      {/* Price Range */}
      {/* <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          <span className="font-extrabold mr-1">৳</span>
          Price Range
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={200}
          step={10}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span><span className="font-extrabold mr-1">৳</span>{}</span>
          <span><span className="font-extrabold mr-1">৳</span>{}</span>
        </div>
      </div> */}

      {/* Reset Button */}
      <Button
        variant="outline"
        className={cn("", "w-full cursor-pointer bg-transparent")}
        onClick={() => clearQuery()}
      >
        Reset Filters
      </Button>
    </div>
  );
}
export default FilterSection;
