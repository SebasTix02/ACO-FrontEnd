
  
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
    fechaPedido: string;
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