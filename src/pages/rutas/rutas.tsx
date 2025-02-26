import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Button } from 'antd';
import OrdersTable from '../../common/table/tabla_pedidos';
import './rutas.css';

const Rutas = () => {
  const [showRoutesView, setShowRoutesView] = useState(false);
  const sampleOrders = [
    {
      key: '1',
      orderNumber: 'ORD-001',
      customer: 'Distribuidora Quito',
      lat: -0.1807,  // Coordenadas de Quito
      lon: -78.4678,
      products: [
        { id: '1', name: 'FIDEO VICTORIA REGIN ENROSCADO 10K', quantity: 100 },
        { id: '2', name: 'FIDEOS VICTORIA ESPECIAL 500G X 25 UND', quantity: 50 }
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
        { id: '3', name: 'FIDEO VICTORIA REGIN ENROSCADO 10K', quantity: 80 },
        { id: '4', name: 'FIDEOS VICTORIA ESPECIAL 500G X 25 UND', quantity: 120 }
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
        { id: '5', name: 'FIDEOS VICTORIA CABELLO ANGEL 10KL', quantity: 60 },
        { id: '6', name: 'FIDEOS VICTORIA ESPECIAL 400GMS X 30 UND', quantity: 90 }
      ],
      total: 2100,
      deliveryDate: '2024-03-22'
    }
  ];

  return (
    <Layout>
      <div className="routes-container">
        <header className="routes-header">
          <h1 className="routes-title">Gestión de Rutas</h1>
          <div className="routes-buttons">
            <Button
              type={!showRoutesView ? "primary" : "default"}
              onClick={() => setShowRoutesView(false)}
              className="route-button"
            >
              Generar Rutas
            </Button>
            <Button
              type={showRoutesView ? "primary" : "default"}
              onClick={() => setShowRoutesView(true)}
              className="route-button"
            >
              Visualizar Rutas
            </Button>
          </div>
        </header>

        <main className="routes-content">
          {!showRoutesView ? (
            <div className="table-container">
              <OrdersTable orders={sampleOrders} />
            </div>
          ) : (
            <div className="routes-visualization">
              <h1 className="visualization-title">Rutas Optimizadas - poner una tabla con buscador arriba para encontrar la optimizacion - un mapa abajo - un boton para decir que se culmino y que se eliminan esos pedidos</h1>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Rutas;