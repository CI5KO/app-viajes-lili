"use server";

import type { DashboardData } from "./types";

export async function getDashboardData(): Promise<DashboardData | null> {
  // Simulamos la data que recebiriamos desde una API
  // Estos datos mock fueron solitiados por IA para agilizar el desarrollo

  return {
    // KPIs principales
    totalTransaccionesHoy: 47,
    montoTransaccionesHoy: 17280.25,
    montoConciliadoMes: 125840.5,
    montoPendienteMes: 6920.25,
    pagosPendientes: 8,
    pagosPendientesVencidos: 0,
    proveedoresActivos: 23,

    transaccionesPorDia: [
      { fecha: "2025-12-18", cantidad: 38, monto: 12450.0 },
      { fecha: "2025-12-19", cantidad: 42, monto: 15230.5 },
      { fecha: "2025-12-20", cantidad: 35, monto: 11890.25 },
      { fecha: "2025-12-21", cantidad: 52, monto: 18920.75 },
      { fecha: "2025-12-22", cantidad: 45, monto: 16340.0 },
      { fecha: "2025-12-23", cantidad: 51, monto: 19450.5 },
      { fecha: "2025-12-24", cantidad: 47, monto: 17280.25 },
    ],

    conciliacionMensual: [
      { mes: "Ago", monto: 89320.5, conciliado: 87100.0 },
      { mes: "Sep", monto: 95840.25, conciliado: 94200.5 },
      { mes: "Oct", monto: 102450.75, conciliado: 99800.25 },
      { mes: "Nov", monto: 98320.0, conciliado: 96500.0 },
      { mes: "Dic", monto: 115680.5, conciliado: 112340.75 },
      { mes: "Ene", monto: 125840.5, conciliado: 118920.25 },
    ],

    pagosPendientesDetalle: [
      {
        id: 1,
        proveedor: "Hotel Paradise",
        monto: 3450.0,
        vencimiento: "2025-12-25",
        dias: 1,
      },
      {
        id: 2,
        proveedor: "Transportes Rápidos",
        monto: 2890.5,
        vencimiento: "2025-12-27",
        dias: 3,
      },
      {
        id: 3,
        proveedor: "Aerolínea Global",
        monto: 5670.25,
        vencimiento: "2025-12-28",
        dias: 4,
      },
      {
        id: 4,
        proveedor: "Tours Aventura",
        monto: 1230.0,
        vencimiento: "2025-12-30",
        dias: 6,
      },
      {
        id: 5,
        proveedor: "Restaurante Gourmet",
        monto: 890.75,
        vencimiento: "2026-01-12",
        dias: 8,
      },
      {
        id: 6,
        proveedor: "Hotel Costa Azul",
        monto: 4120.0,
        vencimiento: "2026-01-03",
        dias: 10,
      },
      {
        id: 7,
        proveedor: "Rent a Car Express",
        monto: 1560.5,
        vencimiento: "2026-01-05",
        dias: 12,
      },
      {
        id: 8,
        proveedor: "Cruceros del Caribe",
        monto: 6890.0,
        vencimiento: "2026-01-08",
        dias: 15,
      },
    ],

    proveedoresPorCategoria: [
      { categoria: "Hoteles", cantidad: 8, monto: 45230.5 },
      { categoria: "Transporte", cantidad: 6, monto: 32450.25 },
      { categoria: "Aerolíneas", cantidad: 4, monto: 28920.75 },
      { categoria: "Tours", cantidad: 3, monto: 12340.0 },
      { categoria: "Restaurantes", cantidad: 2, monto: 6899.0 },
    ],

    topProveedores: [
      { nombre: "Hotel Paradise", transacciones: 15, monto: 18450.5 },
      { nombre: "Aerolínea Global", transacciones: 12, monto: 16230.75 },
      { nombre: "Transportes Rápidos", transacciones: 18, monto: 14890.25 },
      { nombre: "Hotel Costa Azul", transacciones: 10, monto: 12670.0 },
      { nombre: "Cruceros del Caribe", transacciones: 8, monto: 11340.5 },
    ],

    estadisticas: {
      promedioTransaccionDiaria: 367.45,
      tasaConciliacion: 94.5,
      tiempoPromedioPago: 12,
      proveedoresNuevosEsteMes: 2,
    },
  };
}
