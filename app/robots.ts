import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Allow-all volontaire : les crawlers IA (GPTBot, PerplexityBot,
    // ClaudeBot, Google-Extended) doivent pouvoir lire le site pour pouvoir le
    // citer. Pas de règle `disallow` : aucune route n'a à être exclue.
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
