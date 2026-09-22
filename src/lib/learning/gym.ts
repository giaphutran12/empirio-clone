import type { CaseLesson } from "./types";
export const gymLesson: CaseLesson = {
  alternativeConditions:
    "Replacing passes with 20 buyers still loses $9,500 at these costs, even if everyone pays. It needs lower costs or a different offer. Three groups need paid demand, enough room and a full staff budget. Keeping passes needs a plan to close the $500 monthly gap. A small test checks those things first.",
  skill: "Check the math behind a tempting pitch",
  takeaway: "Money paid today still has to pay for tomorrow’s work.",
  choices: {
    replace: {
      score: 25,
      verdict: "Risky move",
      why: "Twenty buyers pay $10,000 for three months. Your current members would pay $15,000 over the same time, if they stay.",
      tradeoff:
        "You give up monthly payments. The $16,500 in bills stays. Coaching costs extra.",
    },
    pilot: {
      score: 85,
      verdict: "Strong move",
      why: "Keep income coming in while testing whether people will pay for extra help. Check costs before making the full promise.",
      tradeoff:
        "A test still costs money. Some buyers may switch from passes instead of adding new income.",
    },
    scale: {
      score: 35,
      verdict: "Risky move",
      why: "Sixty buyers could bring in $30,000. But there are no paid orders or proof you can serve three groups yet.",
      tradeoff:
        "A bigger target is not more money in the bank. More clients also mean more work.",
    },
    hold: {
      score: 50,
      verdict: "Risky move",
      why: "You avoid spending on an untested pitch. But $5,000 in monthly sales cannot cover $5,500 in bills.",
      tradeoff:
        "At the current rate, you lose $1,500 over the next three months. Waiting needs a plan too.",
    },
  },
  history: {
    decision:
      "The ad compares $5,000 from one month of passes with $10,000 from a three-month challenge.",
    result:
      "Over the same 90 days, passes bring in $15,000 and one sold-out challenge brings in $10,000. The challenge collects cash sooner. It does not bring in more sales.",
    connection:
      "These are worked examples, not a real gym’s results. The ad’s claims about fitness gains and repeat sales have not been checked.",
    sources: [],
  },
  moneyComparison: {
    title: "Put each plan on the same clock",
    period: "90 days · US dollars · all places sold",
    rows: [
      { label: "Keep 100 passes", sales: 15000, costs: 16500 },
      {
        label: "Replace passes · 20 challenge buyers",
        sales: 10000,
        costs: 19500,
      },
      {
        label: "Replace passes · 60 buyers (if capacity allows)",
        sales: 30000,
        costs: 25500,
      },
    ],
    note: "Challenge costs use the $3,000 coaching quote per group plus $16,500 in bills. The 60-buyer row is only arithmetic, not a workable plan yet. Extra space or staff could cost more. These rows replace passes. If you add a group instead, you must also count members who switch. In this example every place sells at full price with no refunds.",
  },
  check: {
    question:
      "Ten current members buy a $500 challenge instead of paying their $50 monthly fee for three months. How much extra sales income is that?",
    answerId: "extra",
    options: [
      {
        id: "total",
        text: "$5,000 extra",
        explanation:
          "That is the total challenge sale. Subtract the $1,500 those members would have paid for passes.",
      },
      {
        id: "extra",
        text: "$3,500 extra, before coaching costs",
        explanation:
          "$5,000 minus $1,500 in lost pass sales leaves $3,500 extra. Coaching and refunds can reduce what you keep.",
      },
      {
        id: "profit",
        text: "$3,500 profit",
        explanation:
          "It is extra sales, not profit. You still need to subtract the added costs.",
      },
    ],
  },
  terms: [
    { term: "Cash", meaning: "Money you have available now." },
    {
      term: "Profit",
      meaning: "Sales left after paying the costs of that work.",
    },
    {
      term: "Paid demand",
      meaning: "People who actually pay, not just say they like the idea.",
    },
  ],
  researchNotes: {
    costs:
      "A higher price also buys more of your team’s time. Subtract the coaching bill.",
    demand:
      "Interest is not a paid order. Count current members separately from new buyers.",
    capacity:
      "One full group does not prove three groups fit. Price the added space and staff first.",
    gaps: "Do not treat a promise in an ad as measured results.",
  },
  eventChange: {
    optionId: "pilot",
    title: "Test demand before paying the coach",
    description:
      "Keep passes. Find buyers first and agree clear refund terms before risking the $1,000 booking payment.",
    tradeoff:
      "You may lose this coach’s slot. But paying now puts half your cash at risk before any sales.",
    why: "The booking payment changes the order of the test. Prove paid demand before you commit half your cash. Do not count a refundable payment as money you can safely spend.",
    score: 85,
  },
};
