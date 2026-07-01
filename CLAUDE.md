# CLAUDE.md

This file tells Claude Code how to work in this repo. Every teammate runs Claude Code
against these rules, so following them keeps our code, design, and git history consistent.

## What we're building

Plutus (working name — see `lib/brand.ts`) is a premium **chapter-funded card platform for
Greek life**. Members get a sleek physical card; the chapter treasurer controls all funds,
budgets, spend limits, receipts, and rewards. Members **cannot** load their own money — the
only source of funds is the chapter account.

Right now we are building the **front-end MVP only**: a marketing site + admin dashboard mock
+ member mobile mock. There is **no real banking, no Stripe, no payments, no funds custody**.
Anything money-related is mock/demo data. See "Guardrails" below.

## Stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** (strict)
- **Tailwind CSS** for styling (design tokens in `app/globals.css` + `tailwind.config.ts`)
- **next/font** for typography (no manual font loading)
- Deployed on **Vercel** (preview deploy per PR)

## Commands

```bash
npm run dev        # local dev server at http://localhost:3000
npm run build      # production build (must pass before a PR can merge)
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

Before opening a PR, `npm run lint && npm run typecheck && npm run build` must all pass.

## Directory structure

```
app/                 # routes (App Router). page.tsx = landing page
  globals.css        # design tokens + base styles — EDIT TOKENS HERE, not inline
components/
  site/              # marketing-site components (nav, hero, feature strip)
  brand/             # brand assets rendered in code (the card visual, logo)
  ui/                # reusable primitives (button, etc.)
lib/
  brand.ts           # single source of truth for brand name — DO NOT hardcode the name elsewhere
  utils.ts           # helpers (cn, etc.)
```

## Design system (follow this exactly — do not invent colors)

The look is **premium fintech: Apple Card / Ramp / Linear**. Black-and-white, high contrast,
generous whitespace, soft shadows, rounded cards. No color accents unless a token exists.

- **Marketing surfaces** = near-black background, white text.
- **App surfaces** (dashboard/member) = white/near-white background, dark text.
- Use **only** the CSS variables defined in `app/globals.css` (e.g. `bg-ink`, `text-paper`,
  `border-hairline`). Never write raw hex in components.
- Display headings: `font-display` (Space Grotesk). Body/UI: `font-sans` (Inter).
- Corner radius: cards `rounded-2xl`, buttons `rounded-full` or `rounded-xl`. Be consistent.
- Motion: restrained. Subtle hover + one page-load reveal max. Respect `prefers-reduced-motion`.

If you need a color/spacing value that isn't a token, **add a token** — don't one-off it.

## Coding conventions

- TypeScript strict. No `any` without a `// reason:` comment.
- Components are server components by default; add `"use client"` only when you need
  state/effects/handlers.
- Keep components small and named after what the user sees (`MemberDashboard`, not `Screen2`).
- Copy is product copy — sentence case, plain verbs, no filler. A button says what it does.
- No new dependencies without flagging it in the PR description (keep the surface small).

## Git workflow — READ THIS

We are a team of 5. `main` is protected and always deployable. **Never commit or push to
`main` directly.** All changes land via Pull Request.

**Every work session:**
1. `git checkout main && git pull` — start from latest.
2. `git checkout -b feature/<short-name>` — one branch per task
   (`feature/member-dashboard`, `fix/hero-typo`).
3. Work. **Commit after each logical unit** (a component done, a bug fixed) using
   Conventional Commits: `feat: add member dashboard shell`, `fix: correct hero subhead`,
   `chore: …`, `docs: …`, `style: …`, `refactor: …`.
4. **Push at checkpoints** (feature done, or end of session) — `git push -u origin <branch>`.
   Not after every keystroke; push complete, working increments.
5. Open a PR into `main`. Fill out the template. Get 1 review + green CI, then merge.
6. Delete the branch after merge.

**Claude Code should:** commit frequently on the current feature branch with clear messages;
push the branch at logical checkpoints; pull/rebase `main` before starting new work. Claude
Code should **never** push to `main`, force-push a shared branch, or open/merge a PR without
the human saying so.

## Guardrails (important)

- **Do not** integrate real payments, Stripe, banking, or funds movement. All money is mock data.
- **Do not** describe the product as "a bank." Copy should say banking/card issuing/custody
  "would be provided by regulated partners."
- **Never commit secrets.** Use `.env.local` (gitignored). `.env.example` documents needed vars.
- Avoid real Greek letters, official fraternity/sorority marks, or alcohol/party messaging.
