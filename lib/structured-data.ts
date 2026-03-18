import { locationData } from "@/app/data/location";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export type BreadcrumbItem = {
    name: string;
    url: string;
};

export type FAQItem = {
    question: string;
    answer: string;
};

export const AREA_SERVED = [
    "Laudun-l'Ardoise",
    "Connaux",
    "Bagnols-sur-Cèze",
    "Roquemaure",
    "Chusclan",
    "Saint-Gervais",
];

export const MEDICAL_SPECIALTIES = [
    "Médecine générale",
    "Kinésithérapie",
    "Orthophonie",
    "Soins infirmiers",
    "Sage-femme",
];

export function getOrganizationSchema() {
    const streetAddress = [locationData.address.street, locationData.address.complement]
        .filter(Boolean)
        .join(", ");

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo-oppidum.webp`,
        telephone: locationData.phone ?? undefined,
        address: {
            "@type": "PostalAddress",
            streetAddress,
            addressLocality: locationData.address.city,
            postalCode: locationData.address.postalCode,
            addressCountry: locationData.address.country,
        },
    };
}

export function getMedicalClinicSchema() {
    const streetAddress = [locationData.address.street, locationData.address.complement]
        .filter(Boolean)
        .join(", ");

    return {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "@id": `${SITE_URL}/#medicalclinic`,
        name: SITE_NAME,
        description:
            "Maison de Santé Pluriprofessionnelle : médecine générale, kinésithérapie, orthophonie, soins infirmiers et sage-femme. Soins coordonnés au service de Laudun-l'Ardoise et des communes voisines.",
        url: SITE_URL,
        telephone: locationData.phone ?? undefined,
        address: {
            "@type": "PostalAddress",
            streetAddress,
            addressLocality: locationData.address.city,
            postalCode: locationData.address.postalCode,
            addressCountry: "FR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: locationData.coordinates.lat,
            longitude: locationData.coordinates.lng,
        },
        openingHoursSpecification: [],
        medicalSpecialty: MEDICAL_SPECIALTIES,
        areaServed: AREA_SERVED,
    };
}

export function getFaqPageSchema(items: FAQItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

export function getBreadcrumbListSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

