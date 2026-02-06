"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, TrendingUp, MessageCircle } from "lucide-react";
import { CheckCircle2, Clock } from "lucide-react";
import { mockTours } from "@/mock/tours";
import { mockAssignedTours } from "@/mock/assignedTours";
import UserHeader from "@/components/user/UserHeader";
import GuideStats from "./GuideStats";
import AssignedTourCard from "../assigned-tours/AssignedTourCard";

const guideTours = mockTours.slice(0, 3);

// Calculate guide statistics

function GuideDashboardPage() {
  const recentTours = mockAssignedTours
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <main className="grow">
      {/* Dashboard Header */}
      <UserHeader title="Guide Dashboard" />

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 space-y-6 mb-8">
        {/* Stats Grid */}
        <GuideStats />
        {/* Recent Assigned Tours */}
        <Card className="p-3 sm:p-6 gap-4">
          <div className="flex items-center justify-between gap-1">
            <h3 className="sm:text-lg font-semibold text-foreground">
              Recent Assigned Tours
            </h3>
            <Button variant="outline" size="sm" asChild>
              <Link href="/guide/assigned-tours">View All</Link>
            </Button>
          </div>
          <div className="space-y-2 sm:space-y-4">
            {recentTours.length > 0 ? (
              recentTours.map((tour) => { 
                return <AssignedTourCard key={tour.id} tour={tour} />;
              })
            ) : (
              <div className="text-center py-8">
                <MessageCircle
                  size={32}
                  className="mx-auto mb-2 text-muted-foreground opacity-50"
                />
                <p className="text-muted-foreground">No assigned tours</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
export default GuideDashboardPage;
