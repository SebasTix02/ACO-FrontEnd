import React, { useState } from 'react';
import { Table, Tag, Button, Space, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Pedido } from '../../interfaces/interfaces';
import "./tablaVerPedidos.css";
import ModalEditarPedido from '../modal/modal_editar_pedido';

const TablaVerPedidos: React.FC<{
    data: Pedido[];
    onAdd: () => void;
    onDelete: (record: Pedido) => void;
    onEdit: (record: Pedido) => void;
    searchFields?: string[];
}> = ({ data, onAdd, onDelete, onEdit, searchFields = ['numeroPedido', 'cliente'] }) => {
    const [selectedOrder, setSelectedOrder] = useState<Pedido | null>(null);
    const [searchText, setSearchText] = useState('');
    const [filterType, setFilterType] = useState<string>(searchFields[0]);
    const [filteredData, setFilteredData] = useState<Pedido[]>(data);
    const [modalVisible, setModalVisible] = useState(false);

    // Columnas principales
    const columnasPedido = [
        {
            title: 'N° Orden',
            dataIndex: 'numeroPedido',
            key: 'numeroPedido',
            sorter: (a: Pedido, b: Pedido) => a.numeroPedido.localeCompare(b.numeroPedido),
        },
        {
            title: 'Cliente',
            dataIndex: 'cliente',
            key: 'cliente',
            render: (text: string) => <Tag color="blue">{text}</Tag>,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (value: number) => `$${value.toFixed(2)}`,
            sorter: (a: Pedido, b: Pedido) => a.total - b.total,
        },
        {
            title: 'Fecha Pedido',
            dataIndex: 'fechaPedido',
            key: 'fechaPedido',
            sorter: (a: Pedido, b: Pedido) =>
                new Date(a.fechaPedido).getTime() - new Date(b.fechaPedido).getTime(),
        },
        {
            title: 'Productos',
            key: 'productos',
            render: (_: any, record: Pedido) => (
                <Space>
                    <Tag>{record.productos.length} productos</Tag>
                </Space>
            ),
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
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => onDelete(record)}
                    />
                </Space>
            ),
        },
    ];

    // Manejar búsqueda con filtros
    const handleSearch = (value: string) => {
        setSearchText(value);
        const filtered = data.filter(order => {
            const fieldValue = order[filterType]?.toString().toLowerCase();
            return fieldValue?.includes(value.toLowerCase());
        });
        setFilteredData(filtered);
    };

    return (
        <div className="table-container">
            {/* Header con búsqueda y botón añadir */}
            <div className="search-bar-container">
                <div className="search-bar">
                    <Select
                        defaultValue={searchFields[0]}
                        onChange={value => setFilterType(value)}
                        className="search-select"
                    >
                        {searchFields.map(field => (
                            <Select.Option key={field} value={field}>
                                {field.replace(/([A-Z])/g, ' $1').trim()}
                            </Select.Option>
                        ))}
                    </Select>

                    <Input.Search
                        placeholder={`Buscar por ${filterType}...`}
                        allowClear
                        onSearch={handleSearch}
                        onChange={e => handleSearch(e.target.value)}
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
                    rowKey="numeroPedido"
                    bordered
                    expandable={{
                        expandedRowRender: record => (
                            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', width: '85%' }}>
                                {record.productos.map(product => (
                                    <div key={product.key} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '1px solid #ddd', padding: '5px 0' }}>
                                        <span style={{ flex: 1, marginRight: 10 }}>{product.nombre}</span>
                                        <span style={{ flex: 1, fontWeight: "bold"}}>{product.quantity}</span>
                                    </div>
                                ))}
                            </div>
                        ),
                        rowExpandable: record => record.productos.length > 0,
                    }}
                    scroll={{ x: 'max-content' }}
                />
            </div>

            {/* Nuevo Modal de edición */}
            {selectedOrder && (
                <ModalEditarPedido
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    order={selectedOrder}
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