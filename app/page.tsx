import { LandingHero } from "@/components/landing/Hero";
import { LandingInformation } from "@/components/landing/Information";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { LandingLocalization } from "@/components/landing/Localization";
import dynamic from "next/dynamic";
import { LandingEquipe } from "@/components/landing/Equipe";
import { getBreadcrumbListSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
    title: "Maison de santé à Laudun",
    description:
        "Maison de santé à Laudun (30290). Médecine générale, kinésithérapie, orthophonie et soins infirmiers. Prenez rendez-vous à Laudun.",
    openGraph: {
        url: SITE_URL,
        title: "Maison de santé à Laudun - MSP L'Oppidum",
        description:
            "Maison de santé à Laudun (30290). Médecine générale, kinésithérapie, orthophonie et soins infirmiers. Prenez rendez-vous à Laudun.",
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "MSP L'Oppidum à Laudun",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Maison de santé à Laudun - MSP L'Oppidum",
        description:
            "Maison de santé à Laudun (30290). Médecine générale, kinésithérapie, orthophonie et soins infirmiers. Prenez rendez-vous à Laudun.",
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