import { DetalleCompra } from "../detalleCompra";

export interface HistorialCompra {
    id: number; // Puedes ajustar el tipo según la estructura real de tu ID
    clienteId: string;
    // Otros campos según sea necesario
    detalles: DetalleCompra[];
  }
  