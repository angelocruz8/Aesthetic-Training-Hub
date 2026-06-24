export function DirectoryHero() {
  return (
    <section className="flex flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center md:py-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Practitioner Directory
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Discover vetted UK aesthetic practitioners and expert trainers. Connect
          with professionals for treatments, mentorship, and career development.
        </p>
      </div>

      <div className="hidden shrink-0 md:block" aria-hidden>
        <UkMapIllustration />
      </div>
    </section>
  );
}

function UkMapIllustration() {
  return (
    <svg
      width="220"
      height="200"
      viewBox="0 0 220 200"
      fill="none"
      className="text-brand-200"
    >
      <ellipse cx="110" cy="100" rx="100" ry="90" fill="currentColor" opacity="0.35" />
      <path
        d="M95 45c8-6 22-4 28 6 10 2 18 12 16 24-2 14-12 22-24 28-14 8-30 4-38-8-8-10-6-26 4-34 4-8 10-14 14-16z"
        fill="#c7d2fe"
        stroke="#a5b4fc"
        strokeWidth="1.5"
      />
      <path
        d="M130 70c6-2 14 2 16 10 2 10-4 18-12 20-8 2-16-4-18-12-2-8 4-16 14-18z"
        fill="#ddd6fe"
        stroke="#c4b5fd"
        strokeWidth="1.5"
      />
      <circle cx="108" cy="82" r="14" fill="#6366f1" opacity="0.9" />
      <circle cx="108" cy="76" r="5" fill="white" />
      <path
        d="M108 90v18"
        stroke="#6366f1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="155"
        cy="125"
        r="22"
        fill="white"
        stroke="#c7d2fe"
        strokeWidth="2"
      />
      <circle cx="155" cy="125" r="10" stroke="#6366f1" strokeWidth="2.5" fill="none" />
      <path
        d="M165 135l8 8"
        stroke="#6366f1"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
