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
      "Every practitioner is verified for qualifications, insurance, and clinical standards.",
  },
  {
    icon: GraduationCapIcon,
    title: "Expert Trainers",
    description:
      "Learn from experienced mentors offering structured training and mentorship.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safe & Trusted",
    description:
      "A trusted marketplace built for patient safety and professional excellence.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200/60 bg-slate-100/60 px-6 py-10 sm:px-10">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <feature.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
