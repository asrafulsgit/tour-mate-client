"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("1");
  return (
    <section className="relative pt-10 md:pt-30 md:pb-30 bg-linear-to-b from-primary/10 to-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-12">
          <h1 className="heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 sm:mb-6 text-balance">
            Discover Adventures Around You
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Connect with expert local guides and book unforgettable experiences
            worldwide. Create memories that last a lifetime.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg border border-border p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <Input
                  placeholder="Where to?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Date */}
            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2">
                Date
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2">
                Guests
              </label>
              <div className="relative">
                <Users
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button className="w-full" asChild>
                <Link href="/tours">
                  <Search size={18} className="mr-2" />
                  Search
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
