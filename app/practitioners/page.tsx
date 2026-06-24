import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { DirectoryHero } from "@/components/practitioners/DirectoryHero";
import { FeaturesSection } from "@/components/practitioners/FeaturesSection";
import { PractitionerDirectory } from "@/components/PractitionerDirectory";
import { practitioners } from "@/data/practitioners";

export const metadata: Metadata = {
  title: "Practitioner Directory | Aesthetic Training Hub",
  description:
    "Discover vetted aesthetics trainers across the UK. Filter by specialism to find the right expert for your learning journey.",
};

export default function PractitionersPage() {
  return (
    <div className="min-h-screen bg-background text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <DirectoryHero />
        <PractitionerDirectory practitioners={practitioners} />
        <FeaturesSection />
      </main>
    </div>
  );
}
