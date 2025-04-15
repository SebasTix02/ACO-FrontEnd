import React, { useState, useEffect } from 'react';
import { Row, Col, notification, Typography, Spin, Divider, Tag } from 'antd';
import Layout from "../../components/layout";
import { AppstoreOutlined, BarChartOutlined, DollarOutlined, PercentageOutlined, RiseOutlined, ShoppingCartOutlined, ShoppingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import DashboardCards from '../../components/home/DashboardCards';
import KPIsMensuales from '../../components/home/KPIsMensuales';
import DistribucionVentas from '../../components/home/DistribucionVentas';
import PatronesConsumo from '../../components/home/PatronesConsumo';
import PicosDemanda from '../../components/home/PicosDemanda';
import { listarArticulos } from '../../providers/options/articulos';
import { Articulo, Ciudad } from '../../interfaces/interfaces';
import { getEstadisticasGenerales } from '../../providers/options/dashboard';
import { ciudadesLista } from '../../constants';

const { Title } = Typography;

export const Home: React.FC = () => {
  const [dataDashboard, setDataDashboard] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  const [ciudades] = useState<Ciudad[]>(ciudadesLista);
  const [productos, setProductos] = useState<Articulo[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const result = await getEstadisticasGenerales();
      if (result.exito) {
        setDataDashboard(result.data.data);
        console.log(dataDashboard);
      } else {
        notification.error({
          message: 'Error de obtención de datos',
          description: result.error || 'Error desconocido'
        });
      }
      
      const cargarArticulos = async () => {
        const response = await listarArticulos();
        if(response.exito) {
          setProductos(response.articulos);
        }
      };
      await cargarArticulos();
      
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
      title: 'Ventas Totales',
      icon: <BarChartOutlined style={{ fontSize: 24 }} />,
      value: dataDashboard.ventas_totales || 0,
      format: (value: number) =>
        `$${value.toLocaleString('es-ES', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`,
        style: { background: '#fff' },
    },
    {
      title: 'Clientes Activos',
      icon: <UserOutlined style={{ fontSize: 24 }} />,
      value: dataDashboard.clientes_activos || 0,
      format: (value: number) => value.toLocaleString('es-ES'),
      style: { background: '#fff' },
    },
    {
      title: 'Productos Vendidos',
      icon: <ShoppingCartOutlined style={{ fontSize: 24 }} />,
      value: dataDashboard.productos_vendidos || 0,
      format: (value: number) => value.toLocaleString('es-ES'),
      style: { background: '#fff' },
    },
    {
      title: 'Unidades Vendidas Producto Estrella',
      icon: <AppstoreOutlined style={{ fontSize: 24 }} />,
      value: dataDashboard.unidades_vendidas || 0,
      format: (value: number) => value.toLocaleString('es-ES'),
      style: { background: '#fff' },
    },
    {
      title: 'Producto Estrella',
      icon: <RiseOutlined style={{ fontSize: 24 }} />,
      value: dataDashboard.producto_mas_vendido || 'N/A',
      
      style: { background: '#fff' },
    },
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