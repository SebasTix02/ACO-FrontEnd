import React, { useState, useEffect } from 'react';
import { Modal, Select, Input, Button, Table, Form, InputNumber, message } from 'antd';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import { LatLng, Icon } from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider, SearchControl } from 'leaflet-geosearch';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import {Product, PedidoEntradaModalProps} from '../../interfaces/interfaces';
// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const customers = [
  { value: 'CF', label: 'Consumidor Final' },
  { value: '1', label: 'Juan Pérez' },
  { value: '2', label: 'María García' },
  { value: '3', label: 'Carlos López' },
];

const products = [
  { value: '1', label: 'Producto 1', price: 100 },
  { value: '2', label: 'Producto 2', price: 200 },
  { value: '3', label: 'Producto 3', price: 300 },
];

const MapComponent: React.FC<{ 
    onPositionChange: (pos: LatLng) => void
  }> = ({ onPositionChange }) => {
    const map = useMap();
    const [provider] = useState(new OpenStreetMapProvider());
  
    useEffect(() => {
      if (!map) return;
  
      // Configurar el buscador
      
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
  
      // Manejar resultados de búsqueda
      map.on('geosearch/showlocation', (e: any) => {
        const newPos = new L.LatLng(e.location.y, e.location.x);
        onPositionChange(newPos);
      });
  
      return () => {
        map.removeControl(searchControl);
      };
    }, [map]);
  
    // Mantener el marcador por click
    useMapEvents({
      click(e) {
        onPositionChange(e.latlng);
      },
    });
  
    return null;
  };

const OrderEntryModal: React.FC<PedidoEntradaModalProps> = ({ isVisible, onClose }) => {
  const [form] = Form.useForm();
  const [selectedCustomer, setSelectedCustomer] = useState<string>();
  const [productList, setProductList] = useState<Product[]>([]);
  const [position, setPosition] = useState<LatLng | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  useEffect(() => {
    const errors = getValidationErrors();
    setIsFormInvalid(errors.length > 0);
  }, [selectedCustomer, customerName, position, productList]);

  const resetForm = () => {
    form.resetFields();
    setSelectedCustomer(undefined);
    setProductList([]);
    setPosition(null);
    setCustomerName('');
    setIsFormInvalid(true);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const getValidationErrors = (): string[] => {
    const errors: string[] = [];
    
    if (!selectedCustomer) {
      errors.push('Debe seleccionar un cliente');
    }
    
    if (selectedCustomer === 'CF') {
      if (!customerName.trim()) {
        errors.push('Debe ingresar el nombre del cliente');
      }
      if (!position) {
        errors.push('Debe seleccionar una ubicación en el mapa');
      }
    }
    
    if (productList.length === 0) {
      errors.push('Debe agregar al menos un producto');
    }

    return errors;
  };

  const columns = [
    {
      title: 'Producto',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Cantidad',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 120,
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
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
      render: (_: any, record: Product) => (
        <Button type="link" danger onClick={() => handleDelete(record.key)}>
          Eliminar
        </Button>
      ),
    },
  ];

  const handleAddProduct = () => {
    const values = form.getFieldsValue();
    const selectedProduct = products.find(p => p.value === values.product);
    if (selectedProduct && values.quantity && values.price) {
      const newProduct: Product = {
        key: Date.now().toString(),
        name: selectedProduct.label,
        quantity: values.quantity,
        price: values.price,
        total: values.quantity * values.price,
      };
      setProductList([...productList, newProduct]);
      form.resetFields(['product', 'quantity', 'price']);
    }
  };

  const handleDelete = (key: string) => {
    setProductList(productList.filter(p => p.key !== key));
  };

  const handleSave = () => {
    const errors = getValidationErrors();
    if (errors.length > 0) {
      errors.forEach(error => message.error(error));
      return;
    }

    const orderData = {
      customer: selectedCustomer,
      customerName: selectedCustomer === 'CF' ? customerName : '',
      products: productList,
      location: position,
    };
    
    console.log('Order data:', orderData);
    resetForm();
    onClose();
  };

  const renderMap = () => {
    if (selectedCustomer !== 'CF') return null;
  
    return (
      <div className="map-container">
        <MapContainer
          center={[-1.8312, -78.1834]}
          zoom={7}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
      open={isVisible}
      onCancel={handleClose}  // Usamos handleClose modificado
      width={800}
      footer={[
        <Button key="cancel" danger onClick={handleClose}>
          Cancelar
        </Button>,
        <Button 
          key="submit" 
          type="primary" 
          onClick={handleSave}
          disabled={isFormInvalid}
        >
          Guardar
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" onValuesChange={(changedValues) => {
        if (changedValues.customerName !== undefined) {
          setCustomerName(changedValues.customerName);
        }
      }}>
        <div className="grid-container grid-2-cols">
          <Form.Item label="Cliente" name="customer" required>
            <Select
              options={customers}
              onChange={value => setSelectedCustomer(value)}
              placeholder="Seleccione un cliente"
            />
          </Form.Item>

          {selectedCustomer === 'CF' && (
            <Form.Item label="Nombre del cliente" name="customerName" required>
              <Input placeholder="Ingrese nombre del cliente" />
            </Form.Item>
          )}
        </div>

        <div className="grid-container grid-4-cols">
          <Form.Item label="Producto" name="product" required>
            <Select options={products} placeholder="Seleccione un producto" />
          </Form.Item>

          <Form.Item label="Cantidad" name="quantity" required>
            <InputNumber min={1} className="form-item-full-width" />
          </Form.Item>

          <Form.Item label="Precio" name="price" required>
            <InputNumber min={0} className="form-item-full-width" />
          </Form.Item>

          <Form.Item label=" " className="button-container">
            <Button type="primary" onClick={handleAddProduct}>
              Ingresar Producto
            </Button>
          </Form.Item>
        </div>

        <div className="table-container">
          <Table
            columns={columns}
            dataSource={productList}
            pagination={false}
            scroll={{ x: 800 }}
          />
        </div>

        {renderMap()}
      </Form>
    </Modal>
  );
};

export default OrderEntryModal;