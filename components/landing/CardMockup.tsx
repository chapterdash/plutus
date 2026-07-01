import { PillarIcon } from "./Logo";

function Chip() {
  return <span aria-hidden="true" className="chip block h-9 w-11 rounded-[9px] border border-black/10" />;
}

export function CardMockup() {
  return (
    <div
      aria-label="Two Plutus physical card mockups"
      className="relative mx-auto h-[390px] w-full max-w-[570px] sm:h-[465px]"
      role="img"
    >
      <div
        className="metal-card-dark card-float-delayed absolute left-[6%] top-[16%] aspect-[1.58/1] w-[80%] rounded-[26px] border border-white/10 p-6 text-white sm:left-[2%] sm:top-[12%] sm:rounded-[32px] sm:p-8"
        style={{ "--card-rotate": "-9deg" } as React.CSSProperties}
      >
        <div className="flex items-start justify-between">
          <PillarIcon className="size-8 opacity-90 sm:size-10" inverted />
          <span className="text-[9px] font-semibold tracking-[0.16em] text-white/60">
            PLUTUS
          </span>
        </div>
        <div className="mt-10 sm:mt-14">
          <Chip />
        </div>
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between sm:inset-x-8 sm:bottom-8">
          <div>
            <p className="text-[8px] tracking-[0.2em] text-white/40">MEMBER</p>
            <p className="mt-1 text-[11px] font-medium tracking-[0.12em] text-white/80">
              AVERY MORGAN
            </p>
          </div>
          <p className="text-[10px] font-bold italic tracking-tight text-white/70">
            VISA <span className="font-medium not-italic">DEBIT</span>
          </p>
        </div>
      </div>

      <div
        className="metal-card card-float absolute right-[1%] top-[28%] aspect-[1.58/1] w-[80%] rounded-[26px] border border-white/80 p-6 text-zinc-950 sm:right-[-2%] sm:top-[30%] sm:rounded-[32px] sm:p-8"
        style={{ "--card-rotate": "8deg" } as React.CSSProperties}
      >
        <div className="flex items-start justify-between">
          <PillarIcon className="size-8 sm:size-10" />
          <span className="text-[9px] font-semibold tracking-[0.16em] text-black/45">
            PLUTUS
          </span>
        </div>
        <div className="mt-10 sm:mt-14">
          <Chip />
        </div>
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between sm:inset-x-8 sm:bottom-8">
          <div>
            <p className="text-[8px] tracking-[0.2em] text-black/35">MEMBER</p>
            <p className="mt-1 text-[11px] font-medium tracking-[0.12em] text-black/70">
              JORDAN PARKER
            </p>
          </div>
          <p className="text-[10px] font-bold italic tracking-tight text-black/60">
            VISA <span className="font-medium not-italic">DEBIT</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-1 right-[8%] flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] font-medium text-white/60 backdrop-blur-md sm:bottom-4">
        <span className="size-1.5 rounded-full bg-emerald-400" />
        Chapter funded
      </div>
    </div>
  );
}
