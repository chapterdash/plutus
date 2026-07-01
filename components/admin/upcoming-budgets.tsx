import type { Budget } from "@/lib/mock/overview";
import { PanelFooterLink } from "@/components/admin/panel-footer-link";

export function UpcomingBudgets({ budgets }: { budgets: Budget[] }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
      <div className="border-b border-line-soft px-[22px] pb-[14px] pt-[18px]">
        <h2 className="m-0 font-display text-[15.5px] font-semibold tracking-[-0.01em] text-fg">
          Upcoming budgets
        </h2>
      </div>

      <ul className="m-0 list-none p-0">
        {budgets.map((b) => (
          <li key={b.id} className="border-b border-line-soft px-[22px] py-4">
            <div className="flex items-baseline justify-between gap-3">
              <div className="text-[13.5px] font-semibold text-fg">{b.name}</div>
              <div className="whitespace-nowrap font-display text-[14px] font-semibold text-fg">
                {b.amount}
              </div>
            </div>
            <div className="mt-0.5 text-[12px] text-fg-muted">{b.dates}</div>
            <div className="mt-[11px] flex items-center gap-[10px]">
              <div
                className="h-[6px] flex-1 overflow-hidden rounded-full bg-track"
                role="progressbar"
                aria-valuenow={b.pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${b.name} allocated`}
              >
                <div className="h-full rounded-full bg-fg" style={{ width: `${b.pct}%` }} />
              </div>
              <div className="flex-none whitespace-nowrap text-[11.5px] text-fg-muted">
                {b.pct}% allocated
              </div>
            </div>
          </li>
        ))}
      </ul>

      <PanelFooterLink href="#">View all budgets</PanelFooterLink>
    </section>
  );
}
