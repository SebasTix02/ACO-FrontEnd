import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Button, Row } from 'antd';
import OrdersTable from '../../common/table/tabla_pedidos'; // Asegúrate de tener esta ruta correcta

const Rutas = () => {
  // Datos inventados para las órdenes
  const sampleOrders = [
    {
      key: '1',
      orderNumber: 'ORD-001',
      customer: 'Distribuidora La Favorita',
      province: 'Pichincha',
      products: [
        { id: '1', name: 'Arroz', quantity: 100 },
        { id: '2', name: 'Aceite', quantity: 50 }
      ],
      total: 2500,
      deliveryDate: '2024-03-20'
    },
    {
      key: '2',
      orderNumber: 'ORD-002',
      customer: 'Supermercado Santa María',
      province: 'Guayas',
      products: [
        { id: '3', name: 'Azúcar', quantity: 80 },
        { id: '4', name: 'Sal', quantity: 120 }
      ],
      total: 1800,
      deliveryDate: '2024-03-21'
    },
    {
      key: '3',
      orderNumber: 'ORD-003',
      customer: 'Tienda Don Carlos',
      province: 'Azuay',
      products: [
        { id: '5', name: 'Harina', quantity: 60 },
        { id: '6', name: 'Leche', quantity: 90 }
      ],
      total: 2100,
      deliveryDate: '2024-03-22'
    }
  ];

  const [orders, setOrders] = useState(sampleOrders);

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Gestión de Rutas de Entrega</h1>
        <Row gutter={[16, 16]}>
          <div style={{ width: '100%' }}>
            <OrdersTable />
          </div>
        </Row>
      </div>
    </Layout>
  );
};

export default Rutas;