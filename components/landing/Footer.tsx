import { Wordmark } from "./Logo";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#product" },
      { label: "For Members", href: "#members" },
      { label: "For Chapters", href: "#chapters" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Benefits", href: "#benefits" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Book a demo", href: "#demo" },
      { label: "Join the pilot", href: "#pricing" },
      { label: "Contact", href: "mailto:hello@chapterdash.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-zinc-200 pb-14 md:grid-cols-[1.4fr_1fr]">
          <div>
            <a aria-label="Plutus home" href="#top">
              <Wordmark />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
              Premium cards and smarter chapter spending, built around every member.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold">{group.title}</p>
                <div className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <a
                      className="text-xs text-zinc-500 transition-colors hover:text-zinc-950"
                      href={link.href}
                      key={link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-3xl text-[10px] leading-5 text-zinc-400">
            Plutus is a product concept. Banking, card issuing, and funds
            custody would be provided by regulated partners. This website is for
            demonstration purposes only.
          </p>
          <p className="shrink-0 font-mono text-[9px] text-zinc-400">
            © 2026 PLUTUS
          </p>
        </div>
      </div>
    </footer>
  );
}
