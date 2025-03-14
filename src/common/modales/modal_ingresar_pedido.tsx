import React, { useState, useEffect } from 'react';
import { Modal, Select, Input, Button, Table, Form, InputNumber, message } from 'antd';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import { LatLng } from 'leaflet';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import { listarClientes } from '../../providers/options/clientes';
import { listarArticulos } from '../../providers/options/articulos';
import { PedidoEntradaModalProps, Articulo, ArticuloPedido } from '../../interfaces/interfaces';
import { crearPedido } from '../../providers/options/pedidos';
import { crearUbicacion } from '../../providers/options/ubicaciones';


// Configuración de los íconos de Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Componente del mapa para seleccionar la ubicación
const MapComponent: React.FC<{ onPositionChange: (pos: LatLng) => void }> = ({ onPositionChange }) => {
  const map = useMap();
  const [provider] = useState(new OpenStreetMapProvider());

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

  return null;
};

const ModalIngresarPedido: React.FC<PedidoEntradaModalProps> = ({ esVisible, enCerrar }) => {
  const [form] = Form.useForm();
  // Estados para almacenar clientes y artículos (simulación de llamadas a la API)
  const [customers, setCustomers] = useState<any[]>([]);
  const [articulosOptions, setArticulosOptions] = useState<Articulo[]>([]);
  // Cliente seleccionado (se usan solo cod_cliente y nom_cliente)
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);
  const [productList, setProductList] = useState<ArticuloPedido[]>([]);
  const [position, setPosition] = useState<LatLng | null>(null);
  // Para Consumidor Final se ingresa manualmente el nombre
  const [customerName, setCustomerName] = useState('');
  // Nuevo campo para la dirección (dato de ubicación)
  const [direccion, setDireccion] = useState('');
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  useEffect(() => {
    async function fetchCustomers() {
      // Simulación de listarClientes (solo se usan cod_cliente y nom_cliente)
      const response = await listarClientes();
      response.exito ? setCustomers(response.clientes) : message.error('Error al listar clientes');
    }
    async function fetchArticulos() {
      // Simulación de listarArticulos (nueva interfaz de artículos)
      const response = await listarArticulos();
      response.exito ? setArticulosOptions(response.articulos) : message.error('Error al listar articulos');
    }
    fetchCustomers();
    fetchArticulos();
  }, []);

  useEffect(() => {
    const errors = getValidationErrors();
    setIsFormInvalid(errors.length > 0);
  }, [selectedCustomer, customerName, position, direccion, productList]);

  const resetForm = () => {
    form.resetFields();
    setSelectedCustomer(null);
    setProductList([]);
    setPosition(null);
    setCustomerName('');
    setDireccion('');
    setIsFormInvalid(true);
  };

  const handleClose = () => {
    resetForm();
    enCerrar();
  };

  const getValidationErrors = (): string[] => {
    const errors: string[] = [];
    if (!selectedCustomer) {
      errors.push('Debe seleccionar un cliente');
    }
    // Para Consumidor Final se requiere nombre manual
    if (selectedCustomer && selectedCustomer.cod_cliente === "0") {
      if (!customerName.trim()) {
        errors.push('Debe ingresar el nombre del cliente');
      }
    }
    if (!direccion.trim()) {
      errors.push('Debe ingresar la dirección');
    }
    if (!position) {
      errors.push('Debe seleccionar una ubicación en el mapa');
    }
    if (productList.length === 0) {
      errors.push('Debe agregar al menos un artículo');
    }
    return errors;
  };

  const columns = [
    {
      title: 'Artículo',
      dataIndex: 'nombre_art',
      key: 'nombre_art',
    },
    {
      title: 'Cantidad',
      dataIndex: 'cantidad',
      key: 'cantidad',
      width: 120,
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      width: 120,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      width: 120,
    },
    {
      title: 'Acciones',
      key: 'actions',
      width: 100,
      render: (_: any, record: ArticuloPedido) => (
        <Button type="link" danger onClick={() => handleDelete(record.key)}>
          Eliminar
        </Button>
      ),
    },
  ];

  const handleAddProduct = () => {
    const values = form.getFieldsValue();
    const selectedArticulo = articulosOptions.find(a => a.cod_art === values.articulo);
    if (selectedArticulo && values.cantidad && values.precio) {
      const newArticulo: ArticuloPedido = {
        key: Date.now().toString(),
        cod_art: selectedArticulo.cod_art,
        nombre_art: selectedArticulo.nombre_art,
        cod_subgrupo: selectedArticulo.cod_subgrupo,
        costo: selectedArticulo.costo,
        cantidad: values.cantidad,
        precio: values.precio,
        total: values.cantidad * values.precio,
      };
      setProductList([...productList, newArticulo]);
      form.resetFields(['articulo', 'cantidad', 'precio']);
    }
  };

  const handleDelete = (key: string) => {
    setProductList(productList.filter(p => p.key !== key));
  };

  const handleSave = async () => {
    const errors = getValidationErrors();
    if (errors.length > 0) {
      errors.forEach((error) => message.error(error));
      return;
    }
    const total = productList.reduce((sum, art) => sum + art.total, 0);
  
    // Preparar datos de ubicación
    const locationData = {
      cod_cliente: selectedCustomer ? selectedCustomer.cod_cliente : '',
      latitud: position?.lat,
      longitud: position?.lng,
      // Si no es Consumidor Final, se usa el nombre del cliente de la opción, de lo contrario, el ingresado manualmente
      nombre_contacto:
        selectedCustomer && selectedCustomer.cod_cliente !== '0'
          ? selectedCustomer.nom_cliente
          : customerName,
      direccion: direccion,
    };
  
    // Crear la ubicación mediante el servicio
    const ubicacionResponse = await crearUbicacion(locationData);
    if (!ubicacionResponse.exito) {
      message.error(ubicacionResponse.error);
      return;
    }
    message.info("Ubicación Creada correctamente")
    // Obtener el id_ubicacion retornado
    const id_ubicacion = ubicacionResponse.ubicacion.id_ubicacion;
  
    // Preparar datos del pedido usando el id_ubicacion obtenido
    const orderData = {
      cod_cliente: selectedCustomer ? selectedCustomer.cod_cliente : '',
      id_ubicacion: id_ubicacion, // Usamos el id_ubicacion retornado
      estado: 'PENDIENTE',
      total: total,
      detalles_pedidos: productList.map((art) => ({
        cod_art: art.cod_art,
        cantidad: art.cantidad,
        precio_unitario: art.precio,
      })),
    };
  
    // Crear el pedido mediante el servicio
    const pedidoResponse = await crearPedido(orderData);
    if (!pedidoResponse.exito) {
      message.error(pedidoResponse.error);
      return;
    }
  
    message.success('Pedido ingresado correctamente');
    resetForm();
    enCerrar();
  };

  const renderMap = () => {
    if (!selectedCustomer) return null;
    return (
      <div className="map-container" style={{ height: '300px', marginBottom: '16px' }}>
        <MapContainer
          center={position || [-1.8312, -78.1834]}
          zoom={7}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          <MapComponent onPositionChange={setPosition} />
          {position && <Marker position={position} />}
        </MapContainer>
      </div>
    );
  };

  return (
    <Modal
      title="Ingresar Pedidos"
      open={esVisible}
      onCancel={handleClose}
      width={800}
      footer={[
        <Button key="cancel" danger onClick={handleClose}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave} disabled={isFormInvalid}>
          Guardar
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        onValuesChange={(changedValues) => {
          if (changedValues.cliente !== undefined) {
            const cust = customers.find((c) => c.cod_cliente === changedValues.cliente);
            setSelectedCustomer(cust || null);
            if (cust && cust.cod_cliente !== "0") {
              setCustomerName(cust.nom_cliente);
            }
          }
          if (changedValues.customerName !== undefined) {
            setCustomerName(changedValues.customerName);
          }
          if (changedValues.direccion !== undefined) {
            setDireccion(changedValues.direccion);
          }
        }}
      >
        <div className="grid-container grid-2-cols">
          <Form.Item label="Cliente" name="cliente" required>
            <Select
              showSearch
              placeholder="Seleccione un cliente"
              options={customers.map(c => ({
                value: c.cod_cliente,
                label: c.nom_cliente,
              }))}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            />
          </Form.Item>
          {selectedCustomer && selectedCustomer.cod_cliente === "0" && (
            <Form.Item label="Nombre del cliente" name="customerName" required>
              <Input placeholder="Ingrese nombre del cliente" />
            </Form.Item>
          )}
        </div>
        <div className="grid-container grid-2-cols">
          <Form.Item label="Dirección" name="direccion" required>
            <Input placeholder="Ingrese la dirección" />
          </Form.Item>
        </div>
        <div className="grid-container grid-4-cols">
          <Form.Item label="Artículo" name="articulo" required>
            <Select
              showSearch
              placeholder="Seleccione un artículo"
              options={articulosOptions.map(a => ({
                value: a.cod_art,
                label: a.nombre_art,
              }))}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            />
          </Form.Item>
          <Form.Item label="Cantidad" name="cantidad" required>
            <InputNumber min={1} className="form-item-full-width" />
          </Form.Item>
          <Form.Item label="Precio" name="precio" required>
            <InputNumber min={0} className="form-item-full-width" />
          </Form.Item>
          <Form.Item label=" " className="button-container">
            <Button type="primary" onClick={handleAddProduct}>
              Ingresar Artículo
            </Button>
          </Form.Item>
        </div>
        <div className="table-container">
          <Table columns={columns} dataSource={productList} pagination={false} scroll={{ x: 800 }} />
        </div>
        {renderMap()}
      </Form>
    </Modal>
  );
};

export default ModalIngresarPedido;
