"use client";

import { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Plus } from "lucide-react";
import UserHeader from "@/components/user/UserHeader";
import DivisiosTable from "./DivisionsTable";
import DeleteModel from "./DeleteModel";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ModalState = { type: "DELETE"; id: string } | null;

function DivisionManagementPage() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<ModalState>(null);

  const handleDelete = useCallback((id: string) => {
    setModal({ type: "DELETE", id });
  }, []);
  const handleClose = useCallback(() => {
    setModal(null);
  }, []);
  return (
    <main className="grow">
      <UserHeader
        title="Division Management"
        subTitle="Manage geographical divisions"
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
                placeholder="Search bookings..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link href={"/admin/division-management/create"}>
              <Button variant="default" className={cn("", "cursor-pointer")}>
                <Plus size={16} />
                Create
              </Button>
            </Link>
          </div>

          {/* Table */}
          <DivisiosTable onDelete={handleDelete} />
        </div>
      </section>

      {/* delete model */}
      {modal && <DeleteModel modal={modal} onClose={handleClose} />}
    </main>
  );
}
export default DivisionManagementPage;
