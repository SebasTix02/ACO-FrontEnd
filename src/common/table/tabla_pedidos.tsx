import React, { useState, useEffect } from 'react';
import {Table,Button,Tag,Select,DatePicker,Space,Checkbox,message} from 'antd';
import {SearchOutlined,CloseOutlined} from '@ant-design/icons';
import type { RangePickerProps } from 'antd/es/date-picker';
import './tabla_pedidos.css';
import { Filter, Pedido } from '../../interfaces/interfaces';
import { coordenadasProvincias } from '../../constants';

const { RangePicker } = DatePicker;

const getProvinceFromCoords = (lat: number, lon: number): string => {
    const province = coordenadasProvincias.find(p =>
        lat >= p.bounds.minLat && lat <= p.bounds.maxLat &&
        lon >= p.bounds.minLon && lon <= p.bounds.maxLon
    );
    return province?.name || 'Desconocida';
};

const OrdersTable: React.FC<{ orders: any[] }> = ({ orders }) => {
    const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
    const [productSummary, setProductSummary] = useState<{ [key: string]: number }>({});
    const [filters, setFilters] = useState<Filter[]>([]);
    const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
    const [dateRange, setDateRange] = useState<string[]>([]);

    const handleDateChange: RangePickerProps['onChange'] = (_, dateStrings) => {
        setDateRange(dateStrings);
    };

    const handleSearch = () => {
        return orders.filter(order => {
            const provinceMatch = selectedProvinces.length === 0 ||
                selectedProvinces.includes(getProvinceFromCoords(order.lat, order.lon));

            const dateMatch = dateRange.length !== 2 || (
                order.fechaPedido >= dateRange[0] &&
                order.fechaPedido <= dateRange[1]
            );

            return provinceMatch && dateMatch;
        });
    };

    const addFilter = () => {
        const newFilters: Filter[] = [];

        if (selectedProvinces.length > 0) {
            newFilters.push({
                type: 'province',
                value: selectedProvinces.join(', ')
            });
        }

        if (dateRange.length === 2) {
            newFilters.push({
                type: 'dateRange',
                value: dateRange
            });
        }

        setFilters(prev => [...prev, ...newFilters]);
    };

    const removeFilter = (index: number) => {
        setFilters(prev => prev.filter((_, i) => i !== index));
    };

    const clearFilters = () => {
        setSelectedProvinces([]);
        setDateRange([]);
        setFilters([]);
    };

    useEffect(() => {
        const newSummary = orders
          .filter(order => selectedOrders.includes(order.key))
          .flatMap(order => order.productos)
          .reduce((acc: {[key: string]: number}, product) => {
            acc[product.nombre] = (acc[product.nombre] || 0) + product.cantidad;
            return acc;
          }, {});
      
        setProductSummary(newSummary);
      }, [selectedOrders, orders]);
    const handleSelectOrder = (orderKey: string, checked: boolean) => {
        console.log(checked)
        setSelectedOrders(prev =>
            checked ? [...prev, orderKey] : prev.filter(key => key !== orderKey)
        );
    };
    const rowSelection = {
        selectedRowKeys: selectedOrders,
        onChange: (selectedKeys: React.Key[]) => {
          setSelectedOrders(selectedKeys as string[]);
        }
      };
    const handleGenerateRoute = () => {
        if (selectedOrders.length === 0) {
            message.error('Seleccione al menos un pedido para generar la ruta');
            return;
        }

        message.success('Ruta óptima generada con éxito!', 3);
    };
    // Generar resumen de productos
    const renderProductSummary = () => (
        <div style={{ margin: '20px 0' }}>
          <h3>Resumen de Productos Seleccionados:</h3>
          {Object.entries(productSummary).length > 0 ? (
            Object.entries(productSummary).map(([product, cantidad]) => (
              <Tag color="blue" key={product}>
                {product}: {cantidad} unidades
              </Tag>
            ))
          ) : (
            <Tag color="gray">No hay productos seleccionados</Tag>
          )}
        </div>
      );
      const columns = [
        { title: 'N° Orden', dataIndex: 'numeroPedido' },
        { title: 'Cliente', dataIndex: 'cliente' },
        { 
          title: 'Provincia', 
          key: 'province',
          render: (_: any, record: Pedido) => (
            <Tag color="geekblue">
              {getProvinceFromCoords(record.lat, record.lon)}
            </Tag>
          )
        },
        { title: 'Total', dataIndex: 'total', render: (value: number) => `$${value.toFixed(2)}` },
        { title: 'Fecha Pedido', dataIndex: 'fechaPedido' }
      ];
    return (
        <div className="orders-table-container">
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
            <div className="filter-controls">
                <Select
                    mode="multiple"
                    placeholder="Provincias"
                    className="province-select"
                    value={selectedProvinces}
                    onChange={setSelectedProvinces}
                    options={coordenadasProvincias.map(p => ({
                        value: p.name,
                        label: p.name
                    }))}
                />

                <RangePicker
                    className="date-picker"
                    placeholder={['Inicio', 'Fin']}
                    format="YYYY-MM-DD"
                    onChange={handleDateChange}
                />

                <Space>
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        onClick={addFilter}
                        className="filter-button"
                    >
                        Filtrar
                    </Button>
                    <Button
                        onClick={clearFilters}
                        icon={<CloseOutlined />}
                        className="filter-button"
                    >
                        Limpiar
                    </Button>
                </Space>
            </div>

            <div className="filter-tag-container">
                {filters.map((filter, index) => (
                    <Tag
                        key={index}
                        closable
                        onClose={() => removeFilter(index)}
                        className="filter-tag"
                    >
                        {filter.type === 'province'
                            ? `Provincia: ${filter.value}`
                            : `Fecha: ${(filter.value as string[]).join(' -> ')}`}
                    </Tag>
                ))}
            </div>

            <Table
                className="responsive-table"
                dataSource={handleSearch()}
                columns={columns}
                rowSelection={rowSelection}
                pagination={{ pageSize: 6 }}
                scroll={{ x: 800}}
                expandable={{
                    expandedRowRender: (record: Pedido) => (
                        <div className="expanded-content">
                            <div>
                                <h4>Productos</h4>
                                {record.productos.map(product => (
                                    <div key={product.key}>
                                        <Tag color="geekblue">
                                            {product.nombre} ({product.cantidad}u)
                                        </Tag>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }}
            />
        </div>
    );
};

export default OrdersTable;