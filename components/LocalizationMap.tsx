'use client';

import dynamic from 'next/dynamic';
import type { LatLngTuple } from 'leaflet';

interface DynamicMapProps {
    coordinates: LatLngTuple;
    popupTitle?: string;
    className?: string;
}

const MapComponent = dynamic<DynamicMapProps>(
    () =>
        import('@/components/MapComponent').then((mod) => ({
            default: mod.MapComponent,
        })),
    {
        ssr: false,
        loading: () => (
            <div
                className="h-[360px] bg-muted animate-pulse rounded-xl"
                aria-label="Chargement de la carte"
            />
        ),
    }
);

export interface LocalizationMapProps {
    coordinates: LatLngTuple;
    popupTitle?: string;
}

export function LocalizationMap({
    coordinates,
    popupTitle = 'MSP Oppidum',
}: LocalizationMapProps) {
    return (
        <MapComponent
            coordinates={coordinates}
            popupTitle={popupTitle}
            className="w-full"
        />
    );
}
