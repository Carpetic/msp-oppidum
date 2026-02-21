/**
 * Données des professionnels de santé de la MSP Oppidum.
 * Structure typée pour un affichage cohérent sur la page spécialistes.
 */

export interface Specialiste {
  id: string;
  nom: string;
  prenom: string;
  metier: string;
  specialite?: string;
  photo?: string; // Optionnel : si absent, affichage d'une icône Person
  telephone?: string;
  doctolib?: string;
  adresse: string;
  horaires?: string;
  bio?: string;
}

/** Catégories de métiers pour les filtres */
export const METIERS = [
  "Tous",
  "Médecin généraliste",
  "Infirmier(ère)",
  "Kinésithérapeute",
  "Sage-femme",
  "Psychologue",
  "Diététicien(ne)",
  "Pharmacien(ne)",
] as const;

export const specialistes: Specialiste[] = [
  {
    id: "1",
    nom: "MARTIN",
    prenom: "Sophie",
    metier: "Médecin généraliste",
    specialite: "Médecine générale",
    telephone: "05 12 34 56 78",
    doctolib: "https://www.doctolib.fr",
    adresse: "MSP L'Oppidum, 12 place du Marché",
    horaires: "Lun-Ven 8h-19h",
    bio: "Médecin généraliste depuis plus de 15 ans, elle accompagne les patients dans le suivi de leur santé au quotidien.",
  },
  {
    id: "2",
    nom: "DUBOIS",
    prenom: "Thomas",
    metier: "Infirmier(ère)",
    photo: "/specialistes/image-docteur.jpg",
    telephone: "05 12 34 56 79",
    adresse: "MSP L'Oppidum, 12 place du Marché",
    horaires: "Lun-Sam 7h-18h",
    bio: "Infirmier diplômé d'État, il assure les soins à domicile et les consultations au cabinet.",
  },
  {
    id: "3",
    nom: "BERNARD",
    prenom: "Marie",
    metier: "Kinésithérapeute",
    specialite: "Rééducation fonctionnelle",
    photo: "/specialistes/image-docteur.jpg",
    telephone: "05 12 34 56 80",
    doctolib: "https://www.doctolib.fr",
    adresse: "MSP L'Oppidum, 12 place du Marché",
    horaires: "Lun-Ven 8h30-18h30",
    bio: "Spécialisée en rééducation post-opératoire et troubles musculo-squelettiques.",
  },
  {
    id: "4",
    nom: "PETIT",
    prenom: "Claire",
    metier: "Sage-femme",
    telephone: "05 12 34 56 81",
    doctolib: "https://www.doctolib.fr",
    adresse: "MSP L'Oppidum, 12 place du Marché",
    horaires: "Lun-Ven 9h-17h",
    bio: "Accompagnement de la grossesse, suivi postnatal et préparation à la naissance.",
  },
  {
    id: "5",
    nom: "ROUSSEAU",
    prenom: "Pierre",
    metier: "Psychologue",
    specialite: "Thérapies cognitives et comportementales",
    telephone: "05 12 34 56 82",
    doctolib: "https://www.doctolib.fr",
    adresse: "MSP L'Oppidum, 12 place du Marché",
    horaires: "Mar-Jeu 9h-18h",
    bio: "Psychologue clinicien, il reçoit adultes et adolescents pour un accompagnement personnalisé.",
  },
  {
    id: "6",
    nom: "MOREAU",
    prenom: "Julie",
    metier: "Diététicien(ne)",
    photo: "/specialistes/image-docteur.jpg",
    telephone: "05 12 34 56 83",
    doctolib: "https://www.doctolib.fr",
    adresse: "MSP L'Oppidum, 12 place du Marché",
    horaires: "Lun-Mer-Ven 10h-17h",
    bio: "Conseils nutritionnels, prise en charge du surpoids et pathologies métaboliques.",
  },
  {
    id: "7",
    nom: "LAURENT",
    prenom: "Jean",
    metier: "Médecin généraliste",
    specialite: "Médecine générale, suivi chronique",
    photo: "/specialistes/image-docteur.jpg",
    telephone: "05 12 34 56 84",
    doctolib: "https://www.doctolib.fr",
    adresse: "MSP L'Oppidum, 12 place du Marché",
    horaires: "Lun-Ven 8h-18h",
    bio: "Médecin généraliste, particulièrement investi dans le suivi des patients diabétiques et hypertendus.",
  },
  {
    id: "8",
    nom: "SIMON",
    prenom: "Émilie",
    metier: "Pharmacien(ne)",
    photo: "/specialistes/image-docteur.jpg",
    adresse: "MSP L'Oppidum, 12 place du Marché",
    horaires: "Lun-Sam 9h-19h",
    bio: "Pharmacienne titulaire, conseils en officine et coordination avec l'équipe MSP.",
  },
];
