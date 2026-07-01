import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/brand";

/**
 * The physical card, rendered in CSS so we can iterate without image exports.
 * Logo mark is intentionally a neutral monogram until the owl-vs-pillar
 * decision is made. Swap <BrandMark/> when the real logo lands.
 */
function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      {/* placeholder pillar-ish mark: swap for final logo */}
      <rect x="9" y="12" width="4" height="16" rx="1" fill="currentColor" />
      <rect x="18" y="12" width="4" height="16" rx="1" fill="currentColor" />
      <rect x="27" y="12" width="4" height="16" rx="1" fill="currentColor" />
      <rect x="6" y="8" width="28" height="4" rx="1.5" fill="currentColor" />
      <rect x="7" y="28" width="26" height="3" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function CardVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[1.586/1] w-full rounded-2xl p-6",
        "bg-gradient-to-br from-white to-[#e9e9ec] text-ink shadow-lift",
        "ring-1 ring-black/5",
        className,
      )}
    >
      {/* chip */}
      <div className="h-8 w-11 rounded-md bg-gradient-to-br from-[#d8d8dc] to-[#b8b8bf]" />

      {/* mark */}
      <BrandMark className="absolute right-6 top-6 h-10 w-10 text-ink" />

      {/* footer row */}
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-fg-muted">
            {BRAND.name}
          </div>
          <div className="text-[9px] uppercase tracking-[0.14em] text-fg-muted/70">
            Member
          </div>
        </div>
        <div className="text-sm font-semibold italic tracking-tight">
          VISA <span className="not-italic text-[10px] font-normal">DEBIT</span>
        </div>
      </div>
    </div>
  );
}
