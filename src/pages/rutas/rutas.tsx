import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Button } from 'antd';
import OrdersTable from '../../common/table/tabla_pedidos';
import './rutas.css';
import VisualizacionRutas from '../../components/optimizacion/rutasOptimizadas';

const Rutas = () => {
  const [showRoutesView, setShowRoutesView] = useState(false);
  const sampleOrders = [
    {
      key: '1',
      numeroPedido: 'ORD-001',
      cliente: 'Distribuidora Quito',
      lat: -0.1807,  // Coordenadas de Quito
      lon: -78.4678,
      productos: [
        { key: '1', nombre: 'FIDEO VICTORIA REGIN ENROSCADO 10K', quantity: 100, price:123, total:1000 },
        { key: '2', nombre: 'FIDEOS VICTORIA ESPECIAL 500G X 25 UND', quantity: 50, price:123, total:1000 }
      ],
      total: 2500,
      fechaPedido: '2024-03-20'
    },
    {
      key: '2',
      numeroPedido: 'ORD-002',
      cliente: 'Supermercado Guayaquil',
      lat: -2.1709,  // Coordenadas de Guayaquil
      lon: -79.9223,
      productos: [
        { key: '3', nombre: 'FIDEO VICTORIA REGIN ENROSCADO 10K', quantity: 80, price:123, total:1000 },
        { key: '4', nombre: 'FIDEOS VICTORIA ESPECIAL 500G X 25 UND', quantity: 120, price:123, total:1000 }
      ],
      total: 1800,
      fechaPedido: '2024-03-21'
    },
    {
      key: '3',
      numeroPedido: 'ORD-003',
      cliente: 'Tienda Cuenca',
      lat: -2.9005,  // Coordenadas de Cuenca
      lon: -79.0045,
      productos: [
        { key: '5', nombre: 'FIDEOS VICTORIA CABELLO ANGEL 10KL', quantity: 60, price:123, total:1000 },
        { key: '6', nombre: 'FIDEOS VICTORIA ESPECIAL 400GMS X 30 UND', quantity: 90, price:123, total:1000 }
      ],
      total: 2100,
      fechaPedido: '2024-03-22'
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
              <VisualizacionRutas orders={sampleOrders} />
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Rutas;