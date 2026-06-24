import type { Practitioner } from "@/types/practitioner";
import { getPractitionerDisplayMeta } from "@/lib/practitioner-display";
import {
  HeartIcon,
  MapPinIcon,
  StarIcon,
  VerifiedIcon,
} from "@/components/icons";

type PractitionerCardProps = {
  practitioner: Practitioner;
};

export function PractitionerCard({ practitioner }: PractitionerCardProps) {
  const { rating, reviews, price, initials, avatarGradient } =
    getPractitionerDisplayMeta(practitioner);
  const isPremium = practitioner.tier === "Premium";

  return (
    <article
      className={`relative flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
        isPremium ? "border-amber-300/80" : "border-slate-200/80"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-bold tracking-wide ${
            isPremium
              ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
              : "bg-slate-100 text-slate-600 ring-1 ring-slate-200"
          }`}
        >
          {isPremium && <StarIcon className="h-3 w-3" />}
          {practitioner.tier.toUpperCase()}
        </span>
        <button
          type="button"
          aria-label="Save practitioner"
          className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-slate-50 hover:text-slate-400"
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
            <h2 className="truncate text-base font-semibold text-slate-900">
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
        {practitioner.specialisms.slice(0, 3).map((specialism) => (
          <span
            key={specialism}
            className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
          >
            {specialism}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1.5 text-sm">
          <StarIcon className="h-4 w-4 text-amber-400" />
          <span className="font-semibold text-slate-900">{rating}</span>
          <span className="text-slate-500">({reviews} reviews)</span>
        </div>
        <p
          className={`text-sm font-semibold ${
            isPremium ? "text-brand-600" : "text-slate-900"
          }`}
        >
          £{price}
          <span className="font-normal text-slate-500"> / month</span>
        </p>
      </div>
    </article>
  );
}
