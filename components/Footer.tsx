import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { getTelHref, locationData } from "@/app/data/location";
import { SITE_NAME } from "@/lib/site";

const NAV_LINKS = [
    { href: "/", label: "Accueil" },
    { href: "/specialistes", label: "Nos professionnels" },
    { href: "/evenements", label: "Événements" },
    { href: "/parcours-de-soin", label: "Parcours de soin" },
];

const LEGAL_LINKS = [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
];

const linkClass =
    "text-sm text-muted-foreground transition-colors hover:text-foreground rounded outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function Footer() {
    const { address, phone } = locationData;

    return (
        <footer className="border-t border-border bg-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Contact : adresse et téléphone répétés sur toutes les pages,
                        c'est le premier réflexe du visiteur qui cherche à joindre
                        la MSP. */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-foreground">Contact</h2>

                        <address className="not-italic space-y-3 text-sm">
                            <p className="font-medium text-foreground">{SITE_NAME}</p>

                            <span className="flex items-start gap-2 text-muted-foreground">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                                <span>
                                    {address.street}
                                    <br />
                                    {address.postalCode} {address.city}
                                </span>
                            </span>

                            {phone && (
                                <a
                                    href={getTelHref(phone)}
                                    className="flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary rounded outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    <Phone className="h-4 w-4 shrink-0" aria-hidden />
                                    {phone}
                                </a>
                            )}
                        </address>

                        <p className="text-sm text-muted-foreground">
                            Les autres cabinets ont leur propre numéro :{" "}
                            <Link
                                href="/specialistes"
                                className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
                            >
                                voir tous les contacts
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
                        <nav className="flex flex-col space-y-2" aria-label="Liens de navigation">
                            {NAV_LINKS.map((link) => (
                                <Link key={link.href} href={link.href} className={linkClass}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-foreground">Légal</h2>
                        <nav className="flex flex-col space-y-2" aria-label="Liens pages légales">
                            {LEGAL_LINKS.map((link) => (
                                <Link key={link.href} href={link.href} className={linkClass}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
