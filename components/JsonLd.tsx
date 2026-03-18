import { getMedicalClinicSchema, getOrganizationSchema } from "@/lib/structured-data";

export function JsonLd() {
    const medicalClinic = getMedicalClinicSchema();
    const organization = getOrganizationSchema();
    return (
        <>
            <script
                id="ld-medicalclinic"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinic) }}
            />
            <script
                id="ld-organization"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
            />
        </>
    );
}
