import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { DashboardShell } from "@/components/admin/dashboard-shell";
import { FundingProvider } from "@/components/admin/add-funds";
import { FundingStrip } from "@/components/admin/funding-strip";
import { StatCard } from "@/components/admin/stat-card";
import { RecentTransactions } from "@/components/admin/recent-transactions";
import { UpcomingBudgets } from "@/components/admin/upcoming-budgets";
import { fundingSource, stats, transactions, budgets } from "@/lib/mock/overview";

export const metadata: Metadata = {
  title: `Overview — ${BRAND.name}`,
};

export default function AdminOverviewPage() {
  return (
    <FundingProvider source={fundingSource}>
      <DashboardShell title="Overview">
        {/* Funding source — the chapter's external bank that tops up the program balance */}
        <FundingStrip source={fundingSource} />

        {/* Stat cards */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </section>

        {/* Panels */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <RecentTransactions transactions={transactions} />
          <UpcomingBudgets budgets={budgets} />
        </div>

        {/* Compliance disclosure — kept visible on this banking-adjacent screen */}
        <p className="max-w-[560px] text-[11.5px] leading-relaxed text-fg-muted">
          {BRAND.disclosure}
        </p>
      </DashboardShell>
    </FundingProvider>
  );
}
