"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Plus } from "lucide-react";
import UserHeader from "@/components/user/UserHeader";
import ToursTable from "./ToursTable";
import DeleteModel from "./DeleteModel";
import Link from "next/link";
import { cn } from "@/lib/utils";

function TourManagementPage() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<boolean>(false);

  return (
    <main className="grow">
      <UserHeader
        title="Tour Management"
        subTitle="Create, edit, and manage tours"
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link href={'/admin/tour-management/create'}>
              <Button variant="default" className={cn("","cursor-pointer")}>
                <Plus size={16} />
                Create
              </Button>
            </Link>
          </div>

          {/* Table */}
          <ToursTable onDelete={() => setModal(true)} />
        </div>
      </section>

      {/* Dialogs */}
      <DeleteModel modal={modal} onClose={() => setModal(false)} />
    </main>
  );
}

export default TourManagementPage;
