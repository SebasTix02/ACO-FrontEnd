import React, { useState, useEffect } from 'react';
import { Table, Button, Select, Tag, Checkbox, Alert } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import message from 'antd/lib/message';

interface Product {
  id: string;
  name: string;
  quantity: number;
}

interface Order {
  key: string;
  orderNumber: string;
  customer: string;
  province: string;
  products: Product[];
  total: number;
  deliveryDate: string;
}

const OrdersTable: React.FC = () => {
  // Datos de ejemplo
  const [orders, setOrders] = useState<Order[]>([
    {
      key: '1',
      orderNumber: 'ORD-001',
      customer: 'Tienda Don Juan',
      province: 'Pichincha',
      products: [
        { id: '1', name: 'Arroz', quantity: 50 },
        { id: '2', name: 'Aceite', quantity: 30 }
      ],
      total: 1200,
      deliveryDate: '2024-03-15'
    },
    {
      key: '2',
      orderNumber: 'ORD-002',
      customer: 'Supermercado La Esquina',
      province: 'Guayas',
      products: [
        { id: '1', name: 'Arroz', quantity: 40 },
        { id: '3', name: 'Azúcar', quantity: 25 }
      ],
      total: 980,
      deliveryDate: '2024-03-16'
    }
  ]);

  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [productSummary, setProductSummary] = useState<{[key: string]: number}>({});
  const [filters, setFilters] = useState<any[]>([]);

  // Columnas de la tabla
  const columns = [
    {
      title: 'Selección',
      dataIndex: 'key',
      render: (key: string) => (
        <Checkbox 
          checked={selectedOrders.includes(key)}
          onChange={(e) => handleSelectOrder(key, e.target.checked)}
        />
      )
    },
    { title: 'N° Orden', dataIndex: 'orderNumber' },
    { title: 'Cliente', dataIndex: 'customer' },
    { title: 'Provincia', dataIndex: 'province' },
    { title: 'Total', dataIndex: 'total', render: (value: number) => `$${value.toFixed(2)}` },
    { title: 'Fecha Entrega', dataIndex: 'deliveryDate' }
  ];

  // Manejar selección de pedidos
  const handleSelectOrder = (orderKey: string, checked: boolean) => {
    setSelectedOrders(prev => 
      checked ? [...prev, orderKey] : prev.filter(key => key !== orderKey)
    );
  };

  // Calcular resumen de productos
  useEffect(() => {
    const summary: {[key: string]: number} = {};
    
    orders
      .filter(order => selectedOrders.includes(order.key))
      .forEach(order => {
        order.products.forEach(product => {
          summary[product.name] = (summary[product.name] || 0) + product.quantity;
        });
      });

    setProductSummary(summary);
  }, [selectedOrders, orders]);

  // Generar resumen de productos
  const renderProductSummary = () => (
    <div style={{ margin: '20px 0' }}>
      <h3>Resumen de Productos Seleccionados:</h3>
      {Object.entries(productSummary).map(([product, quantity]) => (
        <Tag color="blue" key={product}>
          {product}: {quantity} unidades
        </Tag>
      ))}
    </div>
  );

  // Generar ruta óptima
  const handleGenerateRoute = () => {
    if (selectedOrders.length === 0) {
      message.error('Seleccione al menos un pedido para generar la ruta');
      return;
    }
    
    message.success('Ruta óptima generada con éxito!', 3);
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button 
          type="primary" 
          onClick={handleGenerateRoute}
          icon={<SearchOutlined />}
        >
          Generar Ruta Óptima
        </Button>
      </div>

      {renderProductSummary()}

      <Table
        dataSource={orders}
        columns={columns}
        pagination={{ pageSize: 6 }}
        rowKey="key"
        rowSelection={{
          selectedRowKeys: selectedOrders,
          onChange: (selectedKeys) => setSelectedOrders(selectedKeys as string[]),
        }}
        expandable={{
          expandedRowRender: (record: Order) => (
            <div style={{ margin: 10 }}>
              <h4>Productos:</h4>
              {record.products.map(product => (
                <Tag key={product.id} color="geekblue">
                  {product.name} ({product.quantity} unidades)
                </Tag>
              ))}
            </div>
          )
        }}
      />
    </div>
  );
};

export default OrdersTable;