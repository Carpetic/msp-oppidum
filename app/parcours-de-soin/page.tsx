import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Phone, Users } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { JsonLdScript } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import {
    getBreadcrumbListSchema,
    getMedicalWebPageGraph,
    type FAQItem,
} from "@/lib/structured-data";
import { getTelHref, locationData } from "@/app/data/location";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/parcours-de-soin`;
const PAGE_TITLE = "Parcours de soin et médecin traitant";
const PAGE_DESCRIPTION =
    "Médecin traitant, parcours de soin coordonné, soins non programmés : comment se déroule une prise en charge à la MSP L'Oppidum, à Laudun-l'Ardoise.";

/** Dernière relecture du contenu : alimente `lastReviewed` du MedicalWebPage. */
const PUBLISHED_AT = "2026-08-31";

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    openGraph: {
        url: PAGE_URL,
        title: `${PAGE_TITLE} - ${SITE_NAME}`,
        description: PAGE_DESCRIPTION,
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "article",
        publishedTime: PUBLISHED_AT,
        images: [
            {
                url: "/og-image-v3.jpg",
                width: 1200,
                height: 630,
                alt: `Parcours de soin à la ${SITE_NAME}`,
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

const faqItems: FAQItem[] = [
    {
        question: "Qu'est-ce que le parcours de soin coordonné ?",
        answer:
            "Le parcours de soin coordonné est le cadre mis en place par l'Assurance Maladie : vous déclarez un médecin traitant, qui devient votre premier interlocuteur et vous oriente, si besoin, vers un spécialiste ou un examen. Respecter ce parcours conditionne le niveau de remboursement de vos consultations.",
    },
    {
        question: "Comment déclarer un médecin traitant à la MSP de l'Oppidum ?",
        answer:
            "Lors d'une consultation, votre médecin remplit avec vous le formulaire de déclaration de choix du médecin traitant, qu'il transmet à l'Assurance Maladie. La démarche peut aussi se faire depuis votre compte ameli. Elle est gratuite, sans engagement de durée, et vous pouvez changer de médecin traitant à tout moment.",
        link: { href: "/specialistes", label: "Voir nos professionnels de santé" },
    },
    {
        question: "Puis-je être suivi à la MSP sans y avoir déclaré mon médecin traitant ?",
        answer:
            "Oui. Les infirmières, kinésithérapeutes, orthophonistes, sage-femme et pédicure-podologue de la MSP vous prennent en charge sur prescription, quel que soit le médecin qui vous suit. La déclaration ne concerne que le médecin généraliste.",
    },
    {
        question: "Que faire en dehors des heures d'ouverture des cabinets ?",
        answer:
            "En cas d'urgence vitale, appelez le 15. Pour un besoin de soin qui ne peut pas attendre la réouverture des cabinets sans relever de l'urgence vitale, appelez le 116 117, numéro national de la permanence des soins, qui vous orientera vers le médecin de garde du secteur.",
    },
    {
        question: "Faut-il une ordonnance pour consulter un professionnel paramédical ?",
        answer:
            "Dans la plupart des cas, oui : kinésithérapie, orthophonie et soins infirmiers se font sur prescription médicale. La sage-femme et le pédicure-podologue peuvent en revanche être consultés directement pour certains motifs. En cas de doute, posez la question au cabinet concerné avant votre rendez-vous.",
    },
];

export default function ParcoursDeSoinPage() {
    const { phone } = locationData;

    const breadcrumbItems = [
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Parcours de soin", url: PAGE_URL },
    ];

    return (
        <main className="min-h-screen bg-linear-to-b from-background to-muted">
            <JsonLdScript
                id="ld-breadcrumb-parcours"
                data={getBreadcrumbListSchema(breadcrumbItems)}
            />
            <JsonLdScript
                id="ld-page-parcours"
                data={getMedicalWebPageGraph({
                    title: PAGE_TITLE,
                    description: PAGE_DESCRIPTION,
                    url: PAGE_URL,
                    imageUrl: `${SITE_URL}/og-image-v3.jpg`,
                    datePublished: PUBLISHED_AT,
                })}
            />

            <PageHeader
                breadcrumb={breadcrumbItems}
                kicker="Comprendre sa prise en charge"
                title="Parcours de soin et médecin traitant"
                subtitle="Comment se déroule une prise en charge coordonnée à la MSP L'Oppidum."
            />

            <article className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
                <div className="space-y-6">
                    {/* Réponse directe en tête de page. */}
                    <p className="text-lg leading-relaxed text-foreground">
                        À la MSP L&apos;Oppidum, votre prise en charge repose sur un médecin
                        traitant déclaré, qui suit votre dossier et vous oriente vers les autres
                        professionnels de la maison de santé quand c&apos;est nécessaire. Cette
                        coordination est ce qui distingue une maison de santé d&apos;une
                        juxtaposition de cabinets indépendants.
                    </p>

                    <h2 className="pt-4 text-2xl font-semibold text-foreground">
                        Qu&apos;est-ce qu&apos;un parcours de soin coordonné ?
                    </h2>

                    <p className="leading-relaxed text-muted-foreground">
                        Le parcours de soin coordonné est le cadre défini par l&apos;Assurance
                        Maladie. Il repose sur un principe simple : un professionnel de référence,
                        le <strong>médecin traitant</strong>, connaît votre situation dans son
                        ensemble et centralise les informations. C&apos;est lui qui vous adresse à
                        un spécialiste, prescrit un examen ou fait appel à un autre professionnel
                        de la MSP.
                    </p>

                    <p className="leading-relaxed text-muted-foreground">
                        Ce cadre a une conséquence pratique directe : consulter en dehors du
                        parcours de soin, sans passer par son médecin traitant, réduit le
                        remboursement de la consultation. Déclarer un médecin traitant est donc
                        autant un choix de suivi qu&apos;un choix financier.
                    </p>

                    <h2 className="pt-4 text-2xl font-semibold text-foreground">
                        Comment déclarer un médecin traitant ?
                    </h2>

                    <p className="leading-relaxed text-muted-foreground">
                        La déclaration se fait de deux façons. Le plus simple : en parler lors
                        d&apos;une consultation. Le médecin remplit avec vous le formulaire de
                        déclaration de choix du médecin traitant et le transmet à
                        l&apos;Assurance Maladie. Vous pouvez également effectuer la démarche
                        vous-même depuis votre compte ameli.
                    </p>

                    <ul className="space-y-2 pl-5 text-muted-foreground [&>li]:list-disc">
                        <li>La démarche est gratuite et ne prend que quelques minutes.</li>
                        <li>
                            Elle n&apos;engage sur aucune durée : vous pouvez changer de médecin
                            traitant à tout moment, sans justification.
                        </li>
                        <li>
                            Un seul médecin traitant est déclaré à la fois, pour chaque membre du
                            foyer de plus de 16 ans.
                        </li>
                    </ul>

                    <div className="rounded-xl border border-border bg-card p-6">
                        <p className="mb-4 font-medium text-foreground">
                            Trois médecins généralistes exercent à la MSP, sur deux sites.
                        </p>
                        <Button asChild>
                            <Link href="/specialistes">
                                Voir nos professionnels de santé
                            </Link>
                        </Button>
                    </div>

                    <h2 className="pt-4 text-2xl font-semibold text-foreground">
                        Et sans médecin traitant déclaré ?
                    </h2>

                    <p className="leading-relaxed text-muted-foreground">
                        Vous restez pris en charge. Les infirmières, kinésithérapeutes,
                        orthophonistes, sage-femme et pédicure-podologue de la MSP interviennent
                        sur prescription, quel que soit le médecin qui vous suit. La déclaration
                        ne concerne que le médecin généraliste.
                    </p>

                    <p className="leading-relaxed text-muted-foreground">
                        Le détail de chaque profession, les motifs de consultation les plus
                        courants et les modalités d&apos;accès sont récapitulés sur la page{" "}
                        <Link
                            href="/specialistes"
                            className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
                        >
                            nos professionnels de santé
                        </Link>
                        .
                    </p>

                    <h2 className="pt-4 text-2xl font-semibold text-foreground">
                        Un besoin de soin qui ne peut pas attendre
                    </h2>

                    <div className="space-y-4 rounded-xl border border-destructive/30 bg-destructive/5 p-6">
                        <p className="flex items-start gap-3 font-medium text-foreground">
                            <AlertTriangle
                                className="mt-0.5 h-5 w-5 shrink-0 text-destructive"
                                aria-hidden
                            />
                            <span>
                                En cas d&apos;urgence vitale, appelez le{" "}
                                <a href="tel:15" className="underline underline-offset-2">
                                    15
                                </a>
                                .
                            </span>
                        </p>

                        <p className="leading-relaxed text-muted-foreground">
                            En dehors des heures d&apos;ouverture des cabinets, pour un besoin qui
                            ne relève pas de l&apos;urgence vitale mais ne peut pas attendre,
                            appelez le{" "}
                            <a
                                href="tel:116117"
                                className="font-medium text-foreground underline underline-offset-2"
                            >
                                116 117
                            </a>{" "}
                            : c&apos;est le numéro national de la permanence des soins, qui vous
                            oriente vers le médecin de garde du secteur.
                        </p>

                        {phone && (
                            <p className="leading-relaxed text-muted-foreground">
                                Aux heures d&apos;ouverture, appelez directement le cabinet
                                médical au{" "}
                                <a
                                    href={getTelHref(phone)}
                                    className="inline-flex items-center gap-1.5 font-medium text-foreground underline underline-offset-2"
                                >
                                    <Phone className="h-3.5 w-3.5" aria-hidden />
                                    {phone}
                                </a>
                                .
                            </p>
                        )}
                    </div>

                    <h2 className="pt-4 text-2xl font-semibold text-foreground">
                        Ce que la coordination change concrètement
                    </h2>

                    <p className="leading-relaxed text-muted-foreground">
                        Travailler en maison de santé pluriprofessionnelle veut dire que les
                        professionnels qui vous suivent se parlent. Un kinésithérapeute peut
                        signaler une difficulté au médecin traitant ; une infirmière peut alerter
                        sur une évolution constatée à domicile ; la sage-femme et le médecin
                        peuvent se répartir le suivi d&apos;une grossesse.
                    </p>

                    <p className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 leading-relaxed text-muted-foreground">
                        <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                        <span>
                            Pour vous, cela se traduit surtout par une chose : ne pas avoir à
                            raconter votre histoire médicale depuis le début à chaque nouveau
                            rendez-vous.
                        </span>
                    </p>
                </div>
            </article>

            <LandingFAQ
                items={faqItems}
                title="Questions fréquentes sur le parcours de soin"
                sectionId="faq-parcours"
                schemaId="ld-faq-parcours"
            />
        </main>
    );
}
