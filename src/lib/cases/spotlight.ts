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
  role: "You decide whether to back a cafe's growth proposal.",
  objective: "Judge whether free coffee can earn more than the current offer.",
  briefing:
    "A promoter says: ‘Stop charging for coffee. Bring people in, then sell breakfast.’ The owner wants your call on a one-day offer. These are authored figures in US dollars.",
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
      "Coffee costs $1 per cup. Breakfast costs $3 per serving, including all costs tied to those sales.",
    ),
    scenarioFact(
      "proposal",
      "The promoter's forecast",
      "Free coffee brings 300 people. The promoter expects 20% to buy one $8 breakfast. Each person gets one coffee.",
    ),
    scenarioFact(
      "capacity",
      "Enough room for the offer",
      "Staff can serve 300 coffees and up to 100 breakfasts. Scheduled wages and rent total $250 a day under either offer.",
    ),
    scenarioFact(
      "scope",
      "No other income promised",
      "The free offer replaces paid coffee for everyone. There are no sponsor payments, other sales or proven repeat purchases.",
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
          "Thirty paid reservations",
          "Thirty new customers will prepay $9 each for coffee and breakfast, only as a group offer. The total item cost is $4 each. This adds to normal sales and fits current staff capacity.",
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
          "The campaign cannot exclude the 100 regular buyers. The 300 forecast visitors include them; they are not 300 extra visitors.",
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
    text: "A local office offers $200 upfront to sponsor the free-coffee day. It covers the same 300-cup limit with no extra work or sales conditions.",
    evidence: scenarioFact(
      "event",
      "A sponsor offers $200",
      "A local office offers $200 upfront to sponsor the free-coffee day. It covers the same 300-cup limit with no extra work or sales conditions.",
    ),
  },
  options: [
    {
      id: "discount",
      title: "Back the free-coffee day",
      description: "Use the promoter's 300-visitor forecast.",
      tradeoff:
        "A bold offer may bring new buyers; paid coffee sales disappear.",
    },
    {
      id: "keep",
      title: "Keep the paid offer",
      description: "Decline the promotion and protect normal sales.",
      tradeoff:
        "You preserve known earnings but leave a possible new audience untested.",
    },
    {
      id: "target",
      title: "Offer 30 free trial cups",
      description:
        "Seek a new-customer channel before spending up to $30 on coffee.",
      tradeoff:
        "This limits cup costs, but the channel and follow-on demand are not secured.",
    },
    {
      id: "bundle",
      title: "Seek prepaid breakfast orders",
      description: "Offer a $9 coffee-and-breakfast bundle to a new group.",
      tradeoff:
        "Payment would support demand, but this reaches fewer people than a free day.",
    },
  ],
  reveal: {
    company: "The cafe",
    title: "The crowd is not the business model",
    history:
      "Normal sales leave $150 after listed costs. At the promoter's forecast, 60 breakfasts bring $480; breakfast costs $180, coffee $300 and daily bills $250. That leaves a $250 loss. The $200 sponsor reduces the loss to $50. The 30 prepaid bundles would instead add $150 to the normal day's $150.",
    lesson:
      "Count what new buyers leave behind, including the paid sales your offer replaces.",
    sources: [],
    consequences: {
      discount:
        "The forecast free day gives up $400 in coffee sales. Even 60 breakfasts do not cover the added cups and existing bills.",
      keep: "Normal trading leaves $150 after listed costs. It is a sound fallback, though it does not test a new source of demand.",
      target:
        "Thirty free cups cap coffee cost at $30. You still need a way to reach new buyers without replacing paid sales.",
      bundle:
        "If you secure the researched 30 new prepaid orders, each adds $5 after item costs. Normal sales continue, leaving $300 total.",
    },
    rubric: [
      "Did you compare the same day?",
      "Did you count lost paid coffee sales?",
      "Did you separate a poll from prepaid demand?",
      "Did you reconsider the sponsor without assuming it solves the gap?",
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
        why: "A $30 cup limit bounds the cost of learning if you can reach new buyers.",
        tradeoff:
          "The channel is not secured; coupons might still replace paid purchases.",
      },
      bundle: {
        score: 90,
        verdict: "Strong move",
        why: "The offer requires paid demand. Research finds 30 new orders that add $150 without replacing current sales.",
        tradeoff:
          "You must secure the group payment; this is not a forecast for daily demand.",
      },
    },
    history: {
      decision:
        "The prepaid group offer has the strongest support in this puzzle.",
      result:
        "At the stated demand, normal trading earns $150; free coffee loses $250, or $50 with the sponsor; paid bundles earn $300 total.",
      connection:
        "The offer matters less than which extra purchases it causes and what each leaves behind.",
      sources: [],
    },
    moneyComparison: {
      title: "What each offer leaves",
      period: "One day · USD · after all listed costs",
      rows: [
        { label: "Normal trading", sales: 560, costs: 410 },
        { label: "Free coffee: 60 breakfasts", sales: 480, costs: 730 },
        { label: "Free day with $200 sponsor", sales: 680, costs: 730 },
        { label: "Normal day plus 30 prepaid bundles", sales: 830, costs: 530 },
      ],
      note: "Authored comparison, not a real cafe result. Free-day rows assume 300 cups and the forecast 60 breakfasts. Sponsor income is included with sales. Bundle orders are additional; all rows include $250 scheduled wages and rent. No future sales are counted.",
    },
    alternativeConditions:
      "With 300 free cups and no sponsor, 140 breakfasts at $5 contribution each would match the normal $150 result. With $200 sponsorship, 100 breakfasts match it. Capacity is 100 breakfasts, so beating normal trading needs better terms or more capacity.",
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
        "Sponsorship helps, but forecast breakfast demand still matters.",
      why: "The sponsor cuts the forecast loss to $50. That still trails the normal $150 gain.",
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
    "Your finance lead wants to stop an ad: every first order loses money. Your marketer says the refills pay it back. Decide whether to fund the next 100 buyers. All numbers are authored US dollars.",
  question: "Would you fund another group of buyers?",
  evidence: [
    scenarioFact(
      "opening-1",
      "First order: $40",
      "Each new buyer pays $40 for a starter kit. Goods, shipping and fees cost $35.",
    ),
    scenarioFact(
      "opening-2",
      "$20 to acquire one buyer",
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
      "$2,000 available above reserves",
      "The first-order sales and fulfilment settle together. Ads are paid upfront. This plan must fund itself within 90 days; overhead is already reserved.",
    ),
  ],
  research: [
    {
      id: "trace",
      title: "Audit earlier customer groups",
      description: "Match the first order to later paid refills.",
      hours: 2,
      evidence: [
        scenarioFact(
          "trace-finding",
          "Three completed groups",
          "Each of three earlier 100-buyer groups made 150 paid refill orders within 90 days. All buyers were new, with the same offer and costs; refunds are already netted out.",
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
          "For each earlier group, all $2,000 of ads was due first. Starter orders then left $500. Refills arrived in days 31–90, with no extra stock prepayment. No other campaign bill is due.",
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
          "Same channel, more uncertainty at scale",
          "The next 100 use the same audience and offer. To buy 200 at once, the platform must widen the audience. There is no repeat-purchase record for that wider audience.",
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
        "Repeat purchases could scale, but the broader audience and upfront bill create new risks.",
    },
    {
      id: "pause",
      title: "Stop until first orders pay",
      description: "Require the starter order to cover all acquisition costs.",
      tradeoff:
        "You protect cash but may reject a profitable repeat-purchase business.",
    },
    {
      id: "keep",
      title: "Fund the next 100 buyers",
      description:
        "Keep the current offer and compare their 90-day earnings with prior groups.",
      tradeoff:
        "You accept an upfront loss and depend on repeat demand holding.",
    },
    {
      id: "price",
      title: "Raise the starter price to $55",
      description: "Seek more money on the first order before scaling.",
      tradeoff:
        "It could reduce the early loss, but conversion and repeat demand at $55 are unknown.",
    },
  ],
  reveal: {
    company: "The refill shop",
    title: "The first loss can buy a profitable relationship",
    history:
      "Each earlier 100-buyer group lost $1,500 on starter orders after ads. Its 150 refills left $3,000, for a $1,500 gain over 90 days before overhead. This supports another similar group, not unlimited scaling. The later $2,500 upfront quote exceeds the $2,000 cash available.",
    lesson:
      "Judge the whole customer relationship, then check whether you can fund the wait.",
    sources: [],
    consequences: {
      double:
        "Two hundred buyers need at least $4,000 upfront at the opening rate, beyond available cash. Wider-audience repeat purchases are also unproved.",
      pause:
        "You protect cash but the earlier groups show why a first-sale loss need not mean a losing business.",
      keep: "The opening $2,000 quote fits available cash. Earlier groups support a measured repeat; the higher quote requires new terms before proceeding.",
      price:
        "At unchanged demand, $55 would cover $35 fulfilment and the original $20 acquisition cost. The demand assumption must be checked.",
    },
    rubric: [
      "Did you count repeat contribution rather than repeat sales?",
      "Did you check comparable customer groups?",
      "Did you separate profit from cash timing?",
      "Did you avoid assuming a larger audience behaves the same?",
    ],
  },
  teaching: {
    skill: "See the whole transaction",
    takeaway:
      "A first-sale loss can pay back through measured repeat business, if cash lasts until it does.",
    choices: {
      double: {
        score: 30,
        verdict: "Risky move",
        why: "The opening ad bill exceeds available cash. A wider audience also makes repeat demand less certain.",
        tradeoff:
          "Potential gains grow, but so do funding needs and uncertainty.",
      },
      pause: {
        score: 65,
        verdict: "Reasonable move",
        why: "You avoid cash risk, but requiring each first sale to pay ignores the profitable repeat orders in earlier groups.",
        tradeoff: "A hard first-sale rule can reject good repeat business.",
      },
      keep: {
        score: 90,
        verdict: "Strong move",
        why: "Comparable paid histories support another 100 buyers. The opening upfront bill fits the available cash.",
        tradeoff:
          "Past repeat buying supports the bet; it does not guarantee it.",
      },
      price: {
        score: 70,
        verdict: "Reasonable move",
        why: "A higher first price could reduce the early loss. You still need evidence that buyers accept it.",
        tradeoff: "The new price could lower conversion or later purchases.",
      },
    },
    history: {
      decision:
        "At the opening quote, funding another similar 100 buyers is supported by the records.",
      result:
        "Each earlier group lost $1,500 initially, earned $3,000 on refills, and kept $1,500 before overhead. New customers may behave differently.",
      connection:
        "Losses are investments only when later earnings and funding have credible support.",
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
      note: "The first row isolates the starter part of the same 90-day relationship. The completed earlier groups support row two. Row three assumes the same repeat demand; its $2,500 upfront ad bill does not fit the $2,000 cash available, despite a possible $1,000 gain. These are contribution figures, not company profit.",
    },
    alternativeConditions:
      "At the opening ad quote, 75 refills recover the $1,500 first-sale loss; 76 leave a positive contribution. At the higher quote, 100 refills recover $2,000. Funding still matters even if repeat demand is strong.",
    check: {
      question:
        "A printer shop loses $30 selling a printer. What would justify that offer?",
      options: [
        {
          id: "volume",
          text: "Selling many more printers",
          explanation: "More first-sale losses do not establish a payback.",
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
            "Track actual later purchases, their costs, and how long the initial loss must be funded.",
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
        "Follow the same buyers through paid orders, not predicted lifetime value.",
      price:
        "A profitable relationship can still require cash you do not have today.",
      repeat: "Results for one audience may not hold when you widen it.",
    },
    eventChange: {
      optionId: "keep",
      title: "Require payment terms before funding 100",
      description:
        "Proceed only if at least $500 of the ad bill can wait until starter receipts settle.",
      tradeoff:
        "No payment extension is agreed. If refused, this plan cannot proceed with current cash.",
      why: "The new upfront bill exceeds cash by $500. Later profit cannot pay that bill today.",
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
      text: "This case has no verified forecast of member margins, order frequency or delivery costs. Company-wide cash flow cannot answer that question.",
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
        why: "Removing basket minimums could make Amazon the first place buyers shop. That is a coherent strategic bet, not proven profit.",
        tradeoff:
          "You accept costly heavy users and need to track extra earnings after delivery.",
      },
      pilot: {
        score: 85,
        verdict: "Strong move",
        why: "A test with heavy and light users can reveal costs and changed buying before a wider promise.",
        tradeoff:
          "A small trial may understate the habit change of a widely trusted offer.",
      },
    },
    alternativeConditions:
      "A full launch is stronger when extra purchase contribution and fees exceed added delivery costs. An order minimum is stronger if small shipments dominate costs and customers still value the plan. Those member-level numbers are missing here, not claimed absent inside Amazon.",
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
            "Heavy users may join first. Compare their economics and behavior with what would happen without the pass.",
        },
        {
          id: "history",
          text: "Whether another famous company sold a subscription",
          explanation:
            "A successful subscription elsewhere does not establish these costs or buying habits.",
        },
      ],
      answerId: "groups",
    },
    eventChange: { ...primeLesson.eventChange, score: 80 },
  },
};

// These revisions replace existing cases without adding to the library or changing saved versions.
export const spotlightCases: CaseDefinition[] = [coffee, acquisition, prime];
