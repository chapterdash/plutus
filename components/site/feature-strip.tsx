const features = [
  {
    title: "Chapter funded",
    body: "Treasurers control the money. Members spend only what's assigned.",
  },
  {
    title: "Smart controls",
    body: "Set spend limits, categories, and time restrictions per member.",
  },
  {
    title: "Instant budgets",
    body: "Fund events, roles, and reimbursements in a couple of taps.",
  },
  {
    title: "Earn rewards",
    body: "Cashback, partner perks, and vendor savings flow back to the chapter.",
  },
];

export function FeatureStrip() {
  return (
    <section className="border-t border-line-dark bg-ink pb-20" id="features">
      <div className="mx-auto grid max-w-shell gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="bg-ink p-6">
            <h3 className="font-display text-sm font-bold text-paper">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper-dim">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
