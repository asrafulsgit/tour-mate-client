"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockAssignedTours } from "@/mock/assignedTours";
import { AlertCircle } from "lucide-react";
import React, { useState } from "react";
import AssignedTourCard from "./AssignedTourCard";
import { useGetGuideAssignedToursQuery } from "@/redux/features/guide";

const AssigendTours = () => {
  const { data, isLoading, error } = useGetGuideAssignedToursQuery();
  const filteredTours = data?.data;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h2 className="text-lg sm:text-2xl font-bold text-foreground">
          All Assigned Tours
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          {filteredTours?.length} tours
        </p>
      </div>
      {/* tours */}
      <div className="space-y-4">
        {filteredTours && filteredTours?.length > 0 ? (
          filteredTours?.map((tour) => (
            <AssignedTourCard key={tour._id} tour={tour} />
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
