import { SITE_CITY, SITE_NAME, SITE_POSTAL_CODE } from "@/lib/site";

export interface LocationData {
  name: string;
  address: {
    street: string;
    complement?: string;
    postalCode: string;
    city: string;
    country: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  phone?: string;
  email?: string;
}

/**
 * Communes desservies par la MSP, dans leur orthographe officielle.
 *
 * `slug` sert aux URLs des pages par métier, `name` à l'affichage et aux
 * données structurées. Toute adresse du site doit reprendre `name` au caractère
 * près : la cohérence NAP est un facteur direct du référencement local.
 */
export interface Commune {
  slug: string;
  name: string;
  postalCode: string;
}

export const COMMUNES: Commune[] = [
  { slug: "laudun-l-ardoise", name: "Laudun-l'Ardoise", postalCode: "30290" },
  { slug: "orsan", name: "Orsan", postalCode: "30200" },
  { slug: "codolet", name: "Codolet", postalCode: "30200" },
  { slug: "chusclan", name: "Chusclan", postalCode: "30200" },
];

export function getCommune(name: string): Commune | undefined {
  return COMMUNES.find((commune) => commune.name === name);
}

/**
 * Données de localisation du site principal de la MSP.
 */
export const locationData: LocationData = {
  name: SITE_NAME,
  address: {
    street: "23 place Jules Ferry",
    complement: undefined,
    postalCode: SITE_POSTAL_CODE,
    city: SITE_CITY,
    country: "France",
  },
  coordinates: {
    lat: 44.1048849,
    lng: 4.6560237,
  },
  phone: "04 66 90 79 54",
  // Laissé indéfini tant que l'adresse institutionnelle n'est pas arbitrée :
  // une chaîne de remplacement serait sérialisée dans le HTML de la page.
  email: undefined,
};

/** Numéro de téléphone au format lien `tel:`. */
export function getTelHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/**
 * Retourne l'adresse formatée pour affichage et copie.
 */
export function getFormattedAddress(location: LocationData): string {
  const lines = [
    location.name,
    location.address.street,
    ...(location.address.complement ? [location.address.complement] : []),
    `${location.address.postalCode} ${location.address.city}`,
    location.address.country,
  ];
  return lines.join("\n");
}

/**
 * URL Apple Plans pour la navigation vers la destination.
 */
export function getAppleMapsUrl(lat: number, lng: number): string {
  return `https://maps.apple.com/?daddr=${lat},${lng}`;
}

/**
 * URL Google Maps pour l'itinéraire vers la destination.
 */
export function getGoogleMapsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
