import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Button, Row } from 'antd';
import OrdersTable from '../../common/table/tabla_pedidos';
import "../../common/table/tabla_pedidos.css";
const Rutas = () => {
  const sampleOrders = [
    {
      key: '1',
      orderNumber: 'ORD-001',
      customer: 'Distribuidora Quito',
      lat: -0.1807,  // Coordenadas de Quito
      lon: -78.4678,
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
      customer: 'Supermercado Guayaquil',
      lat: -2.1709,  // Coordenadas de Guayaquil
      lon: -79.9223,
      products: [
        { id: '3', name: 'Arroz', quantity: 80 },
        { id: '4', name: 'Sal', quantity: 120 }
      ],
      total: 1800,
      deliveryDate: '2024-03-21'
    },
    {
      key: '3',
      orderNumber: 'ORD-003',
      customer: 'Tienda Cuenca',
      lat: -2.9005,  // Coordenadas de Cuenca
      lon: -79.0045,
      products: [
        { id: '5', name: 'Harina', quantity: 60 },
        { id: '6', name: 'Leche', quantity: 90 }
      ],
      total: 2100,
      deliveryDate: '2024-03-22'
    }
  ];

  const [orders] = useState(sampleOrders);

  return (
    <Layout>
      <div style={{ 
        padding: '20px',
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h1 style={{ margin: '0 0 20px 0' }}>Gestión de Rutas</h1>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <OrdersTable orders={sampleOrders} />
        </div>
      </div>
    </Layout>
  );
};

export default Rutas;