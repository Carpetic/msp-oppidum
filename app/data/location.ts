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
 * Données de localisation de la MSP Oppidum.
 * À renseigner avec l'adresse et les coordonnées réelles de la MSP.
 */
export const locationData: LocationData = {
  name: "MSP Oppidum",
  address: {
    street: "23 place Jules Ferry",
    complement: undefined,
    postalCode: "30290",
    city: "Laudun-l'Ardoise",
    country: "France",
  },
  coordinates: {
    lat: 44.1048849,
    lng: 4.6560237,
  },
  phone: "04 66 90 79 54",
  email: "[À renseigner]",
};

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
