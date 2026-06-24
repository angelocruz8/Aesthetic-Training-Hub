import type { Practitioner } from "@/types/practitioner";
import { getPractitionerDisplayMeta } from "@/lib/practitioner-display";

export type PractitionerFilters = {
  specialism: string;
  location: string;
};

export type SortOption =
  | "recommended"
  | "name-asc"
  | "name-desc"
  | "rating-desc"
  | "price-asc"
  | "price-desc";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "rating-desc", label: "Highest rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const TIER_PRICE = {
  Standard: 150,
  Premium: 249,
} as const;

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

export function sortPractitioners(
  practitioners: Practitioner[],
  sortBy: SortOption,
): Practitioner[] {
  const sorted = [...practitioners];

  switch (sortBy) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "rating-desc":
      return sorted.sort(
        (a, b) =>
          Number(getPractitionerDisplayMeta(b).rating) -
          Number(getPractitionerDisplayMeta(a).rating),
      );
    case "price-asc":
      return sorted.sort(
        (a, b) => TIER_PRICE[a.tier] - TIER_PRICE[b.tier],
      );
    case "price-desc":
      return sorted.sort(
        (a, b) => TIER_PRICE[b.tier] - TIER_PRICE[a.tier],
      );
    case "recommended":
    default:
      return sorted.sort((a, b) => {
        if (a.tier !== b.tier) {
          return a.tier === "Premium" ? -1 : 1;
        }
        return a.name.localeCompare(b.name);
      });
  }
}
