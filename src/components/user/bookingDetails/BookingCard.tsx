import { Card } from "@/components/ui/card";
import { Booking } from "@/mock/tours";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";
import Image from "next/image";

const BookingCard = ({ booking }: { booking: Booking }) => {
  return (
    <Card className="p-4 sm:p-6 gap-3 sm:gap-6">
      <h3 className="text-lg font-semibold text-foreground">
        Tour Information
      </h3>
      <div className="flex flex-wrap gap-3 sm:gap-6">
        <Image
          src={booking.image || "/placeholder.svg"}
          alt={booking.tourTitle}
          width={128}
          height={128}
          className="w-full sm:w-32 h-50 sm:h-32 rounded-lg object-cover"
        />
        <div className="grow">
          <h4 className="heading text-lg sm:text-xl font-semibold text-foreground mb-3">
            {booking.tourTitle}
          </h4>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="text-sm sm:text-base font-medium text-foreground">
                  {new Date(booking.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <div>
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium text-foreground">
                  {booking.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-primary" />
              <div>
                <p className="text-muted-foreground">Group Size</p>
                <p className="font-medium text-foreground">
                  {booking.groupSize} travelers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-primary" />
              <div>
                <p className="text-muted-foreground">Total Price</p>
                <p className="font-medium text-foreground">${booking.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
