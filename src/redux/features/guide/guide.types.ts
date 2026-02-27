export type GuideApplicationStatus = "APPROVED" | "REJECTED" | "PENDING";

export type GuideApplication = {
  _id: string;
  userId: string;
  nidPhotos: string[];
  divisionId: string;
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
  divisionId: { _id: string; name: string };
  status: GuideApplicationStatus;
  createdAt: string;
  updatedAt: string;
};

export type GetGuideApplicationsResponse = {
  success: boolean;
  message: string;
  data: GuideApplications[];
};

export interface IUserShort {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IDivision {
  _id: string;
  name: string;
}

export interface IGuideApplication {
  _id: string;
  userId: IUserShort;
  nidPhotos: string[];
  divisionId: IDivision;
  status: GuideApplicationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface IGuideApplicationResponse {
  success: boolean;
  message: string;
  data: IGuideApplication[];
  meta: IMeta;
}
export interface IGuideApplicationParams {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status?: GuideApplicationStatus;
}

export interface IGuideApplicationResponse {
  success: boolean;
  message: string;
  data: IGuideApplication[];
  meta: IMeta;
}

export interface GetGuideApplicationResponse {
  success: boolean;
  message: string;
  data: IGuideApplication;
}

export interface ISuccessResponse {
  success: boolean;
  message: string;
  data: null;
}
