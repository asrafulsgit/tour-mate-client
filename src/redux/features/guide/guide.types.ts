export interface GuideApplicationResponse {
  success: boolean;
  message: string;
  data: {
    _id: string;
    userId: string;
    divisionId: string;
    nidPhotos: string[];
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
    updatedAt: string;
  };
}