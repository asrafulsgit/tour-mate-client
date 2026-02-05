import UserHeader from "../UserHeader";
import { mockUserBookings } from "@/mock/tours";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 
import BookingsTable from "./BookingsTable";

const MyBookings = () => {
  return (
    <main className="grow">
      <UserHeader
        title="My Bookings"
        subTitle="View and manage all your tour bookings"
      />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="space-y-4">
          {mockUserBookings.length > 0 ? ( 
              <BookingsTable bookings={mockUserBookings} /> 
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No bookings yet</p>
              <Button asChild>
                <Link href="/tours">Browse Tours</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyBookings;
