export type Division = {
  _id: string;
  name: string;
  slug: string;
  thumbnail?: string;
  tourCount?: number;
  createdAt: string;
  updatedAt: string;
};

export type GetDivisionsTourCountResponse = {
  success: boolean;
  message: string;
  data: Division[];
};
