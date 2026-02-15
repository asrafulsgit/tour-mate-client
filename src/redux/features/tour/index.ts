import { baseApi } from "@/redux/api/baseApi";
import {
  GetTourDetailsResponse,
  GetToursParams,
  GetToursResponse,
} from "./tour.types";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTours: builder.query<GetToursResponse, GetToursParams>({
      query: (params) => ({
        url: "/tour/all-tours",
        method: "GET",
        params,
      }),
      providesTags: ["Tour"],
    }),
    getTourDetails: builder.query<GetTourDetailsResponse, string>({
      query: (id) => ({
        url: `/tour/${id}`,
        method: "GET",
      }),
      providesTags: ["Tour"],
    }),
  }),
});

export const { useGetAllToursQuery,useGetTourDetailsQuery } = tourApi;
