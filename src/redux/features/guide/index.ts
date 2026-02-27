import { baseApi } from "@/redux/api/baseApi";
import {
  GetGuideApplicationResponse,
  GetGuideApplicationsResponse,
  GuideApplicationResponse,
  IGuideApplicationParams,
  IGuideApplicationResponse,
  ISuccessResponse,
} from "./guide.types";

export const guideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    applyGuide: builder.mutation<GuideApplicationResponse, FormData>({
      query: (formData) => ({
        url: "/guide/apply",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["GuideApplication"],
    }),
    getGuideApplications: builder.query<GetGuideApplicationsResponse, void>({
      query: () => ({
        url: "/guide/applications",
        method: "GET",
      }),
      providesTags: ["GuideApplication"],
    }),
    getAllGuideApplications: builder.query<
      IGuideApplicationResponse,
      IGuideApplicationParams
    >({
      query: (params) => ({
        url: "/guide/all",
        method: "GET",
        params,
      }),
      providesTags: ["GuideApplication"],
    }),
    getGuideApplication: builder.query<
      GetGuideApplicationResponse,
      { id: string }
    >({
      query: ({ id }) => ({
        url: `/guide/${id}`,
        method: "GET",
      }),
      providesTags: ["GuideApplication"],
    }),
    approveApplication: builder.mutation<ISuccessResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/guide/approve/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["GuideApplication"],
    }),
    rejectApplication: builder.mutation<ISuccessResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/guide/reject/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["GuideApplication"],
    }),
  }),
});

export const {
  useApplyGuideMutation,
  useGetGuideApplicationsQuery,
  useGetAllGuideApplicationsQuery,
  useGetGuideApplicationQuery,
  useApproveApplicationMutation,
  useRejectApplicationMutation,
} = guideApi;
