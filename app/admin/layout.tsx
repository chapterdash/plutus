// The /admin app surface uses Inter (font-sans) + Space Grotesk (font-display),
// distinct from the Geist-based marketing site. Pinning font-sans here (and on
// the modal, which renders in this subtree) keeps the dashboard on Inter even
// though the document body defaults to Geist.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="font-sans text-fg">{children}</div>;
}
