"use client";

import { useMemo } from "react";
import { Session } from "@/src/lib/auth";
import { Card, Header, Chart } from "@/src/components";
import type { ChartConfiguration } from "chart.js/auto";
import type { DashboardData } from "./types";

interface HomeClientProps {
  session: Session;
  dashboardData: DashboardData;
}

export default function HomeClient({
  session,
  dashboardData,
}: HomeClientProps) {
  const lineChartConfig: ChartConfiguration = useMemo(
    () => ({
      type: "line",
      data: {
        labels: dashboardData.transaccionesPorDia.map((t) => t.fecha),
        datasets: [
          {
            label: "Monto de Transacciones",
            data: dashboardData.transaccionesPorDia.map((t) => t.monto),
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    }),
    [dashboardData]
  );

  const barChartConfig: ChartConfiguration = useMemo(
    () => ({
      type: "bar",
      data: {
        labels: dashboardData.conciliacionMensual.map((t) => t.mes),
        datasets: [
          {
            label: "Monto de Transacciones",
            data: dashboardData.conciliacionMensual.map((t) => t.monto),
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    }),
    [dashboardData]
  );

  const polarChartConfig: ChartConfiguration = useMemo(
    () => ({
      type: "polarArea",
      data: {
        labels: dashboardData.pagosPendientesDetalle.map((p) => p.proveedor),
        datasets: [
          {
            label: "Monto de Transacciones",
            data: dashboardData.pagosPendientesDetalle.map((t) => t.monto),
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    }),
    [dashboardData]
  );

  const doughnutChartConfig: ChartConfiguration = useMemo(
    () => ({
      type: "doughnut",
      data: {
        labels: dashboardData.topProveedores.map((p) => p.nombre),
        datasets: [
          {
            label: "Monto de Transacciones",
            data: dashboardData.topProveedores.map((t) => t.monto),
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    }),
    [dashboardData]
  );

  return (
    <>
      <Header session={session} />
      <main className="container mx-auto p-2 pb-6">
        <div className="grid gap-6">
          <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-4 w-full">
            <Card>
              <h3 className="text-sm font-medium text-gray-500">
                Total Transacciones Hoy
              </h3>
              <p className="text-3xl font-bold mt-2">
                {dashboardData.totalTransaccionesHoy}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                ${dashboardData.montoTransaccionesHoy.toLocaleString()}
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-medium text-gray-500">
                Monto Conciliado Mes
              </h3>
              <p className="text-3xl font-bold mt-2">
                ${dashboardData.montoConciliadoMes.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {dashboardData.estadisticas.tasaConciliacion}%
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-medium text-gray-500">
                Monto Pendiente Mes
              </h3>
              <p className="text-3xl font-bold mt-2">
                ${dashboardData.montoPendienteMes.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {dashboardData.pagosPendientes} Pagos
              </p>
            </Card>
          </section>

          <section className="grid xl:grid-cols-2 gap-6">
            <Chart title="Últimas Transacciones" config={lineChartConfig} />
            <Chart title="Consiliación por mes" config={barChartConfig} />
            <Chart title="Pagos Pendientes" config={polarChartConfig} />
            <Chart title="Top Proveedores" config={doughnutChartConfig} />
          </section>
        </div>
      </main>
    </>
  );
}
