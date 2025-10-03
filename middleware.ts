// // middleware.ts (at project root)
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     {
//       source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
//       missing: [
//         { type: "header", key: "next-router-prefetch" },
//         { type: "header", key: "purpose", value: "prefetch" },
//       ],
//     },
//   ],
// };

// export function middleware(req: NextRequest) {
//   const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

//   const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com;
//     style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com;
//     img-src 'self' data: https://www.jsmatrix.in https://www.google-analytics.com;
//     font-src 'self' https://fonts.gstatic.com;
//     connect-src 'self' https://www.google-analytics.com;
//     frame-src 'self';
//   `
//     .replace(/\s{2,}/g, " ")
//     .trim();

//   const requestHeaders = new Headers(req.headers);
//   requestHeaders.set("x-nonce", nonce);

//   const response = NextResponse.next({
//     request: { headers: requestHeaders },
//   });
//   response.headers.set("Content-Security-Policy", cspHeader);

//   return response;
// }

// middleware.ts (at project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import crypto from "crypto";

// Edge-compatible nonce generator
function generateNonce(length = 16) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
}

// Apply middleware to all paths except API, _next/static, _next/image, favicon.ico
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export function middleware(req: NextRequest) {
  // Generate a nonce for inline scripts/styles
  const nonce = generateNonce();

  // Content Security Policy
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com;
    img-src 'self' data: https://www.jsmatrix.in https://www.google-analytics.com;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com;
    frame-src 'self';
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  // Clone existing headers and add nonce
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);

  // Create response
  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Add CSP header
  response.headers.set("Content-Security-Policy", cspHeader);

  return response;
}
