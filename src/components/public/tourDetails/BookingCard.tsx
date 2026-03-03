"use client";

import { Role } from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CUSTOM_ERROR } from "@/constants/custom_error_code";
import { cn } from "@/lib/utils";
import { useCreateBookingMutation } from "@/redux/features/booking";
import { Tour } from "@/redux/features/tour/tour.types";
import { useGetUserQuery } from "@/redux/features/user";
import { Award, Loader, Minus, Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const BookingCard = ({ tour }: { tour: Tour }) => {
  const router = useRouter();
  const tourId = useParams().id as string;
  const [guests, setGuests] = useState(1);
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  const { data: userData } = useGetUserQuery();
  const user = userData?.data;
  const handleBooking = async () => {
    try {
      const res = await createBooking({
        tour: tourId,
        guests: guests,
      }).unwrap();
      window.location.href = res.data.paymentUrl;
    } catch (error: any) {
      if (error.data.code === CUSTOM_ERROR.TOKEN_NOT_FOUND) {
        router.push("/auth/login");
        return;
      }
      toast.error(error.data.message || "Booking failed");
    }
  };
  return (
    <Card className="p-4 sm:p-6 gap-3 mb-4">
      <div className="">
        <p className="text-sm text-muted-foreground mb-1">Starting from</p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl sm:text-3xl font-bold text-primary">
            <span className="text-base sm:text-xl font-extrabold mr-1">৳</span>
            {tour.costFrom}
          </span>
          <span className="text-sm text-muted-foreground">per person</span>
        </div>
      </div>
      {user?.role === Role.USER && (
        <>
          <div className="">
            <label className="block text-sm font-medium text-foreground mb-2">
              Number of Guests
            </label>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => guests > 1 && setGuests(guests - 1)}
                variant="destructive"
                disabled={guests === 1}
              >
                <Minus size={15} />
              </Button>
              <Input
                type="number"
                min="1"
                max={tour.maxGuest}
                value={guests}
                onChange={(e) =>
                  setGuests(
                    Math.min(parseInt(e.target.value) || 1, tour.maxGuest),
                  )
                }
                className="text-center"
              />
              <Button
                onClick={() => guests < tour.maxGuest && setGuests(guests + 1)}
                variant="default"
                disabled={guests === tour.maxGuest}
              >
                <Plus size={15} />
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-4 mb-2">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">
                ${Math.round(tour.costFrom * guests)}
              </span>
            </div>
          </div>

          <Button
            className={cn("", "w-full mb-2 cursor-pointer")}
            disabled={isLoading}
            onClick={handleBooking}
          >
            {isLoading ? (
              <>
                <Loader className="size-4 animate-spin" />
                Book Now
              </>
            ) : (
              `Book Now`
            )}
          </Button>

          <div className="mt-2 p-4 bg-muted rounded-lg">
            <div className="flex gap-2 text-sm text-muted-foreground">
              <Award size={16} className="shrink-0 mt-0.5" />
              <p>Free cancellation up to 48 hours before the tour</p>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default BookingCard;
