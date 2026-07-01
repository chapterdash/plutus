import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { DashboardShell } from "@/components/admin/dashboard-shell";
import { StatCard } from "@/components/admin/stat-card";
import { RecentTransactions } from "@/components/admin/recent-transactions";
import { UpcomingBudgets } from "@/components/admin/upcoming-budgets";
import { stats, transactions, budgets } from "@/lib/mock/overview";

export const metadata: Metadata = {
  title: `Overview — ${BRAND.name}`,
};

export default function AdminOverviewPage() {
  return (
    <DashboardShell title="Overview">
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
    </DashboardShell>
  );
}
