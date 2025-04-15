import React, { useState, useEffect } from 'react';
import { Card, Spin, Select, DatePicker, Row, Col, notification, Typography, Grid } from 'antd';
import dayjs from 'dayjs';
import { getPatronesConsumo } from '../../providers/options/dashboard';
import { Line, LineConfig } from '@ant-design/plots';
import { PatronesConsumoProps, PeriodoData } from '../../interfaces/interfaces';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Text } = Typography;
const { useBreakpoint } = Grid;

const PatronesConsumo: React.FC<PatronesConsumoProps> = ({ productos }) => {
  const screens = useBreakpoint();
  const [loading, setLoading] = useState<boolean>(true);
  const [patronesData, setPatronesData] = useState<PeriodoData[]>([]);
  const [periodo, setPeriodo] = useState<string>('mensual');
  const [rangoFechas, setRangoFechas] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([
    dayjs().subtract(6, 'month'),
    dayjs()
  ]);
  const [productoSeleccionado, setProductoSeleccionado] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchData();
  }, [periodo, rangoFechas, productoSeleccionado]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getPatronesConsumo({
        periodo,
        fechaInicio: rangoFechas[0].format('YYYY-MM-DD'),
        fechaFin: rangoFechas[1].format('YYYY-MM-DD'),
        producto: productoSeleccionado
      });
      
      if (response.exito) {
        setPatronesData(response.data);
      } else {
        notification.error({
          message: 'Error al cargar patrones',
          description: response.error
        });
      }
    } catch (error) {
      console.error('Error en PatronesConsumo:', error);
      notification.error({
        message: 'Error de conexión',
        description: 'No se pudo obtener los datos'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRangeChange = (dates: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => {
    if (dates && dates[0] && dates[1]) {
      setRangoFechas([dates[0], dates[1]]);
    }
  };
  
  const config: LineConfig = {
    data: patronesData,
    xField: 'periodo',
    yField: 'total_ventas',
    seriesField: 'cod_art',
    autoFit: true,
    padding: 'auto',
    xAxis: {
      type: 'cat',
      label: {
        autoRotate: !screens.xs,
        rotate: screens.xs ? -45 : 0,
        offset: screens.xs ? 20 : 0,
        style: { fontSize: screens.xs ? 10 : 12 },
        formatter: (text: string) => {
          const [year, month] = text.split('-');
          return screens.xs && periodo === 'mensual' 
            ? `${month}\n${year}` 
            : `${month}/${year}`;
        }
      }
    },
    yAxis: {
      label: {
        style: { fontSize: screens.xs ? 10 : 12 },
        formatter: (value: string) => `$${Number(value || 0).toLocaleString('es-ES', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`
      }
    },
    tooltip: {
      showTitle: true,
      shared: false, // Esto desactiva el tooltip compartido
      fields: ['nombre_art', 'total_ventas', 'total_unidades', 'total_facturas'],
      formatter: (datum: any) => {
        const safeDatum = datum as PeriodoData;
        const ventas = Number(safeDatum?.total_ventas || 0);
        const unidades = Number(safeDatum?.total_unidades?.replace(/[^0-9.]/g, '') || 0);
        const transacciones = Number(safeDatum?.total_facturas || 0);
        return {
          name: safeDatum?.nombre_art || 'Producto no especificado',
          value: `
            Ventas: $${ventas.toLocaleString('es-ES', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
            Unidades: ${unidades.toLocaleString('es-ES')}
          `
        };
      },
      domStyles: {
        'g2-tooltip': { 
          minWidth: screens.xs ? '200px' : '300px',
          fontSize: screens.xs ? '12px' : '14px'
        },
        'g2-tooltip-title': {
          fontSize: screens.xs ? '14px' : '16px'
        }
      }
    },
    legend: {
      position: screens.xs ? 'bottom' : 'right-top',
      flipPage: screens.xs,
      itemName: {
        style: {
          fontSize: screens.xs ? 10 : 12,
          fill: '#666'
        }
      }
    },
    animation: !screens.xs,
    smooth: true,
    slider: screens.xs ? {} : undefined
  };
  return (
    <Card 
      title="Patrones de Consumo" 
      className="dashboard-card"
    >
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} md={8}>
          <Select
            placeholder="Frecuencia de análisis"
            style={{ width: '100%' }}
            value={periodo}
            onChange={setPeriodo}
          >
            <Option value="diario">Diario</Option>
            <Option value="mensual">Mensual</Option>
            <Option value="trimestral">Trimestral</Option>
          </Select>
        </Col>
        
        <Col xs={24} md={11}>
          <RangePicker
            style={{ width: '100%' }}
            value={rangoFechas}
            onChange={handleRangeChange}
            picker={periodo as any}
            disabledDate={(current) => current > dayjs().endOf('day')}
          />
        </Col>
       
      </Row>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <Spin size="large" />
        </div>
      ) : patronesData.length > 0 ? (
        <div style={{ 
          width: '100%', 
          minHeight: screens.xs ? '300px' : '500px',
          position: 'relative'
        }}>
          <Line {...config} />
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: 24 }}>
          No se encontraron datos para los filtros seleccionados
        </div>
      )}
    </Card>
  );
};

export default PatronesConsumo;