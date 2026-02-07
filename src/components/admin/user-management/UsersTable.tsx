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
import { Ban, Eye, Trash2 } from "lucide-react"; 
import { adminUsers } from "@/mock/users";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { 
  onView: (id: string) => void;
  onBlock: (id: string) => void;
  onDelete: (id: string) => void;
};

const UsersTable = memo(({ onView, onBlock, onDelete }: Props) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Bookings</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {adminUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="flex items-center gap-3">
                <Image
                  src={user.avatar}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                  alt={user.name}
                />
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={user.role === "USER" ? "default" :
                  user.role === "GUIDE" ? "secondary" : "destructive"}>{user.role}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant={user.isActive === "ACTIVE" ? "default" : "destructive"}>
                  {user.isActive}
                </Badge>
              </TableCell>
              <TableCell>{user.totalBookings}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="icon-sm" variant="outline"  className={cn("","cursor-pointer")} onClick={() => onView(user.id)}>
                    <Eye size={16} />
                  </Button>
                  <Button size="icon-sm" variant="outline" className={cn("","bg-accent text-white hover:text-white cursor-pointer")} onClick={() => onBlock(user.id)}>
                    <Ban size={16} />
                  </Button>
                  <Button size="icon-sm" variant="destructive"  className={cn("","cursor-pointer")} onClick={() => onDelete(user.id)}>
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

export default UsersTable;
