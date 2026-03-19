/**
 * Configuration du site pour le SEO et les URLs canoniques.
 * Définir NEXT_PUBLIC_SITE_URL en production (ex. https://www.msp-oppidum.fr).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.msp-oppidum.fr";

export const SITE_NAME = "MSP L'Oppidum";
export const SITE_DEFAULT_TITLE = "MSP L'Oppidum - Maison de Santé Pluriprofessionnelle";
export const SITE_DEFAULT_DESCRIPTION =
  "MSP L'Oppidum : maison de santé pluriprofessionnelle. Médecine générale, soins coordonnés et prise en charge globale.";
