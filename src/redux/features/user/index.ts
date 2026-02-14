import { baseApi } from "@/redux/api/baseApi";
import {
  GetUserResponse,
  RegisterPayload,
  RegisterResponse,
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
  }),
});

export const { useCreateUserMutation, useGetUserQuery } = userApi;
