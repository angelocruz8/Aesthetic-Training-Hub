const SHORT_LABELS: Record<string, string> = {
  "Anti-wrinkle injections": "Botox",
  "Dermal fillers": "Dermal Fillers",
  "Lip augmentation": "Lip Fillers",
  "Chemical peels": "Chemical Peels",
  "Skin rejuvenation": "Skin Rejuvenation",
  "Laser hair removal": "Laser Hair Removal",
  "Tear trough treatment": "Tear Trough",
  "Non-surgical rhinoplasty": "Non-Surgical Rhinoplasty",
};

export function getSpecialismLabel(specialism: string): string {
  return SHORT_LABELS[specialism] ?? specialism;
}
