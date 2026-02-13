import { baseApi } from "@/redux/api/baseApi";
import { RegisterPayload, RegisterResponse } from "./user.types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<RegisterPayload, RegisterResponse>({
      query: (payload) => ({
        url: "/user/register",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
