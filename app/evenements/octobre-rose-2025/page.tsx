import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { PageHeader } from "@/components/PageHeader";

import { getBreadcrumbListSchema, getArticleSchema } from "@/lib/structured-data";
import { getEvenement, getEvenementMetadata, getEvenementUrl } from "@/app/data/evenements";
import { SITE_URL } from "@/lib/site";

const evenement = getEvenement("octobre-rose-2025")!;
const EVENT_URL = getEvenementUrl(evenement);
const COVER_URL = `${SITE_URL}${evenement.cover}`;

export const metadata: Metadata = getEvenementMetadata(evenement);

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
        { name: "Événements", url: `${SITE_URL}/evenements` },
        { name: evenement.title, url: EVENT_URL },
    ]);

    const articleSchema = getArticleSchema({
        title: evenement.seoTitle,
        description: evenement.description,
        url: EVENT_URL,
        imageUrl: COVER_URL,
        datePublished: evenement.publishedAt,
    });

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

            <PageHeader
                kicker={evenement.kicker}
                title={evenement.title}
                subtitle={evenement.tagline}
                className="border-pink-200"
                style={{
                    background:
                        "linear-gradient(135deg, #ec4899 0%, #db2777 50%, #be185d 100%)",
                }}
            />

            <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                <Link
                    href="/evenements"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Tous nos événements
                </Link>

                <div>
                    <figure className="relative aspect-video w-full overflow-hidden rounded-xl mb-8 shadow-lg">
                        <Image
                            src={evenement.cover}
                            alt={evenement.coverAlt}
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

            <LandingFAQ
                items={faqItems}
                title="Comprendre Octobre Rose"
                sectionId="faq-octobre-rose"
                schemaId="ld-faq-octobre-rose"
            />
        </main>
    );
}
