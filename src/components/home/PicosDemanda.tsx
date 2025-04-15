import React, { useState, useEffect } from 'react';
import { Card, Spin, Select, Row, Col, notification } from 'antd';
import { getPicosDemanda } from '../../providers/options/dashboard';
import { Column } from '@ant-design/plots';
import { CiudadPicosDemanda, PicoDemanda, PicosDemandaProps } from '../../interfaces/interfaces';

const { Option } = Select;


const ciudades: CiudadPicosDemanda[] = [
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

const PicosDemanda: React.FC<PicosDemandaProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [picosData, setPicosData] = useState<PicoDemanda[]>([]);
  const [año, setAño] = useState<number>(new Date().getFullYear() - 1); 
  const [ciudad, setCiudad] = useState<number>(1);
  
  useEffect(() => {
    fetchData();
  }, [año, ciudad]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getPicosDemanda(año, ciudad.toString());
      if (response.exito) {
        // Mapear los datos directamente del array picos_demanda
        const rawData = response.data.picos_demanda;
        
        // Agrupar por mes y sumar total_facturas
        const monthlyData = rawData.reduce((acc: any[], curr: PicoDemanda) => {
          const fecha = new Date(curr.fecha);
          const mes = fecha.toLocaleString('default', { month: 'long' });
          
          const existing = acc.find(item => item.mes === mes);
          if (existing) {
            existing.total_facturas += curr.total_facturas;
          } else {
            acc.push({
              mes,
              total_facturas: curr.total_facturas,
              fecha: curr.fecha,
              productos: [curr.nombre_art]
            });
          }
          return acc;
        }, []);

        setPicosData(monthlyData);
      } else {
        notification.error({
          message: 'Error al cargar picos de demanda',
          description: response.error
        });
      }
    } catch (error) {
      console.error('Error en PicosDemanda:', error);
      notification.error({
        message: 'Error',
        description: 'No se pudo cargar la información'
      });
    } finally {
      setLoading(false);
    }
  };

  const config = {
    data: picosData,
    xField: 'mes',
    yField: 'total_facturas',
    label: {
      position: 'middle' as 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      mes: { alias: 'Mes' },
      total_facturas: { alias: 'Facturas' },
    },
    tooltip: {
      fields: ['fecha', 'productos'],
      formatter: (data: any) => {
        return {
          name: 'Detalles',
          value: `
            Fecha pico: ${new Date(data.fecha).toLocaleDateString()}
            Productos: ${data.productos.join(', ')}
          `
        };
      }
    }
  };

  const años = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  return (
    <Card title="Picos de Demanda" className="dashboard-card">
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={12}>
          <Select
            placeholder="Seleccionar año"
            style={{ width: '100%' }}
            value={año}
            onChange={(value) => setAño(value)}
          >
            {años.map((a) => (
              <Option key={a} value={a}>{a}</Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <Select
            placeholder="Seleccionar ciudad"
            style={{ width: '100%' }}
            value={ciudad}
            onChange={(value) => setCiudad(value)}
          >
            {ciudades.map((c) => (
              <Option key={c.codigo} value={c.codigo}>
                {c.nombre}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : picosData.length > 0 ? (
        <Column {...config} />
      ) : (
        <div>No hay datos disponibles</div>
      )}
    </Card>
  );
};

export default PicosDemanda;