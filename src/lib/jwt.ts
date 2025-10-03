import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";

const SECRET = process.env.JWT_SECRET as string;

if (!SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

//  Sign JWT
export async function signJwt(payload: object, expiresIn = "7d"): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET, { expiresIn } as SignOptions, (err, token) => {
      if (err || !token) {
        return reject(err);
      }
      resolve(token);
    });
  });
}

// Verify JWT
export async function verifyJwt<T extends object>(token: string): Promise<T | null> {
  return new Promise((resolve) => {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return resolve(null);
      }
      resolve(decoded as T);
    });
  });
}


// Set Auth Cookie
export async function setAuthCookie(token: string) {
  const res = NextResponse.next();

  res.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}

// Remove Auth Cookie
export async function removeAuthCookie() {
  const res = NextResponse.next();
  res.cookies.delete("auth_token");
  return res;
}
