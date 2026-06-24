export type PractitionerTier = "Standard" | "Premium";

export interface Practitioner {
  id: string;
  name: string;
  location: string;
  specialisms: string[];
  tier: PractitionerTier;
  avatar: string;
}
