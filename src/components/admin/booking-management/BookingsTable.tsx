import { memo, useEffect, useMemo } from "react";
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
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockUserBookings } from "@/mock/tours";
import useQueryManager from "@/hooks/useQueryManager";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetAllBookingsQuery } from "@/redux/features/booking";
import BookingsTableSkeleton from "@/components/user/TableSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { format } from "date-fns";
import AppPagination from "@/components/shared/Pagination";
import Link from "next/link";

const BookingsTable = memo(() => {
  const { getQuery, setQuery } = useQueryManager();
  const debouncedSearch = useDebounce(getQuery("search"), 500);
  const currentPage = Number(getQuery("page")) || 1;
  const { data, isLoading, error } = useGetAllBookingsQuery({
    page: currentPage,
    limit: Number(getQuery("limit")) || 10,
    searchTerm: debouncedSearch ?? undefined,
    status: getQuery("status") || undefined,
  });

  const bookings = useMemo(() => data?.data ?? [], [data?.data]);
  const totalPages = data?.meta.totalPage || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setQuery("page", totalPages.toString());
    }
  }, [currentPage, totalPages]);
  if (isLoading) return <BookingsTableSkeleton />;
  if (error) return <ApiErrorPage name="Bookings" isButton={false} />;
  if (bookings.length === 0)
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No bookings yet</p>
      </div>
    );
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour</TableHead>
            <TableHead>Guests</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Booked On</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Booking Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking._id}>
              <TableCell>{booking.tour.title}</TableCell>
              <TableCell>{booking.tour.maxGuest}</TableCell>
              <TableCell>{booking.payment.amount}</TableCell>
              <TableCell>{format(booking.createdAt, "dd-MM-yyyy")}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    booking.status === "COMPLETE"
                      ? "default"
                      : booking.status === "PENDING"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {booking.status}
                </Badge>
              </TableCell>
              <TableCell>{booking.status}</TableCell>
              <TableCell className="text-right">
                <Link href={`/admin/booking-management/${booking._id}`}>
                <Button
                  size="icon-sm"
                  variant="outline"
                  className={cn("", "cursor-pointer")}
                >
                  <Eye size={16} />
                </Button>
                </Link>
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
    </div>
  );
});

export default BookingsTable;
