import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

interface CardData {
  nombre: string;
  icono: React.ReactNode;
  total: number;
  crecimiento?: number;
}

interface DashboardCardsProps {
  cards: CardData[];
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ cards }) => {
  return (
    <Row gutter={[16, 16]}>
      {cards.map((card, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <Card bordered={false} className="dashboard-stat-card">
            <Statistic
              title={card.nombre}
              value={card.total}
              precision={0}
              valueStyle={{ 
                color: card.crecimiento === undefined ? '#1890ff' : 
                       card.crecimiento > 0 ? '#3f8600' : '#cf1322' 
              }}
              prefix={card.icono}
              suffix={card.crecimiento !== undefined && (
                card.crecimiento > 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              )}
            />
            {card.crecimiento !== undefined && (
              <div className="statistic-footer">
                {`${Math.abs(card.crecimiento)}% vs periodo anterior`}
              </div>
            )}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;