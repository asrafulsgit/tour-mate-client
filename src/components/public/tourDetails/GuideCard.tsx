import { GuidePopulatedData } from "@/redux/features/tour/tour.types";
import { Star } from "lucide-react";
import Image from "next/image";

const GuideCard = ({ guide }: { guide: GuidePopulatedData }) => {
  return (
    <div
      className="mb-4 bg-card border border-border 
    rounded-lg p-3 sm:p-6"
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">
        Your Guide
      </h2>
      <div className="flex items-start gap-4">
        <div className="w-12 sm:w-16 h-12  sm:h-16 rounded-full overflow-hidden shrink-0">
          <Image
            src={guide.picture || "/placeholder.svg"}
            alt={guide.name ?? "Guide profile"}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grow">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
            {guide.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <Star size={16} className="fill-accent text-accent" />
            <span className="text-xs sm:text-sm text-foreground">
              {guide.rating}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
            {guide.bio || `Experienced guide passionate about sharing local knowledge and
            creating unforgettable experiences for travelers.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
