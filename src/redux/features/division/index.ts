import { baseApi } from "@/redux/api/baseApi";
import { GetDivisionsTourCountResponse } from "./division.types";

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
  }),
});

export const {useGetDivisionsWithTourCountQuery} = divisionApi;
