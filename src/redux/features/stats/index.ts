import { baseApi } from "@/redux/api/baseApi";
import {
  BookingStatsResponse,
  GetUserStatsResponse,
  PaymentStatsResponse,
  TourStatsResponse,
} from "./stats.types";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserStats: builder.query<GetUserStatsResponse, void>({
      query: () => ({
        url: "/stats/user",
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
    getTourStats: builder.query<TourStatsResponse, void>({
      query: () => ({
        url: "/stats/tour",
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
    getBookingStats: builder.query<BookingStatsResponse, void>({
      query: () => ({
        url: "/stats/booking",
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
    getPaymentStats: builder.query<PaymentStatsResponse, void>({
      query: () => ({
        url: "/stats/payment",
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {
  useGetUserStatsQuery,
  useGetTourStatsQuery,
  useGetBookingStatsQuery,
  useGetPaymentStatsQuery,
} = statsApi;
