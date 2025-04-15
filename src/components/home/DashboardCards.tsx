import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { DashboardCardsProps } from '../../interfaces/interfaces';



const DashboardCards: React.FC<DashboardCardsProps> = ({ cards }) => {
  return (
    <Row gutter={[16, 16]}>
      {cards.map((card, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <Card bordered={false} className="dashboard-stat-card" style={card.style}>
            <Statistic
              title={card.title}
              value={
                typeof card.value === 'number' && card.format
                  ? card.format(card.value)
                  : card.value
              }
              precision={0}
              valueStyle={{
                color:
                  card.crecimiento === undefined
                    ? '#1F4083'
                    : card.crecimiento > 0
                    ? '#3f8600'
                    : '#cf1322',
              }}
              prefix={card.icon}
              suffix={
                card.crecimiento !== undefined &&
                (card.crecimiento > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />)
              }
            />
            {card.extra && (
              <div className="statistic-footer">
                {card.extra}
              </div>
            )}
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
