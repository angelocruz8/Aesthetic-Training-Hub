"use client";

import { useMemo, useState } from "react";
import { PractitionerCard } from "@/components/PractitionerCard";
import { FilterBar } from "@/components/FilterBar";
import { ChevronDownIcon } from "@/components/icons";
import {
  SORT_OPTIONS,
  sortPractitioners,
  type SortOption,
} from "@/lib/filter-practitioners";
import type { Practitioner } from "@/types/practitioner";

type PractitionerDirectoryProps = {
  practitioners: Practitioner[];
};

export function PractitionerDirectory({
  practitioners,
}: PractitionerDirectoryProps) {
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const total = practitioners.length;

  return (
    <FilterBar practitioners={practitioners}>
      {(filtered) => (
        <PractitionerResults
          filtered={filtered}
          total={total}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      )}
    </FilterBar>
  );
}

type PractitionerResultsProps = {
  filtered: Practitioner[];
  total: number;
  sortBy: SortOption;
  onSortChange: (sortBy: SortOption) => void;
};

function PractitionerResults({
  filtered,
  total,
  sortBy,
  onSortChange,
}: PractitionerResultsProps) {
  const sorted = useMemo(
    () => sortPractitioners(filtered, sortBy),
    [filtered, sortBy],
  );

  return (
    <>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          Showing{" "}
          <span className="font-medium text-slate-900">{sorted.length}</span> of{" "}
          <span className="font-medium text-slate-900">{total}</span>{" "}
          practitioners
        </p>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>Sort by:</span>
          <div className="relative">
            <label htmlFor="sort-by" className="sr-only">
              Sort practitioners
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(event) =>
                onSortChange(event.target.value as SortOption)
              }
              className="appearance-none rounded-lg border border-slate-200 bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-slate-900 transition-colors hover:border-slate-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      </div>

      {sorted.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((practitioner) => (
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
  );
}
