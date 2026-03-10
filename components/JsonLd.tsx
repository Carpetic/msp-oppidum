import { locationData } from "@/app/data/location";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Données structurées JSON-LD pour le SEO local (LocalBusiness + MedicalOrganization).
 * Aide les moteurs de recherche à afficher la fiche établissement et les résultats locaux.
 */
function getLocalBusinessJsonLd() {
    const addressLine =
        [
            locationData.address.street,
            locationData.address.complement,
            `${locationData.address.postalCode} ${locationData.address.city}`,
            locationData.address.country,
        ]
            .filter(Boolean)
            .join(", ") || undefined;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalOrganization",
                "@id": `${SITE_URL}/#organization`,
                name: SITE_NAME,
                url: SITE_URL,
                logo: `${SITE_URL}/logo-oppidum.webp`,
                description:
                    "Maison de Santé Pluriprofessionnelle. Soins coordonnés, médecine générale et prise en charge globale.",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: [locationData.address.street, locationData.address.complement]
                        .filter(Boolean)
                        .join(", "),
                    addressLocality: locationData.address.city,
                    postalCode: locationData.address.postalCode,
                    addressCountry: locationData.address.country,
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: locationData.coordinates.lat,
                    longitude: locationData.coordinates.lng,
                },
                telephone: locationData.phone ?? undefined,
                email: locationData.email ?? undefined,
                areaServed: undefined,
                medicalSpecialty: [
                    "Médecine générale",
                    "Soins primaires",
                    "Soins coordonnés",
                ],
            },
            {
                "@type": "LocalBusiness",
                "@id": `${SITE_URL}/#localbusiness`,
                name: SITE_NAME,
                image: `${SITE_URL}/logo-oppidum.webp`,
                url: SITE_URL,
                telephone: locationData.phone ?? undefined,
                address: {
                    "@type": "PostalAddress",
                    streetAddress: [locationData.address.street, locationData.address.complement]
                        .filter(Boolean)
                        .join(", "),
                    addressLocality: locationData.address.city,
                    postalCode: locationData.address.postalCode,
                    addressCountry: locationData.address.country,
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: locationData.coordinates.lat,
                    longitude: locationData.coordinates.lng,
                },
                openingHoursSpecification: undefined,
            },
        ],
    };
}

export function JsonLd() {
    const jsonLd = getLocalBusinessJsonLd();
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
