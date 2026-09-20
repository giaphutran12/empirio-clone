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
    "It is April 1985, before a launch decision. Your flagship is under pressure from Rival B. A new formula has tested well. You have 6 simulated research hours to review the evidence and make a recommendation. Names are withheld; the clock and boardroom setup are fictional.",
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
      text: "Prelaunch taste testing involved nearly 200,000 consumers and favored the proposed formula.",
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
          text: "A company spokesperson later reported that prelaunch blind testing favored the new taste 55% to 45%. This is a reported preference margin, not a sales forecast or independently audited result.",
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
          label: "Unanswered in this dossier",
          kind: "unknown",
          text: "The available prelaunch evidence does not give a withdrawal-specific purchase forecast, subgroup breakdown, or confidence interval. Do not treat those missing details as failed tests.",
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
          text: "A second formula could broaden choice but split attention and demand. The dossier does not quantify cannibalization, shelf space, or bottling costs.",
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
          text: "No verified pilot results, parallel-production budget, or reversal timetable are supplied. A limited trial is an option to propose, not a successful experiment already completed.",
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
          text: "Before acting, specify what evidence would make you continue, pause, or reverse. This is a proposed management practice, not a documented historical plan; the dossier supplies no validated target or monitoring interval.",
          sourceIds: [],
        },
      ],
    },
  ],
  suggestedQuestions: [
    "What evidence supports each option?",
    "What do we know about the competitive situation?",
    "What information is missing from the dossier?",
    "What tradeoffs should I consider?",
  ],
  event: {
    title: "Simulation · production constraint",
    text: "At the 3-hour mark, operations reports that a full-scale launch of both formulas cannot fit the current launch window. A regional pilot remains possible. Offering both nationally now requires a delay.",
    evidence: {
      id: "halfway-prompt",
      label: "Fictional operating constraint",
      kind: "simulation",
      text: "For this simulation, parallel national production is unavailable in the current launch window. You may still recommend both formulas, but must accept a delayed rollout. Replacement, a regional pilot, and holding the current formula remain available. This is not a historical claim.",
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
      "On April 23, 1985, Coca-Cola changed its flagship formula. Consumer resistance followed. Its company history dates the original formula’s return to July 11, 79 days later, as Coca-Cola classic, sold alongside the new formula.",
    lesson:
      "The historical result is not proof that innovation was irrational or that every alternative would have worked. Distinguish a better-tested product from a better-tested transition. Judge your reasoning by the evidence you had, the assumptions you exposed, and the way you planned to learn.",
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
        "Historical path: the company replaced the formula and later restored the original alongside it. That sequence is observed history, not a forecast of what your exact execution would have produced.",
      alongside:
        "Hypothetical: offering both might preserve existing customers’ choice, but could split demand and complicate production. The later coexistence of both products does not prove an initial dual launch would have succeeded.",
      pilot:
        "Hypothetical: a limited trial could reveal purchase behavior and reactions to withdrawal before a broad commitment. Results might not generalize, and delay could carry a competitive cost. No outcome is established here.",
      hold: "Hypothetical: waiting avoids an immediate formula transition but leaves the observed competitive problem unresolved. The evidence does not establish whether the existing product would recover or keep losing ground.",
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
