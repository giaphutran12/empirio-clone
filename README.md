# The Call

A mobile business decision game. Read a historical briefing, question an AI analyst, spend limited simulated time on research, and commit to a decision before revealing the actual history.

Built with Next.js, TypeScript, Tailwind, the official OpenAI SDK, and Vercel. No database or app account system. Browser storage keeps individual attempts and marks replays as informed by hindsight.

## Run locally

Requires Node.js 24+ and npm.

```sh
npm ci
cp .env.example .env.local
# Set OPENAI_API_KEY in the ignored .env.local file using your secret manager/editor.
npm run dev
```

Open http://localhost:3000. `OPENAI_MODEL` optionally overrides the default `gpt-5.6-luna`. API use is separately billed by the provider. Never put a key in a `NEXT_PUBLIC_` variable or commit an environment file.

```sh
npm test
npm run typecheck
npm run build
```

## How the game works

- Each attempt starts with six simulated hours. Clarifications and reading are free.
- Research cards show their time cost before confirmation. Known source gaps are free. Paid research unlocks new facts.
- An authored development appears after three hours are spent and changes one visible choice.
- The server replays the research ledger, rejects duplicates/overbudget choices, and releases only unlocked evidence.
- Analyst context excludes the historical reveal, source URLs, and locked evidence. Real company names are available from the start. Output references and overt requests for future outcomes are checked. These checks reduce leakage; they do not prove a language model cannot infer or fabricate something.
- Pick a choice without writing. Each choice has an authored score, a reason and a tradeoff. The lesson includes sourced historical results, a one-tap practice question, and optional AI coaching. Notes never affect scores; core feedback works without AI.
- All attempts stay on this browser. Clearing site data erases progress. There is no cross-device sync or offline AI.

The source repository includes the full evidence packs and historical reveals. Reading the source can spoil the cases; the app hides endings until a decision, not company names.

## Hosting

Deploy to Vercel with `OPENAI_API_KEY` configured in the production environment. Keep Vercel Authentication enabled for **All Deployments**, including the production alias and API routes. The code repository can be public while the application stays private.

Use the production HTTPS URL from a phone browser, sign in with an authorized Vercel account, and optionally add it to the home screen. Home-screen installation does not imply offline support.

The in-process API concurrency/request guards are supplementary and are not a distributed spending cap. This version relies on deployment authentication and is not intended for anonymous public API access.

## Evidence and verification

See [case source notes](docs/case-sources.md), [project decisions](PROJECT.md), and [QA receipts](docs/qa/README.md). Claims that the game is enjoyable or improves real-world judgment require player feedback; passing tests does not establish either.

## Case library

30 historical decisions plus **The $500 gym pitch**, an ad-inspired pricing scenario with a 90-day money comparison. Cases04–30 add product launches, pricing, funding, recalls, company splits, pay, and market exits. Source/timeline audits: [04–12](docs/cases-04-sources.md), [13–21](docs/cases-13-sources.md), [22–30](docs/cases-22-sources.md). The library defaults to unfinished cases and supports search and progress filters.
