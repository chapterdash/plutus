import {
  ArrowUpRight,
  BusFront,
  Coffee,
  MapPin,
  Shirt,
  ShoppingBag,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const perks = [
  {
    offer: "20% off",
    partner: "Greek Gear",
    detail: "Member apparel & chapter orders",
    icon: Shirt,
    tone: "bg-zinc-950 text-white",
  },
  {
    offer: "$5 off",
    partner: "DoorDash",
    detail: "On qualifying chapter orders",
    icon: Coffee,
    tone: "bg-[#eeeeec] text-zinc-950",
  },
  {
    offer: "10% off",
    partner: "Campus Bookstore",
    detail: "Supplies, books & merchandise",
    icon: ShoppingBag,
    tone: "bg-[#d9d9d6] text-zinc-950",
  },
  {
    offer: "Save more",
    partner: "Formal transportation",
    detail: "Preferred group transportation rates",
    icon: BusFront,
    tone: "bg-white text-zinc-950",
  },
];

const categories = [
  "Local campus deals",
  "Greek apparel discounts",
  "Event vendor savings",
  "Transportation partners",
  "Chapter rewards pool",
];

export function PerksSection() {
  return (
    <section className="overflow-hidden bg-zinc-950 px-5 py-24 text-white sm:px-8 sm:py-32" id="benefits">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_.75fr]">
          <SectionHeading
            description="Unlock meaningful savings from partners built around chapter life—then direct earned rewards back into your chapter."
            eyebrow="Perks & rewards"
            inverted
            title="Chapter spend should go further."
          />
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {categories.map((category) => (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[10px] text-white/60"
                key={category}
              >
                <MapPin className="size-3" />
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, index) => (
            <article
              className={`group flex min-h-[310px] flex-col rounded-[26px] p-6 transition-transform hover:-translate-y-1 ${perk.tone}`}
              key={perk.partner}
            >
              <div className="flex items-start justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl border border-current/10 bg-current/[0.04]">
                  <perk.icon className="size-4.5" strokeWidth={1.7} />
                </span>
                <span className="font-mono text-[10px] opacity-40">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-auto">
                <p className="text-3xl font-medium tracking-[-0.05em]">{perk.offer}</p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-semibold">{perk.partner}</p>
                  <ArrowUpRight className="size-4 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1.5 text-xs opacity-50">{perk.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
