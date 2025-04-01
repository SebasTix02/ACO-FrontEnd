import React, { useState, useEffect } from 'react';
import { Card, Spin, Select, Row, Col, notification } from 'antd';
import { getDistribucionVentas } from '../../providers/options/dashboard';
import { Pie } from '@ant-design/plots';

const { Option } = Select;

interface DistribucionVentasProps {
  productos: string[];
}

const DistribucionVentas: React.FC<DistribucionVentasProps> = ({ productos }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [distribucionData, setDistribucionData] = useState<any[]>([]);
  const [año, setAño] = useState<number>(new Date().getFullYear());
  const [producto, setProducto] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchData();
  }, [año, producto]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getDistribucionVentas(año, producto);
      console.log('Response DistribucionVentas:', response);
      if (response.exito) {
        // Transformar los datos para el gráfico de pastel
        const pieData = response.data.map((item: any) => ({
          type: item.zona,
          value: item.ventas
        }));
        setDistribucionData(pieData);
      } else {
        notification.error({
          message: 'Error al cargar distribución',
          description: response.error
        });
      }
    } catch (error) {
      console.error('Error en DistribucionVentas:', error);
    } finally {
      setLoading(false);
    }
  };

  const config = {
    appendPadding: 10,
    data: distribucionData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };

  const años = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  return (
    <Card title="Distribución de Ventas por Zona" className="dashboard-card">
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={12}>
          <Select
            placeholder="Seleccionar año"
            style={{ width: '100%' }}
            defaultValue={año}
            onChange={(value) => setAño(value)}
          >
            {años.map((año) => (
              <Option key={año} value={año}>{año}</Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <Select
            placeholder="Seleccionar producto"
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setProducto(value)}
          >
            {productos.map((producto) => (
              <Option key={producto} value={producto}>{producto}</Option>
            ))}
          </Select>
        </Col>
      </Row>

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : distribucionData.length > 0 ? (
        <Pie {...config} />
      ) : (
        <div>No hay datos disponibles</div>
      )}
    </Card>
  );
};

export default DistribucionVentas;