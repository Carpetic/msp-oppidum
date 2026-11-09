import { COMMUNES, getCommune, locationData } from "@/app/data/location";
import { SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
import {
    getAvailableServices,
    getMedicalSpecialties,
    getMetierByKey,
    type Metier,
} from "@/lib/metiers";
import type { Cabinet, Specialiste } from "@/app/data/specialistes";

/**
 * Identifiant unique de la structure dans tout le graphe du site.
 *
 * Un seul nœud d'organisation existe — le `MedicalClinic`, qui hérite déjà
 * d'`Organization`. Partout ailleurs (auteur, éditeur, organisateur, employeur),
 * on le référence par cet `@id` au lieu de le redéclarer : deux nœuds concurrents
 * portant le même nom et la même adresse brouillent la résolution d'entité.
 */
export const ORG_ID = `${SITE_URL}/#organization`;

export type BreadcrumbItem = {
    name: string;
    url: string;
};

export type FAQItem = {
    question: string;
    answer: string;
    /**
     * Lien affiché sous la réponse. Volontairement hors de `answer` : Google
     * retire les liens du texte des réponses FAQ, la chaîne du schéma doit donc
     * se suffire à elle-même.
     */
    link?: { href: string; label: string };
};

/** Communes desservies, dans leur orthographe officielle. */
export const AREA_SERVED = COMMUNES.map((commune) => commune.name);

const CLINIC_DESCRIPTION =
    "Maison de Santé Pluriprofessionnelle : médecine générale, soins infirmiers, kinésithérapie, orthophonie, sage-femme et pédicurie-podologie. Soins coordonnés au service de Laudun-l'Ardoise, Orsan, Codolet et Chusclan.";

function getStreetAddress(): string {
    return [locationData.address.street, locationData.address.complement]
        .filter(Boolean)
        .join(", ");
}

function getPostalAddress() {
    return {
        "@type": "PostalAddress",
        streetAddress: getStreetAddress(),
        addressLocality: locationData.address.city,
        postalCode: locationData.address.postalCode,
        addressCountry: "FR",
    };
}

/**
 * Le nœud unique de la structure : à la fois `MedicalClinic` et, par héritage,
 * l'`Organization` du site.
 */
export function getMedicalClinicNode() {
    return {
        "@type": "MedicalClinic",
        "@id": ORG_ID,
        name: SITE_NAME,
        legalName: SITE_LEGAL_NAME,
        description: CLINIC_DESCRIPTION,
        url: SITE_URL,
        logo: `${SITE_URL}/logo-oppidum.webp`,
        telephone: locationData.phone ?? undefined,
        email: locationData.email ?? undefined,
        address: getPostalAddress(),
        geo: {
            "@type": "GeoCoordinates",
            latitude: locationData.coordinates.lat,
            longitude: locationData.coordinates.lng,
        },
        // Valeurs de l'énumération schema.org MedicalSpecialty. Les libellés
        // français partent dans availableService, qui accepte du texte libre.
        medicalSpecialty: getMedicalSpecialties(),
        availableService: getAvailableServices().map((service) => ({
            "@type": "MedicalTherapy",
            name: service,
        })),
        areaServed: COMMUNES.map((commune) => ({
            "@type": "City",
            name: commune.name,
            postalCode: commune.postalCode,
            addressCountry: "FR",
        })),
    };
}

/** Graphe commun à toutes les pages, injecté par le layout racine. */
export function getSiteGraph() {
    return {
        "@context": "https://schema.org",
        "@graph": [getMedicalClinicNode()],
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

/* ─────────────────────────────────────────
   Pages de contenu santé
───────────────────────────────────────── */

export type MedicalPageParams = {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    datePublished: string;
    dateModified?: string;
};

/**
 * Graphe d'une page de contenu santé : la page est un `MedicalWebPage`, son
 * contenu un `Article`.
 *
 * `MedicalWebPage` porte `lastReviewed` et `reviewedBy`, les deux propriétés
 * sur lesquelles Google s'appuie pour évaluer la fiabilité d'un contenu
 * médical. `reviewedBy` désigne ici la structure ; désigner nommément un
 * professionnel de la MSP serait un signal plus fort.
 */
export function getMedicalWebPageGraph(params: MedicalPageParams) {
    const pageId = `${params.url}#webpage`;
    const articleId = `${params.url}#article`;
    const dateModified = params.dateModified ?? params.datePublished;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalWebPage",
                "@id": pageId,
                url: params.url,
                name: params.title,
                description: params.description,
                inLanguage: "fr-FR",
                lastReviewed: dateModified,
                reviewedBy: { "@id": ORG_ID },
                medicalAudience: {
                    "@type": "MedicalAudience",
                    audienceType: "Patient",
                },
                publisher: { "@id": ORG_ID },
                mainEntity: { "@id": articleId },
            },
            {
                "@type": "Article",
                "@id": articleId,
                headline: params.title,
                description: params.description,
                image: params.imageUrl,
                datePublished: params.datePublished,
                dateModified,
                inLanguage: "fr-FR",
                author: { "@id": ORG_ID },
                publisher: { "@id": ORG_ID },
                mainEntityOfPage: { "@id": pageId },
            },
        ],
    };
}

/* ─────────────────────────────────────────
   Événements
───────────────────────────────────────── */

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
        streetAddress: getStreetAddress(),
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
        // Les résultats enrichis Event de Google s'appuient sur `offers`, pas sur
        // `isAccessibleForFree` seul.
        offers: {
            "@type": "Offer",
            price: 0,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            validFrom: params.startDate,
            url: params.url,
        },
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
        organizer: { "@id": ORG_ID },
        ...(params.performerName
            ? { performer: { "@type": "Person", name: params.performerName } }
            : {}),
    };
}

/* ─────────────────────────────────────────
   Professionnels et cabinets
───────────────────────────────────────── */

/** Découpe « 23 place Jules Ferry, 30290 Laudun-l'Ardoise » en ses composants. */
function getCabinetAddress(cabinet: Cabinet) {
    const commune = getCommune(cabinet.commune);
    return {
        "@type": "PostalAddress",
        streetAddress: cabinet.adresse.split(",")[0].trim(),
        addressLocality: cabinet.commune,
        postalCode: commune?.postalCode,
        addressCountry: "FR",
    };
}

export type CabinetNodeParams = {
    cabinet: Cabinet;
    specialistes: Specialiste[];
    /** Page qui décrit ce cabinet, pour l'`@id` du nœud. */
    pageUrl: string;
};

/**
 * Un cabinet et les professionnels qui y exercent.
 *
 * Le type schema.org suit le métier (`Physician` pour un cabinet médical,
 * `Pharmacy` pour une officine, `MedicalBusiness` sinon), et chaque
 * professionnel devient une `Person` rattachée à la MSP.
 */
export function getCabinetNode({ cabinet, specialistes, pageUrl }: CabinetNodeParams) {
    const metiers = specialistes
        .map((s) => getMetierByKey(s.metier))
        .filter((m): m is Metier => Boolean(m));

    const schemaType = metiers[0]?.schemaType ?? "MedicalBusiness";
    const specialties = [
        ...new Set(metiers.map((m) => m.medicalSpecialty).filter(Boolean)),
    ] as string[];

    return {
        "@type": schemaType,
        "@id": `${pageUrl}#${cabinet.id}`,
        name: cabinet.nom,
        address: getCabinetAddress(cabinet),
        ...(cabinet.telephone ? { telephone: cabinet.telephone } : {}),
        ...(specialties.length ? { medicalSpecialty: specialties } : {}),
        parentOrganization: { "@id": ORG_ID },
        employee: specialistes.map((s) => {
            const metier = getMetierByKey(s.metier);
            return {
                "@type": "Person",
                name: `${s.prenom} ${s.nom}`,
                ...(metier ? { jobTitle: metier.singulier } : {}),
                worksFor: { "@id": ORG_ID },
                ...(s.telephone ? { telephone: s.telephone } : {}),
            };
        }),
    };
}

export type PractitionerListParams = {
    pageUrl: string;
    name: string;
    description: string;
    groups: { cabinet: Cabinet; specialistes: Specialiste[] }[];
};

/**
 * Graphe d'une page annuaire : la page elle-même, plus la liste ordonnée des
 * cabinets qu'elle présente.
 */
export function getPractitionerListGraph({
    pageUrl,
    name,
    description,
    groups,
}: PractitionerListParams) {
    const cabinetNodes = groups.map(({ cabinet, specialistes }) =>
        getCabinetNode({ cabinet, specialistes, pageUrl })
    );

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": `${pageUrl}#webpage`,
                url: pageUrl,
                name,
                description,
                inLanguage: "fr-FR",
                isPartOf: { "@id": ORG_ID },
                mainEntity: {
                    "@type": "ItemList",
                    numberOfItems: cabinetNodes.length,
                    itemListElement: cabinetNodes.map((node, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        item: { "@id": node["@id"] },
                    })),
                },
            },
            ...cabinetNodes,
        ],
    };
}

/* ─────────────────────────────────────────
   Pages de collection
───────────────────────────────────────── */

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
