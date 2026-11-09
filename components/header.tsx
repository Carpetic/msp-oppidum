"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-1000 w-full border-b border-border bg-white backdrop-blur supports-backdrop-filter:bg-white">
            <nav
                className="container mx-auto flex h-20 items-center justify-between px-4"
                aria-label="Navigation principale"
            >
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 rounded transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-label="Retour à l'accueil"
                >
                    <Image
                        src="/logo-oppidum.webp"
                        alt=""
                        width={400}
                        height={400}
                        className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16"
                        priority
                    />
                    <span className="leading-tight">
                        <span className="block text-sm font-semibold text-foreground sm:text-base">
                            MSP L&apos;Oppidum
                        </span>
                        <span className="hidden text-xs text-muted-foreground xl:block">
                            Maison de santé pluriprofessionnelle
                        </span>
                    </span>
                </Link>

                <div className="ml-auto hidden items-center gap-6 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/specialistes"
                        className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                        Nos Professionnels
                    </Link>
                    <Link
                        href="/evenements"
                        className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                        Événements
                    </Link>
                    <Link
                        href="/parcours-de-soin"
                        className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                        Parcours de soin
                    </Link>
                </div>

                {/* Bouton menu mobile - à droite */}
                <button
                    className="ml-auto min-h-11 min-w-11 rounded-md p-2 text-foreground transition-colors hover:bg-accent md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </nav>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
                        <Link
                            href="/"
                            className="flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/specialistes"
                            className="flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Nos Professionnels
                        </Link>
                        <Link
                            href="/evenements"
                            className="flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Événements
                        </Link>
                        <Link
                            href="/parcours-de-soin"
                            className="flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Parcours de soin
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

