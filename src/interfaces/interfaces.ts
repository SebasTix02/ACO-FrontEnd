
  
export interface PedidoEntradaModalProps {
    esVisible: boolean;
    enCerrar: () => void;
  }

export interface Pedido {
  [key: string]: any; // Add this line
    numeroPedido: string;
    cliente: string;
    lat: number;
    lon: number;
    productos: Producto[];
    total: number;
    fecha_pedido: string;
}
export interface ProductSummary {
  [key: string]: number;
}
export interface Producto {
  key: string;
  nombre: string;
  cantidad: number;
  precio: number;
  total: number;
  cod_art: number;
}
export interface FiltroProvinciaFecha {
    tipo: 'provincia' | 'rangoFecha';
    valor: string | string[];
}

export interface Ruta {
  id: string;
  nombre: string;
  geojson: any; 
}

export interface FiltroTabla {
  columna: string;
  valor: string;
}

export interface Usuario {
  id: string;
  usuario: string;
  clave: string;
  nombre: string;
  apellido: string;
  privilegios: string;
}


export interface Articulo {
  cod_art: string;
  nombre_art: string;
  cod_subgrupo: string;
  costo: string;
}

export interface ArticuloPedido extends Articulo {
  key: string;
  cantidad: number;
  precio: number;
  total: number;
}
export interface DetallePedido {
  id_detalle: number;
  cod_art: string;
  nombre_articulo: string;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}

export interface MappedOrder {
  key: string;
  numeroPedido: string;
  cliente: string;
  lat: number;
  lon: number;
  productos: MappedDetalle[];
  total: number;
  fechaPedido: string;
  estado: string;
}

export interface MappedDetalle {
  key: string;
  nombre: string;
  cantidad: number;
  precio: number;
  total: number;
}

export interface RutaOptimizada {
  id_ruta: string;
  estado: string;
  distancia_total: number;
  tiempo_estimado: string;
  geojson: any;
  pedidos: any[];
  fecha_creacion: string;
}

export interface RouteActionsProps {
  selectedRoute?: string;
  onStatusChange: (nuevoEstado: string) => Promise<void>;
}

export interface RouteInfoProps {
  ruta?: Ruta;
}