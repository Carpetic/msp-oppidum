import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos Professionnels de Santé",
  description:
    "Équipe pluriprofessionnelle de la MSP L'Oppidum : médecins généralistes, infirmiers, kinésithérapeutes, sages-femmes et professionnels de santé.",
  openGraph: {
    url: `${SITE_URL}/specialistes`,
    title: "Nos Professionnels de Santé | MSP L'Oppidum",
    description:
      "Découvrez l'équipe de la MSP L'Oppidum : médecins, infirmiers, kinésithérapeutes et professionnels de santé.",
    siteName: SITE_NAME,
  },
  alternates: { canonical: `${SITE_URL}/specialistes` },
};

export default function SpecialistesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
