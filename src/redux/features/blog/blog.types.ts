export type CreateBlogPayload = {
  title: string;
  description: string;
  type: string;
  image: File;
};

export type CreateBlogResponse = {
  success: boolean;
  message: string;
  data: null;
};

export interface CreatedByPopulatedData {
  _id: string;
  name?: string;
  picture?: string;
}

export type Blog = {
  _id: string;
  title: string;
  description: string;
  type: string;
  thumbnail: string;
  createdBy: CreatedByPopulatedData;
  createdAt: string;
  updatedAt: string;
};

export type BlogMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type BlogParams = {
  page?: number;
  limit?: number;
  type?: string;
  searchTerm?: string;
};

export type GetBlogsResponse = {
  success: boolean;
  message: string;
  data: Blog[];
  meta: BlogMeta;
};

export type GetBlogResponse = {
  success: boolean;
  message: string;
  data: Blog;
};
