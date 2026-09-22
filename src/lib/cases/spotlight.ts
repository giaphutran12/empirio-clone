import type { CaseDefinition, Evidence } from "../types";
import { cases04to12 } from "./batch-04";
import { lessons01 } from "../learning/lessons-01";

const scenarioFact = (id: string, label: string, text: string): Evidence => ({
  id,
  label,
  text,
  kind: "simulation",
  sourceIds: [],
});

const coffee: CaseDefinition = {
  id: "case-032",
  version: 3,
  number: "32",
  format: "scenario",
  title: "Would you give the coffee away?",
  subtitle: "A packed shop. A tempting promise.",
  category: "Pricing",
  year: "Business puzzle",
  role: "You decide whether to back a cafe's plan to grow.",
  objective: "Judge whether free coffee can earn more than the current offer.",
  briefing:
    "A promoter says: ‘Stop charging for coffee. Bring people in, then sell breakfast.’ The owner wants your call on a one-day offer. The figures are made up for this puzzle, in US dollars.",
  question: "Would you back the free-coffee proposal?",
  evidence: [
    scenarioFact(
      "normal",
      "A normal day",
      "100 people each buy a $4 coffee. Twenty also buy an $8 breakfast.",
    ),
    scenarioFact(
      "cost",
      "What each item costs",
      "Coffee costs $1 a cup. Breakfast costs $3 a serving. Those figures include every cost tied to those sales.",
    ),
    scenarioFact(
      "proposal",
      "The promoter's forecast",
      "Free coffee brings 300 people. The promoter expects 20% to buy one $8 breakfast. Each person gets one coffee.",
    ),
    scenarioFact(
      "capacity",
      "Enough room for the offer",
      "Staff can serve 300 coffees and up to 100 breakfasts. Staff wages and rent come to $250 a day under either offer.",
    ),
    scenarioFact(
      "scope",
      "No other income promised",
      "The free offer replaces paid coffee for everyone. There are no sponsor payments, no other sales and no proven repeat buying.",
    ),
  ],
  research: [
    {
      id: "demand",
      title: "Check the 20% claim",
      description: "Find out what supports the breakfast forecast.",
      hours: 2,
      evidence: [
        scenarioFact(
          "demand-finding",
          "Interest, not purchases",
          "In a poll of 100 nearby people, 20 said they might buy breakfast with free coffee. No one paid or booked.",
        ),
      ],
    },
    {
      id: "bundle",
      title: "Ask about a breakfast bundle",
      description: "Check whether a paid offer has buyers.",
      hours: 2,
      evidence: [
        scenarioFact(
          "bundle-finding",
          "Thirty prepaid orders",
          "Thirty new customers will pay $9 each in advance for coffee and breakfast. It must be a group deal. The items cost $4 each. This adds to normal sales. Current staff can handle it.",
        ),
      ],
    },
    {
      id: "target",
      title: "Check who the free offer reaches",
      description: "See whether current buyers still pay.",
      hours: 3,
      evidence: [
        scenarioFact(
          "target-finding",
          "Regulars get free coffee too",
          "The offer cannot leave out the 100 regulars. The 300 forecast visitors include them. They are not 300 extra visitors.",
        ),
      ],
    },
  ],
  suggestedQuestions: [
    "What must breakfast sales cover?",
    "Which sales would we lose?",
    "What would change the decision?",
  ],
  event: {
    title: "A sponsor offers $200",
    text: "A local office offers $200 upfront to sponsor the free-coffee day. The same 300-cup limit applies. It asks for no extra work and sets no sales conditions.",
    evidence: scenarioFact(
      "event",
      "A sponsor offers $200",
      "A local office offers $200 upfront to sponsor the free-coffee day. The same 300-cup limit applies. It asks for no extra work and sets no sales conditions.",
    ),
  },
  options: [
    {
      id: "discount",
      title: "Back the free-coffee day",
      description: "Use the promoter's 300-visitor forecast.",
      tradeoff:
        "A bold offer may bring new buyers. Paid coffee sales disappear.",
    },
    {
      id: "keep",
      title: "Keep the paid offer",
      description: "Say no to the offer and protect normal sales.",
      tradeoff:
        "You keep the earnings you know. But you never test a possible new crowd.",
    },
    {
      id: "target",
      title: "Offer 30 free trial cups",
      description:
        "Find a way to reach new customers before spending up to $30 on coffee.",
      tradeoff:
        "This caps cup costs. But the way to reach new buyers, and the sales after, are not secured.",
    },
    {
      id: "bundle",
      title: "Seek prepaid breakfast orders",
      description: "Offer a $9 coffee-and-breakfast bundle to a new group.",
      tradeoff:
        "Payment backs up the demand, but this reaches fewer people than a free day.",
    },
  ],
  reveal: {
    company: "The cafe",
    title: "The crowd is not the business model",
    history:
      "Normal sales leave $150 after listed costs. At the promoter's forecast, 60 breakfasts bring $480; breakfast costs $180, coffee $300 and daily bills $250. That leaves a $250 loss. The $200 sponsor cuts the loss to $50. The 30 prepaid bundles would instead add $150 to the normal day's $150.",
    lesson:
      "Count what new buyers leave behind, including the paid sales your offer replaces.",
    sources: [],
    consequences: {
      discount:
        "The forecast free day gives up $400 in coffee sales. Even 60 breakfasts do not cover the extra cups and the usual bills.",
      keep: "A normal day leaves $150 after listed costs. It is a safe fallback. It does not test new demand.",
      target:
        "Thirty free cups cap coffee cost at $30. You still need a way to reach new buyers without replacing paid sales.",
      bundle:
        "If you lock in the 30 new prepaid orders from the research, each adds $5 after item costs. Normal sales continue. That leaves $300 in total.",
    },
    rubric: [
      "Did you compare the same day?",
      "Did you count lost paid coffee sales?",
      "Did you separate a poll from prepaid demand?",
      "Did you weigh the sponsor without assuming it closes the gap?",
    ],
  },
  teaching: {
    skill: "Find where the profit comes from",
    takeaway:
      "Free can work when extra earnings cover the giveaway and the sales it replaces.",
    choices: {
      discount: {
        score: 35,
        verdict: "Risky move",
        why: "The promised breakfast sales do not cover free cups and daily bills. A bigger crowd still loses money.",
        tradeoff: "Future repeat sales could help, but none are proved.",
      },
      keep: {
        score: 80,
        verdict: "Strong move",
        why: "The normal day earns $150 after listed costs. You avoid replacing it with a forecast loss.",
        tradeoff: "You pass up a chance to reach new buyers.",
      },
      target: {
        score: 70,
        verdict: "Reasonable move",
        why: "A $30 cup limit caps what you spend to learn, if you can reach new buyers.",
        tradeoff:
          "You have no sure way to reach new buyers. Coupons might still replace paid purchases.",
      },
      bundle: {
        score: 90,
        verdict: "Strong move",
        why: "The offer needs paid demand. Research finds 30 new orders that add $150 without replacing current sales.",
        tradeoff:
          "You must lock in the group payment. This is not a forecast of daily demand.",
      },
    },
    history: {
      decision:
        "The prepaid group offer has the strongest support in this puzzle.",
      result:
        "At the stated demand, a normal day earns $150; free coffee loses $250, or $50 with the sponsor; paid bundles earn $300 in total.",
      connection:
        "The offer matters less than which extra purchases it causes and what each leaves behind.",
      sources: [],
    },
    moneyComparison: {
      title: "What each offer leaves",
      period: "One day · USD · after all listed costs",
      rows: [
        { label: "Normal day", sales: 560, costs: 410 },
        { label: "Free coffee: 60 breakfasts", sales: 480, costs: 730 },
        { label: "Free day with $200 sponsor", sales: 680, costs: 730 },
        { label: "Normal day plus 30 prepaid bundles", sales: 830, costs: 530 },
      ],
      note: "Made-up comparison, not a real cafe result. Free-day rows assume 300 cups and the forecast 60 breakfasts. Sponsor money is counted as sales. Bundle orders are on top of normal sales. All rows include $250 for wages and rent. No future sales are counted.",
    },
    alternativeConditions:
      "With 300 free cups and no sponsor, you need 140 breakfasts to match the normal $150 result. That assumes each breakfast leaves $5 after its own costs. With the $200 sponsor, 100 breakfasts match it. Staff can serve 100 breakfasts at most, so beating a normal day needs better terms or more capacity.",
    check: {
      question:
        "A bookstore offers free workshops to sell books. What best tests whether the offer pays?",
      options: [
        {
          id: "visits",
          text: "How many people attend",
          explanation: "Attendance alone does not cover a workshop's costs.",
        },
        {
          id: "extra",
          text: "Extra book earnings minus workshop costs and lost sales",
          explanation:
            "Count the sales caused by the workshop, their costs, and any normal sales it replaces.",
        },
        {
          id: "sales",
          text: "All books sold during workshops",
          explanation: "Some customers would have bought those books anyway.",
        },
      ],
      answerId: "extra",
    },
    terms: [
      {
        term: "Contribution",
        meaning: "What a sale leaves after the costs tied to it.",
      },
      {
        term: "Lost sales",
        meaning: "Paid purchases that your new offer replaces.",
      },
    ],
    researchNotes: {
      demand: "A poll is weaker evidence than payment.",
      bundle: "These paid new orders add to normal trading.",
      target: "The headline visitor count includes current customers.",
    },
    eventChange: {
      optionId: "discount",
      title: "Back the sponsored free day",
      description: "Collect $200 and offer up to 300 free coffees.",
      tradeoff:
        "The sponsor helps. But the forecast breakfast demand still matters.",
      why: "The sponsor cuts the forecast loss to $50. That is still less than the normal $150 gain.",
      score: 50,
    },
  },
};

const acquisition: CaseDefinition = {
  id: "case-044",
  version: 3,
  number: "44",
  format: "scenario",
  title: "Would you pay to lose the first sale?",
  subtitle: "The first receipt may not tell the whole story.",
  category: "Growth",
  year: "Business puzzle",
  role: "You approve growth spending for an online refill shop.",
  objective: "Decide whether repeat business can justify an upfront loss.",
  briefing:
    "Your finance lead wants to stop an ad: every first order loses money. Your marketer says the refills pay it back. Decide whether to fund the next 100 buyers. All numbers are made up, in US dollars.",
  question: "Would you fund another group of buyers?",
  evidence: [
    scenarioFact(
      "opening-1",
      "First order: $40",
      "Each new buyer pays $40 for a starter kit. Goods, shipping and fees cost $35.",
    ),
    scenarioFact(
      "opening-2",
      "$20 to win one buyer",
      "Ads cost $2,000 for the last 100 new buyers. The quote for the next 100 is the same; future results are not guaranteed.",
    ),
    scenarioFact(
      "opening-3",
      "Refills: $30",
      "Each refill sells for $30 and costs $10 to supply, including delivery and payment fees. No extra ads are needed for these orders.",
    ),
    scenarioFact(
      "opening-4",
      "A claim worth checking",
      "The marketer says repeat purchases covered the first loss within 90 days for three earlier groups. The order records are available.",
    ),
    scenarioFact(
      "opening-5",
      "$2,000 spare beyond money set aside",
      "Money from first orders and the cost to ship them settle at the same time. Ads are paid upfront. This plan must pay for itself within 90 days. Fixed costs are already set aside.",
    ),
  ],
  research: [
    {
      id: "trace",
      title: "Check earlier customer groups",
      description: "Match the first order to later paid refills.",
      hours: 2,
      evidence: [
        scenarioFact(
          "trace-finding",
          "Three completed groups",
          "Each of three earlier 100-buyer groups made 150 paid refill orders within 90 days. All buyers were new, with the same offer and costs. Refunds are already taken out.",
        ),
      ],
    },
    {
      id: "price",
      title: "Check cash timing",
      description: "See when repeat orders actually paid.",
      hours: 2,
      evidence: [
        scenarioFact(
          "price-finding",
          "Cash dips before it returns",
          "For each earlier group, the full $2,000 for ads was due first. Starter orders then left $500. Refills came in days 31–90, with no stock to pay for in advance. No other campaign bill is due.",
        ),
      ],
    },
    {
      id: "repeat",
      title: "Check whether the next buyers differ",
      description: "Look for changes that make the past less useful.",
      hours: 3,
      evidence: [
        scenarioFact(
          "repeat-finding",
          "Same audience, less certain at a bigger size",
          "The next 100 use the same audience and offer. To reach 200 at once, the ad platform must widen the audience. There is no record of repeat buying from that wider audience.",
        ),
      ],
    },
  ],
  suggestedQuestions: [
    "How many refills recover the first loss?",
    "What makes the past useful here?",
    "Can we afford the wait?",
  ],
  event: {
    title: "The ad quote rises",
    text: "Ads for the next 100 buyers now cost $2,500 upfront. Your $2,000 available cash and all other terms stay the same.",
    evidence: scenarioFact(
      "deadline-update",
      "The ad quote rises",
      "Ads for the next 100 buyers now cost $2,500 upfront. Your $2,000 available cash and all other terms stay the same.",
    ),
  },
  options: [
    {
      id: "double",
      title: "Buy 200 new customers",
      description: "Double the campaign to reach more buyers.",
      tradeoff:
        "Repeat buying could grow with it. But the wider audience and the upfront bill add new risks.",
    },
    {
      id: "pause",
      title: "Stop until first orders pay",
      description:
        "Require the starter order to cover the full cost of winning each buyer.",
      tradeoff:
        "You protect cash. But you may turn away a business that makes money on repeat orders.",
    },
    {
      id: "keep",
      title: "Fund the next 100 buyers",
      description:
        "Keep the current offer. Compare their 90-day earnings with earlier groups.",
      tradeoff:
        "You accept an upfront loss and count on repeat demand holding up.",
    },
    {
      id: "price",
      title: "Raise the starter price to $55",
      description: "Take more money on the first order before growing.",
      tradeoff:
        "It could shrink the early loss. But no one knows how many buy at $55 or how many come back.",
    },
  ],
  reveal: {
    company: "The refill shop",
    title: "The first loss can buy a profitable relationship",
    history:
      "Each earlier 100-buyer group lost $1,500 on starter orders after ads. Its 150 refills left $3,000, a $1,500 gain over 90 days before fixed costs. This supports one more similar group, not growth without limit. The later $2,500 upfront quote is more than the $2,000 cash available.",
    lesson:
      "Judge the whole customer relationship, then check whether you can fund the wait.",
    sources: [],
    consequences: {
      double:
        "Two hundred buyers need at least $4,000 upfront at the opening rate. That is more than the cash available. Repeat buying from a wider audience is also unproved.",
      pause:
        "You protect cash. But the earlier groups show a first-sale loss need not mean a losing business.",
      keep: "The opening $2,000 quote fits the cash available. Earlier groups support a careful repeat. The higher quote needs new terms before you go ahead.",
      price:
        "If demand stays the same, $55 covers the $35 order cost and the original $20 to win the buyer. That demand guess must be checked.",
    },
    rubric: [
      "Did you count what refills leave after their costs, not just refill sales?",
      "Did you check similar customer groups?",
      "Did you separate profit from cash timing?",
      "Did you avoid assuming a bigger audience behaves the same?",
    ],
  },
  teaching: {
    skill: "See the whole deal, not the first sale",
    takeaway:
      "A first-sale loss can pay back through measured repeat business, if cash lasts until it does.",
    choices: {
      double: {
        score: 30,
        verdict: "Risky move",
        why: "The opening ad bill is more than the cash available. A wider audience also makes repeat demand less certain.",
        tradeoff: "Possible gains grow. So do the cash you need and the doubt.",
      },
      pause: {
        score: 65,
        verdict: "Reasonable move",
        why: "You avoid cash risk. But making each first sale pay ignores the profitable repeat orders in earlier groups.",
        tradeoff:
          "A strict first-sale rule can turn away good repeat business.",
      },
      keep: {
        score: 90,
        verdict: "Strong move",
        why: "Similar paid records support another 100 buyers. The opening upfront bill fits the cash available.",
        tradeoff: "Past repeat buying backs the bet. It does not guarantee it.",
      },
      price: {
        score: 70,
        verdict: "Reasonable move",
        why: "A higher first price could reduce the early loss. You still need proof that buyers accept it.",
        tradeoff:
          "The new price could mean fewer buyers, or fewer later orders.",
      },
    },
    history: {
      decision:
        "At the opening quote, the records support funding another 100 similar buyers.",
      result:
        "Each earlier group lost $1,500 at first, earned $3,000 on refills, and kept $1,500 before fixed costs. New customers may behave differently.",
      connection:
        "A loss is an investment only when later earnings, and the cash to wait, have solid evidence.",
      sources: [],
    },
    moneyComparison: {
      title: "Follow the same 100 buyers",
      period: "90 days · USD · before reserved overhead",
      rows: [
        { label: "Starter sales only, original ads", sales: 4000, costs: 5500 },
        {
          label: "Starter + 150 refills, original ads",
          sales: 8500,
          costs: 7000,
        },
        {
          label: "Same repeat demand, higher ad quote",
          sales: 8500,
          costs: 7500,
        },
      ],
      note: "The first row shows only the starter part of the same 90-day relationship. The finished earlier groups support row two. Row three assumes the same repeat demand. Its $2,500 upfront ad bill does not fit the $2,000 cash available, even with a possible $1,000 gain. These figures are money left after each sale's own costs, not company profit.",
    },
    alternativeConditions:
      "At the opening ad quote, 75 refills win back the $1,500 first-sale loss; at 76 you come out ahead. At the higher quote, 100 refills win back $2,000. Cash still matters even if repeat demand is strong.",
    check: {
      question:
        "A printer shop loses $30 selling a printer. What would justify that offer?",
      options: [
        {
          id: "volume",
          text: "Selling many more printers",
          explanation: "More first-sale losses do not prove a payback.",
        },
        {
          id: "hope",
          text: "Knowing customers need ink",
          explanation:
            "They may buy ink elsewhere. Need alone does not prove your earnings.",
        },
        {
          id: "repeat",
          text: "Measured ink earnings above $30, with cash to wait",
          explanation:
            "Track real later purchases, their costs, and how long you must carry the first loss.",
        },
      ],
      answerId: "repeat",
    },
    terms: [
      {
        term: "Acquisition cost",
        meaning: "What you pay to bring in a new buyer.",
      },
      {
        term: "Payback",
        meaning: "When later earnings cover an earlier cost.",
      },
    ],
    researchNotes: {
      trace:
        "Follow the same buyers through paid orders, not a guess at their lifetime spending.",
      price:
        "A profitable relationship can still require cash you do not have today.",
      repeat: "Results for one audience may not hold when you widen it.",
    },
    eventChange: {
      optionId: "keep",
      title: "Get payment terms before funding 100",
      description:
        "Go ahead only if at least $500 of the ad bill can wait until starter orders pay in.",
      tradeoff:
        "No later payment is agreed yet. If the platform refuses, this plan cannot go ahead with current cash.",
      why: "The new upfront bill is more than your cash by $500. Later profit cannot pay that bill today.",
      score: 80,
    },
  },
};

const originalPrime = cases04to12.find(
  (businessCase) => businessCase.id === "case-009",
)!;
const primeLesson = lessons01["case-009"];
const prime: CaseDefinition = {
  ...originalPrime,
  version: 3,
  format: "historical",
  title: "Would you put a flat price on shipping?",
  subtitle: "$79 once. Then every order feels different.",
  briefing:
    "It is February 2005. Amazon is weighing a $79 yearly shipping plan. Buyers could order one small item without saving up a basket. Your call: accept that cost risk to become their first shopping stop?",
  objective:
    "Weigh the value of changed buying habits against an open-ended delivery promise.",
  question: "Would you launch the plan without an order minimum?",
  evidence: [
    ...originalPrime.evidence,
    {
      id: "member-economics",
      label: "The key unknown",
      text: "This case has no verified forecast of member margins, how often members order, or delivery costs. Company-wide cash flow cannot answer that question.",
      kind: "unknown",
      sourceIds: [],
    },
  ],
  teaching: {
    ...primeLesson,
    skill: "Judge a strategy before the outcome",
    takeaway:
      "A bold promise needs a reason it changes behavior, and a plan to measure what that change costs.",
    choices: {
      ...primeLesson.choices,
      unlimited: {
        score: 85,
        verdict: "Strong move",
        why: "Dropping order minimums could make Amazon the first place buyers shop. That is a sound strategy bet, not proven profit.",
        tradeoff:
          "You take on costly heavy users. You need to track the extra earnings after delivery costs.",
      },
      pilot: {
        score: 85,
        verdict: "Strong move",
        why: "A test with heavy and light users can reveal costs and changed buying before a wider promise.",
        tradeoff:
          "A small trial may understate how much a widely trusted offer changes habits.",
      },
    },
    alternativeConditions:
      "A full launch is stronger when fees and extra purchases, after their own costs, beat the added delivery costs. An order minimum is stronger if small shipments drive most costs and customers still value the plan. Those member-level numbers are missing from this case. We do not claim Amazon lacked them.",
    check: {
      question:
        "A car-wash chain wants an unlimited monthly pass. What evidence would matter most?",
      options: [
        {
          id: "members",
          text: "How many people say they will join",
          explanation:
            "Interest does not show how often members visit or what those visits cost.",
        },
        {
          id: "groups",
          text: "Visits, added earnings and costs for different member groups",
          explanation:
            "Heavy users may join first. Compare their costs, earnings and visits with what would happen without the pass.",
        },
        {
          id: "history",
          text: "Whether another famous company sold a subscription",
          explanation:
            "A subscription that worked elsewhere does not prove these costs or buying habits.",
        },
      ],
      answerId: "groups",
    },
    eventChange: { ...primeLesson.eventChange, score: 80 },
  },
};

// These revisions replace existing cases without adding to the library or changing saved versions.
export const spotlightCases: CaseDefinition[] = [coffee, acquisition, prime];
