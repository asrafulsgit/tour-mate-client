import { Card } from "@/components/ui/card";
import { Review } from "@/redux/features/review/tour.types";
import { format } from "date-fns";
import { Star } from "lucide-react";
import Image from "next/image";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card key={review._id} className="p-4 gap-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          {review.user.picture ? <Image
            src={review.user.picture || "/placeholder.svg"}
            alt={review.user.name}
            width={40}
            height={40}
            className="w-8 sm:w-10  h-8 sm:h-10 rounded-full object-cover"
          /> : <p className="bg-primary w-8 sm:w-10  h-8 sm:h-10 rounded-full flex justify-center items-center text-white">{review.user.name.slice(0,1).toUpperCase()}</p> }
          <div>
            <p className="text-sm sm:text-base font-semibold text-foreground">
              {review.user.name}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {format(new Date(review.createdAt), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5
               ${i < review.rating ? "fill-accent text-accent" : "text-border"}
              `}
            />
          ))}
        </div>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground">
        {review.comment}
      </p>
    </Card>
  );
};

export default ReviewCard;
