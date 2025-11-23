"use server";

import { getSession } from "@/src/lib/auth";
import PaymentsPageClient from "./pageClient";

export default async function PaymentsPage() {
  const session = await getSession();
  if (!session) return <></>;

  return <PaymentsPageClient session={session} />;
}
