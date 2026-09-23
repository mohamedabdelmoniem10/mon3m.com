import Link from "next/link";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-mist/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-baseline gap-2" aria-label={`${site.name}, home`}>
          <span className="font-display text-lg font-semibold tracking-tight">Mohamed Abdelmoniem</span>
          <span className="ar hidden text-sm text-muted sm:inline" lang="ar" dir="rtl">
            {site.nameAr}
          </span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="rounded-full px-3 py-1.5 text-sm text-ink-2 transition-colors hover:bg-paper hover:text-ink"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.cv}
            className="rounded-full bg-pine px-3.5 py-1.5 text-sm font-medium text-pine-ink transition-opacity hover:opacity-90"
          >
            CV
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
