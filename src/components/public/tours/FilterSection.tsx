"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, DollarSign, Star, X } from "lucide-react";
import { useGetAllDivisionsQuery } from "@/redux/features/division";
import { Combobox } from "@/components/shared/combobox";
import { useGetTourTypesQuery } from "@/redux/features/tourType";
import { Skeleton } from "@/components/ui/skeleton";
import useQueryManager from "@/hooks/useQueryManager";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "radix-ui";
import { Label } from "@/components/ui/label";

function FilterSection({
  onMobileFiltersClose,
}: {
  onMobileFiltersClose: () => void;
}) {
  const { getQuery, setQuery, clearQuery } = useQueryManager();
  const {
    data,
    isLoading: divisionsLoading,
    error,
  } = useGetAllDivisionsQuery();
  const divisions = data?.data;
  const { data: tourTypeData, isLoading: tourTypeLoading } =
    useGetTourTypesQuery();
  const tourTypes = tourTypeData?.data;

  const limit = getQuery("limit") || 2;

  return (
    <Card className="py-4 sm:py-4 sticky top-18 gap-0">
      <CardHeader className="px-4 sm:px-4 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-lg">Filters</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={onMobileFiltersClose}
          className="md:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>

      <CardContent className="px-4 sm:px-4 pt-4 space-y-4">
        {/* Search */}
        <div className="space-y-2">
          <Label>Search</Label>
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              placeholder="Search tours..."
              value={getQuery("search") ?? ""}
              onChange={(e) => setQuery("search", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Type */}
        <div className="space-y-2">
          <Label>Type</Label>
          {tourTypeLoading ? (
            <Skeleton className="h-10 w-full rounded-md" />
          ) : (
            <Combobox
              options={
                tourTypes?.map((type) => ({
                  value: type._id,
                  label: type.name,
                })) ?? []
              }
              value={getQuery("type") as string}
              onChange={(id) => setQuery("type", id)}
              placeholder="Select type"
              className="w-full"
            />
          )}
        </div>

        {/* Division */}
        <div className="space-y-2">
          <Label>Division</Label>
          {divisionsLoading ? (
            <Skeleton className="h-10 w-full rounded-md" />
          ) : (
            <Combobox
              options={
                divisions?.map((division) => ({
                  value: division._id,
                  label: division.name,
                })) ?? []
              }
              value={getQuery("division") as string}
              onChange={(id) => setQuery("division", id)}
              placeholder="Select division"
              className="w-full"
            />
          )}
        </div>

        {/* Limit */}
        <div className="space-y-2">
          <Label>Limit</Label>
          <Select
            value={String(limit)}
            onValueChange={(value) => setQuery("limit", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="6">6</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Reset */}
        <Button variant="outline" className="w-full" onClick={clearQuery}>
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
}
export default FilterSection;
