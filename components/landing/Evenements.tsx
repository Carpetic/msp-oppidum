import Link from "next/link";

import { Section } from "../ui/Section";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/EventCard";
import { getEvenements } from "@/app/data/evenements";

export function LandingEvenements() {
    const evenements = getEvenements().slice(0, 2);

    return (
        <Section id="evenements">
            <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Nos actions de prévention
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                    Tout au long de l&apos;année, la MSP L&apos;Oppidum se mobilise aux côtés des
                    professionnels de santé du territoire pour informer, sensibiliser et
                    encourager le dépistage.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                    {evenements.map((evenement) => (
                        <EventCard
                            key={evenement.slug}
                            evenement={evenement}
                            headingLevel="h3"
                        />
                    ))}
                </div>

                <div className="pt-2">
                    <Button asChild variant="outline">
                        <Link href="/evenements">Voir tous nos événements</Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
