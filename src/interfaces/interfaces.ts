
  
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

export interface KPIsMensualesProps {
  ciudades: Array<{ nombre: string; codigo: number }>;
}

export interface TopProducto {
  codigo: string;
  nombre: string;
  unidades: number;
}


export interface PedidoEdicionModalProps {
  visible: boolean;
  onClose: () => void;
  pedido: Pedido;
  onSave: (updatedOrder: Pedido) => void;
}


export interface ModalEditarUsuarioProps {
  visible: boolean;
  onClose: () => void;
  usuario: Usuario;
  onSave: (usuario: Usuario) => void;
}

export interface ModalInicioRutaProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: (ubicacion: any) => void;
}

export interface ModalAgregarUsuarioProps {
  visible: boolean;
  onClose: () => void;
  onSave: (usuario: Usuario) => void;
}

export interface ModalEliminarUsuarioProps {
  visible: boolean;
  onClose: () => void;
  usuario: Usuario;
  onConfirm: (id: string) => void;
}
export interface PropsTablaPerzonalizada<T> {
  dataSource: T[];
  columns: any[];
  rowKey: string;
  handleAdd?: () => void;
  searchFields: string[];
}

export interface PropsTablaVerPedidos{
  data: Pedido[];
  onAdd: () => void;
  onDelete: (record: Pedido) => void;
  onEdit: (record: Pedido) => void;
  searchFields?: string[];
}

export interface CardData {
  title: string;
  icon: React.ReactNode;
  value: number | string;
  format?: (value: number) => string;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  crecimiento?: number;
}

export interface DashboardCardsProps {
  cards: CardData[];
}

export interface DistribucionVentasProps {
  productos: Articulo[];
}

export interface CiudadData {
  ciudad: {
    codigo: string;
    nombre: string;
    provincia: any;
  };
  metricas: {
    ventas_totales: number;
    unidades_vendidas: number;
    transacciones: number;
  };
}

export interface PatronesConsumoProps {
  productos: Articulo[];
}

export interface PeriodoData {
  periodo: string;
  cod_art: string;
  nombre_art: string;
  total_ventas: number;
  total_unidades: string;
  total_facturas: number;
}

export interface PicosDemandaProps {
  ciudades: Ciudad[];
}
export interface Ciudad {
  nombre: string;
  codigo: number;
}

export interface PicoDemanda {
  fecha: string;
  cod_art: string;
  nombre_art: string;
  total_facturas: number;
  media: string;
  desv_estandar: number;
  umbral: number;
}
