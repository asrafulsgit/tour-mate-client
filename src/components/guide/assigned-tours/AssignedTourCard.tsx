import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AssignedTour } from "@/mock/assignedTours";
import Image from "next/image";
import Link from "next/link";

const AssignedTourCard = ({ tour }: { tour: AssignedTour }) => {
  return (
    <Card key={tour.id} className="p-3 ms:p-6 hover:border-primary transition">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-6">
        {/* Tour Image */}
        <div className="relative h-40 rounded-lg overflow-hidden md:col-span-1">
          <Image
            src={tour.image || "/placeholder.svg"}
            alt={tour.tourTitle}
            fill
            className="object-cover"
          />
        </div>

        {/* Tour Details */}
        <div className="md:col-span-3">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="heading sm:text-lg font-bold text-foreground">
                {tour.tourTitle}
              </h3>
              <p className="text-muted-foreground text-sm">{tour.location}</p>
            </div>
            <Badge
              variant={tour.status === "confirmed" ? "secondary" : "outline"}
            >
              {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Date & Time</p>
              <p className="font-semibold text-foreground text-sm">
                {new Date(tour.date).toLocaleDateString()} at {tour.time}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Duration</p>
              <p className="font-semibold text-foreground text-sm">
                {tour.duration}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Guests</p>
              <p className="font-semibold text-foreground text-sm">
                {tour.registeredGuests}/{tour.maxGuests}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button asChild size="sm">
              <Link href={`/guide/assigned-tours/${tour.id}`}>
                View Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AssignedTourCard;
