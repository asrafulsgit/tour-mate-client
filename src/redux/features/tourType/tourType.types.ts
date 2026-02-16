export type TourType = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetTourTypesResponse = {
  success: boolean;
  message: string;
  data: TourType[];
  meta: {
    total: number;
  };
};
