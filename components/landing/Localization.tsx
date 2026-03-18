import { Navigation, MapPin } from 'lucide-react';
import { Section } from '../ui/Section';
import { AddressCard } from '../AddressCard';
import { LocalizationMap } from '../LocalizationMap';
import {
    locationData,
    getAppleMapsUrl,
    getGoogleMapsUrl,
} from '@/app/data/location';

const coords: [number, number] = [
    locationData.coordinates.lat,
    locationData.coordinates.lng,
];

export function LandingLocalization() {
    const appleMapsUrl = getAppleMapsUrl(
        locationData.coordinates.lat,
        locationData.coordinates.lng
    );
    const googleMapsUrl = getGoogleMapsUrl(
        locationData.coordinates.lat,
        locationData.coordinates.lng
    );

    return (
        <Section id="localisation">
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-foreground">
                    Accès à la MSP à {locationData.address.city}
                </h2>

                <AddressCard location={locationData} />

                <LocalizationMap
                    coordinates={coords}
                    popupTitle={locationData.name}
                />

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href={appleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <Navigation className="size-4" aria-hidden />
                        Ouvrir dans Apple Plans
                    </a>
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-6 bg-green-500 text-white hover:bg-green-500/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <MapPin className="size-4" aria-hidden />
                        Ouvrir dans Google Maps
                    </a>
                </div>
            </div>
        </Section>
    );
}
