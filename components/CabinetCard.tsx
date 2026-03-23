"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ExternalLink, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Cabinet, Specialiste } from "@/app/data/specialistes";

interface CabinetCardProps {
    cabinet: Cabinet;
    specialistes: Specialiste[];
    className?: string;
}

const AVATAR_SIZE = 56;

/**
 * Carte d'un cabinet regroupant tous ses professionnels de santé.
 * - Affiche l'adresse et le téléphone du cabinet en priorité.
 * - Affiche les spécialistes en grille horizontale d'avatars.
 * - Affiche le bouton Doctolib par spécialiste si disponible.
 */
export function CabinetCard({ cabinet, specialistes, className }: CabinetCardProps) {
    const displayAdresse = cabinet.adresse;
    const displayTelephone = cabinet.telephone ?? null;

    return (
        <article
            className={cn(
                "flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md",
                className
            )}
        >
            {/* En-tête cabinet */}
            <div className="border-b border-border bg-muted/40 px-6 py-4">
                <h3 className="text-base font-semibold text-foreground">{cabinet.nom}</h3>

                <div className="mt-2 space-y-1">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                        <span>{displayAdresse}</span>
                    </div>

                    {displayTelephone && (
                        <a
                            href={`tel:${displayTelephone.replace(/\s/g, "")}`}
                            className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                        >
                            <Phone className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                            <span>{displayTelephone}</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Corps : grille des spécialistes */}
            <div className="flex flex-1 flex-col gap-6 p-6">
                <div
                    className="grid gap-4"
                    style={{
                        gridTemplateColumns: `repeat(auto-fill, minmax(${AVATAR_SIZE + 56}px, 1fr))`,
                    }}
                >
                    {specialistes.map((s) => (
                        <SpecialisteItem
                            key={s.id}
                            specialiste={s}
                            showTelephone={!displayTelephone}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}

/* ─────────────────────────────────────────
   Sous-composant : un spécialiste dans la grille
───────────────────────────────────────── */

interface SpecialisteItemProps {
    specialiste: Specialiste;
    /** Affiche le téléphone individuel uniquement si le cabinet n'en a pas */
    showTelephone: boolean;
}

function SpecialisteItem({ specialiste, showTelephone }: SpecialisteItemProps) {
    const { prenom, nom, metier, specialite, photo, telephone, doctolib } = specialiste;
    const hasPhoto = Boolean(photo?.trim());

    return (
        <div className="flex flex-col items-center gap-2 text-center">
            {/* Avatar */}
            <div
                className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground ring-2 ring-border"
                style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
            >
                {hasPhoto ? (
                    <Image
                        src={photo!}
                        alt={`Photo de ${prenom} ${nom}`}
                        width={AVATAR_SIZE}
                        height={AVATAR_SIZE}
                        className="size-full object-cover"
                    />
                ) : (
                    <User className="h-6 w-6" aria-hidden />
                )}
            </div>

            {/* Identité */}
            <div className="min-w-0 w-full">
                <p className="text-sm font-semibold text-foreground leading-tight">
                    {prenom} {nom}
                </p>
                <p className="text-xs text-primary font-medium mt-0.5">
                    {metier}
                    {specialite ? ` · ${specialite}` : ""}
                </p>
            </div>

            {/* Téléphone individuel (uniquement si pas de tél cabinet) */}
            {showTelephone && telephone && (
                <a
                    href={`tel:${telephone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                    <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    <span>{telephone}</span>
                </a>
            )}

            {/* Bouton Doctolib */}
            {doctolib && (
                <Link
                    href={doctolib}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button
                        variant="default"
                        size="sm"
                        className="w-full gap-1.5 text-xs"
                        aria-label={`Prendre rendez-vous avec ${prenom} ${nom} sur Doctolib`}
                    >
                        <Calendar className="h-3.5 w-3.5" aria-hidden />
                        Doctolib
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </Button>
                </Link>
            )}
        </div>
    );
}