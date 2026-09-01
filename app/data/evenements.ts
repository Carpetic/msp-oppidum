import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/site";

export type EvenementAccent = "rose" | "bleu";

export interface Evenement {
    /** Segment d'URL sous /evenements/. */
    slug: string;
    /** Titre court : <h1> de la page détail et titre des cartes. */
    title: string;
    /** Titre long : balise <title>, Open Graph, Twitter. */
    seoTitle: string;
    /** Sur-titre affiché au-dessus du <h1> et sur les cartes. */
    kicker: string;
    /** Accroche affichée sous le <h1>. */
    tagline: string;
    /** Résumé : meta description + texte des cartes. */
    description: string;
    /** Ouverture de l'événement, ISO 8601. Sert au tri antéchronologique. */
    startDate: string;
    /** Clôture si l'événement s'étale sur plusieurs jours, ISO 8601. */
    endDate?: string;
    /** Dates lisibles, ex. « 24 et 25 mars, 13 avril 2026 ». */
    dateLabel: string;
    /** Mise en ligne de la page : Article.datePublished et sitemap. */
    publishedAt: string;
    /** Dernière modification : Article.dateModified et sitemap. */
    updatedAt?: string;
    /** Visuel de couverture 1200x630 : cartes, en-tête de page et Open Graph. */
    cover: string;
    coverAlt: string;
    /** Palette de la carte et de l'en-tête de la page détail. */
    accent: EvenementAccent;
}

export const EVENEMENTS: Evenement[] = [
    {
        slug: "mars-bleu-2026",
        title: "Mars Bleu 2026",
        seoTitle: "Mars Bleu 2026 - Dépistage du cancer colorectal à Laudun",
        kicker: "Événement de mars et avril 2026",
        tagline: "Une mobilisation encourageante pour le dépistage du cancer colorectal",
        description:
            "En mars et avril 2026, la MSP L'Oppidum s'est mobilisée pour Mars Bleu : des stands dans les pharmacies de Laudun et de L'Ardoise, puis une conférence grand public animée par le Dr Even Philippe, gastro-entérologue.",
        startDate: "2026-03-24",
        endDate: "2026-04-13",
        dateLabel: "24 et 25 mars, 13 avril 2026",
        publishedAt: "2026-08-31",
        cover: "/evenement/mars-bleu-2026/couverture.webp",
        coverAlt:
            "L'équipe de la MSP L'Oppidum et les pharmaciens mobilisés pour Mars Bleu 2026",
        accent: "bleu",
    },
    {
        slug: "octobre-rose-2025",
        title: "Octobre Rose 2025",
        seoTitle: "Octobre Rose 2025 - Journée de sensibilisation au dépistage",
        kicker: "Événement du 17 octobre 2025",
        tagline: "Journée de sensibilisation au dépistage du cancer du sein",
        description:
            "Le 17 octobre 2025, la MSP L'Oppidum a organisé une journée Octobre Rose avec un atelier d'auto-palpation animé par notre sage-femme Malaury et les professionnels de santé du territoire.",
        startDate: "2025-10-17",
        dateLabel: "17 octobre 2025",
        publishedAt: "2025-10-17",
        cover: "/evenement/octobre-rose.webp",
        coverAlt:
            "Journée Octobre Rose 2025 à la MSP L'Oppidum - Atelier d'auto-palpation",
        accent: "rose",
    },
];

/** Événements du plus récent au plus ancien. */
export function getEvenements(): Evenement[] {
    return [...EVENEMENTS].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

/** Retrouve un événement par son slug. */
export function getEvenement(slug: string): Evenement | undefined {
    return EVENEMENTS.find((evenement) => evenement.slug === slug);
}

/** URL absolue de la page d'un événement. */
export function getEvenementUrl(evenement: Evenement): string {
    return `${SITE_URL}/evenements/${evenement.slug}`;
}

/** Métadonnées Next.js communes à toutes les pages d'événement. */
export function getEvenementMetadata(evenement: Evenement): Metadata {
    const url = getEvenementUrl(evenement);
    const title = `${evenement.seoTitle} - ${SITE_NAME}`;

    return {
        title: evenement.seoTitle,
        description: evenement.description,
        openGraph: {
            url,
            title,
            description: evenement.description,
            siteName: SITE_NAME,
            locale: "fr_FR",
            type: "article",
            publishedTime: evenement.publishedAt,
            modifiedTime: evenement.updatedAt ?? evenement.publishedAt,
            images: [
                {
                    url: evenement.cover,
                    width: 1200,
                    height: 630,
                    alt: evenement.coverAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: evenement.description,
            images: [evenement.cover],
        },
        alternates: { canonical: url },
        robots: { index: true, follow: true },
    };
}
