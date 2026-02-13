"use client"; 
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft} from "lucide-react";

export default function GoogleAuthFailedPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("message") || "authentication_failed";

  return (
    <div className="min-h-screen bg-linear-to-br from-background to-muted flex items-center 
    justify-center p-2 sm:p-4">
      <Card className="w-full max-w-md shadow-lg">
        <div className="p-4 sm:p-8 text-center space-y-6">
          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle size={32} className="text-red-600" />
            </div>
          </div>

          {/* Error Title */}
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Authentication Failed
            </h1>
          </div>

          {/* Error Code */}
          <div className="bg-muted/50 rounded-lg p-3 text-left">
            <p className="text-xs text-muted-foreground">
              Error:{" "}
              <span className="font-mono font-semibold text-foreground">
                {error}
              </span>
            </p>
          </div>

          <Button
            variant="default"
            className="w-full cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={16} />
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  );
}
