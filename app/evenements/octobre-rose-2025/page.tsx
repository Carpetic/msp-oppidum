import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getBreadcrumbListSchema, getFaqPageSchema, getArticleSchema } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const EVENT_DATE = "2025-10-17";
const EVENT_TITLE = "Octobre Rose 2025 - Journée de sensibilisation au dépistage";
const EVENT_DESCRIPTION =
    "Le 17 octobre 2025, la MSP L'Oppidum a organisé une journée Octobre Rose avec un atelier d'auto-palpation animé par notre sage-femme Malaury et les professionnels de santé du territoire.";

export const metadata: Metadata = {
    title: EVENT_TITLE,
    description: EVENT_DESCRIPTION,
    openGraph: {
        url: `${SITE_URL}/evenements/octobre-rose-2025`,
        title: `${EVENT_TITLE} - ${SITE_NAME}`,
        description: EVENT_DESCRIPTION,
        siteName: SITE_NAME,
        locale: "fr_FR",
        type: "article",
        publishedTime: EVENT_DATE,
        images: [
            {
                url: "/evenement/octobre-rose.webp",
                width: 1200,
                height: 630,
                alt: "Octobre Rose 2025 - MSP L'Oppidum",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${EVENT_TITLE} - ${SITE_NAME}`,
        description: EVENT_DESCRIPTION,
        images: ["/evenement/octobre-rose.webp"],
    },
    alternates: { canonical: `${SITE_URL}/evenements/octobre-rose-2025` },
    robots: { index: true, follow: true },
};

const faqItems = [
    {
        question: "Qu'est-ce qu'Octobre Rose ?",
        answer: "Octobre Rose est une campagne annuelle mondiale de sensibilisation au dépistage du cancer du sein, organisée chaque mois d'octobre depuis 1985. Le ruban rose en est le symbole international. Cette campagne vise à informer et encourager les femmes à réaliser un dépistage régulier.",
    },
    {
        question: "Pourquoi le dépistage du cancer du sein est-il important ?",
        answer: "Détecté tôt, le cancer du sein se guérit dans 9 cas sur 10. Le dépistage précoce augmente considérablement les chances de guérison et permet des traitements moins lourds. C'est pourquoi il est essentiel de réaliser un suivi régulier et de participer au dépistage organisé.",
    },
    {
        question: "Qu'est-ce que l'auto-palpation mammaire ?",
        answer: "L'auto-palpation est un geste simple d'auto-examen des seins à réaliser régulièrement, permettant de détecter d'éventuelles anomalies (grosseur, modification de la peau, écoulement). Elle complète le suivi médical et la mammographie, mais ne les remplace pas.",
    },
    {
        question: "Qui peut participer au dépistage organisé ?",
        answer: "Le dépistage organisé est proposé gratuitement aux femmes de 50 à 74 ans, tous les 2 ans. En dehors de cette tranche d'âge, un suivi personnalisé est recommandé avec son médecin ou sa sage-femme selon les facteurs de risque individuels.",
    },
];

export default function OctobreRose2025Page() {
    const breadcrumbSchema = getBreadcrumbListSchema([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Événements", url: `${SITE_URL}/evenements/octobre-rose-2025` },
        { name: "Octobre Rose 2025", url: `${SITE_URL}/evenements/octobre-rose-2025` },
    ]);

    const articleSchema = getArticleSchema({
        title: EVENT_TITLE,
        description: EVENT_DESCRIPTION,
        url: `${SITE_URL}/evenements/octobre-rose-2025`,
        imageUrl: `${SITE_URL}/evenement/octobre-rose.webp`,
        datePublished: EVENT_DATE,
    });
    const faqSchema = getFaqPageSchema(faqItems);

    return (
        <main className="min-h-screen bg-linear-to-b from-background to-muted" role="main">
            <script
                id="ld-breadcrumb-octobre-rose"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                id="ld-article-octobre-rose"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                id="ld-faq-octobre-rose"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <header
                className="border-b border-pink-200 py-12 md:py-16"
                style={{
                    background: "linear-gradient(135deg, #ec4899 0%, #db2777 50%, #be185d 100%)",
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-pink-100 text-sm font-medium tracking-wide uppercase mb-3">
                            Événement du 17 octobre 2025
                        </p>
                        <h1 className="text-3xl font-bold text-white md:text-4xl drop-shadow-sm">
                            Octobre Rose 2025
                        </h1>
                        <p className="mt-4 text-white/90 text-lg drop-shadow-sm">
                            Journée de sensibilisation au dépistage du cancer du sein
                        </p>
                    </div>
                </div>
            </header>

            <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Retour à l&apos;accueil
                </Link>

                <div className="prose prose-lg max-w-none">
                    <figure className="relative aspect-video w-full overflow-hidden rounded-xl mb-8 shadow-lg">
                        <Image
                            src="/evenement/octobre-rose.webp"
                            alt="Journée Octobre Rose 2025 à la MSP L'Oppidum - Atelier d'auto-palpation"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 896px"
                            priority
                        />
                    </figure>

                    <section className="space-y-6 text-foreground">
                        <h2 className="text-2xl font-semibold text-foreground mt-0">
                            Une journée dédiée à la prévention
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                            À l&apos;occasion de la campagne <strong>Octobre Rose</strong>, la journée
                            du <strong>17 octobre 2025</strong> s&apos;est inscrite dans une démarche
                            collective de prévention et de promotion de la santé au sein de notre
                            maison de santé.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground">
                            Un atelier d&apos;auto-palpation pour apprendre les bons gestes
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                            Un <strong>atelier d&apos;auto-palpation</strong> a été proposé et animé
                            par <strong>Malaury, notre sage-femme</strong>, en collaboration avec
                            l&apos;ensemble des professionnels de santé du territoire.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            L&apos;auto-palpation est un <strong>geste simple</strong> qui, associé
                            au suivi médical régulier, permet un <strong>diagnostic précoce</strong>{" "}
                            du cancer du sein. Apprendre à connaître son corps est une première étape
                            essentielle dans la démarche de prévention.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground">
                            Informer, rassurer et agir
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                            Cette journée s&apos;est inscrite dans une <strong>démarche collective
                                d&apos;information, d&apos;échange et de sensibilisation</strong> autour
                            du dépistage du cancer du sein.
                        </p>

                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 my-8">
                            <p className="text-pink-900 font-medium text-center text-lg mb-0">
                                Notre objectif : <strong>informer, rassurer et agir</strong> pour la
                                prévention du cancer du sein.
                            </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            Nous remercions toutes les personnes qui ont participé à cet événement
                            et nous restons mobilisés tout au long de l&apos;année pour accompagner
                            nos patients dans leur parcours de santé.
                        </p>
                    </section>
                </div>
            </article>

            <section className="py-12 md:py-16">
                <div className="container mx-auto max-w-4xl px-4">
                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                        Comprendre Octobre Rose
                    </h2>

                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <details
                                key={index}
                                className="group bg-white rounded-lg border border-border shadow-sm"
                            >
                                <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-foreground hover:bg-muted/30 transition-colors rounded-lg">
                                    <span>{item.question}</span>
                                    <span className="ml-4 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
