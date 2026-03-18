import { LandingHero } from "@/components/landing/Hero";
import { LandingInformation } from "@/components/landing/Information";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { LandingLocalization } from "@/components/landing/Localization";
import dynamic from "next/dynamic";
import { LandingEquipe } from "@/components/landing/Equipe";
import { getBreadcrumbListSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
    title: "Maison de santé à Laudun-l'Ardoise",
    description:
        "Maison de santé à Laudun-l'Ardoise (30290). Médecine générale, kinésithérapie, orthophonie et soins infirmiers. Prenez rendez-vous à Laudun-l'Ardoise.",
    keywords: [
        SITE_NAME,
        "Maison de santé",
        "MSP",
        "médecine générale",
        "kinésithérapie",
        "orthophonie",
        "soins infirmiers",
        "sage-femme",
        "Laudun-l'Ardoise",
        "30290",
        "Gard",
        "Connaux",
        "Bagnols-sur-Cèze",
        "Roquemaure",
        "Chusclan",
        "Saint-Gervais",
    ],
    openGraph: {
        url: SITE_URL,
        title: "Maison de santé à Laudun-l'Ardoise | MSP L'Oppidum",
        description:
            "Maison de santé à Laudun-l'Ardoise (30290). Médecine générale, kinésithérapie, orthophonie et soins infirmiers. Prenez rendez-vous à Laudun-l'Ardoise.",
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "MSP L'Oppidum à Laudun-l'Ardoise",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Maison de santé à Laudun-l'Ardoise | MSP L'Oppidum",
        description:
            "Maison de santé à Laudun-l'Ardoise (30290). Médecine générale, kinésithérapie, orthophonie et soins infirmiers. Prenez rendez-vous à Laudun-l'Ardoise.",
        images: ["/og-image.jpg"],
    },
    alternates: { canonical: `${SITE_URL}/` },
    robots: { index: true, follow: true },
};

const LandingFAQ = dynamic(
    () => import("@/components/landing/LandingFAQ").then((m) => m.LandingFAQ),
    { loading: () => null }
);

export default function Home() {
    const breadcrumbSchema = getBreadcrumbListSchema([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Maison de santé", url: `${SITE_URL}/` },
    ]);

    return (
        <main
            className="min-h-screen bg-linear-to-b from-background to-muted"
            role="main"
            aria-label="Page d'accueil MSP L'Oppidum"
        >
            <script
                id="ld-breadcrumb-home"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <LandingHero />
            <LandingInformation />
            <LandingEquipe />
            <LandingLocalization />
            <LandingFAQ />
        </main>
    );
}