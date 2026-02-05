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
import { Booking } from "@/mock/tours";

export default function BookingsTable({
  bookings,
}: {
  bookings: Booking[];
}) {
  return (
    <div className="rounded-lg border overflow-hidden"> 
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tour</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Guests</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                {/* Tour */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-md overflow-hidden">
                      <Image
                        src={booking.image || "/placeholder.svg"}
                        alt={booking.tourTitle}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">
                      {booking.tourTitle}
                    </span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} />
                    {booking.date}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={14} />
                    {booking.duration}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users size={14} />
                    {booking.groupSize}
                  </div>
                </TableCell>

                <TableCell className="font-semibold text-primary">
                  <div className="flex items-center gap-1">
                    <DollarSign size={14} />
                    {booking.price}
                  </div>
                </TableCell>

                <TableCell>
                  <Badge
                    className={
                      booking.status === "confirmed"
                        ? "bg-ring text-white"
                        : "bg-accent text-white"
                    }
                  >
                    {booking.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/dashboard/bookings/${booking.id}`}>
                        Details
                      </Link>
                    </Button>

                    <Button size="sm" asChild>
                      <Link href={`/tours/${booking.tourId}`}>
                        Tour
                      </Link>
                    </Button>

                    {booking.status === "pending" && (
                      <Button size="sm" variant="destructive" className="cursor-pointer">
                        Cancel
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> 
    </div>
  );
}
