import { baseApi } from "@/redux/api/baseApi";
import { GuideApplicationResponse } from "./guide.types";

export const guideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    applyGuide: builder.mutation<GuideApplicationResponse, FormData>({
      query: (formData) => ({
        url: "/guide/apply",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useApplyGuideMutation } = guideApi;
