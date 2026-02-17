import { baseApi } from "@/redux/api/baseApi";
import { ContactPayload, ContactResponse } from "./contact.types";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation<ContactResponse, ContactPayload>({
      query: (payload) => ({
        url: "/contact/email",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {useSendMessageMutation} = contactApi;
