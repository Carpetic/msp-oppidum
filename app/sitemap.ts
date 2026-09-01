import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getEvenements } from "@/app/data/evenements";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const evenements = getEvenements();
  const dernierEvenement = evenements[0];

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${base}/specialistes`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/evenements`,
      lastModified: new Date(
        dernierEvenement.updatedAt ?? dernierEvenement.publishedAt
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...evenements.map((evenement) => ({
      url: `${base}/evenements/${evenement.slug}`,
      lastModified: new Date(evenement.updatedAt ?? evenement.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: `${base}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${base}/politique-de-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
