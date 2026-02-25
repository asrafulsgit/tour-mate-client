"use client";
import UserHeader from "../UserHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BookingsTable from "./BookingsTable";
import { useGetMyBookingsQuery } from "@/redux/features/booking";

const MyBookings = () => {
  const { data, isLoading, error } = useGetMyBookingsQuery();

  return (
    <main className="grow">
      <UserHeader
        title="My Bookings"
        subTitle="View and manage all your tour bookings"
      />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="space-y-4">
          <BookingsTable
            bookings={data?.data || []}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </main>
  );
};

export default MyBookings;
