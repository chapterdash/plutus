import type { ReactNode } from "react";

/** The "View all …" link shared by the overview panels. */
export function PanelFooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center gap-1.5 p-[14px] text-[13px] font-[550] text-fg no-underline transition-colors hover:text-fg/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      {children}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  );
}
