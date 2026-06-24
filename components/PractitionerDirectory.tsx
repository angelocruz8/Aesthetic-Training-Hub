"use client";

import { PractitionerCard } from "@/components/PractitionerCard";
import { FilterBar } from "@/components/FilterBar";
import { ChevronDownIcon } from "@/components/icons";
import type { Practitioner } from "@/types/practitioner";

type PractitionerDirectoryProps = {
  practitioners: Practitioner[];
};

export function PractitionerDirectory({
  practitioners,
}: PractitionerDirectoryProps) {
  const total = practitioners.length;

  return (
    <FilterBar practitioners={practitioners}>
      {(filtered) => (
        <>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">
              Showing{" "}
              <span className="font-medium text-slate-900">{filtered.length}</span>{" "}
              of{" "}
              <span className="font-medium text-slate-900">{total}</span>{" "}
              practitioners
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm transition-colors hover:border-slate-300"
            >
              Sort by:{" "}
              <span className="font-medium text-slate-900">Recommended</span>
              <ChevronDownIcon className="h-4 w-4 text-slate-400" />
            </button>
          </div>

          {filtered.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((practitioner) => (
                <PractitionerCard
                  key={practitioner.id}
                  practitioner={practitioner}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
              <p className="text-base font-medium text-slate-900">
                No practitioners match your filters
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Try adjusting your specialism or location selection.
              </p>
            </div>
          )}
        </>
      )}
    </FilterBar>
  );
}
