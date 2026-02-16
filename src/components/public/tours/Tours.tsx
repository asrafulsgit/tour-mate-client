import { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { TourCard } from "@/components/shared/TourCard";
import { useGetAllToursQuery } from "@/redux/features/tour";
import ToursSkeleton from "./ToursSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import useQueryManager from "@/hooks/useQueryManager";
import { useDebounce } from "@/hooks/useDebounce";
import { Tour } from "@/redux/features/tour/tour.types";
import { cn } from "@/lib/utils";

interface ToursSectionProps {
  onMobileFiltersOpen: () => void;
}

const ToursSection = memo(({ onMobileFiltersOpen }: ToursSectionProps) => {
  const { getQuery } = useQueryManager();
  const debouncedSearch = useDebounce(getQuery("search"), 500);

  const { data, isLoading, error } = useGetAllToursQuery({
    searchTerm: debouncedSearch ?? undefined,
    division: getQuery("division") ?? undefined,
    tourType: getQuery("type") ?? undefined,
  });

  const tours = useMemo(() => data?.data ?? [], [data?.data]);

  return (
    <div className="lg:col-span-3">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={onMobileFiltersOpen}
        >
          Show Filters
        </Button>
      </div>

      {/* Tours */}
      <Tours tours={tours} isLoading={isLoading} error={error} />
    </div>
  );
});

interface ToursProps {
  tours: Tour[];
  isLoading: boolean;
  error: any;
}

const Tours = memo(({ tours, isLoading, error }: ToursProps) => {
  const { clearQuery } = useQueryManager();
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <ToursSkeleton />
      </div>
    );
  }

  if (error) return <ApiErrorPage name="Tours" />;

  if (tours.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="sm:text-lg text-muted-foreground mb-4">
          No tours match your filters
        </p>
        <Button
          onClick={clearQuery}
          variant="outline"
          className={cn("", "cursor-pointer")}
        >
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {tours.map((tour) => (
        <TourCard key={tour._id} tour={tour} />
      ))}
    </div>
  );
});

Tours.displayName = "Tours";
ToursSection.displayName = "ToursSection";

export default ToursSection;
