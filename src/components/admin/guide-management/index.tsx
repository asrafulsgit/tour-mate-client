"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import UserHeader from "@/components/user/UserHeader";
import GuideTable from "./GuideTable";
import GuideDialogs from "./GuideDialogs";
import { cn } from "@/lib/utils";

type ModalState =
  | { type: "NONE" }
  | { type: "DETAILS"; id: string }
  | { type: "REJECT"; id: string }
  | { type: "APPROVE"; id: string };

export type GuideApplicationStatus = "pending" | "approved" | "rejected";

function GuideManagementPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | GuideApplicationStatus>("all");
  const [modal, setModal] = useState<ModalState>({ type: "NONE" });

  return (
    <main className="grow">
      <UserHeader
        title="Guide Applications"
        subTitle="Review and approve guide applications"
      />

      <section className="sm:pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          {/* Filters */}
          <div className="space-y-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-muted-foreground"
              />
              <Input
                placeholder="Search applicants..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["all", "pending", "approved", "rejected"].map((s) => (
                <Button
                  key={s}
                  variant={status === s ? "default" : "outline"} 
                  onClick={() => setStatus(s as any)}
                  className={cn("","text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-2")}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* List */}
          <GuideTable
            onView={(id) => setModal({ type: "DETAILS", id: id })}
            onReject={(id) => setModal({ type: "REJECT", id })}
            onApprove={(id) => setModal({ type: "APPROVE", id })}
          />
        </div>
      </section>

      {/* Dialogs */}
      <GuideDialogs modal={modal} onClose={() => setModal({ type: "NONE" })} />
    </main>
  );
}
export default GuideManagementPage;
