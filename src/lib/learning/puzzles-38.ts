import type { CaseLesson } from "./types";

export const puzzleLessons38: Record<string, CaseLesson> = {
  "case-038": {
    skill: "Separate cash today from a year of income",
    takeaway: "Early cash is not extra income.",
    choices: {
      cheap: {
        score: 45,
        verdict: "Risky move",
        why: "At full retention, the offer cuts yearly sales from $120,000 to $90,000 while $84,000 in costs stay.",
        tradeoff: "You collect sooner but cut each full-year sale by $300.",
      },
      choice: {
        score: 85,
        verdict: "Strong move",
        why: "A smaller discount buys earlier cash while keeping a monthly option. Check how many customers actually choose it.",
        tradeoff:
          "Some cash comes sooner; each annual buyer gives up $120 of sales.",
      },
      monthly: {
        score: 80,
        verdict: "Strong move",
        why: "The current plan covers its costs. You can afford to protect the price while learning about annual demand.",
        tradeoff:
          "Full-year income is higher if people stay, but they can leave sooner.",
      },
      upfront: {
        score: 60,
        verdict: "Reasonable move",
        why: "The arithmetic works if all 100 agree. Nothing yet shows they will accept a $1,200 bill at once.",
        tradeoff:
          "You keep the price, but customers may refuse the large bill.",
      },
    },
    history: {
      decision:
        "Offer a smaller annual discount while keeping monthly billing available.",
      result:
        "With all 100 customers staying for a year, monthly billing leaves $36,000 after stated costs. The $900 offer leaves only $6,000 before the supplier change.",
      connection:
        "An annual payment changes when cash arrives. Its discount changes how much you earn for the same year of work.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the plans",
      period: "12 months · USD · 100 customers all year · opening costs",
      rows: [
        {
          label: "Keep $100 monthly",
          sales: 120000,
          costs: 84000,
        },
        {
          label: "Everyone pays $900 yearly",
          sales: 90000,
          costs: 84000,
        },
        {
          label: "Everyone chooses $1,080 yearly",
          sales: 108000,
          costs: 84000,
        },
        {
          label: "Everyone pays $1,200 upfront",
          sales: 120000,
          costs: 84000,
        },
      ],
      note: "Costs are 100 × $40 × 12 plus $3,000 × 12. The $1,080 row shows all customers choosing annual; a mixed group falls between that row and monthly. All payments are collected, with no refunds or departures. The later supplier change adds $12,000 to every row.",
    },
    alternativeConditions:
      "The $900 offer needs lower costs or better retention to offset its discount. At opening costs, $1,200 monthly terms break even at 50 customers staying all year; $900 annual terms need at least 86. No offer guarantees those buyers.",
    check: {
      question:
        "Ten customers choose $1,080 annual instead of paying $100 for all twelve months. How much sales income do you give up?",
      answerId: "b",
      options: [
        {
          id: "a",
          text: "$120",
          explanation: "That is the discount for one customer. There are ten.",
        },
        {
          id: "b",
          text: "$1,200",
          explanation: "$120 per customer × 10 customers = $1,200 less sales.",
        },
        {
          id: "c",
          text: "$10,800",
          explanation: "That is cash collected, not the discount.",
        },
      ],
    },
    terms: [
      {
        term: "Upfront",
        meaning: "Paid before the work is finished.",
      },
      {
        term: "Fixed costs",
        meaning: "Bills that stay the same in this comparison.",
      },
      {
        term: "Retention",
        meaning: "How many customers keep paying.",
      },
    ],
    researchNotes: {
      renewals: "Optional terms keep customers who cannot pay upfront.",
      support: "A cheap annual promise locks in costly work too.",
      cancellations:
        "The full-year monthly comparison assumes all customers stay.",
    },
    eventChange: {
      optionId: "cheap",
      title: "Sell $900 years with higher service costs",
      description:
        "A supplier change adds $10 per active customer per month to every plan. The $900 annual offer would still promise a full year of service.",
      tradeoff:
        "Cash arrives first, but twelve months of service now cost more.",
      why: "At 100 customers all year, $90,000 in annual sales would face $96,000 in costs. Taking cash early does not close that $6,000 gap.",
      score: 25,
    },
  },
  "case-039": {
    skill: "Count the platform’s fee, not sellers’ sales",
    takeaway: "Count the money you keep, not money passing through.",
    choices: {
      ads: {
        score: 45,
        verdict: "Risky move",
        why: "At the full target, the ad plan leaves $1,000 after stated costs. The current business leaves $2,000.",
        tradeoff: "More seller sales may leave the platform with less money.",
      },
      hold: {
        score: 85,
        verdict: "Strong move",
        why: "Current fees cover service and fixed costs. You avoid a growth plan that earns less even at its target.",
        tradeoff: "You keep a working margin but pass on faster growth.",
      },
      fee: {
        score: 75,
        verdict: "Reasonable move",
        why: "At unchanged orders, a 12% fee leaves $4,000. Check seller departures before counting that gain.",
        tradeoff: "Each order pays more if sellers stay.",
      },
      coupon: {
        score: 20,
        verdict: "Risky move",
        why: "The platform earns $10 per order and would give all $10 away. Service costs and fixed bills remain.",
        tradeoff: "The $10 reward uses the whole fee before service costs.",
      },
    },
    history: {
      decision:
        "Hold the original ad package and compare the fee income it would add.",
      result:
        "Current orders produce $10,000 in platform fees, not $100,000 in platform sales. The original ad plan doubles order value but cuts the monthly amount left from $2,000 to $1,000.",
      connection:
        "A campaign can grow the marketplace while shrinking what the platform keeps. Test growth against the added fee income.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the plans",
      period: "1 month · USD · platform fees only · opening ad quote",
      rows: [
        {
          label: "Keep 1,000 orders at 10%",
          sales: 10000,
          costs: 8000,
        },
        {
          label: "Buy original ads · 2,000 orders",
          sales: 20000,
          costs: 19000,
        },
        {
          label: "12% fee · 1,000 orders stay",
          sales: 12000,
          costs: 8000,
        },
        {
          label: "$10 coupons · 1,000 orders",
          sales: 10000,
          costs: 18000,
        },
      ],
      note: "Order costs are $5 each. Each row includes $3,000 fixed bills; the ad row adds $6,000 and the coupon row adds $10,000. Coupons are platform-funded costs, not seller fee reductions. Targets assume no refunds. The later ad quote adds another $6,000 to that row.",
    },
    alternativeConditions:
      "At a 10% fee, each extra $100 order leaves $5 before fixed bills. The $6,000 campaign needs more than 1,200 extra orders to improve profit. A 12% fee at 900 orders leaves $3,300, if those sellers really stay.",
    check: {
      question:
        "The platform handles $200,000 of orders and takes a 10% fee. What is its fee income before costs?",
      answerId: "c",
      options: [
        {
          id: "a",
          text: "$200,000",
          explanation: "Most of that belongs to the sellers.",
        },
        {
          id: "b",
          text: "$2,000",
          explanation: "Ten percent of $200,000 is $20,000.",
        },
        {
          id: "c",
          text: "$20,000",
          explanation:
            "$200,000 × 10% = $20,000. Service and other costs still need paying.",
        },
      ],
    },
    terms: [
      {
        term: "Order value",
        meaning: "Total customer spending, including the sellers’ share.",
      },
      {
        term: "Platform fee",
        meaning: "The part the marketplace keeps before its costs.",
      },
      {
        term: "Margin",
        meaning: "What remains after the costs you count.",
      },
    ],
    researchNotes: {
      sellers: "At 900 orders, the higher fee still needs a full cost check.",
      ads: "A fee bill is certain even when extra orders are not.",
      repeat:
        "Repeat orders may help later, but do not count them as certain cash next month.",
    },
    eventChange: {
      optionId: "ads",
      title: "Buy the now-$12,000 ad package",
      description:
        "The agency doubles its quote to $12,000 for the same target of 1,000 extra orders next month.",
      tradeoff: "The order target is unchanged while the certain bill doubles.",
      why: "Even if the target is met, $20,000 in fees minus $10,000 order costs, $3,000 fixed bills and $12,000 ads loses $5,000.",
      score: 20,
    },
  },
  "case-040": {
    skill: "Count refunds before calling a sale a win",
    takeaway: "A refunded order still has costs.",
    choices: {
      guide: {
        score: 70,
        verdict: "Reasonable move",
        why: "At the vendor’s target, the first month leaves just $300 after all stated costs. A small miss can erase that.",
        tradeoff: "That target would help, but it is not yet proven.",
      },
      repeat: {
        score: 30,
        verdict: "Risky move",
        why: "After 40 refunds, only $6,000 of sales remains. Stock, delivery, returns and fixed bills cost $7,400.",
        tradeoff: "The headline sales hide refunds and wasted stock.",
      },
      pause: {
        score: 85,
        verdict: "Strong move",
        why: "Pause a plan expected to lose $1,400. You still pay $1,000 in fixed bills, so use the pause to find a fix.",
        tradeoff: "You still owe fixed bills while selling nothing new.",
      },
      restrict: {
        score: 55,
        verdict: "Risky move",
        why: "Different terms may change buyer behavior. They do not fix poor fit, and no numbers yet show a better result.",
        tradeoff:
          "Fewer refunds could come with fewer buyers; you cannot assume both stay favorable.",
      },
    },
    history: {
      decision: "Pause a losing restock plan while checking a fix for returns.",
      result:
        "The current plan takes $10,000 at checkout but refunds $4,000. Its $6,000 net sales face $7,400 in costs. The guide’s unproved target would leave $300 in its first month.",
      connection:
        "Checkout totals are not the end of a sale. Count the refunds and work that remain after a customer sends it back.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the plans",
      period: "Next month · USD · sales after refunds · opening handling cost",
      rows: [
        {
          label: "Repeat · 40 returns",
          sales: 6000,
          costs: 7400,
        },
        {
          label: "Guide target · 20 returns",
          sales: 8000,
          costs: 7700,
        },
        {
          label: "Pause new stock",
          sales: 0,
          costs: 1000,
        },
      ],
      note: "Current costs: $5,000 stock + $1,000 outward shipping + $400 return handling + $1,000 fixed bills. Guide target costs add $500 guide work but reduce handling to $200. Returned stock has no resale value. No opening stock is sold in the pause row. Tighter return terms have no quantified demand estimate, so no invented total is shown.",
    },
    alternativeConditions:
      "The guide needs no more than 22 returns out of 100 to avoid a loss in its first month at opening handling costs. With 23 returns, net sales are $7,700 and costs $7,730. A later month without the one-time guide cost differs.",
    check: {
      question:
        "100 orders pay $100 each. Thirty get full refunds. How much sales income remains before costs?",
      answerId: "a",
      options: [
        {
          id: "a",
          text: "$7,000",
          explanation: "$10,000 collected minus $3,000 refunded leaves $7,000.",
        },
        {
          id: "b",
          text: "$10,000",
          explanation: "That ignores the refunds.",
        },
        {
          id: "c",
          text: "$3,000",
          explanation: "That is the money sent back, not sales kept.",
        },
      ],
    },
    terms: [
      {
        term: "Net sales",
        meaning: "Sales left after refunds and discounts.",
      },
      {
        term: "Return rate",
        meaning: "The share of orders sent back.",
      },
      {
        term: "Break even",
        meaning: "Sales cover the costs, with nothing left.",
      },
    ],
    researchNotes: {
      reasons:
        "Match the fix to the problem rather than buying a sales promise.",
      guide: "Paying for a guide does not prove it will halve returns.",
      supplier:
        "Small stock orders let you learn without buying another hundred units.",
    },
    eventChange: {
      optionId: "repeat",
      title: "Repeat with higher return handling",
      description:
        "The carrier raises handling from $10 to $15 for each returned item next month. Keep the same 100-order plan and expected 40 returns.",
      tradeoff: "The offer stays the same while failed sales cost more.",
      why: "At 40 returns, the new fee adds $200. The expected loss rises from $1,400 to $1,600.",
      score: 20,
    },
  },
  "case-041": {
    skill: "Earn more from the hour you cannot replace",
    takeaway: "Check what you earn from the resource that runs out.",
    choices: {
      premium: {
        score: 40,
        verdict: "Risky move",
        why: "Premium leaves $80 per item but uses three hours. Basic leaves $40 in just one hour.",
        tradeoff:
          "Each sale leaves more dollars, but it takes three times as long.",
      },
      split: {
        score: 65,
        verdict: "Reasonable move",
        why: "The mix leaves $1,000 after fixed costs. Sixty basic items leave $1,400 using the same hours.",
        tradeoff: "A balanced mix is not always the best use of scarce time.",
      },
      basic: {
        score: 90,
        verdict: "Strong move",
        why: "Basic earns $40 per machine hour versus about $26.67 for premium. Normal hours leave $1,400.",
        tradeoff: "You delay premium orders this week.",
      },
      overtime: {
        score: 85,
        verdict: "Strong move",
        why: "At the stated $600 overtime price, 80 basic items leave $1,600. That is $200 more than normal hours.",
        tradeoff:
          "The extra profit is only $200 at the original overtime price.",
      },
    },
    history: {
      decision:
        "Fill normal machine time with basic items; price overtime separately.",
      result:
        "Premium has the larger gain per item. Basic has the larger gain per machine hour. Original-price overtime adds $200; the higher quote instead cuts the result by $200.",
      connection:
        "A bigger gain per item can be a smaller gain per scarce hour. Separate the product choice from the price of extra capacity.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the plans",
      period: "1 week · USD · firm orders · opening overtime price",
      rows: [
        {
          label: "20 premium · normal hours",
          sales: 2800,
          costs: 2200,
        },
        {
          label: "30 basic + 10 premium",
          sales: 3800,
          costs: 2800,
        },
        {
          label: "60 basic · normal hours",
          sales: 4800,
          costs: 3400,
        },
        {
          label: "80 basic · original overtime",
          sales: 6400,
          costs: 4800,
        },
      ],
      note: "Every row includes $1,000 fixed costs plus direct costs per unit. The 80-basic row also includes $600 overtime. The later overtime quote adds $400 to that row. There is no extra machine, uncounted labor or guaranteed future repeat sale in these calculations.",
    },
    alternativeConditions:
      "Overtime improves this week’s result only below $800 for twenty extra hours. Premium would match basic’s $40 per hour if its $80 gain took two hours, but the proposed fixture is neither ready nor proven.",
    check: {
      question:
        "A product leaves $90 after direct costs and uses three machine hours. How much does it leave per hour?",
      answerId: "b",
      options: [
        {
          id: "a",
          text: "$90",
          explanation: "That is per item. The item uses three hours.",
        },
        {
          id: "b",
          text: "$30",
          explanation: "$90 divided by three hours is $30 per hour.",
        },
        {
          id: "c",
          text: "$270",
          explanation:
            "Multiply hours to count usage, not to increase earnings.",
        },
      ],
    },
    terms: [
      {
        term: "Bottleneck",
        meaning: "The step that limits how much you can make.",
      },
      {
        term: "Direct costs",
        meaning: "Costs tied to making each item.",
      },
      {
        term: "Product mix",
        meaning: "How much of each product you make.",
      },
    ],
    researchNotes: {
      hours: "Compare earnings per bottleneck hour rather than per sale.",
      orders: "This week’s mix need not pay a hidden late fee.",
      supplier: "A future improvement does not add capacity to this week.",
    },
    eventChange: {
      optionId: "overtime",
      title: "Buy overtime at the new $1,000 price",
      description:
        "The overtime team raises the 20-hour charge from $600 to $1,000. Use all 80 hours for basic items.",
      tradeoff:
        "The extra twenty basic sales leave only $800 before the overtime bill.",
      why: "Twenty more basic items add $800 after direct costs. Paying $1,000 for those hours reduces the week’s result by $200.",
      score: 40,
    },
  },
  "case-042": {
    skill: "Count travel time as paid work",
    takeaway: "An empty drive can cost as much as a paid job.",
    choices: {
      scattered: {
        score: 65,
        verdict: "Reasonable move",
        why: "Four jobs leave $60 after the crew, supplies and fixed bills. The price is higher, but travel uses half the day.",
        tradeoff: "The high price must also pay for four hours of travel.",
      },
      discount: {
        score: 50,
        verdict: "Risky move",
        why: "Six $70 jobs leave $60, the same as the current route. You do more jobs without keeping more money.",
        tradeoff: "You give up $60 without adding a seventh slot.",
      },
      second: {
        score: 55,
        verdict: "Risky move",
        why: "Two routes bring $800 but cost $760. That leaves less than the single current route.",
        tradeoff: "More sales bring another crew, vehicle and supply bill.",
      },
      dense: {
        score: 90,
        verdict: "Strong move",
        why: "Six $80 jobs leave $120 after all stated costs. Less travel makes the lower-priced jobs pay better.",
        tradeoff: "All six jobs and the short travel time must hold.",
      },
    },
    history: {
      decision:
        "Choose the six-job nearby route while the two-hour travel plan holds.",
      result:
        "The short route doubles the daily amount left from $60 to $120 at opening travel times. Adding an expensive second crew instead reduces it to $40.",
      connection:
        "A lower price can earn more when it cuts unpaid travel. If travel rises, check the route again rather than keeping an old conclusion.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the plans",
      period: "1 day · USD · all jobs completed · opening travel times",
      rows: [
        {
          label: "Four scattered · $100",
          sales: 400,
          costs: 340,
        },
        {
          label: "Six nearby · $70",
          sales: 420,
          costs: 360,
        },
        {
          label: "Two scattered crews",
          sales: 800,
          costs: 760,
        },
        {
          label: "Six nearby · $80",
          sales: 480,
          costs: 360,
        },
      ],
      note: "One crew costs $200 daily. Add $10 supplies per job and $100 fixed costs. Two routes add $300 agency labor and $80 vehicle cost; eight jobs use $80 supplies. The later road closure changes only the nearby route capacity to four jobs.",
    },
    alternativeConditions:
      "The nearby $80 route needs six jobs to beat the current $60 result. Five leave only $50 after the full paid day and fixed bills. A second scattered route needs a lower crew quote or a higher price to improve the current result.",
    check: {
      question:
        "Five nearby jobs sell for $80 each. Labor is $200, supplies are $10 per job and fixed costs are $100. What remains?",
      answerId: "c",
      options: [
        {
          id: "a",
          text: "$150",
          explanation: "That leaves out the $100 fixed bill.",
        },
        {
          id: "b",
          text: "$100",
          explanation: "Supplies for five jobs cost another $50.",
        },
        {
          id: "c",
          text: "$50",
          explanation: "$400 minus $200 minus $50 minus $100 leaves $50.",
        },
      ],
    },
    terms: [
      {
        term: "Route density",
        meaning: "How close your jobs are to one another.",
      },
      {
        term: "Capacity",
        meaning: "How much work fits in the time you have.",
      },
      {
        term: "Fixed costs",
        meaning: "Bills that stay the same across these schedules.",
      },
    ],
    researchNotes: {
      route:
        "Dense routes work when access is planned, not just addresses nearby.",
      buyers: "The first day is booked; future days still need sales.",
      agency: "Compare what a second route adds after all its own costs.",
    },
    eventChange: {
      optionId: "dense",
      title: "Take four apartment jobs during the closure",
      description:
        "A road closure raises total travel for the apartment route to four hours. Only four $80 jobs now fit in eight paid hours. Scattered routes are unaffected.",
      tradeoff: "The low price remains but the six-job time saving disappears.",
      why: "Four $80 jobs bring $320. Crew, supplies and fixed costs total $340, leaving a $20 loss.",
      score: 35,
    },
  },
  "case-043": {
    skill: "Fill spare capacity before buying more",
    takeaway: "More room to sell is not more people buying.",
    choices: {
      buy: {
        score: 25,
        verdict: "Risky move",
        why: "You have 240 available tool-days and sell only 80. More stock alone does not create rentals.",
        tradeoff:
          "Capacity doubles, but current demand already fits most days.",
      },
      market: {
        score: 85,
        verdict: "Strong move",
        why: "Forty extra days could add $1,040 after direct costs. At the opening $240 ad price, that leaves $800 extra if the target is met.",
        tradeoff:
          "The target is uncertain, so track paid bookings against the ad bill.",
      },
      cut: {
        score: 50,
        verdict: "Risky move",
        why: "At 120 days and $20, sales stay at $2,400 while wear costs rise. More activity leaves less cash.",
        tradeoff: "More use means more wear; sales may not grow with bookings.",
      },
      hold: {
        score: 80,
        verdict: "Strong move",
        why: "Current rentals leave $1,080 after running costs. Waiting protects cash while you check where demand is missing.",
        tradeoff:
          "You keep a positive cash result but leave spare capacity unused.",
      },
    },
    history: {
      decision:
        "Keep the current tools and seek weekday rentals before doubling the fleet.",
      result:
        "Current use fills one third of capacity. At the target, the original campaign leaves $1,880 in monthly cash after stated bills, versus $1,080 without it. Buying tools with unchanged rentals leaves a $1,320 cash shortfall that month.",
      connection:
        "Buying capacity is different from finding demand. Measure weekday and peak demand separately before making a lasting purchase.",
      sources: [],
    },
    moneyComparison: {
      basis: "cash",
      title: "Compare the plans",
      period: "1 month · USD · cash in minus cash paid · opening ad price",
      rows: [
        {
          label: "Keep current 80 days",
          sales: 2400,
          costs: 1320,
        },
        {
          label: "Campaign target · 120 days at $30",
          sales: 3600,
          costs: 1720,
        },
        {
          label: "Price cut target · 120 days at $20",
          sales: 2400,
          costs: 1480,
        },
        {
          label: "Buy tools · same 80 paid days",
          sales: 2400,
          costs: 3720,
        },
      ],
      note: "Running costs are $4 per paid day plus $1,000 fixed bills. The campaign row adds $240; the purchase row adds $2,400 for assets you still own. This is cash flow, not accounting profit: depreciation and resale value are excluded. No extra rental demand is assumed from buying tools. The later campaign quote adds $660 to that row.",
    },
    alternativeConditions:
      "At the opening $240 campaign price, ten extra days cover the campaign because each adds $26 before ads. At $900, it needs 35 extra days. Buying tools may make sense for repeated peak demand, but one busy date is not a full-month forecast.",
    check: {
      question:
        "Eight tools can each rent for 30 days. You sell 60 tool-days. What share of capacity did you use?",
      answerId: "a",
      options: [
        {
          id: "a",
          text: "25%",
          explanation:
            "Eight × 30 = 240 available days. 60 divided by 240 is one quarter.",
        },
        {
          id: "b",
          text: "50%",
          explanation: "Half of 240 would be 120 paid days.",
        },
        {
          id: "c",
          text: "75%",
          explanation: "Three quarters of 240 would be 180 paid days.",
        },
      ],
    },
    terms: [
      {
        term: "Tool-day",
        meaning: "One tool rented for one day.",
      },
      {
        term: "Utilization",
        meaning: "The share of available capacity that gets used.",
      },
      {
        term: "Cash flow",
        meaning: "Money received minus money paid during a period.",
      },
    ],
    researchNotes: {
      peak: "More tools may help at peaks, but spare weekdays need buyers.",
      campaign: "Treat extra rentals as a target rather than booked income.",
      lease:
        "Eight fully sold rental days would leave $208 before that $80 lease fee.",
    },
    eventChange: {
      optionId: "market",
      title: "Buy the campaign at $900",
      description:
        "The campaign quote rises from $240 to $900. Its target remains 40 extra paid tool-days at the normal $30 price.",
      tradeoff: "The same uncertain sales target now requires much more cash.",
      why: "Forty added days leave $1,040 after wear and cleaning. A $900 campaign leaves only $140 extra if the full target arrives.",
      score: 60,
    },
  },
};
