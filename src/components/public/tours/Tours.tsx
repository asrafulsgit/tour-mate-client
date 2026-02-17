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
import AppPagination from "@/components/shared/Pagination";
import { Filter } from "lucide-react";

interface ToursSectionProps {
  onMobileFiltersOpen: () => void;
  isMobileOpen: boolean;
}

const ToursSection = memo(
  ({ onMobileFiltersOpen, isMobileOpen }: ToursSectionProps) => {
    const { getQuery, setQuery } = useQueryManager();
    const debouncedSearch = useDebounce(getQuery("search"), 500);
    const currentPage = Number(getQuery("page")) || 1;
    const { data, isLoading, error } = useGetAllToursQuery({
      searchTerm: debouncedSearch ?? undefined,
      division: getQuery("division") ?? undefined,
      tourType: getQuery("type") ?? undefined,
      limit: Number(getQuery("limit")) || 2,
      page: currentPage,
    });

    const tours = useMemo(() => data?.data ?? [], [data?.data]);

    const totalPages = data?.meta.totalPage || 1;
    const safePage = Math.min(Math.max(currentPage, 1), totalPages);

    return (
      <> 
        {/* Mobile Filter Button */}
        {isMobileOpen && (
          <div className="md:hidden mb-6">
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={onMobileFiltersOpen}
            >
            <Filter size={12} />  Show Filters
            </Button>
          </div>
        )}
        {/* Tours */}
        <Tours tours={tours} isLoading={isLoading} error={error} />
        <div className="mt-4 sm:mt-8">
          <AppPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={(page) => setQuery("page", String(page))}
          />
        </div>
      </>
    );
  },
);

interface ToursProps {
  tours: Tour[];
  isLoading: boolean;
  error: any;
}

const Tours = memo(({ tours, isLoading, error }: ToursProps) => {
  const { clearQuery } = useQueryManager();
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ToursSkeleton />
      </div>
    );
  }

  if (error) return <ApiErrorPage name="Tours" />;

  if (tours.length === 0) {
    return (
      <div className="text-center py-16 w-full">
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tours.map((tour) => (
        <TourCard key={tour._id} tour={tour} />
      ))}
    </div>
  );
});

Tours.displayName = "Tours";
ToursSection.displayName = "ToursSection";

export default ToursSection;
