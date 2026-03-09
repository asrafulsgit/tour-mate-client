import { baseApi } from "@/redux/api/baseApi";
import { SuccessResponse } from "./subscription.types";

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    crateSubscription: builder.mutation<SuccessResponse, { email: string }>({
      query: (email) => ({
        url: "/subscription",
        method: "POST",
        body: email,
      }),
    }),
  }),
});

export const { useCrateSubscriptionMutation } = subscriptionApi;
