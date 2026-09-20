# Teaching-first release — 2026-09-20

## Local verification

- 137 automated tests pass. Includes all 30 cases, each option, blank versus verbose notes, changed conditions, research disclosure, legacy costs and API validation.
- Typecheck and production build pass.
- Computer-use run at 390 × 844 on localhost:3107, using actual app controls:
  - Apple briefing shows first facts on the opening screen.
  - Seek more carrier deals, blank note: 80/100, with visible reason and catch.
  - Wrong practice answer explains the mistake; correct retry explains the changed tradeoff.
  - Post-result AI coach answers when another choice would work better.
  - Reload and reopen preserves score, practice answer and coach conversation.
  - Next case opens Microsoft directly.
  - Informed Apple replay: carrier research (1h) + daily tasks (2h) triggers the visible deadline; wider-deal choice now includes delayed training. It scores 70/100 with the concrete reason.
  - Switching back to the original attempt retains 80/100 and the original choice.

Receipts: mobile-briefing.png, mobile-result.png, event-result.png, local-result.txt, changed-condition.txt. Test output: test-results.txt.

All 30 teaching packs include source audits in docs/teaching-sources-{01,11,21}. Baseline choice feedback was checked against opening facts and free checks; locked findings and later history are excluded from baseline scoring reasons.

## Limits

Phone-size browser verification is not a physical-phone or cellular-network test. Enjoyment and learning gains still need player feedback. The optional language-model coach is constrained by its supplied pack but cannot be proven immune to hallucination. Choice scoring and the core lesson do not depend on model output.
