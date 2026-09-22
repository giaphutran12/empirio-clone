# Step feed, term popups and plain-words copy — QA

2026-09-23. Local Next.js app at http://127.0.0.1:3012, driven through Claude computer-use in Chrome. Local browser evidence with live OpenAI calls for the analyst answer; not production or a physical phone.

## Observed flow (desktop, case 35 Free shipping)

1. Opened the case. Step by step is the default reading mode; the switch to Full page sits under the header. 17 screens: situation, 6 facts, before you decide, analyst, 3 research tasks, 4 options, your call. `fact-step-desktop.jpg`.
2. Hovered "larger baskets": one-line tooltip appeared. Clicked it: the definition modal opened with meaning and worked example. Clicked outside: it closed. Escape also closes. `term-modal-desktop.jpg`.
3. Arrow keys moved between screens. Progress bar and "3 / 17" counter updated.
4. Analyst screen: tapped a suggested question. Live answer arrived with "goods cost" highlighted as a tappable term. `analyst-step-live-answer.jpg`.
5. Research 1: "Spend 2h to check" opened the existing confirmation. After commissioning, the same screen showed Checked, 4h left, and the finding with What we found / Why it matters. `research-step-finding.jpg`.
6. Research 2 (2h more) triggered the halfway development. Step count grew to 18 and a New development screen appeared after the research screens. `event-step.jpg`.
7. Option screens show title, description, the catch and Pick this one; picking advances. Your call screen shows a compact list with the pick selected, optional note and Make my call. `option-step.jpg`, `decide-step.jpg`.
8. Make my call produced the normal review (65/100, money comparison). The review screen is unchanged and not part of the feed. `debrief-after-feed.jpg`.

## Observed flow (390 px frame, case 33 bakery)

9. Feed at phone width: one fact per screen, Back arrow, counter and Next in a fixed bar. `phone-hook-step.jpg`.
10. Simulated touch swipe up advanced a screen; swipe down went back. Real finger swipes on a device were not tested.
11. Tapped "invoice": the definition opened as a bottom sheet; tapping the dimmed area closed it. `phone-term-sheet.jpg`.
12. Reopening the case resumed at the saved screen (Option A, 12/16).
13. Full page mode restored the tab layout with term highlights in the briefing cards. `phone-full-page-mode.jpg`.

## Fixed during the pass

- Hover tooltip widened the page horizontally at phone width (scrollWidth 473 vs 375). Tooltip is now display-none until hover and the root clips horizontal overflow; re-measured 390/390.
- In feed mode the New development banner duplicated the event screen; it now shows only in Full page mode.
- "Why check" duplicated "Why it matters" once a task was checked; hidden after the check.
- Last screen no longer shows a Next button.

## Not verified

- One scripted run inside the phone frame timed out in the browser tooling and the tab had to be closed. The identical steps ran cleanly on retry, and the glossary matcher times at under 30 ms per case in Node, so the cause was not found. Watch for a frozen tab.
- Real touch swipes, physical phone, production deployment.
- The copy pass covered the 20 business puzzles, the gym case and the three starting cases. The 30 historical cases got term popups only; their wording is unchanged.

## Code checks

- `npm test`: 231 passed, including new glossary and feed step tests.
- `npm run typecheck`, `npm run build`, `git diff --check`: passed.
- Numbers, ids, hours and scores in every rewritten content file match HEAD token for token (scripted check run by each copy agent).
