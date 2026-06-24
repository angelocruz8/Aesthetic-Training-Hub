import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { DirectoryHero } from "@/components/practitioners/DirectoryHero";
import { FeaturesSection } from "@/components/practitioners/FeaturesSection";
import { FilterBar } from "@/components/practitioners/FilterBar";
import { PractitionerCard } from "@/components/PractitionerCard";
import { ChevronDownIcon } from "@/components/icons";
import { practitioners } from "@/data/practitioners";

export const metadata: Metadata = {
  title: "Practitioner Directory | Aesthetic Training Hub",
  description:
    "Discover vetted UK aesthetic practitioners and expert trainers.",
};

export default function PractitionersPage() {
  const total = practitioners.length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <DirectoryHero />
        <FilterBar />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            Showing{" "}
            <span className="font-medium text-slate-900">{total}</span> of{" "}
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

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practitioners.map((practitioner) => (
            <PractitionerCard
              key={practitioner.id}
              practitioner={practitioner}
            />
          ))}
        </div>

        <FeaturesSection />
      </main>
    </div>
  );
}
