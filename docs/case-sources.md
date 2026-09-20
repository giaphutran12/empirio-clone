# Case 001: editorial and source record

Verified against live sources on 2026-09-20. The playable narrative withholds names; this developer document contains the reveal.

## Sources

- **source-1:** [The Coca-Cola Company, New Coke: The Most Memorable Marketing Blunder Ever?](https://www.coca-colacompany.com/about-us/history/new-coke-the-most-memorable-marketing-blunder-ever). Primary corporate retrospective, not an independent assessment. Sections “Factors That Shaped the Launch Decision” and “Swinging for the Fences” support the prelaunch context. “The Return of a Classic” supports the reveal.
- **source-2:** [UPI, April 23, 1985 launch report](https://www.upi.com/Archives/1985/04/23/Coca-Cola-the-worlds-No-1-consumer-product-said-Tuesday/3500483080400/). Contemporaneous journalism reporting the launch plan and existing portfolio trends. It includes management claims, not audited causal findings.
- **source-3:** [UPI, May 31, 1985 spokesperson interview](https://www.upi.com/Archives/1985/05/31/Coke-hotline-swamped-by-calls/4435486360000/). Used only for the spokesperson's reported prelaunch blind-test margin in `test-margin`. The article's later customer reactions are excluded from play. A management-reported result is not independent validation.

## Evidence boundary

`market-pressure`, `taste-sample`, `product-history`, and `market-scope` paraphrase source-1's prelaunch context. `existing-price` and `portfolio-signal` use source-2. The announcement-day reporting is used only for preexisting conditions and management's proposed terms. Public reactions, launch execution, and later outcomes do not enter the playable evidence.

“First taste change” follows the historical accounts; it does not mean no ingredient ever changed. The rounded testing count follows the corporate account and is not an exact sample size. No share percentage, test preference percentage, revenue forecast, or financial loss is invented.

All research reviews existing evidence. Each task's 1, 2, or 3 hours is a game cost. The four tasks cost 8 hours in total against a 6-hour simulated budget, so the player must choose what to investigate. The additional 2-hour success-measures review is explicitly interpretation: it proposes measures and a decision rule without claiming a historical plan or inventing thresholds. No task claims to conduct a new survey, interview, or live pilot. Interpretations are labeled `interpretation`; unavailable forecasts and operating details are `unknown`. Missing evidence means absent from this dossier, not necessarily absent from the company's historical research.

The 3-hour production constraint, executive role, deadline, and pseudonyms are simulation framing. The event is labeled `simulation` and introduces no purported historical fact. Once encountered, it changes the tradeoff: parallel national production requires delaying the rollout beyond the current window; a regional pilot remains available. No option is removed. The constraint must not be described as an actual limitation faced by the historical company. The year, product category, and scale may allow knowledgeable players to infer the identity; name withholding is not guaranteed anonymity.

## Reveal and consequences

Only the `replace` choice corresponds to the observed initial path. Other choices have explicitly hypothetical consequences, no invented outcomes, and no numerical score. The July date follows source-1's retrospective timeline; it should not be represented as a market-by-market restocking date. Later coexistence does not establish the counterfactual success of an initial dual launch.

The mandate and initial research descriptions use neutral language rather than announcing the historical lesson. The debrief evaluates reasoning under uncertainty rather than rewarding hindsight. External source titles and URLs belong in the reveal because they disclose the identity. Before commitment, source IDs are opaque references. Cases 002 and 003 were authored only after the coordinator confirmed the first mobile browser playthrough completed.

## Content verification

The content contract check expects four research tasks costing 8 hours total, with individual costs from 1 to 3 hours; the session budget remains 6. Existing research IDs and costs remain unchanged. Checks also cover option-to-consequence coverage, source-reference integrity, no company names outside the reveal, and the simulation label. An isolated TypeScript check validates the case against `CaseDefinition`; these checks do not substitute for browser QA of budget enforcement.

# Case 002: the 2000 acquisition proposal

The player leads the prospective buyer, Blockbuster, not the seller. This is the acquisition proposal involving Netflix in 2000, not the later streaming transition. Company A is the buyer and Company B the seller. The exact meeting month is omitted because retrospective accounts differ on timing.

- **source-1:** [Marc Randolph interviewed by Tim Ferriss, February 2021](https://tim.blog/2021/02/01/marc-randolph-transcript/). Primary participant account, recorded much later. Supports the asking price, proposed division of responsibilities, existing mail/subscription model, seller financing context, and the rejected offer in the reveal. Tone, motives, and remembered scale are not treated as audited facts. No laughter claim or retrospective market capitalization enters play.
- **source-2:** [Netflix's 2002 S-1/A](https://www.sec.gov/Archives/edgar/data/1065280/000101287002002125/ds1a.htm), Summary Financial and Other Data. Uses only the historical 1999 column, whose amounts are in thousands of US dollars. Later years are excluded. This document did not exist at the meeting; it establishes earlier business results, not proof that the buyer received these exact records. The framing explicitly describes reconstruction from later records.

The accounts and financing tasks each unlock new sourced information. Other tasks identify implementation assumptions and unavailable terms. No cash runway, acquisition return, contemporary store count, or signed partnership is invented. The staffing constraint is simulation only. Declining acquisition is the observed element; a permanently unchanged strategy is not asserted to be historical. Buying, partnering, and building have hypothetical consequences.

# Case 003: DRAM allocation in mid-1985

- **source-1:** [Intel corporate history: the 1103 DRAM](https://timeline.intel.com/1970/the-intel-1103-dram). Supports the product launch and subsequent mainframe adoption before the decision.
- **source-2:** [Intel corporate history: the processor and IBM PC](https://www.intel.com/content/www/us/en/history/virtual-vault/articles/the-8086-and-the-ibm-pc.html). Supports the earlier computer design win. Product and customer names are withheld during play.
- **source-3:** [Intel's 1986 annual report](https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2025-05/history-1986-annual-report.pdf). Management's primary retrospective supports prior capital spending, the late-1984 downturn, and earlier processor licensing. It was not available at the 1985 decision. Subsequent restructuring and retained EPROM business appear only in the reveal.
- **source-4:** [Intel corporate history timeline](https://timeline.intel.com/), 1971 and 1985 entries. Supports preexisting EPROM capability and the eventual DRAM exit. Corporate assessments such as calling the choice “smart” are not adopted as evidence.

The market and portfolio tasks each unlock a new sourced fact. The scenario does not portray DRAM exit as exit from all memory. No predecision full-year 1985 financial result, product margin, yield disadvantage, shutdown cost, or customer contract is invented. The development-capacity conflict is labeled simulation and changes which programs can proceed at full scope. Subsequent losses prevent the reveal from implying an instant recovery.

Both additional cases use four research tasks totaling 8 simulated hours against a 6-hour budget. Each includes a hold/do-nothing choice. All nonobserved option outcomes are hypothetical, with no numeric scoring. Browser and live-analyst verification remain separate from these content checks.
