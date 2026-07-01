import {
  ArrowRight,
  CalendarPlus,
  Check,
  CirclePause,
  Coins,
  FileCheck2,
  Gift,
  HandCoins,
  Layers3,
  ReceiptText,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UserRoundCheck,
  UsersRound,
  WalletCards,
  Zap,
} from "lucide-react";
import { DashboardMockup } from "@/components/landing/DashboardMockup";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { MobileMockup } from "@/components/landing/MobileMockup";
import { Navbar } from "@/components/landing/Navbar";
import { PerksSection } from "@/components/landing/PerksSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { SectionHeading } from "@/components/landing/SectionHeading";

const coreFeatures = [
  {
    title: "Chapter Funded",
    description: "Treasurers allocate funds. Members spend only what’s assigned.",
    icon: WalletCards,
  },
  {
    title: "Smart Controls",
    description: "Set limits, categories, time windows, and receipt rules.",
    icon: SlidersHorizontal,
  },
  {
    title: "Instant Budgets",
    description: "Push funds for events, roles, reimbursements, or perks.",
    icon: Zap,
  },
  {
    title: "Earn Rewards",
    description: "Unlock cashback, partner savings, and chapter rewards.",
    icon: Sparkles,
  },
];

const memberBenefits = [
  "One premium card for chapter-funded spend",
  "A clear view of every assigned budget",
  "Receipts and card controls right in the app",
  "Exclusive local and national partner perks",
];

const controls = [
  {
    title: "Allocate to all members",
    description: "Send the same amount to every active member in a few clicks.",
    icon: UsersRound,
    meta: "128 members",
  },
  {
    title: "Create event budget",
    description: "Set a purpose, total, eligible members, and an end date.",
    icon: CalendarPlus,
    meta: "Time boxed",
  },
  {
    title: "Reimburse members",
    description: "Review submitted expenses and return approved funds quickly.",
    icon: HandCoins,
    meta: "3 pending",
  },
  {
    title: "Freeze cards",
    description: "Pause any member card instantly without affecting the chapter.",
    icon: CirclePause,
    meta: "Instant control",
  },
  {
    title: "Require receipts",
    description: "Set receipt rules by amount, category, or assigned budget.",
    icon: ReceiptText,
    meta: "Policy ready",
  },
  {
    title: "Track chapter savings",
    description: "See rewards and partner discounts add up across every purchase.",
    icon: Coins,
    meta: "$1,876 saved",
  },
];

const steps = [
  {
    number: "01",
    title: "Chapter signs up",
    description: "Choose your pilot setup and configure chapter-level controls.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Members receive cards",
    description: "Every eligible member gets a premium physical Plutus card.",
    icon: UserRoundCheck,
  },
  {
    number: "03",
    title: "Treasurer assigns funds",
    description: "Launch budgets, distribute perks, and manage spend from one place.",
    icon: Layers3,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="relative z-20 bg-white px-5 sm:px-8" id="feature-strip">
          <div className="soft-card mx-auto -translate-y-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:-translate-y-6 sm:rounded-[28px]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {coreFeatures.map((feature, index) => (
                <FeatureCard
                  description={feature.description}
                  icon={feature.icon}
                  index={`0${index + 1}`}
                  key={feature.title}
                  title={feature.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="overflow-hidden bg-[#f5f5f3] px-5 py-24 sm:px-8 sm:py-32"
          id="product"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="One operating system"
                title="See the whole chapter clearly."
              />
              <p className="max-w-md text-base leading-7 text-zinc-500">
                Give treasurers a clean command center for balances, member
                activity, event budgets, receipts, and rewards—without the
                spreadsheet shuffle.
              </p>
            </div>
            <DashboardMockup />
          </div>
        </section>

        <section className="overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32" id="members">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div>
              <SectionHeading
                description="Members get a card that feels as considered as the chapter behind it. They can spend only from chapter-assigned funds—never their own."
                eyebrow="The member experience"
                title="A card they’ll actually want to carry."
              />
              <div className="mt-8 space-y-4">
                {memberBenefits.map((benefit) => (
                  <div className="flex items-start gap-3" key={benefit}>
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <Check className="size-3" strokeWidth={2.2} />
                    </span>
                    <p className="text-sm leading-6 text-zinc-600">{benefit}</p>
                  </div>
                ))}
              </div>
              <a
                className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950"
                href="#pricing"
              >
                Bring cards to your chapter
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="dot-grid relative rounded-[36px] bg-[#f3f3f1] px-6 py-14 sm:px-12 sm:py-16">
              <MobileMockup />
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24 text-white sm:px-8 sm:py-32"
          id="chapters"
        >
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute -right-56 top-0 size-[540px] rounded-full bg-white/[0.035] blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
              <SectionHeading
                description="Create guardrails once, then move faster with every member, event, reimbursement, and purchase."
                eyebrow="Treasurer controls"
                inverted
                title="Control without the busywork."
              />
              <div className="flex items-center gap-3 lg:justify-end">
                <span className="flex size-10 items-center justify-center rounded-xl bg-white text-zinc-950">
                  <ShieldCheck className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold">Built-in guardrails</p>
                  <p className="mt-1 text-[10px] text-white/40">
                    Limits, rules, and visibility
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {controls.map((control) => (
                <article
                  className="group flex min-h-60 flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.075] sm:rounded-[24px]"
                  key={control.title}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                      <control.icon className="size-4.5" strokeWidth={1.7} />
                    </span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[8px] text-white/35">
                      {control.meta}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-base font-semibold tracking-[-0.025em]">
                      {control.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/42">
                      {control.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PerksSection />

        <section
          className="bg-white px-5 py-24 sm:px-8 sm:py-32"
          id="how-it-works"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              align="center"
              description="From setup to everyday spending, Plutus keeps the process simple for everyone."
              eyebrow="How it works"
              title="Three steps. One connected chapter."
            />
            <div className="relative mt-16 grid gap-4 lg:grid-cols-3">
              <div className="absolute left-[16.6%] right-[16.6%] top-11 hidden border-t border-dashed border-zinc-300 lg:block" />
              {steps.map((step) => (
                <article className="relative bg-white text-center" key={step.number}>
                  <div className="relative z-10 mx-auto flex size-[88px] items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm">
                    <step.icon className="size-6 text-zinc-800" strokeWidth={1.5} />
                  </div>
                  <p className="mt-7 font-mono text-[10px] text-zinc-400">{step.number}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em]">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-zinc-500">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PricingSection />

        <section className="bg-[#f5f5f3] px-5 pb-5 sm:px-8 sm:pb-8" id="demo">
          <div className="hero-surface relative mx-auto overflow-hidden rounded-[28px] px-6 py-20 text-center text-white sm:rounded-[38px] sm:px-10 sm:py-28">
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="relative z-10 mx-auto max-w-4xl">
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.07]">
                <Gift className="size-5" />
              </div>
              <h2 className="mt-7 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Bring premium chapter cards to your campus.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/50">
                Join the pilot and help define a smarter standard for chapter
                spending, member access, and shared rewards.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5"
                  href="mailto:hello@chapterdash.com?subject=Plutus%20Pilot"
                >
                  Join the Pilot
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  href="mailto:hello@chapterdash.com?subject=Book%20a%20Plutus%20Demo"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
