import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-card">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            À propos
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            MSP L&apos;OPPIDUM
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            Navigation
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Accueil
                            </Link>
                            <Link
                                href="/specialistes"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Nos Professionnels
                            </Link>
                        </nav>
                    </div>

                    {/* Légal */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Légal</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/legal"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Mentions légales
                            </Link>
                            <Link
                                href="/privacy"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Politique de confidentialité
                            </Link>
                            {/* <Link
                                href="/cookies"
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Politique des cookies
                            </Link> */}
                        </nav>
                    </div>

                    {/* Contact */}
                    {/* <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Contact</h3>
                        <p className="text-sm text-muted-foreground">
                            Pour toute question ou suggestion, n&apos;hésite pas à nous
                            contacter : <a href="mailto:contact@hostmygame.eu" className="text-primary underline transition-colors hover:text-primary/80">contact@hostmygame.eu</a>.
                        </p>
                    </div> */}
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} MSP L&apos;OPPIDUM. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}

