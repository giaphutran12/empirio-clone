import type {
  CaseDefinition,
  Evidence,
  Research,
  DecisionOption,
  Source,
} from "../types";

const fact = (
  id: string,
  label: string,
  text: string,
  source = "s1",
): Evidence => ({ id, label, text, kind: "fact", sourceIds: [source] });
const unknown = (id: string, label: string, text: string): Evidence => ({
  id,
  label,
  text,
  kind: "unknown",
  sourceIds: [],
});
const view = (id: string, label: string, text: string): Evidence => ({
  id,
  label,
  text,
  kind: "interpretation",
  sourceIds: [],
});
const research = (
  id: string,
  title: string,
  hours: number,
  description: string,
  evidence: Evidence[],
): Research => ({ id, title, hours, description, evidence });
const option = (
  id: string,
  title: string,
  description: string,
  tradeoff: string,
): DecisionOption => ({ id, title, description, tradeoff });
const source = (id: string, title: string, url: string): Source => ({
  id,
  title,
  url,
});
const event = (title: string, text: string): CaseDefinition["event"] => ({
  title,
  text: `At the 3-hour mark, ${text}`,
  evidence: {
    id: "halfway",
    label: title,
    text,
    kind: "simulation",
    sourceIds: [],
  },
});
type AuthoredCase = Omit<CaseDefinition, "reveal"> & {
  reveal: CaseDefinition["reveal"] & { identityAliases: string[] };
};

const authoredCases: AuthoredCase[] = [
  {
    id: "case-022",
    version: 1,
    number: "22",
    title: "The poisoned bottles",
    subtitle: "How far should a recall go?",
    category: "Public trust",
    year: "1982",
    role: "You lead Johnson & Johnson, a large health products firm.",
    objective:
      "Keep people safe and set a clear scope for pulling a pain drug off shelves.",
    briefing:
      "Early October 1982. People have died after taking your pain pills near Chicago. Poison is in the capsules. You must choose how wide the recall should be.",
    question: "How far do you pull the drug from sale?",
    evidence: [
      fact(
        "deaths",
        "Lives lost",
        "Seven people near Chicago have died after taking poisoned capsules.",
        "s1",
      ),
      fact(
        "poison",
        "Not the drug itself",
        "The capsules were laced with cyanide.",
        "s1",
      ),
      fact(
        "product",
        "A common pain drug",
        "This brand sells pain relief without a prescription.",
        "s2",
      ),
      fact(
        "strength",
        "A strong dose",
        "The brand has sold an extra-strength, 500 mg dose since the 1970s.",
        "s2",
      ),
    ],
    research: [
      research(
        "brand",
        "Check the brand's reach",
        1,
        "See how much trust and use sit behind the drug.",
        [
          fact(
            "reach",
            "Large reach",
            "By the early 1980s, its sales were thought to top three times those of the other four leading non-prescription pain drugs.",
            "s2",
          ),
          view(
            "reach-risk",
            "Reach cuts both ways",
            "A trusted drug reaches many homes. A small known cluster does not show how far the risk goes.",
          ),
        ],
      ),
      research(
        "cover",
        "Check recall insurance",
        2,
        "Find who would pay for a broad pullback.",
        [
          fact(
            "insurance",
            "The firm carries the risk",
            "The firm had let its recall insurance lapse. Its own records treated recall costs as a risk it would pay itself.",
            "s3",
          ),
          unknown(
            "cost",
            "No firm price yet",
            "We do not have a full cost for each recall scope or a confirmed map of every tainted bottle.",
          ),
        ],
      ),
      research(
        "scope",
        "Trace the danger",
        2,
        "Separate the known deaths from the reach of the threat.",
        [
          view(
            "location",
            "Known place, unknown boundary",
            "The deaths show a clear danger near Chicago. They do not prove that bottles elsewhere are safe.",
          ),
          unknown(
            "boundary",
            "No safe boundary",
            "We have no verified test that rules out poison in all bottles outside the area.",
          ),
        ],
      ),
      research(
        "return",
        "Plan a safe return",
        3,
        "Work out what must be true before sales restart.",
        [
          view(
            "restart",
            "Safety before sales",
            "A recall needs a way to collect old bottles and check new packs. A sales ad cannot do that job.",
          ),
          unknown(
            "pack",
            "Timing is open",
            "We do not have a tested new pack, a rollout time, or proof that buyers will trust it.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "Does a local cluster prove the risk is local?",
      "Who pays for a recall?",
      "What must happen before sales restart?",
    ],
    event: event(
      "Stores need one rule",
      "a store group asks for one clear rule for all its branches. A local recall needs a clear border; a wider one needs a return plan.",
    ),
    options: [
      option(
        "wide",
        "Pull capsules nationwide",
        "Warn buyers and collect capsules across the country.",
        "Cuts exposure broadly, but brings a large bill and lost sales.",
      ),
      option(
        "local",
        "Pull them in the affected area",
        "Recall locally while tracing bottles and warning the public.",
        "Moves fast nearby, but depends on a boundary you cannot yet prove.",
      ),
      option(
        "pause",
        "Stop new capsule shipments",
        "Hold all new shipments while stores isolate stock for checks.",
        "Limits new supply, but old bottles remain in homes.",
      ),
      option(
        "hold",
        "Hold the recall scope",
        "Keep the present response while tests and tracing continue.",
        "Avoids a rushed expansion, but leaves more exposure while you wait.",
      ),
    ],
    reveal: {
      company: "Johnson & Johnson",
      identityAliases: [
        "Johnson & Johnson",
        "Tylenol",
        "McNeil",
        "James Burke",
      ],
      title: "The Tylenol crisis",
      history:
        "Johnson & Johnson pulled Tylenol capsules widely and developed packs that showed signs of tampering. FDA issued new packaging rules in 1982.",
      lesson:
        "You may need to act before you can map the whole risk. Say what is known and make safety steps clear.",
      sources: [
        source(
          "s1",
          "FBI: Chicago history, 1982 poisonings",
          "https://www.fbi.gov/history/field-office-histories/chicago",
        ),
        source(
          "s2",
          "FDA: history of drug treatment, Tylenol section",
          "https://www.fda.gov/about-fda/fda-history-exhibits/drug-therapeutics-regulation-us",
        ),
        source(
          "s3",
          "Federal court: McNeilab v. North River, 1986",
          "https://law.justia.com/cases/federal/district-courts/FSupp/645/525/1499068/",
        ),
        source(
          "s4",
          "FDA: milestones in drug law",
          "https://www.fda.gov/about-fda/fda-history/milestones-us-food-and-drug-law",
        ),
      ],
      consequences: {
        wide: "A wide pull can reduce exposure. You must fund it and make returns easy.",
        local:
          "A local pull may be faster. Its value rests on a boundary the evidence has not established.",
        pause:
          "New stock stops moving. You still need to reach people with bottles at home.",
        hold: "Tests may improve the map. Waiting also leaves a known danger in play.",
      },
      rubric: [
        "Did you put the risk to lives at the center?",
        "Did you avoid treating Chicago as a proven limit?",
        "Did you explain funding and bottle returns?",
        "Did you name a safety check for restarting sales?",
      ],
    },
  },
  {
    id: "case-023",
    version: 1,
    number: "23",
    title: "The new pizza",
    subtitle: "Change the taste, change the promise.",
    category: "Brand renewal",
    year: "2009",
    role: "You lead Domino’s Pizza, a large pizza delivery chain.",
    objective:
      "Win back people who doubt the taste without losing steady buyers.",
    briefing:
      "December 2009. Your team has made a new crust, sauce, and cheese mix. Some people do not think your pizza tastes good. Decide how to launch the new one.",
    question: "How should the chain change its main pizza?",
    evidence: [
      fact(
        "recipe",
        "A full change",
        "The proposed pizza changes the crust, sauce, and cheese.",
      ),
      fact(
        "network",
        "Many kitchens",
        "The chain has 8,886 stores across the US and 60 markets abroad.",
      ),
      fact(
        "owners",
        "Local owners",
        "Most stores are franchises, run by local owners.",
      ),
      fact(
        "doubt",
        "A taste problem",
        "The marketing team is trying to change some buyers' poor view of the pizza.",
      ),
    ],
    research: [
      research(
        "tests",
        "Read the taste tests",
        1,
        "Check who tried the new food and what the tests show.",
        [
          fact(
            "testing",
            "Old and lapsed buyers",
            "The team tested with frequent buyers and people who had not ordered in years.",
          ),
          fact(
            "test-work",
            "Many mixes tried",
            "Over two years, the team tried dozens of cheeses, 15 sauces, and nearly 50 crust blends.",
          ),
          unknown(
            "repeat",
            "Repeat orders are unproven",
            "We have no repeat-order result from a full store launch.",
          ),
        ],
      ),
      research(
        "offer",
        "Price the first order",
        2,
        "Review the launch deal and the promise to buyers.",
        [
          fact(
            "deal",
            "A trial price",
            "The proposed offer is two medium pizzas with two toppings for $5.99 each.",
          ),
          fact(
            "guarantee",
            "A taste promise",
            "The launch plan backs the pizza with a satisfaction guarantee.",
          ),
          unknown(
            "refund-cost",
            "Claims are unknown",
            "We have no forecast for refund claims or profit on repeat orders.",
          ),
        ],
      ),
      research(
        "message",
        "Check the launch message",
        2,
        "See what an honest ad would need to prove.",
        [
          view(
            "ad-risk",
            "Own the weak point",
            "Admitting a taste problem may get attention. It may also remind happy buyers of a flaw they did not notice.",
          ),
          unknown(
            "segments",
            "Who needs the change?",
            "We lack a breakdown of loyal buyers who prefer the old taste.",
          ),
        ],
      ),
      research(
        "kitchens",
        "Check store readiness",
        3,
        "Work through a change across many local kitchens.",
        [
          view(
            "execution",
            "The food must match",
            "The same recipe can taste different if stores make it badly. Check training, stock, and finished pizzas before a wide ad push.",
          ),
          unknown(
            "store-audit",
            "No store audit",
            "We have no store-by-store readiness score or cost for running both recipes.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "Do taste tests show repeat orders?",
      "What could a frank ad put at risk?",
      "How do we keep the taste the same in every store?",
    ],
    event: event(
      "A change at the counter",
      "store owners ask whether to keep old stock or train for a full switch. They need a clear date and one rule for refunds.",
    ),
    options: [
      option(
        "switch",
        "Switch and tell the truth",
        "Replace the recipe and openly explain why it changed.",
        "A clear promise raises attention and puts store quality under a bright light.",
      ),
      option(
        "quiet",
        "Switch with quiet ads",
        "Change the recipe and let the food lead the message.",
        "Less brand risk, but lapsed buyers may not notice.",
      ),
      option(
        "trial",
        "Test in a few markets",
        "Watch repeat orders before a full switch.",
        "Better sales evidence, but a slower brand reset.",
      ),
      option(
        "hold",
        "Keep the old recipe",
        "Pause the launch and keep the current pizza.",
        "Protects steady buyers while the taste problem remains.",
      ),
    ],
    reveal: {
      company: "Domino's Pizza",
      identityAliases: ["Domino's", "Dominos", "David Brandon"],
      title: "A new pizza and a frank pitch",
      history:
        "Domino's announced a full recipe change in December 2009. Its ads showed the work behind the change, and the launch included a taste guarantee.",
      lesson:
        "A bold ad needs a product that keeps the promise. Test repeat orders as well as first bites.",
      sources: [
        source(
          "s1",
          "Domino's: recipe launch, December 16, 2009",
          "https://ir.dominos.com/news-releases/news-release-details/celebrating-50th-year-dominos-pizza-gives-itself-makeover",
        ),
      ],
      consequences: {
        switch:
          "You make a clear break. Poor store execution could waste the attention.",
        quiet:
          "You limit the public admission. People who stopped ordering may never try it.",
        trial:
          "You can learn from real orders. Local results may not travel well.",
        hold: "You avoid launch costs now. You still need a way to change poor taste views.",
      },
      rubric: [
        "Did you separate taste scores from repeat orders?",
        "Did you plan for local store execution?",
        "Did you weigh the risk of blunt ads?",
        "Did you define when to widen or stop the launch?",
      ],
    },
  },
  {
    id: "case-024",
    version: 1,
    number: "24",
    title: "The meal under doubt",
    subtitle: "Open doors, unanswered questions.",
    category: "Food safety",
    year: "2015",
    role: "You lead Chipotle, a restaurant chain facing a food illness probe.",
    objective: "Protect diners while finding and fixing the source of illness.",
    briefing:
      "November 20, 2015. Your chain has reopened stores after a shutdown in the Northwest. Illnesses now span more states. The food at fault is still unknown.",
    question: "What should the chain do while the source is unclear?",
    evidence: [
      fact(
        "spread",
        "More states",
        "Health officials report 45 people with the outbreak strain across six states.",
      ),
      fact(
        "hospital",
        "Serious harm",
        "Sixteen people have been hospitalized. No deaths have been reported.",
      ),
      fact(
        "reopen",
        "Doors reopened",
        "The chain began reopening affected stores on November 11 after agreeing to food safety steps.",
      ),
      fact(
        "missing-food",
        "No food pinned down",
        "The probe has not found the exact food linked to the illness.",
      ),
    ],
    research: [
      research(
        "links",
        "Read the diner interviews",
        1,
        "Check how strongly the illnesses link to the chain.",
        [
          fact(
            "interviews",
            "A strong link",
            "Of 45 people interviewed, 43 said they ate at the chain before getting sick.",
          ),
          view(
            "link-limit",
            "Link is not source",
            "That ties the chain to the outbreak. It does not tell you which ingredient to remove.",
          ),
        ],
      ),
      research(
        "labs",
        "Check the lab results",
        2,
        "Compare food tests with tests from sick diners.",
        [
          fact(
            "food-tests",
            "Food tests were negative",
            "As of November 12, tests had not found E. coli in the foods tested. More results were pending.",
          ),
          fact(
            "dna",
            "Illnesses match",
            "Tests on samples from nine people in one Northwest state and one in the Midwest showed closely related germs.",
          ),
          view(
            "negative-limit",
            "Do not overread a clean test",
            "A negative food sample cannot clear every meal already served.",
          ),
        ],
      ),
      research(
        "supply",
        "Trace shared ingredients",
        2,
        "Find what a chain-wide check still needs.",
        [
          fact(
            "trace",
            "Tracing is in progress",
            "The chain is helping officials map food sent to stores where sick people ate.",
          ),
          unknown(
            "batch",
            "No clear batch boundary",
            "We have no confirmed supplier, batch, or food that explains every case.",
          ),
        ],
      ),
      research(
        "reset",
        "Plan a safety reset",
        3,
        "Compare targeted changes with a wider pause.",
        [
          view(
            "control",
            "Fix a process, not just an image",
            "A reset needs checks on food handling and supply. Ads alone cannot remove the cause.",
          ),
          unknown(
            "closure",
            "A pause has limits",
            "We do not know how long a wider shutdown would take or whether it would reveal the cause.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "What do negative food tests prove?",
      "How strong is the link to the chain?",
      "What would make a wider pause useful?",
    ],
    event: event(
      "The message needs care",
      "store staff ask what to tell diners. You need a clear safety message without claiming the cause has been found.",
    ),
    options: [
      option(
        "reset",
        "Run a chain-wide safety reset",
        "Change handling, supplier checks, and staff training while monitoring stores.",
        "Acts across the chain, but costs time and cannot promise zero risk.",
      ),
      option(
        "pause",
        "Pause service more widely",
        "Close more stores while tracing food and checking processes.",
        "Limits meals served, but a shutdown alone may not find the source.",
      ),
      option(
        "targeted",
        "Focus on linked stores",
        "Keep other stores open and direct checks at known links.",
        "Preserves service, but the supply boundary is unclear.",
      ),
      option(
        "hold",
        "Keep current controls",
        "Make no new operating change while officials continue the probe.",
        "Avoids untested fixes, but leaves the response behind a widening threat.",
      ),
    ],
    reveal: {
      company: "Chipotle Mexican Grill",
      identityAliases: ["Chipotle", "Steve Ells"],
      title: "The 2015 food safety crisis",
      history:
        "Chipotle added supplier tests, changed food prep, and expanded staff training. The CDC later closed the outbreak probes without finding one specific food.",
      lesson:
        "A clean sample is not proof of a safe system. Reduce risk while you keep tracing the cause.",
      sources: [
        source(
          "s1",
          "CDC: dated outbreak updates, through November 20, 2015",
          "https://archive.cdc.gov/www_cdc_gov/ecoli/2015/o26-11-15/index.html",
        ),
        source(
          "s2",
          "Chipotle: safety program, January 19, 2016",
          "https://ir.chipotle.com/news-releases?item=122453",
        ),
      ],
      consequences: {
        reset:
          "Broader checks may lower risk. You need proof staff use them well.",
        pause:
          "Fewer meals are served during the probe. You still need a safe rule for reopening.",
        targeted:
          "You focus effort on known links. Shared food may carry risk beyond those stores.",
        hold: "You gain time for findings. Diners still face a threat with no confirmed boundary.",
      },
      rubric: [
        "Did you distinguish the chain link from the food source?",
        "Did you avoid calling negative samples proof of safety?",
        "Did you set a clear rule for closing or reopening?",
        "Did you plan both supply checks and honest diner updates?",
      ],
    },
  },
  {
    id: "case-025",
    version: 1,
    number: "25",
    title: "The holiday rush",
    subtitle: "More boxes. Fewer days.",
    category: "Capacity planning",
    year: "2013",
    role: "You run planning at UPS, a large parcel carrier.",
    objective:
      "Meet holiday promises without buying more capacity than you need.",
    briefing:
      "October 2013. Online shopping is pushing more boxes into your network. The holiday season is short. Choose how much spare room to build into the plan.",
    question: "How should you handle the holiday peak?",
    evidence: [
      fact(
        "days",
        "A short season",
        "There are 26 shopping days between Thanksgiving and Christmas, six fewer than last year.",
      ),
      fact(
        "growth",
        "More daily work",
        "The company expects peak-season daily volume to rise 8%.",
      ),
      fact(
        "pickup",
        "A big pickup day",
        "The plan forecasts more than 34 million pickups on December 16.",
      ),
      fact(
        "hiring",
        "Seasonal help",
        "The plan calls for 55,000 temporary US workers.",
      ),
    ],
    research: [
      research(
        "flow",
        "Compare pickups and deliveries",
        1,
        "Look for pressure beyond the headline pickup forecast.",
        [
          fact(
            "delivery",
            "A different peak",
            "The forecast puts peak deliveries above 29 million on December 17.",
          ),
          view(
            "flow-risk",
            "Boxes stay in the network",
            "Pickups and deliveries are different counts. A busy pickup day can strain later sorting and delivery days.",
          ),
        ],
      ),
      research(
        "peaks",
        "Check repeated peak days",
        2,
        "See whether the plan faces one surge or several.",
        [
          fact(
            "repeated",
            "Not just one busy day",
            "The forecast expects five delivery days to beat the prior year's peak.",
          ),
          fact(
            "monday",
            "An earlier wave",
            "The company expects more than 32 million pickups on December 2, up 10%.",
          ),
          unknown(
            "buffer",
            "Local spare room is unknown",
            "We have no spare-capacity map for each hub, route, or day.",
          ),
        ],
      ),
      research(
        "customers",
        "Check store promises",
        2,
        "Test whether promised delivery dates fit the shipping plan.",
        [
          view(
            "cutoffs",
            "Promises drive the peak",
            "Late orders can bunch shipments. Agreeing on cutoffs with large stores may matter as much as adding workers.",
          ),
          unknown(
            "late",
            "Late demand is uncertain",
            "We lack firm last-minute shipment commitments from each large store.",
          ),
        ],
      ),
      research(
        "stress",
        "Stress-test the network",
        3,
        "Plan for a surge and bad weather together.",
        [
          view(
            "bottleneck",
            "Find the tight point",
            "Extra drivers do not fix a full sorting hub. Reserve room where the flow is most at risk.",
          ),
          unknown(
            "weather",
            "The stress case has no price",
            "We have no local storm forecast or costed plan for spare planes, trucks, and sorting shifts.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "Are pickups the same as deliveries?",
      "Where could extra workers fail to help?",
      "When should stores stop promising holiday arrival?",
    ],
    event: event(
      "A late-order request",
      "a large store asks to keep taking holiday orders later. It cannot yet commit to a final box count. Your cutoff rule now matters.",
    ),
    options: [
      option(
        "buffer",
        "Buy spare capacity",
        "Reserve more staff and transport at likely tight points.",
        "More room for a surge, but idle capacity costs money.",
      ),
      option(
        "cutoff",
        "Tighten shipping promises",
        "Set firm cutoffs and volume limits with large stores.",
        "Protects service, but may lose late orders.",
      ),
      option(
        "flex",
        "Use triggers for extra capacity",
        "Track the flow and add reserve shifts as thresholds are hit.",
        "Controls cost, but help may arrive too late.",
      ),
      option(
        "hold",
        "Keep the forecast plan",
        "Use the current hiring and volume plan without added buffers.",
        "Avoids added cost while leaving less room for error.",
      ),
    ],
    reveal: {
      company: "UPS",
      identityAliases: ["UPS", "United Parcel Service", "Scott Davis"],
      title: "The 2013 holiday overload",
      history:
        "UPS reported volume above even its most optimistic plans. Weather and the surge caused delays and extra costs. It used 85,000 temporary workers, above its original target.",
      lesson:
        "Plan for where work piles up, not just the total. A promise needs room for a bad day.",
      sources: [
        source(
          "s1",
          "UPS-issued peak forecast, October 25, 2013",
          "https://www.prnewswire.com/news-releases/ups-holiday-pick-ups-to-exceed-34-million-packages-on-peak-day-513147031.html",
        ),
        source(
          "s2",
          "UPS: fourth-quarter 2013 results",
          "https://investors.ups.com/news-events/press-releases/detail/1145/ups-releases-4q-results",
        ),
      ],
      consequences: {
        buffer:
          "Spare room can absorb shocks. Put it at the actual bottleneck or it may sit idle.",
        cutoff:
          "Fewer late promises ease pressure. Stores may send that work elsewhere.",
        flex: "Triggers limit early spending. Reserve help must be ready before the trigger fires.",
        hold: "Costs stay within the plan if it holds. A surge leaves fewer ways to recover.",
      },
      rubric: [
        "Did you separate pickups from deliveries?",
        "Did you allow for repeated peaks?",
        "Did you tie extra capacity to a bottleneck?",
        "Did you set a clear cutoff or reserve trigger?",
      ],
    },
  },
  {
    id: "case-026",
    version: 1,
    number: "26",
    title: "The costly new market",
    subtitle: "Stay, shrink, or leave?",
    category: "Market exit",
    year: "2015",
    role: "You lead Target, a US retailer with a struggling Canadian arm.",
    objective:
      "Choose where future cash can do the most good while treating staff and creditors fairly.",
    briefing:
      "January 2015. Your Canadian stores keep losing money. A review shows a long road to profit. Decide whether another push is worth the cost.",
    question: "What should you do with the Canadian business?",
    evidence: [
      fact("stores", "A large footprint", "The Canadian arm has 133 stores."),
      fact("staff", "Many jobs at stake", "It employs about 17,600 people."),
      fact(
        "profit",
        "A long wait",
        "Management's review finds no realistic route to profit before at least 2021.",
      ),
      fact(
        "cash",
        "More funding is needed",
        "The Canadian arm cannot keep meeting its bills without more funding.",
        "s2",
      ),
    ],
    research: [
      research(
        "smaller",
        "Check a smaller footprint",
        1,
        "See which ways to shrink have already been reviewed.",
        [
          fact(
            "review",
            "More than an all-or-nothing review",
            "The team examined closing weak stores, leaving some provinces, and using a different supply model.",
            "s2",
          ),
          unknown(
            "store-profit",
            "No store-level case",
            "We lack the cash forecast for each smaller network.",
          ),
        ],
      ),
      research(
        "exit",
        "Price a full exit",
        2,
        "Separate cash to leave from losses on the books.",
        [
          fact(
            "exit-cash",
            "Cash is still needed",
            "The proposed exit is expected to use $500 million to $600 million in cash.",
          ),
          fact(
            "writeoff",
            "A different kind of loss",
            "The estimated $5.4 billion pre-tax loss includes writing down the investment, exit costs, and operating losses.",
          ),
          view(
            "sunk",
            "Do not spend to save a past bill",
            "Money already spent cannot make future losses worthwhile. Compare future cash under each path.",
          ),
        ],
      ),
      research(
        "home",
        "Compare the home market",
        2,
        "Check where the parent could put its attention.",
        [
          fact(
            "us",
            "Home sales are improving",
            "Based on November and December, the US business expects about 3% comparable sales growth, above prior guidance of about 2%.",
          ),
          unknown(
            "returns",
            "No equal comparison yet",
            "We do not have a return forecast for the next dollar spent in either country.",
          ),
        ],
      ),
      research(
        "people",
        "Plan a fair wind-down",
        3,
        "Work through staff, stores, and unpaid bills.",
        [
          view(
            "orderly",
            "Closing is also work",
            "A full exit needs staff support, stock sales, and a process for claims. The cheapest-looking exit may miss these costs.",
          ),
          unknown(
            "claims",
            "Claims are not settled",
            "We do not know final lease settlements or what each creditor would recover.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "What costs are already sunk?",
      "Has a smaller network been checked?",
      "What does a fair exit need?",
    ],
    event: event(
      "The next funding choice",
      "the finance team needs a rule for the next cash transfer. Keeping stores open requires funding while any shrink or exit plan takes shape.",
    ),
    options: [
      option(
        "exit",
        "Leave the market",
        "Fund an orderly wind-down and focus on the home business.",
        "Stops a long bet, but creates exit costs and job losses.",
      ),
      option(
        "shrink",
        "Keep a smaller network",
        "Close weaker areas and rebuild around selected stores.",
        "Preserves a foothold, but the smaller network still needs a cash case.",
      ),
      option(
        "reset",
        "Fund a bounded reset",
        "Give the business another plan with firm cash and progress limits.",
        "Keeps upside alive, but risks more money if the limits are weak.",
      ),
      option(
        "hold",
        "Keep funding the current plan",
        "Make no major change to the footprint now.",
        "Avoids disruption while daily losses continue.",
      ),
    ],
    reveal: {
      company: "Target Canada",
      identityAliases: ["Target", "Brian Cornell"],
      title: "Leaving Canada",
      history:
        "Target chose a full exit in January 2015. Its Canadian arm entered a court-led process and planned to close the last stores by April 12.",
      lesson:
        "A big past investment is not a reason to keep spending. Compare the future cost of staying with the real cost of leaving.",
      sources: [
        source(
          "s1",
          "Target: Canadian exit proposal, January 15, 2015",
          "https://corporate.target.com/press/release/2015/01/target-corporation-announces-plans-to-discontinue-canadian-operations",
        ),
        source(
          "s2",
          "Target CEO: options reviewed, January 15, 2015",
          "https://corporate.target.com/news-features/article/2015/01/qa-brian-cornell-target-exits-canada",
        ),
        source(
          "s3",
          "Target: final store closure schedule, April 1, 2015",
          "https://corporate.target.com/press/release/2015/04/target-canada-to-close-all-canadian-stores-by-april-12",
        ),
      ],
      consequences: {
        exit: "You end the long funding bet. Staff support and creditor claims still need cash and care.",
        shrink:
          "A smaller chain might work. You need evidence that saved costs exceed lost scale.",
        reset:
          "Limits can control a further bet. Set the stop rule before more cash is spent.",
        hold: "You buy time with real money. Explain what new fact could make that time useful.",
      },
      rubric: [
        "Did you separate sunk costs from future cash?",
        "Did you test the case for a smaller network?",
        "Did you distinguish a write-down from cash spending?",
        "Did you include staff and creditor needs?",
      ],
    },
  },
  {
    id: "case-027",
    version: 1,
    number: "27",
    title: "The payment split",
    subtitle: "One owner, two paths.",
    category: "Company structure",
    year: "2014",
    role: "You lead eBay, an online market that also owns PayPal.",
    objective: "Help both businesses grow while keeping checkout reliable.",
    briefing:
      "September 2014. Your payments arm is large and growing fast. The board is reviewing whether shared ownership still helps both sides. A split would need new agreements.",
    question: "Should the market and payment service stay together?",
    evidence: [
      fact(
        "payments",
        "A large payments arm",
        "The payment service has more than 152 million active accounts.",
      ),
      fact(
        "buyers",
        "A large market",
        "The online market has 149 million active buyers.",
      ),
      fact(
        "growth",
        "Payments are growing",
        "Payment revenue rose 19% over the last four public quarters to about $7.2 billion.",
      ),
      fact(
        "past",
        "A long shared history",
        "The two businesses have been under one roof for more than a decade.",
      ),
    ],
    research: [
      research(
        "reach",
        "Map the payments reach",
        1,
        "Check the scale of the service beyond a simple checkout tool.",
        [
          fact(
            "volume",
            "Money moved",
            "The payment arm handled $203 billion over the last four public quarters, up 26%.",
          ),
          fact(
            "markets",
            "A wide network",
            "The service works in 203 markets and 26 currencies.",
          ),
        ],
      ),
      research(
        "market",
        "Check the market's own path",
        2,
        "Compare the scale and growth of the other business.",
        [
          fact(
            "market-sales",
            "A separate growth story",
            "The market and enterprise businesses together made $9.9 billion in revenue over the last four public quarters, up about 10%.",
          ),
          unknown(
            "dependency",
            "Dependence is not priced",
            "We do not have the profit lost if checkout terms change after a split.",
          ),
        ],
      ),
      research(
        "contracts",
        "Test the link after a split",
        2,
        "Identify what shared ownership now supplies.",
        [
          view(
            "contract",
            "Ownership is not a contract",
            "A split needs terms for payment access, service quality, data, and disputes. Good intent cannot replace those rules.",
          ),
          unknown(
            "terms",
            "No final deal terms",
            "We do not have final operating agreements or a full separation bill.",
          ),
        ],
      ),
      research(
        "partners",
        "Check freedom to partner",
        3,
        "Weigh new deals against the cost of separation.",
        [
          view(
            "neutral",
            "A possible new door",
            "A payment firm owned by a market may be harder for rival markets to trust. Independence could help, but it does not promise new deals.",
          ),
          unknown(
            "pipeline",
            "No signed new deals",
            "We have no confirmed extra revenue from partnerships that depend on a split.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "What would contracts need to preserve?",
      "Does growth prove a split is better?",
      "Which new deals truly need independence?",
    ],
    event: event(
      "Checkout needs an owner",
      "the product teams ask who will settle a checkout dispute after a split. A separation plan now needs a clear service and dispute rule.",
    ),
    options: [
      option(
        "split",
        "Create separate public firms",
        "Split ownership and keep the trading links through contracts.",
        "Adds freedom, but contracts must carry work once handled inside the firm.",
      ),
      option(
        "autonomy",
        "Give payments more freedom",
        "Keep ownership and grant the payment team wider control over deals.",
        "Less disruption, but rivals may still see a conflict.",
      ),
      option(
        "partial",
        "Sell a minority stake",
        "Bring in outside owners while keeping control.",
        "May add funds and focus, but leaves mixed control.",
      ),
      option(
        "hold",
        "Keep the current structure",
        "Stay together under the current model.",
        "Preserves shared control while different needs may pull teams apart.",
      ),
    ],
    reveal: {
      company: "eBay and PayPal",
      identityAliases: ["eBay", "PayPal", "John Donahoe", "Dan Schulman"],
      title: "Separate firms, ongoing links",
      history:
        "eBay announced the split in September 2014. PayPal became separate in July 2015. The plan used operating agreements to preserve the trading relationship.",
      lesson:
        "Ask which benefits need one owner and which can live in a contract. A split should solve a real constraint.",
      sources: [
        source(
          "s1",
          "eBay: separation announcement, September 30, 2014",
          "https://ebay.q4cdn.com/610426115/files/doc_news/archive/EBAY_News_2014_9_30_Earnings.pdf",
        ),
        source(
          "s2",
          "eBay: 2015 full-year results",
          "https://www.ebayinc.com/stories/news/ebay-inc-reports-fourth-quarter-and-full-year-2015-results/",
        ),
      ],
      consequences: {
        split:
          "Each team gains freedom. Weak service terms could hurt both sides.",
        autonomy:
          "You avoid a full break. Outside partners may still doubt the shared owner.",
        partial:
          "Outside owners add another voice. The control conflict may stay.",
        hold: "You keep easy internal coordination. You still need to resolve competing priorities.",
      },
      rubric: [
        "Did you name a constraint a split would solve?",
        "Did you avoid treating growth as proof of independence?",
        "Did you protect checkout through clear terms?",
        "Did you weigh separation costs against unproven new deals?",
      ],
    },
  },
  {
    id: "case-028",
    version: 1,
    number: "28",
    title: "Buy the story studio",
    subtitle: "The films are valuable. So are the people.",
    category: "Acquisition",
    year: "2006",
    role: "You lead Disney and are weighing a deal to buy Pixar.",
    objective:
      "Build a strong film future without breaking the creative team you need.",
    briefing:
      "January 2006. A computer animation studio has made hit films with you for years. A stock deal could bring it inside your firm. Decide whether ownership is worth the price.",
    question: "How should you secure the studio's future work?",
    evidence: [
      fact(
        "price",
        "A large stock deal",
        "The proposed deal values the studio at $7.4 billion, paid in shares.",
      ),
      fact(
        "cash",
        "Cash inside the studio",
        "The studio holds just over $1 billion in cash.",
      ),
      fact(
        "relationship",
        "Years of working together",
        "The firms first made a feature film agreement in 1991.",
      ),
      fact(
        "reach",
        "More than movie tickets",
        "Your business also has parks, media networks, and consumer products.",
      ),
    ],
    research: [
      research(
        "contract",
        "Read the old film deal",
        1,
        "Check what a partnership has already supplied.",
        [
          fact(
            "five",
            "An exclusive film agreement",
            "A 1997 agreement called for the studio to make five original computer-animated films for your firm to distribute.",
          ),
          view(
            "buy-rights",
            "Buy only what you need",
            "A new film contract could buy access. Ownership would also change who controls future choices.",
          ),
        ],
      ),
      research(
        "talent",
        "Check the people terms",
        2,
        "See how the draft deal treats the creative leaders.",
        [
          fact(
            "leaders",
            "Creative control matters",
            "The proposed terms put the studio's president and creative chief in charge of both animation teams.",
          ),
          fact(
            "locations",
            "Keep the studios intact",
            "The proposed terms retain both studios' current operations and locations.",
          ),
          unknown(
            "retention",
            "Staying is not guaranteed",
            "We have no estimate of staff departures under each option.",
          ),
        ],
      ),
      research(
        "price",
        "Check what shares buy",
        2,
        "Separate the headline value from cash and ownership cost.",
        [
          fact(
            "ratio",
            "Shares change hands",
            "The draft exchange is 2.3 of your shares for each studio share.",
          ),
          view(
            "dilution",
            "Stock still has a cost",
            "Paying in shares saves cash now. It gives the studio's owners part of future profits.",
          ),
          unknown(
            "value",
            "No full value model",
            "We do not have an independent forecast of film, park, and product cash flows.",
          ),
        ],
      ),
      research(
        "culture",
        "Plan the creative handoff",
        3,
        "Work out who can approve, change, or stop a film.",
        [
          view(
            "process",
            "Keep what makes the work good",
            "A hit list does not show how to make the next hit. The deal needs clear creative authority, not just shared reporting.",
          ),
          unknown(
            "pipeline",
            "Future hits are unknown",
            "We cannot know which films in the future slate will succeed.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "What does ownership add to a film deal?",
      "Why do the people terms matter?",
      "What is the cost of paying in shares?",
    ],
    event: event(
      "A question of control",
      "your animation managers ask who gets the final say on films after a deal. You need to settle creative authority before combining the teams.",
    ),
    options: [
      option(
        "buy",
        "Buy and protect the studio",
        "Use the stock deal with clear creative authority and separate studio operations.",
        "Secures control, but the price rests on people and future films.",
      ),
      option(
        "partner",
        "Renew the film partnership",
        "Seek a fresh long-term production and distribution deal.",
        "Uses less capital, but both firms retain separate goals.",
      ),
      option(
        "build",
        "Build the skill inside",
        "Put more resources into your own animation team.",
        "Keeps control, but takes time and may not reproduce the studio's craft.",
      ),
      option(
        "hold",
        "Make no new deal yet",
        "Keep current commitments and defer a bigger choice.",
        "Preserves room to think while future access remains unsettled.",
      ),
    ],
    reveal: {
      company: "Disney and Pixar",
      identityAliases: [
        "Disney",
        "Pixar",
        "Steve Jobs",
        "Ed Catmull",
        "John Lasseter",
      ],
      title: "Buying a creative team",
      history:
        "Disney bought Pixar in May 2006. The deal gave Pixar's leaders key roles across animation and kept the studios' operations and locations.",
      lesson:
        "Buying a creative firm means buying a way of working. Protect the people and choices that make it worth buying.",
      sources: [
        source(
          "s1",
          "Disney: acquisition terms, January 24, 2006",
          "https://thewaltdisneycompany.com/press-releases/disney-to-acquire-pixar/",
        ),
        source(
          "s2",
          "Disney: third-quarter 2006 report, completed acquisition",
          "https://thewaltdisneycompany.com/app/uploads/2015/10/Q3-FY06-Earnings-Report.pdf",
        ),
      ],
      consequences: {
        buy: "You gain ownership and share future upside. The value can fall if the creative team leaves or loses its way.",
        partner:
          "You preserve a working link without buying everything. Renewal terms may limit control.",
        build:
          "You keep full control of new work. More spending does not guarantee better stories.",
        hold: "You avoid paying before you are ready. The studio's next deal may be elsewhere.",
      },
      rubric: [
        "Did you compare buying with renewing a contract?",
        "Did you treat shares as a real cost?",
        "Did you address creative authority and retention?",
        "Did you avoid assuming past hits guarantee future ones?",
      ],
    },
  },
  {
    id: "case-029",
    version: 1,
    number: "29",
    title: "The large offer",
    subtitle: "Take the premium or keep the upside?",
    category: "Takeover bid",
    year: "2008",
    role: "You chair the board at Yahoo, a large web business.",
    objective:
      "Choose the best path for owners without confusing a high price with a certain deal.",
    briefing:
      "February 1, 2008. Microsoft has offered to buy Yahoo. It offers far more than yesterday's share price. Decide how the board should respond.",
    question: "How should you respond to the bid?",
    evidence: [
      fact(
        "bid",
        "An offer on the table",
        "The bidder offers $31 per share, about $44.6 billion in total equity value.",
      ),
      fact(
        "premium",
        "Above the market price",
        "The stated offer is 62% above the prior day's closing share price.",
      ),
      fact(
        "mix",
        "Not all cash",
        "The overall payment would be half cash and half bidder shares.",
      ),
      fact(
        "funds",
        "No financing condition",
        "The proposal is not conditional on the bidder raising funds.",
      ),
    ],
    research: [
      research(
        "stock",
        "Read the stock terms",
        1,
        "Check whether the headline value stays fixed.",
        [
          fact(
            "exchange",
            "A fixed share count",
            "The stock choice is 0.9509 bidder shares for each of your shares, subject to the overall cash and stock mix.",
          ),
          view(
            "value-moves",
            "The value can move",
            "A fixed number of shares is not a fixed cash value. The bidder's share price can change.",
          ),
        ],
      ),
      research(
        "history",
        "Review earlier talks",
        2,
        "See why the board stayed independent before.",
        [
          fact(
            "prior",
            "A prior decision to wait",
            "The bidder's letter says the firms explored deals in 2006 and 2007. Your board then backed its own new strategy.",
          ),
          unknown(
            "standalone",
            "The old case needs a fresh test",
            "We do not have a current independent value range or proof that the turnaround will meet its goals.",
          ),
        ],
      ),
      research(
        "savings",
        "Check the bidder's savings case",
        2,
        "Separate the buyer's claim from value your owners can collect.",
        [
          fact(
            "synergy",
            "Savings are a bidder forecast",
            "The bidder expects at least $1 billion in annual benefits from combining the firms.",
          ),
          view(
            "share-value",
            "A forecast is not payment",
            "The buyer may gain value from the deal. Your owners only get what the final terms give them.",
          ),
        ],
      ),
      research(
        "alternatives",
        "Test the best outside path",
        3,
        "Compare a better bid, a partner, and staying alone.",
        [
          unknown(
            "other-bids",
            "No firm rival offer here",
            "We have no signed competing bid or complete partnership terms.",
          ),
          view(
            "bargain",
            "Set a limit for talks",
            "Seek a better price with a clear view of what happens if talks end. Delay has a cost if the current bid disappears.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "Is $31 a fixed cash value?",
      "What supports staying independent?",
      "What would justify asking for more?",
    ],
    event: event(
      "The board needs a range",
      "directors ask for a price range they can defend. A request for more needs a value case and a plan if the buyer walks away.",
    ),
    options: [
      option(
        "engage",
        "Enter talks at the offer",
        "Begin talks on the bid while checking value and closing terms.",
        "Takes a serious premium seriously, but may leave bargaining room unused.",
      ),
      option(
        "negotiate",
        "Seek a higher price",
        "Counter with a supported range and clear closing terms.",
        "Could improve value, but risks losing the bidder.",
      ),
      option(
        "reject",
        "Reject and back the plan",
        "Stay independent with a clear plan and milestones.",
        "Keeps upside and control, but owners bear the turnaround risk.",
      ),
      option(
        "hold",
        "Wait before a formal response",
        "Keep current operations while reviewing value and other paths.",
        "Allows more work, but uncertainty can weaken the business and the offer.",
      ),
    ],
    reveal: {
      company: "Yahoo and Microsoft",
      identityAliases: ["Yahoo", "Microsoft", "Jerry Yang", "Steve Ballmer"],
      title: "The bid that fell apart",
      history:
        "Microsoft later raised its offer, but the firms did not agree. Microsoft withdrew in May 2008. The February premium did not become cash for Yahoo's owners.",
      lesson:
        "Price matters, but so does the chance to close. Know your fallback before pushing for more.",
      sources: [
        source(
          "s1",
          "Microsoft: offer and board letter, February 1, 2008",
          "https://news.microsoft.com/source/2008/02/01/microsoft-proposes-acquisition-of-yahoo-for-31-per-share/",
        ),
        source(
          "s2",
          "Microsoft: bid withdrawal, May 3, 2008",
          "https://news.microsoft.com/source/2008/05/03/microsoft-withdraws-proposal-to-acquire-yahoo/",
        ),
      ],
      consequences: {
        engage:
          "Talks can clarify the real offer. Agreeing to talk need not mean accepting every term.",
        negotiate:
          "A sound value case may win more. An unsupported demand may end the chance to sell.",
        reject:
          "Owners keep future upside. They also keep the risk that the plan falls short.",
        hold: "Review time may help. Set a deadline so waiting does not become a choice by default.",
      },
      rubric: [
        "Did you separate a premium from fair value?",
        "Did you notice the moving stock component?",
        "Did you treat buyer savings as a forecast?",
        "Did you give a defensible fallback if talks fail?",
      ],
    },
  },
  {
    id: "case-030",
    version: 1,
    number: "30",
    title: "One service or two",
    subtitle: "A neat split may be a messy customer trip.",
    category: "Product structure",
    year: "2011",
    role: "You lead Netflix, a movie service with streaming and discs by mail.",
    objective:
      "Give each service room to grow without making life harder for members.",
    briefing:
      "September 2011. You have split the prices for streams and mailed discs. Now the team is considering a separate brand and website for discs. Decide whether to split the customer experience too.",
    question: "How should the two services work for members?",
    evidence: [
      fact(
        "services",
        "Two ways to watch",
        "The US business offers streaming and DVDs by mail.",
      ),
      fact(
        "plans",
        "Prices already split",
        "In July, the firm made streaming and unlimited discs separate plans.",
      ),
      fact(
        "combined",
        "Both costs more",
        "Members who take both services face a price increase under the new plans.",
      ),
      fact(
        "stream",
        "A streaming price",
        "The US streaming plan costs $7.99 a month.",
      ),
    ],
    research: [
      research(
        "disc",
        "Check how disc plans work",
        1,
        "Look at what drives the price of mailed movies.",
        [
          fact(
            "disc-price",
            "Disc use changes the bill",
            "Disc plan prices vary with how many discs a member may have out at once.",
          ),
          view(
            "separate-cost",
            "Different costs, shared member",
            "Separate prices can reflect separate costs. They do not require separate websites.",
          ),
        ],
      ),
      research(
        "extras",
        "Check the disc extras",
        2,
        "See how much choice the disc service already manages.",
        [
          fact(
            "bluray",
            "Another price choice",
            "High-definition discs carry a $1 to $4 monthly surcharge on the most popular plans.",
          ),
          unknown(
            "overlap",
            "Who uses both?",
            "We do not have a prelaunch member study on demand for separate sites.",
          ),
        ],
      ),
      research(
        "journey",
        "Walk the member's path",
        2,
        "Compare choosing a movie under one site and under two.",
        [
          view(
            "friction",
            "More places to manage",
            "A site split could mean separate searches, lists, and account tasks. Test the whole trip, not just each page.",
          ),
          unknown(
            "test",
            "No proven gain for members",
            "We have no test showing that separate sites make it easier to find and watch a movie.",
          ),
        ],
      ),
      research(
        "teams",
        "Separate teams from websites",
        3,
        "See whether the staff can focus without splitting the front door.",
        [
          view(
            "inside-out",
            "Two teams can share a door",
            "Teams can own separate costs and plans while members use one account. That needs clear shared rules.",
          ),
          unknown(
            "systems",
            "The work is not priced",
            "We lack cost and timing estimates for keeping a shared account while teams separate.",
          ),
        ],
      ),
    ],
    suggestedQuestions: [
      "Do separate prices need separate sites?",
      "What gets harder for members who use both?",
      "Could separate teams share one account?",
    ],
    event: event(
      "A member-path check",
      "the support team asks who will help a member with both plans after a split. The launch needs one clear path for account problems.",
    ),
    options: [
      option(
        "split",
        "Split the brand and site",
        "Give discs their own name and website.",
        "Makes team focus clear, but adds work for members using both.",
      ),
      option(
        "shared",
        "Keep one front door",
        "Keep separate plans and teams behind one brand and account.",
        "Protects ease of use, but needs coordination between teams.",
      ),
      option(
        "trial",
        "Test the split with volunteers",
        "Try the separate site with willing members before a broad move.",
        "Finds friction early, but volunteers may be unusually patient.",
      ),
      option(
        "hold",
        "Hold all further changes",
        "Keep the present setup while members adjust to the new prices.",
        "Avoids another shock, but leaves the team structure unsettled.",
      ),
    ],
    reveal: {
      company: "Netflix",
      identityAliases: ["Netflix", "Qwikster", "Reed Hastings"],
      title: "The Qwikster reversal",
      history:
        "Netflix announced Qwikster for DVDs, then dropped the separate brand and website plan. Its filing said the price change drove strong anger, with the branding change adding to it.",
      lesson:
        "An easier org chart can make a harder customer trip. Split the work only where the user gains too.",
      sources: [
        source(
          "s1",
          "Netflix: 2011 third-quarter filing, prior July pricing and later reversal",
          "https://www.sec.gov/Archives/edgar/data/1065280/000119312511284366/d222257d10q.htm",
        ),
      ],
      consequences: {
        split:
          "Teams gain a clear boundary. Members may face more tasks just to use what they already bought.",
        shared:
          "Members keep one place to manage service. Teams must resolve shared account and support work.",
        trial:
          "You can spot friction before forcing it on everyone. Set a success rule beyond volunteer praise.",
        hold: "You give members time to adjust. Decide when and why to revisit the structure.",
      },
      rubric: [
        "Did you separate team structure from customer experience?",
        "Did you consider members who use both plans?",
        "Did you distinguish price anger from the proposed site change?",
        "Did you set a test for ease of use and support?",
      ],
    },
  },
];

export const cases22to30: CaseDefinition[] = authoredCases;
