"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import Logo from "./Logo";
import Title from "./Title";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useGetUserQuery } from "@/redux/features/user";
import { cn } from "@/lib/utils";
import { useLogoutMutation } from "@/redux/features/auth";
import { toast } from "sonner";

export enum Role {
  USER = "USER",
  GUIDE = "GUIDE",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

type Item = {
  name: string;
  path: string;
};

const profileItems: Record<Role, Item[]> = {
  [Role.USER]: [
    {
      name: "Dashboard",
      path: "/user/dashboard",
    },
    {
      name: "Profile",
      path: "/user/profile",
    },
    {
      name: "My Bookings",
      path: "/user/my-bookings",
    },
    {
      name: "Guide Application",
      path: "/user/guide-application",
    },
  ],
  [Role.GUIDE]: [
    {
      name: "Dashboard",
      path: "/guide/dashboard",
    },
    {
      name: "Profile",
      path: "/guide/profile",
    },
    {
      name: "Assigned Tours",
      path: "/guide/assigned-tours",
    },
  ],
  [Role.ADMIN]: [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "User Management",
      path: "/admin/user-management",
    },
    {
      name: "Guide Management",
      path: "/admin/guide-management",
    },
    {
      name: "Tour Management",
      path: "/admin/tour-management",
    },
    {
      name: "Booking Management",
      path: "/admin/booking-management",
    },
    {
      name: "Division Management",
      path: "/admin/division-management",
    },
  ],
  [Role.SUPER_ADMIN]: [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "User Management",
      path: "/admin/user-management",
    },
    {
      name: "Guide Management",
      path: "/admin/guide-management",
    },
    {
      name: "Tour Management",
      path: "/admin/tour-management",
    },
    {
      name: "Booking Management",
      path: "/admin/booking-management",
    },
    {
      name: "Division Management",
      path: "/admin/division-management",
    },
  ],
};

const navItems: Item[] = [
  {
    name: "Tours",
    path: "/tours",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

function Navbar() { 
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useGetUserQuery();
  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();
  const user = isError ? null : data?.data;
  const isAuthenticated = !!user;
  const userRole = user?.role;
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    };

    if (profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuOpen]);

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      toast.success("User logout successfull");
      window.location.replace("/auth/login");
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  return (
    <>
      <header className="border-b border-border bg-background sticky top-0 z-60">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center h-16 md:justify-between">
            {/* Mobile Menu Button - Left */}
            <Button
              className="md:hidden text-foreground order-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="outline"
              size="sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {/* Logo - Center on Mobile, Left on Desktop */}
            <Link
              href="/"
              className="flex items-center gap-2 order-2 md:order-1"
            >
              <Logo />
              <span className="hidden sm:block">{<Title />}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 order-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${pathName.startsWith(item.path) && "text-primary"} text-foreground hover:text-primary transition`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons / User Menu - Right */}
            {!isAuthenticated ? (
              <div className="flex items-center gap-3 order-3">
                <Button variant="outline" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button asChild className="hidden sm:block">
                  <Link href="/auth/signup"> Get Started</Link>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4 order-3">
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setProfileMenuOpen((prev) => !prev);
                    }}
                    className="flex items-center p-1.5 cursor-pointer
                  rounded-full hover:bg-muted transition"
                  >
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {userRole?.charAt(0).toUpperCase()}
                    </div>
                  </button>

                  {/* Profile Dropdown with Animation */}
                  {profileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                      <div className="p-3 border-b border-border">
                        <p className="text-xs text-muted-foreground capitalize">
                          {userRole}
                        </p>
                      </div>
                      <div className="flex flex-col py-2">
                        {userRole &&
                          profileItems[userRole]?.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={() => setProfileMenuOpen(false)}
                              className="px-4 py-2 text-sm text-foreground hover:bg-muted transition flex items-center gap-2"
                            >
                              {item.name}
                            </Link>
                          ))}
                        <div className="border-t border-border mt-2 pt-2">
                          <Button
                            variant={"link"}
                            onClick={handleLogout}
                            className={cn(
                              "",
                              "text-sm text-destructive hover:bg-muted cursor-pointer justify-start transition w-full hover:no-underline rounded-none",
                            )}
                          >
                            <LogOut size={16} />
                            Log Out
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Appears over content */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden 
            animate-in fade-in-0 duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            className="fixed left-0 right-0 top-15 bg-background border-b 
          border-border shadow-lg z-50 md:hidden animate-in slide-in-from-top-8 duration-500"
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 pt-4">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.path}
                    href={item.path}
                    className={`text-foreground hover:text-primary transition py-2
                    ${pathName.startsWith(item.path) && "text-primary"}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
