import type { CaseDefinition } from "../types";

export const puzzleCases32: CaseDefinition[] = [
  {
    "id": "case-032",
    "version": 1,
    "number": "32",
    "format": "scenario",
    "title": "The coffee discount trap",
    "subtitle": "More cups. Less money?",
    "category": "Pricing",
    "year": "Business puzzle",
    "role": "You own a cafe.",
    "objective": "Earn more from tomorrow’s coffee sales.",
    "briefing": "You sell 100 coffees a day at $5 each. A promotion promises 50% more cups if you cut the price to $4. Your team wants a yes today. All figures are US dollars.",
    "question": "Would 50% more sales make the discount worth it?",
    "evidence": [
      {
        "id": "fact-0",
        "label": "100 cups at $5",
        "text": "A normal day sells 100 cups at $5 each.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-1",
        "label": "$2 per cup",
        "text": "Beans, milk, cups and payment fees cost $2 per cup.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "$200 per day",
        "text": "Rent and scheduled staff cost $200 a day. They do not change within 200 cups.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "150 cups forecast",
        "text": "The promoter expects 150 cups at $4. No sales are guaranteed and the promotion has no fee.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "Room for 200 cups",
        "text": "Current staff can make up to 200 cups per day. There are no other sales in this example.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "demand",
        "title": "Check the demand claim",
        "description": "Ask how the extra cup forecast was made.",
        "hours": 2,
        "evidence": [
          {
            "id": "demand-finding",
            "label": "Only 20 new buyers",
            "text": "Twenty people commit to an extra $4 cup tomorrow. The other 30 extra cups are only an estimate. All 100 regular cups would get the discount.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "bundle",
        "title": "Cost a coffee-and-cookie offer",
        "description": "Check the price, cost and room for a bundle.",
        "hours": 2,
        "evidence": [
          {
            "id": "bundle-finding",
            "label": "$6 bundle · $2.50 cost",
            "text": "A coffee and cookie could sell for $6 and cost $2.50 in total. There is enough prep time for 40 bundles; buyer demand is not known.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "target",
        "title": "Check who can use a coupon",
        "description": "Find out whether the discount can reach only new buyers.",
        "hours": 3,
        "evidence": [
          {
            "id": "target-finding",
            "label": "20 new-buyer coupons",
            "text": "The till can limit $1-off coupons to 20 first-time buyers. Staff estimate 15 redemptions; setup costs $10. Current buyers keep paying $5.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Would 50% more sales make the discount worth it?",
      "Which costs change with each extra sale?",
      "What must be true for the bigger plan to work?"
    ],
    "event": {
      "title": "The offer gets a fee",
      "text": "The promoter adds a $50 flat fee to tomorrow’s all-cup discount. It is paid even if the forecast is missed.",
      "evidence": {
        "id": "event",
        "label": "The offer gets a fee",
        "text": "The promoter adds a $50 flat fee to tomorrow’s all-cup discount. It is paid even if the forecast is missed.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "discount",
        "title": "Cut every cup to $4",
        "description": "Run the discount for tomorrow.",
        "tradeoff": "You need more than 150 cups to beat the normal day."
      },
      {
        "id": "keep",
        "title": "Keep the $5 price",
        "description": "Keep the normal offer and volume plan.",
        "tradeoff": "You may miss buyers who would only pay $4."
      },
      {
        "id": "target",
        "title": "Limit discounts to new buyers",
        "description": "Check a small new-buyer offer before launching it.",
        "tradeoff": "You still need a way to limit coupons and a budget for setup."
      },
      {
        "id": "bundle",
        "title": "Plan a higher-value bundle",
        "description": "Cost a snack bundle before offering it.",
        "tradeoff": "A higher ticket is useful only if the extra cost is lower than the extra price."
      }
    ],
    "reveal": {
      "company": "The cafe",
      "title": "More sales can leave you with the same money.",
      "history": "At full price, $500 minus $400 leaves $100. At 150 discounted cups, $600 minus $500 also leaves $100. The new $50 fee lowers that to $50.",
      "lesson": "More sales can leave you with the same money.",
      "sources": [],
      "consequences": {
        "discount": "At 150 cups you keep the same $100 after costs as 100 full-price cups. More work buys no extra earnings.",
        "keep": "The current 100 cups leave $100 after all listed costs. The forecast discount does not improve that.",
        "target": "Keep full price on regular sales while checking whether a small offer adds new buyers.",
        "bundle": "Adding value may protect the coffee price. Check snack costs and buyer interest before promising it."
      },
      "rubric": [
        "Check what a discount leaves behind",
        "Compare the same period.",
        "Count the costs that change.",
        "State what remains unknown."
      ]
    }
  },
  {
    "id": "case-033",
    "version": 1,
    "number": "33",
    "format": "scenario",
    "title": "The bakery’s biggest order",
    "subtitle": "A full oven is not always a win.",
    "category": "Operations",
    "year": "Business puzzle",
    "role": "You run a bakery.",
    "objective": "Use tomorrow’s oven space well.",
    "briefing": "A company wants 300 pastries at $2 each tomorrow. That is a $600 order. Your small oven is already busy. All figures are US dollars.",
    "question": "Do you take the whole bulk order?",
    "evidence": [
      {
        "id": "fact-0",
        "label": "500 pastries per day",
        "text": "The oven and team can make at most 500 pastries tomorrow.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-1",
        "label": "400 regular sales",
        "text": "Regular buyers are expected to buy 400 pastries at $4 each. Unsupplied sales are lost.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "$1 per pastry",
        "text": "Ingredients, packaging and sale fees cost $1 per pastry for either customer.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "$700 daily bills",
        "text": "Scheduled staff, rent and utilities cost $700 tomorrow regardless of the mix.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "300 at $2",
        "text": "The company requests 300 pastries at $2 each. No smaller order is agreed yet. All pastries use the same oven time.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "partial",
        "title": "Ask about a smaller order",
        "description": "Check whether the company can accept fewer pastries.",
        "hours": 2,
        "evidence": [
          {
            "id": "partial-finding",
            "label": "100 accepted",
            "text": "The company will accept 100 pastries at $2 each, with no penalty. The remaining order is cancelled.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "overtime",
        "title": "Price extra oven hours",
        "description": "Get a complete quote for more capacity tomorrow.",
        "hours": 2,
        "evidence": [
          {
            "id": "overtime-finding",
            "label": "200 extra spaces · $250",
            "text": "An early shift adds capacity for 200 pastries at a fixed extra cost of $250. Ingredients still cost $1 each.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "regulars",
        "title": "Check the regular orders",
        "description": "Ask how much of tomorrow’s shop demand is booked.",
        "hours": 3,
        "evidence": [
          {
            "id": "regulars-finding",
            "label": "350 paid reservations",
            "text": "There are 350 paid reservations and 50 expected walk-in purchases. Cancelling paid orders requires a full refund; no added penalty is included here.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Do you take the whole bulk order?",
      "Which costs change with each extra sale?",
      "What must be true for the bigger plan to work?"
    ],
    "event": {
      "title": "The buyer offers a better rate",
      "text": "The company raises its offer to $3.50 per pastry for all 300. The 500-pastry daily limit still holds.",
      "evidence": {
        "id": "event",
        "label": "The buyer offers a better rate",
        "text": "The company raises its offer to $3.50 per pastry for all 300. The 500-pastry daily limit still holds.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "full",
        "title": "Take all 300 at $2",
        "description": "Use the remaining 200 slots for regular buyers.",
        "tradeoff": "A bigger invoice can still mean less money after costs."
      },
      {
        "id": "partial",
        "title": "Ask to supply only 100",
        "description": "Seek a smaller order that uses the spare oven space.",
        "tradeoff": "The buyer must agree to fewer pastries before you commit."
      },
      {
        "id": "decline",
        "title": "Decline the bulk order",
        "description": "Keep all capacity for regular buyers tomorrow.",
        "tradeoff": "You leave 100 slots unused if no other buyers arrive."
      },
      {
        "id": "expand",
        "title": "Seek an extra shift first",
        "description": "Price more capacity before accepting the whole order.",
        "tradeoff": "You may lose the order while finding staff and oven time."
      }
    ],
    "reveal": {
      "company": "The bakery",
      "title": "Busy is not the same as profitable.",
      "history": "The whole $2 order leaves $200 after costs, versus $500 from regular sales alone. A 100-pastry bulk deal leaves $600. At the new $3.50 rate, taking all 300 leaves $650.",
      "lesson": "Busy is not the same as profitable.",
      "sources": [],
      "consequences": {
        "full": "You replace 200 regular pastries that leave $3 each with bulk pastries that leave only $1 each.",
        "partial": "There are 100 spare slots after 400 regular sales. Filling them can add money without losing regular orders.",
        "decline": "The normal 400 sales leave $500 after listed costs. Protecting those buyers is a sound fallback.",
        "expand": "Extra capacity could protect regular sales. But its full added cost must fit inside the bulk order’s $300 contribution."
      },
      "rubric": [
        "Count the sales a big order pushes out",
        "Compare the same period.",
        "Count the costs that change.",
        "State what remains unknown."
      ]
    }
  },
  {
    "id": "case-034",
    "version": 1,
    "number": "34",
    "format": "scenario",
    "title": "The delivery app’s big promise",
    "subtitle": "More orders. Who keeps the money?",
    "category": "Sales",
    "year": "Business puzzle",
    "role": "You run a small restaurant.",
    "objective": "Grow earnings without slowing current customers.",
    "briefing": "A delivery app offers 40 extra meals a night. It takes 30% of each sale. Your kitchen has room, but each order needs packaging too. All figures are US dollars.",
    "question": "Would you put every meal on the app?",
    "evidence": [
      {
        "id": "fact-0",
        "label": "60 direct meals at $20",
        "text": "A normal night sells 60 direct meals for $20 each.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-1",
        "label": "$8 per meal",
        "text": "Food, variable kitchen work and payment costs total $8 per meal, excluding delivery packing.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "$600 fixed each night",
        "text": "Rent and scheduled staff cost $600 a night. This stays the same up to 100 meals.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "40 extra app orders",
        "text": "The app forecasts 40 new orders at $20 each. Its fee is 30% of app sales.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "$2 packing per app meal",
        "text": "App orders need $2 of packaging each. Direct meals do not.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "100-meal limit",
        "text": "The kitchen can serve at most 100 meals a night. The 40 app orders are a forecast, not bookings.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "switching",
        "title": "Check where app buyers come from",
        "description": "Survey the app’s likely local customers.",
        "hours": 2,
        "evidence": [
          {
            "id": "switching-finding",
            "label": "15 may switch channels",
            "text": "Of the forecast 40 app buyers, 15 say they would otherwise order direct. That would mean 85 total meals, not 100. Their answers are not paid orders.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "menu",
        "title": "Check app pricing rules",
        "description": "Find out whether the app price must match the shop.",
        "hours": 2,
        "evidence": [
          {
            "id": "menu-finding",
            "label": "Separate prices allowed",
            "text": "The contract allows a $25 app price with the same 30% fee. Demand at $25 has not been tested.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "rush",
        "title": "Check the busy hour",
        "description": "Compare delivery pickup times with current service.",
        "hours": 3,
        "evidence": [
          {
            "id": "rush-finding",
            "label": "Only 10 extra peak slots",
            "text": "The busiest hour has room for only 10 extra meals. The app can cap orders in that hour; the rest of the nightly capacity is later.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Would you put every meal on the app?",
      "Which costs change with each extra sale?",
      "What must be true for the bigger plan to work?"
    ],
    "event": {
      "title": "The launch fee arrives",
      "text": "The app adds a $200 fixed fee for the first night only. The 30% sales fee still applies.",
      "evidence": {
        "id": "event",
        "label": "The launch fee arrives",
        "text": "The app adds a $200 fixed fee for the first night only. The 30% sales fee still applies.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "all",
        "title": "Join for all 40 forecast orders",
        "description": "List the $20 meals and accept up to the kitchen limit.",
        "tradeoff": "Buyer switching or peak-time crowding could erase that gain."
      },
      {
        "id": "direct",
        "title": "Keep direct orders only",
        "description": "Decline the app for now.",
        "tradeoff": "You give up a possible $160 nightly gain if all app orders are truly extra."
      },
      {
        "id": "limit",
        "title": "Join with a small order cap",
        "description": "Check fees and cap app orders around direct service.",
        "tradeoff": "A small trial earns less and any launch fee still needs to be covered."
      },
      {
        "id": "discount",
        "title": "Offer $15 meals on the app",
        "description": "Cut app prices to attract more buyers.",
        "tradeoff": "The kitchen has limited slots. Filling them cheaply can crowd out better sales."
      }
    ],
    "reveal": {
      "company": "The restaurant",
      "title": "A new sales channel can take most of the sale.",
      "history": "Before the launch fee, 40 extra app meals raise money left from $120 to $280. On the first night with the fee, only $80 remains, below the direct-only plan.",
      "lesson": "A new sales channel can take most of the sale.",
      "sources": [],
      "consequences": {
        "all": "Each new app meal leaves $4 after its fee, food and packing. Forty truly extra orders add $160 before fixed costs.",
        "direct": "The current 60 direct meals leave $120 after costs. You avoid a lower-margin channel.",
        "limit": "A cap limits the risk to current service while testing whether the orders are new.",
        "discount": "A $15 app meal leaves just $0.50 after the $4.50 fee, $8 meal cost and $2 packing."
      },
      "rubric": [
        "Count channel fees before chasing orders",
        "Compare the same period.",
        "Count the costs that change.",
        "State what remains unknown."
      ]
    }
  },
  {
    "id": "case-035",
    "version": 1,
    "number": "35",
    "format": "scenario",
    "title": "Free shipping isn’t free",
    "subtitle": "The cart gets bigger. Does your cut?",
    "category": "Pricing",
    "year": "Business puzzle",
    "role": "You run an online shop.",
    "objective": "Choose a shipping offer that pays for itself.",
    "briefing": "Your shop wants to remove its $5 shipping charge. A marketer predicts more orders. You also have a second idea: free shipping only on larger baskets. All figures are US dollars.",
    "question": "Which shipping offer should you choose?",
    "evidence": [
      {
        "id": "fact-0",
        "label": "100 orders at $30",
        "text": "Each week, 100 customers buy $30 of goods and pay $5 shipping.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-1",
        "label": "Goods cost 60%",
        "text": "Goods cost 60% of their selling price. There are no returns or payment fees in this simplified example.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "$5 to ship an order",
        "text": "Packing and delivery together cost $5 per order, even for the larger baskets here.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "$500 weekly bills",
        "text": "Fixed shop costs are $500 each week.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "130 orders with free shipping",
        "text": "The forecast for free shipping on all orders is 130 orders, still with $30 of goods each.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "Threshold offer forecast",
        "text": "With free shipping from $40, the forecast stays at 100 orders: 40 baskets rise to $40 and 60 remain at $30 plus $5 shipping.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "demand",
        "title": "Check the growth forecast",
        "description": "Review the basis for 30 extra orders.",
        "hours": 2,
        "evidence": [
          {
            "id": "demand-finding",
            "label": "Clicks, not checkouts",
            "text": "The forecast comes from clicks on an ad. No one completed a purchase in that test.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "basket",
        "title": "Check the larger baskets",
        "description": "Test whether customers add useful items.",
        "hours": 2,
        "evidence": [
          {
            "id": "basket-finding",
            "label": "25 of 40 choose add-ons",
            "text": "Of 40 surveyed buyers, 25 say they would add $10 of goods to get free delivery; 15 would keep their $30 order. No purchases were made.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "rate",
        "title": "Get a carrier quote",
        "description": "Ask what delivery would cost at 130 orders.",
        "hours": 3,
        "evidence": [
          {
            "id": "rate-finding",
            "label": "$3 delivery from 120 orders",
            "text": "A carrier offers $3 total packing and delivery per order if the week reaches 120 orders. Below that, the cost stays $5. No fixed extra fee applies.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Which shipping offer should you choose?",
      "Which costs change with each extra sale?",
      "What must be true for the bigger plan to work?"
    ],
    "event": {
      "title": "A price increase from the carrier",
      "text": "Your current carrier raises packing and delivery to $7 per order next week unless you arrange another carrier. The customer’s paid shipping charge stays $5.",
      "evidence": {
        "id": "event",
        "label": "A price increase from the carrier",
        "text": "Your current carrier raises packing and delivery to $7 per order next week unless you arrange another carrier. The customer’s paid shipping charge stays $5.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "all",
        "title": "Make every order ship free",
        "description": "Plan for 130 orders at $30 each.",
        "tradeoff": "Extra orders help only if they cover the shipping you now pay."
      },
      {
        "id": "threshold",
        "title": "Offer free shipping from $40",
        "description": "Use the larger-basket forecast.",
        "tradeoff": "The offer may attract buyers, but it is not an earnings gain at these assumptions."
      },
      {
        "id": "keep",
        "title": "Keep the $5 shipping charge",
        "description": "Keep the current offer and 100-order plan.",
        "tradeoff": "Some buyers may leave because of the delivery charge."
      },
      {
        "id": "raise",
        "title": "Raise the free-shipping threshold",
        "description": "Cost a threshold above $40 before launching.",
        "tradeoff": "A higher threshold may persuade fewer customers to add items."
      }
    ],
    "reveal": {
      "company": "The online shop",
      "title": "Free perks must be paid for somewhere.",
      "history": "Paid shipping leaves $700. Free shipping on every order leaves $410. The $40 threshold leaves $660. A bigger average basket alone does not prove a better offer.",
      "lesson": "Free perks must be paid for somewhere.",
      "sources": [],
      "consequences": {
        "all": "At the forecast volume, free shipping leaves $410 after listed costs, below the current $700.",
        "threshold": "The forecast leaves $660 after costs. Bigger baskets help, but each $10 add-on leaves only $4 to cover $5 shipping.",
        "keep": "The current plan leaves $700 a week after listed costs, more than either proposed free-shipping forecast.",
        "raise": "You need more than $12.50 of added goods at a 40% margin to cover a $5 delivery subsidy."
      },
      "rubric": [
        "Price the cost of a free perk",
        "Compare the same period.",
        "Count the costs that change.",
        "State what remains unknown."
      ]
    }
  },
  {
    "id": "case-036",
    "version": 1,
    "number": "36",
    "format": "scenario",
    "title": "The profitable job that drains your bank",
    "subtitle": "A signed deal cannot pay Friday’s wages.",
    "category": "Cash flow",
    "year": "Business puzzle",
    "role": "You run a small design agency.",
    "objective": "Take a new project only if you can pay the team.",
    "briefing": "A client offers a $30,000 project. The work takes one month, but the invoice is paid at the end of month three. Your bank account cannot wait that long. All figures are US dollars.",
    "question": "How would you structure this deal?",
    "evidence": [
      {
        "id": "fact-0",
        "label": "$30,000 project fee",
        "text": "The client pays the full fee at the end of month three. There is no money at signing under the offer.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-1",
        "label": "$12,000 delivery cost",
        "text": "Freelancers must be paid $12,000 at the end of month one. This is the entire added project cost.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "$8,000 in the bank",
        "text": "You have $8,000 cash available today.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "Other work breaks even",
        "text": "Existing work pays all fixed bills on time over these three months. It adds no spare cash and cannot fund this job.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "No funding agreed",
        "text": "No loan or changed payment terms have been agreed. There is room in the team’s schedule for this project.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "deposit",
        "title": "Ask for an upfront payment",
        "description": "Check whether the client will pay part at signing.",
        "hours": 2,
        "evidence": [
          {
            "id": "deposit-finding",
            "label": "40% deposit accepted",
            "text": "The client will pay $12,000 at signing and $18,000 at the end of month three. No discount is required.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "loan",
        "title": "Price short-term funding",
        "description": "Get terms to cover the cash gap.",
        "hours": 2,
        "evidence": [
          {
            "id": "loan-finding",
            "label": "$5,000 loan · $500 fee",
            "text": "A lender offers $5,000 now. Repayment of $5,500 is due at the end of month three after the client’s scheduled payment. Approval is available today.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "credit",
        "title": "Check the client’s payment record",
        "description": "Review recent invoices with the client’s suppliers.",
        "hours": 3,
        "evidence": [
          {
            "id": "credit-finding",
            "label": "Two payments were late",
            "text": "Two of the last five supplier invoices were paid a month late. This is a small sample, not a forecast or a guarantee.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "How would you structure this deal?",
      "Which costs change with each extra sale?",
      "What must be true for the bigger plan to work?"
    ],
    "event": {
      "title": "The client adds a revision round",
      "text": "The client keeps the fee at $30,000 but asks for extra work costing $6,000, payable at the end of month one. The fee is still due at the end of month three.",
      "evidence": {
        "id": "event",
        "label": "The client adds a revision round",
        "text": "The client keeps the fee at $30,000 but asks for extra work costing $6,000, payable at the end of month one. The fee is still due at the end of month three.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "accept",
        "title": "Accept the original payment terms",
        "description": "Start work with the full fee due in month three.",
        "tradeoff": "Expected profit does not fill the bank before payday."
      },
      {
        "id": "deposit",
        "title": "Require enough upfront cash",
        "description": "Ask for at least $12,000 at signing before starting.",
        "tradeoff": "The client may reject the new terms."
      },
      {
        "id": "loan",
        "title": "Arrange a loan before accepting",
        "description": "Price and secure funding before starting the project.",
        "tradeoff": "Debt adds a bill even if the client pays late."
      },
      {
        "id": "decline",
        "title": "Decline without safer terms",
        "description": "Turn down the job if payment terms cannot change.",
        "tradeoff": "You lose a potentially useful $18,000 project surplus."
      }
    ],
    "reveal": {
      "company": "The design agency",
      "title": "Good profit does not always mean cash in time.",
      "history": "The original job leaves $18,000 over three months but runs $4,000 short at the first payday. A deposit changes cash timing, not the total project surplus. The $500 loan fee lowers that surplus to $17,500.",
      "lesson": "Good profit does not always mean cash in time.",
      "sources": [],
      "consequences": {
        "accept": "The project has an $18,000 surplus, but you are $4,000 short when the $12,000 delivery bill falls due.",
        "deposit": "A $12,000 deposit covers the delivery bill and protects your $8,000 cash. Do not start until the terms are agreed.",
        "loan": "A loan could fill the $4,000 timing gap while keeping the sale. You need its cost and repayment date first.",
        "decline": "Without new funding or earlier payment, you cannot cover the delivery bill. Passing protects cash for other work."
      },
      "rubric": [
        "Separate profit from cash timing",
        "Compare the same period.",
        "Count the costs that change.",
        "State what remains unknown."
      ]
    }
  },
  {
    "id": "case-037",
    "version": 1,
    "number": "37",
    "format": "scenario",
    "title": "The salon’s empty chairs",
    "subtitle": "A full booking sheet can hide lost sales.",
    "category": "Operations",
    "year": "Business puzzle",
    "role": "You own a small salon.",
    "objective": "Reduce empty slots without charging twice for a visit.",
    "briefing": "Your salon books 100 visits a week, but 20 customers do not show up. A $10 booking deposit sounds like extra income. Is that really the point? All figures are US dollars.",
    "question": "Which booking rule would you choose?",
    "evidence": [
      {
        "id": "fact-0",
        "label": "100 booked · 80 attend",
        "text": "Each completed visit costs $50. No-show slots cannot be filled at short notice.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-1",
        "label": "$10 per completed visit",
        "text": "Products, payment fees and extra staff time cost $10 per completed visit. No-shows use none of these.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "$2,500 weekly fixed costs",
        "text": "Rent and scheduled staff cost $2,500 a week regardless of attendance.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "$10 deposit proposal",
        "text": "The deposit counts toward the $50 visit price. It is kept if a buyer misses the visit and does not cancel on time.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "Demand is not known",
        "text": "We do not know how many buyers would book with a deposit or how it would change attendance.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "Reminders cost $20 a week",
        "text": "A reminder service costs $20 weekly. It would need to bring back just one missed visit to cover its price.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "buyers",
        "title": "Ask buyers about deposits",
        "description": "Check whether the proposed rule affects bookings.",
        "hours": 2,
        "evidence": [
          {
            "id": "buyers-finding",
            "label": "90 willing to book",
            "text": "Ninety of 100 recent customers say they would book with a $10 deposit. This is stated interest, not actual booking or attendance data.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "reminders",
        "title": "Review reminder trial data",
        "description": "Check a small trial of appointment texts.",
        "hours": 2,
        "evidence": [
          {
            "id": "reminders-finding",
            "label": "Five more completed visits",
            "text": "A one-week trial had 85 completed visits from 100 bookings, compared with the usual 80. It cost $20; one week does not prove the effect repeats.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "admin",
        "title": "Price the deposit handling",
        "description": "Check the payment and cancellation workflow.",
        "hours": 3,
        "evidence": [
          {
            "id": "admin-finding",
            "label": "$1 fee per deposit",
            "text": "The booking provider charges $1 per deposit collected, including deposits later refunded. The $10 visit cost does not include this fee.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Which booking rule would you choose?",
      "Which costs change with each extra sale?",
      "What must be true for the bigger plan to work?"
    ],
    "event": {
      "title": "The reminder plan gets dearer",
      "text": "The service now requires a $300 prepaid, nonrefundable four-week plan instead of $20 per week. The attendance benefit is still uncertain.",
      "evidence": {
        "id": "event",
        "label": "The reminder plan gets dearer",
        "text": "The service now requires a $300 prepaid, nonrefundable four-week plan instead of $20 per week. The attendance benefit is still uncertain.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "deposit",
        "title": "Require a $10 booking deposit",
        "description": "Explain the cancellation rule and apply the deposit toward each visit.",
        "tradeoff": "Fewer no-shows could help; fewer bookings could hurt."
      },
      {
        "id": "remind",
        "title": "Start the $20 reminder plan",
        "description": "Try reminders and track completed visits.",
        "tradeoff": "Reminders may have no effect, so measure completed visits."
      },
      {
        "id": "double",
        "title": "Add $10 on top of every visit",
        "description": "Charge a nonrefundable booking fee plus the $50 visit price.",
        "tradeoff": "A higher price may lose customers or change what they expect."
      },
      {
        "id": "hold",
        "title": "Keep booking without a change",
        "description": "Keep the current rules and normal attendance.",
        "tradeoff": "Twenty unused slots still have no revenue."
      }
    ],
    "reveal": {
      "company": "The salon",
      "title": "A deposit changes timing before it changes earnings.",
      "history": "The current plan leaves $700. Repeating the reminder trial would leave $880. Deposits with unchanged bookings and attendance would leave $800 after handling fees. None of those attendance assumptions is guaranteed.",
      "lesson": "A deposit changes timing before it changes earnings.",
      "sources": [],
      "consequences": {
        "deposit": "A deposit can protect a missed slot, but it does not add $10 to a completed $50 visit. Check lost bookings and fees.",
        "remind": "One recovered visit leaves $40 before fixed costs, more than the $20 weekly fee. The small cost limits the first test.",
        "double": "This is a price rise to $60, not a deposit. You need to know how buyers react before assuming extra earnings.",
        "hold": "The current plan leaves $700 a week after listed costs. It avoids new fees and booking friction."
      },
      "rubric": [
        "Count what a deposit really changes",
        "Compare the same period.",
        "Count the costs that change.",
        "State what remains unknown."
      ]
    }
  }
];
