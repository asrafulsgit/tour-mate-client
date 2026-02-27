import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Eye, MapPin, XCircle } from "lucide-react";
import { mockGuideApplications } from "@/mock/guide-applications";
import { cn } from "@/lib/utils";
import useQueryManager from "@/hooks/useQueryManager";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetAllGuideApplicationsQuery } from "@/redux/features/guide";
import {
  GuideApplicationStatus,
  IGuideApplication,
} from "@/redux/features/guide/guide.types";
import { useEffect, useMemo } from "react";
import ApiErrorPage from "@/components/shared/ApiErrorPage";

type Props = {
  onDetails: (id: string) => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
};

function GuideTable({ onDetails, onApprove, onReject }: Props) {
  const { getQuery, setQuery } = useQueryManager();
  const debouncedSearch = useDebounce(getQuery("search"), 500);
  const currentPage = Number(getQuery("page")) || 1;
  const { data, isLoading, error } = useGetAllGuideApplicationsQuery({
    page: currentPage,
    limit: Number(getQuery("limit")) || 10,
    searchTerm: debouncedSearch ?? undefined,
    status: (getQuery("status") as GuideApplicationStatus) || undefined,
  });

  const applications = useMemo(() => data?.data ?? [], [data?.data]);
  const totalPages = data?.meta.totalPage || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setQuery("page", totalPages.toString());
    }
  }, [currentPage, totalPages]);
  // if (isLoading) return <BookingsTableSkeleton />;
  if (error) return <ApiErrorPage name="guide applications" isButton={false} />;
  if (applications.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No applications yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {applications.map((application) => {
        const isPending = application.status === "PENDING";
        const isApproved = application.status === "APPROVED";
        const isRejected = application.status === "REJECTED";
        return (
          <Card key={application._id} className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start justify-between">
              <div className="grow">
                <div className="flex items-center gap-3 mb-4">
                  {isPending && <Clock className="text-yellow-600" />}
                  {isApproved && <CheckCircle2 className="text-green-600" />}
                  {isRejected && <XCircle className="text-red-600" />}
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      {application.userId.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      {application.userId.address}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-sm font-medium text-foreground">
                      {application.userId.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <p className="text-sm font-medium text-foreground">
                      {application.userId.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <Badge
                      className={cn(
                        "",
                        `${
                          isPending
                            ? "bg-yellow-100 text-yellow-800"
                            : isApproved
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                        }`,
                      )}
                    >
                      {application.status.charAt(0).toUpperCase() +
                        application.status.slice(1)}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Applied
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {new Date(application.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex sm:flex-col gap-2">
                <Button
                  variant="outline"
                  size={"sm"}
                  className={cn("", "text-xs sm:text-sm px-3 sm:px-4")}
                  onClick={() => onDetails(application._id)}
                >
                  Details
                </Button>

                {isPending && (
                  <>
                    <Button
                      size={"sm"}
                      className={cn(
                        "",
                        "bg-green-600 hover:bg-green-700 text-xs sm:text-sm px-3 sm:px-4 text-white",
                      )}
                      onClick={() => onApprove(application._id)}
                    >
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className={cn("", "text-xs sm:text-sm px-3 sm:px-4")}
                      onClick={() => onReject(application._id)}
                    >
                      Reject
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
export default GuideTable;
