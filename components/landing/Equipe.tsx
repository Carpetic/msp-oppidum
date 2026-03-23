import { Section } from "../ui/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { METIERS, SPECIALISTES, specialistes } from "@/app/data/specialistes";

export function LandingEquipe() {
    const effectifsParMetier = METIERS.filter((metier) => metier !== "Tous")
        .map((metier) => ({
            metier,
            total: SPECIALISTES.filter((specialiste) => specialiste.metier === metier).length,
        }))
        .filter(({ total }) => total > 0);

    return (
        <Section id="equipe">
            <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Une équipe pluriprofessionnelle multisites
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                    La Maison de Santé Pluriprofessionnelle (MSP) de l&apos;Oppidum réunit des
                    professionnels complémentaires pour répondre à vos besoins, du quotidien aux parcours
                    plus spécifiques. L&apos;équipe médicale est pensée pour coordonner les soins, faciliter les
                    échanges et vous orienter vers le bon professionnel.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                    Que vous soyez résidant à <strong>Laudun L&apos;ardoise</strong> (30290), Orsan, Codolet ou Chusclan, vous pouvez trouver un accompagnement adapté à votre situation.
                </p>

                <div className="rounded-lg border border-border p-4 md:p-6 bg-white shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground">Effectif par métier dans la MSP</h3>
                    <ul className="mt-4 space-y-2">
                        {effectifsParMetier.map(({ metier, total }) => (
                            <li
                                key={metier}
                                className="flex items-center justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0"
                            >
                                <span className="text-foreground">{metier}</span>
                                <span className="text-sm text-muted-foreground">
                                    {total} {total > 1 ? "personnes" : "personne"}
                                </span>
                            </li>
                        ))}
                    </ul>
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

