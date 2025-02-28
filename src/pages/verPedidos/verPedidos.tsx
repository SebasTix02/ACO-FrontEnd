import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Order, ProductTable } from '../../interfaces/interfaces';
import { Tag } from 'antd';
import TablaPersonalizada from '../../common/table/tablaPersonalizada';
import TablaVerPedidos from '../../common/table/tablaVerPedidos';


export const VerPedidos = () => {
  const data: Order[] = [
    {
      key: "1",
      orderNumber: "ORD12345",
      customer: "Juan Pérez",
      lat: -34.6037,
      lon: -58.3816,
      total: 150.75,
      deliveryDate: "2023-10-05",
      products: [
        { id: "1", name: "FIDEO VICTORIA REGIN ENROSCADO 10K", quantity: 1 },
        { id: "2", name: "FIDEO VICTORIA CABELLO DE ANGEL 10K", quantity: 2 },
      ],
    },
    {
      key: "2",
      orderNumber: "ORD12346",
      customer: "Ana Gómez",
      lat: -34.6118,
      lon: -58.4173,
      total: 200.5,
      deliveryDate: "2023-10-06",
      products: [
        { id: "3", name: "FIDEOS VICTORIA ESPECIAL 500G X 25 UND", quantity: 1 },
        { id: "4", name: "FIDEOS VICTORIA REGIN (B)   10KL", quantity: 1 },
      ],
    },
    {
      key: "3",
      orderNumber: "ORD12347",
      customer: "Carlos Ruiz",
      lat: -34.5969,
      lon: -58.3728,
      total: 99.99,
      deliveryDate: "2023-10-07",
      products: [
        { id: "5", name: "LAZO GIGANTE VICTORIA 10KL", quantity: 1 },
        { id: "1", name: "FIDEOS VICTORIA LAZO GRANDE 1500GMS", quantity: 2 },
      ],
    },
  ];
  
  return (
    
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Ver Pedidos</h1>
      </div>
      <TablaVerPedidos
        data={data}
            onAdd={() => console.log('Agregar nuevo pedido')}
            onDelete={() => console.log('Eliminar nuevo pedido')}
            onEdit={() => console.log('Editar nuevo pedido')}
            searchFields={['orderNumber', 'customer']}
        />
    </Layout>
  );
};