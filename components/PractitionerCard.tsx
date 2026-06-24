import Image from "next/image";
import type { Practitioner } from "@/types/practitioner";
import { getPractitionerDisplayMeta } from "@/lib/practitioner-display";
import { getSpecialismLabel } from "@/lib/specialism-labels";
import {
  HeartIcon,
  MapPinIcon,
  StarIcon,
  VerifiedIcon,
} from "@/components/icons";

const TIER_CONFIG = {
  Standard: {
    price: 150,
    priceClassName: "text-slate-900",
  },
  Premium: {
    price: 249,
    priceClassName: "text-brand-600",
  },
} as const;

const MAX_SPECIALISMS = 3;

type PractitionerCardProps = {
  practitioner: Practitioner;
};

export function PractitionerCard({ practitioner }: PractitionerCardProps) {
  const { rating, reviews } = getPractitionerDisplayMeta(practitioner);
  const isPremium = practitioner.tier === "Premium";
  const tier = TIER_CONFIG[practitioner.tier];
  const visibleSpecialisms = practitioner.specialisms.slice(0, MAX_SPECIALISMS);

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md ${
        isPremium
          ? "border-amber-300/80 bg-linear-to-b from-amber-50/30 to-white shadow-sm hover:border-amber-400/80"
          : "border-slate-200/80 bg-white shadow-sm hover:border-slate-300"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${
            isPremium
              ? "bg-amber-100/80 text-amber-800"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {isPremium && <StarIcon className="h-3 w-3 text-amber-500" />}
          {practitioner.tier.toUpperCase()}
        </span>
        <button
          type="button"
          aria-label="Save practitioner"
          className={`rounded-lg p-1 transition-colors hover:bg-slate-50/80 ${
            isPremium
              ? "text-amber-300 hover:text-amber-400"
              : "text-slate-300 hover:text-slate-400"
          }`}
        >
          <HeartIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-start gap-3.5">
        <Image
          src={practitioner.avatar}
          alt={practitioner.name}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-white"
        />

        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-center gap-1">
            <h2 className="truncate text-[15px] font-semibold text-slate-900">
              {practitioner.name}
            </h2>
            {isPremium && (
              <VerifiedIcon className="h-4 w-4 shrink-0 text-brand-600" />
            )}
          </div>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-slate-500">
            <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            {practitioner.location}, UK
          </p>
        </div>
      </div>

      <div className="mt-3.5 flex min-h-[52px] flex-wrap content-start gap-1.5">
        {visibleSpecialisms.map((specialism) => (
          <span
            key={specialism}
            className="rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700"
          >
            {getSpecialismLabel(specialism)}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100 pt-3.5">
        <div className="flex items-center gap-1 text-sm">
          <StarIcon className="h-4 w-4 text-amber-400" />
          <span className="font-semibold text-slate-900">{rating}</span>
          <span className="text-slate-500">({reviews} reviews)</span>
        </div>

        <p className={`text-sm font-semibold ${tier.priceClassName}`}>
          £{tier.price}
          <span className="font-normal text-slate-500"> / month</span>
        </p>
      </div>
    </article>
  );
}
