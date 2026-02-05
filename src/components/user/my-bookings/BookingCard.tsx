import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Booking } from "@/mock/tours";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BookingCard = ({ booking }: { booking: Booking }) => {
  return (
    <Card key={booking.id} className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image */}
        <div className="w-full md:w-32 h-32 relative rounded-lg overflow-hidden shrink-0">
          <Image
            src={booking.image || "/placeholder.svg"}
            alt={booking.tourTitle}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-foreground">
              {booking.tourTitle}
            </h3>
            <Badge
              className={
                booking.status === "confirmed"
                  ? "bg-green-500 text-white"
                  : "bg-yellow-500 text-white"
              }
            >
              {booking.status === "confirmed" ? "Confirmed" : "Pending"}
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={16} />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock size={16} />
              <span>{booking.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users size={16} />
              <span>{booking.groupSize} guests</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <DollarSign size={16} />
              <span>${booking.price}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/bookings/${booking.id}`}>
                View Details
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={`/tours/${booking.tourId}`}>View Tour</Link>
            </Button>
            {booking.status === "pending" && (
              <Button
                variant="destructive"
                size="sm"
                // onClick={() => {
                //   setSelectedBooking(booking.id);
                //   setCancelModalOpen(true);
                // }}
              >
                Cancel
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
