# Empirio Facebook ad funnel, walked end to end (2026-09-23)

Entry URL: `empirioapp.com/growth-plan/base/personalize?q=0&utm_source=facebook`
Exit URL: `empirioapp.com/growth-plan/base/get-pro` (Stripe paywall)

Walked in Chrome, one screenshot per screen, in `screens/` (99 files, file suffix `-NN` referenced below).
Copy for branches not clicked was pulled from the public JS bundle
(`_next/static/chunks/1zxv4kgnkmrqc.js` = quiz config, `1g-xsolhzbfax.js` = loader + paywall engine).

## What this thing is

The funnel is Deepstash's white-label "growth plan" engine with Empirio content dropped in.
The bundle still carries Deepstash strings (`com.deepstash.pro_monthly_subscription`,
"You can use Deepstash on iOS, Android and Web", "Join over 10M+ people", the anti-doomscrolling copy)
and seasonal promo labels in four languages. Nothing here is bespoke to Empirio except the
question copy, two cases, and the "Business Profile" result.

## Screen map (33 screens, about 12 minutes including a 4.5 minute fake loader)

| q | Segment | Screen | Mechanic | File |
|---|---|---|---|---|
| 0 | Profile | "Step inside the decisions that shaped business history" + gender | micro-commitment, no CTA needed (tap advances) | -12 |
| 1 | Profile | Age group with four photos | photos match the gender just picked (personalization illusion) | -13 |
| 2 | Profile | Mascot: "Smart choice joining us!" | praise interstitial | -14 |
| 3 | Profile | "What are you doing right now?" (7 options) | segmentation | -15 |
| 4 | Profile | "How much money do you save each month?" | sensitive question softened with "No judgment" | -16 |
| 5 | Profile | Mascot: "You're doing great / You're ahead of most people" | branched praise (4 variants, one per savings tier) | -17 |
| 6 | Personality | "What's your biggest money goal right now?" | | -18 |
| 7 | Personality | "Money makes me feel..." (5 emoji) | inline feedback card appears on tap, before Continue | -19, -20, -21 |
| 8 | Personality | Mascot: "How you feel about money matters" | | -22 |
| 9 | Personality | $100 sure vs 50% at $300 | feedback names a hero: "We'll show you how Bezos made his big bets" | -23, -24 |
| 10 | Personality | "What does compound interest mean?" | quiz where every answer is praised, wrong ones get "You're on the right track" | -25, -26 |
| 11 | Personality | Mascot: "Perfect! We're calibrating your path" | | -27 |
| 12 | Personality | "If someone gave you $10,000 today" | answer gets an identity label: "Long-term thinker" | -28, -29 |
| 13 | Personality | "What's a moat in business?" | "Something about castles" still gets "You're thinking of the right idea" | -30, -31 |
| 14 | Personality | Mascot: "You're building your business vocabulary" | | -32 |
| 15 | Personality | "Which business leader do you respect most?" (9 faces) | identity hook, gold ring on selection | -33, -34 |
| 16 | Personality | "What do you want from learning..." multi-select | | -35, -36 |
| 17 | Personality | Mascot: "Now let's see how you think" | bridge into cases | -37 |
| 18 | Personalize | Case brief: Coca-Cola 1985, New Coke | mascot holding a Coke bottle; numbers bolded; "Tests show" callout box | -38, -39 |
| 19 | Personalize | "What do you do?" 3 options | every option gets a flattering label ("Bold move", "Protect what works", "Have it both ways") | -41, -42 |
| 20 | Personalize | Result: "What Coca-Cola chose" | What happened (4 bullets) + Surprise twist + The Lesson + Your Choice Analysis | -43, -44 |
| 21 | Personalize | Case brief: Blockbuster 2000, Netflix for $50M | mascot holds a parody DVD "Empire Strikes Profit" | -46 |
| 22 | Personalize | Decision, 3 options | "Future-focused thinking" / "Trust the numbers" / "Test before you commit" | -47, -48 |
| 23 | Personalize | Result: "Blockbuster said no" | same 4-block structure | -49 |
| 24 | Personalize | Daily goal 5/10/15 min | commitment device | -52 |
| 25 | Personalize | "In 30 days, think like a business leader" | growth curve, 4-week plan, Skills Matrix (Low -> High), "Join 3M+ people" | -53, -54 |
| 26 | Loader | "Building your Business Profile..." | 3 phases, ~90 s each, each interrupted at ~50% by a Yes/No modal | -60 to -69 |
| 27 | Gate | Email or Apple sign-in | required; direct URL to q=28 redirects back here | -70 |
| 28 | Post-gate | "Most people never learn how businesses really work" | "1,247 people learned business insights in the last hour" + masked emails | text only |
| 29 | Result | "Your Business Profile" radar chart | 8 axes, Current vs Growth Projection toggle, What Drives You / Strengths / Watch Out For, "After 30 days users say" | user screenshot, -74 |
| 30 | Result | World map + stats ticker | "10M+ cases, 120+ countries, 4.8 rating, 87% report better judgment, 23-day streak" | -79 |
| pro | Paywall | Stripe checkout | see below | -88 to -98 |

Loader modal questions: "Would you rather grow fast than be profitable?", "Do you take big risks for big rewards?",
"Do you learn more from failures than successes?"

## The paywall

| Plan | Struck price | Charged | Per-day framing | Badge |
|---|---|---|---|---|
| 1 month | $32.99 | $10.99 | $0.35 | Save 67% |
| 3 months | $59.99 | $14.99 | $0.16 | Most popular, preselected, Save 75% |
| 1 year | $102.03 | $49.99 | $0.13 | Save 51% |

Mechanics on the page:
- Auto-applied promo code `premium_Sep_23` with a 10-minute countdown; the timer sticks to the top on scroll with a Continue button.
- Prices shown are localized (request carried `countryCode=VN`). The bundle's mock Stripe data uses $12.99/month and $89.99/year, so US pricing is higher.
- Payment: Apple Pay preselected, then Link, then card. "Powered by Stripe" and card logos as trust badges.
- Fine print: renews at full $59.99 after the 3-month intro. Then a 30-day money-back guarantee card directly under it.
- "What you get with Empirio Pro": 1,000+ stories, new daily, complete Business Profile, audio, personalized path, offline.
- FAQ answers the three objections in order: why the app, how do I get it, how do I cancel.
- Three testimonials with Instagram handles and deliberate typos ("completley", "then you'd expect").
- Plan picker is repeated at the bottom in a dark block so the last thing on the page is the buy box.

Ad headlines found in the bundle (the creatives that feed this funnel):
"Face the Decisions That Built & Broke Empires", "Netflix, Nokia, Kodak... You make the call. Then you see the outcome.",
"Learn about the one decision that mattered more than the rest" / "That Created 95% of the Outcome".

## How the lure works, in order

1. Zero-friction start. Two taps (gender, age) before any thinking. The progress bar already shows movement.
2. Praise on a schedule. A mascot interstitial every 2 to 3 questions, and the copy is branched so it reads as a reaction to your answer.
3. No wrong answers. Knowledge checks reward every option. The wrong answer to "moat" gets "You're thinking of the right idea".
4. Identity labels. Every choice returns a title: "Long-term thinker", "Bold move", "Future-focused thinking". By screen 20 you have been told who you are six times.
5. Hero association. Answers are tied to Buffett, Bezos, Einstein. Then a leader picker with faces makes you choose a role model.
6. The product demo is the quiz. Two real cases (Coke, Blockbuster) with the full brief -> decision -> what happened -> lesson -> your-choice-analysis loop. This is the only part that would survive without the funnel.
7. Commitment before the ask. Daily goal, then a 30-day projection with a skills matrix that says every skill goes Low -> High.
8. Sunk cost and forced attention. A 4.5-minute loader that pauses three times for a Yes/No modal so you cannot tab away.
9. The gate. Email is required right after the loader, before the promised profile is shown. 26 screens of investment sit behind it.
10. The carrot. Radar chart + three personality cards. It reads like a personality test result and is built to be screenshotted.
11. Social proof stack. 3M+, 1,247 in the last hour, masked emails, 120 countries, 4.8 stars, testimonials.
12. Price framing. Strikethrough anchors, per-day cost, preselected middle plan, countdown, guarantee, FAQ, buy box repeated.

## What to steal for the clone

Ranked by expected lift for what the clone already has (a step feed with brief -> decision -> debrief, tap-to-define terms, three-decision first play).

1. Per-option feedback cards. Each option gets a title + one flattering line + emoji, shown inline the moment it is tapped, before the reveal. Cheap: three strings per option. This is the single biggest feel difference between their case and ours.
2. Decision-style profile after the first three plays. Radar over a handful of axes (risk-taker/risk-averse, short/long-term, data-driven/intuitive, early adopter/status quo), plus "What drives you / Strengths / Watch out for". Give it a share card. This is the retention and virality artifact; the clone has nothing equivalent.
3. Result structure. "What X chose" headline with the company name in accent color, four "What happened" bullets with the numbers bolded, a "Surprise twist" line, "The Lesson" in quotes, then "Your Choice Analysis" written per option. Our debrief already has the facts; add the twist line and the per-option analysis.
4. Named phases on the progress bar (Profile / Personality / Personalize) instead of a count. Ticks turn into checkmarks.
5. Hero association in copy. When a player picks the cautious option: "This is how Buffett plays it." Bold option: "This is the Bezos move."
6. Mascot interstitials with branched praise every 2 to 3 steps. Even a static character with four poses is enough.
7. Daily-goal commitment screen (5/10/15 min) before showing the plan or projection.
8. Paywall mechanics, if and when we charge: per-day price, preselected middle plan, guarantee directly under the auto-renew fine print, FAQ that answers "how do I cancel", buy box repeated at the bottom.
9. Ad angles: "You make the call. Then you see the outcome." is the cleanest expression of the product. Use it.

## What not to steal

- Fabricated numbers (3M+, 1,247 in the last hour, 87%). Legal and trust risk with no upside for a small product.
- Fake testimonials with typos.
- The 4.5-minute loader with forced modals. Fine at 5 to 8 seconds with one question; anything longer is hostile.
- Auto-renew at 4x the intro price hidden in grey text.

## Unverified

- Whether any of the social-proof numbers are real. The "last hour" count is a hardcoded string in the bundle.
- The exact US price list; only the VN-localized page and the bundle's mock data were observed.
- What the "Continue with Apple" branch does after the gate.
