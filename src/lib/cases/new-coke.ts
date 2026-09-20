import type { CaseDefinition } from "../types";

export const newCoke: CaseDefinition = {
  id: "case-001",
  version: 1,
  number: "01",
  title: "The formula decision",
  subtitle: "A better taste. A bigger bet.",
  category: "Consumer strategy",
  year: "1985",
  role: "You lead Company A, a major soft-drink business.",
  objective:
    "Defend the flagship’s market position while protecting the value of the existing brand.",
  briefing:
    "April 1985. Your biggest rival is gaining ground. A new formula has tested well. Do you replace the drink your customers have bought for generations?",
  question: "What should Company A do with its flagship formula?",
  evidence: [
    {
      id: "market-pressure",
      label: "15 years of pressure",
      kind: "fact",
      text: "By 1985, the flagship’s share lead over its main rival in the US had narrowed for 15 consecutive years.",
      sourceIds: ["source-1"],
    },
    {
      id: "taste-sample",
      label: "Nearly 200,000 consumers",
      kind: "fact",
      text: "Taste tests with nearly 200,000 participants favored the proposed formula overall.",
      sourceIds: ["source-1"],
    },
    {
      id: "product-history",
      label: "99 years of continuity",
      kind: "fact",
      text: "In 1985, the proposed taste change would be the first in the flagship’s 99-year history.",
      sourceIds: ["source-1"],
    },
    {
      id: "market-scope",
      label: "Largest market: US",
      kind: "fact",
      text: "The United States was the company’s largest market; management wanted to revive the brand and the cola category there.",
      sourceIds: ["source-1"],
    },
    {
      id: "existing-price",
      label: "No planned price increase",
      kind: "fact",
      text: "The launch plan kept the consumer price unchanged; a higher price was not part of the proposal.",
      sourceIds: ["source-2"],
    },
  ],
  research: [
    {
      id: "review-tests",
      title: "Audit the taste evidence",
      hours: 1,
      description:
        "Review the findings and scope of the existing consumer tests.",
      evidence: [
        {
          id: "test-margin",
          label: "55% versus 45%",
          kind: "fact",
          text: "A company spokesperson later reported that prelaunch blind testing favored the new taste 55% to 45%. That tells you which taste people preferred, not what they would buy.",
          sourceIds: ["source-3"],
        },
        {
          id: "test-scope",
          label: "Preference is one signal",
          kind: "interpretation",
          text: "A preference result supports the recipe. It does not, by itself, establish repeat purchases or acceptance of removing the familiar product.",
          sourceIds: ["source-1"],
        },
        {
          id: "test-limits",
          label: "What we don’t know",
          kind: "unknown",
          text: "We don’t have a forecast for purchases if the original disappears, a breakdown by customer group, or a margin of error for the tests.",
          sourceIds: [],
        },
      ],
    },
    {
      id: "review-portfolio",
      title: "Review the wider business",
      hours: 2,
      description:
        "Review the available evidence across the product portfolio.",
      evidence: [
        {
          id: "portfolio-signal",
          label: "Different products, different trends",
          kind: "fact",
          text: "Contemporaneous reporting described growing popularity for the company’s diet and decaffeinated drinks while its regular cola declined and the rival gained.",
          sourceIds: ["source-2"],
        },
        {
          id: "portfolio-reading",
          label: "A portfolio tradeoff",
          kind: "interpretation",
          text: "A second formula could broaden choice but split attention and demand. We don’t have figures for lost sales between products, shelf space, or bottling costs.",
          sourceIds: ["source-2"],
        },
      ],
    },
    {
      id: "review-rollout",
      title: "Review the rollout choices",
      hours: 3,
      description: "Compare the evidence available for each rollout approach.",
      evidence: [
        {
          id: "replacement-risk",
          label: "Two decisions in one",
          kind: "interpretation",
          text: "Introducing a recipe and withdrawing an existing one are separate choices. A test that supports introduction need not settle withdrawal.",
          sourceIds: ["source-1"],
        },
        {
          id: "rollout-unknowns",
          label: "No ready-made business case",
          kind: "unknown",
          text: "We don’t have pilot results, a budget for producing both formulas, or a timetable for reversing the launch.",
          sourceIds: [],
        },
      ],
    },
    {
      id: "review-success",
      title: "Define what success would mean",
      hours: 2,
      description:
        "Consider how to evaluate the commercial result of your decision.",
      evidence: [
        {
          id: "success-measures",
          label: "Match the measure to the goal",
          kind: "interpretation",
          text: "Taste preference and competitive performance measure different things. A launch review should consider repeat purchases and retention of current buyers, as well as willingness to try the new formula.",
          sourceIds: ["source-1"],
        },
        {
          id: "success-thresholds",
          label: "Set a decision rule",
          kind: "interpretation",
          text: "Decide what would make you continue, pause, or reverse the launch. Which results would change your mind?",
          sourceIds: [],
        },
      ],
    },
  ],
  suggestedQuestions: [
    "What evidence supports each option?",
    "What do we know about the competitive situation?",
    "What else do we need to know?",
    "What tradeoffs should I consider?",
  ],
  event: {
    title: "Production update",
    text: "At the 3-hour mark, operations reports that a full-scale launch of both formulas cannot fit the current launch window. A regional pilot remains possible. Offering both nationally now requires a delay.",
    evidence: {
      id: "halfway-prompt",
      label: "Operations update",
      kind: "simulation",
      text: "Operations can’t produce both formulas nationally in time for launch. Offering both means a delay. You can still replace the original, run a regional pilot, or hold off.",
      sourceIds: [],
    },
  },
  options: [
    {
      id: "replace",
      title: "Replace the flagship",
      description: "Launch the new formula and retire the existing one.",
      tradeoff:
        "A focused launch with maximum exposure if the premise is wrong.",
    },
    {
      id: "alongside",
      title: "Offer both formulas",
      description: "Introduce the new formula as a separate choice.",
      tradeoff: "Preserves choice but adds portfolio and operating complexity.",
    },
    {
      id: "pilot",
      title: "Run a limited trial",
      description:
        "Keep the flagship while testing real purchases before a wider decision.",
      tradeoff:
        "Buys evidence at the cost of time and an imperfect local signal.",
    },
    {
      id: "hold",
      title: "Do nothing for now",
      description: "Keep the current formula and current launch plans on hold.",
      tradeoff:
        "Avoids immediate disruption while competitive pressure continues.",
    },
  ],
  reveal: {
    company: "The Coca-Cola Company",
    title: "The New Coke decision",
    history:
      "Coca-Cola changed its drink in April 1985. Many fans were upset. Just 79 days later, the old drink came back. Both were then sold.",
    lesson:
      "Liking a new drink does not mean wanting the old one gone. Test both questions.",
    sources: [
      {
        id: "source-1",
        title: "Coca-Cola company history: New Coke (retrospective)",
        url: "https://www.coca-colacompany.com/about-us/history/new-coke-the-most-memorable-marketing-blunder-ever",
      },
      {
        id: "source-2",
        title: "UPI: formula launch reporting, April 23, 1985",
        url: "https://www.upi.com/Archives/1985/04/23/Coca-Cola-the-worlds-No-1-consumer-product-said-Tuesday/3500483080400/",
      },
      {
        id: "source-3",
        title:
          "UPI, May 31, 1985: spokesperson describes prelaunch taste-test results",
        url: "https://www.upi.com/Archives/1985/05/31/Coke-hotline-swamped-by-calls/4435486360000/",
      },
    ],
    consequences: {
      replace:
        "You back the new taste with the whole brand. Fans of the old drink may leave.",
      alongside:
        "Fans can keep their old drink. But making and selling two drinks costs more work.",
      pilot:
        "A small test lets you watch real sales. But one town may not act like the whole country.",
      hold: "You avoid a big change now. Your rival can still gain ground.",
    },
    rubric: [
      "Did you connect the competitive problem to your chosen action?",
      "Did you distinguish reported facts, interpretations, and missing evidence?",
      "Did you address what taste preference can and cannot predict?",
      "Did you name a downside and a practical way to detect or reverse it?",
      "Did your confidence reflect the uncertainty remaining?",
    ],
  },
};
