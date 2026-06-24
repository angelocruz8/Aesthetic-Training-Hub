import Image from "next/image";

export function DirectoryHero() {
  return (
    <section className="flex flex-col items-start justify-between gap-8 pb-1 pt-6 md:flex-row md:items-center md:gap-12 md:pt-8">
      <div className="max-w-lg">
        <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
          Practitioner Directory
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-[17px] sm:leading-7">
          Discover vetted aesthetics trainers across the UK. Filter by specialism
          to find the right expert for your learning journey.
        </p>
      </div>

      <div className="hidden shrink-0 md:block" aria-hidden>
        <Image
          src="/images/uk-directory-hero.png"
          alt=""
          width={300}
          height={200}
          className="h-auto w-[260px] object-contain lg:w-[300px]"
          style={{ height: "auto" }}
          priority
        />
      </div>
    </section>
  );
}
