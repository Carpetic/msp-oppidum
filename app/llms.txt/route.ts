import { COMMUNES, locationData } from "@/app/data/location";
import { getEvenements, getEvenementUrl } from "@/app/data/evenements";
import { CABINETS, SPECIALISTES } from "@/app/data/specialistes";
import {
    countSpecialistes,
    getCabinetsByCommune,
    getMetiersDeSoin,
    formatList,
} from "@/lib/metiers";
import { SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Fichier de contexte pour les systèmes d'IA (llmstxt.org).
 *
 * Généré depuis les mêmes données que le site : une MSP rurale est exactement
 * le genre d'entité sur laquelle les assistants manquent de source fiable, et
 * un fichier recopié à la main serait périmé au premier changement d'équipe.
 */
export const dynamic = "force-static";

function buildLlmsTxt(): string {
    const { address, phone } = locationData;
    const metiers = getMetiersDeSoin();
    const evenements = getEvenements();

    const lines: string[] = [];

    lines.push(`# ${SITE_NAME}`);
    lines.push("");
    lines.push(
        `> ${SITE_LEGAL_NAME}. ${SPECIALISTES.length} professionnels de santé répartis sur ${CABINETS.length} cabinets, au service de ${formatList(
            COMMUNES.map((commune) => commune.name)
        )}, dans le Gard (30).`
    );
    lines.push("");

    lines.push("## Coordonnées");
    lines.push("");
    lines.push(`- Nom : ${SITE_NAME}`);
    lines.push(`- Adresse du site principal : ${address.street}, ${address.postalCode} ${address.city}, France`);
    if (phone) lines.push(`- Téléphone du cabinet médical : ${phone}`);
    lines.push(`- Coordonnées GPS : ${locationData.coordinates.lat}, ${locationData.coordinates.lng}`);
    lines.push(`- Site : ${SITE_URL}`);
    lines.push("");

    lines.push("## Communes desservies");
    lines.push("");
    for (const commune of COMMUNES) {
        lines.push(`- ${commune.name} (${commune.postalCode})`);
    }
    lines.push("");

    lines.push("## Professionnels par métier");
    lines.push("");
    for (const metier of metiers) {
        const communes = getCabinetsByCommune(metier).map((group) => group.commune);
        lines.push(
            `- ${metier.pluriel} : ${countSpecialistes(metier)} à ${formatList(communes)}`
        );
    }
    lines.push("");

    lines.push("## Cabinets");
    lines.push("");
    for (const cabinet of CABINETS) {
        const effectif = SPECIALISTES.filter((s) => s.cabinetId === cabinet.id).length;
        const tel = cabinet.telephone ? `, tél. ${cabinet.telephone}` : "";
        lines.push(`- ${cabinet.nom} : ${cabinet.adresse}${tel} (${effectif} professionnel${effectif > 1 ? "s" : ""})`);
    }
    lines.push("");

    lines.push("## Pages principales");
    lines.push("");
    lines.push(`- Accueil : ${SITE_URL}/`);
    lines.push(`- Tous les professionnels de santé : ${SITE_URL}/specialistes`);
    lines.push(`- Parcours de soin et médecin traitant : ${SITE_URL}/parcours-de-soin`);
    lines.push(`- Actions de prévention : ${SITE_URL}/evenements`);
    lines.push("");

    lines.push("## Actions de prévention");
    lines.push("");
    for (const evenement of evenements) {
        lines.push(
            `- ${evenement.title} (${evenement.dateLabel}) : ${evenement.seoDescription}. ${getEvenementUrl(evenement)}`
        );
    }
    lines.push("");

    lines.push("## Précisions");
    lines.push("");
    lines.push(
        "- Le contenu santé du site est informatif et ne remplace pas une consultation. Pour une urgence vitale : 15. Pour la permanence des soins hors horaires d'ouverture : 116 117."
    );
    lines.push(
        "- Les horaires d'ouverture ne sont pas encore publiés sur le site ; ils sont à confirmer auprès de chaque cabinet."
    );
    lines.push("");

    return lines.join("\n");
}

export function GET() {
    return new Response(buildLlmsTxt(), {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=0, must-revalidate",
        },
    });
}
