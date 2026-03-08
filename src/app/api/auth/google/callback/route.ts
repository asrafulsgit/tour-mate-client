 
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) { 
  const query = req.nextUrl.search;
  const backendURL = `https://tour-mate-server-swart.vercel.app/api/v1/auth/google/callback${query}`;

  // Call backend
  const resp = await fetch(backendURL, {
    method: "GET",
    credentials: "include",  
  });

  const data = await resp.json();

  if (!resp.ok || !data.success) {
    return NextResponse.redirect(`/auth/login?error=${encodeURIComponent(data.message || "Google login failed")}`);
  }

  // Set cookies on frontend domain
  const response = NextResponse.redirect("/");  
  const { accessToken, refreshToken } = data.tokens;

  if (accessToken) {
    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  }

  if (refreshToken) {
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}