import type { Practitioner } from "@/types/practitioner";

export function getPractitionerDisplayMeta(practitioner: Practitioner) {
  const seed = parseInt(practitioner.id.replace(/\D/g, ""), 10) || 1;
  const rating = (4.5 + (seed % 5) * 0.1).toFixed(1);
  const reviews = 80 + (seed * 17) % 280;

  return { rating, reviews };
}
