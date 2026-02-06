"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockAssignedTours } from "@/mock/assignedTours";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AssignedTourCard from "./AssignedTourCard";

const AssigendTours = () => {
  const [statusFilter, setStatusFilter] = useState<
    "all" | "confirmed" | "pending"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTours = mockAssignedTours
    .filter((tour) => statusFilter === "all" || tour.status === statusFilter)
    .filter(
      (tour) =>
        tour.tourTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h2 className="text-lg sm:text-2xl font-bold text-foreground">
          All Assigned Tours
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          {filteredTours.length} tours
        </p>
      </div>
      {/* Filters */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2">
          {["all", "confirmed", "pending"].map((status) => (
            <Button
              key={status}
              onClick={() => setStatusFilter(status as any)}
              className={`text-xs sm:text-sm sm:px-4 py-0 sm:py-2 rounded-lg font-medium transition ${
                statusFilter === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search by tour name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {/* tours */}
      <div className="space-y-4">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <AssignedTourCard key={tour.id} tour={tour} />
          ))
        ) : (
          <Card className="p-12 text-center">
            <AlertCircle
              size={48}
              className="mx-auto mb-4 text-muted-foreground opacity-50"
            />
            <p className="text-muted-foreground mb-2">No tours found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or search terms
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AssigendTours;
