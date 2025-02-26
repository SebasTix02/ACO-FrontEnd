import React, { useState } from 'react';
import { Button, Select, Modal, Tag } from 'antd';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './rutasOptimizadas.css';
import { useEffect, useRef } from 'react';
import { Map } from 'leaflet';
import { optimizedRoutes } from '../../constants';

const { Option } = Select;

interface Route {
    id: string;
    name: string;
    geojson: any; // Usar @types/geojson para tipado más preciso en producción
}

const VisualizacionRutas: React.FC<{ orders: any[] }> = ({ orders }) => {
    const [selectedRoute, setSelectedRoute] = useState<string>();
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [showCompleteModal, setShowCompleteModal] = useState(false);
    const [mapInstance, setMapInstance] = useState<Map | null>(null);
    const geoJsonRef = useRef<any>(null);
    useEffect(() => {
        if (mapInstance && selectedRoute) {
            const route = optimizedRoutes.find(r => r.id === selectedRoute);
            if (route) {
                // Centrar el mapa en la ruta seleccionada
                const coordinates = route.geojson.features[0].geometry.coordinates[0];
                mapInstance.flyTo([ -1.283089822, -78.61234654], 14);

                // Actualizar el GeoJSON
                if (geoJsonRef.current) {
                    geoJsonRef.current.clearLayers();
                    geoJsonRef.current.addData(route.geojson);
                }
            }
        }
    }, [selectedRoute]);


    const handleCompleteRoute = () => {
        // Lógica para marcar pedidos como completados
        Modal.success({
            title: 'Ruta Completada',
            content: `${orders.length} pedidos marcados como completados`,
        });
        setShowCompleteModal(false);
    };

    return (
        <div className="route-visualization-container">
            <div className="route-selector">
                <Select
                    showSearch
                    placeholder="Seleccionar ruta"
                    style={{ width: '100%' }}
                    dropdownStyle={{
                        maxHeight: '400px',
                        overflowY: 'auto'
                    }}
                    onChange={setSelectedRoute}
                >
                    {optimizedRoutes.map(route => (
                        <Option key={route.id} value={route.id}>
                            <div className="route-option">
                                <span>{route.name}</span>
                                <div className="route-meta">
                                    <Tag color="blue">12 pedidos</Tag>
                                    <Tag color="green">58 km</Tag>
                                </div>
                            </div>
                        </Option>
                    ))}
                </Select>
            </div>

            <div className="route-map-container">
                <MapContainer
                    center={[-1.283089822, -78.61234654]}
                    zoom={13}
                    ref={(map) => map && setMapInstance(map)}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
                    />

                    {selectedRoute && (
                        <GeoJSON
                            key={selectedRoute} // Forzar re-renderizado
                            data={optimizedRoutes.find(r => r.id === selectedRoute)!.geojson}
                            ref={geoJsonRef}
                            style={{ color: '#1890ff', weight: 4 }}
                        />
                    )}
                </MapContainer>
            </div>

            <div className="route-actions">
                <Button
                    danger
                    onClick={() => setShowCancelModal(true)}
                    size="large"
                >
                    Cancelar Ruta
                </Button>

                <Button
                    type="primary"
                    onClick={() => setShowCompleteModal(true)}
                    size="large"
                >
                    Ruta Completada
                </Button>
            </div>

            <Modal
                title="Confirmar Cancelación"
                visible={showCancelModal}
                onOk={() => setShowCancelModal(false)}
                onCancel={() => setShowCancelModal(false)}
            >
                <p>¿Está seguro que desea cancelar esta ruta?</p>
            </Modal>

            <Modal
                title="Confirmar Finalización"
                visible={showCompleteModal}
                onOk={handleCompleteRoute}
                onCancel={() => setShowCompleteModal(false)}
                okText="Confirmar"
                cancelText="Cancelar"
            >
                <p>¿Marcar {orders.length} pedidos como completados?</p>
            </Modal>
        </div>
    );
};

export default VisualizacionRutas;