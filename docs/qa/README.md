# Verification receipts

## First case playthrough — 2026-09-20

Computer-use browser testing at a 390 × 844 viewport, against the running application with live OpenAI calls:

1. Opened case 01 from the library; initial briefing showed six hours and no company identity.
2. Typed a question about whether taste tests justify replacing the product. The analyst returned an evidence-based interpretation and research suggestions; clock remained at six hours.
3. Commissioned the one-hour test audit; remaining time became five hours and the evidence unlocked.
4. Commissioned a two-hour portfolio review; remaining time became three hours and the simulated halfway development appeared.
5. Reloaded the browser and selected Continue. The three-hour ledger and research evidence persisted.
6. Selected a limited trial, entered reasoning and medium confidence, and committed. The reveal showed Coca-Cola history and personalized feedback quoting the actual reasoning.
7. Started an informed replay with six new hours. Spent three, two, and one hour on investigations. At zero hours, the remaining two-hour task was disabled and a decision notice appeared.
8. Committed a different choice on the replay to exercise separate attempt storage.

The first playthrough prompted improvements: neutralized the briefing mandate, made the halfway event a meaningful fictional production constraint, and removed internal evidence IDs from analyst prose. The model instructions now explicitly distinguish missing records from evidence that a company never measured something. Debrief responses were shortened.

### Screenshots

- [First mobile debrief](first-case-mobile-debrief.png)
- [Research deadline on mobile](research-deadline-mobile.png)

## Automated and live API checks

- Rule/API suite covers initial spoiler exclusion, unlocked context, duplicate and overbudget research, halfway trigger, version mismatch, response reference validation, input limits, spoiler questions, and fallback debrief.
- Live analyst and debrief calls succeeded using execution-only credentials.
- Sampled adversarial questions included a named-company guess, future outcome, locked-evidence request, and an invented exact purchase-rate premise. Observed responses withheld identities/future and did not affirm the invented number.
- Initial HTML and referenced client JavaScript were checked for private reveal and locked-evidence strings; none were present at that checkpoint.

These are bounded observations, not proof that an LLM can never leak or hallucinate. The deterministic engine, visible evidence, and source notes remain the authority.

## Limits

Phone dimensions were simulated in a real browser. No physical phone or cellular connection was available to the agent. Real-world learning impact, exact median playtime, and enjoyment remain unverified until player feedback. Production checks are recorded below after deployment.
