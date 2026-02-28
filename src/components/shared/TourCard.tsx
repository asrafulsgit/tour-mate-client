"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Users, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tour } from "@/redux/features/tour/tour.types";
import { format } from "date-fns";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Link href={`/tours/${tour._id}`}>
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-primary transition-all group cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={tour.images[0] || "uploads/image.jpg"}
            alt={tour.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            {tour.tourType?.name}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col grow">
          {/* Title */}
          <h3 className="heading text-lg font-semibold text-foreground mb-2 line-clamp-1">
            {tour.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {tour.description}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <MapPin size={16} className="shrink-0" />
            <span className="line-clamp-1">{tour.location}</span>
          </div>

          {/* Details Grid */}
          <div className="flex gap-3 mb-4 text-xs">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar size={14} />
              <span>{format(tour.startDate, "MMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users size={14} />
              <span>Max {tour.maxGuest}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-accent text-accent" />
              <span className="text-foreground font-medium">{tour.rating}</span>
            </div>
          </div>

          {/* Included Items */}
          <div className="mb-4 pb-4 border-b border-border">
            <p className="text-xs text-muted-foreground mb-2">Includes:</p>
            <div className="flex flex-wrap gap-1">
              {tour.included.slice(0, 2).map((item, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
              {tour.included.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{tour.included.length - 2}
                </Badge>
              )}
            </div>
          </div>

          {/* Price and Reviews */}
          <div className="flex justify-between items-center mt-auto">
            <div>
              <p className="text-xs text-muted-foreground">From</p>
              <p className="text-xl font-bold text-primary">
                <span className="text-lg font-extrabold mr-1">৳</span>{tour.costFrom.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-foreground">
                {tour.reviews} reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
