import { Calendar, Heart } from "lucide-react";
import Link from "next/link";

export function LandingHero() {
    return (
        <section className="relative overflow-hidden bg-primary/50 border-b border-border">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">Votre santé, notre priorité</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Maison de Santé Pluriprofessionnelle
                        <span className="block text-primary mt-2">Oppidum</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                            <Calendar className="w-4 h-4" />
                            Prendre rendez-vous
                        </Link>
                        <Link
                            href="#presentation"
                            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                        >
                            En savoir plus
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}