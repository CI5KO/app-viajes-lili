"use server";

import { NextResponse } from "next/server";
import { clearSession } from "@/src/lib/auth";

export async function GET() {
  await clearSession();
  return NextResponse.redirect(
    new URL("/login", process.env.NEXT_PUBLIC_URL || "http://localhost:3000")
  );
}
