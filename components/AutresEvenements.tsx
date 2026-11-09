import { EventCard } from "@/components/EventCard";
import { getAutresEvenements } from "@/app/data/evenements";

/**
 * Renvoie vers les autres comptes-rendus depuis une page événement.
 *
 * Sans ça, les pages événement sont des culs-de-sac : elles ne se lient qu'à
 * l'index, jamais entre elles.
 */
export function AutresEvenements({ slug }: { slug: string }) {
    const autres = getAutresEvenements(slug);

    if (autres.length === 0) return null;

    return (
        <section
            className="border-t border-border bg-muted/40 py-12 md:py-16"
            aria-labelledby="autres-evenements"
        >
            <div className="container mx-auto max-w-4xl px-4">
                <h2
                    id="autres-evenements"
                    className="mb-6 text-2xl font-semibold text-foreground"
                >
                    Nos autres actions de prévention
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {autres.map((evenement) => (
                        <EventCard
                            key={evenement.slug}
                            evenement={evenement}
                            headingLevel="h3"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
