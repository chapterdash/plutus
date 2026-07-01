import type { Transaction } from "@/lib/mock/overview";
import { PanelFooterLink } from "@/components/admin/panel-footer-link";

export function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
      <div className="border-b border-line-soft px-[22px] pb-[14px] pt-[18px]">
        <h2 className="m-0 font-display text-[15.5px] font-semibold tracking-[-0.01em] text-fg">
          Recent transactions
        </h2>
      </div>

      <ul className="m-0 list-none p-0">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className="flex items-center gap-[14px] border-b border-line-soft px-[22px] py-[13px]"
          >
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] border border-line-soft bg-surface-2 font-display text-[14px] font-semibold text-fg">
              {tx.initial}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13.5px] font-[550] text-fg">{tx.name}</div>
              <div className="mt-px text-[12px] text-fg-muted">
                {tx.category} · {tx.date}
              </div>
            </div>
            <div className="whitespace-nowrap font-display text-[14px] font-semibold text-fg">
              {tx.amount}
            </div>
          </li>
        ))}
      </ul>

      <PanelFooterLink href="#">View all transactions</PanelFooterLink>
    </section>
  );
}
