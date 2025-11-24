import { cookies } from "next/headers";
import { validateCsrfToken } from "@/src/lib/csrf";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get(
    process.env.COOKIE_NAME || "viajes_lili_session"
  );

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { csrfToken, paymentId, action } = await request.json();

  if (!csrfToken || !(await validateCsrfToken(csrfToken))) {
    return new Response(JSON.stringify({ error: "Invalid CSRF token" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!paymentId || typeof paymentId !== "number") {
    return new Response(JSON.stringify({ error: "Invalid paymentId" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!action || !["Aprobado", "Rechazado"].includes(action)) {
    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true, paymentId, action }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
