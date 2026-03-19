"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { MouseEvent } from "react";
import { locationData } from "@/app/data/location";

export function LandingHero() {
    const handleFaqClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const faqSection = document.getElementById("faq");
        if (!faqSection) return;

        faqSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section
            className="relative overflow-hidden border-b border-border min-h-128 md:min-h-144 flex items-center"
            aria-labelledby="hero-title"
        >
            <div className="absolute inset-0">
                <Image
                    src="/background/oppidum.webp"
                    alt="Photo de l'Oppidum à Laudun"
                    width={1600}
                    height={900}
                    priority
                    className="h-full w-full object-cover"
                    sizes="100vw"
                />
            </div>
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
                    <h1
                        id="hero-title"
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4 drop-shadow-md"
                    >
                        Maison de Santé Pluriprofessionnelle de {locationData.address.city}
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
                            <Link href="#faq" onClick={handleFaqClick}>
                                Une question ?
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}