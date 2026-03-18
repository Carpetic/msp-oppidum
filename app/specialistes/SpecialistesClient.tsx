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

export function SpecialistesClient() {
    const [metierFiltre, setMetierFiltre] = useState<string>("Tous");

    const specialistesFiltres = useMemo(
        () => filterByMetier(specialistes, metierFiltre),
        [metierFiltre]
    );

    return (
        <>
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
                                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer active:scale-[0.99]",
                                    metierFiltre === metier
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md"
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
                                <SpecialisteCard
                                    key={specialiste.id}
                                    specialiste={specialiste}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

