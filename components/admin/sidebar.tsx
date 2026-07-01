"use client";

import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/brand";
import { chapter, currentUser } from "@/lib/mock/overview";
import type { ReactNode } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: ReactNode;
  active?: boolean;
}

const iconProps = {
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const nav: NavItem[] = [
  {
    label: "Overview",
    href: "/admin",
    active: true,
    icon: (
      <svg {...iconProps} aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Members",
    href: "#",
    icon: (
      <svg {...iconProps} aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    label: "Cards",
    href: "#",
    icon: (
      <svg {...iconProps} aria-hidden>
        <rect x="2" y="5" width="20" height="14" rx="2.5" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    label: "Budgets",
    href: "#",
    icon: (
      <svg {...iconProps} aria-hidden>
        <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9" />
        <path d="M3 15h6l1 2h4l1-2h6" />
        <path d="M3 15v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
      </svg>
    ),
  },
  {
    label: "Transactions",
    href: "#",
    icon: (
      <svg {...iconProps} aria-hidden>
        <line x1="4" y1="20" x2="4" y2="12" />
        <line x1="10" y1="20" x2="10" y2="4" />
        <line x1="16" y1="20" x2="16" y2="9" />
        <line x1="22" y1="20" x2="22" y2="15" />
      </svg>
    ),
  },
  {
    label: "Rewards",
    href: "#",
    icon: (
      <svg {...iconProps} aria-hidden>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "Perks",
    href: "#",
    icon: (
      <svg {...iconProps} aria-hidden>
        <path d="M20 12v10H4V12" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <svg {...iconProps} aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

interface SidebarProps {
  className?: string;
  /** Called when a nav item is chosen — used to close the mobile drawer. */
  onNavigate?: () => void;
  id?: string;
}

export function Sidebar({ className, onNavigate, id }: SidebarProps) {
  return (
    <aside
      id={id}
      aria-label="Sidebar"
      className={cn(
        "flex h-screen w-[240px] flex-none flex-col border-r border-line bg-surface px-4 py-5",
        className,
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-[10px] px-2 pb-5 pt-1">
        <div className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-lg bg-fg">
          <div className="h-[11px] w-[11px] rotate-45 rounded-[3px] bg-surface" />
        </div>
        <span className="font-display text-[16px] font-bold tracking-[-0.02em] text-fg">
          {BRAND.name}
        </span>
      </div>

      {/* Chapter switcher */}
      <button
        type="button"
        className={cn(
          "mb-5 flex w-full items-center gap-[10px] rounded-xl border border-line bg-canvas p-2 text-left",
          focusRing,
        )}
      >
        <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg bg-fg font-display text-[11px] font-semibold tracking-[0.02em] text-surface">
          {chapter.abbrev}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13px] font-semibold text-fg">{chapter.name}</div>
          <div className="text-[11px] leading-tight text-fg-muted">{chapter.kind}</div>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-none text-fg-muted"
          aria-hidden
        >
          <polyline points="7 9 12 4 17 9" />
          <polyline points="7 15 12 20 17 15" />
        </svg>
      </button>

      {/* Nav */}
      <nav aria-label="Primary" className="flex flex-col gap-0.5">
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            aria-current={item.active ? "page" : undefined}
            className={cn(
              "flex items-center gap-[11px] rounded-[10px] px-[10px] py-[9px] text-[13.5px] no-underline transition-colors",
              focusRing,
              item.active
                ? "bg-surface-2 font-[550] text-fg"
                : "font-medium text-fg-muted hover:bg-surface-2/60 hover:text-fg",
            )}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>

      {/* User row */}
      <div className="mt-auto flex items-center gap-[10px] border-t border-line pt-4">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-surface-3 text-[12px] font-semibold text-fg">
          {currentUser.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[12.5px] font-semibold text-fg">{currentUser.name}</div>
          <div className="text-[11px] leading-tight text-fg-muted">{currentUser.role}</div>
        </div>
      </div>
    </aside>
  );
}
