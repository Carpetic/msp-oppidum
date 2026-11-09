/**
 * Configuration du site pour le SEO et les URLs canoniques.
 * Définir NEXT_PUBLIC_SITE_URL en production (ex. https://www.msp-oppidum.fr).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.msp-oppidum.fr";

/**
 * Source de vérité unique du nom de la structure.
 * Toute page qui affiche le nom doit l'importer d'ici : trois graphies
 * différentes circulaient avant (« MSP L'Opidum », « MSP Oppidum »), et un nom
 * incohérent dégrade le référencement local (cohérence NAP).
 */
export const SITE_NAME = "MSP L'Oppidum";
export const SITE_LEGAL_NAME = `${SITE_NAME} (Maison de Santé Pluriprofessionnelle)`;

/** Commune du siège, dans son orthographe officielle. */
export const SITE_CITY = "Laudun-l'Ardoise";
export const SITE_POSTAL_CODE = "30290";

export const SITE_DEFAULT_TITLE = "MSP L'Oppidum - Maison de Santé Pluriprofessionnelle";
export const SITE_DEFAULT_DESCRIPTION =
  "MSP L'Oppidum : maison de santé pluriprofessionnelle. Médecine générale, soins coordonnés et prise en charge globale.";

/** Couleur de marque, reprise par la meta theme-color et le manifest. */
export const SITE_THEME_COLOR = "#84a6dd";
