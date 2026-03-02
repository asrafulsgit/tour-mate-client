import { useGetGuideAssignedToursQuery } from "@/redux/features/guide";
import { MessageCircle } from "lucide-react";
import AssignedTourCard from "../assigned-tours/AssignedTourCard";
import TourCardsSkeleton from "./TourCardSkeleton";
import ApiErrorPage from "@/components/shared/ApiErrorPage";

const RecentTours = () => {
  const { data, isLoading, error } = useGetGuideAssignedToursQuery({
    limit: 5,
  });
  const recentTours = data?.data;
  if (isLoading) {
    return <TourCardsSkeleton length={1}/>;
  }
  if (error) return <ApiErrorPage name="recent tours" />;
  if (recentTours?.length === 0) {
    return (
      <div className="text-center py-8">
        <MessageCircle
          size={32}
          className="mx-auto mb-2 text-muted-foreground opacity-50"
        />
        <p className="text-muted-foreground">No assigned tours</p>
      </div>
    );
  }
  return recentTours?.map((tour) => {
    return <AssignedTourCard key={tour._id} tour={tour} />;
  });
};

export default RecentTours;
