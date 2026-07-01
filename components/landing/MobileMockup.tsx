import {
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  FileCheck2,
  LockKeyhole,
  Receipt,
} from "lucide-react";
import { memberTransactions } from "@/lib/mock-data";
import { PillarIcon } from "./Logo";

const actions = [
  { label: "Details", icon: CreditCard },
  { label: "Freeze", icon: LockKeyhole },
  { label: "Receipts", icon: Receipt },
];

export function MobileMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <div className="absolute -left-14 top-24 size-52 rounded-full bg-zinc-200/70 blur-3xl" />
      <div className="absolute -right-8 bottom-24 size-44 rounded-full bg-zinc-300/60 blur-3xl" />
      <div className="phone-shadow relative rounded-[46px] border-[8px] border-zinc-950 bg-zinc-950 p-1.5">
        <div className="overflow-hidden rounded-[34px] bg-[#f4f4f4]">
          <div className="relative flex h-10 items-center justify-between px-5 pt-2 text-[9px] font-semibold">
            <span>9:41</span>
            <span className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-zinc-950" />
            <span>● ◔</span>
          </div>
          <div className="px-4 pb-5 pt-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] text-zinc-400">Good morning</p>
                <p className="mt-0.5 text-sm font-semibold">Avery Morgan</p>
              </div>
              <span className="flex size-8 items-center justify-center rounded-full bg-zinc-950 text-[9px] font-semibold text-white">
                AM
              </span>
            </div>

            <div className="metal-card-dark relative mt-4 aspect-[1.6/1] overflow-hidden rounded-2xl p-5 text-white">
              <div className="flex items-start justify-between">
                <PillarIcon className="size-6" inverted />
                <span className="text-[7px] font-semibold tracking-[0.14em] text-white/50">
                  PLUTUS
                </span>
              </div>
              <div className="absolute inset-x-5 bottom-4 flex items-end justify-between">
                <span className="text-[8px] tracking-[0.12em] text-white/65">
                  AVERY MORGAN
                </span>
                <span className="text-[8px] font-bold italic text-white/65">VISA</span>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-[9px] font-medium text-zinc-400">Available balance</p>
              <div className="mt-1.5 flex items-center justify-between">
                <p className="font-mono text-2xl font-semibold tracking-[-0.05em]">
                  $2,341.50
                </p>
                <span className="flex size-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CircleDollarSign className="size-4" />
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {actions.map((action) => (
                <div
                  className="flex flex-col items-center rounded-2xl bg-white px-2 py-3 shadow-sm"
                  key={action.label}
                >
                  <action.icon className="size-4 text-zinc-700" strokeWidth={1.8} />
                  <span className="mt-2 text-[8px] font-medium">{action.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold">Active budgets</p>
                <ChevronRight className="size-3.5 text-zinc-400" />
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-xl bg-zinc-50 p-3">
                <span className="flex size-8 items-center justify-center rounded-lg bg-zinc-950 text-white">
                  <FileCheck2 className="size-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between">
                    <p className="text-[9px] font-semibold">Formal Weekend</p>
                    <p className="font-mono text-[8px]">$425 left</p>
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-zinc-200">
                    <div className="h-1 w-[68%] rounded-full bg-zinc-950" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold">Recent transactions</p>
                <span className="text-[8px] text-zinc-400">See all</span>
              </div>
              <div className="mt-1">
                {memberTransactions.map((transaction) => (
                  <div
                    className="flex items-center border-b border-zinc-100 py-2.5 last:border-b-0"
                    key={transaction.merchant}
                  >
                    <span className="flex size-7 items-center justify-center rounded-lg bg-zinc-100 text-[7px] font-semibold">
                      {transaction.code}
                    </span>
                    <div className="ml-2.5">
                      <p className="text-[9px] font-semibold">{transaction.merchant}</p>
                      <p className="mt-0.5 text-[7px] text-zinc-400">{transaction.date}</p>
                    </div>
                    <p className="ml-auto font-mono text-[8px] font-medium">
                      {transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
