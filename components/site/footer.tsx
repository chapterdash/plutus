import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink">
      <div className="mx-auto flex max-w-shell flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <span className="font-display text-sm font-bold text-paper">{BRAND.name}</span>
        <p className="max-w-md text-xs leading-relaxed text-paper-dim">{BRAND.disclosure}</p>
        <span className="text-xs text-paper-dim">
          © {new Date().getFullYear()} {BRAND.name}
        </span>
      </div>
    </footer>
  );
}
