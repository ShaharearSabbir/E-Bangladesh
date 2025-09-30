import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

// const SECRET = process.env.JWT_SECRET!;

const SECRET: string = process.env.JWT_SECRET as string;

if (!SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}


// JWT Utils
export function signJwt(payload: object, expiresIn = "7d"): string {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyJwt(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
}

// Cookie Utils 
export function setAuthCookie(token: string) {
  const res = NextResponse.next();
  res.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 day
  });
  return res;
}

export function removeAuthCookie() {
  const res = NextResponse.next();
  res.cookies.delete("auth_token");
  return res;
}
