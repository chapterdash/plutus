import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

const links = [
  { label: "Product", href: "#product" },
  { label: "For Chapters", href: "#chapters" },
  { label: "For Members", href: "#members" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-shell items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-paper text-ink">
            <span className="text-sm font-bold">{BRAND.name[0]}</span>
          </div>
          <span className="font-display text-base font-bold tracking-tight text-paper">
            {BRAND.name}
          </span>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-paper-dim transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button variant="primary" size="sm">
            Get started
          </Button>
        </div>
      </nav>
    </header>
  );
}
