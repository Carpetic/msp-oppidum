import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
    /** Sur-titre affiché au-dessus du titre, en petites capitales. */
    kicker?: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
    /** Couleurs de fond et de bordure propres à la page. */
    className?: string;
    /** Dégradé inline des pages événement. */
    style?: CSSProperties;
}

/**
 * Bandeau de tête commun aux pages internes.
 *
 * Centralisé pour que toutes les pages partagent exactement le même rythme
 * vertical : sans ça, une page sans sur-titre ne fait pas la même hauteur
 * qu'une page qui en a un.
 */
export function PageHeader({ kicker, title, subtitle, className, style }: PageHeaderProps) {
    return (
        <header
            className={cn(
                "border-b border-border bg-primary/80 py-12 md:py-16",
                className
            )}
            style={style}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    {kicker && (
                        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-white/90 drop-shadow-sm">
                            {kicker}
                        </p>
                    )}

                    <h1 className="text-3xl font-bold text-white md:text-4xl drop-shadow-sm">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="mt-4 text-lg text-white/90 drop-shadow-sm">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </header>
    );
}
