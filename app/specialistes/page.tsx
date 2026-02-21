"use client";

import { useMemo, useState } from "react";
import { specialistes, METIERS, type Specialiste } from "@/app/data/specialistes";
import { SpecialisteCard } from "@/components/SpecialisteCard";
import { cn } from "@/lib/utils";

/** Filtre les spécialistes par métier (ou tous si "Tous" est sélectionné). */
function filterByMetier(list: Specialiste[], metier: string): Specialiste[] {
    if (metier === "Tous") return list;
    return list.filter((s) => s.metier === metier);
}

export default function SpecialistesPage() {
    const [metierFiltre, setMetierFiltre] = useState<string>("Tous");

    const specialistesFiltres = useMemo(
        () => filterByMetier(specialistes, metierFiltre),
        [metierFiltre]
    );

    return (
        <main className="min-h-screen bg-background">
            {/* En-tête de page */}
            <header className="border-b border-border bg-muted/30 py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                            Nos Professionnels de Santé
                        </h1>
                        <p className="mt-4 text-muted-foreground text-lg">
                            L&apos;équipe pluriprofessionnelle de la MSP L&apos;Oppidum vous accompagne
                            au quotidien. Découvrez les professionnels qui composent notre
                            maison de santé.
                        </p>
                    </div>
                </div>
            </header>

            {/* Filtres par métier */}
            <div className="border-b border-border bg-card py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {METIERS.map((metier) => (
                            <button
                                key={metier}
                                type="button"
                                onClick={() => setMetierFiltre(metier)}
                                className={cn(
                                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
                                    metierFiltre === metier
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                )}
                                aria-pressed={metierFiltre === metier}
                                aria-label={`Filtrer par ${metier}`}
                            >
                                {metier}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grille de cartes */}
            <section className="py-12 md:py-16" aria-label="Liste des professionnels">
                <div className="container mx-auto px-4">
                    {specialistesFiltres.length === 0 ? (
                        <p className="text-center text-muted-foreground">
                            Aucun professionnel pour ce critère.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {specialistesFiltres.map((specialiste) => (
                                <SpecialisteCard key={specialiste.id} specialiste={specialiste} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
