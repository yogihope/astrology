import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (code !== process.env.ADMIN_CODE) {
    return NextResponse.json({ error: "Invalid code" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_auth", "1", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 8,
    sameSite: "lax",
  });

  return NextResponse.json({ success: true });
}
