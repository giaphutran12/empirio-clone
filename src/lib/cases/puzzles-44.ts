import type { CaseDefinition } from "../types";

export const puzzleCases44: CaseDefinition[] = [
  {
    id: "case-044",
    version: 1,
    number: "44",
    format: "scenario",
    title: "The ad that sells at a loss",
    subtitle: "Four dollars back for every dollar spent?",
    category: "Growth",
    year: "Business puzzle",
    role: "You run an online shop.",
    objective: "Grow sales without losing cash on each order.",
    briefing:
      "Your ad report looks great: spend $1,000 and make $4,000 in sales. Your marketer wants to double the budget. Check what you keep after each order.",
    question: "Would you double the ad spend?",
    evidence: [
      {
        id: "opening-1",
        label: "100 orders last month",
        text: "Each order sold for $40. The ad report counts all 100 orders.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-2",
        label: "$1,000 spent on ads",
        text: "This is the full ad bill for that month.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-3",
        label: "$25 per order for goods",
        text: "$2,500 paid for the goods in those 100 orders.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-4",
        label: "$8 per order for delivery and fees",
        text: "Packing, shipping and payment fees add up to $800. No refunds occurred.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-5",
        label: "The repeat order rate is unknown",
        text: "We have no proof anyone will buy again. Rent and salaries are not counted in these order costs.",
        kind: "simulation",
        sourceIds: [],
      },
    ],
    research: [
      {
        id: "trace",
        title: "Trace the ad orders",
        description: "Match orders to customers and earlier purchases.",
        hours: 2,
        evidence: [
          {
            id: "trace-finding",
            label: "Only 70 buyers were new",
            text: "Thirty buyers had bought before. The report credits ads for every order. It does not prove the ads caused all 100.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "price",
        title: "Check a lower shipping quote",
        description: "Get a firm quote for the same delivery service.",
        hours: 2,
        evidence: [
          {
            id: "price-finding",
            label: "Shipping and fees could fall to $6",
            text: "The quote cuts the $8 delivery and fees cost by $2 per order. There is no setup fee.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "repeat",
        title: "Check repeat purchases",
        description: "Follow the same buyers for another month.",
        hours: 3,
        evidence: [
          {
            id: "repeat-finding",
            label: "Ten buyers returned",
            text: "Ten placed one more $40 order with the same $33 order cost and no new ad bill. These repeat orders add $70, which does not cover the first $300 loss.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What does each sale leave after costs?",
      "Which number could change my choice?",
      "What are we assuming here?",
    ],
    event: {
      title: "Ad prices rise",
      text: "The platform now charges $12 per order instead of $10, with the same selling price and order costs.",
      evidence: {
        id: "deadline-update",
        label: "Ad prices rise",
        text: "The platform now charges $12 per order instead of $10, with the same selling price and order costs.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "double",
        title: "Double the ad budget",
        description: "Spend $2,000, assuming the same cost per order.",
        tradeoff: "More sales would repeat the current loss.",
      },
      {
        id: "pause",
        title: "Pause this ad and fix the costs",
        description: "Stop new ad spend while you look for lower order costs.",
        tradeoff: "You give up some sales while working on the gap.",
      },
      {
        id: "keep",
        title: "Keep the $1,000 budget",
        description: "Leave the campaign unchanged for another month.",
        tradeoff: "Future repeat orders might help, but they are not proved.",
      },
      {
        id: "price",
        title: "Raise the price to $45",
        description: "Try the new price without raising ad spend.",
        tradeoff: "At the same sales volume it helps; buyers may buy less.",
      },
    ],
    reveal: {
      company: "The online shop",
      title: "The ad that sells at a loss",
      history:
        "An authored practice case, not a historical company account. At the opening rate, $4,000 sales minus $2,500 goods, $800 delivery and fees, and $1,000 ads leaves a $300 loss before fixed bills.",
      lesson: "A sale can cost more than it brings in.",
      sources: [],
      consequences: {
        double:
          "Each order leaves $7 before ads, but ads cost $10 per order. Doubling a losing order does not fix it.",
        pause:
          "The last batch lost $300 before rent and salaries. Stop paying to repeat that loss.",
        keep: "The report shows sales, not money kept. There is no evidence yet that repeat sales cover the gap.",
        price:
          "Five more dollars would cover the $3 gap per order if costs and demand held. Demand at $45 is unknown.",
      },
      rubric: [
        "Look past the ad sales number",
        "Compare the same time period.",
        "Count costs and cash timing.",
        "Check which claims are assumptions.",
      ],
    },
  },
  {
    id: "case-045",
    version: 1,
    number: "45",
    format: "scenario",
    title: "The biggest customer in town",
    subtitle: "A huge order with a long wait for payment.",
    category: "Cash flow",
    year: "Business puzzle",
    role: "You run a small food wholesaler.",
    objective: "Serve customers without running out of cash.",
    briefing:
      "A chain offers a large order. It wants to pay later, while your supplier wants cash now. The order looks profitable on paper.",
    question: "Which terms would you accept?",
    evidence: [
      {
        id: "opening-1",
        label: "A $30,000 order",
        text: "The chain orders 3,000 units at $10 each.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-2",
        label: "$6 per unit upfront",
        text: "Goods cost $18,000, due before delivery.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-3",
        label: "$2,000 delivery cost",
        text: "This is the full extra cost to pack and deliver this order.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-4",
        label: "$12,000 cash available",
        text: "You must keep $4,000 untouched for bills you already owe. You cannot borrow.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-5",
        label: "Payment in 60 days",
        text: "The chain wants to pay the full $30,000 sixty days after delivery. If you accept, this one order would be 60% of next quarter’s sales.",
        kind: "simulation",
        sourceIds: [],
      },
    ],
    research: [
      {
        id: "terms",
        title: "Check payment options",
        description: "Ask which payment schedules the buyer will consider.",
        hours: 2,
        evidence: [
          {
            id: "terms-finding",
            label: "A 50% deposit is possible",
            text: "The buyer will pay $15,000 before you order stock. The rest comes sixty days after delivery. The terms need signing.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "supplier",
        title: "Ask the supplier about credit",
        description: "Check whether goods can be paid for later.",
        hours: 2,
        evidence: [
          {
            id: "supplier-finding",
            label: "Supplier wants full payment",
            text: "The supplier will not let you pay later on this first order. Delivery must also be paid upfront.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "buyer",
        title: "Check the buyer’s payment record",
        description: "Review six recent supplier references.",
        hours: 3,
        evidence: [
          {
            id: "buyer-finding",
            label: "Two late payments",
            text: "Two of six references say the chain paid thirty days late. Six references is a small sample, not a forecast.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What does each sale leave after costs?",
      "Which number could change my choice?",
      "What are we assuming here?",
    ],
    event: {
      title: "The deposit offer shrinks",
      text: "The buyer will now pay a deposit of at most 20%, or $6,000. You still cannot borrow.",
      evidence: {
        id: "deadline-update",
        label: "The deposit offer shrinks",
        text: "The buyer will now pay a deposit of at most 20%, or $6,000. You still cannot borrow.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "accept",
        title: "Accept the 60-day terms",
        description: "Promise the whole order without a deposit.",
        tradeoff: "Your available cash does not cover the upfront bill.",
      },
      {
        id: "deposit",
        title: "Require a 50% deposit",
        description:
          "Accept only after the $15,000 arrives, with the rest agreed in writing.",
        tradeoff:
          "The buyer may refuse, and the unpaid balance still has risk.",
      },
      {
        id: "decline",
        title: "Decline the order",
        description: "Keep cash for existing customers.",
        tradeoff:
          "You give up an order that could leave $10,000 after its own costs.",
      },
      {
        id: "small",
        title: "Offer 1,000 units first",
        description:
          "Offer a smaller first order, subject to a fresh delivery quote.",
        tradeoff:
          "A smaller order puts less cash at risk, but may not suit the buyer.",
      },
    ],
    reveal: {
      company: "The food wholesaler",
      title: "The biggest customer in town",
      history:
        "An authored practice case, not a historical company account. The full order leaves $10,000 before fixed bills if paid. Yet the opening no-deposit plan needs $12,000 more than the $8,000 you can safely spend.",
      lesson: "Profit on paper cannot pay a bill today.",
      sources: [],
      consequences: {
        accept:
          "You can spend only $8,000 safely. The order needs $20,000 before the buyer pays.",
        deposit:
          "The deposit plus the $8,000 you can spend covers the $20,000 bill. Your reserve stays untouched.",
        decline:
          "Declining avoids a cash gap. It also avoids leaning harder on one customer. Asking for safer terms first could keep the deal alive.",
        small:
          "A smaller order costs less upfront. You still need a delivery quote and the buyer’s agreement.",
      },
      rubric: [
        "Check when the money arrives",
        "Compare the same time period.",
        "Count costs and cash timing.",
        "Check which claims are assumptions.",
      ],
    },
  },
  {
    id: "case-046",
    version: 1,
    number: "46",
    format: "scenario",
    title: "The cheap Tuesday ticket",
    subtitle: "Full seats can still mean less money.",
    category: "Pricing",
    year: "Business puzzle",
    role: "You run a small cinema.",
    objective: "Earn more from quiet shows without losing full-price sales.",
    briefing:
      "Tuesday seats sit empty. A half-price deal might fill them. But some buyers could move from your busy full-price shows.",
    question: "How would you sell the quiet seats?",
    evidence: [
      {
        id: "opening-1",
        label: "$12 regular ticket",
        text: "A regular ticket has $4 in film and per-guest costs, leaving $8 before fixed bills.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-2",
        label: "$6 proposed Tuesday ticket",
        text: "The same $4 per-guest cost applies, leaving $2 before fixed bills.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-3",
        label: "80 extra Tuesday seats available",
        text: "There is room without adding another show or staff shift.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-4",
        label: "40 expected deal buyers",
        text: "The marketing team expects 40 sales. It has not checked how many of those would otherwise buy at $12.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-5",
        label: "No added campaign fee",
        text: "The offer can go in your own email. Rent and existing staff costs do not change. Snacks are left out of this count.",
        kind: "simulation",
        sourceIds: [],
      },
    ],
    research: [
      {
        id: "buyers",
        title: "Ask the likely buyers",
        description: "Check which show people would otherwise attend.",
        hours: 2,
        evidence: [
          {
            id: "buyers-finding",
            label: "Ten would switch from full price",
            text: "Of 40 likely buyers, 10 say they would otherwise buy a regular ticket. The other 30 say they would not visit at all. These are stated plans, not paid sales.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "gate",
        title: "Check a restricted offer",
        description: "Ask whether a one-use offer can target lapsed guests.",
        hours: 2,
        evidence: [
          {
            id: "gate-finding",
            label: "A one-use code is available",
            text: "Your ticket system can send the code only to accounts with no purchase in six months. There is no added fee. This cuts switching, but cannot prove it is zero.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "test",
        title: "Review an earlier small offer",
        description: "Count tickets and customer histories in a past test.",
        hours: 3,
        evidence: [
          {
            id: "test-finding",
            label: "Twelve sales in a past test",
            text: "Nine buyers had not visited for six months. Three had bought recently. Past purchases do not prove what they would have done without the offer.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What does each sale leave after costs?",
      "Which number could change my choice?",
      "What are we assuming here?",
    ],
    event: {
      title: "A repeat-use loophole",
      text: "The coupon sent to everyone would work for four weeks. It could be used more than once. Targeted codes can still be limited to one use.",
      evidence: {
        id: "deadline-update",
        label: "A repeat-use loophole",
        text: "The coupon sent to everyone would work for four weeks. It could be used more than once. Targeted codes can still be limited to one use.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "all",
        title: "Send half-price tickets to everyone",
        description: "Offer the $6 Tuesday ticket to the full mailing list.",
        tradeoff: "Some regular buyers may switch to the cheap show.",
      },
      {
        id: "new",
        title: "Target lapsed guests first",
        description:
          "Use a small offer aimed at people who have stopped coming.",
        tradeoff: "Some may still have bought without the offer.",
      },
      {
        id: "regular",
        title: "Keep the $12 price",
        description: "Run the existing schedule without a deal.",
        tradeoff: "You avoid switching, but may leave useful seats empty.",
      },
      {
        id: "bundle",
        title: "Offer a $12 ticket-and-snack deal",
        description: "Check snack costs before promising the bundle.",
        tradeoff: "The extra snack cost and buyer response are unknown.",
      },
    ],
    reveal: {
      company: "The cinema",
      title: "The cheap Tuesday ticket",
      history:
        "An authored practice case, not a historical company account. Forty deal tickets leave $80. If ten of those buyers would have paid full price, you give up $80 from the regular visits. The extra gain becomes zero.",
      lesson: "A discount helps only when it adds enough new buying.",
      sources: [],
      consequences: {
        all: "Forty cheap tickets leave just $80 before fixed bills. Only ten switched full-price sales would use up that gain.",
        new: "Quiet seats cost little extra to fill. Aiming at guests who stopped coming lowers the risk of replacing full-price sales.",
        regular:
          "You protect the $8 each regular sale leaves. You also give up a chance to bring back guests.",
        bundle:
          "A bundle could keep the ticket price intact, but you need the snack cost before deciding whether it pays.",
      },
      rubric: [
        "Count sales you replace",
        "Compare the same time period.",
        "Count costs and cash timing.",
        "Check which claims are assumptions.",
      ],
    },
  },
  {
    id: "case-047",
    version: 1,
    number: "47",
    format: "scenario",
    title: "The bargain that empties the bank",
    subtitle: "Cheaper stock. Bigger cash bill.",
    category: "Cash flow",
    year: "Business puzzle",
    role: "You run a homewares shop.",
    objective: "Keep enough cash for bills while buying stock.",
    briefing:
      "Your supplier offers a big discount if you buy a full pallet. You sell the item steadily, but stock cannot pay the rent until it sells.",
    question: "Which stock order would you place?",
    evidence: [
      {
        id: "opening-1",
        label: "100 units sold each month",
        text: "Plan on this pace for the next three months; it is not guaranteed.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-2",
        label: "$20 selling price",
        text: "All units sell at full price in the base plan. Ignore tax.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-3",
        label: "$10 normal unit cost",
        text: "You can buy 100 units at a time with no added delivery fee.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-4",
        label: "$8 bulk unit cost",
        text: "The discount needs 500 units bought and paid for now. No added delivery fee.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-5",
        label: "$5,000 in the bank",
        text: "$2,000 is reserved for bills before the next sales arrive. Current stock is zero; storage space is free for 500 units.",
        kind: "simulation",
        sourceIds: [],
      },
    ],
    research: [
      {
        id: "age",
        title: "Check shelf life",
        description: "Review the product and return rules.",
        hours: 2,
        evidence: [
          {
            id: "age-finding",
            label: "No expiry, but no returns",
            text: "Stock does not expire in the next year. Unsold units cannot be returned for cash.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "terms",
        title: "Ask for split deliveries",
        description: "See whether the discount can fit a smaller cash bill.",
        hours: 2,
        evidence: [
          {
            id: "terms-finding",
            label: "Two paid batches are possible",
            text: "The supplier offers 250 units now and 250 in three months at $8 each. You pay on each delivery. You must promise to take both batches.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "sales",
        title: "Check demand history",
        description: "Compare the recent sales pace.",
        hours: 3,
        evidence: [
          {
            id: "sales-finding",
            label: "Monthly sales ranged from 70 to 110",
            text: "The last six months ranged from 70 to 110 units. A plan built on exactly 100 units could leave more stock than expected.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What does each sale leave after costs?",
      "Which number could change my choice?",
      "What are we assuming here?",
    ],
    event: {
      title: "A repair bill arrives",
      text: "A required $500 repair is due before new sales. The original $2,000 bill reserve is still needed.",
      evidence: {
        id: "deadline-update",
        label: "A repair bill arrives",
        text: "A required $500 repair is due before new sales. The original $2,000 bill reserve is still needed.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "bulk",
        title: "Buy 500 units now",
        description: "Pay $4,000 for the bulk discount.",
        tradeoff: "Only $1,000 cash remains before the $2,000 reserved bills.",
      },
      {
        id: "monthly",
        title: "Buy 100 units at a time",
        description: "Pay $1,000 now and reorder as units sell.",
        tradeoff: "You pay more per unit.",
      },
      {
        id: "wait",
        title: "Buy no stock this month",
        description: "Keep all cash for now.",
        tradeoff: "With no stock, you miss the planned sales.",
      },
      {
        id: "split",
        title: "Ask for smaller discounted batches",
        description:
          "Only accept a batch plan that keeps the bill reserve covered.",
        tradeoff:
          "The supplier may refuse, or may want a promise on the later batch.",
      },
    ],
    reveal: {
      company: "The homewares shop",
      title: "The bargain that empties the bank",
      history:
        "An authored practice case, not a historical company account. Bulk stock saves $600 on the first 300 units sold. Yet its $4,000 upfront payment leaves only $1,000 for $2,000 of near-term bills.",
      lesson: "A discount can be real and still be too expensive today.",
      sources: [],
      consequences: {
        bulk: "Saving $2 per unit is real, but the upfront order uses cash needed for bills.",
        monthly:
          "This protects the bill reserve and keeps cash flexible. A discount is not useful if it stops you paying what is due.",
        wait: "Cash stays safe, but you give up sales even though a normal order fits the budget.",
        split:
          "Paying in smaller steps could keep the discount. A request is not a deal until the supplier agrees.",
      },
      rubric: [
        "Separate stock value from cash",
        "Compare the same time period.",
        "Count costs and cash timing.",
        "Check which claims are assumptions.",
      ],
    },
  },
  {
    id: "case-048",
    version: 1,
    number: "48",
    format: "scenario",
    title: "The flat fee with no finish line",
    subtitle: "A bigger quote can hide twice the work.",
    category: "Pricing",
    year: "Business puzzle",
    role: "You are a freelance designer.",
    objective: "Earn a fair amount without promising unlimited work.",
    briefing:
      "A client asks for a fixed price instead of your hourly rate. The work sounds simple, but the draft contract says unlimited edits.",
    question: "What would you quote?",
    evidence: [
      {
        id: "opening-1",
        label: "$50 hourly rate",
        text: "This is your current rate for each hour worked.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-2",
        label: "20 hours estimated",
        text: "The first draft should take 20 hours. Edits are extra; their size is unknown.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-3",
        label: "$1,200 proposed flat fee",
        text: "The client wants all work and unlimited edits included.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-4",
        label: "40 work hours available",
        text: "That is all the time you have before this project’s deadline.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-5",
        label: "No extra cash costs",
        text: "For this puzzle, you need no supplies and hire no helpers. Your time still has value.",
        kind: "simulation",
        sourceIds: [],
      },
    ],
    research: [
      {
        id: "edits",
        title: "Check past edit rounds",
        description: "Review work with this client.",
        hours: 2,
        evidence: [
          {
            id: "edits-finding",
            label: "Past jobs used 10 to 20 edit hours",
            text: "The client’s last three similar jobs took 10 to 20 extra hours. This job could still fall outside that range.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "scope",
        title: "Clarify the scope",
        description: "Ask for a list of pages and revision limits.",
        hours: 2,
        evidence: [
          {
            id: "scope-finding",
            label: "Two rounds can be defined",
            text: "The client will consider two set rounds of edits, plus hourly pay for extra work. It must be agreed in writing.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "other",
        title: "Check other available work",
        description: "See what else fits the same deadline.",
        hours: 3,
        evidence: [
          {
            id: "other-finding",
            label: "A 10-hour job is offered",
            text: "Another client offers ten hours at $50 per hour before the same deadline. It would use the same hours.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What does each sale leave after costs?",
      "Which number could change my choice?",
      "What are we assuming here?",
    ],
    event: {
      title: "More pages added",
      text: "The client now needs ten extra pages. Your first-draft estimate rises from 20 to 30 hours; the fee is still $1,200 with unlimited edits.",
      evidence: {
        id: "deadline-update",
        label: "More pages added",
        text: "The client now needs ten extra pages. Your first-draft estimate rises from 20 to 30 hours; the fee is still $1,200 with unlimited edits.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "unlimited",
        title: "Accept $1,200 with unlimited edits",
        description: "Take the draft contract as written.",
        tradeoff: "Total hours could go past the 40 hours you have.",
      },
      {
        id: "hourly",
        title: "Keep the $50 hourly rate",
        description: "Give an estimate and get approval before extra work.",
        tradeoff: "The client may want a firm maximum price.",
      },
      {
        id: "bounded",
        title: "Quote $1,200 for a clear scope",
        description:
          "Put a limit on edits in writing and quote extra work separately.",
        tradeoff: "The client may reject the limits.",
      },
      {
        id: "decline",
        title: "Decline all work from this client",
        description: "Keep your time free.",
        tradeoff: "You give up a job that might work under better terms.",
      },
    ],
    reveal: {
      company: "The freelance studio",
      title: "The flat fee with no finish line",
      history:
        "An authored practice case, not a historical company account. At $1,200, 24 total hours earns $50 an hour. Thirty hours earns $40; forty hours earns $30. A higher quote does not guarantee better pay for your time.",
      lesson: "A fixed price needs a clear finish line.",
      sources: [],
      consequences: {
        unlimited:
          "The fee beats 20 hours at $50 only if extra work stays small. Unlimited edits leave that open.",
        hourly:
          "Hourly billing pays for added work. Clear updates help the client control the bill.",
        bounded:
          "A flat fee can work when both sides know what it buys and what counts as extra.",
        decline:
          "You avoid an open-ended promise, but either clear scope or hourly billing may solve it.",
      },
      rubric: [
        "Price the whole promise",
        "Compare the same time period.",
        "Count costs and cash timing.",
        "Check which claims are assumptions.",
      ],
    },
  },
  {
    id: "case-049",
    version: 1,
    number: "49",
    format: "scenario",
    title: "The almost sold-out workshop",
    subtitle: "Most seats sold. Bills still unpaid.",
    category: "Operations",
    year: "Business puzzle",
    role: "You plan a one-day workshop.",
    objective: "Hold the event only when the full budget works.",
    briefing:
      "The room has 100 seats. You have sold 60 tickets and want to confirm the venue today. Most of the room is booked, but is it enough?",
    question: "Would you confirm the event?",
    evidence: [
      {
        id: "opening-1",
        label: "$50 per ticket",
        text: "Sixty people have paid. All tickets are refundable until you confirm.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-2",
        label: "$2,400 fixed event bill",
        text: "Venue and teacher together cost $2,400 only if you confirm.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-3",
        label: "$20 per guest",
        text: "Materials and lunch cost $20 for each person attending.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-4",
        label: "100-seat limit",
        text: "No more than 100 guests fit. No sponsor money or other income is confirmed.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-5",
        label: "No money spent yet",
        text: "You can cancel now and refund all tickets without a penalty. The venue quote holds until the decision deadline.",
        kind: "simulation",
        sourceIds: [],
      },
    ],
    research: [
      {
        id: "sales",
        title: "Check paid ticket demand",
        description: "Look at the waiting list and checkout data.",
        hours: 2,
        evidence: [
          {
            id: "sales-finding",
            label: "Ten more unpaid names",
            text: "Ten people asked about tickets but have not paid. They are not confirmed buyers.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "costs",
        title: "Ask for a leaner package",
        description: "Request a lower-price room and teacher package.",
        hours: 2,
        evidence: [
          {
            id: "costs-finding",
            label: "A $1,800 package is available",
            text: "A smaller room fits 70 guests and the same teacher. The $20 per-guest cost remains. No other fees apply.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "sponsor",
        title: "Check sponsor offers",
        description: "Ask whether a sponsor will pay before confirmation.",
        hours: 3,
        evidence: [
          {
            id: "sponsor-finding",
            label: "No firm sponsor",
            text: "One business is interested but has not agreed a sum or paid. There is no sponsor income to budget yet.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What does each sale leave after costs?",
      "Which number could change my choice?",
      "What are we assuming here?",
    ],
    event: {
      title: "The original package price rises",
      text: "The original 100-seat package now costs $2,700. Per-guest costs and ticket price stay the same. The smaller package quote, if you got one, is unchanged.",
      evidence: {
        id: "deadline-update",
        label: "The original package price rises",
        text: "The original 100-seat package now costs $2,700. Per-guest costs and ticket price stay the same. The smaller package quote, if you got one, is unchanged.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "go",
        title: "Confirm the original event now",
        description:
          "Promise to pay the $2,400 fixed bill for the 100-seat room.",
        tradeoff: "Current ticket sales leave a loss.",
      },
      {
        id: "threshold",
        title: "Require 80 paid tickets first",
        description:
          "Confirm only if 80 tickets sell before the quote expires.",
        tradeoff: "You may have to refund and cancel if sales fall short.",
      },
      {
        id: "cancel",
        title: "Cancel and refund now",
        description: "Return the $3,000 and avoid the event bill.",
        tradeoff: "You lose a chance to sell more seats before the deadline.",
      },
      {
        id: "cheap",
        title: "Seek a cheaper package first",
        description: "Confirm only after the new full budget covers costs.",
        tradeoff:
          "A smaller event may mean fewer seats or a different experience.",
      },
    ],
    reveal: {
      company: "The workshop",
      title: "The almost sold-out workshop",
      history:
        "An authored practice case, not a historical company account. At the opening quote, each $50 ticket leaves $30 after guest costs. It takes 80 tickets to cover $2,400. Sixty sold seats still means a $600 loss.",
      lesson: "Count what each seat leaves, not just what it sells for.",
      sources: [],
      consequences: {
        go: "Sixty tickets bring in $3,000, but $2,400 plus $1,200 guest costs is $3,600.",
        threshold:
          "Each guest leaves $30 for the fixed bill. Eighty guests cover $2,400, with no cushion yet.",
        cancel:
          "Cancelling avoids a loss you can already see. The quote is still open, so you could wait for firm sales first.",
        cheap:
          "Reducing fixed costs can work. Use a real quote, not a hoped-for saving.",
      },
      rubric: [
        "Find the real break-even point",
        "Compare the same time period.",
        "Count costs and cash timing.",
        "Check which claims are assumptions.",
      ],
    },
  },
  {
    id: "case-050",
    version: 1,
    number: "50",
    format: "scenario",
    title: "The signup record that hides a leak",
    subtitle: "Lots of new members. Almost no growth.",
    category: "Growth",
    year: "Business puzzle",
    role: "You run a small subscription app.",
    objective:
      "Grow the number of paying users without wasting money on winning new ones.",
    briefing:
      "Your team celebrates 100 new paid signups this month. Yet the total customer count barely moved. Next month you can spend $2,000 on one plan.",
    question: "Where would you put the $2,000?",
    evidence: [
      {
        id: "opening-1",
        label: "500 paying users at the start",
        text: "Each pays $20 per month.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-2",
        label: "100 joined and 90 left",
        text: "The month ends with 510 paying users. For this puzzle, joins and exits occur at month end.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-3",
        label: "$20 to win one new user",
        text: "The 100 new users cost $2,000 in marketing.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-4",
        label: "$5 monthly service cost per user",
        text: "Each active paid user leaves $15 before marketing and fixed bills.",
        kind: "simulation",
        sourceIds: [],
      },
      {
        id: "opening-5",
        label: "Two plans cost $2,000 each",
        text: "Either repeat the signup campaign, or find and fix the biggest reason users cancel. How much a fix would help is not yet known.",
        kind: "simulation",
        sourceIds: [],
      },
    ],
    research: [
      {
        id: "exit",
        title: "Ask why users left",
        description: "Review the 90 recent cancellations.",
        hours: 2,
        evidence: [
          {
            id: "exit-finding",
            label: "Forty mention broken imports",
            text: "Forty of the users who left blame failed file imports. Others blame price or not using the app. These answers do not prove a fix would bring them back.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "fix",
        title: "Estimate a repair",
        description: "Ask the team for a bounded repair plan.",
        hours: 2,
        evidence: [
          {
            id: "fix-finding",
            label: "A repair fits the budget",
            text: "The team can spend $2,000 on an import fix and a two-week test. How many users it would keep is unknown.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "cohort",
        title: "Check how long new users stay",
        description: "Follow an earlier group of 100 paid signups.",
        hours: 3,
        evidence: [
          {
            id: "cohort-finding",
            label: "Only 60 stayed three months",
            text: "Forty of those 100 left within three months. We do not know if the same share will leave again.",
            kind: "simulation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What does each sale leave after costs?",
      "Which number could change my choice?",
      "What are we assuming here?",
    ],
    event: {
      title: "Ads get more expensive",
      text: "The next campaign quote rises from $20 to $25 per new paid user. The $2,000 budget stays fixed.",
      evidence: {
        id: "deadline-update",
        label: "Ads get more expensive",
        text: "The next campaign quote rises from $20 to $25 per new paid user. The $2,000 budget stays fixed.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "ads",
        title: "Repeat the signup campaign",
        description: "Spend $2,000 aiming for 100 more new paid users.",
        tradeoff: "If 90 still leave, the base grows by just 10.",
      },
      {
        id: "bigger",
        title: "Borrow $2,000 and double the campaign",
        description: "Spend $4,000 aiming for 200 signups at the same rate.",
        tradeoff:
          "You take on debt while you still do not know why users leave.",
      },
      {
        id: "retain",
        title: "Find and fix the biggest exit cause",
        description: "Use up to $2,000 to find one cause and test a fix.",
        tradeoff: "The repair may save few users, and new signups could slow.",
      },
      {
        id: "hold",
        title: "Spend nothing this round",
        description:
          "Keep the $2,000 cash while collecting free exit feedback.",
        tradeoff: "Without new signups or a fix, the base may shrink.",
      },
    ],
    reveal: {
      company: "The subscription app",
      title: "The signup record that hides a leak",
      history:
        "An authored practice case, not a historical company account. The celebrated month added only ten users overall: 500 plus 100 minus 90 equals 510. The repair’s payback depends on how many users stay and for how long. Nothing is guaranteed.",
      lesson: "New signups matter less when nearly as many people leave.",
      sources: [],
      consequences: {
        ads: "New signups are real, but most of them only replace users who left. How long new users stay still needs checking.",
        bigger:
          "More signups could grow the base. But this doubles a bet that is not yet proved, and adds a loan to repay.",
        retain:
          "Ninety exits cancel out most of 100 signups. A tested repair tackles the leak instead of assuming it does not matter.",
        hold: "Holding cash buys time and free feedback can help. It does not itself stop users leaving.",
      },
      rubric: [
        "Look at who stays",
        "Compare the same time period.",
        "Count costs and cash timing.",
        "Check which claims are assumptions.",
      ],
    },
  },
];
