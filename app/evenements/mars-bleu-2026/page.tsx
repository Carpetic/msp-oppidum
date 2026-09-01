import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    CalendarDays,
    ClipboardCheck,
    Clock,
    Megaphone,
    MessagesSquare,
    PackageCheck,
    MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { getEvenement, getEvenementMetadata, getEvenementUrl } from "@/app/data/evenements";
import {
    getArticleSchema,
    getBreadcrumbListSchema,
    getEventSchema,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";

const evenement = getEvenement("mars-bleu-2026")!;
const EVENT_URL = getEvenementUrl(evenement);
const COVER_URL = `${SITE_URL}${evenement.cover}`;

export const metadata: Metadata = getEvenementMetadata(evenement);

const bilanItems = [
    {
        icon: Megaphone,
        text: "Sensibiliser la population à l'importance du dépistage.",
    },
    {
        icon: PackageCheck,
        text: "Distribuer des kits de dépistage du cancer colorectal.",
    },
    {
        icon: MessagesSquare,
        text: "Expliquer leur utilisation et répondre aux questions du public.",
    },
    {
        icon: ClipboardCheck,
        text: "Recueillir les retours des tests.",
    },
];

const etapesColonChrono = [
    {
        jour: "24 mars",
        titre: "Récupérez votre kit en pharmacie",
        detail: "Explication du test avec le Proxybus de la Ligue contre le cancer.",
    },
    {
        jour: "À domicile",
        titre: "Vous faites le test chez vous",
        detail: "Un prélèvement unique, simple et rapide, à réaliser en toute intimité.",
    },
    {
        jour: "25 mars",
        titre: "Déposez-le en pharmacie jusqu'à 15h30",
        detail: "Ou déposez-le à la Poste.",
    },
];

const pharmacies = [
    { ville: "Laudun", adresse: "132 rue Victor Hugo, 30290 Laudun-l'Ardoise" },
    { ville: "L'Ardoise", adresse: "70 route d'Avignon, 30290 Laudun-l'Ardoise" },
];

const faqItems = [
    {
        question: "Qu'est-ce que Mars Bleu ?",
        answer: "Mars Bleu est la campagne nationale de sensibilisation au dépistage du cancer colorectal, organisée chaque année au mois de mars. Elle mobilise professionnels de santé, pharmaciens, associations et collectivités autour d'un même message : le dépistage précoce sauve des vies.",
    },
    {
        question: "Qui est concerné par le dépistage organisé du cancer colorectal ?",
        answer: "Le dépistage organisé s'adresse aux femmes et aux hommes de 50 à 74 ans, tous les deux ans, en l'absence de symptômes et de facteurs de risque particuliers. Le test est pris en charge à 100 % par l'Assurance Maladie, sans avance de frais.",
    },
    {
        question: "En quoi consiste le test de dépistage ?",
        answer: "Il s'agit d'un test immunologique à réaliser chez soi. Il repose sur un prélèvement unique de selles et recherche la présence de sang non visible à l'œil nu. Le test se fait en quelques minutes et se renvoie au laboratoire à l'aide de l'enveloppe fournie.",
    },
    {
        question: "Où se procurer son kit de dépistage ?",
        answer: "Le kit peut être remis par votre médecin traitant ou par votre pharmacien. Il est également distribué lors des opérations de dépistage comme Côlon Chrono, organisée les 24 et 25 mars 2026 dans les pharmacies de Laudun et de L'Ardoise.",
    },
    {
        question: "Je n'ai aucun symptôme, dois-je quand même me faire dépister ?",
        answer: "Oui. Le cancer colorectal évolue le plus souvent pendant des années sans provoquer le moindre symptôme. C'est précisément l'intérêt du dépistage : détecter la maladie, ou les lésions qui la précèdent, avant l'apparition des premiers signes.",
    },
    {
        question: "Pourquoi le dépistage est-il si important ?",
        answer: "Détecté tôt, le cancer colorectal se guérit dans 9 cas sur 10. Le test permet aussi de repérer des polypes, des lésions bénignes qui peuvent évoluer en cancer et qu'il est possible de retirer avant qu'elles ne deviennent dangereuses.",
    },
    {
        question: "Que se passe-t-il si le test est positif ?",
        answer: "Un test positif ne signifie pas que l'on a un cancer. Il indique la présence de sang dans les selles, dont l'origine doit être recherchée. Une coloscopie est alors proposée en consultation avec un gastro-entérologue afin d'en déterminer la cause.",
    },
];

export default function MarsBleu2026Page() {
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

    // Deux nœuds Event distincts : l'opération en pharmacie et la conférence
    // ne forment pas un événement continu de trois semaines.
    const eventSchemas = [
        getEventSchema({
            name: "Côlon Chrono - dépistage du cancer colorectal en pharmacie",
            description:
                "48h pour faire le dépistage du cancer colorectal : retrait du kit en pharmacie le 24 mars, test réalisé à domicile, puis dépôt du test le 25 mars.",
            url: EVENT_URL,
            imageUrl: COVER_URL,
            startDate: "2026-03-24",
            endDate: "2026-03-25",
            place: {
                name: "Pharmacies de Laudun et de L'Ardoise",
                streetAddress: "132 rue Victor Hugo",
                postalCode: "30290",
                addressLocality: "Laudun-l'Ardoise",
            },
        }),
        getEventSchema({
            name: "Ne faites pas l'autruche ! - Conférence grand public sur le cancer colorectal",
            description:
                "Conférence grand public consacrée à la prévention et au dépistage du cancer colorectal, animée par le Dr Even Philippe, gastro-entérologue.",
            url: EVENT_URL,
            imageUrl: COVER_URL,
            startDate: "2026-04-13T18:30",
            place: {
                name: "Salle Jacques Brel",
                streetAddress: "1565 route de Laudun",
                postalCode: "30290",
                addressLocality: "Laudun-l'Ardoise",
            },
            performerName: "Dr Even Philippe",
        }),
    ];


    return (
        <main className="min-h-screen bg-linear-to-b from-background to-muted" role="main">
            <script
                id="ld-breadcrumb-mars-bleu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                id="ld-article-mars-bleu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                id="ld-event-mars-bleu"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemas) }}
            />

            <header
                className="border-b border-blue-900 py-12 md:py-16"
                style={{
                    background:
                        "linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #1e3a8a 100%)",
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-blue-100 text-sm font-medium tracking-wide uppercase mb-3">
                            {evenement.kicker}
                        </p>
                        <h1 className="text-3xl font-bold text-white md:text-4xl drop-shadow-sm">
                            {evenement.title}
                        </h1>
                        <p className="mt-4 text-white/90 text-lg drop-shadow-sm">
                            {evenement.tagline}
                        </p>
                    </div>
                </div>
            </header>

            <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                <Link
                    href="/evenements"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Tous nos événements
                </Link>

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

                <div className="space-y-6 text-foreground">
                    <h2 className="text-2xl font-semibold text-foreground mt-0">
                        Qu&apos;est-ce que Mars Bleu ?
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        <strong>Mars Bleu</strong> est le mois consacré à la prévention et au
                        dépistage du <strong>cancer colorectal</strong>. Chaque année, cette
                        campagne nationale rappelle l&apos;importance du dépistage auprès des
                        femmes et des hommes de <strong>50 à 74 ans</strong>.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground">
                        Notre mobilisation
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        Dans ce cadre, la <strong>Maison de Santé pluriprofessionnelle
                        l&apos;Oppidum</strong> de Laudun L&apos;Ardoise s&apos;est mobilisée aux
                        côtés des <strong>professionnels de santé du territoire</strong> et de la{" "}
                        <strong>Ligue contre le cancer</strong>. Une action menée en deux temps :
                        des stands en pharmacie, puis une conférence grand public.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground">
                        24 et 25 mars : l&apos;opération Côlon Chrono en pharmacie
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        Les <strong>24 et 25 mars</strong>, des stands ont été installés dans les{" "}
                        <strong>pharmacies de Laudun et de L&apos;Ardoise</strong> pour
                        l&apos;opération <strong>« Côlon Chrono »</strong> : 48 heures pour faire
                        le dépistage du cancer colorectal.
                    </p>

                    <ol className="grid gap-4 sm:grid-cols-3 list-none p-0">
                        {etapesColonChrono.map((etape, index) => (
                            <li
                                key={etape.jour}
                                className="rounded-lg border border-blue-200 bg-blue-50/60 p-5"
                            >
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700">
                                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                                    {etape.jour}
                                </span>
                                <p className="mt-2 font-medium text-foreground">
                                    <span className="text-blue-700">{index + 1}.</span>{" "}
                                    {etape.titre}
                                </p>
                                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                    {etape.detail}
                                </p>
                            </li>
                        ))}
                    </ol>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {pharmacies.map((pharmacie) => (
                            <p
                                key={pharmacie.ville}
                                className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm"
                            >
                                <MapPin
                                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                                    aria-hidden
                                />
                                <span>
                                    <strong className="text-foreground">
                                        Pharmacie de {pharmacie.ville}
                                    </strong>
                                    <br />
                                    <span className="text-muted-foreground">
                                        {pharmacie.adresse}
                                    </span>
                                </span>
                            </p>
                        ))}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 md:items-start">
                        <figure className="m-0">
                            <Image
                                src="/evenement/mars-bleu-2026/stand-pharmacie.webp"
                                alt="Stand Mars Bleu devant la pharmacie de L'Ardoise, avec le kakémono de la Ligue contre le cancer"
                                width={900}
                                height={1600}
                                className="w-full rounded-xl shadow-sm"
                                sizes="(max-width: 768px) 100vw, 430px"
                            />
                            <figcaption className="mt-2 text-sm text-muted-foreground">
                                Le stand installé devant la pharmacie de L&apos;Ardoise.
                            </figcaption>
                        </figure>

                        <figure className="m-0">
                            <Image
                                src="/evenement/mars-bleu-2026/affiche-colon-chrono.webp"
                                alt="Affiche de l'opération Côlon Chrono : 48h pour faire le dépistage du cancer colorectal dans les pharmacies de Laudun et L'Ardoise"
                                width={1000}
                                height={1281}
                                className="w-full rounded-lg border border-border bg-white p-2 shadow-sm"
                                sizes="(max-width: 768px) 100vw, 430px"
                            />
                            <figcaption className="mt-2 text-sm text-muted-foreground">
                                L&apos;affiche de l&apos;opération Côlon Chrono.
                            </figcaption>
                        </figure>
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground">
                        13 avril : la conférence grand public
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        Le <strong>13 avril</strong>, la mobilisation s&apos;est poursuivie avec
                        une <strong>conférence grand public</strong>, animée par le{" "}
                        <strong>Dr Even Philippe, gastro-entérologue</strong>, consacrée à la
                        prévention et au dépistage du cancer colorectal.
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 rounded-lg border border-blue-200 bg-blue-50/60 p-5 text-sm">
                        <span className="inline-flex items-center gap-2 text-blue-900">
                            <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
                            <time dateTime="2026-04-13T18:30">Lundi 13 avril 2026</time>
                        </span>
                        <span className="inline-flex items-center gap-2 text-blue-900">
                            <Clock className="h-4 w-4 shrink-0" aria-hidden />
                            Accueil à partir de 18h30
                        </span>
                        <span className="inline-flex items-center gap-2 text-blue-900">
                            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                            Salle Jacques Brel, 1565 route de Laudun
                        </span>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 md:items-start">
                        <figure className="m-0">
                            <Image
                                src="/evenement/mars-bleu-2026/conference.webp"
                                alt="Le Dr Even Philippe animant la conférence grand public sur le dépistage du cancer colorectal, salle Jacques Brel"
                                width={1600}
                                height={1200}
                                className="w-full rounded-xl shadow-sm"
                                sizes="(max-width: 768px) 100vw, 430px"
                            />
                            <figcaption className="mt-2 text-sm text-muted-foreground">
                                Une salle comble pour la conférence du Dr Even Philippe.
                            </figcaption>
                        </figure>

                        <figure className="m-0">
                            <Image
                                src="/evenement/mars-bleu-2026/affiche-conference.webp"
                                alt="Affiche « Ne faites pas l'autruche ! » annonçant la conférence grand public du 13 avril 2026 salle Jacques Brel"
                                width={1000}
                                height={1369}
                                className="w-full rounded-lg border border-border bg-white p-2 shadow-sm"
                                sizes="(max-width: 768px) 100vw, 430px"
                            />
                            <figcaption className="mt-2 text-sm text-muted-foreground">
                                L&apos;affiche de la conférence, organisée par
                                l&apos;association des professionnels de santé.
                            </figcaption>
                        </figure>
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground">
                        Ce que ces actions ont permis
                    </h2>

                    <ul className="grid gap-3 sm:grid-cols-2 list-none p-0">
                        {bilanItems.map(({ icon: Icon, text }) => (
                            <li
                                key={text}
                                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                            >
                                <Icon
                                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                                    aria-hidden
                                />
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-muted-foreground leading-relaxed">
                        Cette rencontre a été l&apos;occasion d&apos;informer le public de
                        l&apos;intérêt du dépistage précoce et des moyens de prévention.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8 space-y-2 text-center">
                        <p className="text-blue-900 font-medium text-lg mb-0">
                            Dépisté à temps, le cancer colorectal peut être{" "}
                            <strong>évité ou guéri dans de nombreux cas.</strong>
                        </p>
                        <p className="text-blue-900 mb-0">
                            Le dépistage est <strong>simple, rapide</strong> et peut{" "}
                            <strong>sauver des vies</strong>.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground">Le bilan</h2>

                    <p className="text-muted-foreground leading-relaxed">
                        L&apos;action a rencontré un <strong>franc succès</strong>. La
                        mobilisation autour des stands d&apos;information a permis une{" "}
                        <strong>augmentation du nombre de kits de dépistage distribués</strong>, et
                        les <strong>retours enregistrés ont été bien supérieurs</strong> à ceux
                        habituellement constatés les années précédentes.
                    </p>

                    <div className="rounded-xl border border-border bg-card p-6 md:p-8 text-center">
                        <p className="text-lg font-medium text-foreground mb-2">
                            Une question sur le dépistage ?
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Parlez-en à votre médecin traitant ou à votre pharmacien.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Button asChild>
                                <Link href="/specialistes">Nos professionnels de santé</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </article>

            <LandingFAQ
                items={faqItems}
                title="Comprendre Mars Bleu et le dépistage du cancer colorectal"
                sectionId="faq-mars-bleu"
                schemaId="ld-faq-mars-bleu"
            />
        </main>
    );
}
