import { Button } from "@/components/ui/button";
import { CardVisual } from "@/components/brand/card-visual";
import { BRAND } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink" id="product">
      <div className="mx-auto grid max-w-shell items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-line-dark px-3 py-1 text-xs font-medium uppercase tracking-wider text-paper-dim">
            Built for Greek life
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-paper md:text-6xl">
            Every member.
            <br />
            <span className="text-paper-dim">One chapter.</span>
            <br />
            One card.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-paper-dim">
            The premium chapter-funded card that simplifies spending, earns rewards, and powers
            every moment. Treasurers control the money — members just tap.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="primary">Get started</Button>
            <Button variant="secondary">Book a demo</Button>
          </div>

          <p className="mt-6 text-xs text-paper-dim">{BRAND.disclosure}</p>
        </div>

        <div className="relative rise">
          <div className="mx-auto w-full max-w-sm">
            <CardVisual />
          </div>
          {/* soft glow behind card */}
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl">
            <div className="mx-auto h-64 w-64 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
