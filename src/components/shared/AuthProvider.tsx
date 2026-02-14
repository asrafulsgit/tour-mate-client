"use client";
import { useGetUserQuery } from "@/redux/features/user";
import Loader from "./Loader";

const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, error } = useGetUserQuery();
  if (isLoading) return <Loader />;

  return <>{children}</>;
};

export default AuthGate;
