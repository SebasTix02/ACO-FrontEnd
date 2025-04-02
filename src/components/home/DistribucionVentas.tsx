import React, { useState, useEffect } from 'react';
import { Card, Spin, Select, Row, Col, notification, Tooltip,Grid  } from 'antd';
import { getDistribucionVentas } from '../../providers/options/dashboard';
import { Pie } from '@ant-design/plots';
import { Articulo } from '../../interfaces/interfaces';

const { Option } = Select;
const { useBreakpoint } = Grid;

interface DistribucionVentasProps {
  productos: Articulo[];
}

interface CiudadData {
  ciudad: {
    codigo: string;
    nombre: string;
    provincia: any;
  };
  metricas: {
    ventas_totales: number;
    unidades_vendidas: number;
    transacciones: number;
  };
}

const DistribucionVentas: React.FC<DistribucionVentasProps> = ({ productos }) => {
  const screens = useBreakpoint();
  const [loading, setLoading] = useState<boolean>(true);
  const [distribucionData, setDistribucionData] = useState<CiudadData[]>([]);
  const [año, setAño] = useState<number>(new Date().getFullYear());
  const [producto, setProducto] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, [año, producto]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getDistribucionVentas(año, producto);
      
      if (response.exito) {
        setDistribucionData(response.data);
      } else {
        notification.error({
          message: 'Error al cargar distribución',
          description: response.error || 'Error desconocido'
        });
        setDistribucionData([]);
      }
    } catch (error) {
      console.error('Error en DistribucionVentas:', error);
      notification.error({
        message: 'Error de conexión',
        description: 'No se pudo obtener la información'
      });
    } finally {
      setLoading(false);
    }
  };

  const config = {
    appendPadding: 10,
    data: distribucionData.map(item => ({
      ciudad: item.ciudad.nombre,
      ventas: item.metricas.ventas_totales,
      unidades: item.metricas.unidades_vendidas,
      transacciones: item.metricas.transacciones
    })),
    angleField: 'ventas',
    colorField: 'ciudad',
    radius: 0.8,
    innerRadius: 0.4,
    label: {
      type: 'spider',
      content: '{name}',
      style: {
        fontSize: screens.xs ? 12 : 14,
        fontWeight: 600,
        fill: '#333',
        textAlign: 'center',
      },
      spider: {
        labelHeight: 28,
        style: {
          fill: '#fff',
          padding: [6, 8],
          borderRadius: 4,
          backgroundColor: 'rgba(0,0,0,0.65)',
        }
      }
    },
    tooltip: {
      fields: ['ciudad', 'ventas', 'unidades', 'transacciones'],
      formatter: (data: any) => {
        return {
          name: data.ciudad, // Dejamos vacío el name para que no muestre título
          value: `
            Ventas: $${(data.ventas || 0).toFixed(2)}
            Unidades: ${(data.unidades || 0).toLocaleString()}
            Transacciones: ${(data.transacciones || 0).toLocaleString()}
          `
        };
      }
    },
    interactions: [
      { type: 'element-selected' },
      { type: 'element-active' }
    ],
    statistic: {
      title: undefined,
      content: {
        content: '',
      }
    },
    responsive: true
  };

  const años = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  return (
    <Card 
      title="Distribución de Ventas por Ciudad" 
      className="dashboard-card"
      headStyle={{ 
        padding: screens.xs ? '0 8px' : '0 16px',
        borderBottom: screens.xs ? 'none' : undefined
      }}
    >
      {/* Filtros reorganizados */}
      <Row 
        gutter={[16, 16]} 
        style={{ 
          marginBottom: 16, 
          padding: screens.xs ? '0 8px' : '0 16px' 
        }}
      >
        <Col xs={24} md={12} xl={8}>
          <Select
            placeholder="Seleccionar año"
            style={{ width: '100%' }}
            value={año}
            onChange={setAño}
            options={años.map(a => ({ value: a, label: a }))}
            size={screens.xs ? 'middle' : 'large'}
          />
        </Col>
        
        <Col xs={24} md={12} xl={16}>
          <Select
            placeholder="Filtrar por producto"
            style={{ width: '100%' }}
            allowClear
            value={producto}
            onChange={setProducto}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              typeof option?.children === 'string' && 
              (option?.children as string)?.toLowerCase().includes(input.toLowerCase())
            }
            size={screens.xs ? 'middle' : 'large'}
            dropdownMatchSelectWidth={false}
            dropdownStyle={{ minWidth: 300 }}
          >
            {productos.map((articulo) => (
              <Option 
                key={articulo.cod_art} 
                value={articulo.cod_art}
              >
                <Tooltip 
                  title={`${articulo.nombre_art} (${articulo.cod_art})`}
                  placement="left"
                  overlayStyle={{ maxWidth: 400 }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    <span style={{
                      flex: 1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      marginRight: 8
                    }}>
                      {articulo.nombre_art}
                    </span>
                    <span style={{ 
                      color: '#666',
                      fontSize: '0.85em',
                      flexShrink: 0 
                    }}>
                      {articulo.cod_art}
                    </span>
                  </div>
                </Tooltip>
              </Option>
            ))}
          </Select>
        </Col>
      </Row>

      {/* Contenido del gráfico */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <Spin size="large" />
        </div>
      ) : distribucionData.length > 0 ? (
        <div style={{ 
          minHeight: 400,
          padding: screens.xs ? 8 : 16 
        }}>
          <Pie {...config} />
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: 24,
          fontSize: screens.xs ? 14 : 16
        }}>
          No hay datos disponibles
        </div>
      )}
    </Card>
  );
};

export default DistribucionVentas;
