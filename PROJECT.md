# The Call

## Product decisions

Active, 2026-09-20. A private, phone-first game for practicing strategic judgment under pressure. First release: three historical crises, one decision per 5–10-minute sitting. Identities are hidden until commitment. Evidence is concise; players may question an AI analyst and commission research that consumes simulated time.

## Implementation boundaries

Next.js/TypeScript/Tailwind on Vercel. Official OpenAI SDK with server-only credentials. Browser storage only; Supabase is deferred until accounts or synced progress are needed. No billing, onboarding questionnaire, leaderboard, live countdown, or unrelated life-simulation events.

The public GitHub repository is authorized; the hosted app remains protected with Vercel Authentication for all deployments. Research replay, unlocks, and event timing are deterministic. The model does not control game state. Trade-offs use conditional language and sit separately from historical outcomes, and missing source information is not treated as proof that executives lacked it.

Preserve original attempts alongside informed replays. Keep source URLs/identities and future outcomes outside initial page/client bundles and analyst context. Public repository readers can intentionally inspect spoilers.

## Acceptance

The first case must be exercised through a browser before authoring the remaining two. Tests cover rule boundaries and API disclosure; computer-use receipts cover the actual user flow. Distinguish local verification, production verification, and physical-phone/cellular verification. Refer to docs/qa/README.md for completed checks and limitations.

## Revisit

Add Supabase only when multiple users or cross-device persistence become a requirement. Reassess authentication and distributed rate limits before permitting anonymous access. Case playtime and learning quality remain product hypotheses until real player feedback.

## Copy direction, 2026-09-20

Use plain, in-world language. Remove repeated fictional/simulation disclaimers and academic meta-commentary from briefings, research, and feedback. Keep sources available and evidence controls internal.
