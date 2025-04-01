import React, { useState, useEffect } from 'react';
import { Card, Spin, Select, DatePicker, Row, Col, notification } from 'antd';
import dayjs from 'dayjs'; // Importamos dayjs en lugar de moment
import { getPatronesConsumo } from '../../providers/options/dashboard';
import { Line } from '@ant-design/plots';
import { Articulo } from '../../interfaces/interfaces';

const { Option } = Select;
const { RangePicker } = DatePicker;

interface PatronesConsumoProps {
   productos: Articulo[];
}

const PatronesConsumo: React.FC<PatronesConsumoProps> = ({ productos }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [patronesData, setPatronesData] = useState<any[]>([]);
  const [periodo, setPeriodo] = useState<string>('mensual');
  const [fechaInicio, setFechaInicio] = useState<string>(dayjs().subtract(6, 'month').format('YYYY-MM-DD'));
  const [fechaFin, setFechaFin] = useState<string>(dayjs().format('YYYY-MM-DD'));
  const [producto, setProducto] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchData();
  }, [periodo, fechaInicio, fechaFin, producto]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getPatronesConsumo({
        periodo,
        fechaInicio,
        fechaFin,
        producto
      });
      
      if (response.exito) {
        // Transformar los datos para el gráfico de línea
        const lineData = response.data.map((item: any) => ({
          fecha: item.fecha,
          ventas: item.ventas
        }));
        setPatronesData(lineData);
      } else {
        notification.error({
          message: 'Error al cargar patrones',
          description: response.error
        });
      }
    } catch (error) {
      console.error('Error en PatronesConsumo:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRangeChange = (dates: any) => {
    if (dates && dates.length === 2) {
      setFechaInicio(dates[0].format('YYYY-MM-DD'));
      setFechaFin(dates[1].format('YYYY-MM-DD'));
    }
  };

  const config = {
    data: patronesData,
    xField: 'fecha',
    yField: 'ventas',
    point: {
      size: 5,
      shape: 'diamond',
    },
    tooltip: {
      formatter: (datum: any) => {
        return { name: 'Ventas', value: `$${datum.ventas.toFixed(2)}` };
      },
    },
  };

  return (
    <Card title="Patrones de Consumo" className="dashboard-card">
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Select
            placeholder="Seleccionar periodo"
            style={{ width: '100%' }}
            defaultValue={periodo}
            onChange={(value) => setPeriodo(value)}
          >
            <Option value="diario">Diario</Option>
            <Option value="semanal">Semanal</Option>
            <Option value="mensual">Mensual</Option>
          </Select>
        </Col>
        <Col span={8}>
          <RangePicker 
            style={{ width: '100%' }} 
            onChange={handleRangeChange}
            // Usamos dayjs en lugar de moment
            defaultValue={[dayjs(fechaInicio), dayjs(fechaFin)]}
          />
        </Col>
        <Col span={8}>
          <Select
            placeholder="Seleccionar producto"
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setProducto(value)}
          >
            {productos.map((producto) => (
              <Option key={producto.cod_art} value={producto}>{producto.nombre_art}</Option>
            ))}
          </Select>
        </Col>
      </Row>

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : patronesData.length > 0 ? (
        <Line {...config} />
      ) : (
        <div>No hay datos disponibles</div>
      )}
    </Card>
  );
};

export default PatronesConsumo;