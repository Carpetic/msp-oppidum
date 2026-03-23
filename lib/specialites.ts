import { CABINETS, SPECIALISTES } from "@/app/data/specialistes";

export function getSpecialistesByCabinet() {
    return CABINETS.map(cabinet => ({
        cabinet,
        specialistes: SPECIALISTES.filter(s => s.cabinetId === cabinet.id),
    }));
}