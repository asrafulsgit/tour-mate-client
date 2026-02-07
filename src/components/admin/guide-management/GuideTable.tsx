import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Eye, MapPin, XCircle } from "lucide-react";
import { mockGuideApplications } from "@/mock/guide-applications";
import { cn } from "@/lib/utils";

type Props = {
  onView: (id: string) => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
};

function GuideTable({ onView, onApprove, onReject }: Props) {
  if (!mockGuideApplications.length) {
    return (
      <Card className="p-12 text-center">
        <Clock className="mx-auto mb-4 text-muted-foreground" size={40} />
        <p className="text-muted-foreground">No applications found</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {mockGuideApplications.map((app) => (
        <Card key={app.id} className="p-6">
          <div className="flex items-start justify-between">
            <div className="grow">
              <div className="flex items-center gap-3 mb-4">
                {app.status === "pending" && (
                  <Clock className="text-yellow-600" />
                )}
                {app.status === "approved" && (
                  <CheckCircle2 className="text-green-600" />
                )}
                {app.status === "rejected" && (
                  <XCircle className="text-red-600" />
                )}
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {app.userName}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {app.division}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="text-sm font-medium text-foreground">
                    {app.email}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm font-medium text-foreground">
                    {app.phone}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <Badge
                    className={cn(
                      "",
                      `${
                        app.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : app.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                      }`,
                    )}
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Applied</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(app.appliedOn).toLocaleDateString()}
                  </p>
                </div>
              </div>   
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" onClick={() => onView(app.id)}>
                <Eye size={14} className="mr-1" />
                Details
              </Button>

              {app.status === "pending" && (
                <>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => onApprove(app.id)}
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onReject(app.id)}
                  >
                    Reject
                  </Button>
                </>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
export default GuideTable;
