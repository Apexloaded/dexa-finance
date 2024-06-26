import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Sessions } from "./libs/enums";
import { protectedRoutes, publicRoutes } from "./libs/routes";
import { jwtDecode } from "jwt-decode";

const isAuthenticated = async (cookie?: string) => {
  if (!cookie) {
    return false;
  }

  try {
    const parsedCookie: any = jwtDecode(cookie);
    const expires = new Date(parsedCookie.exp * 1000);
    if (expires < new Date()) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get(Sessions.ACCESS_TOKEN)?.value;
  const isValid = await isAuthenticated(cookie);
  if (!isValid && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  //   const verifyRes = await get("auth/session/verify", cookie);
  //   if (
  //     verifyRes.statusCode != 200 &&
  //     verifyRes.data?.message != "success" &&
  //     isProtectedRoute
  //   ) {
  //     return NextResponse.redirect(new URL("/login", req.nextUrl));
  //   }

  //   if (verifyRes?.data?.message == "success") {
  //     const res = await get("auth/onboarding/progress", cookie);
  //     if (
  //       res?.data.progress < 100 &&
  //       !req.nextUrl.pathname.startsWith("/welcome") &&
  //       !isPublicRoute
  //     ) {
  //       return NextResponse.redirect(new URL("/welcome", req.nextUrl));
  //     }

  //     if (
  //       res.data.progress >= 100 &&
  //       req.nextUrl.pathname.startsWith("/welcome")
  //     ) {
  //       return NextResponse.redirect(new URL("/home", req.nextUrl));
  //     }
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.ico$|.*\\.png$).*)"],
};
