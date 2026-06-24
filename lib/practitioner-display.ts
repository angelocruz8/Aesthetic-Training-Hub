import type { Practitioner } from "@/types/practitioner";

const AVATAR_GRADIENTS = [
  "from-violet-400 to-indigo-500",
  "from-indigo-400 to-purple-500",
  "from-purple-400 to-fuchsia-500",
  "from-blue-400 to-indigo-500",
  "from-violet-500 to-purple-600",
  "from-indigo-500 to-blue-600",
] as const;

export function getPractitionerDisplayMeta(practitioner: Practitioner) {
  const seed = parseInt(practitioner.id.replace(/\D/g, ""), 10) || 1;
  const rating = (4.5 + (seed % 5) * 0.1).toFixed(1);
  const reviews = 80 + (seed * 17) % 280;
  const initials = practitioner.name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const avatarGradient = AVATAR_GRADIENTS[seed % AVATAR_GRADIENTS.length];

  return { rating, reviews, initials, avatarGradient };
}
