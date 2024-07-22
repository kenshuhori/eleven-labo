import { organizationName } from "@/constants";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/themes/(.*)/posts/new"]);

const isAdministratordRoute = createRouteMatcher([
  "/admin",
  "/admin/(.*)",
  "/api/jobs/(.*)",
  "/api/migration/(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { orgSlug } = auth();

  if (isProtectedRoute(req)) {
    auth().protect();
  }
  if (isAdministratordRoute(req) && orgSlug !== organizationName) {
    const root = new URL("/", req.url);
    return NextResponse.redirect(root);
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
