import type { Metadata } from "next";

import { EventCard } from "@/components/EventCard";
import { PageHeader } from "@/components/PageHeader";
import { getEvenements, getEvenementUrl } from "@/app/data/evenements";
import { getBreadcrumbListSchema, getCollectionPageSchema } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_TITLE = "Nos événements";
const PAGE_KICKER = "Prévention et dépistage";
const PAGE_TAGLINE =
    "Les actions de prévention menées à Laudun L'Ardoise.";
const PAGE_DESCRIPTION =
    "Retrouvez les actions de prévention et de dépistage organisées par la MSP L'Oppidum à Laudun L'Ardoise : Mars Bleu, Octobre Rose et nos rendez-vous santé.";

export const metadata: Metadata = {
    title: "Nos événements et actions de prévention à Laudun",
    description: PAGE_DESCRIPTION,
    openGraph: {
        url: `${SITE_URL}/evenements`,
        title: `Nos événements et actions de prévention - ${SITE_NAME}`,
        description: PAGE_DESCRIPTION,
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: `Actions de prévention de la ${SITE_NAME} à Laudun`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Nos événements et actions de prévention - ${SITE_NAME}`,
        description: PAGE_DESCRIPTION,
        images: ["/og-image.jpg"],
    },
    alternates: { canonical: `${SITE_URL}/evenements` },
    robots: { index: true, follow: true },
};

export default function EvenementsPage() {
    const evenements = getEvenements();

    const breadcrumbSchema = getBreadcrumbListSchema([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Événements", url: `${SITE_URL}/evenements` },
    ]);

    const collectionSchema = getCollectionPageSchema({
        url: `${SITE_URL}/evenements`,
        name: "Nos événements et actions de prévention",
        description: PAGE_DESCRIPTION,
        items: evenements.map((evenement) => ({
            name: evenement.title,
            url: getEvenementUrl(evenement),
            description: evenement.description,
        })),
    });

    return (
        <main className="min-h-screen bg-linear-to-b from-background to-muted" role="main">
            <script
                id="ld-breadcrumb-evenements"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                id="ld-collection-evenements"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />

            <PageHeader
                kicker={PAGE_KICKER}
                title={PAGE_TITLE}
                subtitle={PAGE_TAGLINE}
            />

            <section className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                <div className="grid gap-6 md:grid-cols-2">
                    {evenements.map((evenement, index) => (
                        <EventCard
                            key={evenement.slug}
                            evenement={evenement}
                            headingLevel="h2"
                            priority={index === 0}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
