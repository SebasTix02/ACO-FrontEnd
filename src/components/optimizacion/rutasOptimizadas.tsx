import React, { useState, useEffect } from 'react';
import { Select, Tag, Spin, message, Button } from 'antd';
import { actualizarRuta, listarRutas } from '../../providers/options/rutas';
import { actualizarEstadoPedidos } from '../../providers/options/rutas'; 
import { RutaOptimizada } from '../../interfaces/interfaces';
import './rutasOptimizadas.css';
import MapaRutas from './mapaRutas';
import ModalRutas from '../../common/modal/modal_optimizar_rutas';

const { Option } = Select;

const VisualizacionRutas: React.FC<{ orders: any[]; key?: number }> = ({ orders, key }) => {
    const [rutas, setRutas] = useState<RutaOptimizada[]>([]);
    const [selectedRoute, setSelectedRoute] = useState<string>();
    const [loading, setLoading] = useState(true);
    const [mapInstance, setMapInstance] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [actionType, setActionType] = useState<'CANCELADA' | 'COMPLETADA'>('CANCELADA');

    useEffect(() => {
        const cargarRutas = async () => {
            try {
                const response = await listarRutas();
                if (response.exito) {
                    const rutasParseadas: RutaOptimizada[] = response.rutas.map((ruta: any) => ({
                        ...ruta,
                        geojson: JSON.parse(ruta.geojson)
                    }));
                    setRutas(rutasParseadas);
                    if (rutasParseadas.length > 0) {
                        setSelectedRoute(rutasParseadas[0].id_ruta);
                    }
                }
            } catch (error: any) {
                message.error('Error cargando rutas');
            } finally {
                setLoading(false);
            }
        };
        cargarRutas();
    }, [key]);
    // Efecto para centrar el mapa al cambiar la ruta seleccionada
    const selectedRuta = rutas.find(r => r.id_ruta === selectedRoute);
    useEffect(() => {
        if (mapInstance && selectedRuta?.geojson) {
            let startCoordinate = null;
            if (selectedRuta.geojson.type === 'FeatureCollection' && selectedRuta.geojson.features.length > 0) {
                const firstFeature = selectedRuta.geojson.features[0];
                if (firstFeature.geometry && firstFeature.geometry.type === 'LineString') {
                    startCoordinate = firstFeature.geometry.coordinates[0];
                }
            } else if (selectedRuta.geojson.type === 'Feature') {
                if (selectedRuta.geojson.geometry && selectedRuta.geojson.geometry.type === 'LineString') {
                    startCoordinate = selectedRuta.geojson.geometry.coordinates[0];
                }
            }
            if (startCoordinate) {
                // Las coordenadas de GeoJSON vienen en formato [lng, lat] y se invierten para Leaflet
                mapInstance.flyTo([startCoordinate[1], startCoordinate[0]], 15, { duration: 2 });
            }
        }
    }, [selectedRoute, mapInstance, selectedRuta]);

    // Función para actualizar el estado de la ruta y de los pedidos en caso de completarla
    const handleEstadoRuta = async (nuevoEstado: string) => {
        if (!selectedRoute) return;
        try {
            // Actualizamos el estado de la ruta
            const response = await actualizarRuta(selectedRoute, {estado: nuevoEstado});
            if (response.exito) {
                setRutas(rutas.map(r =>
                    r.id_ruta === selectedRoute ? { ...r, estado: nuevoEstado } : r
                ));
                message.success(`Ruta ${nuevoEstado.toLowerCase()} correctamente`);

                // Si la acción es COMPLETADA, actualizamos también el estado de los pedidos asociados
                if (nuevoEstado === 'COMPLETADA') {
                    const responsePedidos = await actualizarEstadoPedidos(selectedRoute, 'COMPLETADO');
                    if (responsePedidos.exito) {
                        message.success("Pedidos actualizados correctamente");
                    } else {
                        message.error(responsePedidos.error || "Error actualizando estado de pedidos");
                    }
                }
            }
        } catch (error) {
            message.error('Error actualizando estado de la ruta');
        }
    };

    const handleActionClick = (action: 'CANCELADA' | 'COMPLETADA') => {
        setActionType(action);
        setModalVisible(true);
    };

    if (loading) return <Spin size="large" className="loading-spinner" />;
    if (rutas.length === 0) return <div className="no-routes">No hay rutas generadas</div>;

    return (
        <div className="route-visualization-container">
            <div className="route-selector">
                <Select
                    showSearch
                    placeholder="Seleccionar ruta"
                    value={selectedRoute}
                    style={{ width: '100%' }}
                    onChange={setSelectedRoute}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option?.children && option.children[0].props.children.toLowerCase().includes(input.toLowerCase())
                    }
                >
                    {rutas.map(ruta => (
                        <Option key={ruta.id_ruta} value={ruta.id_ruta}>
                            <div className="route-option">
                                <span>Ruta {ruta.id_ruta}</span>
                                <div className="route-meta">
                                    <Tag color="green">{ruta.distancia_total} km</Tag>
                                    <Tag color="orange">{ruta.tiempo_estimado}</Tag>
                                </div>
                            </div>
                        </Option>
                    ))}
                </Select>
            </div>

            <div className="map-info-container">
                <MapaRutas 
                    selectedRuta={selectedRuta}
                    onMapInit={setMapInstance}
                />
                
                <div className="route-info-panel">
                    <h3>Detalles de la Ruta</h3>
                    <div className="info-item">
                        <Tag color="blue">Estado</Tag>
                        <span>{selectedRuta?.estado}</span>
                    </div>
                    <div className="info-item">
                        <Tag color="geekblue">Distancia</Tag>
                        <span>{selectedRuta?.distancia_total} km</span>
                    </div>
                    <div className="info-item">
                        <Tag color="green">Duración estimada</Tag>
                        <span>{selectedRuta?.tiempo_estimado}</span>
                    </div>
                </div>
            </div>

            <div className="route-actions">
                <Button danger onClick={() => handleActionClick('CANCELADA')} size="large">
                    Cancelar Ruta
                </Button>
                <Button type="primary" onClick={() => handleActionClick('COMPLETADA')} size="large">
                    Marcar como Completada
                </Button>
            </div>

            <ModalRutas
                visible={modalVisible}
                actionType={actionType}
                onConfirm={() => {
                    handleEstadoRuta(actionType);
                    setModalVisible(false);
                }}
                onCancel={() => setModalVisible(false)}
            />
        </div>
    );
};

export default VisualizacionRutas;
