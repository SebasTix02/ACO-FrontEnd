import React, { useState, useEffect } from 'react';
import { Table, Button, Tag, Select, DatePicker, Space, Checkbox, message, Modal } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import type { RangePickerProps } from 'antd/es/date-picker';
import './tabla_pedidos.css';
import { DetallePedido, FiltroProvinciaFecha, Pedido, Producto, ProductSummary } from '../../interfaces/interfaces';
import { coordenadasProvincias } from '../../constants';
import { optimizarRuta } from '../../providers/options/openRoute';
import { crearRuta } from '../../providers/options/rutas';
import { actualizarPedido } from '../../providers/options/pedidos';

const { RangePicker } = DatePicker;

const getProvinceFromCoords = (lat: number, lon: number): string => {
    const province = coordenadasProvincias.find(p =>
        lat >= p.bounds.minLat && lat <= p.bounds.maxLat &&
        lon >= p.bounds.minLon && lon <= p.bounds.maxLon
    );
    return province?.name || 'Desconocida';
};
const ModalInicioRuta: React.FC<{ visible: boolean, onCancel: () => void, onConfirm: (ubicacion: any) => void }> = ({ visible, onCancel, onConfirm }) => {
    const [selectedUbicacion, setSelectedUbicacion] = useState(null);
    
    const ubicacionesInicio = [
      { nombre: 'Ambato', coordenadas: [-78.61234903335573, -1.2830400896671588] },
      { nombre: 'Cevallos', coordenadas: [-78.633441, -1.360463] }
    ];
  
    return (
      <Modal
        title="Seleccionar punto de inicio"
        open={visible}
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>Cancelar</Button>,
          <Button
            key="confirm"
            type="primary"
            onClick={() => onConfirm(selectedUbicacion)}
            disabled={!selectedUbicacion}
          >
            Confirmar
          </Button>
        ]}
      >
        <Select
          placeholder="Seleccione ubicación inicial"
          style={{ width: '100%' }}
          onChange={value => setSelectedUbicacion(JSON.parse(value))}
          options={ubicacionesInicio.map(ubicacion => ({
            value: JSON.stringify(ubicacion.coordenadas),
            label: ubicacion.nombre,
          }))}
        />
      </Modal>
    );
  };
const OrdersTable: React.FC<{ orders: Pedido[] }> = ({ orders }) => {
    const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
    const [productSummary, setProductSummary] = useState<{ [key: string]: number }>({});
    const [filters, setFilters] = useState<FiltroProvinciaFecha[]>([]);
    const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
    const [dateRange, setDateRange] = useState<string[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

  // Función para convertir minutos a formato HH:MM:SS
  const convertMinutesToTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = Math.floor(minutes % 60);
    const seconds = Math.floor((minutes * 60) % 60);
    return `${String(hours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
    // Procesar pedidos con datos calculados
    const processedOrders = orders
        .filter(order => !['CANCELADO', 'COMPLETADO'].includes(order.estado))
        .map(order => ({
            ...order,
            id_pedido: order.id_pedido,  // Asegurar que esta propiedad existe
            provincia: getProvinceFromCoords(order.lat, order.lon),
            total: (order.detalles || []).reduce(
                (sum: number, d: DetallePedido) => sum + (d.precio_unitario * d.cantidad),
                0
            )
        }));
        const handleConfirmRouteStart = async (startPoint: number[]) => {
            setModalVisible(false);
            
            try {
              // 1. Optimizar la ruta
              console.log(orders)
              const ubicaciones = orders
                .filter(order => selectedOrders.includes(order.id_pedido.toString()))
                .map(order => ({
                  tracking_id: order.id_pedido,
                  cluster: 0,
                  lat: order.lat,
                  lng: order.lon
                }));
        
              const optimizacionData = {
                coordenadasInicio: startPoint,
                ubicaciones
              };
              console.log(optimizacionData)
              const resultadoOptimizacion = await optimizarRuta(optimizacionData.coordenadasInicio, optimizacionData.ubicaciones);
              
              // 2. Crear la ruta
              const rutaData = {
                estado: "GENERADA",
                distancia_total: resultadoOptimizacion.rutaOptimizada.mejorDistancia,
                tiempo_estimado: convertMinutesToTime(resultadoOptimizacion.rutaOptimizada.mejorDuracion),
                geojson: resultadoOptimizacion.rutaOptimizada.datosRuta
              };
        
              const nuevaRuta = await crearRuta(rutaData);
              
              if (!nuevaRuta.exito) {
                throw new Error('Error al crear la ruta');
              }

              // 3. Actualizar los pedidos
              const updatePromises = orders
                .filter(order => selectedOrders.includes(order.id_pedido.toString()))
                .map(order => actualizarPedido(order.id_pedido, { id_ruta: nuevaRuta.ruta.id_ruta }));
        
              await Promise.all(updatePromises);
              
              message.success('Ruta generada y pedidos actualizados exitosamente!');
              
            } catch (error) {
              message.error('Error al generar la ruta: ' + (error as Error).message);
            }
          };
    const handleDateChange: RangePickerProps['onChange'] = (_, dateStrings) => {
        setDateRange(dateStrings);
    };

    const handleSearch = () => {
        return processedOrders.filter(order => {
            const provinceMatch = selectedProvinces.length === 0 ||
                selectedProvinces.includes(order.provincia);
            const dateMatch = dateRange.length !== 2 || (
                new Date(order.fecha_pedido) >= new Date(dateRange[0]) &&
                new Date(order.fecha_pedido) <= new Date(dateRange[1])
            );

            return provinceMatch && dateMatch;
        });
    };

    // Resto de funciones de filtrado
    const addFilter = () => {
        const newFilters: FiltroProvinciaFecha[] = [];

        if (selectedProvinces.length > 0) {
            newFilters.push({
                tipo: 'provincia',
                valor: selectedProvinces.join(', ')
            });
        }

        if (dateRange.length === 2) {
            newFilters.push({
                tipo: 'rangoFecha',
                valor: dateRange
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
            .filter(order => selectedOrders.includes(order.id_pedido.toString()))
            .flatMap(order => order.detalles || [])
            .reduce((acc: { [key: string]: number }, detalle) => {
                const nombre = detalle.nombre_articulo || 'Producto sin nombre';
                acc[nombre] = (acc[nombre] || 0) + detalle.cantidad;
                return acc;
            }, {});

        setProductSummary(newSummary);
    }, [selectedOrders, orders]);

    const rowSelection = {
        selectedRowKeys: selectedOrders,
        onChange: (selectedKeys: React.Key[]) => {
            setSelectedOrders(selectedKeys as string[]);
        },
        // Eliminar checkbox de la columna
        columnWidth: 0,
        renderCell: () => null
    };

    const handleGenerateRoute = async () => {
        if (selectedOrders.length === 0) {
          message.error('Seleccione al menos un pedido para generar la ruta');
          return;
        }
        setModalVisible(true);
      };
      

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
        {
            title: 'Seleccionar',
            dataIndex: 'id_pedido',
            render: (id: number) => (
                <Checkbox
                    checked={selectedOrders.includes(id.toString())}
                    onChange={(e) => setSelectedOrders(
                        e.target.checked
                            ? [...selectedOrders, id.toString()]
                            : selectedOrders.filter(orderId => orderId !== id.toString())
                    )}
                />
            )
        },
        {
            title: 'N° Orden',
            dataIndex: 'numero_pedido',
            key: 'numero_pedido',
            sorter: (a: Pedido, b: Pedido) =>
                a.numero_pedido.localeCompare(b.numero_pedido)
        },
        {
            title: 'Cliente',
            dataIndex: 'nombre_cliente',
            key: 'nombre_cliente',
            render: (text: string) => <Tag color="blue">{text}</Tag>
        },
        {
            title: 'Provincia',
            dataIndex: 'provincia',
            key: 'provincia',
            render: (provincia: string) => <Tag color="geekblue">{provincia}</Tag>
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (value: number) => `$${value?.toFixed(2) || '0.00'}`,
            sorter: (a: Pedido, b: Pedido) => (a.total || 0) - (b.total || 0)
        },
        {
            title: 'Fecha Pedido',
            dataIndex: 'fecha_pedido',
            key: 'fecha_pedido',
            render: (fecha: string) => {
                if (!fecha) return '-';
                const date = new Date(fecha);
                return new Intl.DateTimeFormat('es-EC', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                }).format(date);
            },
            sorter: (a: Pedido, b: Pedido) =>
                new Date(a.fecha_pedido).getTime() - new Date(b.fecha_pedido).getTime()
        }
    ];
    
    return (
    <div className="orders-table-container">
        <ModalInicioRuta
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirmRouteStart}
      />
        {/* Sección de Filtros */}
        <div className="filters-section">
            <div className="filters-row">
                <Select
                    mode="multiple"
                    placeholder="Filtrar por provincia"
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
                    placeholder={['Fecha inicial', 'Fecha final']}
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

            {/* Tags de Filtros Aplicados */}
            <div className="filter-tag-container">
                {filters.map((filter, index) => (
                    <Tag
                        key={index}
                        closable
                        onClose={() => removeFilter(index)}
                        className="filter-tag"
                    >
                        {filter.tipo === 'provincia'
                            ? `Provincia: ${filter.valor}`
                            : `Fecha: ${(filter.valor as string[]).join(' -> ')}`}
                    </Tag>
                ))}
            </div>
        </div>

        {/* Sección de Acciones y Resumen */}
        <div className="actions-summary-section">
            <Button
                type="primary"
                onClick={handleGenerateRoute}
                icon={<SearchOutlined />}
                className="generate-route-button"
            >
                Generar Ruta Óptima
            </Button>

            <div className="product-summary-container">
                {renderProductSummary()}
            </div>
        </div>

        {/* Tabla */}
        <Table
            className="responsive-table"
            dataSource={handleSearch()}
            columns={columns}
            rowSelection={rowSelection}
            pagination={{ pageSize: 6 }}
            scroll={{ x: 1200 }}
            rowKey="id_pedido"
            expandable={{
                expandedRowRender: (record: Pedido) => (
                    <div className="articles-section">
                        <h4>Artículos</h4>
                        {(record.detalles || []).map((detalle: DetallePedido) => (
                            <div key={detalle.id_detalle} className="article-item">
                                <Tag color="geekblue">{detalle.nombre_articulo}</Tag>
                                <div className="article-details">
                                    <span>Cantidad: {detalle.cantidad} </span>
                                    <span>Precio unitario: ${(detalle.precio_unitario || 0).toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }}
        />
    </div>
);
};

export default OrdersTable;