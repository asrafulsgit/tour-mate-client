"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import UserHeader from "@/components/user/UserHeader";
import DivisiosTable from "./DivisionsTable";
import DeleteModel from "./DeleteModel";

type ModalState = { type: "NONE" } | { type: "DELETE"; id: string };

function DivisionManagementPage() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<ModalState>({ type: "NONE" });
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
                className="absolute left-3 top-3 text-muted-foreground"
              />
              <Input
                placeholder="Search bookings..."
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
          <DivisiosTable
            onDelete={(id) => setModal({ type: "DELETE", id: id })}
          />
        </div>
      </section>

      {/* delete model */}
      <DeleteModel modal={modal} onClose={() => setModal({ type: "NONE" })} />
    </main>
  );
}
export default DivisionManagementPage;
