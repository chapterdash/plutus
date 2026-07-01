// Mock/demo data for the admin "Overview" screen.
// This is a front-end MVP: there is NO real banking, payments, or funds movement.
// Every figure below is illustrative demo data only.

export interface Chapter {
  name: string;
  /** Short monogram shown in the switcher, e.g. "AXA". */
  abbrev: string;
  kind: string;
}

export interface CurrentUser {
  name: string;
  initials: string;
  role: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  sub: string;
  delta: { value: string; direction: "up" | "down" };
  /** Optional sparkline as an SVG path `d` over a 240×44 viewBox. */
  sparkline?: string;
}

export interface Transaction {
  id: string;
  /** Single-letter monogram for the merchant tile. */
  initial: string;
  name: string;
  category: string;
  date: string;
  amount: string;
}

export interface Budget {
  id: string;
  name: string;
  amount: string;
  dates: string;
  /** Percent allocated, 0–100. */
  pct: number;
}

export const chapter: Chapter = {
  name: "Alpha Chi Alpha",
  abbrev: "AXA",
  kind: "Chapter",
};

export const currentUser: CurrentUser = {
  name: "Alex Johnson",
  initials: "AJ",
  role: "Treasurer",
};

export const stats: Stat[] = [
  {
    id: "balance",
    label: "Chapter balance",
    value: "$18,742.50",
    sub: "Available to allocate",
    delta: { value: "12.5%", direction: "up" },
    sparkline:
      "M0,34 L20,32 L40,35 L60,28 L80,30 L100,24 L120,26 L140,19 L160,22 L180,14 L200,16 L220,9 L240,6",
  },
  {
    id: "spent",
    label: "Spent this month",
    value: "$7,846.21",
    sub: "Across 92 transactions",
    delta: { value: "8.3%", direction: "down" },
  },
  {
    id: "rewards",
    label: "Rewards earned",
    value: "$1,234.87",
    sub: "This month",
    delta: { value: "15.7%", direction: "up" },
  },
];

export const transactions: Transaction[] = [
  { id: "t1", initial: "D", name: "Domino's Pizza", category: "Food & Dining", date: "Today", amount: "-$48.23" },
  { id: "t2", initial: "A", name: "Amazon", category: "Supplies", date: "Yesterday", amount: "-$129.99" },
  { id: "t3", initial: "F", name: "Formal Bus Co.", category: "Transportation", date: "May 12", amount: "-$650.00" },
  { id: "t4", initial: "W", name: "Walmart", category: "Supplies", date: "May 12", amount: "-$74.21" },
  { id: "t5", initial: "T", name: "Target", category: "Supplies", date: "May 11", amount: "-$62.49" },
];

export const budgets: Budget[] = [
  { id: "b1", name: "Formal Weekend", amount: "$4,500.00", dates: "May 16 – May 18", pct: 72 },
  { id: "b2", name: "Chapter Dinner", amount: "$950.00", dates: "May 20", pct: 24 },
  { id: "b3", name: "Rush Week", amount: "$7,250.00", dates: "Aug 18 – 24", pct: 10 },
];
