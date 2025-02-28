
  
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
    productos: Product[];
    total: number;
    fechaPedido: string;
}

export interface Product {
  key: string;
  nombre: string;
  cantidad: number;
  price: number;
  total: number;
}
export interface Filter {
    type: 'province' | 'dateRange';
    value: string | string[];
}

export interface Route {
  id: string;
  name: string;
  geojson: any; 
}