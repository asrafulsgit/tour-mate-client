import { baseApi } from "@/redux/api/baseApi";
import {
  GetAllDivisionsResponse,
  GetDivisionsTourCountResponse,
} from "./division.types";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useGetDivisionsWithTourCountQuery, useGetAllDivisionsQuery } = divisionApi;
