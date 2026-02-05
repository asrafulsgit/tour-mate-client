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
} from "lucide-react";
import { mockUserBookings } from "@/mock/tours";
import UserHeader from "../UserHeader";
import StatusTimeLine from "./StatusTimeLine";
import BookingCard from "./BookingCard";

export default function BookingDetailsPage() {
  const params = useParams();
  const bookingId = params.id as string;
  const booking = mockUserBookings.find((b) => b.id === bookingId);

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
      {/* Header */}
      <UserHeader title="Booking Details" />

      {/* Content */}
      <section className="pb-8 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Booking Status Timeline */}
            <StatusTimeLine
              paymentStatus={booking.paymentStatus}
              status={booking.status}
              date={booking.bookedOn}
            />

            {/* Tour Information */}
            <BookingCard booking={booking} />

            {/* Assigned Guide */}
            {/* {booking.guide && (
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Your Assigned Guide
                      </h3>
                      <div className="flex items-center gap-4">
                        <img
                          src={booking.guide.avatar || "/placeholder.svg"}
                          alt={booking.guide.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {booking.guide.name}
                          </h4>
                          <p className="text-muted-foreground mb-3">
                            Expert Local Guide
                          </p>
                          <div className="flex gap-4 text-sm">
                            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
                              <Phone size={16} />
                              {booking.guide.phone}
                            </button>
                            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
                              <Mail size={16} />
                              Contact
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )} */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Payment Summary */}
            <Card className="p-4 sm:p-6 sticky top-24 gap-3 sm:gap-6">
              <h3 className="text-lg font-semibold text-foreground">
                Payment Summary
              </h3>

              <div className="space-y-3 sm:mb-6 pb-6 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    ${booking.price}
                  </span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-sm sm:text-base font-semibold text-foreground">
                    Total
                  </span>
                  <span className="text-sm sm:text-base font-bold text-primary">
                    ${(booking.price * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div>
                <Badge
                  className={`w-full justify-center py-2 ${
                    booking.paymentStatus === "completed"
                      ? "bg-green-100 text-ring"
                      : "bg-yellow-100 text-accent"
                  }`}
                >
                  {booking.paymentStatus === "completed" ? (
                    <>
                      <CheckCircle2 size={16} className="mr-2" />
                      Payment Completed
                    </>
                  ) : (
                    <>
                      <AlertCircle size={16} className="mr-2" />
                      Payment Pending
                    </>
                  )}
                </Badge>
              </div>

              {/* Payment Button */}
              {booking.paymentStatus === "pending" && (
                <Button
                  // onClick={() => setShowPaymentModal(true)}
                  className="w-full"
                >
                  <CreditCard size={16} className="mr-2" />
                  Make Payment
                </Button>
              )}
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
