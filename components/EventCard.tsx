import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Evenement, EvenementAccent } from "@/app/data/evenements";

interface EventCardProps {
    evenement: Evenement;
    /** `h2` sur /evenements, `h3` dans la section de la page d'accueil. */
    headingLevel?: "h2" | "h3";
    /** Charge l'image en priorité : uniquement la première carte de /evenements. */
    priority?: boolean;
    className?: string;
}

/**
 * Classes littérales : Tailwind v4 scanne le texte source, une classe
 * interpolée (`bg-${accent}-100`) ne serait jamais générée.
 */
const ACCENT_STYLES: Record<EvenementAccent, { badge: string; hover: string }> = {
    rose: { badge: "bg-pink-100 text-pink-800", hover: "hover:border-pink-300" },
    bleu: { badge: "bg-blue-100 text-blue-800", hover: "hover:border-blue-300" },
};

export function EventCard({
    evenement,
    headingLevel = "h2",
    priority = false,
    className,
}: EventCardProps) {
    const Heading = headingLevel;
    const accent = ACCENT_STYLES[evenement.accent];

    return (
        <article
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md",
                accent.hover,
                className
            )}
        >
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                    src={evenement.cover}
                    alt={evenement.coverAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={priority}
                />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
                <span
                    className={cn(
                        "inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                        accent.badge
                    )}
                >
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    <time dateTime={evenement.startDate}>{evenement.dateLabel}</time>
                </span>

                <Heading className="text-lg font-semibold text-foreground">
                    <Link
                        href={`/evenements/${evenement.slug}`}
                        className="rounded outline-none after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        {evenement.title}
                    </Link>
                </Heading>

                <p className="text-sm leading-relaxed text-muted-foreground">
                    {evenement.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                    Lire le compte-rendu
                    <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                    />
                </span>
            </div>
        </article>
    );
}
