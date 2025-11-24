import { generateCsrfToken } from "@/src/lib/csrf";

export async function GET() {
  const token = await generateCsrfToken();
  return new Response(JSON.stringify({ csrfToken: token }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
