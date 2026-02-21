"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Specialiste } from "@/app/data/specialistes";
import { cn } from "@/lib/utils";

interface SpecialisteCardProps {
    specialiste: Specialiste;
    className?: string;
}

/** Taille de l'avatar (photo ou icône) à gauche du nom */
const AVATAR_SIZE = 50;

/**
 * Carte d'affichage d'un professionnel de santé.
 * Petit avatar 50x50 ou icône utilisateur (User) à gauche du nom, coordonnées, bouton Doctolib et bio courte.
 */
export function SpecialisteCard({ specialiste, className }: SpecialisteCardProps) {
    const { nom, prenom, metier, specialite, photo, telephone, doctolib, adresse, bio } =
        specialiste;
    const hasPhoto = Boolean(photo?.trim());

    return (
        <article
            className={cn(
                "flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-200 hover:shadow-md",
                className
            )}
        >
            <div className="flex flex-1 flex-col p-5">
                {/* Avatar (50x50) ou icône Person + Nom et métier */}
                <div className="flex items-center gap-3">
                    <div
                        className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground"
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
                    <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold text-foreground">
                            {prenom} {nom}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-primary">
                            {metier}
                            {specialite ? ` · ${specialite}` : ""}
                        </p>
                    </div>
                </div>

                {/* Coordonnées */}
                <div className="mt-4 space-y-2">
                    {telephone && (
                        <a
                            href={`tel:${telephone.replace(/\s/g, "")}`}
                            className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
                        >
                            <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <span>{telephone}</span>
                        </a>
                    )}
                    {doctolib && (
                        <Link
                            href={doctolib}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                            >
                                <Calendar className="h-4 w-4" />
                                Prendre RDV sur Doctolib
                            </Button>
                        </Link>
                    )}
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{adresse}</span>
                    </div>
                </div>

                {/* Bio courte */}
                {bio && (
                    <p className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                        {bio}
                    </p>
                )}
            </div>
        </article>
    );
}
