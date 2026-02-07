"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import UsersTable from "./UsersTable"; 
import UserDialogs from "./UserDialogs";
import UserHeader from "@/components/user/UserHeader";

type ModalState =
  | { type: "NONE" }
  | { type: "VIEW"; id: string }
  | { type: "BLOCK"; id: string }
  | { type: "DELETE"; id: string };

export default function UserManagementPage() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<ModalState>({ type: "NONE" });
 
  return (
    <main className="grow">
      <UserHeader title="User Management" subTitle="View and manage user accounts" />

      <section className="sm:pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          {/* Filters */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </div>

          {/* Table */}
          <UsersTable
            onView={(id) => setModal({ type: "VIEW", id })}
            onBlock={(id) => setModal({ type: "BLOCK", id })}
            onDelete={(id) => setModal({ type: "DELETE", id })}
          />
        </div>
      </section>

      {/* Dialogs */}
      <UserDialogs modal={modal} onClose={() => setModal({ type: "NONE" })} />
    </main>
  );
}
