export type GuideApplicationStatus = "APPROVED" | "REJECTED" | "PENDING";

export type GuideApplication = {
  _id: string;
  userId: string;
  nidPhotos: string[];
  divisionId: string ;
  status: GuideApplicationStatus;
  createdAt: string;
  updatedAt: string;
};
export interface GuideApplicationResponse {
  success: boolean;
  message: string;
  data: GuideApplication;
}
export type GuideApplications = {
  _id: string;
  userId: string;
  nidPhotos: string[];
  divisionId: { _id: string; name: string } ;
  status: GuideApplicationStatus;
  createdAt: string;
  updatedAt: string;
};

export type GetGuideApplicationsResponse = {
  success: boolean;
  message: string;
  data: GuideApplications[];
};
