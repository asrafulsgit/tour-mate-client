"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tour } from "@/mock/tours";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Link href={`/tours/${tour.id}`}>
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-primary transition-all group cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={tour.image || "/placeholder.svg"}
            alt={tour.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            {tour.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col grow">
          {/* Title */}
          <h3 className="heading text-lg font-semibold text-foreground mb-2 line-clamp-2">
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
          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock size={14} />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users size={14} />
              <span>{tour.groupSize} people</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-accent text-accent" />
              <span className="text-foreground font-medium">{tour.rating}</span>
            </div>
          </div>

          {/* Guide */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
            <div className="w-6 h-6 rounded-full bg-muted overflow-hidden">
              <Image
                src={tour.guide.avatar || "/placeholder.svg"}
                alt={tour.guide.name}
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground">
              {tour.guide.name}
            </span>
          </div>

          {/* Price and Rating */}
          <div className="flex justify-between items-center mt-auto">
            <div>
              <p className="text-xs text-muted-foreground">From</p>
              <p className="text-xl font-bold text-primary">${tour.price}</p>
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
