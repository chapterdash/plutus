"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";

const links = [
  { label: "Product", href: "#product" },
  { label: "Benefits", href: "#benefits" },
  { label: "For Chapters", href: "#chapters" },
  { label: "For Members", href: "#members" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-black/8 bg-white/92 px-4 shadow-[0_10px_35px_rgba(0,0,0,.12)] backdrop-blur-xl sm:px-5"
      >
        <a aria-label="Plutus home" href="#top">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
            href="#demo"
          >
            Log in
          </a>
          <a
            className="group inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            href="#pricing"
          >
            Get Started
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="flex size-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-black/8 bg-white p-3 shadow-2xl lg:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                className="rounded-xl px-4 py-3.5 text-base font-medium text-zinc-700 hover:bg-zinc-100"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-zinc-100 pt-3">
            <a
              className="rounded-xl border border-zinc-200 px-4 py-3 text-center text-sm font-semibold"
              href="#demo"
              onClick={() => setOpen(false)}
            >
              Log in
            </a>
            <a
              className="rounded-xl bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-white"
              href="#pricing"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
