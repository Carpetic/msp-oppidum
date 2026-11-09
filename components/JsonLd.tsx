import { getSiteGraph } from "@/lib/structured-data";

/**
 * Insère un bloc JSON-LD.
 *
 * Centralisé pour que toutes les pages sérialisent de la même façon, plutôt que
 * de répéter la même balise `<script>` avec `dangerouslySetInnerHTML`.
 */
export function JsonLdScript({ id, data }: { id: string; data: unknown }) {
    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

/**
 * Graphe commun à toutes les pages : le nœud unique de la structure.
 *
 * Un seul nœud d'organisation, référencé partout ailleurs par son `@id`.
 */
export function JsonLd() {
    return <JsonLdScript id="ld-site" data={getSiteGraph()} />;
}
