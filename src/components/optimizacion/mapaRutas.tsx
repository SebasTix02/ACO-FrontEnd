import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { FullscreenControl } from 'react-leaflet-fullscreen';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-fullscreen/styles.css';

const MapaRutas = ({ selectedRuta, onMapInit }: {
    selectedRuta?: any;
    onMapInit: (map: any) => void;
}) => {
    return (
        <MapContainer
            center={[-1.283089822, -78.61234654]}
            zoom={13}
            ref={(map) => map && onMapInit(map)}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            <FullscreenControl
                position="topright"
                title="Pantalla completa"
                titleCancel="Salir de pantalla completa"
                content="⛶"
                forceSeparateButton={true}
            />

            {selectedRuta?.geojson && (
                <GeoJSON
                    key={selectedRuta.id_ruta}
                    data={selectedRuta.geojson}
                    style={(feature) => ({
                        color: feature?.properties?.color || '#1890ff',
                        weight: 5,
                        opacity: 0.8
                    })}
                    pointToLayer={(feature, latlng) => {
                        if (feature.geometry.type === "Point") {
                            return L.circleMarker(latlng, {
                                radius: 5,
                                fillColor: feature.properties?.["marker-color"] || '#ff0000',
                                color: '#ffffff',
                                weight: 2,
                                opacity: 1,
                                fillOpacity: 0.8
                            }).bindPopup(feature.properties?.name || 'Sin nombre');
                        }
                        return L.marker(latlng);
                    }}
                />
            )}
        </MapContainer>
    );
};

export default MapaRutas;