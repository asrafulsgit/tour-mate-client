import { baseApi } from "@/redux/api/baseApi";
import { GetReviewsResponse } from "./tour.types";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<GetReviewsResponse, string>({
      query: (tourId) => ({
        url: `/review/${tourId}`, 
        method: "GET",
      }),
      providesTags: (result, error, tourId) =>
        result
          ? [
              ...result.data.map((review) => ({
                type: "Review" as const,
                id: review._id,
              })),
              { type: "Review", id: `TOUR_${tourId}` },
            ]
          : [{ type: "Review", id: `TOUR_${tourId}` }],
    }),
  }),
});

export const {useGetReviewsQuery} = reviewApi;
