import type { Metadata } from "next";

import { getBreadcrumbListSchema } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { SpecialistesClient } from "./SpecialistesClient";

export const metadata: Metadata = {
    title: "Professionnels de santé à Laudun - MSP L'Oppidum",
    description:
        "Professionnels de santé à Laudun (30290). Médecine générale, kinésithérapie, orthophonie, infirmières et sage-femme. Prenez rendez-vous.",
    openGraph: {
        url: `${SITE_URL}/specialistes`,
        title: "Professionnels de santé à Laudun - MSP L'Oppidum",
        description:
            "Professionnels de santé à Laudun (30290). Médecine générale, kinésithérapie, orthophonie, infirmières et sage-femme. Prenez rendez-vous.",
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Professionnels de santé MSP L'Oppidum à Laudun",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Professionnels de santé à Laudun - MSP L'Oppidum",
        description:
            "Professionnels de santé à Laudun (30290). Médecine générale, kinésithérapie, orthophonie, infirmières et sage-femmes. Prenez rendez-vous.",
        images: ["/og-image.jpg"],
    },
    alternates: { canonical: `${SITE_URL}/specialistes` },
    robots: { index: true, follow: true },
};

export default function SpecialistesPage() {
    const breadcrumbSchema = getBreadcrumbListSchema([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Professionnels de santé", url: `${SITE_URL}/specialistes` },
    ]);

    return (
        <main className="min-h-screen bg-background">
            <script
                id="ld-breadcrumb-specialistes"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <header className="border-b border-border bg-primary/80 py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl font-bold text-white md:text-4xl drop-shadow-sm">
                            Nos Professionnels de Santé
                        </h1>
                        <p className="mt-4 text-white text-lg drop-shadow-sm">
                            L&apos;équipe pluriprofessionnelle de la MSP de l&apos;Oppidum vous accompagne
                            au quotidien. Découvrez les professionnels qui composent notre
                            maison de santé.
                        </p>
                    </div>
                </div>
            </header>

            <SpecialistesClient />
        </main>
    );
}
