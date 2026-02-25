import { Card } from "@/components/ui/card";
import { BookingStatus, IPaymentStatus } from "@/redux/features/booking/booking.types";
import { CheckCircle2, DollarSign } from "lucide-react";

const StatusTimeLine = ({
  paymentStatus,
  date, 
  status,
}: {
  paymentStatus: IPaymentStatus; 
  date: string;
  status: BookingStatus;
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
          <p className="text-[8px] sm:text-xs text-center text-muted-foreground">Booking</p>
          <p className="text-[8px] sm:text-xs font-medium text-foreground">
            {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase() }
          </p>
        </div>
        <div className="flex-1 h-1 bg-border my-6" />
        <div
          className={`flex flex-col items-center ${
            paymentStatus === "PAID" ? "" : "opacity-50"
          }`}
        >
          <div
            className={`w-8 sm:w-12 h-8 sm:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 ${
              paymentStatus === "PAID" ? "bg-green-100" : "bg-muted"
            }`}
          >
            <DollarSign
              size={24}
              className={
                paymentStatus === "PAID"
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            />
          </div>
          <p className="text-[8px] sm:text-xs text-center text-muted-foreground">Payment</p>
          <p className="text-[8px] sm:text-xs font-medium text-foreground">
            {paymentStatus === "PAID" ? "Complete" : "Pending"}
          </p>
        </div>
        <div className="flex-1 h-1 bg-border my-6" />
        <div
          className={`flex flex-col items-center ${
            status === "COMPLETE" ? "" : "opacity-50"
          }`}
        >
          <div
            className={`w-8 sm:w-12 h-8 sm:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 ${
              status === "COMPLETE" ? "bg-green-100" : "bg-muted"
            }`}
          >
            <CheckCircle2
              size={24}
              className={
                status === "COMPLETE"
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            />
          </div>
          <p className="text-[8px] sm:text-xs text-center text-muted-foreground">Status</p>
          <p className="text-[8px] sm:text-xs font-medium text-foreground">
            {status === "COMPLETE" ? "Confirmed" : "Pending"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StatusTimeLine;
