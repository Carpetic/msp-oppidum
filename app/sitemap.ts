import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";
import { getEvenements } from "@/app/data/evenements";

/**
 * Dates de dernière modification.
 *
 * Volontairement figées et non `new Date()` : un `lastmod` qui bouge à chaque
 * build annonce tout le site comme modifié en permanence, et Google finit par
 * ignorer le signal — y compris quand une page change réellement. À mettre à
 * jour à la main quand le contenu correspondant évolue.
 */
const LASTMOD = {
    home: "2026-11-09",
    specialistes: "2026-11-09",
    parcoursDeSoin: "2026-11-09",
    evenements: "2026-11-09",
    legal: "2026-11-09",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const base = SITE_URL;
    const evenements = getEvenements();

    return [
        {
            url: base,
            lastModified: new Date(LASTMOD.home),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${base}/specialistes`,
            lastModified: new Date(LASTMOD.specialistes),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${base}/parcours-de-soin`,
            lastModified: new Date(LASTMOD.parcoursDeSoin),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${base}/evenements`,
            lastModified: new Date(LASTMOD.evenements),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        ...evenements.map((evenement) => ({
            url: `${base}/evenements/${evenement.slug}`,
            lastModified: new Date(evenement.updatedAt ?? evenement.publishedAt),
            changeFrequency: "yearly" as const,
            priority: 0.6,
        })),
        {
            url: `${base}/mentions-legales`,
            lastModified: new Date(LASTMOD.legal),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${base}/politique-de-confidentialite`,
            lastModified: new Date(LASTMOD.legal),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
