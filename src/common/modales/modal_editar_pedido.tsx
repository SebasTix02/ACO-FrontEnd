import React, { useState, useEffect } from 'react';
import { Modal, Select, Input, Button, Table, Form, InputNumber, message } from 'antd';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { Articulo, Pedido } from '../../interfaces/interfaces';
import { listarClientes } from '../../providers/options/clientes';
import { listarArticulos } from '../../providers/options/articulos';
import { actualizarPedido } from '../../providers/options/pedidos';

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
  pedido: Pedido;
  onSave: (updatedOrder: Pedido) => void;
}

// Componente para editar la posición en el mapa
const MapEditor: React.FC<{
  initialPosition: LatLng;
  onPositionChange: (pos: LatLng) => void;
}> = ({ initialPosition, onPositionChange }) => {
  const map = useMap();
  const [provider] = useState(new OpenStreetMapProvider());

  useEffect(() => {
    map.flyTo(initialPosition, 15);
  }, [initialPosition]);
  useEffect(() => {
    if (!map) return;
    const searchControl = new (GeoSearchControl as any)({
      provider,
      position: 'topright',
      style: 'bar',
      showMarker: false,
      retainZoomLevel: false,
      animateZoom: true,
      autoClose: true,
      maxMarkers: 1,
      searchLabel: 'Buscar dirección en Ecuador',
      keepResult: true,
      updateMap: true,
    });
    map.addControl(searchControl);
    map.on('geosearch/showlocation', (e: any) => {
      const newPos = new L.LatLng(e.location.y, e.location.x);
      onPositionChange(newPos);
    });
    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);
  useMapEvents({
    click(e) {
      onPositionChange(e.latlng);
    },
  });

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={initialPosition} />
    </>
  );
};

const ModalEditarPedido: React.FC<PedidoEdicionModalProps> = ({ visible, onClose, pedido, onSave }) => {
  const [form] = Form.useForm();
  // Inicializamos "detalles" a partir de pedido.detalles
  const [detalles, setDetalles] = useState<any[]>((pedido.detalles as any[]) || []);
  const [articulosOptions, setArticulosOptions] = useState<Articulo[]>([]);
  // Convertimos latitud y longitud a números para crear el objeto LatLng
  const [posicion, setPosicion] = useState<LatLng>(
    new LatLng(parseFloat(pedido.latitud), parseFloat(pedido.longitud))
  );

  useEffect(() => {
    // Actualizamos el formulario y los estados locales cuando cambia el pedido
    const estadoInicial = pedido.estado || 'PENDIENTE';

    form.setFieldsValue({
      numero_pedido: pedido.numero_pedido,
      nombre_cliente: pedido.nombre_cliente,
      fecha_pedido: pedido.fecha_pedido,
      estado: estadoInicial,
    });
    async function fetchArticulos() {
      // Simulación de listarArticulos (nueva interfaz de artículos)
      const response = await listarArticulos();
      response.exito ? setArticulosOptions(response.articulos) : message.error('Error al listar articulos');
    }
    fetchArticulos();
    setDetalles(pedido.detalles as any[] || []); // si "detalles" viene vacío, se asigna un arreglo vacío
    setPosicion(new LatLng(parseFloat(pedido.latitud), parseFloat(pedido.longitud)));
  }, [pedido, form]);

  const handleActualizarDetalle = () => {
    const values = form.getFieldsValue(['articulo', 'cantidad', 'precio']);
    
    if (!values.articulo || !values.cantidad || values.cantidad < 1 || !values.precio || values.precio <= 0) {
        message.error('Complete todos los campos correctamente');
        return;
    }

    const articuloSeleccionado = articulosOptions.find(a => a.cod_art === values.articulo);
    
    const nuevoDetalle = {
        key: Date.now().toString(),
        cod_art: values.articulo,
        nombre_articulo: articuloSeleccionado?.nombre_art || 'Artículo desconocido',
        cantidad: values.cantidad,
        precio_unitario: values.precio,
        subtotal: values.cantidad * values.precio,
    };

    setDetalles([...detalles, nuevoDetalle]);
    form.resetFields(['articulo', 'cantidad', 'precio']);
};

  const validarFormulario = (): string[] => {
    const errores: string[] = [];
    if (!form.getFieldValue('nombre_cliente')) errores.push('Cliente es requerido');
    if (detalles.length === 0) errores.push('Debe tener al menos un producto');
    if (!posicion) errores.push('Ubicación es requerida');
    return errores;
  };

  const guardarCambios = async () => {
    const errores = validarFormulario();
    if (errores.length > 0) {
      errores.forEach(e => message.error(e));
      return;
    }

    // Construir payload compatible con el backend
    const datosActualizacion = {
      estado: form.getFieldValue('estado'),
      latitud: posicion.lat.toString(),
      longitud: posicion.lng.toString(),
      detalles_pedidos: detalles.map(d => ({
        cod_art: d.cod_art,
        cantidad: d.cantidad,
        precio_unitario: d.precio_unitario
      }))
    };

    try {
      const respuesta = await actualizarPedido(pedido.id_pedido, datosActualizacion);

      if (respuesta.exito) {
        message.success('Pedido actualizado correctamente');
        onSave(respuesta.pedido);  // Actualiza el estado en el componente padre
        onClose();
      } else {
        message.error(respuesta.error || 'Error al actualizar el pedido');
      }
    } catch (error) {
      message.error('Error al conectar con el servidor');
    }
  };

  const columnasDetalle = [
    { title: 'Producto', dataIndex: 'nombre_articulo' },
    { title: 'Cantidad', dataIndex: 'cantidad' },
    { title: 'Precio Unitario', dataIndex: 'precio_unitario', render: (value: number) => `$${value.toFixed(2)}` },
    { title: 'Subtotal', dataIndex: 'subtotal', render: (value: number) => `$${value.toFixed(2)}` },
    {
      title: 'Acciones',
      render: (_: any, record: any) => (
        <Button danger onClick={() => setDetalles(detalles.filter(d => d.key !== record.key))}>
          Eliminar
        </Button>
      )
    }
  ];

  return (
    <Modal
      title={`Editando Pedido: ${pedido.numero_pedido}`}
      open={visible}
      onCancel={onClose}
      width={900}
      footer={[
        <Button key="cancelar" danger onClick={onClose}>
          Cancelar
        </Button>,
        <Button key="guardar" type="primary" onClick={guardarCambios}>
          Guardar Cambios
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Form.Item label="Número de Orden" name="numero_pedido">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Cliente" name="nombre_cliente" rules={[{ required: true }]}>
            <Input disabled />
          </Form.Item>
          <Form.Item label="Estado" name="estado" rules={[{ required: true }]}>
            <Select
              placeholder="Seleccione un estado"
              optionFilterProp="children"
              allowClear
            >
              <Select.Option value="PENDIENTE">Pendiente</Select.Option>
              <Select.Option value="EN_RUTA">En ruta</Select.Option>
              <Select.Option value="COMPLETADO">Completado</Select.Option>
              <Select.Option value="CANCELADO">Cancelado</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div style={{ height: 300, margin: '20px 0', border: '1px solid #ddd', borderRadius: 4 }}>
          <MapContainer center={posicion} zoom={15} style={{ height: '100%', width: '100%' }}>
            <MapEditor initialPosition={posicion} onPositionChange={setPosicion} />
          </MapContainer>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 8, alignItems: 'end' }}>
          <Form.Item name="articulo" label="Producto" rules={[{ required: true }]}>
            <Select
              showSearch
              placeholder="Seleccione un producto"
              options={articulosOptions.map(a => ({
                value: a.cod_art,
                label: a.nombre_art,
              }))}
              filterOption={(input, option) =>
                ((option?.label ?? '') as string).toLowerCase().includes(input.toLowerCase())
              }
            />
          </Form.Item>
          <Form.Item name="cantidad" label="Cantidad" rules={[{ required: true }]}>
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="precio" label="Precio" rules={[{ required: true }]}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label=" ">
            <Button type="primary" onClick={handleActualizarDetalle}>
              Agregar
            </Button>
          </Form.Item>
        </div>
        <Table
          columns={columnasDetalle}
          dataSource={detalles}
          pagination={false}
          scroll={{ x: true }}
        />
      </Form>
    </Modal>
  );
};

export default ModalEditarPedido;
