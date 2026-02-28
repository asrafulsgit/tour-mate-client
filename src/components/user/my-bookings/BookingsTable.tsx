import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookingsTableSkeleton from "../TableSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { IBooking } from "@/redux/features/booking/booking.types";
import { format } from "date-fns";

export default function BookingsTable({
  bookings,
  isLoading,
  error,
}: {
  bookings: IBooking[];
  isLoading: Boolean;
  error: any;
}) {
  if (isLoading) {
    return <BookingsTableSkeleton />;
  }
  if (error) return <ApiErrorPage name="my bookings" />;
  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No bookings yet</p>
        <Button asChild>
          <Link href="/tours">Browse Tours</Link>
        </Button>
      </div>
    );
  }
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Guests</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking._id}>
              {/* Tour */}
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative w-20 h-14 rounded-md overflow-hidden">
                    <Image
                      src={booking.tour.images[0] || "/public/placeholder.png"}
                      alt={booking.tour.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium">{booking.tour.title}</span>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={14} />
                  {format(booking.tour.startDate, "dd-MM-yyyy")}
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={14} />
                  {format(booking.tour.endDate, "dd-MM-yyyy")}
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users size={14} />
                  {booking.guests}
                </div>
              </TableCell>

              <TableCell className="font-semibold text-primary">
                <div className="flex items-center gap-1">
                  <DollarSign size={14} />
                  {booking.payment.amount}
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  className={
                    booking.status === "COMPLETE"
                      ? "bg-ring text-white" : booking.status === "PENDING" ?
                       "bg-accent text-white": "bg-red-600 text-white"
                  }
                >
                  {booking.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/user/my-bookings/${booking._id}`}>
                      Details
                    </Link>
                  </Button>

                  <Button size="sm" asChild>
                    <Link href={`/tours/${booking.tour._id}`}>Tour</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
