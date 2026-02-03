import { Card } from "@/components/ui/card";
import { Review } from "@/mock/tours";
import { Star } from "lucide-react";
import Image from "next/image";

const ReviewCard = ({review} :{review : Review}) => {
  return (
    <Card key={review.id} className="p-4 gap-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={review.userAvatar || "/placeholder.svg"}
            alt={review.userName}
            width={40}
            height={40}
            className="w-8 sm:w-10  h-8 sm:h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm sm:text-base font-semibold text-foreground">{review.userName}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{review.date}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5
               ${ i < review.rating ? "fill-accent text-accent" : "text-border"}
              `}
            />
          ))}
        </div>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground">{review.comment}</p>
    </Card>
  );
};

export default ReviewCard;
