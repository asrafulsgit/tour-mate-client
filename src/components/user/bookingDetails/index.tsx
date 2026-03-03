"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Calendar,
  Users,
  MapPin,
  DollarSign,
  Clock,
  Phone,
  Mail,
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Banknote,
  AlertCircle,
  Loader,
} from "lucide-react";
import { mockUserBookings } from "@/mock/tours";
import UserHeader from "../UserHeader";
import StatusTimeLine from "./StatusTimeLine";
import BookingCard from "./BookingCard";
import { useGetBookingDetailsQuery } from "@/redux/features/booking";
import { IPaymentStatus } from "@/redux/features/booking/booking.types";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import BookingDetailsSkeleton from "./BookingDetailsSkeleton";
import { useRePaymentMutation } from "@/redux/features/payment";
import { toast } from "sonner";
import { useGetUserQuery } from "@/redux/features/user";
import { Role } from "@/components/shared/Navbar";

export default function BookingDetailsPage() {
  const bookingId = useParams().id as string;
  const { data: userData,isLoading : userLoading } = useGetUserQuery();
  const user = userData?.data;
  const isAdmin = user?.role === Role.ADMIN || user?.role === Role.SUPER_ADMIN;
  const { data, isLoading, error } = useGetBookingDetailsQuery({
    id: bookingId,
  });
  const booking = data?.data;
  const [rePayment, { isLoading: paymentLoading }] = useRePaymentMutation();

  const handlePayment = async () => {
    try {
      const res = await rePayment({ id: bookingId }).unwrap();
      window.location.href = res.data.paymentUrl;
    } catch (error) {
      toast.error("Re-payment failed");
    }
  };

  if (isLoading || userLoading) {
    return <BookingDetailsSkeleton />;
  }

  if (error) {
    return <ApiErrorPage name="booking details" />;
  }

  if (!booking) {
    return (
      <main className="grow flex items-center justify-center">
        <Card className="text-center max-w-md">
          <AlertCircle size={48} className="mx-auto mb-4 text-red-600" />
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Booking Not Found
          </h2>
          <p className="text-muted-foreground mb-6">
            The booking you're looking for doesn't exist.
          </p>
          <Link href="/dashboard/bookings">
            <Button>Back to Bookings</Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="grow">
      {/* Content */}
      <section className="pb-8 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Booking Status Timeline */}
            <StatusTimeLine
              paymentStatus={booking?.payment.status as IPaymentStatus}
              status={booking?.status}
              date={booking?.tour.startDate as string}
            />

            {/* Tour Information */}
            <BookingCard booking={booking} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Payment Summary */}
            <Card className="p-4 sm:p-6 sticky top-20 gap-3 sm:gap-6">
              <h3 className="text-lg font-semibold text-foreground">
                Payment Summary
              </h3>

              <div className="space-y-3 sm:mb-2 pb-6 border-b border-border">
                <div className="flex justify-between text-lg">
                  <span className="text-sm sm:text-base font-semibold text-foreground">
                    Total
                  </span>
                  <span className="text-sm sm:text-base font-bold text-primary">
                    ${booking.payment.amount}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              {booking.payment.status === "PAID" && (
                <div>
                  <Badge
                    className={`w-full justify-center py-2 ${
                      booking.payment.status === "PAID"
                        ? "bg-green-100 text-ring"
                        : "bg-yellow-100 text-accent"
                    }`}
                  >
                    <CheckCircle2 size={16} className="mr-1" />
                    Payment Completed
                  </Badge>
                </div>
              )}

              {/* Payment Button */}
              {!isAdmin && booking.status === "PENDING" && (
                <Button
                  onClick={handlePayment}
                  disabled={paymentLoading}
                  className="w-full"
                >
                  {paymentLoading ? (
                    <>
                      <Loader className="size-4 animate-spin" />
                      Make Payment
                    </>
                  ) : (
                    <>
                      <CreditCard size={16} className="mr-2" />
                      Make Payment
                    </>
                  )}
                </Button>
              )}
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
