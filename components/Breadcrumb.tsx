import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { BreadcrumbItem } from "@/lib/structured-data";

interface BreadcrumbProps {
    /** Mêmes éléments que ceux passés à `getBreadcrumbListSchema`. */
    items: BreadcrumbItem[];
    /** `light` sur un bandeau coloré, `dark` sur un fond clair. */
    tone?: "light" | "dark";
    className?: string;
}

/**
 * Fil d'Ariane visible, à afficher partout où un `BreadcrumbList` est émis :
 * un balisage sans équivalent à l'écran ne décrit la structure de la page qu'à
 * moitié.
 *
 * Le dernier élément est la page courante : pas de lien, `aria-current`.
 */
export function Breadcrumb({ items, tone = "dark", className }: BreadcrumbProps) {
    if (items.length < 2) return null;

    const linkTone =
        tone === "light"
            ? "text-white/75 hover:text-white focus-visible:ring-white/60"
            : "text-muted-foreground hover:text-foreground focus-visible:ring-ring";
    const currentTone = tone === "light" ? "text-white" : "text-foreground";
    const separatorTone = tone === "light" ? "text-white/50" : "text-muted-foreground/60";

    return (
        <nav aria-label="Fil d'Ariane" className={className}>
            <ol
                className={cn(
                    "flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-sm",
                    tone === "light" && "drop-shadow-sm"
                )}
            >
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.url} className="flex items-center gap-x-1.5">
                            {index > 0 && (
                                <ChevronRight
                                    className={cn("h-3.5 w-3.5 shrink-0", separatorTone)}
                                    aria-hidden
                                />
                            )}

                            {isLast ? (
                                <span className={cn("font-medium", currentTone)} aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={new URL(item.url).pathname}
                                    className={cn(
                                        "rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                                        linkTone
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
