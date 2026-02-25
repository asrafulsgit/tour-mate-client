import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GuideApplications } from "@/redux/features/guide/guide.types";
import { format } from "date-fns";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import Image from "next/image";

const ApplicationDetails = ({
  userApplication,
}: {
  userApplication: GuideApplications;
}) => {
  const isPending = userApplication.status === "PENDING";
  const isRejected = userApplication.status === "REJECTED";
  const isApproved = userApplication.status === "APPROVED";
  return (
    <Card className="p-4 sm:p-8">
      <div className="grow">
        <div className="flex items-center gap-2 mb-2">
          {isPending && (
            <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600" />
          )}
          {isRejected && (
            <XCircle className="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />
          )}
          {isApproved && (
            <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
          )}
          <h2
            className="text-lg sm:text-2xl font-bold 
          text-foreground"
          >
            {isPending && "Application Under Review"}
            {isRejected && "Application Rejected"}
            {isApproved && "Application Approved 🎉"}
          </h2>
        </div>

        <Badge
          className={`w-fit ${
            isPending
              ? "bg-yellow-100 text-yellow-800"
              : isRejected
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
          }`}
        >
          {userApplication.status}
        </Badge>

        <div className="my-4 flex gap-8 flex-wrap">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Applied On</p>
            <p className="font-medium text-foreground">
              {format(userApplication.createdAt, "dd MMM yyyy")}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Division</p>
            <p className="font-medium text-foreground">
              {userApplication.divisionId.name}
            </p>
          </div>
        </div>
        {/* NID Photos */}
        {userApplication.nidPhotos?.length > 0 && (
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Submitted NID Photos
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4">
              {userApplication.nidPhotos.map((photo, index) => (
                <div key={index} className="relative w-full h-25 sm:h-32">
                  <Image
                    src={photo}
                    alt={`NID-${index}`}
                    fill
                    className="rounded-lg border object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Status Messages */}
        <div className="mt-4">
          {isPending && (
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                We're reviewing your application. This usually takes 24–48
                hours. You'll be notified once the review is complete.
              </p>
            </div>
          )}

          {isRejected && (
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <p className="text-sm text-red-800">
                Unfortunately, your application was not approved. Please review
                your documents and reapply.
              </p>
            </div>
          )}

          {isApproved && (
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="text-sm text-green-800">
                Congratulations! Your guide application has been approved. You
                can now start accepting tours.
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ApplicationDetails;

// const ApplicationDetails = ({
//   userApplication,
// }: {
//   userApplication: GuideApplications;
// }) => {
//   const isPending = userApplication.status === "PENDING";
//   const isRejected = userApplication.status === "REJECTED";
//   const isApproved = userApplication.status === "APPROVED";
//   return (
//     <Card className="p-4 sm:p-8 space-y-6">
//       {/* Header */}
//       <div className="flex items-center gap-3">
//         {isPending && (
//           <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-600" />
//         )}
//         {isRejected && (
//           <XCircle className="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />
//         )}
//         {isApproved && (
//           <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
//         )}

//         <h2 className="text-lg sm:text-2xl font-bold text-foreground">
//           {isPending && "Application Under Review"}
//           {isRejected && "Application Rejected"}
//           {isApproved && "Application Approved 🎉"}
//         </h2>
//       </div>

//       {/* Status Badge */}
//       <Badge
//         className={`w-fit ${
//           isPending
//             ? "bg-yellow-100 text-yellow-800"
//             : isRejected
//               ? "bg-red-100 text-red-800"
//               : "bg-green-100 text-green-800"
//         }`}
//       >
//         {userApplication.status}
//       </Badge>

//       {/* Application Info */}
//       <div className="grid sm:grid-cols-2 gap-4">
//         <div>
//           <p className="text-sm text-muted-foreground">Application ID</p>
//           <p className="font-medium">{userApplication._id}</p>
//         </div>

//         <div>
//           <p className="text-sm text-muted-foreground">Applied On</p>
//           <p className="font-medium">
//             {new Date(userApplication.createdAt).toLocaleDateString()}
//           </p>
//         </div>

//         <div>
//           <p className="text-sm text-muted-foreground">Last Updated</p>
//           <p className="font-medium">
//             {new Date(userApplication.updatedAt).toLocaleDateString()}
//           </p>
//         </div>

//         <div>
//           <p className="text-sm text-muted-foreground">Division</p>
//           <p className="font-medium">{userApplication.divisionId?.name}</p>
//         </div>
//       </div>

//       {/* NID Photos */}
//       {userApplication.nidPhotos?.length > 0 && (
//         <div>
//           <p className="text-sm text-muted-foreground mb-2">
//             Submitted NID Photos
//           </p>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             {userApplication.nidPhotos.map((photo, index) => (
//               <img
//                 key={index}
//                 src={photo}
//                 alt={`NID-${index}`}
//                 className="rounded-lg border object-cover h-32 w-full"
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Status Messages */}
//       {isPending && (
//         <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
//           <p className="text-sm text-yellow-800">
//             We're reviewing your application. This usually takes 24–48 hours.
//             You'll be notified once the review is complete.
//           </p>
//         </div>
//       )}

//       {isRejected && (
//         <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
//           <p className="text-sm text-red-800">
//             Unfortunately, your application was not approved. Please review your
//             documents and reapply.
//           </p>
//         </div>
//       )}

//       {isApproved && (
//         <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
//           <p className="text-sm text-green-800">
//             Congratulations! Your guide application has been approved. You can
//             now start accepting tours.
//           </p>
//         </div>
//       )}
//     </Card>
//   );
// };

// export default ApplicationDetails;
