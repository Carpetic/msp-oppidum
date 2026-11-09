"use client";

import { useMemo, useState } from "react";

import { COMMUNES } from "@/app/data/location";
import { METIERS } from "@/app/data/specialistes";
import { CabinetCard } from "@/components/CabinetCard";
import { cn } from "@/lib/utils";
import { getCabinetsByCommune, getMetierByKey } from "@/lib/metiers";

const TOUS_LES_METIERS = "Tous";
const TOUTES_LES_VILLES = "Toutes";

export function SpecialistesClient() {
    const [metierFiltre, setMetierFiltre] = useState<string>(TOUS_LES_METIERS);
    const [villeFiltre, setVilleFiltre] = useState<string>(TOUTES_LES_VILLES);

    const communeGroups = useMemo(() => {
        const metier =
            metierFiltre === TOUS_LES_METIERS
                ? undefined
                : getMetierByKey(metierFiltre);

        return getCabinetsByCommune(metier).filter(
            ({ commune }) =>
                villeFiltre === TOUTES_LES_VILLES || commune === villeFiltre
        );
    }, [metierFiltre, villeFiltre]);

    const resetFiltres = () => {
        setMetierFiltre(TOUS_LES_METIERS);
        setVilleFiltre(TOUTES_LES_VILLES);
    };

    return (
        <>
            <div className="border-b border-border bg-card py-6">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid gap-5">
                        <fieldset>
                            <legend className="mb-2 text-sm font-semibold text-foreground">
                                Ville
                            </legend>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={() => setVilleFiltre(TOUTES_LES_VILLES)}
                                    className={cn(
                                        "min-h-11 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors active:scale-[0.98]",
                                        villeFiltre === TOUTES_LES_VILLES
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md"
                                    )}
                                    aria-pressed={villeFiltre === TOUTES_LES_VILLES}
                                >
                                    Toutes les villes
                                </button>

                                {COMMUNES.map((commune) => (
                                    <button
                                        key={commune.slug}
                                        type="button"
                                        onClick={() => setVilleFiltre(commune.name)}
                                        className={cn(
                                            "min-h-11 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors active:scale-[0.98]",
                                            villeFiltre === commune.name
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md"
                                        )}
                                        aria-pressed={villeFiltre === commune.name}
                                    >
                                        {commune.name}
                                    </button>
                                ))}
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend className="mb-2 text-sm font-semibold text-foreground">
                                Profession
                            </legend>
                            <div className="flex flex-wrap gap-2">
                                {METIERS.map((metier) => (
                                    <button
                                        key={metier}
                                        type="button"
                                        onClick={() => setMetierFiltre(metier)}
                                        className={cn(
                                            "min-h-11 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors active:scale-[0.98]",
                                            metierFiltre === metier
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md"
                                        )}
                                        aria-pressed={metierFiltre === metier}
                                    >
                                        {metier === TOUS_LES_METIERS
                                            ? "Tous les métiers"
                                            : metier}
                                    </button>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            {/* Cabinets regroupés par commune : un h2 par commune, un h3 par
                cabinet. Le regroupement reste stable quel que soit le filtre,
                contrairement à un regroupement par métier. */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                {communeGroups.length === 0 ? (
                    <div className="mx-auto max-w-lg text-center">
                        <p className="font-medium text-foreground">
                            Aucun professionnel ne correspond à ces filtres.
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Essayez une autre ville ou une autre profession.
                        </p>
                        <button
                            type="button"
                            onClick={resetFiltres}
                            className="mt-5 min-h-11 cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98]"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {communeGroups.map(({ commune, groups }) => (
                            <section key={commune} aria-labelledby={`commune-${commune}`}>
                                <div className="mb-6 border-b border-border pb-3">
                                    <h2
                                        id={`commune-${commune}`}
                                        className="text-xl font-bold text-foreground md:text-2xl"
                                    >
                                        Professionnels de santé à {commune}
                                    </h2>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {groups.length}{" "}
                                        {groups.length > 1 ? "cabinets" : "cabinet"}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                    {groups.map(({ cabinet, specialistes }) => (
                                        <CabinetCard
                                            key={cabinet.id}
                                            cabinet={cabinet}
                                            specialistes={specialistes}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
