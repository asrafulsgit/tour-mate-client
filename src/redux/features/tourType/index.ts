import { baseApi } from "@/redux/api/baseApi";
import { GetTourTypesResponse } from "./tourType.types";

export const tourTypeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTourTypes: builder.query<GetTourTypesResponse, void>({
      query: () => ({
        url: "/tour/tourType/all",
        method: "GET",
      }),
      providesTags: ["TourType"],
    }),
  }),
});

export const {useGetTourTypesQuery} = tourTypeApi;
