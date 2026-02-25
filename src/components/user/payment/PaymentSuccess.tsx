"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useQueryManager from "@/hooks/useQueryManager";
import { CheckCircle } from "lucide-react";

function PaymentSuccessPage() {
  const { getQuery } = useQueryManager();
  const transactionId = getQuery("transactionId");
  const message = getQuery("message");
  const amount = getQuery("amount");
  const status = getQuery("status");
  const router = useRouter();

  const handleClick = () => {
    router.replace("/user/my-bookings");
  };

  return (
    <div
      className="bg-linear-to-br from-background to-muted flex items-center 
    justify-center p-2 sm:p-4"
    >
      <Card className="w-full max-w-md shadow-lg py-0">
        <div className="p-4 sm:p-8 text-center space-y-3 sm:space-y-6">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-12 sm:w-16 h-12 sm:h-16 text-green-600" />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">
            Payment Successful
          </h1>

          <p className="text-gray-600 mb-3 sm:mb-6">
            {message || "Your payment has been completed successfully."}
          </p>

          <div className="bg-green-100 rounded-lg p-4 text-left sm:space-y-2 text-sm">
            <p>
              <span className="font-semibold">Transaction ID:</span>{" "}
              {transactionId}
            </p>
            <p>
              <span className="font-semibold">Amount:</span> ৳{amount}
            </p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="text-green-600 font-medium">{status}</span>
            </p>
          </div>

          <Button
            variant="default"
            className="w-full cursor-pointer"
            onClick={handleClick}
          >
            Go To Dashboard
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default PaymentSuccessPage;
