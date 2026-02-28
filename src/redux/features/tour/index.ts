import { baseApi } from "@/redux/api/baseApi";
import {
  GetTourDetailsResponse,
  GetToursParams,
  GetToursResponse,
  SuccessResponse,
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
    crateTour: builder.mutation<SuccessResponse, FormData>({
      query: (formData) => ({
        url: "/tour/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Tour"],
    }),
    updateTour: builder.mutation<
      GetTourDetailsResponse,
      { formData: FormData; id: string }
    >({
      query: ({ formData, id }) => ({
        url: `/tour/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Tour"],
    }),
  }),
});

export const {
  useGetAllToursQuery,
  useGetTourDetailsQuery,
  useCrateTourMutation,
  useUpdateTourMutation,
} = tourApi;
