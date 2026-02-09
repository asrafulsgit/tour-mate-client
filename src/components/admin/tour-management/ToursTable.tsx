import { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ban, Eye, SquarePen, Trash2 } from "lucide-react";
import { adminUsers } from "@/mock/users";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { mockTours } from "@/mock/tours";
import Link from "next/link";

type Props = {
  onDelete: () => void;
};

const ToursTable = memo(({ onDelete }: Props) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Max Guests</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {mockTours.map((tour) => (
            <TableRow key={tour.id}>
              <TableCell className="flex items-center gap-3">
                <Image
                  src={tour.image}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                  alt={tour.title}
                />
                {tour.title}
              </TableCell>
              <TableCell>{tour.location}</TableCell>
              <TableCell>{tour.duration}</TableCell>
              <TableCell>{tour.groupSize}</TableCell>
              <TableCell>
                <Badge variant="default">{tour.category}</Badge>
              </TableCell>
              {/* <TableCell>
                <Badge variant={user.isActive === "ACTIVE" ? "default" : "destructive"}>
                  {user.isActive}
                </Badge>
              </TableCell> */}
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    size="icon-sm"
                    variant="outline"
                    className={cn("", "cursor-pointer")}
                  >
                    <Eye size={16} />
                  </Button>
                  <Link href={`/admin/tour-management/${tour.id}/update`}>
                    <Button
                      size="icon-sm"
                      variant="outline"
                      className={cn(
                        "",
                        "bg-accent text-white hover:text-white cursor-pointer",
                      )}
                    >
                      <SquarePen size={16} />
                    </Button>
                  </Link>
                  <Button
                    size="icon-sm"
                    variant="destructive"
                    className={cn("", "cursor-pointer")}
                    onClick={() => onDelete()}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
});

export default ToursTable;
