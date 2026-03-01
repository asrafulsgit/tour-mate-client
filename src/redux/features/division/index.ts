import { baseApi } from "@/redux/api/baseApi";
import {
  GetAllDivisionsResponse,
  GetDivisionResponse,
  GetDivisionsTourCountResponse,
} from "./division.types";
import { SuccessResponse } from "../tour/tour.types";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDivision: builder.mutation<SuccessResponse, FormData>({
      query: (formData) => ({
        url: `/division/create`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Division"],
    }),
    updateDivision: builder.mutation<
      SuccessResponse,
      { formData: FormData; id: string }
    >({
      query: ({ formData, id }) => ({
        url: `/division/${id}`,
        method: "PATCH",  
        body: formData,
      }),
      invalidatesTags: ["Division"],
    }),
    getDivisionsWithTourCount: builder.query<
      GetDivisionsTourCountResponse,
      void
    >({
      query: () => ({
        url: "/division/tour-count",
        method: "GET",
      }),
      providesTags: ["Division"],
    }),
    getAllDivisions: builder.query<GetAllDivisionsResponse, void>({
      query: () => ({
        url: "/division/all",
        method: "GET",
      }),
      providesTags: ["Division"],
    }),
    getDivision: builder.query<GetDivisionResponse, string>({
      query: (id) => ({
        url: `/division/${id}`,
        method: "GET",
      }),
      providesTags: ["Division"],
    }),
    deleteDivision: builder.mutation<SuccessResponse, string>({
      query: (id) => ({
        url: `/division/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Division"],
    }),
  }),
});

export const {
  useCreateDivisionMutation,
  useUpdateDivisionMutation,
  useGetDivisionsWithTourCountQuery,
  useGetAllDivisionsQuery,
  useGetDivisionQuery,
  useDeleteDivisionMutation,
} = divisionApi;
