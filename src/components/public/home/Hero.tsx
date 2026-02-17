"use client";
import { Combobox } from "@/components/shared/combobox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllDivisionsQuery } from "@/redux/features/division";
import { useGetTourTypesQuery } from "@/redux/features/tourType";
import { Calendar, MapPin, Search, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [division, setDivision] = useState("");
  const [type, setType] = useState("");

  const {
    data,
    isLoading: divisionsLoading,
    error,
  } = useGetAllDivisionsQuery();
  const divisions = data?.data;
  const { data: tourTypeData, isLoading: tourTypeLoading } =
    useGetTourTypesQuery();
  const tourTypes = tourTypeData?.data;

  const queryObject: Record<string, string> = {
    search: search.trim(),
    division,
    type,
  };

  const queryString = new URLSearchParams(
    Object.entries(queryObject).filter(([_, value]) => value),
  ).toString();
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
            {/* search */}
            <div className="relative">
              <Label className="block text-sm font-medium text-foreground mb-2">
                Search
              </Label>
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <Input
                  placeholder="search tours"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* division */}
            <div className="relative">
              <Label className="block text-sm font-medium text-foreground mb-2">
                Division
              </Label>
              <div className="relative">
                {divisionsLoading ? (
                  <Skeleton className="h-8 w-full rounded-md" />
                ) : (
                  <Combobox
                    options={
                      divisions?.map((division) => ({
                        value: division._id,
                        label: division.name,
                      })) ?? []
                    }
                    value={division}
                    onChange={setDivision}
                    placeholder="Select division"
                    className="w-full"
                  />
                )}
              </div>
            </div>

            {/* type */}
            <div className="relative">
              <Label className="block text-sm font-medium text-foreground mb-2">
                Type
              </Label>
              <div className="relative">
                {tourTypeLoading ? (
                  <Skeleton className="h-8 w-full rounded-md" />
                ) : (
                  <Combobox
                    options={
                      tourTypes?.map((type) => ({
                        value: type._id,
                        label: type.name,
                      })) ?? []
                    }
                    value={type}
                    onChange={setType}
                    placeholder="Select type"
                    className="w-full"
                  />
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button className="w-full" asChild>
                <Link href={`/tours${queryString ? `?${queryString}` : ""}`}>
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
