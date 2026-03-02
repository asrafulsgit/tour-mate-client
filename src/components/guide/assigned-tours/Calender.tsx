"use client";
import { Button } from "@/components/ui/button";
import { mockAssignedTours } from "@/mock/assignedTours";
import { useGetGuideAssignedToursQuery } from "@/redux/features/guide";
import { Tour } from "@/redux/features/guide/guide.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

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

const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

const Calender = ({
  setSelectedDate,
  selectedDate,
}: {
  setSelectedDate: (date: Date) => void;
  selectedDate: Date;
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
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

  const { data, isLoading, error } = useGetGuideAssignedToursQuery();
  const assignedTours = data?.data;

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
    <>
      {/* Month Navigation */}
      <div className="flex items-center justify-between lg:mb-6">
        <Button
          variant="link"
          size={"default"}
          onClick={handlePrevMonth}
          className="p-2 hover:bg-muted rounded-lg transition"
        >
          <ChevronLeft size={20} className="text-foreground" />
        </Button>
        <h3 className="lg:text-lg font-semibold text-foreground text-center">
          {monthName}
        </h3>
        <Button
          variant="link"
          size={"default"}
          onClick={handleNextMonth}
          className="p-2 hover:bg-muted rounded-lg transition"
        >
          <ChevronRight size={20} className="text-foreground" />
        </Button>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 lg:mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, idx) => {
          if (!date) {
            return <div key={`empty-${idx}`} className="aspect-square" />;
          }

          const toursOnDate =
            assignedTours && getToursByDate(assignedTours, date);
          const isSelected =
            selectedDate?.toDateString() === date.toDateString();
          const isToday = new Date().toDateString() === date.toDateString();
          const hasTours = toursOnDate && toursOnDate?.length > 0;

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
                    <span className="text-xs font-bold text-accent">+</span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Calender;
