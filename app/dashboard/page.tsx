"use server";

import { getSession } from "@/src/lib/auth";
import HomeClient from "./pageClient";
import { getDashboardData } from "./actions";
import type { DashboardData } from "./types";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) return <></>;

  const dashboardData: DashboardData | null = await getDashboardData();
  if (!dashboardData) return <div>Error loading dashboard data.</div>;

  return <HomeClient session={session} dashboardData={dashboardData} />;
}
