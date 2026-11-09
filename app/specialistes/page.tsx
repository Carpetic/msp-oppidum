import type { Metadata } from "next";

import {
    getBreadcrumbListSchema,
    getPractitionerListGraph,
} from "@/lib/structured-data";
import { flattenCabinetGroups, getCabinetsByCommune } from "@/lib/metiers";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLdScript } from "@/components/JsonLd";
import { SpecialistesClient } from "./SpecialistesClient";
import { PageHeader } from "@/components/PageHeader";
import { SPECIALISTES } from "@/app/data/specialistes";

const PAGE_URL = `${SITE_URL}/specialistes`;
// Le suffixe de marque est ajouté par le `title.template` du layout : le
// répéter ici produisait « … - MSP L'Oppidum - MSP L'Oppidum ».
const PAGE_TITLE = "Professionnels de santé à Laudun-l'Ardoise";
const PAGE_DESCRIPTION =
    "Les professionnels de santé de la MSP L'Oppidum à Laudun-l'Ardoise, Orsan, Codolet et Chusclan : adresse et téléphone de chaque cabinet.";

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    openGraph: {
        url: PAGE_URL,
        title: `${PAGE_TITLE} - ${SITE_NAME}`,
        description: PAGE_DESCRIPTION,
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/og-image-v3.jpg",
                width: 1200,
                height: 630,
                alt: `Professionnels de santé de la ${SITE_NAME}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${PAGE_TITLE} - ${SITE_NAME}`,
        description: PAGE_DESCRIPTION,
        images: ["/og-image-v3.jpg"],
    },
    alternates: { canonical: PAGE_URL },
    robots: { index: true, follow: true },
};

export default function SpecialistesPage() {
    const breadcrumbItems = [
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Professionnels de santé", url: PAGE_URL },
    ];

    const communeGroups = getCabinetsByCommune();

    return (
        <main className="min-h-screen bg-background">
            <JsonLdScript
                id="ld-breadcrumb-specialistes"
                data={getBreadcrumbListSchema(breadcrumbItems)}
            />
            <JsonLdScript
                id="ld-specialistes"
                data={getPractitionerListGraph({
                    pageUrl: PAGE_URL,
                    name: PAGE_TITLE,
                    description: PAGE_DESCRIPTION,
                    groups: flattenCabinetGroups(communeGroups),
                })}
            />

            <PageHeader
                breadcrumb={breadcrumbItems}
                title="Nos professionnels de santé"
                subtitle={`${SPECIALISTES.length} professionnels répartis sur ${communeGroups.length} communes. L'équipe pluriprofessionnelle de la MSP de l'Oppidum vous accompagne au quotidien.`}
            />

            <SpecialistesClient />
        </main>
    );
}
