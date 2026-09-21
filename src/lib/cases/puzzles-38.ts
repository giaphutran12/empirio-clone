import type { CaseDefinition } from "../types";

export const puzzleCases38: CaseDefinition[] = [
  {
    "id": "case-038",
    "version": 1,
    "number": "38",
    "format": "scenario",
    "title": "A year of cash today",
    "subtitle": "Separate cash today from a year of income",
    "category": "Pricing",
    "year": "Business puzzle",
    "role": "You run Cloud Desk.",
    "objective": "Separate cash today from a year of income",
    "briefing": "Your software has 100 paying customers. A partner says a cheap annual plan will fill the bank now. You must still serve those customers all year. Decide the offer for their next renewal.",
    "question": "How should customers pay for the next year?",
    "evidence": [
      {
        "id": "fact-1",
        "label": "100 customers · $100 a month",
        "text": "All 100 are current customers. No one has agreed to a new annual offer yet.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "$40 per customer each month",
        "text": "Hosting and support cost $40 per active customer per month.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "$3,000 in fixed monthly bills",
        "text": "These bills stay the same under every offer. There are no other costs in this exercise.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "$900 for a full year",
        "text": "The proposed deal replaces twelve $100 payments with one $900 payment.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "$6,000 in the bank",
        "text": "The current monthly plan is profitable at 100 customers. The business does not need an emergency cash raise.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "renewals",
        "title": "Check who would pay early",
        "description": "Ask current customers about annual terms.",
        "hours": 2,
        "evidence": [
          {
            "id": "renewals-finding",
            "label": "35 choose the $1,080 offer",
            "text": "In a renewal survey, 35 customers prefer $1,080 upfront and 65 prefer monthly payments. These are preferences, not paid renewals.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "support",
        "title": "Audit support use",
        "description": "Check whether service costs vary by customer.",
        "hours": 2,
        "evidence": [
          {
            "id": "support-finding",
            "label": "20 customers use half the support",
            "text": "Twenty heavy users account for half of the support portion of costs. We do not yet have a fair usage limit they would accept.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "cancellations",
        "title": "Review monthly cancellations",
        "description": "Look at the last renewal group.",
        "hours": 3,
        "evidence": [
          {
            "id": "cancellations-finding",
            "label": "10 of 100 left within a year",
            "text": "In the previous group, ten customers left after six paid months. That group paid for 1,140 customer-months, not 1,200. Future retention is unknown.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Compare the money over the same time.",
      "What could change this choice?",
      "Which cost is easy to miss?"
    ],
    "event": {
      "title": "Sell $900 years with higher service costs",
      "text": "A supplier change adds $10 per active customer per month to every plan. The $900 annual offer would still promise a full year of service.",
      "evidence": {
        "id": "event",
        "label": "Sell $900 years with higher service costs",
        "text": "A supplier change adds $10 per active customer per month to every plan. The $900 annual offer would still promise a full year of service.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "cheap",
        "title": "Make everyone pay $900 a year",
        "description": "Replace monthly billing with the deeply discounted offer.",
        "tradeoff": "You collect sooner but cut each full-year sale by $300."
      },
      {
        "id": "choice",
        "title": "Offer $1,080 yearly or $100 monthly",
        "description": "Give a modest discount without forcing everyone to pay early.",
        "tradeoff": "Some cash comes sooner; each annual buyer gives up $120 of sales."
      },
      {
        "id": "monthly",
        "title": "Keep $100 monthly",
        "description": "Keep the current offer for this round.",
        "tradeoff": "Full-year income is higher if people stay, but they can leave sooner."
      },
      {
        "id": "upfront",
        "title": "Require $1,200 upfront",
        "description": "Keep the full-year price but require one payment.",
        "tradeoff": "You keep the price, but customers may refuse the large bill."
      }
    ],
    "reveal": {
      "company": "Cloud Desk",
      "title": "Early cash is not extra income.",
      "history": "This is an authored business puzzle. The numbers are scenario inputs, not a real company’s results.",
      "lesson": "Early cash is not extra income.",
      "sources": [],
      "consequences": {
        "cheap": "At full retention, the offer cuts yearly sales from $120,000 to $90,000 while $84,000 in costs stay.",
        "choice": "A smaller discount buys earlier cash while keeping a monthly option. Check how many customers actually choose it.",
        "monthly": "The current plan covers its costs. You can afford to protect the price while learning about annual demand.",
        "upfront": "The arithmetic works if all 100 agree. Nothing yet shows they will accept a $1,200 bill at once."
      },
      "rubric": [
        "Separate cash today from a year of income",
        "Compare the same time period.",
        "Count the stated costs and check the assumptions."
      ]
    }
  },
  {
    "id": "case-039",
    "version": 1,
    "number": "39",
    "format": "scenario",
    "title": "A million in sales. Whose money?",
    "subtitle": "Count the platform’s fee, not sellers’ sales",
    "category": "Growth",
    "year": "Business puzzle",
    "role": "You run Market Lane.",
    "objective": "Count the platform’s fee, not sellers’ sales",
    "briefing": "Your marketplace handles $100,000 in orders each month. An ad agency wants to double that number. Most of that money belongs to sellers, so you need to check what the platform keeps.",
    "question": "Which growth plan should you fund?",
    "evidence": [
      {
        "id": "fact-1",
        "label": "1,000 orders · $100 each",
        "text": "Current monthly order value is $100,000. Sellers receive 90%; the platform keeps a 10% fee.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "$5 per order to run the service",
        "text": "Payments and customer help cost the platform $5 for each order.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "$3,000 in fixed monthly bills",
        "text": "All other platform costs total $3,000 per month.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "$6,000 ad plan",
        "text": "The agency targets 1,000 extra $100 orders next month. The extra orders are not guaranteed.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "A 12% fee is possible",
        "text": "You may raise the platform fee from 10% to 12%. Seller acceptance is not yet known.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "sellers",
        "title": "Ask sellers about a higher fee",
        "description": "Check how the proposed fee affects seller plans.",
        "hours": 2,
        "evidence": [
          {
            "id": "sellers-finding",
            "label": "100 orders may leave",
            "text": "Sellers responsible for 100 monthly orders say they would leave at 12%. The others say they would stay; nobody has signed new terms.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "ads",
        "title": "Check the agency’s forecast",
        "description": "Ask what its growth promise covers.",
        "hours": 2,
        "evidence": [
          {
            "id": "ads-finding",
            "label": "No minimum order guarantee",
            "text": "The agency charges the full $6,000 even if it brings fewer than 1,000 extra orders. Its estimate comes from another marketplace.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "repeat",
        "title": "Check repeat buying",
        "description": "Review the last batch of new customers.",
        "hours": 3,
        "evidence": [
          {
            "id": "repeat-finding",
            "label": "One in four came back",
            "text": "Of 400 first-time buyers from the last campaign, 100 made one extra order within the next three months. There is no longer record.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Compare the money over the same time.",
      "What could change this choice?",
      "Which cost is easy to miss?"
    ],
    "event": {
      "title": "Buy the now-$12,000 ad package",
      "text": "The agency doubles its quote to $12,000 for the same target of 1,000 extra orders next month.",
      "evidence": {
        "id": "event",
        "label": "Buy the now-$12,000 ad package",
        "text": "The agency doubles its quote to $12,000 for the same target of 1,000 extra orders next month.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "ads",
        "title": "Buy the $6,000 ad package",
        "description": "Aim for 2,000 total orders next month.",
        "tradeoff": "More seller sales may leave the platform with less money."
      },
      {
        "id": "hold",
        "title": "Keep the current order flow",
        "description": "Hold ads and the fee steady this month.",
        "tradeoff": "You keep a working margin but pass on faster growth."
      },
      {
        "id": "fee",
        "title": "Raise the fee to 12%",
        "description": "Charge sellers a larger share on each order.",
        "tradeoff": "Each order pays more if sellers stay."
      },
      {
        "id": "coupon",
        "title": "Give $10 off every current order",
        "description": "Fund the discount yourself to encourage loyalty.",
        "tradeoff": "The $10 reward uses the whole fee before service costs."
      }
    ],
    "reveal": {
      "company": "Market Lane",
      "title": "Count the money you keep, not money passing through.",
      "history": "This is an authored business puzzle. The numbers are scenario inputs, not a real company’s results.",
      "lesson": "Count the money you keep, not money passing through.",
      "sources": [],
      "consequences": {
        "ads": "At the full target, the ad plan leaves $1,000 after stated costs. The current business leaves $2,000.",
        "hold": "Current fees cover service and fixed costs. You avoid a growth plan that earns less even at its target.",
        "fee": "At unchanged orders, a 12% fee leaves $4,000. Check seller departures before counting that gain.",
        "coupon": "The platform earns $10 per order and would give all $10 away. Service costs and fixed bills remain."
      },
      "rubric": [
        "Count the platform’s fee, not sellers’ sales",
        "Compare the same time period.",
        "Count the stated costs and check the assumptions."
      ]
    }
  },
  {
    "id": "case-040",
    "version": 1,
    "number": "40",
    "format": "scenario",
    "title": "The sales that come back",
    "subtitle": "Count refunds before calling a sale a win",
    "category": "Operations",
    "year": "Business puzzle",
    "role": "You run Fit Box.",
    "objective": "Count refunds before calling a sale a win",
    "briefing": "Your online store sells custom-fit items. Sales look strong, but returned items cannot be sold again. Choose next month’s plan before placing a new stock order.",
    "question": "What should you do before ordering more stock?",
    "evidence": [
      {
        "id": "fact-1",
        "label": "100 orders · $100 each",
        "text": "This is the expected monthly volume at the current offer. Use it as the comparison, not a sales guarantee.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "40 in 100 orders come back",
        "text": "Recent batches have a 40% return rate. Each return gets a full $100 refund; the item cannot be resold.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "$50 stock + $10 shipping per order",
        "text": "These costs apply to every order, including returns.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "$10 to handle each return",
        "text": "Return handling is extra. Other fixed monthly bills total $1,000.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "$500 fit-guide proposal",
        "text": "A new sizing guide costs $500 once. The vendor targets a 20% return rate; that improvement has not been measured.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "reasons",
        "title": "Read the return reasons",
        "description": "Find which complaints cause the returns.",
        "hours": 2,
        "evidence": [
          {
            "id": "reasons-finding",
            "label": "30 of 40 cite poor fit",
            "text": "Of the last 40 returns, 30 cited fit and ten cited quality. A sizing guide may address some, but not all, returns.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "guide",
        "title": "Check the guide vendor’s proof",
        "description": "Ask for results on this product.",
        "hours": 2,
        "evidence": [
          {
            "id": "guide-finding",
            "label": "No test on your items",
            "text": "The vendor has not tested the guide on your products. Its 20% target is an estimate based on a different store.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "supplier",
        "title": "Check smaller stock orders",
        "description": "Ask whether you can avoid another full batch.",
        "hours": 3,
        "evidence": [
          {
            "id": "supplier-finding",
            "label": "Ten units at the same unit price",
            "text": "The supplier will sell a ten-unit batch at $50 each, with no order fee. You may use it for a later fit test.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Compare the money over the same time.",
      "What could change this choice?",
      "Which cost is easy to miss?"
    ],
    "event": {
      "title": "Repeat with higher return handling",
      "text": "The carrier raises handling from $10 to $15 for each returned item next month. Keep the same 100-order plan and expected 40 returns.",
      "evidence": {
        "id": "event",
        "label": "Repeat with higher return handling",
        "text": "The carrier raises handling from $10 to $15 for each returned item next month. Keep the same 100-order plan and expected 40 returns.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "guide",
        "title": "Buy the guide and order 100 more",
        "description": "Spend $500 and aim for returns to fall to 20%.",
        "tradeoff": "That target would help, but it is not yet proven."
      },
      {
        "id": "repeat",
        "title": "Repeat the current 100-order plan",
        "description": "Keep prices, stock and return terms unchanged.",
        "tradeoff": "The headline sales hide refunds and wasted stock."
      },
      {
        "id": "pause",
        "title": "Pause new stock and fix the fit issue",
        "description": "Do not buy the next batch until you have a credible fix.",
        "tradeoff": "You still owe fixed bills while selling nothing new."
      },
      {
        "id": "restrict",
        "title": "Tighten return terms before restocking",
        "description": "Check legal terms and buyer response before changing the offer.",
        "tradeoff": "Fewer refunds could come with fewer buyers; you cannot assume both stay favorable."
      }
    ],
    "reveal": {
      "company": "Fit Box",
      "title": "A refunded order still has costs.",
      "history": "This is an authored business puzzle. The numbers are scenario inputs, not a real company’s results.",
      "lesson": "A refunded order still has costs.",
      "sources": [],
      "consequences": {
        "guide": "At the vendor’s target, the first month leaves just $300 after all stated costs. A small miss can erase that.",
        "repeat": "After 40 refunds, only $6,000 of sales remains. Stock, delivery, returns and fixed bills cost $7,400.",
        "pause": "Pause a plan expected to lose $1,400. You still pay $1,000 in fixed bills, so use the pause to find a fix.",
        "restrict": "Different terms may change buyer behavior. They do not fix poor fit, and no numbers yet show a better result."
      },
      "rubric": [
        "Count refunds before calling a sale a win",
        "Compare the same time period.",
        "Count the stated costs and check the assumptions."
      ]
    }
  },
  {
    "id": "case-041",
    "version": 1,
    "number": "41",
    "format": "scenario",
    "title": "The expensive product earns less",
    "subtitle": "Earn more from the hour you cannot replace",
    "category": "Operations",
    "year": "Business puzzle",
    "role": "You run Bench Works.",
    "objective": "Earn more from the hour you cannot replace",
    "briefing": "One finishing machine limits your workshop. The premium item leaves more dollars per sale, so your sales lead wants to make only premium items. Check what each uses up.",
    "question": "What should fill next week’s machine time?",
    "evidence": [
      {
        "id": "fact-1",
        "label": "60 machine hours next week",
        "text": "Normal staffing can run the finishing machine for 60 hours. No other step limits output.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "Basic · $80 sale, $40 direct cost",
        "text": "One basic item uses one machine hour. There are firm orders for up to 100 units next week.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "Premium · $140 sale, $60 direct cost",
        "text": "One premium item uses three machine hours. There are firm orders for up to 20 units next week.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "$1,000 in weekly fixed costs",
        "text": "These costs stay the same across the plans. Direct costs include materials and normal labor.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "20 overtime hours cost $600 extra",
        "text": "Trained staff and safe machine capacity are available for those extra hours. The overtime charge is on top of direct and fixed costs.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "hours",
        "title": "Check actual machine times",
        "description": "Review a timed sample of both products.",
        "hours": 2,
        "evidence": [
          {
            "id": "hours-finding",
            "label": "The one-hour and three-hour timings hold",
            "text": "Ten basic items used ten hours. Ten premium items used 30 hours. No rework was needed in the sample.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "orders",
        "title": "Confirm delivery terms",
        "description": "Check whether waiting carries a penalty.",
        "hours": 2,
        "evidence": [
          {
            "id": "orders-finding",
            "label": "No penalty for unfilled orders this week",
            "text": "Buyers accept a later slot for units you do not make this week. There is no late fee in this scenario; later repeat orders are unknown.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "supplier",
        "title": "Ask about speeding up premium work",
        "description": "Price a fixture that could shorten the slow step.",
        "hours": 3,
        "evidence": [
          {
            "id": "supplier-finding",
            "label": "A $2,000 fixture may save one hour",
            "text": "A supplier quotes $2,000 for a fixture that targets two hours per premium item. It cannot arrive this week and has not been tested.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Compare the money over the same time.",
      "What could change this choice?",
      "Which cost is easy to miss?"
    ],
    "event": {
      "title": "Buy overtime at the new $1,000 price",
      "text": "The overtime team raises the 20-hour charge from $600 to $1,000. Use all 80 hours for basic items.",
      "evidence": {
        "id": "event",
        "label": "Buy overtime at the new $1,000 price",
        "text": "The overtime team raises the 20-hour charge from $600 to $1,000. Use all 80 hours for basic items.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "premium",
        "title": "Make 20 premium items",
        "description": "Use all 60 hours on the higher-price item.",
        "tradeoff": "Each sale leaves more dollars, but it takes three times as long."
      },
      {
        "id": "split",
        "title": "Make 30 basic and 10 premium",
        "description": "Split machine hours equally between the products.",
        "tradeoff": "A balanced mix is not always the best use of scarce time."
      },
      {
        "id": "basic",
        "title": "Make 60 basic items",
        "description": "Use normal hours on the stronger return per hour.",
        "tradeoff": "You delay premium orders this week."
      },
      {
        "id": "overtime",
        "title": "Make 80 basic items with overtime",
        "description": "Buy 20 more hours for $600 and fill them with basic orders.",
        "tradeoff": "The extra profit is only $200 at the original overtime price."
      }
    ],
    "reveal": {
      "company": "Bench Works",
      "title": "Check what you earn from the resource that runs out.",
      "history": "This is an authored business puzzle. The numbers are scenario inputs, not a real company’s results.",
      "lesson": "Check what you earn from the resource that runs out.",
      "sources": [],
      "consequences": {
        "premium": "Premium leaves $80 per item but uses three hours. Basic leaves $40 in just one hour.",
        "split": "The mix leaves $1,000 after fixed costs. Sixty basic items leave $1,400 using the same hours.",
        "basic": "Basic earns $40 per machine hour versus about $26.67 for premium. Normal hours leave $1,400.",
        "overtime": "At the stated $600 overtime price, 80 basic items leave $1,600. That is $200 more than normal hours."
      },
      "rubric": [
        "Earn more from the hour you cannot replace",
        "Compare the same time period.",
        "Count the stated costs and check the assumptions."
      ]
    }
  },
  {
    "id": "case-042",
    "version": 1,
    "number": "42",
    "format": "scenario",
    "title": "Six cheaper jobs beat four",
    "subtitle": "Count travel time as paid work",
    "category": "Operations",
    "year": "Business puzzle",
    "role": "You run Bright Route.",
    "objective": "Count travel time as paid work",
    "briefing": "Your cleaning crew spends half its day driving. A nearby apartment block offers six smaller-priced jobs in one place. Your manager worries that a lower price means a worse day.",
    "question": "Which daily schedule should you sell?",
    "evidence": [
      {
        "id": "fact-1",
        "label": "One crew · eight paid hours",
        "text": "The crew costs $25 per hour, including travel. Each cleaning job takes one hour.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "Four scattered jobs · $100 each",
        "text": "Travel uses four hours in total, including trips from and back to base. Cleaning uses the other four.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "Six nearby jobs · $80 each",
        "text": "The apartment block offers six jobs. Total travel is two hours, so all six fit into the eight-hour day.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "$10 supplies per job",
        "text": "Other fixed costs total $100 per day. There are no other costs in this exercise.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "A second crew costs $300 a day",
        "text": "An agency can cover another scattered route of four jobs. It adds $80 in daily vehicle cost plus $10 supplies per job.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "route",
        "title": "Time the apartment route",
        "description": "Check travel and access on the new route.",
        "hours": 2,
        "evidence": [
          {
            "id": "route-finding",
            "label": "Two hours with keys ready",
            "text": "A route check fits within two travel hours if keys are ready at each visit. One locked door could delay later jobs.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "buyers",
        "title": "Confirm the apartment buyers",
        "description": "Check which jobs are booked.",
        "hours": 2,
        "evidence": [
          {
            "id": "buyers-finding",
            "label": "Six jobs booked at $80",
            "text": "Six households agree to the $80 price for the first day. None has promised a repeat booking.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "agency",
        "title": "Review the second-crew quote",
        "description": "Confirm staffing and vehicle charges.",
        "hours": 3,
        "evidence": [
          {
            "id": "agency-finding",
            "label": "The $300 crew fee includes eight hours",
            "text": "The agency confirms the $300 daily crew fee plus the separate $80 vehicle cost. No minimum week is required.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Compare the money over the same time.",
      "What could change this choice?",
      "Which cost is easy to miss?"
    ],
    "event": {
      "title": "Take four apartment jobs during the closure",
      "text": "A road closure raises total travel for the apartment route to four hours. Only four $80 jobs now fit in eight paid hours. Scattered routes are unaffected.",
      "evidence": {
        "id": "event",
        "label": "Take four apartment jobs during the closure",
        "text": "A road closure raises total travel for the apartment route to four hours. Only four $80 jobs now fit in eight paid hours. Scattered routes are unaffected.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "scattered",
        "title": "Keep four $100 jobs",
        "description": "Keep the current scattered route.",
        "tradeoff": "The high price must also pay for four hours of travel."
      },
      {
        "id": "discount",
        "title": "Offer six nearby jobs at $70",
        "description": "Cut the price further for the same six jobs.",
        "tradeoff": "You give up $60 without adding a seventh slot."
      },
      {
        "id": "second",
        "title": "Run two scattered routes",
        "description": "Keep your crew and add the agency crew for another four jobs.",
        "tradeoff": "More sales bring another crew, vehicle and supply bill."
      },
      {
        "id": "dense",
        "title": "Take six nearby jobs at $80",
        "description": "Group the work so more of the paid day is spent cleaning.",
        "tradeoff": "All six jobs and the short travel time must hold."
      }
    ],
    "reveal": {
      "company": "Bright Route",
      "title": "An empty drive can cost as much as a paid job.",
      "history": "This is an authored business puzzle. The numbers are scenario inputs, not a real company’s results.",
      "lesson": "An empty drive can cost as much as a paid job.",
      "sources": [],
      "consequences": {
        "scattered": "Four jobs leave $60 after the crew, supplies and fixed bills. The price is higher, but travel uses half the day.",
        "discount": "Six $70 jobs leave $60, the same as the current route. You do more jobs without keeping more money.",
        "second": "Two routes bring $800 but cost $760. That leaves less than the single current route.",
        "dense": "Six $80 jobs leave $120 after all stated costs. Less travel makes the lower-priced jobs pay better."
      },
      "rubric": [
        "Count travel time as paid work",
        "Compare the same time period.",
        "Count the stated costs and check the assumptions."
      ]
    }
  },
  {
    "id": "case-043",
    "version": 1,
    "number": "43",
    "format": "scenario",
    "title": "More tools. More empty shelves?",
    "subtitle": "Fill spare capacity before buying more",
    "category": "Growth",
    "year": "Business puzzle",
    "role": "You run Tool Shelf.",
    "objective": "Fill spare capacity before buying more",
    "briefing": "Your rental shop owns eight tools. A seller says buying eight more will double your sales. But most tools sit unused most days. Decide where to spend next month’s money.",
    "question": "What should you do with the spare cash?",
    "evidence": [
      {
        "id": "fact-1",
        "label": "Eight tools · 30 days available",
        "text": "Each tool can be rented for up to 30 days next month. That gives 240 tool-days of capacity.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-2",
        "label": "80 paid tool-days a month",
        "text": "Current use totals 80 rental days across all eight tools. Each paid day brings $30.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-3",
        "label": "$4 cost per rented day",
        "text": "Cleaning and wear cost $4 per paid day. Other fixed costs are $1,000 per month.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-4",
        "label": "Eight more tools cost $2,400",
        "text": "The new tools add capacity but no customers are promised. Depreciation, resale value and financing are outside this one-month cash exercise.",
        "kind": "simulation",
        "sourceIds": []
      },
      {
        "id": "fact-5",
        "label": "$240 weekday campaign",
        "text": "The campaign targets 40 extra paid tool-days using current tools. A $20 price instead targets 120 total days; neither target is guaranteed.",
        "kind": "simulation",
        "sourceIds": []
      }
    ],
    "research": [
      {
        "id": "peak",
        "title": "Check when tools are busy",
        "description": "Review weekday and weekend use.",
        "hours": 2,
        "evidence": [
          {
            "id": "peak-finding",
            "label": "Four fully booked days",
            "text": "All eight tools were rented on four days last month. Sixteen requested tool-days were turned away on those dates; most weekday capacity was empty.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "campaign",
        "title": "Check the marketing promise",
        "description": "Ask what the campaign guarantees.",
        "hours": 2,
        "evidence": [
          {
            "id": "campaign-finding",
            "label": "No paid booking guarantee",
            "text": "The $240 campaign reaches local weekday users. It promises ad delivery, not the target of 40 added rental days.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      },
      {
        "id": "lease",
        "title": "Price tools just for busy dates",
        "description": "Look for a smaller capacity commitment.",
        "hours": 3,
        "evidence": [
          {
            "id": "lease-finding",
            "label": "Two tools can be leased for $80",
            "text": "A local supplier offers two tools for the four busy dates for $80 total. Availability for future months is not guaranteed.",
            "kind": "simulation",
            "sourceIds": []
          }
        ]
      }
    ],
    "suggestedQuestions": [
      "Compare the money over the same time.",
      "What could change this choice?",
      "Which cost is easy to miss?"
    ],
    "event": {
      "title": "Buy the campaign at $900",
      "text": "The campaign quote rises from $240 to $900. Its target remains 40 extra paid tool-days at the normal $30 price.",
      "evidence": {
        "id": "event",
        "label": "Buy the campaign at $900",
        "text": "The campaign quote rises from $240 to $900. Its target remains 40 extra paid tool-days at the normal $30 price.",
        "kind": "simulation",
        "sourceIds": []
      }
    },
    "options": [
      {
        "id": "buy",
        "title": "Buy eight more tools now",
        "description": "Spend $2,400 and keep the $30 rental price.",
        "tradeoff": "Capacity doubles, but current demand already fits most days."
      },
      {
        "id": "market",
        "title": "Sell spare weekdays at $30",
        "description": "Spend $240 to seek 40 added days using current tools.",
        "tradeoff": "The target is uncertain, so track paid bookings against the ad bill."
      },
      {
        "id": "cut",
        "title": "Cut the daily price to $20",
        "description": "Aim for 120 total rental days without paid ads.",
        "tradeoff": "More use means more wear; sales may not grow with bookings."
      },
      {
        "id": "hold",
        "title": "Keep the current fleet and offer",
        "description": "Spend nothing extra this month.",
        "tradeoff": "You keep a positive cash result but leave spare capacity unused."
      }
    ],
    "reveal": {
      "company": "Tool Shelf",
      "title": "More room to sell is not more people buying.",
      "history": "This is an authored business puzzle. The numbers are scenario inputs, not a real company’s results.",
      "lesson": "More room to sell is not more people buying.",
      "sources": [],
      "consequences": {
        "buy": "You have 240 available tool-days and sell only 80. More stock alone does not create rentals.",
        "market": "Forty extra days could add $1,040 after direct costs. At the opening $240 ad price, that leaves $800 extra if the target is met.",
        "cut": "At 120 days and $20, sales stay at $2,400 while wear costs rise. More activity leaves less cash.",
        "hold": "Current rentals leave $1,080 after running costs. Waiting protects cash while you check where demand is missing."
      },
      "rubric": [
        "Fill spare capacity before buying more",
        "Compare the same time period.",
        "Count the stated costs and check the assumptions."
      ]
    }
  }
];
