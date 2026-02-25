import { baseApi } from "@/redux/api/baseApi";
import {
  CreateBookingPayload,
  CreateBookingResponse,
  GetMyBookingsResponse,
  IBookingDetailsResponse,
} from "./booking.types";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation<
      CreateBookingResponse,
      CreateBookingPayload
    >({
      query: (payload) => ({
        url: "/booking/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Booking"],
    }),
    getMyBookings: builder.query<GetMyBookingsResponse, void>({
      query: () => ({
        url: "/booking/my-bookings",
        method: "GET",
      }),
      providesTags: ["Booking"],
    }),
    getBookingDetails: builder.query<IBookingDetailsResponse, {id : string}>({
      query: ({id}) => ({
        url: `/booking/${id}`,
        method: "GET",
      }),
      providesTags: ["Booking"],
    }),
  }),
});

export const { useCreateBookingMutation, useGetMyBookingsQuery, useGetBookingDetailsQuery } = bookingApi;
