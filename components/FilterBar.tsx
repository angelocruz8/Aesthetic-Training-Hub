"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { Practitioner } from "@/types/practitioner";
import {
  filterPractitioners,
  getFilterOptions,
} from "@/lib/filter-practitioners";
import { ChevronDownIcon, MapPinIcon, SearchIcon, TagIcon } from "@/components/icons";

type FilterBarProps = {
  practitioners: Practitioner[];
  children: (filtered: Practitioner[]) => ReactNode;
};

export function FilterBar({ practitioners, children }: FilterBarProps) {
  const [specialism, setSpecialism] = useState("");
  const [location, setLocation] = useState("");
  const [appliedSpecialism, setAppliedSpecialism] = useState("");
  const [appliedLocation, setAppliedLocation] = useState("");

  const { specialisms, locations } = useMemo(
    () => getFilterOptions(practitioners),
    [practitioners],
  );

  const filtered = useMemo(
    () =>
      filterPractitioners(practitioners, {
        specialism: appliedSpecialism,
        location: appliedLocation,
      }),
    [practitioners, appliedSpecialism, appliedLocation],
  );

  const hasActiveFilters = Boolean(appliedSpecialism || appliedLocation);
  const hasPendingChanges =
    specialism !== appliedSpecialism || location !== appliedLocation;

  function applyFilters() {
    setAppliedSpecialism(specialism);
    setAppliedLocation(location);
  }

  function clearFilters() {
    setSpecialism("");
    setLocation("");
    setAppliedSpecialism("");
    setAppliedLocation("");
  }

  return (
    <>
      <section className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="grid flex-1 gap-3 sm:grid-cols-2">
            <FilterSelect
              icon={<TagIcon className="h-4 w-4 text-slate-400" />}
              label="Filter by specialism"
              value={specialism}
              onChange={setSpecialism}
              options={specialisms}
            />
            <FilterSelect
              icon={<MapPinIcon className="h-4 w-4 text-slate-400" />}
              label="Filter by location"
              value={location}
              onChange={setLocation}
              options={locations}
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={clearFilters}
              disabled={!hasActiveFilters && !specialism && !location}
              className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 disabled:cursor-not-allowed disabled:text-slate-300"
            >
              Clear filters
            </button>
            <button
              type="button"
              onClick={applyFilters}
              disabled={!hasPendingChanges}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-400"
            >
              <SearchIcon className="h-4 w-4" />
              Apply Filters
            </button>
          </div>
        </div>
      </section>

      {children(filtered)}
    </>
  );
}

type FilterSelectProps = {
  icon: ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

function FilterSelect({
  icon,
  label,
  value,
  onChange,
  options,
}: FilterSelectProps) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-2.5">
        {icon}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={label}
        className={`w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-10 text-sm transition-colors hover:border-slate-300 hover:bg-white focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
          value ? "font-medium text-slate-900" : "text-slate-500"
        }`}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </div>
  );
}
