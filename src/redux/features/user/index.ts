import { baseApi } from "@/redux/api/baseApi";
import {
  GetUserBookingStatsResponse,
  GetUserResponse,
  RegisterPayload,
  RegisterResponse,
  UpdateUserPayload,
} from "./user.types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<RegisterPayload, RegisterResponse>({
      query: (payload) => ({
        url: "/user/register",
        method: "POST",
        body: payload,
      }),
    }),
    getUser: builder.query<GetUserResponse, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateUser: builder.mutation<GetUserResponse, UpdateUserPayload>({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getUserBookingStats: builder.query<GetUserBookingStatsResponse, void>({
      query: () => ({
        url: "user/booking/stats",
        method: "GET",
      }),
      providesTags: ["Booking"],
    }),
  }),
});

export const { useCreateUserMutation, useGetUserQuery, useUpdateUserMutation, useGetUserBookingStatsQuery } =
  userApi;
