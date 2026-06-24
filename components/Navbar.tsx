import Link from "next/link";
import { LogoIcon } from "@/components/icons";

const navLinks = [
  { label: "Find a Practitioner", href: "/practitioners", active: true },
  { label: "For Students", href: "#" },
  { label: "For Practitioners", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/practitioners" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <LogoIcon className="h-4 w-4" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-slate-900">
            Aesthetic Training Hub
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.active
                  ? "text-brand-600 underline decoration-brand-600 decoration-2 underline-offset-[10px]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:inline-flex"
          >
            Log in
          </button>
          <button
            type="button"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Join the Hub
          </button>
        </div>
      </div>
    </header>
  );
}
