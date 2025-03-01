import React, { useState, useEffect } from 'react';
import { Modal, Select, Input, Button, Table, Form, InputNumber, message } from 'antd';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { Producto, Pedido } from '../../interfaces/interfaces';

// Configuración de iconos de Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface PedidoEdicionModalProps {
  visible: boolean;
  onClose: () => void;
  order: Pedido;
  onSave: (updatedOrder: Pedido) => void;
}

const MapEditor: React.FC<{
  initialPosition: LatLng;
  onPositionChange: (pos: LatLng) => void
}> = ({ initialPosition, onPositionChange }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(initialPosition, 15);
  }, [initialPosition]);

  useMapEvents({
    click(e) {
      onPositionChange(e.latlng);
    },
  });

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={initialPosition} />
    </>
  );
};

const ModalEditarPedido: React.FC<PedidoEdicionModalProps> = ({ visible, onClose, order, onSave }) => {
  const [form] = Form.useForm();
  const [productos, setProductos] = useState<Producto[]>(order.productos);
  const [posicion, setPosicion] = useState<LatLng>(new LatLng(order.lat, order.lon));

  useEffect(() => {
    form.setFieldsValue({
      numeroPedido: order.numeroPedido,
      cliente: order.cliente,
      fechaPedido: order.fechaPedido,
    });
    setProductos(order.productos);
    setPosicion(new LatLng(order.lat, order.lon));
  }, [order]);

  const handleActualizarProducto = () => {
    const values = form.getFieldsValue(['producto', 'cantidad', 'precio']);
    const nuevoProducto: Producto = {
      key: Date.now().toString(),
      nombre: values.producto,
      cantidad: values.cantidad,
      precio: values.precio,
      total: values.cantidad * values.precio,
    };
    setProductos([...productos, nuevoProducto]);
    form.resetFields(['producto', 'cantidad', 'precio']);
  };

  const validarFormulario = () => {
    const errores: string[] = [];
    if (!form.getFieldValue('cliente')) errores.push('Cliente es requerido');
    if (productos.length === 0) errores.push('Debe tener al menos un producto');
    if (!posicion) errores.push('Ubicación es requerida');
    return errores;
  };

  const guardarCambios = () => {
    const errores = validarFormulario();
    if (errores.length > 0) {
      errores.forEach(e => message.error(e));
      return;
    }

    const ordenActualizada: Pedido = {
      ...order,
      ...form.getFieldsValue(),
      lat: posicion.lat,
      lon: posicion.lng,
      productos: productos,
      total: productos.reduce((total, p) => total + (p.precio * p.cantidad), 0)
    };

    onSave(ordenActualizada);
    onClose();
  };

  return (
    <Modal
      title={`Editando Pedido: ${order.numeroPedido}`}
      open={visible}
      onCancel={onClose}
      width={900}
      footer={[
        <Button key="cancelar" danger onClick={onClose}>
          Cancelar
        </Button>,
        <Button
          key="guardar"
          type="primary"
          onClick={guardarCambios}
        >
          Guardar Cambios
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Form.Item label="Número de Orden" name="numeroPedido">
            <Input disabled />
          </Form.Item>

          <Form.Item label="Cliente" name="cliente" rules={[{ required: true }]}>
            <Select
              options={[
                { value: 'CF', label: 'Consumidor Final' },
                { value: '1', label: 'Juan Pérez' },
                { value: '2', label: 'María García' },
                { value: '3', label: 'Carlos López' },
              ]}
            />
          </Form.Item>
        </div>

        <div style={{ height: 300, margin: '20px 0', border: '1px solid #ddd', borderRadius: 4 }}>
          <MapContainer
            center={posicion}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
          >
            <MapEditor
              initialPosition={posicion}
              onPositionChange={setPosicion}
            />
          </MapContainer>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <Form.Item name="producto" label="Producto" rules={[{ required: true }]}>
            <Select
              options={[
                { value: 'Producto 1', label: 'Producto 1' },
                { value: 'Producto 2', label: 'Producto 2' },
                { value: 'Producto 3', label: 'Producto 3' },
              ]}
            />
          </Form.Item>

          <Form.Item name="cantidad" label="Cantidad" rules={[{ required: true }]}>
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="precio" label="Precio" rules={[{ required: true }]}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" onClick={handleActualizarProducto}>
              Agregar
            </Button>
          </Form.Item>
        </div>
        <Table
          columns={[
            { title: 'Producto', dataIndex: 'nombre' },
            { title: 'Cantidad', dataIndex: 'cantidad' },
            { title: 'Precio Unitario', dataIndex: 'precio' },
            { title: 'Total', dataIndex: 'total' },
            {
              title: 'Acciones',
              render: (_, record) => (
                <Button
                  danger
                  onClick={() => setProductos(productos.filter(p => p.key !== record.key))}
                >
                  Eliminar
                </Button>
              )
            }
          ]}
          dataSource={productos}
          pagination={false}
          scroll={{ x: true }}
        />
      </Form>
    </Modal>
  );
};

export default ModalEditarPedido;