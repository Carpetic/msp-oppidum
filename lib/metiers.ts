import { CABINETS, SPECIALISTES, type Cabinet, type Specialiste } from "@/app/data/specialistes";
import { COMMUNES } from "@/app/data/location";

/**
 * Registre des métiers de la MSP.
 *
 * Deux rôles distincts :
 *  - fournir la valeur d'énumération `MedicalSpecialty` de schema.org attendue
 *    par `medicalSpecialty` (le libellé français, lui, part dans
 *    `availableService`, qui accepte du texte libre) ;
 *  - décrire chaque métier sur `/specialistes` : ce qu'il traite et si une
 *    prescription est nécessaire.
 *
 * Les fonctions support (secrétariat, assistance, coordination) n'ont pas de
 * `medicalSpecialty` : elles apparaissent dans l'effectif et dans le filtre,
 * mais pas dans la présentation des métiers de soin.
 */
export interface Metier {
    /** Identifiant stable : clé de liste et ancre dans la page. */
    slug: string;
    /** Valeur exacte du champ `metier` dans SPECIALISTES. */
    key: string;
    /** Au singulier, tel qu'affiché dans une phrase. */
    singulier: string;
    /** Au pluriel, pour les titres et les listes. */
    pluriel: string;
    /** Valeur de l'énumération schema.org MedicalSpecialty, si applicable. */
    medicalSpecialty?: string;
    /** Type schema.org du lieu d'exercice, sous-type de MedicalBusiness. */
    schemaType: "Physician" | "Pharmacy" | "MedicalBusiness";
    /** Libellé du soin, pour `availableService`. */
    service: string;
    /** Présentation du métier, entre 40 et 60 mots. */
    intro?: string;
    /** Motifs de consultation les plus courants, à titre descriptif. */
    motifs?: string[];
    /** Modalités d'accès : prescription requise ou accès direct. */
    acces?: string;
}

export const METIERS_REGISTRY: Metier[] = [
    {
        slug: "medecin-generaliste",
        key: "Medecin",
        singulier: "médecin généraliste",
        pluriel: "médecins généralistes",
        medicalSpecialty: "PrimaryCare",
        schemaType: "Physician",
        service: "Médecine générale",
        intro:
            "Les médecins généralistes de la MSP L'Oppidum assurent le suivi médical courant, les soins du quotidien et la coordination avec les autres professionnels de la maison de santé. Ils peuvent être déclarés comme médecin traitant auprès de l'Assurance Maladie. Deux cabinets accueillent les patients, à Laudun-l'Ardoise et à Codolet.",
        motifs: [
            "Consultation de suivi et renouvellement d'ordonnance",
            "Maladie aiguë : fièvre, douleur, infection",
            "Suivi d'une maladie chronique",
            "Certificat médical, vaccination, bilan",
            "Orientation vers un spécialiste ou un examen",
        ],
        acces:
            "La consultation d'un médecin généraliste se fait sans prescription préalable. Si vous l'avez déclaré comme médecin traitant, vous restez dans le parcours de soin coordonné et bénéficiez du meilleur niveau de remboursement.",
    },
    {
        slug: "infirmier-liberal",
        key: "Infirmier(ère) libérale",
        singulier: "infirmier libéral",
        pluriel: "infirmiers et infirmières libérales",
        medicalSpecialty: "Nursing",
        schemaType: "MedicalBusiness",
        service: "Soins infirmiers",
        intro:
            "Les infirmières et infirmiers libéraux de la MSP L'Oppidum réalisent les soins prescrits au cabinet ou à domicile : pansements, injections, prises de sang, surveillance de traitement, aide à la toilette. Huit cabinets couvrent Laudun-l'Ardoise, Orsan et Chusclan, ce qui permet une prise en charge de proximité sur l'ensemble du territoire.",
        motifs: [
            "Pansements et soins de plaie",
            "Injections, perfusions, prises de sang",
            "Surveillance et préparation de traitement",
            "Aide à la toilette et soins d'hygiène",
            "Suivi de sortie d'hospitalisation",
        ],
        acces:
            "Les soins infirmiers se font sur prescription médicale. Les cabinets se déplacent à domicile sur l'ensemble du territoire de la MSP, y compris dans les hameaux les plus éloignés du centre.",
    },
    {
        slug: "kinesitherapeute",
        key: "Kinésithérapeute",
        singulier: "kinésithérapeute",
        pluriel: "kinésithérapeutes",
        medicalSpecialty: "Physiotherapy",
        schemaType: "MedicalBusiness",
        service: "Kinésithérapie",
        intro:
            "Les kinésithérapeutes de la MSP L'Oppidum prennent en charge la rééducation sur prescription médicale : suites de traumatisme ou d'opération, douleurs de dos, rééducation respiratoire, perte d'autonomie. Deux cabinets accueillent les patients, à Laudun-l'Ardoise et à Chusclan, en lien direct avec les médecins de la maison de santé.",
        motifs: [
            "Rééducation après une opération ou un traumatisme",
            "Douleurs de dos, de nuque, d'épaule",
            "Rééducation respiratoire",
            "Prévention des chutes et perte d'autonomie",
            "Rééducation du sportif",
        ],
        acces:
            "La kinésithérapie se fait sur prescription médicale, qui précise le nombre de séances et la zone à traiter. Le bilan initial est réalisé par le kinésithérapeute lors de la première séance.",
    },
    {
        slug: "orthophoniste",
        key: "Orthophoniste",
        singulier: "orthophoniste",
        pluriel: "orthophonistes",
        medicalSpecialty: "SpeechPathology",
        schemaType: "MedicalBusiness",
        service: "Orthophonie",
        intro:
            "Les orthophonistes de la MSP L'Oppidum interviennent sur prescription médicale pour les troubles du langage, de la parole, de la voix et de la déglutition, chez l'enfant comme chez l'adulte. Deux cabinets exercent à Laudun-l'Ardoise, en coordination avec les médecins généralistes de la maison de santé.",
        motifs: [
            "Troubles du langage oral chez l'enfant",
            "Troubles de l'apprentissage du langage écrit",
            "Bégaiement et troubles de la fluence",
            "Troubles de la voix",
            "Rééducation après un accident vasculaire cérébral",
        ],
        acces:
            "L'orthophonie se fait sur prescription médicale. Un bilan orthophonique précède toujours la rééducation : il détermine la nature du trouble et le nombre de séances nécessaires.",
    },
    {
        slug: "sage-femme",
        key: "Sage-femme",
        singulier: "sage-femme",
        pluriel: "sages-femmes",
        medicalSpecialty: "Midwifery",
        schemaType: "MedicalBusiness",
        service: "Suivi par une sage-femme",
        intro:
            "La sage-femme de la MSP L'Oppidum assure le suivi de grossesse, la préparation à la naissance, le suivi après l'accouchement et le suivi gynécologique de prévention. Elle exerce à Laudun-l'Ardoise et participe aux actions de prévention de la maison de santé, dont les ateliers d'Octobre Rose.",
        motifs: [
            "Suivi de grossesse",
            "Préparation à la naissance",
            "Suivi et rééducation après l'accouchement",
            "Suivi gynécologique de prévention et contraception",
            "Dépistage et information en santé de la femme",
        ],
        acces:
            "La sage-femme peut être consultée directement, sans passer par un médecin, pour le suivi de grossesse comme pour le suivi gynécologique de prévention.",
    },
    {
        slug: "pedicure-podologue",
        key: "Pedicure podologue",
        singulier: "pédicure-podologue",
        pluriel: "pédicures-podologues",
        medicalSpecialty: "Podiatric",
        schemaType: "MedicalBusiness",
        service: "Pédicurie-podologie",
        intro:
            "Le pédicure-podologue de la MSP L'Oppidum prend en charge les soins des pieds et les troubles de la marche : cors et durillons, ongles incarnés, semelles orthopédiques, suivi du pied diabétique. Le cabinet se situe à Laudun-l'Ardoise, en lien avec les médecins et les infirmières de la maison de santé.",
        motifs: [
            "Cors, durillons, ongles incarnés",
            "Semelles orthopédiques sur mesure",
            "Suivi du pied diabétique",
            "Douleurs de la marche et troubles de la posture",
            "Soins de pied chez la personne âgée",
        ],
        acces:
            "Le pédicure-podologue peut être consulté directement, sans prescription. Une prescription reste nécessaire pour la prise en charge des semelles orthopédiques par l'Assurance Maladie.",
    },
    {
        slug: "pharmacien",
        key: "Pharmacien(ne)",
        singulier: "pharmacien",
        pluriel: "pharmaciens",
        medicalSpecialty: "PharmacySpecialty",
        schemaType: "Pharmacy",
        service: "Dispensation pharmaceutique",
        intro:
            "Les pharmaciens associés à la MSP L'Oppidum délivrent les traitements, accompagnent leur bon usage et participent aux actions de prévention du territoire, notamment aux dépistages organisés. Deux officines couvrent la commune : la pharmacie de Laudun et la pharmacie de l'Ardoise.",
        motifs: [
            "Délivrance et explication des traitements",
            "Conseil sur l'automédication",
            "Vaccination et tests rapides",
            "Matériel médical et location",
            "Remise des kits de dépistage organisé",
        ],
        acces:
            "Les officines accueillent sans rendez-vous. Certains actes, comme la vaccination ou la délivrance d'un kit de dépistage, s'y font directement.",
    },
    {
        slug: "assistant-medical",
        key: "Assistant(e) médical(e)",
        singulier: "assistante médicale",
        pluriel: "assistantes médicales",
        schemaType: "MedicalBusiness",
        service: "Assistance médicale",
    },
    {
        slug: "secretaire-medical",
        key: "Secrétaire médical(e)",
        singulier: "secrétaire médicale",
        pluriel: "secrétaires médicales",
        schemaType: "MedicalBusiness",
        service: "Secrétariat médical",
    },
    {
        slug: "coordination",
        key: "Coordinateur(trice)",
        singulier: "coordinatrice",
        pluriel: "coordinatrices",
        schemaType: "MedicalBusiness",
        service: "Coordination des soins",
    },
];

/** Métier correspondant à une valeur du champ `metier` des spécialistes. */
export function getMetierByKey(key: string): Metier | undefined {
    return METIERS_REGISTRY.find((metier) => metier.key === key);
}

/** Nombre de professionnels exerçant un métier. */
export function countSpecialistes(metier: Metier): number {
    return SPECIALISTES.filter((s) => s.metier === metier.key).length;
}

/**
 * Métiers de soin effectivement pourvus, dans l'ordre du registre.
 *
 * Sert à la présentation des métiers sur `/specialistes` : on ne décrit que
 * ceux qui correspondent à une profession de santé et comptent au moins un
 * professionnel en poste.
 */
export function getMetiersDeSoin(): Metier[] {
    return METIERS_REGISTRY.filter(
        (metier) => metier.medicalSpecialty && countSpecialistes(metier) > 0
    );
}

/** Valeurs d'énumération MedicalSpecialty réellement représentées dans la MSP. */
export function getMedicalSpecialties(): string[] {
    return METIERS_REGISTRY.filter(
        (metier) => metier.medicalSpecialty && countSpecialistes(metier) > 0
    ).map((metier) => metier.medicalSpecialty!);
}

/**
 * Libellés de soins proposés, pour `availableService`.
 *
 * Restreint aux métiers de soin : le secrétariat et la coordination sont
 * indispensables au fonctionnement de la MSP, mais ce ne sont pas des soins et
 * les déclarer en `MedicalTherapy` serait faux.
 */
export function getAvailableServices(): string[] {
    return METIERS_REGISTRY.filter(
        (metier) => metier.medicalSpecialty && countSpecialistes(metier) > 0
    ).map((metier) => metier.service);
}

export interface CabinetGroup {
    cabinet: Cabinet;
    specialistes: Specialiste[];
}

export interface CommuneGroup {
    commune: string;
    groups: CabinetGroup[];
}

/**
 * Cabinets regroupés par commune, dans l'ordre de `COMMUNES`.
 *
 * Sans `metier`, tous les professionnels sont retenus. Les cabinets et les
 * communes sans professionnel retenu sont écartés : la page ne doit jamais
 * afficher un titre de commune vide.
 */
export function getCabinetsByCommune(metier?: Metier): CommuneGroup[] {
    return COMMUNES.map((commune) => ({
        commune: commune.name,
        groups: CABINETS.filter((cabinet) => cabinet.commune === commune.name)
            .map((cabinet) => ({
                cabinet,
                specialistes: SPECIALISTES.filter(
                    (s) =>
                        s.cabinetId === cabinet.id &&
                        (!metier || s.metier === metier.key)
                ),
            }))
            .filter((group) => group.specialistes.length > 0),
    })).filter((group) => group.groups.length > 0);
}

/** Aplatit les groupes par commune en une liste ordonnée de cabinets. */
export function flattenCabinetGroups(groups: CommuneGroup[]): CabinetGroup[] {
    return groups.flatMap((group) => group.groups);
}

/** Communes où un métier est effectivement représenté. */
export function getCommunesForMetier(metier: Metier): string[] {
    return getCabinetsByCommune(metier).map((group) => group.commune);
}

/** Énumération lisible : « A, B et C ». */
export function formatList(items: string[]): string {
    if (items.length <= 1) return items[0] ?? "";
    return `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`;
}
