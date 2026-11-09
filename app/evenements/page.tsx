import type { Metadata } from "next";
import Link from "next/link";

import { EventCard } from "@/components/EventCard";
import { PageHeader } from "@/components/PageHeader";
import { JsonLdScript } from "@/components/JsonLd";
import { getEvenements, getEvenementUrl } from "@/app/data/evenements";
import { getBreadcrumbListSchema, getCollectionPageSchema } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/evenements`;
const PAGE_TITLE = "Nos événements";
const PAGE_KICKER = "Prévention et dépistage";
const PAGE_TAGLINE = "Les actions de prévention menées à Laudun-l'Ardoise.";
const SEO_TITLE = "Actions de prévention à Laudun-l'Ardoise";
const PAGE_DESCRIPTION =
    "Les actions de prévention et de dépistage organisées par la MSP L'Oppidum à Laudun-l'Ardoise : Mars Bleu, Octobre Rose et nos rendez-vous santé.";

export const metadata: Metadata = {
    title: SEO_TITLE,
    description: PAGE_DESCRIPTION,
    openGraph: {
        url: PAGE_URL,
        title: `${SEO_TITLE} - ${SITE_NAME}`,
        description: PAGE_DESCRIPTION,
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/og-image-v3.jpg",
                width: 1200,
                height: 630,
                alt: `Actions de prévention de la ${SITE_NAME}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${SEO_TITLE} - ${SITE_NAME}`,
        description: PAGE_DESCRIPTION,
        images: ["/og-image-v3.jpg"],
    },
    alternates: { canonical: PAGE_URL },
    robots: { index: true, follow: true },
};

export default function EvenementsPage() {
    const evenements = getEvenements();

    const breadcrumbItems = [
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Événements", url: PAGE_URL },
    ];

    const collectionSchema = getCollectionPageSchema({
        url: PAGE_URL,
        name: SEO_TITLE,
        description: PAGE_DESCRIPTION,
        items: evenements.map((evenement) => ({
            name: evenement.title,
            url: getEvenementUrl(evenement),
            description: evenement.seoDescription,
        })),
    });

    return (
        <main className="min-h-screen bg-linear-to-b from-background to-muted">
            <JsonLdScript
                id="ld-breadcrumb-evenements"
                data={getBreadcrumbListSchema(breadcrumbItems)}
            />
            <JsonLdScript id="ld-collection-evenements" data={collectionSchema} />

            <PageHeader
                breadcrumb={breadcrumbItems}
                kicker={PAGE_KICKER}
                title={PAGE_TITLE}
                subtitle={PAGE_TAGLINE}
            />

            <section className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                {/* Une page d'index de deux cartes ne dit rien à elle seule :
                    le contexte de la démarche vaut mieux qu'une grille nue. */}
                <div className="mb-10 space-y-4">
                    <p className="text-lg leading-relaxed text-foreground">
                        La prévention fait partie des missions d&apos;une maison de santé
                        pluriprofessionnelle. Tout au long de l&apos;année, la MSP
                        L&apos;Oppidum organise avec les professionnels de santé du territoire
                        des actions d&apos;information et de dépistage, ouvertes à tous et
                        gratuites.
                    </p>

                    <p className="leading-relaxed text-muted-foreground">
                        Ces actions s&apos;appuient sur les campagnes nationales de dépistage
                        organisé : <strong>Mars Bleu</strong> pour le cancer colorectal et{" "}
                        <strong>Octobre Rose</strong> pour le cancer du sein. Elles prennent la
                        forme de stands en pharmacie, d&apos;ateliers animés par nos
                        professionnels et de conférences grand public, à Laudun-l&apos;Ardoise
                        comme dans les communes voisines.
                    </p>

                    <p className="leading-relaxed text-muted-foreground">
                        Vous trouverez ci-dessous le compte-rendu de chaque action menée. Pour
                        une question sur un dépistage, parlez-en à votre médecin traitant ou à
                        votre pharmacien. Vous pouvez aussi consulter{" "}
                        <Link
                            href="/specialistes"
                            className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
                        >
                            leurs coordonnées
                        </Link>
                        .
                    </p>
                </div>

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
