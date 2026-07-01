import { ArrowRight, CalendarDays } from "lucide-react";
import { CardMockup } from "./CardMockup";

const avatars = [
  { initials: "AP", tone: "bg-zinc-200 text-zinc-700" },
  { initials: "BK", tone: "bg-zinc-700 text-white" },
  { initials: "CM", tone: "bg-zinc-400 text-white" },
  { initials: "DR", tone: "bg-white text-zinc-900" },
];

export function Hero() {
  return (
    <section
      className="hero-surface relative overflow-hidden px-5 pb-12 pt-32 text-white sm:px-8 sm:pb-16 sm:pt-40 lg:min-h-[900px] lg:pt-44"
      id="top"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-white" />
            Built for Greek life
          </div>
          <h1 className="mt-7 text-[clamp(3.4rem,8vw,6.9rem)] font-medium leading-[0.87] tracking-[-0.07em]">
            Every Member.
            <br />
            <span className="text-white/52">One Chapter.</span>
            <br />
            One Card.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            A premium chapter-funded card platform that gives members a sleek
            physical card, while treasurers control funds, budgets, rewards,
            and spending.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5"
              href="#pricing"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.07] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/12"
              href="#demo"
            >
              <CalendarDays className="size-4" />
              Book a Demo
            </a>
          </div>
          <div className="mt-9 flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((avatar) => (
                <span
                  className={`flex size-8 items-center justify-center rounded-full border-2 border-zinc-950 text-[9px] font-semibold ${avatar.tone}`}
                  key={avatar.initials}
                >
                  {avatar.initials}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-[10px] text-white">★★★★★</div>
              <p className="mt-0.5 text-[11px] text-white/48">
                Loved by chapters nationwide
              </p>
            </div>
          </div>
        </div>
        <div className="lg:translate-x-4 lg:translate-y-7">
          <CardMockup />
        </div>
      </div>
    </section>
  );
}
