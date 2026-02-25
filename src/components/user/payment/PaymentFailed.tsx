"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useQueryManager from "@/hooks/useQueryManager";
import { XCircle } from "lucide-react";

function PaymentFailedPage() {
  const { getQuery } = useQueryManager();
  const transactionId = getQuery("transactionId");
  const message = getQuery("message");
  const amount = getQuery("amount");
  const status = getQuery("status");
  const router = useRouter();

  const handleClick = () => {
    router.replace("/");
  };

  return (
    <div
      className="bg-linear-to-br from-background to-muted flex items-center 
    justify-center p-2 sm:p-4"
    >
      <Card className="w-full max-w-md shadow-lg py-0">
        <div className="p-4 sm:p-8 text-center space-y-3 sm:space-y-6">
          <div className="flex justify-center mb-4">
            <XCircle className="w-12 sm:w-16 h-12 sm:h-16 text-red-600" />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-red-700 mb-2">
            Payment Failed
          </h1>

          <p className="text-gray-600 mb-3 sm:mb-6">
            {message || "Something went wrong with your payment."}
          </p>

          <div className="bg-red-100 rounded-lg p-4 text-left sm:space-y-2 text-sm">
            <p>
              <span className="font-semibold">Transaction ID:</span>{" "}
              {transactionId || "N/A"} 
            </p>
            <p>
              <span className="font-semibold">Amount:</span> ৳{amount || "00"}
            </p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="text-red-600 font-medium">{status || "N/A"}</span>
            </p>
          </div>

          <Button
            variant="default"
            className="w-full cursor-pointer"
            onClick={handleClick}
          >
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default PaymentFailedPage;
