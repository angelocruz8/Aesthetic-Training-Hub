import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { DirectoryHero } from "@/components/practitioners/DirectoryHero";
import { FeaturesSection } from "@/components/practitioners/FeaturesSection";
import { PractitionerDirectory } from "@/components/PractitionerDirectory";
import { practitioners } from "@/data/practitioners";

export const metadata: Metadata = {
  title: "Practitioner Directory | Aesthetic Training Hub",
  description:
    "Discover vetted UK aesthetic practitioners and expert trainers.",
};

export default function PractitionersPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <DirectoryHero />
        <PractitionerDirectory practitioners={practitioners} />
        <FeaturesSection />
      </main>
    </div>
  );
}
