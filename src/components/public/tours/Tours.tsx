import { TourCard } from "@/components/shared/TourCard";
import { Button } from "@/components/ui/button";
import { mockTours } from "@/mock/tours";

const ToursSection = ({
  onMobileFiltersOpen,
}: {
  onMobileFiltersOpen: () => void;
}) => {
  const tours = mockTours;
  return (
    <div className="lg:col-span-3">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={() => onMobileFiltersOpen()}
        >
          Show Filters
        </Button>
      </div>

      {/* Tours */}
      {tours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground mb-4">
            No tours match your filters
          </p>
          <Button
            variant="outline"
            // onClick={resetFilters}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ToursSection;
