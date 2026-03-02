"use client";
import { Card } from "@/components/ui/card";
import { mockAssignedTours } from "@/mock/assignedTours";
import { Calendar } from "lucide-react";
import { useState } from "react";
import Calender from "./Calender";
import ToursSummary from "./ToursSummary";
import SelectedDateTour from "./SelectedDateTour";
import { useGetGuideAssignedToursQuery } from "@/redux/features/guide";
import { ToursCalendarSectionSkeleton } from "./CalenderSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";
import { Tour } from "@/redux/features/guide/guide.types";

const getToursByDate = (tours: Tour[], date: Date) => {
  return tours.filter((tour) => {
    const tourDate = new Date(tour.startDate);

    return (
      tourDate.getFullYear() === date.getFullYear() &&
      tourDate.getMonth() === date.getMonth() &&
      tourDate.getDate() === date.getDate()
    );
  });
};

const CalenderView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  console.log("selectedDate", selectedDate);
  const { data, isLoading, error } = useGetGuideAssignedToursQuery();
  const assignedTours = data?.data;
  console.log("assignedTours", assignedTours);
  const selectedDateTours =
    selectedDate && assignedTours
      ? getToursByDate(assignedTours, selectedDate)
      : [];
  console.log(selectedDateTours);
  if (isLoading) {
    return <ToursCalendarSectionSkeleton />;
  }
  if (error) return <ApiErrorPage name="tours" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
      {/* Calendar Section */}
      <div className="md:col-span-1">
        <Card className="p-3 lg:p-6 sticky top-8 gap-3 lg:gap-6">
          <Calender
            selectedDate={selectedDate as Date}
            setSelectedDate={(date) => setSelectedDate(date)}
          />
          <ToursSummary />
        </Card>
      </div>

      {/* Selected Date Tours Section */}
      <div className="md:col-span-2">
        {selectedDate ? (
          <>
            <div className="mb-4 lg:mb-6">
              <h2 className="heading text-xl lg:text-2xl font-bold text-foreground mb-1 lg:mb-2">
                {selectedDate.toLocaleDateString("default", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
              <p className="text-sm lg:text-base text-muted-foreground">
                {selectedDateTours.length} tour
                {selectedDateTours.length !== 1 ? "s" : ""} scheduled
              </p>
            </div>

            <div className="space-y-6">
              {selectedDateTours.length > 0 ? (
                selectedDateTours.map((tour) => (
                  <SelectedDateTour key={tour._id} tour={tour} />
                ))
              ) : (
                <Card className="p-6 lg:p-12 text-center gap-3 lg:gap-6">
                  <Calendar
                    className="mx-auto lg:mb-4 text-muted-foreground opacity-50 
                   w-9 h-9 lg:w-12 lg:h-12"
                  />
                  <p className="text-muted-foreground lg:mb-2">
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
          <Card className="p-6 lg:p-12 text-center gap-3 lg:gap-6">
            <Calendar
              size={48}
              className="mx-auto lg:mb-4 text-muted-foreground opacity-50 
                   w-9 h-9 lg:w-12 lg:h-12"
            />
            <p className="text-muted-foreground mb-2">
              Select a date to view tours
            </p>
            <p className="text-sm text-muted-foreground">
              Click on a date in the calendar to see your scheduled tours
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CalenderView;
