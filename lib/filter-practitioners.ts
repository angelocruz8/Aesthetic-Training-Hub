import type { Practitioner } from "@/types/practitioner";

export type PractitionerFilters = {
  specialism: string;
  location: string;
};

export function getFilterOptions(practitioners: Practitioner[]) {
  const specialisms = [
    ...new Set(practitioners.flatMap((p) => p.specialisms)),
  ].sort((a, b) => a.localeCompare(b));

  const locations = [
    ...new Set(practitioners.map((p) => p.location)),
  ].sort((a, b) => a.localeCompare(b));

  return { specialisms, locations };
}

export function filterPractitioners(
  practitioners: Practitioner[],
  filters: PractitionerFilters,
): Practitioner[] {
  return practitioners.filter((practitioner) => {
    const matchesSpecialism =
      !filters.specialism ||
      practitioner.specialisms.includes(filters.specialism);
    const matchesLocation =
      !filters.location || practitioner.location === filters.location;

    return matchesSpecialism && matchesLocation;
  });
}
