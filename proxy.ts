"use server";

import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = request.cookies.get(
    process.env.COOKIE_NAME || "viajes_lili_session"
  );

  if (
    pathname.includes(".") ||
    pathname.includes("/~") ||
    pathname.startsWith("/auth/")
  ) {
    return NextResponse.next();
  }

  if (!session && pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (session && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
