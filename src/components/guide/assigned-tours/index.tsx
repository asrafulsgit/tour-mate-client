"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  User,
  AlertCircle,
} from "lucide-react";
import { mockAssignedTours } from "@/mock/assignedTours";
import UserHeader from "@/components/user/UserHeader";

const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

const getToursByDate = (tours: typeof mockAssignedTours, date: Date) => {
  return tours.filter((tour) => {
    const tourDate = new Date(tour.date);
    return tourDate.toDateString() === date.toDateString();
  });
};

function AssignedToursPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [activeTab, setActiveTab] = useState("calendar");
  const [expandedTour, setExpandedTour] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "confirmed" | "pending"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i),
      );
    }
    return days;
  }, [currentMonth, daysInMonth, firstDay]);

  const selectedDateTours = selectedDate
    ? getToursByDate(mockAssignedTours, selectedDate)
    : [];
  const allUpcomingTours = mockAssignedTours
    .filter((t) => new Date(t.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const upcomingTours = allUpcomingTours;  

  const filteredTours = allUpcomingTours
    .filter((tour) => statusFilter === "all" || tour.status === statusFilter)
    .filter(
      (tour) =>
        tour.tourTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <main className="grow">
      {/* Page Header */}
      <UserHeader title="Assigned Tours" subTitle="View your scheduled tours and manage guest information" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          {/* Calendar View Tab */}
          <TabsContent value="calendar" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calendar Section */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-8">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={handlePrevMonth}
                      className="p-2 hover:bg-muted rounded-lg transition"
                    >
                      <ChevronLeft size={20} className="text-foreground" />
                    </button>
                    <h3 className="text-lg font-semibold text-foreground">
                      {monthName}
                    </h3>
                    <button
                      onClick={handleNextMonth}
                      className="p-2 hover:bg-muted rounded-lg transition"
                    >
                      <ChevronRight size={20} className="text-foreground" />
                    </button>
                  </div>

                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-semibold text-muted-foreground py-2"
                        >
                          {day}
                        </div>
                      ),
                    )}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((date, idx) => {
                      if (!date) {
                        return (
                          <div key={`empty-${idx}`} className="aspect-square" />
                        );
                      }

                      const toursOnDate = getToursByDate(
                        mockAssignedTours,
                        date,
                      );
                      const isSelected =
                        selectedDate?.toDateString() === date.toDateString();
                      const isToday =
                        new Date().toDateString() === date.toDateString();
                      const hasTours = toursOnDate.length > 0;

                      return (
                        <button
                          key={date.toISOString()}
                          onClick={() => handleDateClick(date)}
                          className={`aspect-square text-sm rounded-lg font-medium transition relative flex flex-col items-center justify-center ${
                            isSelected
                              ? "bg-primary text-primary-foreground ring-2 ring-primary/50"
                              : hasTours
                                ? "bg-accent/20 text-foreground ring-2 ring-accent"
                                : isToday
                                  ? "bg-primary/10 text-foreground ring-2 ring-primary"
                                  : "hover:bg-muted text-foreground"
                          }`}
                        >
                          <span>{date.getDate()}</span>
                          {hasTours && (
                            <div className="flex gap-0.5 mt-1">
                              {toursOnDate.slice(0, 2).map((_, i) => (
                                <div
                                  key={i}
                                  className="w-1.5 h-1.5 bg-accent rounded-full"
                                />
                              ))}
                              {toursOnDate.length > 2 && (
                                <span className="text-xs font-bold text-accent">
                                  +
                                </span>
                              )}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tours Summary */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">
                      Upcoming Tours ({upcomingTours.length})
                    </p>
                    <div className="space-y-2">
                      {upcomingTours.slice(0, 3).map((tour) => (
                        <div
                          key={tour.id}
                          className="text-xs p-2 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition"
                          onClick={() => {
                            handleDateClick(new Date(tour.date));
                            setActiveTab("calendar");
                          }}
                        >
                          <p className="font-medium text-foreground truncate">
                            {tour.tourTitle}
                          </p>
                          <p className="text-muted-foreground">
                            {new Date(tour.date).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Selected Date Tours Section */}
              <div className="lg:col-span-2">
                {selectedDate ? (
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {selectedDate.toLocaleDateString("default", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h2>
                      <p className="text-muted-foreground">
                        {selectedDateTours.length} tour
                        {selectedDateTours.length !== 1 ? "s" : ""} scheduled
                      </p>
                    </div>

                    <div className="space-y-6">
                      {selectedDateTours.length > 0 ? (
                        selectedDateTours.map((tour) => (
                          <Card
                            key={tour.id}
                            className={`sm:py-0 gap-0 overflow-hidden transition cursor-pointer ${
                              expandedTour === tour.id
                                ? "ring-2 ring-primary"
                                : ""
                            }`}
                            onClick={() =>
                              setExpandedTour(
                                expandedTour === tour.id ? null : tour.id,
                              )
                            }
                          >
                            {/* Tour Header */}
                            <div className="p-6 bg-linear-to-r">
                              <div className="flex items-start justify-between mb-4">
                                <div className="grow">
                                  <h3 className="text-xl font-bold text-foreground mb-2">
                                    {tour.tourTitle}
                                  </h3>
                                  <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                      <Clock size={16} />
                                      {tour.time} - {tour.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                      <MapPin size={16} />
                                      {tour.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                      <Users size={16} />
                                      {tour.registeredGuests}/{tour.maxGuests}{" "}
                                      guests
                                    </div>
                                  </div>
                                </div>
                                <Badge
                                  variant={
                                    tour.status === "confirmed"
                                      ? "secondary"
                                      : "outline"
                                  }
                                >
                                  {tour.status.charAt(0).toUpperCase() +
                                    tour.status.slice(1)}
                                </Badge>
                              </div>
                            </div>

                            {/* Tour Details */}
                            {expandedTour === tour.id && (
                              <div className="p-6 border-t border-border">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="font-semibold text-foreground mb-3">
                                      Tour Information
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                          Duration:
                                        </span>
                                        <span className="font-medium text-foreground">
                                          {tour.duration}
                                        </span>
                                      </div> 
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                          Guest Availability:
                                        </span>
                                        <span className="font-medium text-foreground">
                                          {tour.maxGuests -
                                            tour.registeredGuests}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Image */}
                                  <div className="relative h-48 rounded-lg overflow-hidden">
                                    <Image
                                      src={tour.image || "/placeholder.svg"}
                                      alt={tour.tourTitle}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                </div> 
                              </div>
                            )}
                          </Card>
                        ))
                      ) : (
                        <Card className="p-12 text-center">
                          <Calendar
                            size={48}
                            className="mx-auto mb-4 text-muted-foreground opacity-50"
                          />
                          <p className="text-muted-foreground mb-2">
                            No tours scheduled for this date
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Select another date to view tours
                          </p>
                        </Card>
                      )}
                    </div>
                  </>
                ) : (
                  <Card className="p-12 text-center">
                    <Calendar
                      size={48}
                      className="mx-auto mb-4 text-muted-foreground opacity-50"
                    />
                    <p className="text-muted-foreground mb-2">
                      Select a date to view tours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Click on a date in the calendar to see your scheduled
                      tours
                    </p>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* List View Tab */}
          <TabsContent value="list" className="mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-foreground">
                  All Assigned Tours
                </h2>
                <p className="text-muted-foreground">
                  {filteredTours.length} tours
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-2">
                  {["all", "confirmed", "pending"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status as any)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        statusFilter === status
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
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

              <div className="space-y-4">
                {filteredTours.length > 0 ? (
                  filteredTours.map((tour) => (
                    <Card
                      key={tour.id}
                      className="p-6 hover:border-primary transition"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Tour Image */}
                        <div className="relative h-40 rounded-lg overflow-hidden md:col-span-1">
                          <Image
                            src={tour.image || "/placeholder.svg"}
                            alt={tour.tourTitle}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Tour Details */}
                        <div className="md:col-span-3">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-bold text-foreground">
                                {tour.tourTitle}
                              </h3>
                              <p className="text-muted-foreground text-sm">
                                {tour.location}
                              </p>
                            </div>
                            <Badge
                              variant={
                                tour.status === "confirmed"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {tour.status.charAt(0).toUpperCase() +
                                tour.status.slice(1)}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">
                                Date & Time
                              </p>
                              <p className="font-semibold text-foreground text-sm">
                                {new Date(tour.date).toLocaleDateString()} at{" "}
                                {tour.time}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">
                                Duration
                              </p>
                              <p className="font-semibold text-foreground text-sm">
                                {tour.duration}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">
                                Guests
                              </p>
                              <p className="font-semibold text-foreground text-sm">
                                {tour.registeredGuests}/{tour.maxGuests}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">
                                Revenue
                              </p>
                              <p className="font-semibold text-primary text-sm">
                                ${tour.price * tour.registeredGuests}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button asChild size="sm">
                              <Link
                                href={`/guide-dashboard/assigned-tours/${tour.id}`}
                              >
                                View Details
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm">
                              Contact Guests
                            </Button>
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
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
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
export default AssignedToursPage;
