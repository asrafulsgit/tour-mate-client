export interface RegisterPayload {
  success: boolean;
  message: string;
  data: null;
}
export interface RegisterResponse {
  name: string;
  email: string;
  password: string;
}

export type AuthProvider = {
  provider: "Google" | "Creadentials";
  providerId: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  picture: string;
  isActive: "ACTIVE" | "INACTIVE" | "BLOCKED";
  isVerified: boolean;
  auths: AuthProvider[];
  role: "ADMIN" | "USER" | "GUIDE" | "SUPER_ADMIN";
  createdAt: string;
  updatedAt: string;
  address?: string;
  phone?: string;
};

export type GetUserResponse = {
  success: boolean;
  message: string;
  data: User;
};

export type UpdateUserPayload = {
  id: string;
  data: {
    name?: string;
    picture?: string;
    isActive?: "ACTIVE" | "INACTIVE" | "BLOCKED";
    isVerified?: boolean;
    role?: "ADMIN" | "USER" | "GUIDE" | "SUPER_ADMIN";
    address?: string;
    phone?: string;
    image?: File;
  } | FormData;
};
