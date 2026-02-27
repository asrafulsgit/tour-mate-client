import { memo, useEffect, useMemo } from "react";
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
import { Ban, CircleCheckBig, Eye, Trash2 } from "lucide-react";
import { adminUsers } from "@/mock/users";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGetAllUsersQuery } from "@/redux/features/user";
import useQueryManager from "@/hooks/useQueryManager";
import { useDebounce } from "@/hooks/useDebounce";
import AppPagination from "@/components/shared/Pagination";
import BookingsTableSkeleton from "@/components/user/TableSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";

type Props = {
  onView: (id: string) => void;
  onBlock: (id: string) => void;
};

const UsersTable = memo(({ onView, onBlock }: Props) => {
  const { getQuery, setQuery } = useQueryManager();
  const debouncedSearch = useDebounce(getQuery("search"), 500);
  const currentPage = Number(getQuery("page")) || 1;
  const { data, isLoading, error } = useGetAllUsersQuery({
    page: currentPage,
    limit: Number(getQuery("limit")) || 10,
    searchTerm: debouncedSearch ?? undefined,
    isVerified: Boolean(getQuery("isVerified")) || undefined,
    role: getQuery("role") || undefined,
    isActive: getQuery("isActive") || undefined,
  });

  const users = useMemo(() => data?.data ?? [], [data?.data]);
  const totalPages = data?.meta.totalPage || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setQuery("page", totalPages.toString());
    }
  }, [currentPage, totalPages]);
  if (isLoading) return <BookingsTableSkeleton />;
  if (error) return <ApiErrorPage name="user" isButton={false} />;
  if (users.length === 0)
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No users yet</p>
      </div>
    );
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="flex items-center gap-3">
                <Image
                  src={user.picture || "/placeholder.png"}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                  alt={user.name}
                />
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.role === "USER"
                      ? "default"
                      : user.role === "GUIDE"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.isActive === "ACTIVE" ? "default" : "destructive"
                  }
                >
                  {user.isActive}
                </Badge>
              </TableCell>
              <TableCell>{user.phone || "N/A"}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    size="icon-sm"
                    variant="outline"
                    className={cn("", "cursor-pointer")}
                    onClick={() => onView(user._id)}
                  >
                    <Eye size={16} />
                  </Button>
                  <Button
                    size="icon-sm"
                    variant="outline"
                    className={cn(
                      "",
                      `${user.isActive === "BLOCKED" ? "bg-green-600 hover:bg-green-600" : "bg-accent"} text-white hover:text-white cursor-pointer`,
                    )}
                    onClick={() => onBlock(user._id)}
                  >
                    {user.isActive === "BLOCKED" ? (
                      <CircleCheckBig size={16} />
                    ) : (
                      <Ban size={16} />
                    )}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 sm:mt-8">
        <AppPagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={(page) => setQuery("page", String(page))}
        />
      </div>
    </div>
  );
});

export default UsersTable;
