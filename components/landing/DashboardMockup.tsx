import {
  Bell,
  CalendarRange,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Gift,
  LayoutDashboard,
  Plus,
  ReceiptText,
  Search,
  Settings,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import { budgets, transactions } from "@/lib/mock-data";
import { PillarIcon } from "./Logo";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Members", icon: Users },
  { label: "Cards", icon: CreditCard },
  { label: "Budgets", icon: CalendarRange },
  { label: "Transactions", icon: ReceiptText },
  { label: "Rewards", icon: Gift },
];

const metrics = [
  {
    label: "Chapter Balance",
    value: "$28,742.50",
    note: "+$4,280 this month",
    icon: CircleDollarSign,
  },
  {
    label: "Spent This Month",
    value: "$9,346.21",
    note: "62% of monthly budget",
    icon: WalletCards,
  },
  {
    label: "Rewards Earned",
    value: "$1,876.34",
    note: "+$214.20 this month",
    icon: TrendingUp,
  },
];

export function DashboardMockup() {
  return (
    <div className="soft-card mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:rounded-[30px] lg:mt-16">
      <div className="grid min-h-[720px] lg:grid-cols-[210px_1fr]">
        <aside className="hidden border-r border-zinc-200 bg-zinc-50/70 p-5 lg:flex lg:flex-col">
          <div className="flex items-center gap-2.5 px-1">
            <span className="flex size-8 items-center justify-center rounded-lg bg-zinc-950">
              <PillarIcon className="size-4.5" inverted />
            </span>
            <span className="text-sm font-semibold tracking-tight">Plutus</span>
          </div>
          <button
            className="mt-7 flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-left shadow-sm"
            type="button"
          >
            <span>
              <span className="block text-[9px] uppercase tracking-wider text-zinc-400">
                Chapter
              </span>
              <span className="mt-0.5 block text-xs font-semibold">Alpha Chapter</span>
            </span>
            <ChevronDown className="size-3.5 text-zinc-400" />
          </button>
          <div className="mt-7 space-y-1">
            {navItems.map((item) => (
              <div
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium ${
                  item.active
                    ? "bg-zinc-950 text-white shadow-sm"
                    : "text-zinc-500"
                }`}
                key={item.label}
              >
                <item.icon className="size-4" strokeWidth={1.8} />
                {item.label}
              </div>
            ))}
          </div>
          <div className="mt-auto border-t border-zinc-200 pt-4">
            <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium text-zinc-500">
              <Settings className="size-4" />
              Settings
            </div>
            <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-white p-2.5">
              <span className="flex size-8 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-semibold">
                CT
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[11px] font-semibold">
                  Chapter Treasurer
                </span>
                <span className="block text-[9px] text-zinc-400">Admin</span>
              </span>
            </div>
          </div>
        </aside>

        <div className="min-w-0 bg-white">
          <div className="flex h-[72px] items-center justify-between border-b border-zinc-100 px-4 sm:px-7">
            <div className="flex items-center gap-3 lg:hidden">
              <span className="flex size-8 items-center justify-center rounded-lg bg-zinc-950">
                <PillarIcon className="size-4" inverted />
              </span>
              <span className="text-sm font-semibold">Overview</span>
            </div>
            <div className="relative hidden w-64 sm:block lg:ml-0">
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-zinc-400" />
              <div className="rounded-lg bg-zinc-100 py-2 pl-9 text-[11px] text-zinc-400">
                Search anything...
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500">
                <Bell className="size-4" />
              </span>
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-3 py-2.5 text-[11px] font-semibold text-white sm:px-4"
                type="button"
              >
                <Plus className="size-3.5" />
                Add Funds
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-7">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Monday, June 22
                </p>
                <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.035em]">
                  Chapter overview
                </h3>
              </div>
              <p className="text-[11px] text-zinc-400">Last updated just now</p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  className="rounded-2xl border border-zinc-200 p-4 sm:p-5"
                  key={metric.label}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium text-zinc-500">
                      {metric.label}
                    </p>
                    <span className="flex size-7 items-center justify-center rounded-lg bg-zinc-100">
                      <metric.icon className="size-3.5 text-zinc-600" />
                    </span>
                  </div>
                  <p className="mt-4 font-mono text-xl font-medium tracking-[-0.04em] sm:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[9px] text-emerald-600">{metric.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.65fr_1fr]">
              <div className="overflow-hidden rounded-2xl border border-zinc-200">
                <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-4 sm:px-5">
                  <div>
                    <p className="text-sm font-semibold">Recent transactions</p>
                    <p className="mt-1 text-[9px] text-zinc-400">
                      Activity across all member cards
                    </p>
                  </div>
                  <span className="text-[10px] font-medium text-zinc-500">View all</span>
                </div>
                <div>
                  {transactions.map((transaction) => (
                    <div
                      className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-zinc-100 px-4 py-3.5 last:border-b-0 sm:grid-cols-[1fr_110px_80px] sm:px-5"
                      key={transaction.merchant}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-[9px] font-semibold text-zinc-600">
                          {transaction.code}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-semibold">
                            {transaction.merchant}
                          </p>
                          <p className="mt-0.5 truncate text-[9px] text-zinc-400">
                            {transaction.category}
                          </p>
                        </div>
                      </div>
                      <p className="hidden text-[10px] text-zinc-400 sm:block">
                        {transaction.date}
                      </p>
                      <p className="text-right font-mono text-[10px] font-medium">
                        {transaction.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Upcoming budgets</p>
                    <p className="mt-1 text-[9px] text-zinc-400">
                      Planned chapter spend
                    </p>
                  </div>
                  <CalendarRange className="size-4 text-zinc-400" />
                </div>
                <div className="mt-5 space-y-5">
                  {budgets.map((budget) => (
                    <div key={budget.name}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-semibold">{budget.name}</p>
                          <p className="mt-1 text-[9px] text-zinc-400">{budget.date}</p>
                        </div>
                        <p className="font-mono text-[10px] font-medium">
                          {budget.amount}
                        </p>
                      </div>
                      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-zinc-100">
                        <div
                          className="h-full rounded-full bg-zinc-900"
                          style={{ width: `${budget.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl bg-zinc-950 p-4 text-white">
                  <p className="text-[9px] uppercase tracking-wider text-white/40">
                    This month
                  </p>
                  <div className="mt-2 flex items-end justify-between">
                    <p className="font-mono text-lg">$12,450</p>
                    <p className="text-[9px] text-white/45">5 active budgets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
