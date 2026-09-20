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
