/** Shared plain-language glossary. Every entry needs a one-line meaning and a
 * tiny worked example so a term can be tapped anywhere it appears.
 */
export type GlossaryEntry = {
  term: string;
  /** Other spellings that should open the same definition. */
  aliases?: string[];
  meaning: string;
  example: string;
};

export const glossary: GlossaryEntry[] = [
  {
    term: "Fixed costs",
    aliases: [
      "fixed cost",
      "fixed daily costs",
      "fixed weekly costs",
      "fixed monthly costs",
      "fixed bills",
      "fixed shop costs",
      "fixed store costs",
      "fixed weekly bills",
      "fixed daily bills",
      "fixed monthly bills",
    ],
    meaning:
      "Bills you pay the same amount no matter how much you sell. Rent, salaries, insurance.",
    example:
      "Rent is $200 a day whether you sell 10 coffees or 200. That $200 is a fixed cost.",
  },
  {
    term: "Variable costs",
    aliases: [
      "variable cost",
      "cost per unit",
      "per-unit cost",
      "unit cost",
      "unit costs",
    ],
    meaning:
      "Costs that rise with each extra sale. Ingredients, packaging, delivery for one order.",
    example:
      "Beans, milk and the cup cost $2. Sell one more coffee and you spend $2 more.",
  },
  {
    term: "Overhead",
    aliases: ["overheads"],
    meaning:
      "Another word for fixed costs: the bills that stay the same whether you sell or not.",
    example:
      "A shop with $500 of weekly rent and wages has $500 of overhead, even in a slow week.",
  },
  {
    term: "Profit",
    aliases: ["profits", "profitable", "net profit", "earnings"],
    meaning: "Money left after every cost is paid. Sales minus all costs.",
    example: "Sell $500, spend $400 on goods and rent. Profit is $100.",
  },
  {
    term: "Margin",
    aliases: ["margins", "gross margin", "profit margin"],
    meaning:
      "The share of each sale you keep after paying for the item itself.",
    example: "A $5 coffee costs $2 to make. You keep $3, so the margin is 60%.",
  },
  {
    term: "Contribution",
    aliases: ["contribution per sale", "contribution margin"],
    meaning:
      "Money one sale leaves toward your fixed bills, after its own costs.",
    example: "A $4 cup with $2 of ingredients contributes $2 toward rent.",
  },
  {
    term: "Break-even",
    aliases: ["breakeven", "break even", "breaks even"],
    meaning: "The sales level where you neither make nor lose money.",
    example: "Each cup leaves $2 and rent is $200. You break even at 100 cups.",
  },
  {
    term: "Revenue",
    aliases: ["revenues", "sales revenue", "turnover"],
    meaning: "All the money that comes in from sales, before any costs.",
    example: "100 cups at $5 is $500 of revenue. It is not profit yet.",
  },
  {
    term: "Cash flow",
    aliases: ["cashflow", "cash flows"],
    meaning:
      "Money moving in and out over time. You can be profitable on paper and still run out of cash.",
    example:
      "You pay $1,000 for stock today. Customers pay you next month. This month's cash flow is minus $1,000.",
  },
  {
    term: "Cash gap",
    aliases: ["cash shortfall", "shortfall"],
    meaning:
      "A stretch of time where more money has gone out than has come in yet.",
    example:
      "Rent is due Friday. Your customer pays in 30 days. The gap between is a cash gap.",
  },
  {
    term: "Runway",
    meaning: "How long your cash lasts at the current rate of spending.",
    example:
      "$6,000 in the bank and you lose $2,000 a month. Your runway is three months.",
  },
  {
    term: "Burn rate",
    aliases: ["burn", "monthly burn"],
    meaning: "How much cash you lose each month.",
    example: "Spend $5,000, earn $3,000. Your burn is $2,000 a month.",
  },
  {
    term: "Capacity",
    aliases: ["full capacity", "spare capacity"],
    meaning:
      "The most you can make or serve with the staff and equipment you have.",
    example:
      "One oven bakes 500 pastries a day. Order 600 and you cannot fill it.",
  },
  {
    term: "Bottleneck",
    aliases: ["bottlenecks"],
    meaning:
      "The one step that limits everything else. Fixing other steps does not help.",
    example:
      "Three cooks, one fryer. The fryer sets how many orders leave the kitchen.",
  },
  {
    term: "Utilization",
    aliases: ["utilisation"],
    meaning: "How much of your capacity you actually use.",
    example: "A van can make 40 stops a day and makes 30. Utilization is 75%.",
  },
  {
    term: "Subsidy",
    aliases: [
      "subsidize",
      "subsidise",
      "subsidized",
      "subsidised",
      "subsidizes",
      "subsidizing",
      "shipping subsidy",
    ],
    meaning: "A cost you cover for the customer instead of charging for it.",
    example:
      "Delivery costs $5 and you charge $0. You subsidize $5 on every order.",
  },
  {
    term: "Churn",
    aliases: ["churned", "churn rate"],
    meaning: "The share of customers who stop paying each month or year.",
    example: "100 members in January, 5 cancel. Churn is 5% for the month.",
  },
  {
    term: "Retention",
    aliases: ["retain", "retained", "retention rate"],
    meaning: "The share of customers who stay. The opposite of churn.",
    example: "100 members, 95 renew. Retention is 95%.",
  },
  {
    term: "Customer acquisition cost",
    aliases: ["acquisition cost", "cost to acquire", "cost per new customer"],
    meaning: "What you spend on ads and offers to win one new customer.",
    example: "$300 of ads brings 10 new members. Each one cost $30 to win.",
  },
  {
    term: "Lifetime value",
    aliases: ["customer lifetime value", "full relationship"],
    meaning:
      "All the money one customer brings over the time they stay with you.",
    example:
      "A member pays $50 a month and stays 10 months. Lifetime value is $500.",
  },
  {
    term: "Conversion",
    aliases: ["conversion rate", "converts", "converted"],
    meaning:
      "The share of people who take the next step: click to buy, trial to paid.",
    example: "1,000 people see the ad, 20 buy. Conversion is 2%.",
  },
  {
    term: "Cohort",
    aliases: ["cohorts"],
    meaning:
      "A group of customers who started in the same month, tracked together.",
    example:
      "The March cohort is everyone who joined in March. You watch how many are left by June.",
  },
  {
    term: "Forecast",
    aliases: ["forecasts", "forecasted"],
    meaning: "A guess about future sales or costs. Check what it is based on.",
    example:
      "A forecast of 150 cups built on ad clicks is weaker than one built on paid orders.",
  },
  {
    term: "Demand",
    aliases: ["paid demand", "proven demand"],
    meaning: "How many people actually want to buy at a given price.",
    example:
      "40 people say they would buy. 12 pay a deposit. Paid demand is 12.",
  },
  {
    term: "Sunk cost",
    aliases: ["sunk costs", "sunk"],
    meaning:
      "Money already spent that you cannot get back. It should not steer the next choice.",
    example:
      "You paid $2,000 for a sign. Whether to keep the shop open depends on future money, not that $2,000.",
  },
  {
    term: "Opportunity cost",
    aliases: ["opportunity costs"],
    meaning:
      "What you give up by choosing one option over the best alternative.",
    example:
      "Baking 300 cheap pastries means 300 fewer full-price ones. Those lost sales are the opportunity cost.",
  },
  {
    term: "Payback",
    aliases: ["payback period", "pays back", "pay back"],
    meaning: "How long until something you bought has earned back its price.",
    example: "A $1,200 machine saves $100 a month. Payback is 12 months.",
  },
  {
    term: "Average order value",
    aliases: [
      "order value",
      "basket size",
      "average basket",
      "larger baskets",
      "larger basket",
      "bigger basket",
    ],
    meaning: "How much a typical customer spends in one order.",
    example: "$3,000 of sales from 100 orders. Average order value is $30.",
  },
  {
    term: "Cost of goods",
    aliases: ["cost of goods sold", "COGS", "goods cost"],
    meaning: "What the items you sold cost you to buy or make.",
    example:
      "Goods cost 60% of the price. A $30 order has $18 of cost of goods.",
  },
  {
    term: "Wholesale",
    meaning: "Selling in bulk to another business at a lower price per item.",
    example:
      "You sell a candle for $20 in the shop and $9 wholesale to a store that resells it.",
  },
  {
    term: "Premium",
    aliases: ["premium price", "premium tier"],
    meaning: "A higher price charged for a better or nicer version.",
    example: "Regular wash $10, premium wash with wax $18.",
  },
  {
    term: "Tier",
    aliases: ["tiers", "pricing tier"],
    meaning:
      "One of several price levels for a product, each with different features.",
    example: "Basic at $10, Plus at $20, Pro at $40. Three tiers.",
  },
  {
    term: "Bundle",
    aliases: ["bundles", "bundled"],
    meaning: "Two or more things sold together for one price.",
    example: "Coffee $5, cookie $2. The bundle sells for $6.",
  },
  {
    term: "Deposit",
    aliases: ["deposits"],
    meaning:
      "Money paid up front to hold an order or booking. Real money, not a promise.",
    example: "12 customers pay a $50 deposit. That is $600 in the bank today.",
  },
  {
    term: "Upfront",
    aliases: ["up front", "prepaid", "prepay"],
    meaning: "Paid in full before the product or service is delivered.",
    example:
      "A yearly plan paid upfront brings 12 months of cash in on day one.",
  },
  {
    term: "Invoice",
    aliases: ["invoices", "invoiced"],
    meaning:
      "A bill you send. The money arrives later, when the customer pays it.",
    example:
      "You invoice $2,000 on the 1st. Payment terms of 30 days mean cash on the 31st.",
  },
  {
    term: "Payment terms",
    aliases: ["net 30", "net 60", "30-day terms"],
    meaning: "How long a customer has to pay after you send the bill.",
    example:
      "Net 30 means they can wait 30 days. You pay your supplier before then.",
  },
  {
    term: "Lease",
    aliases: ["leases", "leased", "leasing"],
    meaning:
      "Renting equipment or space for a fixed monthly fee instead of buying it.",
    example: "Buy the machine for $12,000, or lease it at $400 a month.",
  },
  {
    term: "Capital",
    aliases: ["working capital", "capital cost"],
    meaning:
      "Money tied up in the business: stock, equipment, cash waiting to come back.",
    example:
      "$5,000 of stock on the shelf is capital you cannot spend on anything else.",
  },
  {
    term: "Inventory",
    aliases: ["stock on hand"],
    meaning: "Goods you have bought but not yet sold. Cash sitting on a shelf.",
    example: "200 unsold candles at $6 each is $1,200 of inventory.",
  },
  {
    term: "Depreciation",
    aliases: ["depreciate", "depreciates", "amortize", "amortise"],
    meaning: "Spreading the cost of something big over the years you use it.",
    example:
      "A $6,000 oven used for 5 years counts as $1,200 of cost each year.",
  },
  {
    term: "Pilot",
    aliases: ["pilot test", "small pilot"],
    meaning: "A small trial run to learn before spending big.",
    example:
      "Sell the new item in one shop for a month before ordering for all ten.",
  },
  {
    term: "Pivot",
    aliases: ["pivoted", "pivoting"],
    meaning: "Changing what the business sells or who it serves, on purpose.",
    example:
      "A gym that stops selling monthly passes and sells coaching instead has pivoted.",
  },
  {
    term: "Cannibalize",
    aliases: [
      "cannibalise",
      "cannibalizes",
      "cannibalization",
      "cannibalisation",
    ],
    meaning: "When a new offer takes sales from your own existing product.",
    example:
      "The $4 cup wins 20 new buyers, but 100 regulars who paid $5 now pay $4 too.",
  },
  {
    term: "Platform fee",
    aliases: ["platform fees", "marketplace fee", "commission"],
    meaning:
      "The cut an app or marketplace takes from each sale made through it.",
    example:
      "A $20 order through a delivery app with a 30% fee leaves you $14.",
  },
  {
    term: "Same-store sales",
    aliases: ["same-store", "like-for-like sales"],
    meaning:
      "Sales from shops open more than a year, so growth is not just from new shops.",
    example:
      "Ten old shops sold 2% more. Total sales grew 20% because you opened new shops.",
  },
  {
    term: "Return rate",
    aliases: ["returns rate"],
    meaning: "The share of sold items customers send back.",
    example:
      "100 sold, 15 returned. Return rate is 15%, and you pay shipping twice.",
  },
  {
    term: "Renewal",
    aliases: ["renewals", "renewal rate", "renew"],
    meaning: "A customer choosing to pay again when their plan runs out.",
    example:
      "80 of 100 yearly members pay for another year. Renewal rate is 80%.",
  },
  {
    term: "Equilibrium",
    meaning:
      "The point where things balance and stop moving: supply meets demand, or costs match sales.",
    example:
      "Raise the price until fewer people buy and the queue disappears. That price is the equilibrium.",
  },
  {
    term: "Joint venture",
    aliases: ["joint ventures"],
    meaning:
      "Two companies building one shared business together, sharing cost and reward.",
    example:
      "A carmaker and a battery firm start a factory they both own half of.",
  },
  {
    term: "Spin-off",
    aliases: ["spin off", "spun off"],
    meaning: "Splitting one part of a company into its own separate company.",
    example: "A retailer turns its delivery arm into a standalone business.",
  },
  {
    term: "Severance",
    meaning: "Money paid to staff when you let them go.",
    example:
      "Closing a store with 10 staff at $2,000 each costs $20,000 in severance.",
  },
  {
    term: "License",
    aliases: ["licence", "licensing", "licensed"],
    meaning: "Paying for permission to use something someone else owns.",
    example: "A shop pays $500 a month to use a brand's name and recipes.",
  },
];

/** Add case-specific words to the shared list. Case meanings win on a tie. */
export function withCaseTerms(
  terms: { term: string; meaning: string }[],
): GlossaryEntry[] {
  const shared = new Map(
    glossary.map((entry) => [entry.term.toLowerCase(), entry]),
  );
  for (const item of terms) {
    const key = item.term.toLowerCase();
    const existing = shared.get(key);
    shared.set(key, {
      term: item.term,
      aliases: existing?.aliases,
      meaning: item.meaning,
      example: existing?.example ?? "",
    });
  }
  return [...shared.values()];
}

export type TextSegment = { text: string; entry?: GlossaryEntry };

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Split text so every glossary term becomes its own segment. Longest match wins. */
export function segmentText(
  text: string,
  entries: GlossaryEntry[] = glossary,
): TextSegment[] {
  const lookup = new Map<string, GlossaryEntry>();
  for (const entry of entries)
    for (const alias of [entry.term, ...(entry.aliases ?? [])])
      lookup.set(alias.toLowerCase(), entry);
  if (lookup.size === 0 || !text) return [{ text }];
  const pattern = new RegExp(
    `(?<![\\w-])(${[...lookup.keys()]
      .sort((a, b) => b.length - a.length)
      .map((alias) => escape(alias).replace(/\\?-/g, "[-‑ ]"))
      .join("|")})(?:s|es)?(?![\\w-])`,
    "gi",
  );
  const segments: TextSegment[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index;
    if (start > last) segments.push({ text: text.slice(last, start) });
    const key = match[1]
      .toLowerCase()
      .replace(/[-‑ ]/g, (dash) => (dash === " " ? " " : "-"));
    const entry =
      lookup.get(key) ??
      lookup.get(key.replace(/-/g, " ")) ??
      lookup.get(key.replace(/ /g, "-"));
    segments.push({ text: match[0], entry });
    last = start + match[0].length;
  }
  if (last < text.length) segments.push({ text: text.slice(last) });
  return segments;
}
