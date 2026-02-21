"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-[--red-500] backdrop-blur supports-backdrop-filter:bg-background/60">
            <nav
                className="container mx-auto flex h-16 items-center justify-between px-4"
                aria-label="Navigation principale"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-xl font-bold text-primary transition-colors hover:text-primary/80"
                >
                    <span>MSP L&apos;OPPIDUM</span>
                </Link>

                {/* Navigation desktop */}
                <div className="hidden md:flex items-center space-x-6">
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

                {/* Bouton menu mobile */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Ouvrir le menu"
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

