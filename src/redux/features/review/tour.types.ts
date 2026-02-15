export type UserPopulatedData = {
  _id: string;
  name: string;
  picture : string
};

export type Review = {
  _id: string;
  tour: string;
  user: UserPopulatedData;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
};

export type GetReviewsResponse = {
  success: boolean;
  message: string;
  data: Review[];
  meta: {
    total: number;
  };
};
