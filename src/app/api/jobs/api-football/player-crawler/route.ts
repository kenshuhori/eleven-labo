import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { userId, orgId, orgRole, orgPermissions, getToken, has } = auth();
    const user = await currentUser();
    console.log("userId", userId);
    console.log("orgId", orgId);
    console.log("orgRole", orgRole);
    console.log("orgPermissions", orgPermissions);
    console.log("user", user);
    const canManage = has({ permission: "org:admin" });
    const result = { message: "Hello, World!", userId: userId, canManage: canManage };
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
