import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/mock/overview";

const cardClass =
  "flex flex-col rounded-2xl border border-line bg-surface p-[22px] shadow-card";

function DeltaArrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === "up" ? (
        <>
          <line x1="12" y1="19" x2="12" y2="6" />
          <polyline points="6 12 12 6 18 12" />
        </>
      ) : (
        <>
          <line x1="12" y1="5" x2="12" y2="18" />
          <polyline points="6 12 12 18 18 12" />
        </>
      )}
    </svg>
  );
}

export function StatCard({ stat }: { stat: Stat }) {
  const { id, label, value, sub, delta, sparkline } = stat;
  const gradientId = `spark-${id}`;

  return (
    <div className={cardClass}>
      <div className="text-[12.5px] font-medium tracking-[0.01em] text-fg-muted">{label}</div>
      <div className="mb-[3px] mt-[10px] font-display text-[30px] font-bold tracking-[-0.02em] text-fg">
        {value}
      </div>
      <div className="text-[12.5px] text-fg-muted">{sub}</div>

      {sparkline && (
        <div className="mb-1 mt-4">
          <svg
            width="100%"
            height="44"
            viewBox="0 0 240 44"
            preserveAspectRatio="none"
            className="block"
            aria-hidden
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--success)" stopOpacity="0.14" />
                <stop offset="1" stopColor="var(--success)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${sparkline} L240,44 L0,44 Z`} fill={`url(#${gradientId})`} />
            <path
              d={sparkline}
              fill="none"
              stroke="var(--success)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      <div
        className={cn(
          "flex items-center gap-1.5 text-[12.5px]",
          sparkline ? "mt-0.5" : "mt-auto pt-[18px]",
        )}
      >
        <span
          className={cn(
            "inline-flex items-center gap-[3px] font-semibold",
            delta.direction === "up" ? "text-success" : "text-danger",
          )}
        >
          <DeltaArrow direction={delta.direction} />
          {delta.value}
        </span>
        <span className="text-fg-muted">vs last month</span>
      </div>
    </div>
  );
}
