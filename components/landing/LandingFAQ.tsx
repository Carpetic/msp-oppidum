"use client";

import { ChevronDown } from "lucide-react";
import { useId, useMemo, useRef, useState } from "react";

import { Section } from "../ui/Section";
import { cn } from "@/lib/utils";

/**
 * Représente une entrée de FAQ.
 */
export type FAQItem = {
    question: string;
    answer: string;
};

/**
 * Contenu par défaut des questions/réponses.
 */
export const FAQ_ITEMS: FAQItem[] = [
    {
        question: "Comment prendre rendez-vous à la MSP de Laudun-l'Ardoise ?",
        answer:
            "Vous pouvez prendre rendez-vous directement en ligne sur Doctolib, par téléphone au [NUMÉRO], ou en vous présentant à l'accueil de la MSP de l'Oppidum. Nos secrétaires médicales sont disponibles du lundi au vendredi pour vous accompagner.",
    },
    {
        question: "La MSP de l'Oppidum accepte-t-elle de nouveaux patients ?",
        answer:
            "Oui, la MSP de l'Oppidum accueille de nouveaux patients. Vous pouvez vous inscrire directement auprès du praticien de votre choix. Aucune démarche préalable n'est nécessaire pour une première consultation.",
    },
    {
        question: "Quels sont les horaires d'ouverture de la maison de santé ?",
        answer:
            "La MSP de l'Oppidum est ouverte du lundi au vendredi de [HEURE] à [HEURE], et le samedi matin de [HEURE] à [HEURE]. Des créneaux pour les soins non programmés (urgences du quotidien) sont disponibles chaque jour sans rendez-vous.",
    },
    {
        question: "Puis-je déclarer mon médecin traitant à la MSP de Laudun-l'Ardoise ?",
        answer:
            "Oui, vous pouvez choisir l'un de nos médecins généralistes comme médecin traitant et le déclarer auprès de l'Assurance Maladie via amelipro.fr ou directement en cabinet. Ce choix vous garantit un meilleur remboursement de vos consultations.",
    },
    {
        question: "Quelles communes sont desservies par la MSP de l'Oppidum ?",
        answer:
            "La MSP de l'Oppidum accueille les patients de Laudun-l'Ardoise et des communes environnantes : Connaux, Bagnols-sur-Cèze, Roquemaure, Saint-Gervais, Chusclan et les villages du nord du Gard. Aucune condition de résidence n'est requise pour consulter.",
    },
];

const FAQ_LD_CONTEXT = "https://schema.org";

/**
 * Construit le schéma JSON-LD `FAQPage` pour la page de FAQ.
 */
function buildFaqJsonLd(items: FAQItem[]) {
    return {
        "@context": FAQ_LD_CONTEXT,
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

/**
 * Section FAQ avec accordéon exclusif (une seule question ouverte à la fois).
 * Inclut aussi le schéma JSON-LD Schema.org `FAQPage` pour le SEO.
 */
export function LandingFAQ({ items = FAQ_ITEMS }: { items?: FAQItem[] }) {
    const accordionBaseId = useId().replace(/:/g, "-");
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const ignoreNextClickRef = useRef(false);

    const faqJsonLd = useMemo(() => buildFaqJsonLd(items), [items]);

    return (
        <>
            <Section id="faq">
                <div className="space-y-6">
                    <header className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                            Questions fréquentes
                        </h2>
                    </header>

                    <div className="rounded-xl border border-border bg-card shadow-sm">
                        <div className="divide-y divide-border">
                            {items.map((item, index) => {
                                const isOpen = openIndex === index;
                                const questionId = `faq-q-${accordionBaseId}-${index}`;
                                const panelId = `faq-panel-${accordionBaseId}-${index}`;

                                return (
                                    <div key={panelId} className="px-4 sm:px-6">
                                        <button
                                            id={questionId}
                                            type="button"
                                            className="cursor-pointer w-full py-5 flex items-start justify-between gap-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-muted/50"
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            onClick={() => {
                                                if (ignoreNextClickRef.current) {
                                                    ignoreNextClickRef.current = false;
                                                    return;
                                                }
                                                setOpenIndex((prev) =>
                                                    prev === index ? null : index
                                                );
                                            }}
                                            onKeyDown={(e) => {
                                                const isEnter = e.key === "Enter";
                                                const isSpace =
                                                    e.key === " " || e.code === "Space";

                                                if (!isEnter && !isSpace) return;

                                                e.preventDefault();
                                                ignoreNextClickRef.current = true;
                                                setOpenIndex((prev) =>
                                                    prev === index ? null : index
                                                );
                                            }}
                                        >
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {item.question}
                                            </h3>

                                            <span className="flex shrink-0 items-center justify-center">
                                                <ChevronDown
                                                    className={cn(
                                                        "h-5 w-5 text-primary transition-transform duration-200",
                                                        isOpen && "rotate-180"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </button>

                                        <div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={questionId}
                                            aria-hidden={!isOpen}
                                            className={cn(
                                                "grid transition-[grid-template-rows] duration-300 ease-out",
                                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                            )}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="pb-5">
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqJsonLd),
                }}
            />
        </>
    );
}

