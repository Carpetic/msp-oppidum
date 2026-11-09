import { ClipboardList } from "lucide-react";

import { countSpecialistes, formatList, getCommunesForMetier, getMetiersDeSoin } from "@/lib/metiers";

/** Première lettre en capitale, sans toucher au reste (« Sage-femme »). */
function capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Présentation des métiers de soin de la MSP.
 *
 * Rendu côté serveur et toujours présent dans le HTML, contrairement au filtre
 * juste au-dessus qui, lui, ne dit que « qui, et où ». Ici on répond à l'autre
 * question du visiteur : quel professionnel pour quel motif, et faut-il une
 * ordonnance.
 */
export function MetiersOverview() {
    const metiers = getMetiersDeSoin();

    return (
        <section
            className="border-t border-border bg-muted/40 py-12 md:py-16"
            aria-labelledby="metiers"
        >
            <div className="container mx-auto px-4">
                <div className="mb-8 max-w-3xl">
                    <h2
                        id="metiers"
                        className="text-2xl font-bold text-foreground md:text-3xl"
                    >
                        Quel professionnel pour quel besoin ?
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                        Les {metiers.length} professions de santé représentées dans la maison de
                        santé, ce qu&apos;elles prennent en charge et les modalités d&apos;accès.
                        Si vous hésitez, votre médecin traitant vous orientera.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                    {metiers.map((metier) => {
                        const total = countSpecialistes(metier);
                        const communes = getCommunesForMetier(metier);

                        return (
                            <article
                                key={metier.slug}
                                id={metier.slug}
                                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
                            >
                                <header>
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {capitalize(total > 1 ? metier.pluriel : metier.singulier)}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {total} {total > 1 ? "professionnels" : "professionnel"} à{" "}
                                        {formatList(communes)}
                                    </p>
                                </header>

                                {metier.intro && (
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {metier.intro}
                                    </p>
                                )}

                                {metier.motifs && (
                                    <div>
                                        <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
                                            <ClipboardList
                                                className="h-3.5 w-3.5 shrink-0 text-primary"
                                                aria-hidden
                                            />
                                            Motifs les plus courants
                                        </h4>
                                        <ul className="flex flex-wrap gap-1.5">
                                            {metier.motifs.map((motif) => (
                                                <li
                                                    key={motif}
                                                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                                                >
                                                    {motif}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {metier.acces && (
                                    <p className="mt-auto border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                                        <strong className="font-semibold text-foreground">
                                            Accès :
                                        </strong>{" "}
                                        {metier.acces}
                                    </p>
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
