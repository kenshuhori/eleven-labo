import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/themes/(.*)/posts/new"]);

const isAdministratordRoute = createRouteMatcher([
  "/admin",
  "/admin/(.*)",
  "/api/jobs/(.*)",
  "/api/migration/(.*)",
]);

const ORGANIZATION_NAME = "administrator";

export default clerkMiddleware((auth, req) => {
  const { orgSlug } = auth();

  if (isProtectedRoute(req)) {
    auth().protect();
  }
  if (isAdministratordRoute(req) && orgSlug !== ORGANIZATION_NAME) {
    const root = new URL("/", req.url);
    return NextResponse.redirect(root);
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
