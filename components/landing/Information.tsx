import { Clock, Stethoscope, Users } from "lucide-react";
import Link from "next/link";
import { Section } from "../ui/Section";

export function LandingInformation() {
    return (
        <Section id="presentation">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                        Qu&apos;est-ce qu&apos;une <span className="whitespace-nowrap">MSP&nbsp;?</span>
                    </h2>

                    <div className="bg-card border border-border rounded-xl p-8 shadow-sm mb-12">
                        {/* Réponse directe en tête de section, avant tout
                            développement : c'est le passage qu'un moteur ou un
                            assistant extrait pour répondre à la question du titre. */}
                        <p className="text-lg text-foreground leading-relaxed mb-5 font-medium">
                            Une maison de santé pluriprofessionnelle (MSP) réunit dans une même
                            organisation des médecins et des professionnels paramédicaux qui
                            travaillent de façon coordonnée. L&apos;objectif : un suivi partagé
                            entre professionnels, sans que le patient ait à refaire son histoire à
                            chaque rendez-vous.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Concrètement, cela veut dire un espace de coordination des soins au plus
                            près de la population des communes environnantes, fondé sur le partage
                            de compétences entre professionnels. La MSP de l&apos;Oppidum s&apos;inscrit
                            dans cette démarche pour une prise en charge globale et coordonnée.
                        </p>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Pour en savoir plus sur le médecin traitant, le parcours de soin
                            coordonné et les soins non programmés, découvrez{" "}
                            <Link
                                href="/parcours-de-soin"
                                className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
                            >
                                comment se déroule un parcours de soin à la MSP
                            </Link>
                            .
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
