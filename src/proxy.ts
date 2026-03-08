import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  // Define route types
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");
  const isPrivateRoute =
    request.nextUrl.pathname.startsWith("/admin") ||
    request.nextUrl.pathname.startsWith("/user") ||
    request.nextUrl.pathname.startsWith("/guide") ||
    request.nextUrl.pathname.startsWith("/become-a-guide");
  const response = NextResponse.next();
  if (!accessToken && refreshToken) {
    try {
      const resp = await fetch(
        `https://tour-mate-server-swart.vercel.app/api/v1/auth/refresh-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: `refreshToken=${refreshToken}`,
          },
        },
      );
      if (!resp.ok) {
        throw new Error("Refresh failed");
      }
      const setCookie = resp.headers.get("set-cookie");
      if (setCookie) {
        response.headers.append("set-cookie", setCookie);
      }
      return response;
    } catch (err) {
      console.log(err);
      response.cookies.delete("refreshToken");
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // PUBLIC ROUTES (auth pages) - redirect if already logged in
  if (isAuthRoute) {
    if (accessToken && isValidToken(accessToken)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // PRIVATE ROUTES - require authentication
  if (isPrivateRoute) {
    // No tokens at all - redirect to login
    if (!accessToken && !refreshToken) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Access token exists and is valid - allow access
    if (accessToken && isValidToken(accessToken)) {
      return NextResponse.next();
    }
  }
}

function isValidToken(token: string): boolean {
  try {
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString(),
    );

    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
