import type { Practitioner } from "@/types/practitioner";
import { getPractitionerDisplayMeta } from "@/lib/practitioner-display";
import {
  HeartIcon,
  MapPinIcon,
  StarIcon,
  VerifiedIcon,
} from "@/components/icons";

const TIER_CONFIG = {
  Standard: {
    label: "Standard",
    price: 150,
    priceClassName: "text-slate-900",
  },
  Premium: {
    label: "Premium",
    price: 249,
    priceClassName: "text-brand-600",
  },
} as const;

type PractitionerCardProps = {
  practitioner: Practitioner;
};

export function PractitionerCard({ practitioner }: PractitionerCardProps) {
  const { rating, reviews, initials, avatarGradient } =
    getPractitionerDisplayMeta(practitioner);
  const isPremium = practitioner.tier === "Premium";
  const tier = TIER_CONFIG[practitioner.tier];

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 ${
        isPremium
          ? "border-amber-300/90 bg-linear-to-br from-amber-50/50 via-white to-violet-50/40 shadow-md ring-1 ring-amber-200/60 hover:shadow-lg hover:ring-amber-300/70"
          : "border-slate-200/80 bg-white shadow-sm hover:shadow-md"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider ${
            isPremium
              ? "bg-linear-to-r from-amber-100 to-amber-50 text-amber-800 ring-1 ring-amber-200/80"
              : "bg-slate-100 text-slate-600 ring-1 ring-slate-200"
          }`}
        >
          {isPremium && <StarIcon className="h-3 w-3 text-amber-500" />}
          {tier.label.toUpperCase()}
        </span>
        <button
          type="button"
          aria-label="Save practitioner"
          className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-white/80 hover:text-slate-400"
        >
          <HeartIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-start gap-4">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${avatarGradient} text-lg font-semibold text-white shadow-inner`}
        >
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h2 className="truncate text-lg font-semibold tracking-tight text-slate-900">
              {practitioner.name}
            </h2>
            <VerifiedIcon className="h-4 w-4 shrink-0 text-sky-500" />
          </div>
          <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
            <MapPinIcon className="h-3.5 w-3.5 shrink-0" />
            {practitioner.location}, UK
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {practitioner.specialisms.map((specialism) => (
          <span
            key={specialism}
            className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
          >
            {specialism}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-100/80 pt-4">
        <div className="flex items-center gap-1.5 text-sm">
          <StarIcon className="h-4 w-4 text-amber-400" />
          <span className="font-semibold text-slate-900">{rating}</span>
          <span className="text-slate-500">({reviews} reviews)</span>
        </div>

        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {tier.label}
          </p>
          <p className={`text-sm font-semibold ${tier.priceClassName}`}>
            £{tier.price}
            <span className="font-normal text-slate-500"> / month</span>
          </p>
        </div>
      </div>
    </article>
  );
}
