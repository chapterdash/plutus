// Single source of truth for the brand name.
// The Plutus vs. Chapter Card naming decision is still open — when it's settled,
// change it HERE only. Never hardcode the name in components or copy.
export const BRAND = {
  name: "Plutus",
  tagline: "Every Member. One Chapter. One Card.",
  subhead:
    "A premium chapter-funded card platform that gives members a sleek physical card, while treasurers control funds, budgets, rewards, and spending.",
  // Compliance line — keep visible in the footer.
  disclosure:
    "Not a bank. Banking, card issuing, and funds custody would be provided by regulated partners.",
} as const;
