import { mockAssignedTours } from "@/mock/assignedTours";
import { useGetGuideAssignedToursQuery } from "@/redux/features/guide";

const ToursSummary = () => {
  const { data, isLoading, error } = useGetGuideAssignedToursQuery();
  const assignedTours = data?.data;
  const upcomingTours = assignedTours?.filter((t) => new Date(t.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  return (
    <div className="mt-3 lg:mt-6 pt-3 lg:pt-6 border-t border-border">
      <p className="text-sm font-medium text-foreground mb-3">
        Upcoming Tours ({upcomingTours?.length})
      </p>
      <div className="space-y-2">
        {upcomingTours?.slice(0, 3).map((tour) => (
          <div
            key={tour._id}
            className="text-xs p-2 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition"
            onClick={() => {
              // handleDateClick(new Date(tour.date));
              // setActiveTab("calendar");
            }}
          >
            <p className="font-medium text-foreground truncate">
              {tour.title}
            </p>
            <p className="text-muted-foreground">
              {new Date(tour.startDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursSummary;
