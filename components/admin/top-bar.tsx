"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const iconBtn = cn(
  "flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-line bg-surface text-fg transition-colors hover:bg-surface-2",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
);

interface TopBarProps {
  title: string;
  /** Opens the mobile navigation drawer. */
  onMenuClick?: () => void;
  menuControlsId?: string;
}

export function TopBar({ title, onMenuClick, menuControlsId }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-canvas-blur px-5 py-[22px] backdrop-blur-md md:px-10">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          aria-controls={menuControlsId}
          className={cn(iconBtn, "lg:hidden")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <h1 className="m-0 font-display text-[20px] font-bold tracking-[-0.02em] text-fg sm:text-[24px]">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <button type="button" aria-label="Search" className={cn(iconBtn, "hidden sm:flex")}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        <button type="button" aria-label="Notifications" className={cn(iconBtn, "relative hidden sm:flex")}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute right-[9px] top-2 h-[6px] w-[6px] rounded-full border-[1.5px] border-surface bg-danger" />
        </button>

        <Button
          variant="solid"
          className="ml-1 h-[38px] gap-[7px] whitespace-nowrap rounded-full px-[18px] text-[13.5px] font-semibold"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add funds
        </Button>
      </div>
    </header>
  );
}
