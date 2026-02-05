"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserDashboardHeader from "./Header";
import UserStats from "./Stats";
import UserHeader from "../UserHeader";

function DashboardPage() {
  return (
    <>
      <main className="grow pb-8">
        <UserHeader title="My Dashboard" />
        <div className="max-w-7xl mx-auto px-2 sm:px-4 sm:pt-4">
          <UserStats />
          <div className="text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              You haven't written any reviews yet
            </p>
            <Button asChild>
              <Link href="/dashboard">Write a Review</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
export default DashboardPage;
