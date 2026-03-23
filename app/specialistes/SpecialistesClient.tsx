"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { getSpecialistesByCabinet } from "@/lib/specialites";
import { METIERS } from "../data/specialistes";
import { CabinetCard } from "@/components/CabinetCard";

/**
 * Filtre les groupes cabinet/spécialistes selon le métier sélectionné.
 * Un cabinet est conservé s'il contient au moins un spécialiste du métier ciblé.
 */
function filterCabinetsByMetier(
    groups: ReturnType<typeof getSpecialistesByCabinet>,
    metier: string
) {
    if (metier === "Tous") return groups;
    return groups
        .map((group) => ({
            ...group,
            specialistes: group.specialistes.filter((s) => s.metier === metier),
        }))
        .filter((group) => group.specialistes.length > 0);
}

export function SpecialistesClient() {
    const [metierFiltre, setMetierFiltre] = useState<string>("Tous");

    const allGroups = useMemo(() => getSpecialistesByCabinet(), []);

    const groupesFiltres = useMemo(
        () => filterCabinetsByMetier(allGroups, metierFiltre),
        [allGroups, metierFiltre]
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

            {/* Grille de cartes cabinet */}
            <section className="py-12 md:py-16" aria-label="Cabinets et professionnels de santé">
                <div className="container mx-auto px-4">
                    {groupesFiltres.length === 0 ? (
                        <p className="text-center text-muted-foreground">
                            Aucun professionnel pour ce critère.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {groupesFiltres.map(({ cabinet, specialistes }) => (
                                <CabinetCard
                                    key={cabinet.id}
                                    cabinet={cabinet}
                                    specialistes={specialistes}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}