"use client";

import { ChevronDown } from "lucide-react";
import { useId, useMemo, useRef, useState } from "react";

import { Section } from "../ui/Section";
import { cn } from "@/lib/utils";
import { getFaqPageSchema, type FAQItem } from "@/lib/structured-data";

/**
 * Contenu par défaut des questions/réponses.
 */
export const FAQ_ITEMS: FAQItem[] = [
    {
        question: "Comment prendre rendez-vous à la MSP de Laudun ?",
        answer:
            `Vous pouvez prendre rendez-vous en ligne sur Doctolib ou par téléphone. N'hésitez pas à consulter la page "Nos professionels" pour trouver le professionnel de santé de votre choix.`,
    },
    {
        question: "La MSP de l'Oppidum accepte-t-elle de nouveaux patients ?",
        answer:
            "Oui. La MSP de l'Oppidum accueille de nouveaux patients. Vous pouvez vous inscrire directement auprès du professionnel de santé de votre choix (médecin généraliste, kinésithérapeute, orthophoniste, sage-femme, soins infirmiers, etc.).",
    },
    {
        question: "Quels sont les horaires d'ouverture de la maison de santé ?",
        answer:
            "La MSP de l'Oppidum est ouverte du lundi au vendredi et propose des créneaux selon les besoins. Pour connaître la disponibilité du moment et réserver le bon créneau, prenez rendez-vous à Laudun (30290) par téléphone ou sur Doctolib.",
    },
    {
        question: "Puis-je déclarer mon médecin traitant à la MSP de l'Oppidum ?",
        answer:
            "Oui, vous pouvez choisir l'un de nos médecins généralistes comme médecin traitant et le déclarer auprès de l'Assurance Maladie via amelipro.fr ou directement en cabinet. Ce choix vous garantit un meilleur remboursement de vos consultations.",
    },
    {
        question: "Quelles communes sont desservies par la MSP de l'Oppidum ?",
        answer:
            "La MSP de l'Oppidum accueille les patients de Laudun L'ardoise, Orsan, Codolet et Chusclan.",
    },
];

/**
 * Section FAQ avec accordéon exclusif (une seule question ouverte à la fois).
 * Inclut aussi le schéma JSON-LD Schema.org `FAQPage` pour le SEO.
 */
export function LandingFAQ({ items = FAQ_ITEMS }: { items?: FAQItem[] }) {
    const accordionBaseId = useId().replace(/:/g, "-");
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const ignoreNextClickRef = useRef(false);

    const faqJsonLd = useMemo(() => getFaqPageSchema(items), [items]);

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
                id="ld-faqpage"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqJsonLd),
                }}
            />
        </>
    );
}

