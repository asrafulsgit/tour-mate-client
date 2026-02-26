"use client";
import { useGetUserQuery } from "@/redux/features/user";
import Loader from "./Loader";
import { usePathname, useRouter } from "next/navigation";
import { Role } from "./Navbar";

const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const router = useRouter();
  const { data, isLoading, error } = useGetUserQuery();

  const role = data?.data.role;
  const userPath = pathName.startsWith("/user");
  const adminPath = pathName.startsWith("/admin");
  const guidePath = pathName.startsWith("/guide");

  if (isLoading) return <Loader />;
  console.log(role)
  if (
    (userPath && role !== Role.USER) ||
    (adminPath && (role !== Role.ADMIN && role !== Role.SUPER_ADMIN)) ||
    (guidePath && role !== Role.GUIDE)
  ) {
    router.replace("/not-found");
    return null;
  }
  return <>{children}</>;
};

export default AuthGate;
