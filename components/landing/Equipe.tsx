import { Section } from "../ui/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LandingEquipe() {
    return (
        <Section id="equipe">
            <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Une équipe pluriprofessionnelle à Laudun-l&apos;Ardoise
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                    La Maison de Santé Pluriprofessionnelle (MSP) de l&apos;Oppidum réunit des
                    professionnels complémentaires pour répondre à vos besoins, du quotidien aux parcours
                    plus spécifiques. L&apos;équipe médicale est pensée pour coordonner les soins, faciliter les
                    échanges et vous orienter vers le bon professionnel.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                    Que vous soyez patient à <strong>Laudun-l&apos;Ardoise</strong> (30290), à Connaux, à
                    Bagnols-sur-Cèze, à Roquemaure, à Chusclan, à Saint-Gervais, ou à d&apos;autres communes, vous pouvez trouver un accompagnement adapté à votre situation.
                </p>

                <div className="space-y-5">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Médecine générale</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Le médecin généraliste est le point d&apos;entrée du parcours de soins : diagnostic,
                            suivi et orientation. La MSP aide à garder une vue d&apos;ensemble de votre santé.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Soins de rééducation</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Kinésithérapeute : rééducation, récupération et prise en charge des douleurs
                            chroniques. L&apos;objectif est d&apos;améliorer la fonctionnalité au fil du temps, en
                            coordination avec le reste de l&apos;équipe médicale.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Orthophonie</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Orthophoniste : bilans et rééducation du langage et de la communication. Une
                            approche progressive, avec des échanges pertinents entre professionnels.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Sage-femme & suivi</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Sage-femme : accompagnement autour de la maternité et suivi structuré. La coordination
                            permet d&apos;assurer une continuité des soins.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Infirmier(ère) & soins infirmiers</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Infirmier(ère) libérale : soins infirmiers, continuité et accompagnement. L&apos;équipe
                            travaille à l&apos;interface entre le médical, le suivi et les besoins au quotidien.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Pharmacien(ne)</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Conseil, délivrance et accompagnement autour des traitements. Un rôle clé dans
                            la bonne compréhension et la continuité de vos soins.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Pédicure podologue</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Prévention et prise en charge des pathologies du pied. Suivi et conseils adaptés
                            pour améliorer le confort et la mobilité au quotidien.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Assistant(e) médical(e)</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Organisation et soutien au quotidien : accueil, préparation des consultations et
                            coordination des informations pour faciliter votre prise en charge.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Secrétaire médical(e)</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Gestion des rendez-vous, appels et demandes d&apos;information. L&apos;objectif est de
                            vous orienter rapidement et de simplifier vos démarches à la MSP.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Coordinateur(trice)</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            Coordination des parcours et des échanges entre professionnels afin de favoriser
                            la continuité des soins pour les patients de Laudun-l&apos;Ardoise (30290).
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground">
                        <Link href="/specialistes" className="gap-2">
                            Découvrir nos professionnels
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}

