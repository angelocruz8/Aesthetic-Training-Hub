import { ChevronDownIcon, MapPinIcon, SearchIcon, TagIcon } from "@/components/icons";

export function FilterBar() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="grid flex-1 gap-3 sm:grid-cols-2">
          <FilterSelect
            icon={<TagIcon className="h-4 w-4 text-slate-400" />}
            label="Filter by specialism"
          />
          <FilterSelect
            icon={<MapPinIcon className="h-4 w-4 text-slate-400" />}
            label="Filter by location"
          />
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            Clear filters
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            <SearchIcon className="h-4 w-4" />
            Apply Filters
          </button>
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-left text-sm text-slate-500 transition-colors hover:border-slate-300 hover:bg-white"
    >
      <span className="flex items-center gap-2.5">
        {icon}
        {label}
      </span>
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-slate-400" />
    </button>
  );
}
