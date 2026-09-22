# The Call

## Product decisions

Active, 2026-09-20. A private, phone-first game for practicing strategic judgment under pressure. Current library: 30 historical decisions, one decision per 5–10-minute sitting. Real company names are visible from the case list onward. Evidence is concise; players may question an AI analyst and commission research that consumes simulated time.

## Implementation boundaries

Next.js/TypeScript/Tailwind on Vercel. Official OpenAI SDK with server-only credentials. Browser storage only; Supabase is deferred until accounts or synced progress are needed. No billing, onboarding questionnaire, leaderboard, live countdown, or unrelated life-simulation events.

The public GitHub repository is authorized; the hosted app remains protected with Vercel Authentication for all deployments. Research replay, unlocks, and event timing are deterministic. The model does not control game state. Trade-offs use conditional language and sit separately from historical outcomes, and missing source information is not treated as proof that executives lacked it.

Preserve original attempts alongside informed replays. Keep source URLs and future outcomes outside initial page/client bundles and analyst context. Company names are public. Public repository readers can intentionally inspect spoilers.

## Acceptance

The first case must be exercised through a browser before authoring the remaining two. Tests cover rule boundaries and API disclosure; computer-use receipts cover the actual user flow. Distinguish local verification, production verification, and physical-phone/cellular verification. Refer to docs/qa/README.md for completed checks and limitations.

## Revisit

Add Supabase only when multiple users or cross-device persistence become a requirement. Reassess authentication and distributed rate limits before permitting anonymous access. Case playtime and learning quality remain product hypotheses until real player feedback.

## Copy direction, 2026-09-20

Use plain, in-world language. Remove repeated fictional/simulation disclaimers and academic meta-commentary from briefings, research, and feedback. Keep sources available and evidence controls internal.

## Analyst presentation and model, 2026-09-20

Use GPT-5.6 Luna for analyst answers and optional lesson coaching, configurable through OPENAI_MODEL. Account model availability and live structured responses verified. Keep citations in a touch-friendly Evidence disclosure; remove citation-only parenthetical asides from new and saved answers without deleting substantive qualifications.

Reviews should aim for grade 3 reading: short words, two brief sentences per note, and at most 25 words per feedback field. Put personal notes, trade-offs, and sources behind disclosures. Refresh old saved reviews once when opened; preserve the original decision and conversation.

## Library expansion, 2026-09-20

27 new researched cases bring the total to30. Keep original IDs/versions and saved attempts. Default to unfinished cases with New to you, Started, Done, All filters and text search. Feature the next unfinished case. Real company names are searchable; source audit documents identify predecision cutoffs and authored events.

## Names and scores, 2026-09-20

Edward requested real company names up front and numeric decision feedback. All 30 case summaries and briefings name the business; the analyst can discuss it by name while still withholding future outcomes and locked evidence. Existing attempts remain valid.

Choice scores are authored per case and option. Notes, confidence, verbosity, and historical agreement do not add points. Show the reason and catch beside the score. Multiple choices may be strong. An authored halfway event changes a visible option and its score. AI explains fixed marks in an optional post-result coach; it cannot set them.

## Teaching first, 2026-09-20

Edward asked to fix the full user-experience audit and emphasized learning without phone typing. All 30 cases now include a skill, simple terms, choice comparisons, sourced historical follow-through, and a one-tap practice question with feedback. The next-case button opens an unfinished related case directly. Compact mobile briefings show facts sooner.

Version 2 makes source gaps and research with no new factual evidence free and visible up front. Paid research conclusions remain locked until commissioned. Existing version 1 research ledgers retain their original costs and events; upgrading starts a separate replay. Original choices and conversations remain saved. Reviews refresh to copy version 4 without grading the player's note.

See docs/qa/teaching/README.md for current receipts. Source follow-through audits: docs/teaching-sources-01.md, docs/teaching-sources-11.md, docs/teaching-sources-21.md.

## Chat keyboard, 2026-09-20

Enter and Command-Enter send the analyst draft; Shift-Enter inserts a newline. Composition keystrokes and held-key repeats do not submit. Keyboard submission uses the same busy, online, and nonempty checks as the send button. Browser receipt: docs/qa/chat-keyboard.txt; typecheck and build passed.

## Gym challenge, 2026-09-21

Case 31 turns Edward’s transcribed Facebook ad into an explicitly ad-inspired scenario, separate from the 30 historical cases. No named gym or successful outcome is invented. Authored bills, cash, coaching quotes, buyer interest and capacity support a playable decision. Research retains its time cost for scenario findings; pure unknowns remain free. The debrief compares the same 90 days, separates sales from costs, exposes assumptions, and tests lost membership income. The unfinished scenario is featured for discovery. Existing historical cases and saved versions remain intact.

## General business puzzles, 2026-09-21

Edward clarified that the gym ad was a model for a whole collection, not a request for only one extra case. The Business puzzles collection contains 20 short scenarios (31–50), alongside the 30 real-company cases. Each has a tempting decision, enough initial numbers to reason, meaningful research, a changed condition, a plain lesson, a money comparison and a one-tap practice question. Fictional businesses and authored numbers are labeled Business puzzle, never presented as verified historical outcomes. Strong options vary; testing is not the universal answer. Library counts/search/featured case follow the selected collection, and Next case prefers unfinished cases in that collection.

## Three decisions first, 2026-09-22

Edward approved a focused starting experience: a short hook, credible choices, commitment before reveal, causal business logic and a one-tap transfer to a different business. The cafe is a business proposal to judge, not an operations simulator. The starting path revises existing cases 032 (free coffee), 044 (first-sale loss and repeat purchases), and 009 (Amazon Prime); the library remains 50 cases. Start here crosses from authored puzzles into a sourced historical decision, then returns to the wider library.

These three cases use version 3. Versions 1 and 2 remain addressable; saved attempts are not rewritten. A revised case opens as a new attempt, with earlier reviewed or unfinished attempts accessible in the picker. Historical choice marks judge the available evidence, not agreement with the CEO or the eventual outcome. Alternative conditions are visible in the reveal. Five-minute playtime, learning transfer and voluntary continuation remain product hypotheses requiring real player feedback.

Local browser receipts and verification: docs/qa/starting-path/README.md. Sources and arithmetic: docs/spotlight-sources.md. Ticket: BLI-4595. Deployment is a separate step from this implementation.
