"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/admin/sidebar";
import { TopBar } from "@/components/admin/top-bar";

const SIDEBAR_ID = "admin-sidebar";

/**
 * Layout frame for the admin app: a persistent sidebar on desktop that becomes
 * a slide-in drawer on smaller screens, plus the sticky top bar. Screen content
 * is passed as children.
 */
export function DashboardShell({ title, children }: { title: string; children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close the drawer with Escape while it's open.
  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  return (
    <div className="flex min-h-screen bg-canvas">
      {/* Backdrop (mobile only, when the drawer is open) */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          aria-hidden
          className="fixed inset-0 z-40 bg-fg/40 lg:hidden"
        />
      )}

      <Sidebar
        id={SIDEBAR_ID}
        onNavigate={() => setDrawerOpen(false)}
        className={cn(
          "z-50 transition-transform duration-300 ease-out",
          "fixed inset-y-0 left-0",
          "lg:sticky lg:top-0 lg:z-auto lg:translate-x-0",
          drawerOpen ? "translate-x-0" : "-translate-x-full",
        )}
      />

      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar title={title} onMenuClick={() => setDrawerOpen(true)} menuControlsId={SIDEBAR_ID} />
        <div className="rise flex w-full max-w-[1240px] flex-col gap-6 px-5 pb-12 pt-2 md:px-10">
          {children}
        </div>
      </main>
    </div>
  );
}
