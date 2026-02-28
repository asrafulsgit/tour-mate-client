import React from "react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGetAllDivisionsQuery } from "@/redux/features/division";
import { useGetTourTypesQuery } from "@/redux/features/tourType";
import { Skeleton } from "@/components/ui/skeleton";
import { Combobox } from "@/components/shared/combobox";
import useQueryManager from "@/hooks/useQueryManager";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const FilterSection = () => {
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
  const limit = getQuery("limit") || 10;
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-2.5 text-muted-foreground"
        />
        <Input
          placeholder="Search users..."
          className="pl-10"
          value={getQuery("search") as string ?? ""}
          onChange={(e) => setQuery("search", e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
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
          />
        )}

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
          />
        )}

        <Select
          value={String(limit)}
          onValueChange={(value) => setQuery("limit", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={clearQuery}>
          Reset Filters
        </Button>
        <Link href={"/admin/tour-management/create"}>
          <Button variant="default" className={cn("", "cursor-pointer")}>
            <Plus size={16} />
            Create
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FilterSection;
