import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GuideApplication } from "@/mock/guide-applications";
import { Clock, XCircle } from "lucide-react";

const ApplicationDetails = ({
  userApplication,
}: {
  userApplication: GuideApplication;
}) => {
  return (
    <Card className="p-4 sm:p-8">
      <div className="grow">
        <div className="flex items-center gap-2 mb-2">
          {userApplication.status === "pending" ? (
            <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600" />
          ) : (
            <XCircle className="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />
          )}
          <h2 className="text-lg sm:text-2xl font-bold 
          text-foreground">
            {userApplication.status === "pending"
              ? "Application Under Review"
              : "Application Rejected"}
          </h2>
        </div>

        <Badge
          className={`mb-4 ${
            userApplication.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {userApplication.status.toUpperCase()}
        </Badge>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Applied On</p>
            <p className="font-medium text-foreground">
              {new Date(userApplication.appliedOn).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Division</p>
            <p className="font-medium text-foreground">
              {userApplication.division}
            </p>
          </div>
        </div>
        {userApplication.status === "pending" && (
          <div className="bg-yellow-50 border border-yellow-200 
          p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              We're reviewing your application. This usually takes 24-48 hours.
              We'll notify you once approved.
            </p>
          </div>
        )}

        {userApplication.status === "rejected" && (
          <div className="bg-red-50 border border-red-200 p-4 
          rounded-lg">
            <p className="text-sm text-red-800 mb-3">
              Unfortunately, your application was not approved at this time.
              Please review the feedback below and feel free to reapply.
            </p>
            <p className="text-sm font-medium text-red-900 mb-2">Feedback:</p>
            <p className="text-sm text-red-800">
              We require guides to have at least 2 years of documented
              experience. Please reapply once you meet this requirement.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ApplicationDetails;
