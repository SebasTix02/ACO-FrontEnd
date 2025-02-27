import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Order, ProductTable } from '../../interfaces/interfaces';
import { Tag } from 'antd';
import TablaPersonalizada from '../../common/table/tablaPersonalizada';


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
        { id: "1", name: "Laptop", quantity: 1 },
        { id: "2", name: "Mouse", quantity: 2 },
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
        { id: "3", name: "Teclado", quantity: 1 },
        { id: "4", name: "Monitor", quantity: 1 },
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
        { id: "5", name: "USB Hub", quantity: 1 },
        { id: "1", name: "Cargador", quantity: 2 },
      ],
    },
  ];
  const columns = [
    {
      title: 'N° Orden',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      sorter: (a: Order, b: Order) => a.orderNumber.localeCompare(b.orderNumber),
    },
    {
      title: 'Cliente',
      dataIndex: 'customer',
      key: 'customer',
      render: (text: string) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (value: number) => `$${value.toFixed(2)}`,
      sorter: (a: Order, b: Order) => a.total - b.total,
    },
    {
      title: 'Fecha Entrega',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
      sorter: (a: Order, b: Order) =>
        new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime(),
    },
    {
      title: 'Productos',
      dataIndex: 'products',
      key: 'products',
      render: (products: ProductTable[]) => (
        <Tag color="green">{products.length} productos</Tag>
      ),
    },
  ];
  return (
    
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Ver Pedidos</h1>
      </div>
      <TablaPersonalizada<Order>
        dataSource={data}
        columns={columns}
        rowKey="orderNumber"
        searchFields={['orderNumber', 'customer', 'total']}
        handleAdd={() => console.log('Agregar nuevo pedido')}
      />
    </Layout>
  );
};