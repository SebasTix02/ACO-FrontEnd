import React, { useState, useEffect } from 'react';
import { Card, Spin, Select, DatePicker, Row, Col, Statistic, notification, List, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { getKPIsMensuales } from '../../providers/options/dashboard';
import dayjs from 'dayjs';

const { Option } = Select;
const { Text } = Typography;

interface KPIsMensualesProps {
  ciudades: Array<{ nombre: string; codigo: number }>;
}

interface TopProducto {
  codigo: string;
  nombre: string;
  unidades: number;
}

const KPIsMensuales: React.FC<KPIsMensualesProps> = ({ ciudades }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [kpisData, setKpisData] = useState<{
    periodo?: string;
    ventas_totales?: number;
    clientes_activos?: number;
    ticket_promedio?: number;
    top_productos?: TopProducto[];
  } | null>(null);
  
  const [año, setAño] = useState<number>(dayjs().year());
  const [mes, setMes] = useState<number>(dayjs().month() + 1);
  const [ciudad, setCiudad] = useState<number | undefined>(undefined);

  useEffect(() => {
    fetchData();
  }, [año, mes, ciudad]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getKPIsMensuales(año, mes, ciudad?.toString());
      if (response.data) {
        setKpisData({
          ...response.data,
          top_productos: response.data.top_productos || []
        });
      } else {
        notification.error({
          message: 'Error al cargar KPIs',
          description: response.error || 'Error desconocido'
        });
      }
    } catch (error) {
      console.error('Error en KPIsMensuales:', error);
      notification.error({
        message: 'Error de conexión',
        description: 'No se pudo obtener los datos'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMesChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setMes(date.month() + 1);
      setAño(date.year());
    }
  };

  return (
    <Card title="KPIs Mensuales" className="dashboard-card">
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={12}>
          <DatePicker.MonthPicker
            placeholder="Seleccionar mes"
            format="MM/YYYY"
            style={{ width: '100%' }}
            onChange={handleMesChange}
            defaultValue={dayjs()}
          />
        </Col>
        <Col span={12}>
          <Select
            placeholder="Seleccionar ciudad"
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setCiudad(value)}
            optionLabelProp="label"
          >
            {ciudades.map((ciudad) => (
              <Option key={ciudad.codigo} value={ciudad.codigo} label={ciudad.nombre}>
                {ciudad.nombre}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : kpisData ? (
        <Row gutter={[16, 24]}>
          {/* Sección de Estadísticas Principales - Versión mejorada */}
          <Col span={24}>
            <Row 
              gutter={[16, 16]} 
              justify="space-around"
              style={{ 
                flexWrap: 'wrap',
                rowGap: '24px',
                margin: '-8px 0' 
              }}
            >
              {[
                {
                  title: 'Ventas Totales',
                  value: kpisData.ventas_totales || 0,
                  prefix: '$',
                  precision: 2,
                },
                {
                  title: 'Clientes Activos',
                  value: kpisData.clientes_activos || 0,
                },
                {
                  title: 'Ticket Promedio',
                  value: kpisData.ticket_promedio || 0,
                  prefix: '$',
                  precision: 2,
                },
              ].map((stat, index) => (
                <Col 
                  key={index}
                  xs={24} 
                  sm={12} 
                  md={8}
                  style={{ 
                    minWidth: '200px', 
                    maxWidth: '100%',
                    flex: '1 1 auto',
                    padding: '0 8px'
                  }}
                >
                  <Card
                    size="small"
                    style={{ 
                      height: '100%',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.09)',
                      overflow: 'hidden'
                    }}
                  >
                    <Statistic
                      title={
                        <Text 
                          ellipsis={{ tooltip: stat.title }}
                          style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}
                        >
                          {stat.title}
                        </Text>
                      }
                      value={stat.value}
                      precision={stat.precision}
                      prefix={stat.prefix}
                      valueStyle={{
                        color: '#3f8600',
                        fontSize: 'clamp(14px, 2.5vw, 18px)',
                        lineHeight: '1.5',
                        wordBreak: 'break-word'
                      }}
                      style={{ 
                        textAlign: 'center',
                        padding: '8px 0'
                      }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Sección de Top Productos */}
          <Col span={24}>
            <Card title="Top 5 Productos más vendidos" size="small">
              <List
                dataSource={kpisData.top_productos || []}
                renderItem={(item, index) => (
                  <List.Item>
                    <Text strong>{index + 1}.</Text>
                    <Text style={{ marginLeft: 8 }}>{item.nombre}</Text>
                    <Text type="secondary" style={{ marginLeft: 'auto' }}>
                      {item.unidades} unidades
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      ) : (
        <div>No hay datos disponibles</div>
      )}
    </Card>
  );
};

export default KPIsMensuales;