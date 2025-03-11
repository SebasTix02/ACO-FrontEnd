import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout';
import { Button } from 'antd';
import OrdersTable from '../../common/table/tabla_pedidos';
import './rutas.css';
import VisualizacionRutas from '../../components/optimizacion/rutasOptimizadas';
import { listarPedidos } from '../../providers/options/pedidos';
import { MappedDetalle, MappedOrder, Pedido } from '../../interfaces/interfaces';

const Rutas = () => {
  const [showRoutesView, setShowRoutesView] = useState(false);
  const [orders, setOrders] = useState<Pedido[]>([]);

  // Cargar pedidos desde la API
  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await listarPedidos();
        if (response.exito) {
          // Mapear directamente a la interfaz Pedido
          const pedidosFormateados = response.pedidos.map((pedido: any) => ({
            id_pedido: pedido.id_pedido,
            numero_pedido: pedido.numero_pedido,
            nombre_cliente: pedido.nombre_cliente,
            lat: parseFloat(pedido.latitud),
            lon: parseFloat(pedido.longitud),
            detalles: pedido.detalles.map((detalle: any) => ({
              id_detalle: detalle.id_detalle,
              cod_art: detalle.cod_art,
              nombre_articulo: detalle.nombre_articulo,
              cantidad: detalle.cantidad,
              precio_unitario: detalle.precio_unitario,
              subtotal: detalle.subtotal
            })),
            total: pedido.total,
            fecha_pedido: pedido.fecha_pedido,
            estado: pedido.estado
          }));
          setOrders(pedidosFormateados);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchPedidos();
  }, []);

  

  const mappedOrders: MappedOrder[] = orders.map((order: Pedido): MappedOrder => ({
    key: order.id_pedido.toString(),
    numeroPedido: order.numero_pedido,
    cliente: order.nombre_cliente,
    lat: order.lat,
    lon: order.lon,
    productos: order.detalles.map((detalle: Pedido['detalles'][0]): MappedDetalle => ({
      key: detalle.id_detalle.toString(),
      nombre: detalle.nombre_articulo,
      cantidad: detalle.cantidad,
      precio: detalle.precio_unitario,
      total: detalle.subtotal
    })),
    total: order.total,
    fechaPedido: order.fecha_pedido,
    estado: order.estado
  }));

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
              <OrdersTable orders={orders} />
            </div>
          ) : (
            <div className="routes-visualization">
              <VisualizacionRutas orders={mappedOrders} />
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Rutas;