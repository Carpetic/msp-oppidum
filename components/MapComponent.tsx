'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { LatLngTuple } from 'leaflet';

// Les icônes Leaflet sont servies localement pour éviter une dépendance à un CDN.
const defaultIcon = L.icon({
    iconUrl: '/leaflet/marker-icon.png',
    iconRetinaUrl: '/leaflet/marker-icon-2x.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

export interface MapComponentProps {
    coordinates: LatLngTuple;
    popupTitle?: string;
    className?: string;
}

export function MapComponent({
    coordinates,
    popupTitle = 'MSP Oppidum',
    className = '',
}: MapComponentProps) {
    return (
        <div className={`rounded-xl ${className} h-[360px]`}>
            <MapContainer
                center={coordinates}
                zoom={15}
                className="h-full w-full"
                scrollWheelZoom={true}
                style={{ borderRadius: '1rem' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coordinates}>
                    <Popup>{popupTitle}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
