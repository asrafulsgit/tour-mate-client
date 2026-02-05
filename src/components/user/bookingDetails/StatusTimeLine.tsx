import { Card } from "@/components/ui/card";
import { CheckCircle2, DollarSign } from "lucide-react";

const StatusTimeLine = ({
  paymentStatus,
  date,
  status,
}: {
  paymentStatus: string;
  date: string;
  status: string;
}) => {
  return (
    <Card className="p-4 sm:p-6 gap-3 sm:gap-6">
      <h3 className="text-lg font-semibold text-foreground">
        Booking Status
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="w-8 sm:w-12 h-8 sm:h-12 bg-green-100 rounded-full flex items-center 
          justify-center mb-1 sm:mb-2">
            <CheckCircle2 size={24} className="text-primary" />
          </div>
          <p className="text-[8px] sm:text-xs text-center text-muted-foreground">Booked</p>
          <p className="text-[8px] sm:text-xs font-medium text-foreground">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
        <div className="flex-1 h-1 bg-border my-6" />
        <div
          className={`flex flex-col items-center ${
            paymentStatus === "completed" ? "" : "opacity-50"
          }`}
        >
          <div
            className={`w-8 sm:w-12 h-8 sm:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 ${
              paymentStatus === "completed" ? "bg-green-100" : "bg-muted"
            }`}
          >
            <DollarSign
              size={24}
              className={
                paymentStatus === "completed"
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            />
          </div>
          <p className="text-[8px] sm:text-xs text-center text-muted-foreground">Paid</p>
          <p className="text-[8px] sm:text-xs font-medium text-foreground">
            {paymentStatus === "completed" ? "Complete" : "Pending"}
          </p>
        </div>
        <div className="flex-1 h-1 bg-border my-6" />
        <div
          className={`flex flex-col items-center ${
            status === "confirmed" ? "" : "opacity-50"
          }`}
        >
          <div
            className={`w-8 sm:w-12 h-8 sm:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 ${
              status === "confirmed" ? "bg-green-100" : "bg-muted"
            }`}
          >
            <CheckCircle2
              size={24}
              className={
                status === "confirmed"
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            />
          </div>
          <p className="text-[8px] sm:text-xs text-center text-muted-foreground">Confirmed</p>
          <p className="text-[8px] sm:text-xs font-medium text-foreground">
            {status === "confirmed" ? "Confirmed" : "Pending"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StatusTimeLine;
