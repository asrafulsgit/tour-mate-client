import { Card } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import { IBookingDetails } from "@/redux/features/booking/booking.types";
import { format } from "date-fns";

const BookingCard = ({ booking }: { booking: IBookingDetails }) => {
  return (
    <Card className="p-4 sm:p-6 gap-3 sm:gap-6">
      <h3 className="text-lg font-semibold text-foreground">
        Tour Information
      </h3>
      <div className="flex flex-wrap gap-3 sm:gap-6">
        <div className="relative w-full sm:w-50 h-32 rounded-md overflow-hidden">
          <Image
            src={booking.tour.images[0] || "uploads/image.jpg"}
            alt={booking.tour.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="grow">
          <h4 className="heading text-lg sm:text-xl font-semibold text-foreground mb-3">
            {booking?.tour.title}
          </h4>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <div>
                <p className="font-medium text-foreground">
                  {format(booking.tour.startDate, "dd MMM yyyy")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <div>
                <p className="font-medium text-foreground">
                  {format(booking.tour.endDate, "dd MMM yyyy")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-primary" />
              <div>
                <p className="font-medium text-foreground">
                  {booking?.tour.maxGuest} travelers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-primary" />
              <div>
                <p className="font-medium text-foreground">
                  {booking?.payment.amount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
