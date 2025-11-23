"use server";

import { NextResponse } from "next/server";
import { generateMockSession, setSession } from "@/src/lib/auth";

export async function GET() {
  const mockSession = await generateMockSession();
  await setSession(mockSession);
  return NextResponse.redirect(
    new URL(
      "/dashboard",
      process.env.NEXT_PUBLIC_URL || "http://localhost:3000"
    )
  );
}
