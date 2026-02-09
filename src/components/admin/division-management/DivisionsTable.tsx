import { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockDivisions } from "@/mock/divisions";
import Image from "next/image";
import Link from "next/link";

const DivisiosTable = memo(
  ({ onDelete }: { onDelete: (id: string) => void }) => {
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Thumbnail</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {mockDivisions.map((division) => (
              <TableRow key={division.id}>
                <TableCell>
                  <Image
                    src={division.thumbnail}
                    width={56}
                    height={40}
                    className="w-14 h-10 rounded-lg"
                    alt={division.name}
                  />
                </TableCell>
                <TableCell>{division.name}</TableCell>
                <TableCell>{division.description}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/admin/division-management/${division.id}/update`}
                    >
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
                      onClick={() => onDelete(division.id)}
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
  },
);

export default DivisiosTable;
