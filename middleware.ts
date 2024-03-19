import { NextRequest } from "next/server";
import { cookies } from "next/headers";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const cookiesList = cookies();
  const isLoggedIn = cookiesList.has("next__token");

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return null;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    } else {
      return null;
    }
  }

  // if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL("/auth/login", nextUrl));
  // }

  return null;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
