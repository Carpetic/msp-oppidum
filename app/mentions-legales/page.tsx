import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getBreadcrumbListSchema } from "@/lib/structured-data";

/**
 * Données de l'éditeur – à compléter avec les informations officielles de la MSP.
 */
const EDITEUR = {
    nom: "MSP L'Opidum",
    denominationComplete: "MSP L'Opidum (Maison de Santé Pluriprofessionnelle)",
    formeJuridique: "[À compléter – ex. : SISA, SCM, association]",
    adresse: "[Adresse complète du siège – numéro, voie, code postal, ville]",
    telephone: "[Téléphone de la MSP]",
    email: "[Email de contact institutionnel]",
    siret: "[SIRET à 14 chiffres]",
    directeurPublication: "[Nom et prénom du directeur de la publication]",
} as const;

const CONCEPTEUR = {
    nom: "Hugo Nini",
    entite: "Hugo Nini (entreprise Hugo Nini)",
} as const;

const HEBERGEUR = {
    raisonSociale: "Vercel Inc.",
    adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
} as const;

export const metadata: Metadata = {
    title: "Mentions légales",
    description:
        "Mentions légales du site de la MSP L'Oppidum : éditeur, hébergeur, propriété intellectuelle, responsabilité et droit applicable.",
    alternates: { canonical: `${SITE_URL}/mentions-legales` },
    openGraph: {
        url: `${SITE_URL}/mentions-legales`,
        title: "Mentions légales à Laudun-l'Ardoise | MSP L'Oppidum",
        description:
            "Mentions légales de la MSP L'Oppidum à Laudun-l'Ardoise (30290). Éditeur, hébergeur et informations juridiques. Consultez les détails.",
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
        title: "Mentions légales à Laudun-l'Ardoise | MSP L'Oppidum",
        description:
            "Mentions légales de la MSP L'Oppidum à Laudun-l'Ardoise (30290). Consultez les détails.",
        images: ["/og-image.jpg"],
    },
    robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
    const breadcrumbSchema = getBreadcrumbListSchema([
        { name: "Accueil", url: `${SITE_URL}/` },
        { name: "Mentions légales", url: `${SITE_URL}/mentions-legales` },
    ]);

    return (
        <main
            className="min-h-screen bg-background"
            role="main"
            aria-label="Contenu principal – Mentions légales"
        >
            <script
                id="ld-breadcrumb-mentions-legales"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <article className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
                <header className="mb-14">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
                        Mentions légales
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                        Conformément aux dispositions des articles 6-III et 19 de la loi
                        n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
                        numérique (LCEN), les présentes mentions légales régissent
                        l&apos;accès et l&apos;utilisation du site internet dont la MSP
                        L&apos;Opidum (Maison de Santé Pluriprofessionnelle) est
                        l&apos;unique propriétaire et l&apos;éditeur responsable.
                    </p>
                </header>

                <div className="space-y-14 text-base leading-relaxed text-foreground">
                    {/* 1. Éditeur du site */}
                    <section aria-labelledby="editeur-heading" className="border-b border-border pb-14">
                        <h2
                            id="editeur-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            1. Éditeur du site
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le présent site est la propriété exclusive de la structure
                            suivante, qui en assure l&apos;édition et la responsabilité du
                            contenu :
                        </p>
                        <ul className="list-inside list-disc space-y-2 pl-2 text-muted-foreground">
                            <li>
                                <strong className="text-foreground">Dénomination :</strong>{" "}
                                {EDITEUR.denominationComplete}
                            </li>
                            <li>
                                <strong className="text-foreground">Forme juridique :</strong>{" "}
                                {EDITEUR.formeJuridique}
                            </li>
                            <li>
                                <strong className="text-foreground">Siège :</strong>{" "}
                                {EDITEUR.adresse}
                            </li>
                            <li>
                                <strong className="text-foreground">Téléphone :</strong>{" "}
                                {EDITEUR.telephone}
                            </li>
                            <li>
                                <strong className="text-foreground">Courriel :</strong>{" "}
                                <a
                                    href={`mailto:${EDITEUR.email}`}
                                    className="text-primary underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                                >
                                    {EDITEUR.email}
                                </a>
                            </li>
                            <li>
                                <strong className="text-foreground">Numéro SIRET :</strong>{" "}
                                {EDITEUR.siret}
                            </li>
                            <li>
                                <strong className="text-foreground">Directeur de la publication :</strong>{" "}
                                {EDITEUR.directeurPublication}
                            </li>
                        </ul>
                    </section>

                    {/* 2. Concepteur technique */}
                    <section aria-labelledby="concepteur-heading" className="border-b border-border pb-14">
                        <h2
                            id="concepteur-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            2. Concepteur technique
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            La conception et le développement techniques du site ont été
                            réalisés par {CONCEPTEUR.entite}.
                        </p>
                        <p className="mb-4 text-muted-foreground">
                            Il est expressément précisé que {CONCEPTEUR.nom} intervient
                            uniquement en qualité de prestataire technique. Il n&apos;est
                            ni responsable du contenu éditorial du site, ni des décisions
                            relatives au traitement des données à caractère personnel,
                            l&apos;éditeur demeurant seul responsable à cet égard.
                        </p>
                    </section>

                    {/* 3. Hébergeur */}
                    <section aria-labelledby="hebergeur-heading" className="border-b border-border pb-14">
                        <h2
                            id="hebergeur-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            3. Hébergeur
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            L&apos;hébergement du site est assuré par l&apos;entité suivante :
                        </p>
                        <ul className="list-inside list-disc space-y-2 pl-2 text-muted-foreground">
                            <li>
                                <strong className="text-foreground">Raison sociale :</strong>{" "}
                                {HEBERGEUR.raisonSociale}
                            </li>
                            <li>
                                <strong className="text-foreground">Adresse du siège :</strong>{" "}
                                {HEBERGEUR.adresse}
                            </li>
                        </ul>
                        <p className="mt-4 text-muted-foreground">
                            Les serveurs utilisés peuvent être situés au sein de
                            l&apos;Union européenne ou en dehors de celle-ci. Le présent
                            site ne recourt à aucune base de données exploitée par
                            l&apos;éditeur ; aucune donnée à caractère personnel n&apos;est
                            stockée volontairement par la MSP au titre du fonctionnement
                            de ce site.
                        </p>
                    </section>

                    {/* 4. Propriété intellectuelle */}
                    <section aria-labelledby="propriete-heading" className="border-b border-border pb-14">
                        <h2
                            id="propriete-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            4. Propriété intellectuelle
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            L&apos;ensemble des éléments constituant le site (textes,
                            graphismes, logiciels, photographies, images, sons, plans,
                            noms, logos, marques, créations et œuvres protégeables, bases
                            de données, structure et mise en forme) ainsi que le site
                            lui-même sont soumis aux dispositions du Code de propriété
                            intellectuelle et appartiennent à l&apos;éditeur ou font
                            l&apos;objet d&apos;une autorisation d&apos;utilisation en bonne
                            et due forme.
                        </p>
                        <p className="text-muted-foreground">
                            Toute reproduction, représentation, modification,
                            publication, adaptation ou exploitation de tout ou partie des
                            éléments du site, quel que soit le moyen ou le procédé
                            utilisé, est interdite sans l&apos;autorisation écrite
                            préalable de l&apos;éditeur. Toute exploitation non autorisée
                            du site ou de l&apos;un quelconque des éléments qu&apos;il
                            contient pourra être poursuivie conformément aux dispositions
                            des articles L. 335-2 et suivants du Code de propriété
                            intellectuelle.
                        </p>
                    </section>

                    {/* 5. Limitation de responsabilité */}
                    <section aria-labelledby="responsabilite-heading" className="border-b border-border pb-14">
                        <h2
                            id="responsabilite-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            5. Limitation de responsabilité
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la
                            mise à jour des informations diffusées sur le site. Toutefois,
                            l&apos;éditeur ne peut garantir l&apos;exactitude, la précision
                            ou l&apos;exhaustivité des informations mises à disposition.
                            Les informations présentes sur le site sont fournies à titre
                            strictement informatif et ne constituent en aucun cas un avis
                            médical, une consultation ou une recommandation de soins.
                        </p>
                        <p className="text-muted-foreground">
                            L&apos;éditeur décline toute responsabilité en cas
                            d&apos;interruption du site, de dysfonctionnement technique, de
                            survenue de bogues, d&apos;inexactitude ou d&apos;omission portant
                            sur les informations disponibles, ou de dommages résultant
                            d&apos;une utilisation frauduleuse par un tiers. Les liens
                            hypertextes renvoyant vers des ressources extérieures au site
                            n&apos;engagent pas la responsabilité de l&apos;éditeur quant au
                            contenu de ces ressources.
                        </p>
                    </section>

                    {/* 6. Absence de collecte de données */}
                    <section aria-labelledby="donnees-heading" className="border-b border-border pb-14">
                        <h2
                            id="donnees-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            6. Données à caractère personnel
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le présent site constitue un site vitrine purement informatif.
                            Il ne propose aucun formulaire de contact, ne permet aucune
                            création de compte, ne comporte aucun espace patient et ne
                            collecte aucune donnée de santé. Aucun outil d&apos;analyse
                            d&apos;audience (tels que Google Analytics), aucun cookie
                            marketing ni aucune base de données n&apos;est mis en œuvre par
                            l&apos;éditeur ; aucun profilage n&apos;est effectué.
                        </p>
                        <p className="text-muted-foreground">
                            Les traitements de données à caractère personnel susceptibles
                            d&apos;être réalisés dans le cadre de l&apos;utilisation du site
                            (notamment données techniques ou logs) sont effectués dans le
                            respect du Règlement (UE) 2016/679 (RGPD) et de la loi «
                            Informatique et Libertés » du 6 janvier 1978 modifiée. Les
                            informations détaillées sont disponibles dans la{" "}
                            <a
                                href="/politique-de-confidentialite"
                                className="text-primary underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                            >
                                Politique de confidentialité
                            </a>
                            .
                        </p>
                    </section>

                    {/* 7. Carte interactive */}
                    <section aria-labelledby="carte-heading" className="border-b border-border pb-14">
                        <h2
                            id="carte-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            7. Carte interactive
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Le site utilise les bibliothèques Leaflet et les données
                            cartographiques OpenStreetMap afin d&apos;afficher un point
                            géographique à titre indicatif. Cette fonctionnalité ne
                            vise aucun traçage spécifique des utilisateurs et ne collecte
                            aucune donnée à caractère personnel de manière volontaire
                            pour le compte de l&apos;éditeur.
                        </p>
                        <p className="text-muted-foreground">
                            Les fournisseurs de tuiles cartographiques peuvent enregistrer
                            des logs techniques standards (notamment l&apos;adresse IP) dans
                            le cadre de leur propre fonctionnement. Ces traitements
                            relèvent de la responsabilité exclusive de ces services tiers
                            et de leurs conditions d&apos;utilisation.
                        </p>
                    </section>

                    {/* 8. Cookies */}
                    <section aria-labelledby="cookies-heading" className="border-b border-border pb-14">
                        <h2
                            id="cookies-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            8. Cookies
                        </h2>
                        <p className="text-muted-foreground">
                            Le site ne dépose aucun cookie soumis au consentement préalable
                            au sens de l&apos;article 82 de la loi « Informatique et
                            Libertés ». Les éventuels cookies strictement techniques
                            nécessaires au fonctionnement du site ou liés à des services
                            tiers (affichage de la carte) sont décrits dans la Politique
                            de confidentialité. Vous pouvez à tout moment configurer votre
                            navigateur pour refuser les cookies ou être informé de leur
                            dépôt.
                        </p>
                    </section>

                    {/* 9. Droit applicable et compétence juridictionnelle */}
                    <section aria-labelledby="droit-heading">
                        <h2
                            id="droit-heading"
                            className="mb-5 text-xl font-semibold tracking-tight text-foreground"
                        >
                            9. Droit applicable et compétence juridictionnelle
                        </h2>
                        <p className="mb-4 text-muted-foreground">
                            Les présentes mentions légales sont régies par le droit
                            français. En cas de litige relatif à l&apos;accès, l&apos;utilisation
                            ou le contenu du site, et après l&apos;échec de toute tentative
                            de recherche d&apos;une solution amiable, les tribunaux français
                            seront seuls compétents pour connaître de ce litige.
                        </p>
                        <p className="text-muted-foreground">
                            Pour toute question relative aux présentes mentions légales,
                            vous pouvez contacter l&apos;éditeur aux coordonnées indiquées
                            au paragraphe « Éditeur du site ».
                        </p>
                    </section>
                </div>

                <footer className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
                    <p>
                        Dernière mise à jour : mars 2025. Document à caractère informatif,
                        susceptible d&apos;évoluer.
                    </p>
                </footer>
            </article>
        </main>
    );
}
