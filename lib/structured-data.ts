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
    "Laudun L'ardoise",
    "Orsan",
    "Codolet",
    "Chusclan",
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
            "Maison de Santé Pluriprofessionnelle : médecine générale, kinésithérapie, orthophonie, soins infirmiers et sage-femme. Soins coordonnés au service de Laudun L'ardoise, Orsan, Codolet et Chusclan.",
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

export type ArticleSchemaParams = {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    datePublished: string;
    dateModified?: string;
};

export function getArticleSchema(params: ArticleSchemaParams) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: params.title,
        description: params.description,
        image: params.imageUrl,
        datePublished: params.datePublished,
        dateModified: params.dateModified ?? params.datePublished,
        author: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo-oppidum.webp`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": params.url,
        },
    };
}

export type EventPlace = {
    name: string;
    streetAddress: string;
    postalCode: string;
    addressLocality: string;
};

export type EventSchemaParams = {
    name: string;
    description: string;
    url: string;
    imageUrl: string;
    startDate: string;
    endDate?: string;
    /** Lieu réel de l'événement. Par défaut : l'adresse de la MSP. */
    place?: EventPlace;
    /** Intervenant mis en avant, par exemple le conférencier. */
    performerName?: string;
};

export function getEventSchema(params: EventSchemaParams) {
    const place: EventPlace = params.place ?? {
        name: SITE_NAME,
        streetAddress: [locationData.address.street, locationData.address.complement]
            .filter(Boolean)
            .join(", "),
        postalCode: locationData.address.postalCode,
        addressLocality: locationData.address.city,
    };

    return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: params.name,
        description: params.description,
        image: params.imageUrl,
        url: params.url,
        startDate: params.startDate,
        // Pas de repli sur startDate : un événement ne se termine pas à l'instant
        // où il commence, et l'heure de fin n'est pas connue pour la conférence.
        ...(params.endDate ? { endDate: params.endDate } : {}),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        isAccessibleForFree: true,
        location: {
            "@type": "Place",
            name: place.name,
            address: {
                "@type": "PostalAddress",
                streetAddress: place.streetAddress,
                postalCode: place.postalCode,
                addressLocality: place.addressLocality,
                addressCountry: "FR",
            },
        },
        organizer: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: SITE_URL,
        },
        ...(params.performerName
            ? { performer: { "@type": "Person", name: params.performerName } }
            : {}),
    };
}

export type CollectionPageParams = {
    url: string;
    name: string;
    description: string;
    items: { name: string; url: string; description?: string }[];
};

export function getCollectionPageSchema(params: CollectionPageParams) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": params.url,
        url: params.url,
        name: params.name,
        description: params.description,
        mainEntity: {
            "@type": "ItemList",
            itemListOrder: "https://schema.org/ItemListOrderDescending",
            numberOfItems: params.items.length,
            itemListElement: params.items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                url: item.url,
                ...(item.description ? { description: item.description } : {}),
            })),
        },
    };
}
