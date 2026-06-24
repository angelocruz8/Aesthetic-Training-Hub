import {
  GraduationCapIcon,
  ShieldCheckIcon,
  ShieldIcon,
} from "@/components/icons";

const features = [
  {
    icon: ShieldIcon,
    title: "Vetted Professionals",
    description:
      "All practitioners are verified and meet our high standards.",
  },
  {
    icon: GraduationCapIcon,
    title: "Expert Trainers",
    description:
      "Learn from experienced practitioners with real-world expertise.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safe & Trusted",
    description: "Your safety and education are our priority.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mt-14 rounded-2xl bg-brand-50 px-6 py-10 sm:px-10">
      <div className="grid gap-8 md:grid-cols-3 md:gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <feature.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-1.5 max-w-[220px] text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
