// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default function middleware(request: NextRequest) {
//   // Get the token from cookies (adjust based on your auth implementation)
//   const accessToken = request.cookies.get("accessToken")?.value;
//   const refreshToken = request.cookies.get("refreshToken")?.value;

//   // Define your route types
//   const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");
//   const isPrivateRoute = request.nextUrl.pathname.startsWith("/admin");

//   if(!accessToken){

//   }

//   // Redirect authenticated users away from auth pages
//   if (isAuthRoute && accessToken) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // Redirect unauthenticated users to login
//   if (isPrivateRoute && !accessToken) {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }

//   return NextResponse.next();
// }

// // Configure which routes to run middleware on
// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*", "/guide/:path*", "/auth/:path*"],
// };

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("accessToken")?.value;
//   const refreshToken = request.cookies.get("refreshToken")?.value;

//   // Define route types
//   const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");
//   const isPrivateRoute =
//     request.nextUrl.pathname.startsWith("/admin") ||
//     request.nextUrl.pathname.startsWith("/user") ||
//     request.nextUrl.pathname.startsWith("/guide");

//   // PUBLIC ROUTES (auth pages) - redirect if already logged in
//   if (isAuthRoute) {
//     if (accessToken && isValidToken(accessToken)) {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//     return NextResponse.next();
//   }

//   // PRIVATE ROUTES - require authentication
//   if (isPrivateRoute) {
//     // No tokens at all - redirect to login
//     if (!accessToken && !refreshToken) {
//       const loginUrl = new URL("/auth/login", request.url);
//       loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
//       return NextResponse.redirect(loginUrl);
//     }

//     // Access token exists and is valid - allow access
//     if (accessToken && isValidToken(accessToken)) {
//       return NextResponse.next();
//     }

//     // Access token expired/invalid but refresh token exists
//     if (refreshToken && !request.cookies.get("_refresh_attempted")?.value) {
//       const response = NextResponse.redirect(request.url);
//       const refreshSuccess = await tryRefreshToken(refreshToken,response);

//        if (refreshSuccess) {
//         response.cookies.set("_refresh_attempted", "1", {
//           httpOnly: true,
//           maxAge: 500,
//           path: "/",
//         });
//         return response;
//       }
//     }

//     // Clear the refresh flag if it exists (for next time)
//     const hasRefreshFlag = request.cookies.get("_refresh_attempted")?.value;
//     if (hasRefreshFlag) {
//       const response = NextResponse.next();
//       response.cookies.delete("_refresh_attempted");
//       return response;
//     }

//     // All token validation/refresh failed - redirect to login
//     const loginUrl = new URL("/auth/login", request.url);
//     loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

//     // Clear invalid tokens
//     const response = NextResponse.redirect(loginUrl);
//     response.cookies.delete("accessToken");
//     response.cookies.delete("refreshToken");
//     return response;
//   }

//   // Default: allow access to public routes
//   return NextResponse.next();
// }

// // Validate JWT token locally (decode and check expiry)
// function isValidToken(token: string): boolean {
//   try {
//     const payload = JSON.parse(
//       Buffer.from(token.split(".")[1], "base64").toString(),
//     );

//     if (payload.exp && payload.exp * 1000 < Date.now()) {
//       return false;
//     }

//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// // Call backend to refresh - backend sets cookies via Set-Cookie header
// async function tryRefreshToken(refreshToken: string, response: NextResponse): Promise<boolean> {
//   try {
//     const apiRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: `refreshToken=${refreshToken}`,
//         },
//         credentials: "include",
//       },
//     );
//     if (apiRes.ok) {
//       const setCookieHeader = apiRes.headers.get("set-cookie");
//       if (setCookieHeader) {
//         response.headers.set("set-cookie", setCookieHeader);
//       }
//       return true;
//     }
//     return false;
//   } catch (error) {
//     console.error("Token refresh failed:", error);
//     return false;
//   }
// }

// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*", "/guide/:path*", "/auth/:path*"],
// };

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("accessToken")?.value;
//   const refreshToken = request.cookies.get("refreshToken")?.value;

//   // Define route types
//   const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");
//   const isPrivateRoute =
//     request.nextUrl.pathname.startsWith("/admin") ||
//     request.nextUrl.pathname.startsWith("/user") ||
//     request.nextUrl.pathname.startsWith("/guide");

//   // PUBLIC ROUTES (auth pages) - redirect if already logged in
//   if (isAuthRoute) {
//     if (accessToken && isValidToken(accessToken)) {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//     return NextResponse.next();
//   }

//   // PRIVATE ROUTES - require authentication
//   if (isPrivateRoute) {
//     // No tokens at all - redirect to login
//     if (!accessToken && !refreshToken) {
//       const loginUrl = new URL("/auth/login", request.url);
//       loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
//       return NextResponse.redirect(loginUrl);
//     }

//     // Access token exists and is valid - allow access
//     if (accessToken && isValidToken(accessToken)) {
//       return NextResponse.next();
//     }

//     // Access token expired/invalid but refresh token exists
//     if (refreshToken && !request.cookies.get("_refresh_attempted")?.value) {
//       // ✅ Create response ONCE
//       const response = NextResponse.next();
//       const refreshSuccess = await tryRefreshToken(refreshToken, response);

//       if (refreshSuccess) {
//         response.cookies.set("_refresh_attempted", "1", {
//           httpOnly: true,
//           maxAge: 5,
//           path: "/",
//         });
//         return response;
//       }

//       // If refresh failed, redirect to login
//       const loginUrl = new URL("/auth/login", request.url);
//       loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
//       return NextResponse.redirect(loginUrl);
//     }

//     // Clear the refresh flag if it exists (for next time)
//     const hasRefreshFlag = request.cookies.get("_refresh_attempted")?.value;
//     if (hasRefreshFlag) {
//       const response = NextResponse.next();
//       response.cookies.delete("_refresh_attempted");
//       return response;
//     }

//     // All token validation/refresh failed - redirect to login
//     const loginUrl = new URL("/auth/login", request.url);
//     loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

//     const response = NextResponse.redirect(loginUrl);
//     response.cookies.delete("accessToken");
//     response.cookies.delete("refreshToken");
//     return response;
//   }

//   // Default: allow access to public routes
//   return NextResponse.next();
// }

// function isValidToken(token: string): boolean {
//   try {
//     const payload = JSON.parse(
//       Buffer.from(token.split(".")[1], "base64").toString(),
//     );

//     if (payload.exp && payload.exp * 1000 < Date.now()) {
//       return false;
//     }

//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// async function tryRefreshToken(
//   refreshToken: string,
//   response: NextResponse,
// ): Promise<boolean> {
//   try {
//     const apiRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Cookie: `refreshToken=${refreshToken}`,
//         },
//       },
//     );

//     if (apiRes.ok) {
//       // ✅ Use getSetCookie() to get all Set-Cookie headers
//       const setCookie = apiRes.headers.get("set-cookie");
//       if (setCookie) {
//         response.headers.append("set-cookie", setCookie);
//       }

//       return true;
//     }

//     return false;
//   } catch (error) {
//     console.error("Token refresh failed:", error);
//     return false;
//   }
// }

// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*", "/guide/:path*", "/auth/:path*"],
// };
