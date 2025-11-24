import { cookies } from "next/headers";

export async function GET() {
  // Simulamos la data que recebiriamos desde una API
  // Estos datos mock fueron solitiados por IA para agilizar el desarrollo

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

  const payments = [
    {
      id: 1,
      proveedor: "Proveedor A",
      monto: 100.0,
      estatus: "Pendiente",
      fecha: "2024-01-15",
    },
    {
      id: 2,
      proveedor: "Proveedor B",
      monto: 150.0,
      estatus: "Pendiente",
      fecha: "2024-01-20",
    },
    {
      id: 3,
      proveedor: "Proveedor C",
      monto: 150.0,
      estatus: "Pendiente",
      fecha: "2024-01-20",
    },
    {
      id: 4,
      proveedor: "Proveedor D",
      monto: 150.0,
      estatus: "Aprobado",
      fecha: "2024-01-20",
    },
    {
      id: 5,
      proveedor: "Proveedor A",
      monto: 150.0,
      estatus: "Rechazado",
      fecha: "2024-01-20",
    },
    {
      id: 6,
      proveedor: "Proveedor C",
      monto: 150.0,
      estatus: "Pendiente",
      fecha: "2024-01-20",
    },
    {
      id: 7,
      proveedor: "Proveedor B",
      monto: 150.0,
      estatus: "Aprobado",
      fecha: "2024-01-20",
    },
    {
      id: 8,
      proveedor: "Proveedor D",
      monto: 150.0,
      estatus: "Pendiente",
      fecha: "2024-01-20",
    },
    {
      id: 9,
      proveedor: "Proveedor E",
      monto: 150.0,
      estatus: "Pendiente",
      fecha: "2024-01-20",
    },
    {
      id: 10,
      proveedor: "Proveedor E",
      monto: 150.0,
      estatus: "Aprobado",
      fecha: "2024-01-20",
    },
  ];
  return new Response(JSON.stringify(payments), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
