import { Clock, Stethoscope, Users } from "lucide-react";
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
                            Les maisons de santé pluriprofessionnelles (MSP) sont des structures pluridisciplinaires où travaillent de
                            manière coordonnée médecins et auxiliaires médicaux. L&apos;idée est de créer un espace dédié à la coordination
                            des soins au plus près de la population des communes environnantes grâce au partage de compétences. La MSP de l&apos;Oppidum s&apos;inscrit dans
                            cette démarche pour une prise en charge globale et coordonnée.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Stethoscope className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Soins coordonnés</h3>
                                <p className="text-sm text-muted-foreground">
                                    Une collaboration étroite pour un suivi personnalisé et efficace
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Users className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Équipe pluridisciplinaire</h3>
                                <p className="text-sm text-muted-foreground">
                                    Médecins, infirmiers, kinés, orthophonistes et bien d&apos;autres spécialistes réunis
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