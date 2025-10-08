import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "@/lib/jwt";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  //  Protected routes 
  const protectedPaths = [""];
  const path = req.nextUrl.pathname;

  const isProtected = protectedPaths.some((route) => path.startsWith(route));


  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }


  if (token) {
    const decoded = await verifyJwt(token);
    if (!decoded) {
      const res = NextResponse.redirect(new URL("/auth/login", req.url));
      res.cookies.delete("auth_token");
      return res;
    }
  }

  
  return NextResponse.next();
}

// Middleware 
export const config = {
  matcher: [
    ""
  ],
};
