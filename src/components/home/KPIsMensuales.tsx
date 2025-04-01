import React, { useState, useEffect } from 'react';
import { Card, Spin, Select, DatePicker, Row, Col, Statistic, notification } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { getKPIsMensuales } from '../../providers/options/dashboard';

const { Option } = Select;

interface KPIsMensualesProps {
  ciudades: string[];
}

const KPIsMensuales: React.FC<KPIsMensualesProps> = ({ ciudades }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [kpisData, setKpisData] = useState<any>(null);
  const [año, setAño] = useState<number>(new Date().getFullYear());
  const [mes, setMes] = useState<number>(new Date().getMonth() + 1);
  const [ciudad, setCiudad] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchData();
  }, [año, mes, ciudad]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getKPIsMensuales(año, mes, ciudad);
      if (response.exito) {
        setKpisData(response.data);
      } else {
        notification.error({
          message: 'Error al cargar KPIs',
          description: response.error
        });
      }
    } catch (error) {
      console.error('Error en KPIsMensuales:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMesChange = (date: any) => {
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
            style={{ width: '100%' }} 
            onChange={handleMesChange} 
          />
        </Col>
        <Col span={12}>
          <Select
            placeholder="Seleccionar ciudad"
            style={{ width: '100%' }}
            allowClear
            onChange={(value) => setCiudad(value)}
          >
            {ciudades.map((ciudad) => (
              <Option key={ciudad} value={ciudad}>{ciudad}</Option>
            ))}
          </Select>
        </Col>
      </Row>

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : kpisData ? (
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Statistic
              title="Ventas Totales"
              value={kpisData.ventasTotales}
              precision={2}
              prefix="$"
              valueStyle={{ color: kpisData.crecimientoVentas > 0 ? '#3f8600' : '#cf1322' }}
              suffix={
                kpisData.crecimientoVentas > 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
            />
            <div className="statistic-footer">
              {`${Math.abs(kpisData.crecimientoVentas)}% vs mes anterior`}
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Statistic
              title="Clientes Activos"
              value={kpisData.clientesActivos}
              valueStyle={{ color: kpisData.crecimientoClientes > 0 ? '#3f8600' : '#cf1322' }}
              suffix={
                kpisData.crecimientoClientes > 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
            />
            <div className="statistic-footer">
              {`${Math.abs(kpisData.crecimientoClientes)}% vs mes anterior`}
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Statistic
              title="Ticket Promedio"
              value={kpisData.ticketPromedio}
              precision={2}
              prefix="$"
              valueStyle={{ color: kpisData.crecimientoTicket > 0 ? '#3f8600' : '#cf1322' }}
              suffix={
                kpisData.crecimientoTicket > 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
            />
            <div className="statistic-footer">
              {`${Math.abs(kpisData.crecimientoTicket)}% vs mes anterior`}
            </div>
          </Col>
        </Row>
      ) : (
        <div>No hay datos disponibles</div>
      )}
    </Card>
  );
};

export default KPIsMensuales;