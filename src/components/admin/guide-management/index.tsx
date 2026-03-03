"use client";

import { useCallback, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import UserHeader from "@/components/user/UserHeader";
import GuideTable from "./GuideTable";
import GuideDialogs from "./GuideDialogs";
import { cn } from "@/lib/utils";
import useQueryManager from "@/hooks/useQueryManager";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ModalState =
  | { type: "DETAILS"; id: string }
  | { type: "REJECT"; id: string }
  | { type: "APPROVE"; id: string }
  | null;

function GuideManagementPage() {
  const [modal, setModal] = useState<ModalState>(null);

  const { getQuery, setQuery, clearQuery } = useQueryManager();
  const limit = getQuery("limit") || 10;

  const handleDetails = useCallback((id: string) => {
    setModal({ type: "DETAILS", id });
  }, []);

  const handleReject = useCallback((id: string) => {
    setModal({ type: "REJECT", id });
  }, []);
  const handleApprove = useCallback((id: string) => {
    setModal({ type: "APPROVE", id });
  }, []);

  const handleClose = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <main className="grow">
      <UserHeader
        title="Guide Applications"
        subTitle="Review and approve guide applications"
      />

      <section className="sm:pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 space-y-6">
          {/* Filters */}
          <div className="flex gap-3 flex-col sm:flex-row">
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
           <div className="flex gap-2">
             <Select
              value={getQuery("status") ?? ""}
              onValueChange={(value) => setQuery("status", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={"APPROVED"}>Approved</SelectItem>
                  <SelectItem value={"PENDING"}>Pending</SelectItem>
                  <SelectItem value={"REJECTED"}>Rejected</SelectItem>
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
          </div>

          {/* List */}
          <GuideTable
            onDetails={handleDetails}
            onReject={handleReject}
            onApprove={handleApprove}
          />
        </div>
      </section>

      {/* Dialogs */}
      {modal && <GuideDialogs modal={modal} onClose={handleClose} />}
    </main>
  );
}
export default GuideManagementPage;
