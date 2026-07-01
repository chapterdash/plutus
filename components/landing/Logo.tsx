import type { SVGProps } from "react";
import { BRAND } from "@/lib/brand";

type PillarIconProps = SVGProps<SVGSVGElement> & {
  inverted?: boolean;
};

export function PillarIcon({
  inverted = false,
  className,
  ...props
}: PillarIconProps) {
  const color = inverted ? "#ffffff" : "#111111";

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M4 10.2 16 4l12 6.2H4Z" fill={color} />
      <path
        d="M7 12.5h18M8.5 25.5h15M6 28h20M10 13.5v10M15.9 13.5v10M22 13.5v10"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2.1"
      />
    </svg>
  );
}

export function Wordmark({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`flex size-9 items-center justify-center rounded-xl ${
          inverted ? "bg-white/10 ring-1 ring-white/15" : "bg-zinc-950"
        }`}
      >
        <PillarIcon className="size-5" inverted={!inverted} />
      </span>
      {!compact && (
        <span
          className={`text-[15px] font-semibold tracking-[-0.02em] ${
            inverted ? "text-white" : "text-zinc-950"
          }`}
        >
          {BRAND.name}
        </span>
      )}
    </span>
  );
}
