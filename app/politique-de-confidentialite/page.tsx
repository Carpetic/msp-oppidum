import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getBreadcrumbListSchema } from "@/lib/structured-data";

/**
 * Données du responsable du traitement – à aligner avec les mentions légales.
 */
const RESPONSABLE = {
    nom: "MSP L'Opidum",
    denominationComplete: "MSP L'Opidum (Maison de Santé Pluriprofessionnelle)",
    adresse: "23 place Jules Ferry, 30290 Laudun",
    email: "[Email de contact institutionnel]",
} as const;

export const metadata: Metadata = {
    title: "Politique de confidentialité",
    description:
        "Politique de confidentialité et protection des données du site de la MSP L'Oppidum, conforme au RGPD et à la loi Informatique et Libertés.",
    alternates: { canonical: `${SITE_URL}/politique-de-confidentialite` },
    openGraph: {
        url: `${SITE_URL}/politique-de-confidentialite`,
        title: "Confidentialité à Laudun - MSP L'Oppidum",
        description:
            "Politique de confidentialité et protection des données de la MSP L'Oppidum à Laudun (30290). Consultez les détails.",
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
        title: "Confidentialité à Laudun - MSP L'Oppidum",
        description:
            "Politique de confidentialité et protection des données de la MSP L'Oppidum à Laudun (30290).",
        images: ["/og-image.jpg"],
    },
    robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
    const breadcrumbSchema = getBreadcrumbListSchema([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Politique de confidentialité", url: `${SITE_URL}/politique-de-confidentialite` },
    ]);

    return (
        <main
            className="min-h-screen bg-background"
            role="main"
            aria-label="Contenu principal – Politique de confidentialité"
        >
            <script
                id="ld-breadcrumb-politique-confidentialite"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <article className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
                <header className="mb-14">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
                        Politique de confidentialité
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                        La présente politique de confidentialité définit les conditions dans
                        lesquelles la {RESPONSABLE.denominationComplete}, en qualité de
                        responsable du traitement au sens du Règlement (UE) 2016/679 (RGPD)
                        et de la loi « Informatique et Libertés » du 6 janvier 1978 modifiée,
                        traite les données à caractère personnel dans le cadre de
                        l&apos;utilisation de son site internet. Elle s&apos;applique au site
                        vitrine dont la MSP L&apos;Opidum est l&apos;unique propriétaire et
                        l&apos;éditeur.
                    </p>
                </header>

                <div className="space-y-14 text-base leading-relaxed text-foreground">
                    {/* 1. Responsable du traitement */}
                    <section aria-labelledby="responsable-heading" className="border-b border-border pb-14">
                        <h2
                            id="responsable-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            1. Responsable du traitement
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le responsable du traitement des données à caractère personnel
                            susceptibles d&apos;être traitées dans le cadre de l&apos;utilisation
                            du présent site est :
                        </p>
                        <ul className="list-inside list-disc space-y-2 pl-2 text-muted-foreground">
                            <li>
                                <strong className="text-foreground">Dénomination :</strong>{" "}
                                {RESPONSABLE.denominationComplete}
                            </li>
                            <li>
                                <strong className="text-foreground">Siège :</strong>{" "}
                                {RESPONSABLE.adresse}
                            </li>
                            <li>
                                <strong className="text-foreground">Courriel :</strong>{" "}
                                <a
                                    href={`mailto:${RESPONSABLE.email}`}
                                    className="text-primary underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                                >
                                    {RESPONSABLE.email}
                                </a>
                            </li>
                        </ul>
                        <p className="mt-4 text-muted-foreground">
                            Pour toute question relative à la protection de vos données ou à
                            l&apos;exercice de vos droits, vous pouvez contacter le responsable
                            du traitement aux coordonnées ci-dessus.
                        </p>
                    </section>

                    {/* 2. Absence de collecte volontaire */}
                    <section aria-labelledby="absence-collecte-heading" className="border-b border-border pb-14">
                        <h2
                            id="absence-collecte-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            2. Nature du site et absence de collecte volontaire
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le présent site constitue un site vitrine purement informatif.
                            À ce titre, le responsable du traitement ne met en œuvre
                            aucun traitement de données à caractère personnel à des fins
                            de collecte directe ou de profilage.
                        </p>
                        <p className="mb-4 text-muted-foreground">
                            En particulier, le site ne propose aucun formulaire de contact,
                            ne permet aucune création de compte, ne comporte aucun espace
                            patient et ne collecte aucune donnée de santé. Aucun outil
                            d&apos;analyse d&apos;audience (tels que Google Analytics ou
                            équivalent), aucun cookie marketing ni aucune base de données
                            n&apos;est exploité par le responsable du traitement. Aucun
                            profilage n&apos;est effectué.
                        </p>
                        <p className="text-muted-foreground">
                            Aucune donnée à caractère personnel n&apos;est donc stockée
                            volontairement par la MSP au titre du fonctionnement de ce
                            site. Les traitements éventuels décrits ci-après sont limités
                            aux données techniques susceptibles d&apos;être générées par
                            l&apos;infrastructure (hébergement, affichage de contenus tiers)
                            et ne relèvent pas d&apos;une collecte organisée par le
                            responsable du traitement.
                        </p>
                    </section>

                    {/* 3. Données techniques éventuelles (logs serveur) */}
                    <section aria-labelledby="donnees-techniques-heading" className="border-b border-border pb-14">
                        <h2
                            id="donnees-techniques-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            3. Données techniques éventuelles (logs serveur)
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Dans le cadre de l&apos;hébergement et de la mise à disposition
                            du site, l&apos;infrastructure technique (hébergeur et, le cas
                            échéant, services tiers) peut générer des logs techniques
                            standards : adresse IP, date et heure de requête, type de
                            navigateur, URL consultée, code de statut de la réponse. Ces
                            données sont susceptibles de constituer des données à
                            caractère personnel au sens du RGPD.
                        </p>
                        <p className="text-muted-foreground">
                            Le responsable du traitement ne met en œuvre aucune base de
                            données et ne procède à aucune conservation volontaire de ces
                            données. Lorsque de tels logs existent, ils relèvent de la
                            responsabilité de l&apos;hébergeur ou des prestataires techniques
                            concernés, dans le cadre de leurs conditions générales et de
                            leurs propres politiques de confidentialité. La durée de
                            conservation et les finalités sont déterminées par ces
                            acteurs.
                        </p>
                    </section>

                    {/* 4. Base légale */}
                    <section aria-labelledby="base-legale-heading" className="border-b border-border pb-14">
                        <h2
                            id="base-legale-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            4. Base légale
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Dans la mesure où le site ne met en œuvre aucun traitement de
                            données à caractère personnel initié par le responsable du
                            traitement (absence de formulaire, de compte, d&apos;analyse
                            d&apos;audience, de cookie soumis à consentement), aucune base
                            légale au sens de l&apos;article 6 du RGPD n&apos;est mobilisée
                            par la MSP pour des traitements propres au site.
                        </p>
                        <p className="text-muted-foreground">
                            Pour les traitements techniques éventuellement réalisés par
                            l&apos;hébergeur ou des tiers (logs, affichage de la carte), la
                            base légale et les finalités sont définies par ces acteurs,
                            conformément au RGPD et à la loi « Informatique et Libertés ».
                        </p>
                    </section>

                    {/* 5. Absence de transfert organisé */}
                    <section aria-labelledby="transfert-heading" className="border-b border-border pb-14">
                        <h2
                            id="transfert-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            5. Destinataires et transferts de données
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le responsable du traitement ne procède à aucun transfert
                            organisé de données à caractère personnel dans le cadre du
                            présent site, dès lors qu&apos;aucune donnée n&apos;est collectée
                            ni stockée volontairement par la MSP.
                        </p>
                        <p className="text-muted-foreground">
                            L&apos;hébergement du site est assuré par un prestataire dont les
                            serveurs peuvent être situés au sein de l&apos;Union européenne
                            ou en dehors de celle-ci. Les éventuels traitements effectués
                            par l&apos;hébergeur (logs techniques) relèvent de sa
                            responsabilité et de ses engagements contractuels et
                            réglementaires. En cas de transfert hors UE, les garanties
                            prévues par le RGPD (décision d&apos;adéquation, clauses
                            contractuelles types, garanties appropriées) s&apos;appliquent
                            conformément aux dispositions en vigueur.
                        </p>
                    </section>

                    {/* 6. Carte interactive (tuiles) */}
                    <section aria-labelledby="carte-heading" className="border-b border-border pb-14">
                        <h2
                            id="carte-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            6. Carte interactive (Leaflet / OpenStreetMap)
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le site utilise les bibliothèques Leaflet et les données
                            OpenStreetMap afin d&apos;afficher un point géographique à titre
                            informatif. Cette fonctionnalité ne vise aucun traçage
                            spécifique des utilisateurs et ne collecte aucune donnée à
                            caractère personnel de manière volontaire pour le compte du
                            responsable du traitement.
                        </p>
                        <p className="text-muted-foreground">
                            Les fournisseurs de tuiles cartographiques peuvent enregistrer
                            des logs techniques standards (notamment l&apos;adresse IP) dans
                            le cadre de leur propre fonctionnement. Ces traitements
                            relèvent de la responsabilité exclusive de ces services tiers.
                            Leur politique de confidentialité et leurs conditions
                            d&apos;utilisation s&apos;appliquent à ces traitements.
                        </p>
                    </section>

                    {/* 7. Droits des utilisateurs */}
                    <section aria-labelledby="droits-heading" className="border-b border-border pb-14">
                        <h2
                            id="droits-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            7. Droits des utilisateurs
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi «
                            Informatique et Libertés » du 6 janvier 1978 modifiée, toute
                            personne dispose des droits suivants sur ses données à
                            caractère personnel : droit d&apos;accès, droit de
                            rectification, droit à l&apos;effacement, droit à la limitation
                            du traitement, droit à la portabilité (dans les conditions
                            prévues par le RGPD), droit d&apos;opposition, et droit de ne
                            pas faire l&apos;objet d&apos;une décision fondée exclusivement
                            sur un traitement automatisé. Elle dispose également du droit
                            d&apos;introduire une réclamation auprès de la Commission
                            nationale de l&apos;informatique et des libertés (CNIL).
                        </p>
                        <p className="mb-4 text-muted-foreground">
                            Dans le cadre du présent site, le responsable du traitement
                            ne met en œuvre aucun traitement de données à caractère
                            personnel propre. Pour toute demande relative à des données
                            susceptibles d&apos;être traitées par l&apos;hébergeur ou par
                            des services tiers (carte, tuiles), l&apos;utilisateur peut
                            s&apos;adresser au responsable du traitement aux coordonnées
                            indiquées au paragraphe 1 ; le responsable du traitement
                            pourra orienter l&apos;utilisateur vers les acteurs concernés
                            selon le cas.
                        </p>
                        <p className="text-muted-foreground">
                            Pour exercer vos droits ou pour toute question : adressez votre
                            demande par courriel à{" "}
                            <a
                                href={`mailto:${RESPONSABLE.email}`}
                                className="text-primary underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                            >
                                {RESPONSABLE.email}
                            </a>{" "}
                            ou par courrier à l&apos;adresse du responsable du traitement.
                            Vous disposez du droit d&apos;introduire une réclamation auprès
                            de la CNIL :{" "}
                            <a
                                href="https://www.cnil.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                            >
                                www.cnil.fr
                            </a>
                            .
                        </p>
                    </section>

                    {/* 8. Cookies */}
                    <section aria-labelledby="cookies-heading" className="border-b border-border pb-14">
                        <h2
                            id="cookies-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            8. Cookies et traceurs
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le site ne dépose aucun cookie soumis au consentement préalable
                            au sens de l&apos;article 82 de la loi « Informatique et
                            Libertés ». Aucun cookie marketing, aucun cookie de mesure
                            d&apos;audience ni aucun cookie de ciblage n&apos;est mis en
                            œuvre par le responsable du traitement.
                        </p>
                        <p className="text-muted-foreground">
                            Les éventuels cookies strictement techniques nécessaires au
                            fonctionnement du site ou déposés par des services tiers
                            (affichage de la carte, fournisseurs de tuiles) relèvent des
                            politiques de ces tiers. Vous pouvez à tout moment configurer
                            votre navigateur pour refuser les cookies ou être informé de
                            leur dépôt ; le refus de certains cookies peut affecter
                            l&apos;affichage de contenus tiers.
                        </p>
                    </section>

                    {/* 9. Sécurité */}
                    <section aria-labelledby="securite-heading" className="border-b border-border pb-14">
                        <h2
                            id="securite-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            9. Sécurité
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le responsable du traitement veille à ce que le site soit
                            exploité dans des conditions de sécurité conformes aux usages
                            et à la réglementation. Compte tenu de l&apos;absence de
                            collecte et de stockage volontaire de données à caractère
                            personnel par la MSP, les risques associés au traitement de
                            telles données sur ce site sont limités.
                        </p>
                        <p className="text-muted-foreground">
                            Les échanges avec le site peuvent être sécurisés (HTTPS). Les
                            traitements techniques éventuellement réalisés par
                            l&apos;hébergeur ou par des tiers sont soumis aux mesures de
                            sécurité et aux politiques de ces acteurs. En cas de violation
                            de données à caractère personnel susceptible d&apos;engendrer un
                            risque pour les droits et libertés des personnes, le
                            responsable du traitement s&apos;engage à respecter les
                            obligations de notification et d&apos;information prévues par le
                            RGPD.
                        </p>
                    </section>

                    {/* 10. Modification de la politique */}
                    <section aria-labelledby="modification-heading">
                        <h2
                            id="modification-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            10. Modification de la politique
                        </h2>
                        <p className="text-muted-foreground">
                            La présente politique de confidentialité peut être modifiée à
                            tout moment pour refléter les évolutions du site, des
                            pratiques du responsable du traitement ou de la
                            réglementation applicable. La date de dernière mise à jour est
                            indiquée en fin de document. Il est recommandé de consulter
                            régulièrement cette page. La poursuite de la navigation sur le
                            site après publication d&apos;une modification vaut acceptation
                            des nouvelles dispositions, dans la mesure permise par le
                            droit applicable.
                        </p>
                    </section>
                </div>

                <footer className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
                    <p>
                        Dernière mise à jour : mars 2026. Cette politique peut être
                        modifiée pour refléter les évolutions du site ou de la
                        réglementation.
                    </p>
                    <p className="mt-3">
                        <Link
                            href="/mentions-legales"
                            className="text-primary underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                        >
                            Retour aux mentions légales
                        </Link>
                        .
                    </p>
                </footer>
            </article>
        </main>
    );
}
