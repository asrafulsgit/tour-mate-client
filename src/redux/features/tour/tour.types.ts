export interface DivisionPopulatedData {
  _id: string;
  name: string;
}
export interface TourTypePopulatedData {
  _id: string;
  name: string;
}
export interface GuidePopulatedData {
  _id?: string;
  picture?: string;
  name?: string;
  rating?: string;
  bio?: string;
}

export type Tour = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  costFrom: number;
  startDate: string;
  endDate: string;
  included: string[];
  amenities: string[];
  tourPlan: string[];
  maxGuest: number;
  minAge: number;
  division: DivisionPopulatedData;
  tourType: TourTypePopulatedData;
  guide?: GuidePopulatedData;
  slug: string;
  reviews: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
};

export type ToursMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type GetToursResponse = {
  success: boolean;
  message: string;
  data: Tour[];
  meta: ToursMeta;
};

export type GetToursParams = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  division?: string;
  tourType?: string;
  minPrice?: number;
  maxPrice?: number;
  startDate?: string;
};

export type GetTourDetailsResponse = {
  success: boolean;
  message: string;
  data: Tour;
};
