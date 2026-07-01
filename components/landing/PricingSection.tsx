import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "Starter",
    audience: "For growing chapters",
    price: "Coming soon",
    description: "The essentials to issue cards and manage member spend.",
    features: ["Physical member cards", "Core chapter controls", "Member mobile access"],
    cta: "Join the waitlist",
  },
  {
    name: "Pro",
    audience: "For active chapters",
    price: "Pilot access",
    description: "More control, rewards, and insight for complex chapter needs.",
    features: ["Everything in Starter", "Advanced budget rules", "Partner rewards & savings"],
    cta: "Join the pilot",
    featured: true,
  },
  {
    name: "Campus / National",
    audience: "For multi-chapter programs",
    price: "Custom pricing",
    description: "A tailored rollout for councils and national organizations.",
    features: ["Multi-chapter visibility", "Custom control policies", "Dedicated launch support"],
    cta: "Talk to our team",
  },
];

export function PricingSection() {
  return (
    <section className="bg-[#f5f5f3] px-5 py-24 sm:px-8 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          description="Early chapters help shape the product and receive preferred pilot access."
          eyebrow="Pricing"
          title="Start with the right fit."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              className={`relative flex min-h-[470px] flex-col overflow-hidden rounded-[28px] border p-6 sm:p-8 ${
                plan.featured
                  ? "border-zinc-950 bg-zinc-950 text-white shadow-2xl"
                  : "border-zinc-200 bg-white text-zinc-950"
              }`}
              key={plan.name}
            >
              {plan.featured && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-white px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-950">
                  Recommended
                </div>
              )}
              <p
                className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                  plan.featured ? "text-white/40" : "text-zinc-400"
                }`}
              >
                {plan.audience}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{plan.name}</h3>
              <p className="mt-6 text-3xl font-medium tracking-[-0.05em]">{plan.price}</p>
              <p
                className={`mt-4 max-w-sm text-sm leading-6 ${
                  plan.featured ? "text-white/50" : "text-zinc-500"
                }`}
              >
                {plan.description}
              </p>
              <div
                className={`my-7 h-px ${plan.featured ? "bg-white/10" : "bg-zinc-200"}`}
              />
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div className="flex items-center gap-3 text-sm" key={feature}>
                    <span
                      className={`flex size-5 items-center justify-center rounded-full ${
                        plan.featured ? "bg-white text-zinc-950" : "bg-zinc-100"
                      }`}
                    >
                      <Check className="size-3" strokeWidth={2.2} />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
              <a
                className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-white text-zinc-950"
                    : "bg-zinc-950 text-white"
                }`}
                href="#demo"
              >
                {plan.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
