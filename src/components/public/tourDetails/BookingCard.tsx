"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tour } from "@/redux/features/tour/tour.types";
import { Award, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BookingCard = ({ tour }: { tour: Tour }) => {
  const [guests, setGuests] = useState(1);

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

      {/* Guests Selection */}
      <div className="">
        <label className="block text-sm font-medium text-foreground mb-2">
          Number of Guests
        </label>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => guests > 1 && setGuests(guests - 1)}
            variant="destructive"
            disabled={guests === 1}>
            <Minus size={15} />
          </Button>
          <Input
            type="number"
            min="1"
            max={tour.maxGuest}
            value={guests}
            onChange={(e) =>
              setGuests(Math.min(parseInt(e.target.value) || 1, tour.maxGuest))
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

      {/* Total Price */}
      <div className="border-t border-border pt-4 mb-2">
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span className="text-primary">
            $
            {tour.costFrom * guests + Math.round(tour.costFrom * guests * 0.05)}
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <Button className="w-full mb-2" asChild>
        <Link href="/checkout">Book Now</Link>
      </Button>
      <Button variant="outline" className="w-full bg-transparent">
        Contact Guide
      </Button>

      {/* Info */}
      <div className="mt-2 p-4 bg-muted rounded-lg">
        <div className="flex gap-2 text-sm text-muted-foreground">
          <Award size={16} className="shrink-0 mt-0.5" />
          <p>Free cancellation up to 48 hours before the tour</p>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
