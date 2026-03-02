"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import UserHeader from "@/components/user/UserHeader";
import GuideStats from "./GuideStats";
import RecentTours from "./RecentTours"; 

function GuideDashboardPage() {
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
            <RecentTours />
          </div>
        </Card>
      </div>
    </main>
  );
}
export default GuideDashboardPage;
