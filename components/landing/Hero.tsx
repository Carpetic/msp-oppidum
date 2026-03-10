import { Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingHero() {
    return (
        <section
            className="relative overflow-hidden border-b border-border min-h-128 md:min-h-144 flex items-center"
            style={{
                backgroundImage: "url(/background/oppidum.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            aria-labelledby="hero-title"
        >
            {/* Overlay sobre : bleu médical léger pour lisibilité et cohérence */}
            <div
                className="absolute inset-0 bg-linear-to-b from-primary/85 via-primary/80 to-primary/90"
                aria-hidden
            />

            <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-white text-sm font-medium tracking-wide uppercase mb-4 drop-shadow-sm">
                        Maison de Santé Pluriprofessionnelle
                    </p>
                    <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4 drop-shadow-md">
                        MSP L&apos;Oppidum
                    </h1>
                    <p className="text-white/95 text-lg md:text-xl mb-10 max-w-xl mx-auto drop-shadow-sm">
                        Soins coordonnés et prise en charge globale au cœur de votre territoire. Médecine générale et équipe pluriprofessionnelle à votre service.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-foreground font-medium rounded-lg shadow-md border-2 border-transparent transition-all duration-200 ease-out hover:border-secondary hover:shadow-lg hover:bg-white active:scale-[0.99] active:shadow-md focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                            <Link href="/specialistes" className="gap-2">
                                <Calendar className="w-4 h-4" />
                                Nos professionnels
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-2 border-white text-white rounded-lg bg-transparent transition-all duration-200 ease-out hover:bg-white/20 hover:border-white/90 active:scale-[0.99] active:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                            <Link href="#presentation">
                                En savoir plus
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}