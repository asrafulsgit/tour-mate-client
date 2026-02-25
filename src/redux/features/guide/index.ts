import { baseApi } from "@/redux/api/baseApi";
import {
  GetGuideApplicationsResponse,
  GuideApplicationResponse,
} from "./guide.types";

export const guideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    applyGuide: builder.mutation<GuideApplicationResponse, FormData>({
      query: (formData) => ({
        url: "/guide/apply",
        method: "POST",
        body: formData,
      }),
      invalidatesTags :["GuideApplication"]
    }),
    getGuideApplications: builder.query<GetGuideApplicationsResponse, void>({
      query: () => ({
        url: "/guide/applications",
        method: "GET"
      }), 
      providesTags: ["GuideApplication"],
    }),
  }),
});

export const { useApplyGuideMutation,useGetGuideApplicationsQuery } = guideApi;
