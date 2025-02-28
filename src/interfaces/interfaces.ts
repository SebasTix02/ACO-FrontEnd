
  
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
    products: Product[];
    total: number;
    deliveryDate: string;
}

export interface Product {
  key: string;
  name: string;
  quantity: number;
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