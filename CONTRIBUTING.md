# Contributing

How the 5 of us work in this repo. The goal: move fast without breaking `main`.

## The one rule

**Nobody pushes to `main`.** `main` is protected. Everything lands through a Pull Request
with 1 approval + passing CI. This is what lets 5 people work in parallel without stepping
on each other.

## Daily flow

```bash
git checkout main
git pull                          # get everyone else's merged work
git checkout -b feature/my-task   # your own branch
# ...work, with Claude Code committing as you go...
git push -u origin feature/my-task
# open a PR on GitHub
```

## Branch names

- `feature/<name>` — new UI or functionality (`feature/admin-budgets`)
- `fix/<name>` — bug fixes (`fix/mobile-nav-overflow`)
- `chore/<name>` — tooling, config, deps
- Keep branches **short-lived** (a day or two). Small PRs review faster and conflict less.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`,
`docs:`, `style:`, `refactor:`, `test:`. Commit small and often — Claude Code handles this
automatically if you let it.

## Pull requests

1. Push your branch, open a PR into `main`.
2. Fill out the PR template (what changed, screenshots, how to test).
3. **Add a screenshot for any UI change** — this is a design-heavy product; reviewers should
   see it. Vercel also posts a live preview link on every PR.
4. Wait for CI (lint + typecheck + build) to go green.
5. Get 1 approval. Merge (squash). Delete the branch.

## Who owns what (suggested split for 5)

- **Marketing site** (landing, pricing, for-chapters/for-members)
- **Admin dashboard** (overview, members, budgets, transactions, rewards)
- **Member app** (mobile screens: card, budgets, perks, activity)
- **Design system + shared components** (tokens, buttons, cards, nav)
- **Infra/glue** (CI, Vercel, repo hygiene, reviewing others' PRs)

Rotate as needed — but having a clear default owner per surface reduces merge collisions.

## Before you open a PR

```bash
npm run lint && npm run typecheck && npm run build
```

All three must pass. CI runs the same checks and will block the merge otherwise.
