import { mockAssignedTours } from "@/mock/assignedTours";

 
const ToursSummary = () => {
    const upcomingTours = mockAssignedTours
    .filter((t) => new Date(t.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());;
  return ( 
      <div className="mt-3 lg:mt-6 pt-3 lg:pt-6 border-t border-border">
        <p className="text-sm font-medium text-foreground mb-3">
          Upcoming Tours ({upcomingTours.length})
        </p>
        <div className="space-y-2">
          {upcomingTours.slice(0, 3).map((tour) => (
            <div
              key={tour.id}
              className="text-xs p-2 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition"
              onClick={() => {
                // handleDateClick(new Date(tour.date));
                // setActiveTab("calendar");
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
  )
}

export default ToursSummary
