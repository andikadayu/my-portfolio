import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Add security headers
  const response = NextResponse.next();

  // Request tracing
  const requestId = crypto.randomUUID();
  response.headers.set("X-Request-ID", requestId);

  // Security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Performance headers
  response.headers.set("Cache-Control", "public, max-age=31536000, immutable");

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
