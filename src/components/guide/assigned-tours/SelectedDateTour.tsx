"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AssignedTour } from "@/mock/assignedTours";
import { Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SelectedDateTour = ({ tour }: { tour: AssignedTour }) => {
  const [expandedTour, setExpandedTour] = useState<string | null>(null);
  return (
    <Card
      key={tour.id}
      className={`sm:py-0 gap-0 overflow-hidden transition cursor-pointer ${
        expandedTour === tour.id ? "ring-2 ring-primary" : ""
      }`}
      onClick={() => setExpandedTour(expandedTour === tour.id ? null : tour.id)}
    >
      {/* Tour Header */}
      <div className="p-4 lg:p-6 bg-linear-to-r">
        <div className="flex items-start justify-between mb-2 lg:mb-4">
          <div className="grow">
            <h3 className="heading text-lg lg:text-xl font-bold text-foreground mb-2">
              {tour.tourTitle}
            </h3>
            <div className="flex flex-wrap gap-2 lg:gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={16} />
                {tour.time} - {tour.duration}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                {tour.location}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={16} />
                {tour.registeredGuests}/{tour.maxGuests} guests
              </div>
            </div>
          </div>
          <Badge
            variant={tour.status === "confirmed" ? "secondary" : "outline"}
          >
            {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Tour Details */}
      {expandedTour === tour.id && (
        <div className="p-4 lg:p-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Tour Information
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium text-foreground">
                    {tour.duration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Guest Availability:
                  </span>
                  <span className="font-medium text-foreground">
                    {tour.maxGuests - tour.registeredGuests}
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-38 lg:h-48 rounded-lg overflow-hidden">
              <Image
                src={tour.image || "uploads/image.jpg"}
                alt={tour.tourTitle}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SelectedDateTour;
