import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Space, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Pedido, PropsTablaVerPedidos } from '../../interfaces/interfaces';
import "./tablaVerPedidos.css";
import ModalEditarPedido from '../modales/modal_editar_pedido';


const TablaVerPedidos: React.FC<PropsTablaVerPedidos> = ({
  data,
  onAdd,
  onDelete,
  onEdit,
  searchFields = ['numero_pedido', 'nombre_cliente', 'estado'],
}) => {
  const [selectedOrder, setSelectedOrder] = useState<Pedido | null>(null);
  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState<string>(searchFields[0]);
  const [filteredData, setFilteredData] = useState<Pedido[]>(data);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // Manejar búsqueda con filtros
  const handleSearch = (value: string) => {
    setSearchText(value);
    const filtered = data.filter((order) => {
      const fieldValue = order[filterType]?.toString().toLowerCase();
      return fieldValue?.includes(value.toLowerCase());
    });
    setFilteredData(filtered);
  };

  // Columnas de la tabla
  const columnasPedido = [
    {
      title: 'N° Orden',
      dataIndex: 'numero_pedido',
      key: 'numero_pedido',
      sorter: (a: Pedido, b: Pedido) => a.numero_pedido.localeCompare(b.numero_pedido),
    },
    {
      title: 'Cliente',
      dataIndex: 'nombre_cliente',
      key: 'nombre_cliente',
      render: (text: string) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (value: string) => `$${parseFloat(value).toFixed(2)}`,
      sorter: (a: Pedido, b: Pedido) => a.total - b.total,
    },
    {
      title: 'Fecha Pedido',
      dataIndex: 'fecha_pedido',
      key: 'fecha_pedido',
      sorter: (a: Pedido, b: Pedido) =>
        new Date(a.fecha_pedido).getTime() - new Date(b.fecha_pedido).getTime(),
    },
    {
      title: 'Productos',
      key: 'productos',
      render: (_: any, record: Pedido) => (
        <Space>
          <Tag>{record.detalles?.length ?? 0} productos</Tag>

        </Space>
      ),
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      render: (estado: string) => {
        let color = '';
        switch (estado) { 
          case 'PENDIENTE':
            color = 'orange';
            break;
          case 'EN_RUTA':
            color = 'blue';
            break;
          case 'COMPLETADO':
            color = 'green';
            break;
          case 'CANCELADO':
            color = 'red';
            break;
          default:
            color = 'gray';
        }
        return <Tag color={color}>{estado.replace(/_/g, ' ')}</Tag>;
      },
      sorter: (a: Pedido, b: Pedido) => a.estado.localeCompare(b.estado),
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_: any, record: Pedido) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedOrder(record);
              setModalVisible(true);
            }}
          />
          <Button danger icon={<DeleteOutlined />} onClick={() => onDelete(record)} />
        </Space>
      ),
    },
  ];

  return (
    <div className="table-container">
      {/* Header con búsqueda y botón "Nuevo Pedido" */}
      <div className="search-bar-container">
        <div className="search-bar">
          <Select
            defaultValue={searchFields[0]}
            onChange={(value) => setFilterType(value)}
            className="search-select"
          >
            {searchFields.map((field) => (
              <Select.Option key={field} value={field}>
                {field.replace(/([A-Z])/g, ' $1').trim()}
              </Select.Option>
            ))}
          </Select>

          <Input.Search
            placeholder={`Buscar por ${filterType}...`}
            allowClear
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={onAdd}
            className="add-button"
          >
            Nuevo Pedido
          </Button>
        </div>
      </div>

      {/* Tabla principal */}
      <div className="table-scroll">
        <Table
          columns={columnasPedido}
          dataSource={filteredData}
          rowKey="id_pedido"
          bordered
          expandable={{
            expandedRowRender: (record) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  padding: '10px',
                  width: '85%',
                }}
              >
                {record.detalles.map((detalle: any) => (
                  <div
                    key={detalle.id_detalle}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      borderBottom: '1px solid #ddd',
                      padding: '5px 0',
                    }}
                  >
                    <span style={{ flex: 1, marginRight: 10 }}>
                      {detalle.nombre_articulo}
                    </span>
                    <span style={{ flex: 1, fontWeight: 'bold' }}>
                      Cant: {detalle.cantidad}
                    </span>
                    <span style={{ flex: 1 }}>
                      Precio: ${parseFloat(detalle.precio_unitario).toFixed(2)}
                    </span>
                    <span style={{ flex: 1 }}>
                      Subtotal: ${parseFloat(detalle.subtotal.toString()).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            ),
            rowExpandable: (record) => record.detalles && record.detalles.length > 0,
          }}
          scroll={{ x: 'max-content' }}
        />
      </div>

      {/* Modal de edición */}
      {selectedOrder && (
        <ModalEditarPedido
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          pedido={selectedOrder}
          onSave={(updatedOrder) => {
            onEdit(updatedOrder);
            setModalVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default TablaVerPedidos;
