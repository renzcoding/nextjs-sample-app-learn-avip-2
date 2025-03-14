import { NextRequest, NextResponse } from "next/server";
import withAuth from "./app/middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  /* return NextResponse.redirect(new URL("/", request.url));
  const isLogin = true;
  //   if (request.nextUrl.pathname.startsWith("/about")) {
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  //   } */
  const res = NextResponse.next();
  return res;
}

/* export const config = {
  matcher: ["/dashboar/:path*", "/about/:path*"],
}; */

export default withAuth(mainMiddleware, [
  "/dashboard",
  "/profile",
  "/login",
  "/register",
]);
