import { memo } from "react";
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

const BookingsTable = memo(() => {
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
          {mockUserBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.tourTitle}</TableCell>
              <TableCell>{booking.groupSize}</TableCell>
              <TableCell>{booking.price}</TableCell>
              <TableCell>{booking.bookedOn}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    booking.paymentStatus === "completed"
                      ? "default"
                      : booking.paymentStatus === "pending"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {booking.paymentStatus}
                </Badge>
              </TableCell>
              <TableCell>{booking.status}</TableCell>
              <TableCell className="text-right">
                <Button
                  size="icon-sm"
                  variant="outline"
                  className={cn("", "cursor-pointer")}
                >
                  <Eye size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
});

export default BookingsTable;
