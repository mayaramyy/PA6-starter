import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("demo-auth", "1", {
    httpOnly: true,
    path: "/",
  });

  return response;
}