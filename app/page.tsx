import { LandingHero } from "@/components/landing/Hero";
import { LandingInformation } from "@/components/landing/Information";
import { LandingLocalization } from "@/components/landing/Localization";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { LandingFAQ } from "@/components/landing/LandingFAQ";

export const metadata: Metadata = {
    title: "MSP L'Oppidum | Maison de Santé Pluriprofessionnelle",
    description:
        "MSP L'Oppidum : maison de santé pluriprofessionnelle. Soins coordonnés, médecine générale et prise en charge globale.",
    openGraph: {
        url: SITE_URL,
        title: "MSP L'Oppidum | Maison de Santé Pluriprofessionnelle",
        description:
            "MSP L'Oppidum : soins coordonnés et prise en charge globale. Découvrez notre équipe et notre localisation.",
        siteName: SITE_NAME,
    },
    alternates: { canonical: SITE_URL },
};

export default function Home() {
    return (
        <main
            className="min-h-screen bg-linear-to-b from-background to-muted"
            role="main"
            aria-label="Page d'accueil MSP L'Oppidum"
        >
            <LandingHero />
            <LandingInformation />
            <LandingLocalization />
            <LandingFAQ />
        </main>
    );
}