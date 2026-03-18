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
                className="container mx-auto flex h-16 items-center justify-between px-4"
                aria-label="Navigation principale"
            >
                <Link
                    href="/"
                    className="flex items-center shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    aria-label="Retour à l'accueil"
                >
                    <Image
                        src="/logo-oppidum.webp"
                        alt="MSP L'OPPIDUM"
                        width={120}
                        height={48}
                        className="h-10 w-auto object-contain md:h-12"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-6 ml-auto">
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
                </div>

                {/* Bouton menu mobile - à droite */}
                <button
                    className="md:hidden p-2 text-foreground rounded-md hover:bg-accent transition-colors ml-auto"
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
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/specialistes"
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Nos Professionnels
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

