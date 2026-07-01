"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useFunding } from "@/components/admin/add-funds";
import { programBalance, type FundingSource } from "@/lib/mock/overview";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

const shell =
  "flex flex-col gap-4 rounded-2xl border border-line bg-surface px-[22px] py-4 shadow-card md:flex-row md:items-center md:justify-between";

const glyphTile =
  "flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border border-line-soft bg-surface-2 text-fg";

const actionPill = "h-[34px] gap-1.5 whitespace-nowrap rounded-full px-4 text-[13px] font-semibold";

function BankGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}

const statusMap: Record<FundingSource["status"], { label: string; dot: string }> = {
  connected: { label: "Connected", dot: "bg-success" },
  pending: { label: "Pending", dot: "bg-fg-muted" },
  disconnected: { label: "Disconnected", dot: "bg-danger" },
};

function StatusPill({ status }: { status: FundingSource["status"] }) {
  const s = statusMap[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2 py-0.5 text-[11.5px] font-medium text-fg">
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} aria-hidden />
      {s.label}
    </span>
  );
}

/**
 * Slim strip above the stat cards. Shows the chapter's linked external bank (the
 * funding source) and the program balance it tops up. Empty state prompts linking.
 */
export function FundingStrip({ source }: { source: FundingSource | null }) {
  const funding = useFunding();

  if (!source) {
    return (
      <section className={shell} aria-label="Funding source">
        <div className="flex items-center gap-3">
          <div className={glyphTile}>
            <BankGlyph />
          </div>
          <span className="text-[13.5px] font-[550] text-fg">
            Link your chapter&rsquo;s bank account to start funding cards
          </span>
        </div>
        <Button variant="solid" onClick={() => funding?.linkAccount()} className={actionPill}>
          Link account
        </Button>
      </section>
    );
  }

  return (
    <section className={shell} aria-label="Funding source">
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
        <div className={glyphTile}>
          <BankGlyph />
        </div>
        <span className="text-[13.5px] font-[550] text-fg">
          {source.institutionName} ••{source.mask}
        </span>
        <StatusPill status={source.status} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="text-[13px] text-fg-muted">
          Chapter balance <span className="font-semibold text-fg">{programBalance.amount}</span> ·{" "}
          {programBalance.caption}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="solid" onClick={() => funding?.addFunds()} className={actionPill}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add funds
          </Button>
          <a
            href="#"
            className={cn(
              "rounded text-[13px] font-[550] text-fg-muted transition-colors hover:text-fg",
              focusRing,
            )}
          >
            Manage funding
          </a>
        </div>
      </div>
    </section>
  );
}
