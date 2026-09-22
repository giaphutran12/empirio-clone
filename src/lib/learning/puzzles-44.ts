import type { CaseLesson } from "./types";

export const puzzleLessons44: Record<string, CaseLesson> = {
  "case-044": {
    alternativeConditions:
      "At $40 per order, goods, delivery and ad costs together must fall below $40 to leave anything for fixed bills. A $45 price works only if enough buyers still buy.",
    skill: "Look past the ad sales number",
    takeaway: "A sale can cost more than it brings in.",
    choices: {
      double: {
        score: 20,
        verdict: "Risky move",
        why: "Each order leaves $7 before ads, but ads cost $10 per order. Doubling a losing order does not fix it.",
        tradeoff: "More sales would repeat the current loss.",
      },
      pause: {
        score: 90,
        verdict: "Strong move",
        why: "The last batch lost $300 before rent and salaries. Stop paying to repeat that loss.",
        tradeoff: "You give up some sales while working on the gap.",
      },
      keep: {
        score: 40,
        verdict: "Risky move",
        why: "The report shows sales, not money kept. There is no evidence yet that repeat sales cover the gap.",
        tradeoff: "Future repeat orders might help, but they are not proved.",
      },
      price: {
        score: 70,
        verdict: "Reasonable move",
        why: "Five more dollars would cover the $3 gap per order if costs and demand held. Demand at $45 is unknown.",
        tradeoff: "At the same sales volume it helps; buyers may buy less.",
      },
    },
    history: {
      decision:
        "Pause this ad and fix the costs. The last batch lost $300 before rent and salaries. Stop paying to repeat that loss.",
      result:
        "At the opening rate, $4,000 sales minus $2,500 goods, $800 delivery and fees, and $1,000 ads leaves a $300 loss before fixed bills.",
      connection: "A sale can cost more than it brings in.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the money",
      period: "One month · USD · before overhead",
      rows: [
        {
          label: "Last month: 100 orders",
          sales: 4000,
          costs: 4300,
        },
        {
          label: "Double budget: 200 orders at old rate",
          sales: 8000,
          costs: 8600,
        },
        {
          label: "$45 price: 100 orders if demand holds",
          sales: 4500,
          costs: 4300,
        },
      ],
      note: "One month, before rent and salaries. Rows use the opening $10 ad cost per order and unchanged demand. The higher ad rate in the update is not included. Pausing means no new ad orders, sales or order costs. These rows show money left after order costs, not total shop profit.",
    },
    check: {
      question:
        "An order sells for $40, costs $31 to fill, and needs $10 in ads. What is left?",
      options: [
        {
          id: "loss",
          text: "$1 loss",
          explanation: "40 minus 31 minus 10 is minus 1, before fixed bills.",
        },
        {
          id: "nine",
          text: "$9 gain",
          explanation: "That leaves out the $10 ad bill.",
        },
        {
          id: "ten",
          text: "$10 gain",
          explanation: "The ad bill is a cost, not a gain.",
        },
      ],
      answerId: "loss",
    },
    terms: [
      {
        term: "Ad return",
        meaning: "Sales credited to an ad divided by its cost.",
      },
      {
        term: "Contribution",
        meaning: "The money from a sale left after that sale’s own costs.",
      },
    ],
    researchNotes: {
      trace: "Sales credited to an ad are not all extra sales.",
      price: "A small cost cut can turn each sale from a loss to a gain.",
      repeat: "Repeat sales help, but count the money they leave.",
    },
    eventChange: {
      optionId: "double",
      title: "Double ads at the higher rate",
      description: "Spend $2,000 at the new $12 ad cost per order.",
      tradeoff: "Each order now loses $5 before fixed bills.",
      why: "The new ad quote makes each order worse: $40 minus $33 minus $12 is minus $5.",
      score: 10,
    },
  },
  "case-045": {
    alternativeConditions:
      "With $8,000 to spend, this $20,000 upfront bill needs at least $12,000 collected first, or signed funding for the gap. Late payment is still a risk when one customer is most of your sales.",
    skill: "Check when the money arrives",
    takeaway: "Profit on paper cannot pay a bill today.",
    choices: {
      accept: {
        score: 15,
        verdict: "Risky move",
        why: "You can spend only $8,000 safely. The order needs $20,000 before the buyer pays.",
        tradeoff: "Your available cash does not cover the upfront bill.",
      },
      deposit: {
        score: 90,
        verdict: "Strong move",
        why: "The deposit plus the $8,000 you can spend covers the $20,000 bill. Your reserve stays untouched.",
        tradeoff:
          "The buyer may refuse, and the unpaid balance still has risk.",
      },
      decline: {
        score: 75,
        verdict: "Reasonable move",
        why: "Declining avoids a cash gap. It also avoids leaning harder on one customer. Asking for safer terms first could keep the deal alive.",
        tradeoff:
          "You give up an order that could leave $10,000 after its own costs.",
      },
      small: {
        score: 70,
        verdict: "Reasonable move",
        why: "A smaller order costs less upfront. You still need a delivery quote and the buyer’s agreement.",
        tradeoff:
          "A smaller order puts less cash at risk, but may not suit the buyer.",
      },
    },
    history: {
      decision:
        "Require a 50% deposit. The deposit plus the $8,000 you can spend covers the $20,000 bill. Your reserve stays untouched.",
      result:
        "The full order leaves $10,000 before fixed bills if paid. Yet the opening no-deposit plan needs $12,000 more than the $8,000 you can safely spend.",
      connection: "Profit on paper cannot pay a bill today.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the money",
      period: "One order · USD · before overhead",
      rows: [
        {
          label: "Full order on 60-day terms",
          sales: 30000,
          costs: 20000,
        },
        {
          label: "Full order with 50% deposit",
          sales: 30000,
          costs: 20000,
        },
        {
          label: "Decline the order",
          sales: 0,
          costs: 0,
        },
      ],
      note: "One full order, before fixed bills. Both full-order rows leave $10,000 if paid in full. The deposit changes when money arrives, not sales or costs. The 1,000-unit option needs a new delivery quote and is not priced here. The later 20% deposit leaves the same money, but cannot pay for the order.",
    },
    check: {
      question:
        "A buyer pays a $15,000 deposit on a $30,000 order. How much is still owed?",
      options: [
        {
          id: "half",
          text: "$15,000",
          explanation: "$30,000 minus $15,000 is $15,000.",
        },
        {
          id: "all",
          text: "$30,000",
          explanation: "The deposit is part of the sale, not extra income.",
        },
        {
          id: "five",
          text: "$5,000",
          explanation: "Costs do not reduce what the buyer owes.",
        },
      ],
      answerId: "half",
    },
    terms: [
      {
        term: "Deposit",
        meaning: "Part of the price paid before work starts.",
      },
      {
        term: "Cash gap",
        meaning: "A bill due before you have enough money to pay it.",
      },
    ],
    researchNotes: {
      terms: "Get the cash before taking on the bill.",
      supplier: "Expected profit cannot pay an upfront bill.",
      buyer: "Even a big customer can pay late. Leave room for that wait.",
    },
    eventChange: {
      optionId: "deposit",
      title: "Decline unless funding is secured",
      description:
        "Do not promise the full order on a $6,000 deposit without new funding.",
      tradeoff:
        "You may lose the buyer, but the reduced deposit leaves a $6,000 cash gap.",
      why: "Your $8,000 spendable cash plus the $6,000 deposit cannot cover $20,000 upfront. Do not promise what you cannot fund.",
      score: 95,
    },
  },
  "case-046": {
    alternativeConditions:
      "At $2 per deal ticket and $8 per regular ticket, 40 deal buyers must include fewer than 10 switchers to add any money. A targeted offer helps only if it really cuts switching.",
    skill: "Count sales you replace",
    takeaway: "A discount helps only when it adds enough new buying.",
    choices: {
      all: {
        score: 45,
        verdict: "Risky move",
        why: "Forty cheap tickets leave just $80 before fixed bills. Only ten switched full-price sales would use up that gain.",
        tradeoff: "Some regular buyers may switch to the cheap show.",
      },
      new: {
        score: 85,
        verdict: "Strong move",
        why: "Quiet seats cost little extra to fill. Aiming at guests who stopped coming lowers the risk of replacing full-price sales.",
        tradeoff: "Some may still have bought without the offer.",
      },
      regular: {
        score: 65,
        verdict: "Reasonable move",
        why: "You protect the $8 each regular sale leaves. You also give up a chance to bring back guests.",
        tradeoff: "You avoid switching, but may leave useful seats empty.",
      },
      bundle: {
        score: 65,
        verdict: "Reasonable move",
        why: "A bundle could keep the ticket price intact, but you need the snack cost before deciding whether it pays.",
        tradeoff: "The extra snack cost and buyer response are unknown.",
      },
    },
    history: {
      decision:
        "Target lapsed guests first. Quiet seats cost little extra to fill. Aiming at guests who stopped coming lowers the risk of replacing full-price sales.",
      result:
        "Forty deal tickets leave $80. If ten of those buyers would have paid full price, you give up $80 from the regular visits. The extra gain becomes zero.",
      connection: "A discount helps only when it adds enough new buying.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the money",
      period: "One offer and replaced visits · USD · before fixed bills",
      rows: [
        {
          label: "40 deal buyers, all extra visits",
          sales: 240,
          costs: 160,
        },
        {
          label: "10 regular visits without a deal",
          sales: 120,
          costs: 40,
        },
        {
          label: "40 deal buyers, including 10 switchers",
          sales: 240,
          costs: 160,
        },
      ],
      note: "One Tuesday offer and the regular visits it could replace. The third row leaves $80 after costs, the same as the $80 in the second row. With ten switchers, the extra gain is zero. The all-extra row is a best case, not a forecast. Fixed bills and snacks are left out.",
    },
    check: {
      question:
        "40 deal buyers include 5 people who would have bought regular tickets. How much extra money does the deal add?",
      options: [
        {
          id: "forty",
          text: "$40",
          explanation:
            "$80 from the deal minus $40 from five lost regular sales is $40.",
        },
        {
          id: "eighty",
          text: "$80",
          explanation: "Subtract the five regular sales you gave up.",
        },
        {
          id: "twoforty",
          text: "$240",
          explanation: "That is total deal sales before costs or switching.",
        },
      ],
      answerId: "forty",
    },
    terms: [
      {
        term: "Switching",
        meaning: "An existing buyer moves to a cheaper offer.",
      },
      {
        term: "Added contribution",
        meaning:
          "Money the offer leaves after its own costs and the sales it replaces.",
      },
    ],
    researchNotes: {
      buyers: "Subtract money lost when full-price buyers switch.",
      gate: "Target new visits instead of rewarding visits you already had.",
      test: "Use a comparison group to learn what sales are truly extra.",
    },
    eventChange: {
      optionId: "all",
      title: "Send the repeat-use broad coupon",
      description: "Launch the four-week coupon to every subscriber.",
      tradeoff: "Regular buyers could switch several visits, not just one.",
      why: "Repeat use raises the risk. Even ten switched regular tickets wipe out the expected first-show gain.",
      score: 25,
    },
  },
  "case-047": {
    alternativeConditions:
      "The $4,000 pallet needs at least $6,000 in the bank to keep the opening $2,000 bill reserve, or an agreed later payment. Extra stock also needs a safe plan for how fast it sells.",
    skill: "Separate stock value from cash",
    takeaway: "A discount can be real and still be too expensive today.",
    choices: {
      bulk: {
        score: 30,
        verdict: "Risky move",
        why: "Saving $2 per unit is real, but the upfront order uses cash needed for bills.",
        tradeoff: "Only $1,000 cash remains before the $2,000 reserved bills.",
      },
      monthly: {
        score: 90,
        verdict: "Strong move",
        why: "This protects the bill reserve and keeps cash flexible. A discount is not useful if it stops you paying what is due.",
        tradeoff: "You pay more per unit.",
      },
      wait: {
        score: 50,
        verdict: "Risky move",
        why: "Cash stays safe, but you give up sales even though a normal order fits the budget.",
        tradeoff: "With no stock, you miss the planned sales.",
      },
      split: {
        score: 80,
        verdict: "Strong move",
        why: "Paying in smaller steps could keep the discount. A request is not a deal until the supplier agrees.",
        tradeoff:
          "The supplier may refuse, or may want a promise on the later batch.",
      },
    },
    history: {
      decision:
        "Buy 100 units at a time. This protects the bill reserve and keeps cash flexible. A discount is not useful if it stops you paying what is due.",
      result:
        "Bulk stock saves $600 on the first 300 units sold. Yet its $4,000 upfront payment leaves only $1,000 for $2,000 of near-term bills.",
      connection: "A discount can be real and still be too expensive today.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the money",
      period: "Three months · USD · before shop bills",
      rows: [
        {
          label: "Monthly orders: sell 300 units",
          sales: 6000,
          costs: 3000,
        },
        {
          label: "Bulk order: sell 300 of 500 units",
          sales: 6000,
          costs: 2400,
        },
        {
          label: "Buy no stock: no sales",
          sales: 0,
          costs: 0,
        },
      ],
      note: "Three months, assuming 100 full-price sales monthly. Costs shown are the cost of units sold, not cash spent. The bulk order spends $4,000 upfront, with $1,600 of unsold stock left after 300 sales. Monthly orders spend $3,000 in total. Other shop bills and the later repair are left out, so the difference is money left after stock costs, not profit.",
    },
    check: {
      question:
        "You buy 500 units for $8 each and sell 300. What is the cost value of stock left?",
      options: [
        {
          id: "stock",
          text: "$1,600",
          explanation:
            "200 unsold units times $8 equals $1,600. It is stock, not cash.",
        },
        {
          id: "four",
          text: "$4,000",
          explanation: "That was the cost of all 500 units.",
        },
        {
          id: "six",
          text: "$600",
          explanation:
            "That is the savings on 300 sold units compared with $10 each.",
        },
      ],
      answerId: "stock",
    },
    terms: [
      {
        term: "Inventory",
        meaning: "Goods bought but not yet sold.",
      },
      {
        term: "Cost of goods sold",
        meaning: "The purchase cost of the items you actually sold.",
      },
    ],
    researchNotes: {
      age: "Stock can keep its value and still tie up your cash.",
      terms: "Split payments ease today’s gap but create a later promise.",
      sales: "Use a slower-sales case before locking cash in inventory.",
    },
    eventChange: {
      optionId: "bulk",
      title: "Buy the pallet despite the repair",
      description: "Spend $4,000 now and face the added $500 bill.",
      tradeoff: "Only $1,000 remains against $2,500 in immediate bills.",
      why: "The repair makes the cash shortage $1,500. Stock on a shelf cannot cover a bill due now.",
      score: 15,
    },
  },
  "case-048": {
    alternativeConditions:
      "The $1,200 fixed fee matches $50 an hour only at 24 hours or less. You may still choose to accept more hours. But that means less pay per hour, not a better deal.",
    skill: "Price the whole promise",
    takeaway: "A fixed price needs a clear finish line.",
    choices: {
      unlimited: {
        score: 30,
        verdict: "Risky move",
        why: "The fee beats 20 hours at $50 only if extra work stays small. Unlimited edits leave that open.",
        tradeoff: "Total hours could go past the 40 hours you have.",
      },
      hourly: {
        score: 85,
        verdict: "Strong move",
        why: "Hourly billing pays for added work. Clear updates help the client control the bill.",
        tradeoff: "The client may want a firm maximum price.",
      },
      bounded: {
        score: 90,
        verdict: "Strong move",
        why: "A flat fee can work when both sides know what it buys and what counts as extra.",
        tradeoff: "The client may reject the limits.",
      },
      decline: {
        score: 60,
        verdict: "Reasonable move",
        why: "You avoid an open-ended promise, but either clear scope or hourly billing may solve it.",
        tradeoff: "You give up a job that might work under better terms.",
      },
    },
    history: {
      decision:
        "Quote $1,200 for a clear scope. A flat fee can work when both sides know what it buys and what counts as extra.",
      result:
        "At $1,200, 24 total hours earns $50 an hour. Thirty hours earns $40; forty hours earns $30. A higher quote does not guarantee better pay for your time.",
      connection: "A fixed price needs a clear finish line.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the money",
      period: "One project · USD · fees before owner labor and overhead",
      rows: [
        {
          label: "Hourly: 30 total hours",
          sales: 1500,
          costs: 0,
        },
        {
          label: "Unlimited flat fee: 30 total hours",
          sales: 1200,
          costs: 0,
        },
        {
          label: "Scoped flat fee: 24 total hours, if achieved",
          sales: 1200,
          costs: 0,
        },
      ],
      note: "One project. These are fees before tax and fixed bills, not profit. Your own hours are not counted as a cash cost in the table. Pay per hour works out to $50, $40 and $50 in that order. The 30- and 24-hour totals are examples, not promises. The later extra pages are not included here.",
    },
    check: {
      question:
        "A $1,200 fee takes 40 hours. What is your pay per hour before fixed bills?",
      options: [
        {
          id: "thirty",
          text: "$30",
          explanation: "$1,200 divided by 40 is $30.",
        },
        {
          id: "fifty",
          text: "$50",
          explanation: "That would require finishing in 24 hours.",
        },
        {
          id: "sixty",
          text: "$60",
          explanation: "That would require finishing in 20 hours.",
        },
      ],
      answerId: "thirty",
    },
    terms: [
      {
        term: "Scope",
        meaning: "The exact work included in a price.",
      },
      {
        term: "Effective hourly pay",
        meaning: "Your fee divided by all the hours you spent.",
      },
    ],
    researchNotes: {
      edits: "Use total hours, not just first-draft time.",
      scope: "A clear stopping point makes a fixed price safer.",
      other: "Unlimited edits can crowd out paid work.",
    },
    eventChange: {
      optionId: "unlimited",
      title: "Accept the expanded $1,200 job",
      description: "Promise the new scope and unlimited edits at the same fee.",
      tradeoff: "Even the first draft pays only $40 per hour.",
      why: "Thirty hours for $1,200 is $40 per hour before any edits. More work for the same fee makes the deal worse.",
      score: 15,
    },
  },
  "case-049": {
    alternativeConditions:
      "At the original $2,400 fixed bill, 80 paid seats cover all the costs counted here. The $1,800 smaller package needs 60 seats. After the original price rises to $2,700, it needs 90 seats.",
    skill: "Find the real break-even point",
    takeaway: "Count what each seat leaves, not just what it sells for.",
    choices: {
      go: {
        score: 35,
        verdict: "Risky move",
        why: "Sixty tickets bring in $3,000, but $2,400 plus $1,200 guest costs is $3,600.",
        tradeoff: "Current ticket sales leave a loss.",
      },
      threshold: {
        score: 90,
        verdict: "Strong move",
        why: "Each guest leaves $30 for the fixed bill. Eighty guests cover $2,400, with no cushion yet.",
        tradeoff: "You may have to refund and cancel if sales fall short.",
      },
      cancel: {
        score: 75,
        verdict: "Reasonable move",
        why: "Cancelling avoids a loss you can already see. The quote is still open, so you could wait for firm sales first.",
        tradeoff: "You lose a chance to sell more seats before the deadline.",
      },
      cheap: {
        score: 85,
        verdict: "Strong move",
        why: "Reducing fixed costs can work. Use a real quote, not a hoped-for saving.",
        tradeoff:
          "A smaller event may mean fewer seats or a different experience.",
      },
    },
    history: {
      decision:
        "Require 80 paid tickets first. Each guest leaves $30 for the fixed bill. Eighty guests cover $2,400, with no cushion yet.",
      result:
        "At the opening quote, each $50 ticket leaves $30 after guest costs. It takes 80 tickets to cover $2,400. Sixty sold seats still means a $600 loss.",
      connection: "Count what each seat leaves, not just what it sells for.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the money",
      period: "One event · USD · all modeled event costs",
      rows: [
        {
          label: "Original package: 60 guests",
          sales: 3000,
          costs: 3600,
        },
        {
          label: "Original package: 80 guests",
          sales: 4000,
          costs: 4000,
        },
        {
          label: "Smaller package: 60 guests",
          sales: 3000,
          costs: 3000,
        },
        {
          label: "Cancel and refund all tickets",
          sales: 0,
          costs: 0,
        },
      ],
      note: "One event, with every event cost counted. If you cancel, you refund everything, so there are no sales and no event costs. The smaller-package row uses the research quote. Original-package rows use the opening $2,400 bill, not the later $2,700 update. Ticket money must stay available for refunds until you confirm.",
    },
    check: {
      question:
        "Fixed costs are $2,700. Tickets are $50 and each guest costs $20. How many guests cover costs?",
      options: [
        {
          id: "ninety",
          text: "90 guests",
          explanation: "$2,700 divided by $30 per guest is 90.",
        },
        {
          id: "fiftyfour",
          text: "54 guests",
          explanation:
            "That divides by the ticket price but ignores guest costs.",
        },
        {
          id: "eighty",
          text: "80 guests",
          explanation: "80 times $30 covers only $2,400.",
        },
      ],
      answerId: "ninety",
    },
    terms: [
      {
        term: "Break-even",
        meaning: "Sales cover costs, with nothing left over.",
      },
      {
        term: "Fixed cost",
        meaning: "A bill that stays the same as guest numbers change.",
      },
    ],
    researchNotes: {
      sales: "Interest does not close the funding gap.",
      costs: "Lower fixed costs change how many seats must sell.",
      sponsor: "Do not spend sponsor money that is not signed and paid.",
    },
    eventChange: {
      optionId: "threshold",
      title: "Require 90 paid tickets first",
      description: "Only confirm the original package after 90 tickets sell.",
      tradeoff: "Ninety guests leave no cushion for surprises.",
      why: "The new fixed bill needs 90 times $30, or $2,700. The old 80-ticket rule no longer covers it.",
      score: 85,
    },
  },
  "case-050": {
    alternativeConditions:
      "Repeat ads can be worth it if users stay long enough to cover the cost of winning and serving them. Each user leaves $15 a month, so a $20 signup cost needs more than 1.33 paid months before fixed bills. A $2,000 repair needs over 133 saved user-months at $15 each. Saving 30 users for one month is not enough.",
    skill: "Look at who stays",
    takeaway: "New signups matter less when nearly as many people leave.",
    choices: {
      ads: {
        score: 55,
        verdict: "Risky move",
        why: "New signups are real, but most of them only replace users who left. How long new users stay still needs checking.",
        tradeoff: "If 90 still leave, the base grows by just 10.",
      },
      bigger: {
        score: 30,
        verdict: "Risky move",
        why: "More signups could grow the base. But this doubles a bet that is not yet proved, and adds a loan to repay.",
        tradeoff:
          "You take on debt while you still do not know why users leave.",
      },
      retain: {
        score: 85,
        verdict: "Strong move",
        why: "Ninety exits cancel out most of 100 signups. A tested repair tackles the leak instead of assuming it does not matter.",
        tradeoff: "The repair may save few users, and new signups could slow.",
      },
      hold: {
        score: 65,
        verdict: "Reasonable move",
        why: "Holding cash buys time and free feedback can help. It does not itself stop users leaving.",
        tradeoff: "Without new signups or a fix, the base may shrink.",
      },
    },
    history: {
      decision:
        "Find and fix the biggest exit cause. Ninety exits cancel out most of 100 signups. A tested repair tackles the leak instead of assuming it does not matter.",
      result:
        "The celebrated month added only ten users overall: 500 plus 100 minus 90 equals 510. The repair’s payback depends on how many users stay and for how long. Nothing is guaranteed.",
      connection: "New signups matter less when nearly as many people leave.",
      sources: [],
    },
    moneyComparison: {
      title: "Compare the money",
      period:
        "First full month after changes · USD · before overhead and financing",
      rows: [
        {
          label: "Hold spending: 420 active users",
          sales: 8400,
          costs: 2100,
        },
        {
          label: "Repeat ads: 520 active users",
          sales: 10400,
          costs: 4600,
        },
        {
          label: "Repair: 450 active users if it saves 30 exits",
          sales: 9000,
          costs: 4250,
        },
        {
          label: "Double ads: 620 active users",
          sales: 12400,
          costs: 7100,
        },
      ],
      note: "An example first full month after the next decision, before fixed bills. Start with 510. Ads assumes 100 join and 90 leave, leaving 520; its costs are $2,600 service plus the $2,000 campaign. Repair assumes no one new joins and only 60 leave, leaving 450; its costs are $2,250 service plus the $2,000 fix. Saving 30 users is a guess, not a measured result. Hold assumes no one joins and 90 leave, leaving 420. Double ads assumes 200 join and 90 leave, leaving 620; its costs are $3,100 service plus $4,000 ads. Loan repayments and interest are not included. The loan terms are unknown, so the double-ads row is not a cash forecast. All rows use the opening ad price, not the later $25 quote.",
    },
    check: {
      question:
        "You start with 510 users. Next month 80 join and 90 leave. How many remain?",
      options: [
        {
          id: "fivehundred",
          text: "500 users",
          explanation: "510 plus 80 minus 90 equals 500.",
        },
        {
          id: "five ninety",
          text: "590 users",
          explanation: "That counts joins but forgets exits.",
        },
        {
          id: "ten",
          text: "10 users",
          explanation: "Ten is the net loss, not the ending total.",
        },
      ],
      answerId: "fivehundred",
    },
    terms: [
      {
        term: "Churn",
        meaning: "Paying users who leave during a period.",
      },
      {
        term: "Net growth",
        meaning: "New users minus users who leave.",
      },
    ],
    researchNotes: {
      exit: "Find one clear cause before promising that more users will stay.",
      fix: "A feasible repair is not the same as a proved result.",
      cohort: "You pay to win users again and again when they leave quickly.",
    },
    eventChange: {
      optionId: "ads",
      title: "Repeat ads at $25 per signup",
      description: "Spend $2,000 aiming for 80 new paid users.",
      tradeoff: "If 90 still leave, the base would shrink by 10.",
      why: "At the new quote, $2,000 buys only 80 signups. That does not replace 90 exits if the exit count repeats.",
      score: 40,
    },
  },
};
