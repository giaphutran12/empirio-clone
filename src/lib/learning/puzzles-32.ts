import type { CaseLesson } from "./types";

export const puzzleLessons32: Record<string, CaseLesson> = {
  "case-032": {
    "skill": "Check what a discount leaves behind",
    "takeaway": "More sales can leave you with the same money.",
    "alternativeConditions": "Without the fee, 151 discounted cups beat the normal day by $2. With the fee, you need 176 cups to beat $100. Both fit the 200-cup limit, but demand is unproved.",
    "choices": {
      "discount": {
        "score": 55,
        "verdict": "Risky move",
        "why": "At 150 cups you keep the same $100 after costs as 100 full-price cups. More work buys no extra earnings.",
        "tradeoff": "You need more than 150 cups to beat the normal day."
      },
      "keep": {
        "score": 85,
        "verdict": "Strong move",
        "why": "The current 100 cups leave $100 after all listed costs. The forecast discount does not improve that.",
        "tradeoff": "You may miss buyers who would only pay $4."
      },
      "target": {
        "score": 80,
        "verdict": "Strong move",
        "why": "Keep full price on regular sales while checking whether a small offer adds new buyers.",
        "tradeoff": "You still need a way to limit coupons and a budget for setup."
      },
      "bundle": {
        "score": 70,
        "verdict": "Reasonable move",
        "why": "Adding value may protect the coffee price. Check snack costs and buyer interest before promising it.",
        "tradeoff": "A higher ticket is useful only if the extra cost is lower than the extra price."
      }
    },
    "history": {
      "decision": "Choose between more discounted cups and fewer full-price cups.",
      "result": "At full price, $500 minus $400 leaves $100. At 150 discounted cups, $600 minus $500 also leaves $100. The new $50 fee lowers that to $50.",
      "connection": "Check dollars left per cup, then multiply by a believable number of buyers.",
      "sources": []
    },
    "moneyComparison": {
      "title": "Compare the money",
      "period": "One day · USD · forecast volumes",
      "rows": [
        {
          "label": "100 cups at $5",
          "sales": 500,
          "costs": 400
        },
        {
          "label": "150 cups at $4 · before new fee",
          "sales": 600,
          "costs": 500
        },
        {
          "label": "150 cups at $4 · after new fee",
          "sales": 600,
          "costs": 550
        }
      ],
      "note": "Costs include $2 per cup and $200 fixed daily costs. The last row also includes the event’s $50 fee. Sales volumes are assumptions, not guaranteed orders."
    },
    "check": {
      "question": "At $4 per cup and $2 cost per cup, how many cups cover $200 of fixed costs?",
      "answerId": "100",
      "options": [
        {
          "id": "50",
          "text": "50 cups",
          "explanation": "50 cups leave $100 toward the $200 bill."
        },
        {
          "id": "100",
          "text": "100 cups",
          "explanation": "Each cup leaves $2. One hundred cups leave $200, so nothing is left after fixed costs."
        },
        {
          "id": "200",
          "text": "200 cups",
          "explanation": "Two hundred cups leave $400 before fixed costs, or $200 after them."
        }
      ]
    },
    "terms": [
      {
        "term": "Contribution",
        "meaning": "The sale price minus the costs of that extra sale."
      },
      {
        "term": "Fixed costs",
        "meaning": "Bills that stay the same within the stated sales range."
      }
    ],
    "researchNotes": {
      "demand": "A forecast is not a paid order. At 120 cups the discount leaves less money.",
      "bundle": "A bundle can raise dollars left per order, but demand still needs proof.",
      "target": "Targeting new sales can avoid cutting the price on sales you already have."
    },
    "eventChange": {
      "optionId": "discount",
      "title": "Run the $4 offer and pay $50",
      "description": "Pay the added fee and discount all cups tomorrow.",
      "tradeoff": "You now need 176 cups to beat the normal day’s $100.",
      "why": "At the 150-cup forecast, the added fee cuts money left from $100 to $50.",
      "score": 30
    }
  },
  "case-033": {
    "skill": "Count the sales a big order pushes out",
    "takeaway": "Busy is not the same as profitable.",
    "alternativeConditions": "At the original price, the full order can work only if extra capacity costs little enough or regular demand falls. At $3.50, the 300-order mix beats regular-only earnings by $150, though it still turns away regular buyers.",
    "choices": {
      "full": {
        "score": 30,
        "verdict": "Risky move",
        "why": "You replace 200 regular pastries that leave $3 each with bulk pastries that leave only $1 each.",
        "tradeoff": "A bigger invoice can still mean less money after costs."
      },
      "partial": {
        "score": 90,
        "verdict": "Strong move",
        "why": "There are 100 spare slots after 400 regular sales. Filling them can add money without losing regular orders.",
        "tradeoff": "The buyer must agree to fewer pastries before you commit."
      },
      "decline": {
        "score": 80,
        "verdict": "Strong move",
        "why": "The normal 400 sales leave $500 after listed costs. Protecting those buyers is a sound fallback.",
        "tradeoff": "You leave 100 slots unused if no other buyers arrive."
      },
      "expand": {
        "score": 65,
        "verdict": "Reasonable move",
        "why": "Extra capacity could protect regular sales. But its full added cost must fit inside the bulk order’s $300 contribution.",
        "tradeoff": "You may lose the order while finding staff and oven time."
      }
    },
    "history": {
      "decision": "Decide whether the bulk order deserves space already used by regular buyers.",
      "result": "The whole $2 order leaves $200 after costs, versus $500 from regular sales alone. A 100-pastry bulk deal leaves $600. At the new $3.50 rate, taking all 300 leaves $650.",
      "connection": "A discount order is more useful in spare capacity than in a slot that already earns more.",
      "sources": []
    },
    "moneyComparison": {
      "title": "Compare the money",
      "period": "Tomorrow · USD · all planned units sold",
      "rows": [
        {
          "label": "Decline · 400 regular",
          "sales": 1600,
          "costs": 1100
        },
        {
          "label": "Accept · 200 regular + 300 bulk at $2",
          "sales": 1400,
          "costs": 1200
        },
        {
          "label": "Smaller deal · 400 regular + 100 bulk at $2",
          "sales": 1800,
          "costs": 1200
        },
        {
          "label": "New rate · 200 regular + 300 bulk at $3.50",
          "sales": 1850,
          "costs": 1200
        }
      ],
      "note": "Costs include $1 per pastry and the $700 daily bill. The smaller deal needs the buyer’s agreement. No overtime is used in these rows."
    },
    "check": {
      "question": "One bulk pastry at $2 replaces a regular pastry at $4. Both cost $1. How much do you give up?",
      "answerId": "2",
      "options": [
        {
          "id": "1",
          "text": "$1",
          "explanation": "That is what the bulk pastry leaves, not what you give up."
        },
        {
          "id": "2",
          "text": "$2",
          "explanation": "The regular pastry leaves $3; the bulk one leaves $1. You give up $2."
        },
        {
          "id": "4",
          "text": "$4",
          "explanation": "You still earn $2 from the bulk sale and its cost is the same."
        }
      ]
    },
    "terms": [
      {
        "term": "Capacity",
        "meaning": "How much you can make in the time available."
      },
      {
        "term": "Opportunity cost",
        "meaning": "What you give up by using a slot one way instead of another."
      }
    ],
    "researchNotes": {
      "partial": "A smaller order fills spare space without replacing full-price sales.",
      "overtime": "Extra bulk contribution is $200, less than the $250 shift cost.",
      "regulars": "Most shop demand is already committed. Bulk sales would displace valuable orders."
    },
    "eventChange": {
      "optionId": "full",
      "title": "Take all 300 at $3.50",
      "description": "Accept the new rate and sell 200 regular pastries.",
      "tradeoff": "You earn more in this example but still turn away 200 regular buyers.",
      "why": "The new mix leaves $650 after costs, $150 more than regular sales alone.",
      "score": 80
    }
  },
  "case-034": {
    "skill": "Count channel fees before chasing orders",
    "takeaway": "A new sales channel can take most of the sale.",
    "alternativeConditions": "Without the launch fee, the app can help if orders are extra and fit spare kitchen time. With the fee, more than 50 extra $20 app meals are needed to beat the direct-only night; the current kitchen has room for only 40.",
    "choices": {
      "all": {
        "score": 75,
        "verdict": "Reasonable move",
        "why": "Each new app meal leaves $4 after its fee, food and packing. Forty truly extra orders add $160 before fixed costs.",
        "tradeoff": "Buyer switching or peak-time crowding could erase that gain."
      },
      "direct": {
        "score": 70,
        "verdict": "Reasonable move",
        "why": "The current 60 direct meals leave $120 after costs. You avoid a lower-margin channel.",
        "tradeoff": "You give up a possible $160 nightly gain if all app orders are truly extra."
      },
      "limit": {
        "score": 85,
        "verdict": "Strong move",
        "why": "A cap limits the risk to current service while testing whether the orders are new.",
        "tradeoff": "A small trial earns less and any launch fee still needs to be covered."
      },
      "discount": {
        "score": 20,
        "verdict": "Risky move",
        "why": "A $15 app meal leaves just $0.50 after the $4.50 fee, $8 meal cost and $2 packing.",
        "tradeoff": "The kitchen has limited slots. Filling them cheaply can crowd out better sales."
      }
    },
    "history": {
      "decision": "Decide whether extra delivery orders pay for the app’s fees and added work.",
      "result": "Before the launch fee, 40 extra app meals raise money left from $120 to $280. On the first night with the fee, only $80 remains, below the direct-only plan.",
      "connection": "Count genuinely new orders, then check whether they fit when the kitchen has spare time.",
      "sources": []
    },
    "moneyComparison": {
      "title": "Compare the money",
      "period": "One night · USD · all app orders assumed extra",
      "rows": [
        {
          "label": "60 direct meals only",
          "sales": 1200,
          "costs": 1080
        },
        {
          "label": "60 direct + 40 app at $20 · no launch fee",
          "sales": 2000,
          "costs": 1720
        },
        {
          "label": "60 direct + 40 app · with launch fee",
          "sales": 2000,
          "costs": 1920
        }
      ],
      "note": "Costs include $8 per meal, $600 fixed bills, 30% of app sales and $2 packing per app meal. The final row adds the $200 first-night fee. No direct customer switches channels in this calculation."
    },
    "check": {
      "question": "The app takes 30% of a $20 meal. Meal costs are $8 and packing $2. What remains before fixed costs?",
      "answerId": "4",
      "options": [
        {
          "id": "14",
          "text": "$14",
          "explanation": "That is after the app fee but before meal and packing costs."
        },
        {
          "id": "4",
          "text": "$4",
          "explanation": "$20 minus $6 fee, $8 meal cost and $2 packing leaves $4."
        },
        {
          "id": "10",
          "text": "$10",
          "explanation": "This subtracts meal and packing but forgets the $6 app fee."
        }
      ]
    },
    "terms": [
      {
        "term": "Commission",
        "meaning": "The share of each sale paid to another business."
      },
      {
        "term": "Channel",
        "meaning": "The route a customer uses to buy from you."
      }
    ],
    "researchNotes": {
      "switching": "Count new buyers separately from buyers who move to a more costly channel.",
      "menu": "A higher app price can protect money per order, but may reduce demand.",
      "rush": "Nightly capacity does not guarantee room when buyers actually order."
    },
    "eventChange": {
      "optionId": "all",
      "title": "Join and pay the $200 launch fee",
      "description": "Take the first-night fee and accept up to 40 extra orders.",
      "tradeoff": "Later nights may improve, but the first night earns less than direct-only sales.",
      "why": "Forty extra meals add $160 before the new fee. Paying $200 makes the first night $40 worse.",
      "score": 45
    }
  },
  "case-035": {
    "skill": "Price the cost of a free perk",
    "takeaway": "Free perks must be paid for somewhere.",
    "alternativeConditions": "At $5 delivery, 172 free-shipping orders at $30 beat the current $700 by $4. Under the researched $3 carrier rate, 130 such orders leave $670, still $30 short. A higher basket threshold needs real buyer demand.",
    "choices": {
      "all": {
        "score": 40,
        "verdict": "Risky move",
        "why": "At the forecast volume, free shipping leaves $410 after listed costs, below the current $700.",
        "tradeoff": "Extra orders help only if they cover the shipping you now pay."
      },
      "threshold": {
        "score": 65,
        "verdict": "Reasonable move",
        "why": "The forecast leaves $660 after costs. Bigger baskets help, but each $10 add-on leaves only $4 to cover $5 shipping.",
        "tradeoff": "The offer may attract buyers, but it is not an earnings gain at these assumptions."
      },
      "keep": {
        "score": 90,
        "verdict": "Strong move",
        "why": "The current plan leaves $700 a week after listed costs, more than either proposed free-shipping forecast.",
        "tradeoff": "Some buyers may leave because of the delivery charge."
      },
      "raise": {
        "score": 75,
        "verdict": "Reasonable move",
        "why": "You need more than $12.50 of added goods at a 40% margin to cover a $5 delivery subsidy.",
        "tradeoff": "A higher threshold may persuade fewer customers to add items."
      }
    },
    "history": {
      "decision": "Choose whether to charge for delivery, absorb it or link it to a bigger basket.",
      "result": "Paid shipping leaves $700. Free shipping on every order leaves $410. The $40 threshold leaves $660. A bigger average basket alone does not prove a better offer.",
      "connection": "An extra dollar of sales is not an extra dollar available to pay for shipping.",
      "sources": []
    },
    "moneyComparison": {
      "title": "Compare the money",
      "period": "One week · USD · before the carrier price change",
      "rows": [
        {
          "label": "100 orders · paid shipping",
          "sales": 3500,
          "costs": 2800
        },
        {
          "label": "130 orders · all shipping free",
          "sales": 3900,
          "costs": 3490
        },
        {
          "label": "100 orders · free from $40",
          "sales": 3700,
          "costs": 3040
        }
      ],
      "note": "Sales include customer shipping charges. Costs include goods at 60%, delivery at $5 per order and $500 fixed costs. The $40 offer assumes 40 larger baskets and 60 normal baskets. These are forecasts."
    },
    "check": {
      "question": "Goods keep 40% of their selling price before shipping. A buyer adds $10 to get $5 shipping free. How does money left change?",
      "answerId": "down",
      "options": [
        {
          "id": "up",
          "text": "Up $5",
          "explanation": "The added goods do not all become earnings; 60% pays for the goods."
        },
        {
          "id": "same",
          "text": "No change",
          "explanation": "The added goods leave $4, which is $1 short of the lost $5 shipping charge."
        },
        {
          "id": "down",
          "text": "Down $1",
          "explanation": "The extra goods leave $4. Giving up $5 shipping means $1 less remains."
        }
      ]
    },
    "terms": [
      {
        "term": "Basket",
        "meaning": "The goods bought in one order."
      },
      {
        "term": "Threshold",
        "meaning": "The amount needed to qualify for an offer."
      }
    ],
    "researchNotes": {
      "demand": "Clicks do not prove that enough new orders will cover free delivery.",
      "basket": "The basket forecast is uncertain; even a larger basket must pay for the shipping subsidy.",
      "rate": "A lower delivery cost could change the free-shipping math, but the volume condition matters."
    },
    "eventChange": {
      "optionId": "keep",
      "title": "Keep charging $5 with $7 delivery",
      "description": "Keep the offer while paying the new carrier rate.",
      "tradeoff": "You now subsidize $2 per order and should seek another rate or price.",
      "why": "At 100 orders, the extra $2 delivery cost cuts weekly money left from $700 to $500.",
      "score": 70
    }
  },
  "case-036": {
    "skill": "Separate profit from cash timing",
    "takeaway": "Good profit does not always mean cash in time.",
    "alternativeConditions": "Accepting late payment works only with enough cash or confirmed funding. A deposit avoids loan fees if the client agrees. After revisions, a $12,000 deposit plus $8,000 cash covers the $18,000 bill, but leaves only $2,000 cash until final payment.",
    "choices": {
      "accept": {
        "score": 25,
        "verdict": "Risky move",
        "why": "The project has an $18,000 surplus, but you are $4,000 short when the $12,000 delivery bill falls due.",
        "tradeoff": "Expected profit does not fill the bank before payday."
      },
      "deposit": {
        "score": 90,
        "verdict": "Strong move",
        "why": "A $12,000 deposit covers the delivery bill and protects your $8,000 cash. Do not start until the terms are agreed.",
        "tradeoff": "The client may reject the new terms."
      },
      "loan": {
        "score": 70,
        "verdict": "Reasonable move",
        "why": "A loan could fill the $4,000 timing gap while keeping the sale. You need its cost and repayment date first.",
        "tradeoff": "Debt adds a bill even if the client pays late."
      },
      "decline": {
        "score": 80,
        "verdict": "Strong move",
        "why": "Without new funding or earlier payment, you cannot cover the delivery bill. Passing protects cash for other work.",
        "tradeoff": "You lose a potentially useful $18,000 project surplus."
      }
    },
    "history": {
      "decision": "Choose payment terms that let you pay the team before the client settles the bill.",
      "result": "The original job leaves $18,000 over three months but runs $4,000 short at the first payday. A deposit changes cash timing, not the total project surplus. The $500 loan fee lowers that surplus to $17,500.",
      "connection": "Put cash receipts and bills on a calendar before accepting a profitable project.",
      "sources": []
    },
    "moneyComparison": {
      "title": "Compare the money",
      "period": "Three months · USD · client pays in full",
      "rows": [
        {
          "label": "Accept with late payment",
          "sales": 30000,
          "costs": 12000
        },
        {
          "label": "Get a deposit · same total fee",
          "sales": 30000,
          "costs": 12000
        },
        {
          "label": "Use the quoted loan",
          "sales": 30000,
          "costs": 12500
        },
        {
          "label": "Accept added revisions · same fee",
          "sales": 30000,
          "costs": 18000
        }
      ],
      "note": "Rows show project surplus, not whole-agency profit. Existing work covers fixed costs separately. Costs include all added delivery costs; the loan row adds its $500 fee, not repayment of principal. The revisions row is a separate event scenario, without a loan."
    },
    "check": {
      "question": "You start with $8,000, receive a $12,000 deposit and pay $12,000 delivery costs. What cash remains?",
      "answerId": "8",
      "options": [
        {
          "id": "18",
          "text": "$18,000",
          "explanation": "That is the original project surplus, not cash at this point."
        },
        {
          "id": "8",
          "text": "$8,000",
          "explanation": "$8,000 plus $12,000 minus $12,000 leaves $8,000."
        },
        {
          "id": "20",
          "text": "$20,000",
          "explanation": "That is cash before paying delivery costs."
        }
      ]
    },
    "terms": [
      {
        "term": "Cash gap",
        "meaning": "A bill due before enough money arrives to pay it."
      },
      {
        "term": "Deposit",
        "meaning": "Part of the price paid before the work is finished."
      }
    ],
    "researchNotes": {
      "deposit": "The deposit funds delivery without needing a loan.",
      "loan": "Financing fills the gap but lowers earnings and leaves repayment risk if the client pays late.",
      "credit": "A profitable deal can still put wages or loan repayment at risk when payment arrives late."
    },
    "eventChange": {
      "optionId": "accept",
      "title": "Accept the added work on late terms",
      "description": "Take $30,000 with $18,000 delivery costs due in month one.",
      "tradeoff": "You would need $10,000 more cash before the first bill is due.",
      "why": "The new work cuts the project surplus to $12,000 and widens the immediate cash gap to $10,000.",
      "score": 15
    }
  },
  "case-037": {
    "skill": "Count what a deposit really changes",
    "takeaway": "A deposit changes timing before it changes earnings.",
    "alternativeConditions": "A deposit can win if it protects missed slots without losing too many bookings or adding high fees. After the reminder price change, eight extra completed visits over four weeks cover the $300 fee and leave $20 extra.",
    "choices": {
      "deposit": {
        "score": 75,
        "verdict": "Reasonable move",
        "why": "A deposit can protect a missed slot, but it does not add $10 to a completed $50 visit. Check lost bookings and fees.",
        "tradeoff": "Fewer no-shows could help; fewer bookings could hurt."
      },
      "remind": {
        "score": 90,
        "verdict": "Strong move",
        "why": "One recovered visit leaves $40 before fixed costs, more than the $20 weekly fee. The small cost limits the first test.",
        "tradeoff": "Reminders may have no effect, so measure completed visits."
      },
      "double": {
        "score": 50,
        "verdict": "Risky move",
        "why": "This is a price rise to $60, not a deposit. You need to know how buyers react before assuming extra earnings.",
        "tradeoff": "A higher price may lose customers or change what they expect."
      },
      "hold": {
        "score": 60,
        "verdict": "Reasonable move",
        "why": "The current plan leaves $700 a week after listed costs. It avoids new fees and booking friction.",
        "tradeoff": "Twenty unused slots still have no revenue."
      }
    },
    "history": {
      "decision": "Choose between reminders, deposits, a higher price and the current booking rules.",
      "result": "The current plan leaves $700. Repeating the reminder trial would leave $880. Deposits with unchanged bookings and attendance would leave $800 after handling fees. None of those attendance assumptions is guaranteed.",
      "connection": "Track completed visits and lost bookings together. Collecting money earlier does not always mean collecting more.",
      "sources": []
    },
    "moneyComparison": {
      "title": "Compare the money",
      "period": "One week · USD · stated attendance scenarios",
      "rows": [
        {
          "label": "Current · 80 visits",
          "sales": 4000,
          "costs": 3300
        },
        {
          "label": "Reminders · 85 visits",
          "sales": 4250,
          "costs": 3370
        },
        {
          "label": "Deposits · 80 visits + 20 no-shows",
          "sales": 4200,
          "costs": 3400
        }
      ],
      "note": "The reminder row uses the trial’s 85 visits and original $20 fee. The deposit row assumes all 100 still book, no late-cancellation refunds, unchanged attendance and the researched $1 fee on each deposit. Attendees pay $50 total, not $60. Fixed costs are included."
    },
    "check": {
      "question": "A customer pays a $10 deposit toward a $50 visit, then shows up. What remains to pay?",
      "answerId": "40",
      "options": [
        {
          "id": "40",
          "text": "$40",
          "explanation": "The $10 is part of the $50 total. It is not an extra fee."
        },
        {
          "id": "50",
          "text": "$50",
          "explanation": "That would make the total $60, turning the deposit into an added fee."
        },
        {
          "id": "60",
          "text": "$60",
          "explanation": "That would collect $70 including the deposit, above the stated price."
        }
      ]
    },
    "terms": [
      {
        "term": "No-show",
        "meaning": "A booked customer who does not attend."
      },
      {
        "term": "Prepaid",
        "meaning": "Paid before the service is used."
      }
    ],
    "researchNotes": {
      "buyers": "Fees can reduce bookings as well as no-shows. Test both numbers.",
      "reminders": "Five extra visits leave $200 before the $20 service cost. Keep measuring.",
      "admin": "Deposits are not free to handle. Count every booking fee, not just completed visits."
    },
    "eventChange": {
      "optionId": "remind",
      "title": "Buy the $300 four-week reminder plan",
      "description": "Pay upfront and track visits for four weeks.",
      "tradeoff": "You commit more cash before knowing whether the effect will last.",
      "why": "At $40 per recovered visit, you need eight extra visits over four weeks to beat the $300 fee.",
      "score": 70
    }
  }
};
