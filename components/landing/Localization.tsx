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
                <div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                        Notre localisation
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Notre Maison de Santé Pluriprofessionnelle est située au cœur de
                        l&apos;Oppidum, un regroupement de plusieurs communes qui se sont
                        unies pour offrir à leurs habitants un accès facilité aux soins de
                        santé de proximité. Nous desservons l&apos;ensemble des communes de
                        l&apos;Oppidum.
                    </p>
                </div>

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
                        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <MapPin className="size-4" aria-hidden />
                        Ouvrir dans Google Maps
                    </a>
                </div>
            </div>
        </Section>
    );
}
