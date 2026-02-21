import { Clock, MapPin, Stethoscope, Users } from "lucide-react";
import { Section } from "../ui/Section";

export function LandingInformation() {
    return (
        <Section id="presentation">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                        Qu&apos;est-ce qu&apos;une MSP ?
                    </h2>

                    <div className="bg-card border border-border rounded-xl p-8 shadow-sm mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Une Maison de Santé Pluriprofessionnelle (MSP) est un lieu unique où plusieurs professionnels de santé
                            travaillent ensemble pour vous offrir une prise en charge globale et coordonnée.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Équipe pluridisciplinaire</h3>
                                <p className="text-sm text-muted-foreground">
                                    Médecins, infirmiers, kinésithérapeutes et autres professionnels réunis
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                    <Stethoscope className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Soins coordonnés</h3>
                                <p className="text-sm text-muted-foreground">
                                    Une collaboration étroite pour un suivi personnalisé et efficace
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Clock className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Accessibilité</h3>
                                <p className="text-sm text-muted-foreground">
                                    Des horaires élargis et une meilleure disponibilité des soins
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}