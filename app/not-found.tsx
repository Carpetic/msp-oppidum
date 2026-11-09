import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getTelHref, locationData } from "@/app/data/location";

const PAGES = [
    { href: "/specialistes", label: "Tous nos professionnels de santé" },
    { href: "/parcours-de-soin", label: "Parcours de soin et médecin traitant" },
    { href: "/evenements", label: "Nos actions de prévention" },
    { href: "/mentions-legales", label: "Mentions légales" },
];

export const metadata: Metadata = {
    title: "Page introuvable",
    robots: { index: false, follow: true },
};

/**
 * 404 maison.
 *
 * La page par défaut de Next est en anglais et n'offre aucune sortie : sur un
 * site de santé, une impasse en anglais est le pire endroit où laisser un
 * visiteur qui cherchait un numéro de téléphone.
 */
export default function NotFound() {
    const { phone } = locationData;

    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto max-w-3xl px-4 py-20 md:py-28">
                <p className="text-sm font-medium uppercase tracking-wide text-primary">
                    Erreur 404
                </p>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Cette page n&apos;existe pas
                </h1>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    L&apos;adresse demandée est peut-être ancienne, ou comporte une faute de
                    frappe. Voici les pages les plus consultées du site.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg">
                        <Link href="/specialistes">Nos professionnels de santé</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/">Retour à l&apos;accueil</Link>
                    </Button>
                </div>

                {phone && (
                    <p className="mt-8 text-muted-foreground">
                        Besoin de joindre la maison de santé ?{" "}
                        <a
                            href={getTelHref(phone)}
                            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
                        >
                            <Phone className="h-4 w-4" aria-hidden />
                            {phone}
                        </a>
                    </p>
                )}

                <section className="mt-12 border-t border-border pt-8" aria-labelledby="acces-rapide">
                    <h2 id="acces-rapide" className="text-lg font-semibold text-foreground">
                        Aller directement à
                    </h2>

                    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {PAGES.map((page) => (
                            <li key={page.href}>
                                <Link
                                    href={page.href}
                                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {page.label}
                                    <ArrowRight
                                        className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-0.5"
                                        aria-hidden
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
