import React, { useState, useEffect } from 'react';
import { Row, Col, notification, Typography, Spin, Divider } from 'antd';
import Layout from "../../components/layout";
import { getDashboardValues } from '../../providers/options/dashboard';
import { DollarOutlined, PercentageOutlined, ShoppingCartOutlined, ShoppingOutlined, TeamOutlined } from '@ant-design/icons';
import DashboardCards from '../../components/home/DashboardCards';
import KPIsMensuales from '../../components/home/KPIsMensuales';
import DistribucionVentas from '../../components/home/DistribucionVentas';
import PatronesConsumo from '../../components/home/PatronesConsumo';
import PicosDemanda from '../../components/home/PicosDemanda';

const { Title } = Typography;

interface Ciudad {
  nombre: string;
  codigo: number;
}

const ciudadesLista: Ciudad[] = [
  { nombre: 'AMBATO', codigo: 1 },
  { nombre: 'PILLARO', codigo: 10 },
  { nombre: 'PINGUILI', codigo: 11 },
  { nombre: 'PUJILI', codigo: 12 },
  { nombre: 'QUITO', codigo: 13 },
  { nombre: 'RIOBAMBA', codigo: 14 },
  { nombre: 'SALCEDO', codigo: 15 },
  { nombre: 'SAQUISILÍ', codigo: 16 },
  { nombre: 'CHILLANES', codigo: 2 },
  { nombre: 'COLTA', codigo: 3 },
  { nombre: 'DURÁN', codigo: 4 },
  { nombre: 'GUAMOTE', codigo: 5 },
  { nombre: 'GUARANDA', codigo: 6 },
  { nombre: 'LATACUNGA', codigo: 7 },
  { nombre: 'MOCHA', codigo: 8 },
  { nombre: 'PELILEO', codigo: 9 },
];

export const Home: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  const [ciudades] = useState<Ciudad[]>(ciudadesLista);
  const [productos, setProductos] = useState<string[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const result = await getDashboardValues();
      if (result.success) {
        setData(result.dashboard);
        setProductos(result.dashboard.productos || []);
      } else {
        notification.error({
          message: 'Error de obtención de datos',
          description: `No se pudo obtener los valores del Dashboard: ${result.error?.message ?? 'Error desconocido'}`
        });
      }
    } catch (error) {
      console.error(error);
      notification.error({
        message: 'Error de conexión',
        description: 'No se pudo conectar con el servidor'
      });
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      nombre: data.ventasTotales?.title || 'Ventas Totales',
      icono: <ShoppingOutlined />,
      total: data.ventasTotales?.values || 0,
      crecimiento: data.ventasTotales?.crecimiento
    },
    {
      nombre: data.clientesActivos?.title || 'Clientes Activos',
      icono: <TeamOutlined />,
      total: data.clientesActivos?.values || 0,
      crecimiento: data.clientesActivos?.crecimiento
    },
    {
      nombre: data.ticketPromedio?.title || 'Ticket Promedio',
      icono: <DollarOutlined />,
      total: data.ticketPromedio?.values || 0,
      crecimiento: data.ticketPromedio?.crecimiento
    },
    {
      nombre: data.productosVendidos?.title || 'Productos Vendidos',
      icono: <ShoppingCartOutlined />,
      total: data.productosVendidos?.values || 0,
      crecimiento: data.productosVendidos?.crecimiento
    },
    {
      nombre: data.tasaConversion?.title || 'Tasa de Conversión',
      icono: <PercentageOutlined />,
      total: data.tasaConversion?.values || 0,
      crecimiento: data.tasaConversion?.crecimiento
    }
  ];

  if (isLoading) {
    return (
      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <Spin size="large" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ padding: '16px 0' }}>
        <Title level={2}>Dashboard de Ventas</Title>
        <Divider />
        
        <DashboardCards cards={cards} />
        
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} lg={12}>
            <KPIsMensuales ciudades={ciudades} />
          </Col>
          <Col xs={24} lg={12}>
            <DistribucionVentas productos={productos} />
          </Col>
        </Row>
        
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col xs={24} lg={12}>
            <PatronesConsumo productos={productos} />
          </Col>
          <Col xs={24} lg={12}>
            <PicosDemanda ciudades={ciudades} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};