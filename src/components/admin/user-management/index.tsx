"use client";

import { useCallback, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import UsersTable from "./UsersTable";
import UserDialogs from "./UserDialogs";
import UserHeader from "@/components/user/UserHeader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useQueryManager from "@/hooks/useQueryManager";
import { Role } from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";

type ModalState =
  | { type: "VIEW"; id: string }
  | { type: "BLOCK"; id: string }
  | { type: "DELETE"; id: string } | null;

export default function UserManagementPage() {
  const [modal, setModal] = useState<ModalState>(null);
  const { getQuery, setQuery, clearQuery } = useQueryManager();
  const limit = getQuery("limit") || 10;

  const handleView = useCallback((id: string) => {
    setModal({ type: "VIEW", id });
  }, []);

  const handleBlock = useCallback((id: string) => {
    setModal({ type: "BLOCK", id });
  }, []);

  const handleDelete = useCallback((id: string) => {
    setModal({ type: "DELETE", id });
  }, []);

  const handleClose = useCallback(() => {
    setModal(null);
  }, []);
  return (
    <main className="grow">
      <UserHeader
        title="User Management"
        subTitle="View and manage user accounts"
      />

      <section className="sm:pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          {/* Filters */}
          <div className="flex gap-3">
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
            <Select
              value={getQuery("role") ?? ""}
              onValueChange={(value) => setQuery("role", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={Role.USER}>User</SelectItem>
                  <SelectItem value={Role.GUIDE}>Guide</SelectItem>
                  <SelectItem value={Role.ADMIN}>Admin</SelectItem>
                  <SelectItem value={Role.SUPER_ADMIN}>Super Admin</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              value={getQuery("isActive") ?? ""}
              onValueChange={(value) => setQuery("isActive", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ACTIVE">Active</SelectItem>
                  <SelectItem value="INACTIVE">Inactive</SelectItem>
                  <SelectItem value="BLOCKED">Blocked</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              value={getQuery("isVerified") ?? ""}
              onValueChange={(value) => setQuery("isVerified", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Verification" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="true">Verified</SelectItem>
                  <SelectItem value="false">Unverified</SelectItem>
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

          {/* Table */}
          <UsersTable
            onView={handleView}
            onBlock={handleBlock}
            onDelete={handleDelete}
          />
        </div>
      </section>

      {/* Dialogs */}
      <UserDialogs modal={modal} onClose={handleClose} />
    </main>
  );
}
