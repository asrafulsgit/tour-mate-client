import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useQueryManager from "@/hooks/useQueryManager";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetAllToursQuery } from "@/redux/features/tour";
import AppPagination from "@/components/shared/Pagination";
import BookingsTableSkeleton from "@/components/user/TableSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { format } from "date-fns";
import DeleteModel from "./DeleteModel";

const ToursTable = memo(() => {
  const { getQuery, setQuery } = useQueryManager();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<{
    name: string;
    id: string;
  } | null>(null);
  const debouncedSearch = useDebounce(getQuery("search"), 500);
  const currentPage = Number(getQuery("page")) || 1;

  const { data, isLoading, error } = useGetAllToursQuery({
    searchTerm: debouncedSearch ?? undefined,
    division: getQuery("division") ?? undefined,
    tourType: getQuery("type") ?? undefined,
    limit: Number(getQuery("limit")) || 10,
    page: currentPage,
  });

  const tours = useMemo(() => data?.data ?? [], [data?.data]);

  const totalPages = data?.meta.totalPage || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setQuery("page", totalPages.toString());
    }
  }, [currentPage, totalPages]);
  const handleDeleteClick = useCallback(
    (tour: { _id: string; title: string }) => {
      setSelectedTour({ name: tour.title, id: tour._id });
      setDeleteDialogOpen(true);
    },
    [],
  );
  const handleDeleteSuccess = useCallback(() => {
    setDeleteDialogOpen(false);
    setSelectedTour(null);
  }, []);
  if (isLoading) {
    return <BookingsTableSkeleton />;
  }
  if (error) return <ApiErrorPage name="tours" isButton={false} />;
  if (tours.length === 0)
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No tours yet</p>
      </div>
    );
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Division</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Max Guests</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tours.map((tour) => (
            <TableRow key={tour._id}>
              <TableCell className="flex items-center gap-3">
                <Image
                  src={tour.images[0] || "/public/placeholder.png"}
                  width={56}
                  height={40}
                  className="w-14 h-10 rounded-lg"
                  alt={tour.title}
                />
                <h1 className="line-clamp-1">{tour.title}</h1>
              </TableCell>
              <TableCell>
                <p className="line-clamp-1">{tour.location}</p>
              </TableCell>
              <TableCell>{tour.division.name}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{format(tour.startDate, "dd-MM-yyyy")}</span>
                  <span>{format(tour.endDate, "dd-MM-yyyy")}</span>
                </div>
              </TableCell>
              <TableCell>{tour.maxGuest}</TableCell>
              <TableCell>
                <Badge variant="default">{tour.tourType.name}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Link href={`/tours/${tour._id}`}>
                    <Button
                      size="icon-sm"
                      variant="outline"
                      className={cn("", "cursor-pointer")}
                    >
                      <Eye size={16} />
                    </Button>
                  </Link>
                  <Link href={`/admin/tour-management/${tour._id}/update`}>
                    <Button
                      size="icon-sm"
                      variant="outline"
                      className={cn(
                        "",
                        "bg-accent text-white hover:text-white cursor-pointer",
                      )}
                    >
                      <SquarePen size={16} />
                    </Button>
                  </Link>
                  <Button
                    size="icon-sm"
                    variant="destructive"
                    className={cn("", "cursor-pointer")}
                    onClick={() =>
                      handleDeleteClick({ title: tour.title, _id: tour._id })
                    }
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 sm:mt-8">
        <AppPagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={(page) => setQuery("page", String(page))}
        />
      </div>
      {selectedTour && (
        <DeleteModel
          key={selectedTour.id}
          data={selectedTour}
          open={deleteDialogOpen}
          onClose={handleDeleteSuccess}
        />
      )}
    </div>
  );
});

export default ToursTable;
