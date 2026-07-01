# Plutus

The premium **chapter-funded card platform for Greek life**. Members get a sleek physical
card; the chapter treasurer controls all funds, budgets, spend limits, receipts, and rewards.

> **MVP scope:** front-end only — marketing site + admin dashboard mock + member mobile mock.
> No real banking, Stripe, or payments. See `CLAUDE.md` for the full brief and guardrails.

## Quickstart

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Local dev server                              |
| `npm run build`     | Production build (must pass before a PR)      |
| `npm run lint`      | ESLint                                        |
| `npm run typecheck` | TypeScript check                              |

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · deployed on Vercel.

## For the team

- **`CLAUDE.md`** — how Claude Code should work here (stack, design system, git rules). Read first.
- **`CONTRIBUTING.md`** — branch/PR workflow for the 5 of us.
- The brand name lives in **`lib/brand.ts`** only — never hardcode it elsewhere.

## Status

Built so far: landing page (nav, hero, feature strip, footer) + design system.
Next up: admin dashboard, member mobile screens, pricing page.
