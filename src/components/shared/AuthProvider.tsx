"use client";
import { useGetUserQuery } from "@/redux/features/user";

const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, error } = useGetUserQuery();
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGate;
