interface TransaccionDia {
  fecha: string;
  cantidad: number;
  monto: number;
}

interface ConciliacionMes {
  mes: string;
  monto: number;
  conciliado: number;
}

interface PagoPendiente {
  id: number;
  proveedor: string;
  monto: number;
  vencimiento: string;
  dias: number;
}

interface ProveedorCategoria {
  categoria: string;
  cantidad: number;
  monto: number;
}

interface TopProveedor {
  nombre: string;
  transacciones: number;
  monto: number;
}

interface Estadisticas {
  promedioTransaccionDiaria: number;
  tasaConciliacion: number;
  tiempoPromedioPago: number;
  proveedoresNuevosEsteMes: number;
}

export interface DashboardData {
  // KPIs principales
  totalTransaccionesHoy: number;
  montoTransaccionesHoy: number; // Monto total de transacciones de hoy
  montoConciliadoMes: number;
  montoPendienteMes: number; // Monto total pendiente de conciliar
  pagosPendientes: number;
  pagosPendientesVencidos: number; // Cantidad de pagos vencidos
  proveedoresActivos: number;
  
  // Gráficas
  transaccionesPorDia: TransaccionDia[];
  conciliacionMensual: ConciliacionMes[];
  pagosPendientesDetalle: PagoPendiente[];
  proveedoresPorCategoria: ProveedorCategoria[];
  topProveedores: TopProveedor[];
  estadisticas: Estadisticas;
}
