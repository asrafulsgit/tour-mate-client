import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useQueryManager from "@/hooks/useQueryManager";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const FilterSection = () => {
  const { getQuery, setQuery, clearQuery } = useQueryManager();
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
          value={getQuery("search") ?? ""}
          onChange={(e) => setQuery("search", e.target.value)}
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        <Select
          value={getQuery("status") ?? ""}
          onValueChange={(value) => setQuery("status", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Booking Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={"PENDING"}>Pending</SelectItem>
              <SelectItem value={"COMPLETE"}>Complete</SelectItem>
              <SelectItem value={"CANCEL"}>Cancel</SelectItem>
              <SelectItem value={"FAILED"}>Failed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          value={String(limit)}
          onValueChange={(value) => setQuery("limit", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Reset */}
        <Button
          variant="outline"
          className={cn("", "cursor-pointer")}
          onClick={clearQuery}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
