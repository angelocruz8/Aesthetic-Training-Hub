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
    <header className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
            <LogoIcon className="h-5 w-5" />
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-900">
            Aesthetic Training Hub
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.active
                  ? "text-brand-600 underline decoration-2 underline-offset-8"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 sm:inline-flex"
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
