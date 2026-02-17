import { baseApi } from "@/redux/api/baseApi";
import {
  BlogParams,
  CreateBlogResponse,
  GetBlogResponse,
  GetBlogsResponse,
} from "./blog.types";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation<CreateBlogResponse, FormData>({
      query: (formData) => ({
        url: "/blog",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Blog"],
    }),
    getBlogs: builder.query<GetBlogsResponse, BlogParams>({
      query: (params) => ({
        url: "/blog/all",
        method: "GET",
        params,
      }),
      providesTags: ["Blog"],
    }),
    getBlog: builder.query<GetBlogResponse, string>({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Blog", id }],
    }),
  }),
});

export const { useCreateBlogMutation, useGetBlogsQuery, useGetBlogQuery } = blogApi;
