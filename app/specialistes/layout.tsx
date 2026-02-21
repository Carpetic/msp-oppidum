import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos Professionnels | MSP L'Oppidum",
    description:
        "Découvrez l'équipe pluriprofessionnelle de la MSP L'Oppidum : médecins, infirmiers, kinésithérapeutes, sages-femmes et autres professionnels de santé.",
};

export default function SpecialistesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
