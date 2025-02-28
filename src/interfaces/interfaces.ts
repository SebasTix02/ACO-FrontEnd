export interface Product {
    key: string;
    name: string;
    quantity: number;
    price: number;
    total: number;
  }
  
export interface PedidoEntradaModalProps {
    esVisible: boolean;
    enCerrar: () => void;
  }

  
export interface Order {
  [key: string]: any; // Add this line

    orderNumber: string;
    customer: string;
    lat: number;
    lon: number;
    products: ProductTable[];
    total: number;
    deliveryDate: string;
}

export interface ProductTable {
    id: string;
    name: string;
    quantity: number;
}

export interface Filter {
    type: 'province' | 'dateRange';
    value: string | string[];
}

export interface Route {
  id: string;
  name: string;
  geojson: any; // Usar @types/geojson para tipado más preciso en producción
}