"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, DollarSign, Star, X } from "lucide-react";
import { categories } from "@/mock/tours";
import { Slider } from "@/components/ui/slider";

function FilterSection({
  onMobileFiltersClose,
}: {
  onMobileFiltersClose: () => void;
}) {
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
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              // onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                "selectedCategory" === category
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          <DollarSign size={16} className="inline mr-2" />
          Price Range
        </h3>
        <Slider
          // value={priceRange}
          // onValueChange={setPriceRange}
          min={0}
          max={200}
          step={10}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${}</span>
          <span>${}</span>
        </div>
      </div>

      {/* Minimum Rating */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          <Star size={16} className="inline mr-2" />
          Minimum Rating
        </h3>
        <div className="space-y-2">
          {[0, 3.5, 4, 4.5].map((rating) => (
            <button
              key={rating}
              // onClick={() => setMinRating(rating)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                0 === rating
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {rating === 0 ? "Any Rating" : `${rating}+ Stars`}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full bg-transparent"
        // onClick={resetFilters}
      >
        Reset Filters
      </Button>
    </div>
  );
}
export default FilterSection;
