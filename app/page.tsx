import type { Metadata } from "next";

import { LandingHero } from "@/components/landing/Hero";
import { LandingInformation } from "@/components/landing/Information";
import { LandingLocalization } from "@/components/landing/Localization";
import { LandingEquipe } from "@/components/landing/Equipe";
import { LandingEvenements } from "@/components/landing/Evenements";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { JsonLdScript } from "@/components/JsonLd";
import { getBreadcrumbListSchema } from "@/lib/structured-data";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// Le `title.template` du layout racine ne s'applique qu'aux segments enfants,
// jamais à la page du même segment : le titre de l'accueil doit donc porter la
// marque lui-même.
const PAGE_TITLE = `Maison de santé à Laudun-l'Ardoise - ${SITE_NAME}`;
const PAGE_DESCRIPTION =
    "Maison de santé pluriprofessionnelle à Laudun-l'Ardoise (30290) : médecine générale, soins infirmiers, kinésithérapie, orthophonie et sage-femme.";

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    openGraph: {
        url: SITE_URL,
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/og-image-v3.jpg",
                width: 1200,
                height: 630,
                alt: "MSP L'Oppidum à Laudun-l'Ardoise",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        images: ["/og-image-v3.jpg"],
    },
    alternates: { canonical: `${SITE_URL}/` },
    robots: { index: true, follow: true },
};

export default function Home() {
    const breadcrumbSchema = getBreadcrumbListSchema([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Maison de santé", url: `${SITE_URL}/` },
    ]);

    return (
        <main className="min-h-screen bg-linear-to-b from-background to-muted">
            <JsonLdScript id="ld-breadcrumb-home" data={breadcrumbSchema} />

            <LandingHero />
            <LandingInformation />
            <LandingEquipe />
            <LandingEvenements />
            <LandingLocalization />
            <LandingFAQ />
        </main>
    );
}
