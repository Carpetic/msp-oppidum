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
 * Adresse fictive réaliste dans la zone d'Ambérieu-en-Bugey (Ain).
 */
export const locationData: LocationData = {
  name: "MSP Oppidum",
  address: {
    street: "12 Place de la République",
    complement: "Bâtiment de la Maison de Santé",
    postalCode: "01500",
    city: "Ambérieu-en-Bugey",
    country: "France",
  },
  coordinates: {
    lat: 45.9584,
    lng: 5.3756,
  },
  phone: "04 74 00 00 00",
  email: "contact@msp-oppidum.fr",
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
