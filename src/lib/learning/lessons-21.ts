import type { CaseLesson, ChoiceLesson } from "./types";

const choice = (
  score: number,
  why: string,
  tradeoff: string,
): ChoiceLesson => ({
  score,
  verdict:
    score >= 80
      ? "Strong move"
      : score >= 55
        ? "Reasonable move"
        : "Risky move",
  why,
  tradeoff,
});

export const lessons21: Record<string, CaseLesson> = {
  "case-021": {
    skill: "Check what each partner wants",
    takeaway:
      "A maker may reject a product that buyers want. Check whose money the new idea puts at risk.",
    choices: {
      own: choice(
        85,
        "A small run lets you test British demand and keep control. Japan sales give you a start, not proof.",
        "You must pay for making, selling, and fixing each cleaner. Keep the first run within what you can support.",
      ),
      license: choice(
        70,
        "A maker without bag sales to protect may be a better fit. The earlier refusals do not rule that out.",
        "You avoid some factory cost but give up control. Set a date to end talks if no suitable maker commits.",
      ),
      partner: choice(
        80,
        "A sales partner can reach shops while you focus on the cleaner. Clear repair duties make that promise more credible.",
        "Faster reach means sharing control and income. Agree who owns the name and helps buyers before signing.",
      ),
      hold: choice(
        60,
        "Japan gives you a route that already sells. Keeping it can protect cash while you test the British market.",
        "You learn less about buyers at home. Set a small price test so a pause does not become endless waiting.",
      ),
    },
    history: {
      decision:
        "Dyson made the DC01 under its own name. The first cleaner left its Chippenham production line on July 1, 1993.",
      result:
        "The firm outgrew that site and moved operations to Malmesbury in 1994, according to its company history.",
      connection:
        "Owning the brand also meant building the factory. Growth shows the route worked for Dyson, not that every inventor should build alone.",
      sources: [
        {
          title: "Dyson company timeline: 1993 production and 1994 move",
          url: "https://careers.dyson.com/en-gb/who-we-are/",
        },
      ],
    },
    terms: [
      {
        term: "License",
        meaning: "Let another firm use your design in return for payment.",
      },
      { term: "Unit cost", meaning: "What it costs to make one item." },
    ],
    researchNotes: {
      "c21-r1":
        "Bag profits help explain the refusals. Seek a maker with different interests before treating them as weak buyer demand.",
      "c21-r2":
        "The early test shows the idea can work. It does not settle cost or quality when making many cleaners.",
      "c21-r3":
        "Before an own-brand run, price repairs and parts as well as production. No factory budget is supplied here.",
      "c21-r4":
        "Use a British price and dust test to size the first run. Japan sales alone cannot set that size.",
    },
    eventChange: {
      optionId: "partner",
      title: "Take the partner's name and repair plan",
      description:
        "The new offer gets you into shops sooner, but the partner controls the name and repairs.",
      tradeoff:
        "Faster reach now gives the partner control of the buyer's trust and help after a sale.",
      why: "The offer removes two rights you hoped to keep. Check repair standards before giving up control over the buyer's experience.",
      score: 65,
    },
    check: {
      question:
        "A new maker sells no vacuum bags and offers a short license. What should you check first?",
      options: [
        {
          id: "a",
          text: "Its quality and repair terms",
          explanation:
            "Yes. Its interests fit better, but buyers still need a working cleaner and help.",
        },
        {
          id: "b",
          text: "Whether earlier makers said no",
          explanation:
            "Those makers had different interests. Their refusals do not settle this offer.",
        },
        {
          id: "c",
          text: "How many prototypes you built",
          explanation:
            "Past effort does not show whether this partner can make and support the cleaner.",
        },
      ],
      answerId: "a",
    },
  },
  "case-022": {
    skill: "Act when the safe boundary is unclear",
    takeaway:
      "A known danger in one place does not prove that every other place is safe.",
    choices: {
      wide: choice(
        90,
        "People have died and the safe boundary is not known. A broad pull reduces exposure without waiting for that map.",
        "Returns and lost sales cost a lot. Give homes and stores a simple way to hand bottles back.",
      ),
      local: choice(
        55,
        "A local pull acts quickly where harm is known. But the case does not show a safe border around that area.",
        "Fewer bottles are removed, but danger may remain elsewhere. Expand the pull if you cannot establish a safe boundary.",
      ),
      pause: choice(
        50,
        "Stopping shipments blocks new stock from reaching stores. It leaves bottles already bought in homes, where people can still take them.",
        "The supply pause buys time but is not a full recall. You still need warnings and a way to collect bottles.",
      ),
      hold: choice(
        25,
        "Testing may help trace the threat. Waiting leaves people exposed to a known deadly risk while its reach remains unclear.",
        "You avoid a wider bill now. That saving has to be weighed against more people taking capsules before results arrive.",
      ),
    },
    history: {
      decision:
        "Johnson & Johnson recalled Tylenol capsules nationwide after the poisonings in 1982.",
      result:
        "The company then produced triple-seal packs that showed signs of tampering. It extended this packaging to its other non-prescription medicines.",
      connection:
        "Removing stock addressed the immediate danger. Changing the pack addressed the return to sale. Neither step made all future harm impossible.",
      sources: [
        {
          title: "Federal court: McNeilab v. North River, 1986 recall record",
          url: "https://law.justia.com/cases/federal/district-courts/FSupp/645/525/1499068/",
        },
        {
          title: "Johnson & Johnson: Our Story, 1982 triple-seal packaging",
          url: "https://www.multivu.com/players/English/8077331-jnj-our-story/docs/innovationpdf-1493413121502-367853104.pdf",
        },
      ],
    },
    terms: [
      {
        term: "Recall",
        meaning:
          "Ask stores and buyers to return a product because it may be unsafe.",
      },
      {
        term: "Tamper-evident",
        meaning: "Made to show signs that someone has opened or changed it.",
      },
    ],
    researchNotes: {
      brand:
        "Wide use means many homes may hold bottles. Include buyers at home, not just store shelves, in the recall plan.",
      cover:
        "The firm must pay recall costs itself. Arrange funding, but do not treat lack of cover as proof that stock is safe.",
      scope:
        "No safe border is established. A local pull needs stronger support than the location of the known deaths.",
      return:
        "Set pack checks and a bottle-return route before restarting sales. This planning note does not supply a tested new pack.",
    },
    eventChange: {
      optionId: "wide",
      title: "Give every store one return rule",
      description:
        "Answer the store group's request with a nationwide pull and one clear process for collecting capsules.",
      tradeoff:
        "One rule is easier for branches to follow, but collecting bottles nationwide takes money and staff.",
      why: "Stores now need clear instructions. A common return rule makes the broad pull easier to carry out while the danger's reach is unclear.",
      score: 95,
    },
    check: {
      question:
        "Tests now trace every bad bottle to one sealed shipment. What changes?",
      options: [
        {
          id: "a",
          text: "All future pills are safe",
          explanation:
            "No. Tracing this shipment does not prove future stock cannot be harmed.",
        },
        {
          id: "b",
          text: "A targeted recall has a stronger basis",
          explanation:
            "Yes. A verified boundary makes a smaller pull easier to defend.",
        },
        {
          id: "c",
          text: "Warnings are no longer needed",
          explanation: "No. Buyers may still hold bottles from that shipment.",
        },
      ],
      answerId: "b",
    },
  },
  "case-023": {
    skill: "Match the promise to the product",
    takeaway:
      "An ad can bring people back once. The food must bring them back again.",
    choices: {
      switch: choice(
        85,
        "A frank launch gives lapsed buyers a reason to try again. Years of recipe work support a change, though repeat orders remain unproven.",
        "A bold claim puts every kitchen under pressure. Check store training and use one refund rule before a wide launch.",
      ),
      quiet: choice(
        75,
        "A quiet switch can improve the food without making loyal buyers doubt past orders. It still addresses the taste problem.",
        "People who stopped buying may miss the change. Track whether they return, not only whether current buyers stay.",
      ),
      trial: choice(
        85,
        "A small launch can show repeat orders and kitchen problems before a full switch. That fills a real gap in the evidence.",
        "The wider brand change takes longer. Pick varied stores and set the result that would justify a bigger launch.",
      ),
      hold: choice(
        45,
        "Keeping the old recipe protects familiar tastes and avoids launch work. It leaves the known taste concern without a clear fix.",
        "You save change costs now but may keep losing doubtful buyers. A pause needs a test and a date to decide.",
      ),
    },
    history: {
      decision:
        "Domino's replaced its main pizza recipe and used frank ads to explain the change at the end of 2009.",
      result:
        "US same-store sales rose 9.9% in 2010. Domino's credited more visits, the new pizza, and its ads.",
      connection:
        "The food and the message changed together. The sales rise does not isolate which change caused how much of the gain.",
      sources: [
        {
          title: "Domino's 2009 results: new pizza and advertising",
          url: "https://ir.dominos.com/node/9866",
        },
        {
          title: "Domino's 2010 results, March 1, 2011",
          url: "https://ir.dominos.com/node/10101",
        },
      ],
    },
    terms: [
      {
        term: "Franchise",
        meaning:
          "A store run by a local owner using the chain's name and rules.",
      },
      {
        term: "Same-store sales",
        meaning: "Sales at stores open in both periods being compared.",
      },
    ],
    researchNotes: {
      tests:
        "Tests include frequent and lapsed buyers. That supports trying the recipe, but real repeat orders still need a check.",
      offer:
        "The deal and guarantee lower the risk of trying. Check repeat profit and refund costs before keeping the offer long term.",
      message:
        "Frank ads may reach doubtful buyers but upset loyal ones. Test both groups instead of counting attention alone.",
      kitchens:
        "Check food, stock, and training before promising a new taste everywhere. This note does not prove stores are ready.",
    },
    eventChange: {
      optionId: "switch",
      title: "Set one switch date and refund rule",
      description:
        "Store owners now need instructions. Set the recipe change date, old-stock plan, and shared refund rule before the ad push.",
      tradeoff:
        "A clear date helps stores prepare, but training and using up old stock can slow the launch.",
      why: "The owners' request makes store work urgent. A shared date and refund rule help the food and the promise arrive together.",
      score: 90,
    },
    check: {
      question:
        "A trial gets many first orders but few second orders. What should you do next?",
      options: [
        {
          id: "a",
          text: "Buy more ads right away",
          explanation:
            "Ads may bring more first orders without fixing why people do not return.",
        },
        {
          id: "b",
          text: "Count first orders as proof",
          explanation:
            "A cheap trial can attract buyers even when the food does not win them back.",
        },
        {
          id: "c",
          text: "Check taste, service, and repeat price",
          explanation:
            "Yes. Find what stops another order before making the launch bigger.",
        },
      ],
      answerId: "c",
    },
  },
  "case-024": {
    skill: "Separate a clean test from a safe system",
    takeaway:
      "A clean sample does not clear every meal. Act on the whole pattern of harm.",
    choices: {
      reset: choice(
        85,
        "Illness spans states and the food source is unclear. Broader checks and training address risks that one store fix could miss.",
        "New controls cost time and money. Watch illness reports and verify that stores follow the checks rather than promising zero risk.",
      ),
      pause: choice(
        80,
        "A wider pause reduces meals served while teams trace food. It is a defensible response when the supply boundary is unclear.",
        "Closing alone does not find the source. Define what must be checked before opening again and support affected staff.",
      ),
      targeted: choice(
        60,
        "Linked stores are a useful place to start. Keeping others open needs close checks because shared food may travel beyond those stores.",
        "Service continues, but the safe boundary is unproven. Set clear triggers to widen checks or stop serving food.",
      ),
      hold: choice(
        30,
        "Waiting avoids rushed changes but the threat has spread. Current controls do not yet explain or contain the wider pattern.",
        "You preserve normal work today while diners remain at risk. Clean food samples alone do not justify doing nothing new.",
      ),
    },
    history: {
      decision:
        "Chipotle introduced added food testing, handling rules, and staff training after the outbreaks.",
      result:
        "CDC closed its investigation in February 2016 without finding a specific food. The larger outbreak had 55 cases in 11 states, with 21 hospital stays.",
      connection:
        "The probe ended without a named ingredient. Better controls still mattered; an unknown source was not proof that the system had been safe.",
      sources: [
        {
          title: "Chipotle food safety program, January 19, 2016",
          url: "https://ir.chipotle.com/news-releases?item=122453",
        },
        {
          title: "CDC final outbreak update, February 1, 2016",
          url: "https://archive.cdc.gov/www_cdc_gov/ecoli/2015/o26-11-15/index.html",
        },
      ],
    },
    terms: [
      {
        term: "Outbreak",
        meaning: "A group of illnesses linked by a shared cause.",
      },
      {
        term: "Trace",
        meaning:
          "Follow food back through stores and suppliers to find where it came from.",
      },
    ],
    researchNotes: {
      links:
        "Diner reports strongly link illness to the chain. They support action but do not name the food to remove.",
      labs: "Food samples tested clean, while germs from diners matched. Do not use the clean samples to dismiss the wider pattern.",
      supply:
        "Tracing may find which stores share food. Until then, targeted checks cannot assume other stores use separate supplies.",
      reset:
        "Choose checks that change food handling and supply. A wider pause needs reopening rules; this note cannot say how long it takes.",
    },
    eventChange: {
      optionId: "reset",
      title: "Pair the reset with a clear diner message",
      description:
        "Staff now need words to use. Explain the new safety steps and say plainly that the food source remains unknown.",
      tradeoff:
        "Clear words help staff answer, but they cannot replace checks or prove that every meal is safe.",
      why: "Staff need a usable message now. Naming both the steps and the unknown source avoids a false promise while changes begin.",
      score: 90,
    },
    check: {
      question:
        "One supplier is now confirmed as the source and all affected batches are traced. What becomes more useful?",
      options: [
        {
          id: "a",
          text: "Remove those batches and check their destinations",
          explanation:
            "Yes. The new evidence gives targeted action a clear boundary.",
        },
        {
          id: "b",
          text: "Say every future meal is safe",
          explanation:
            "Finding this source does not rule out all future problems.",
        },
        {
          id: "c",
          text: "Stop staff training",
          explanation:
            "A supplier finding does not remove the need for safe food handling.",
        },
      ],
      answerId: "a",
    },
  },
  "case-025": {
    skill: "Plan for the busiest point",
    takeaway:
      "A plan must survive a busy day at its tightest point, not just work on average.",
    choices: {
      buffer: choice(
        85,
        "The short season and rising box counts leave little room for error. Spare staff and transport can protect the tightest routes.",
        "Unused room costs money. Put it where sorting and transport would slow the whole flow, not simply everywhere.",
      ),
      cutoff: choice(
        85,
        "Firm cutoffs limit late demand before it fills the network. They make delivery promises easier to keep during a short season.",
        "Some stores may send late orders elsewhere. Agree counts and dates early so customers hear a promise you can meet.",
      ),
      flex: choice(
        75,
        "Triggers can keep spending tied to actual flow. This works best when reserve staff and transport are ready before the trigger fires.",
        "A warning that comes too late cannot create a truck or trained shift. Check how long each response takes.",
      ),
      hold: choice(
        45,
        "The forecast gives a starting plan, but several days may beat last year's peak. No spare-room map is shown.",
        "You save reserve costs if demand fits the plan. A surge at one full hub could still delay many routes.",
      ),
    },
    history: {
      decision:
        "UPS added people and equipment as the 2013 holiday surge strained its network. It used 85,000 temporary workers, over 30,000 above its hiring target.",
      result:
        "Delays still occurred. Peak deliveries topped 31 million on December 23, and higher volume and bad weather drove extra US operating costs.",
      connection:
        "Adding help after demand arrives can be costly and late. This does not prove that any single buffer would have prevented the delays.",
      sources: [
        {
          title: "UPS fourth-quarter 2013 results, January 30, 2014",
          url: "https://investors.ups.com/news-events/press-releases/detail/1145/ups-releases-4q-results",
        },
      ],
    },
    terms: [
      {
        term: "Capacity",
        meaning: "How much work a team or system can handle in a set time.",
      },
      {
        term: "Bottleneck",
        meaning: "The slow or full point that limits the whole flow.",
      },
    ],
    researchNotes: {
      flow: "A pickup peak becomes later sorting and delivery work. Plan across days rather than treating each daily count alone.",
      peaks:
        "Several record days make recovery harder. Check spare room by hub and day before relying on the total network size.",
      customers:
        "Firm store cutoffs can limit late boxes. This note gives no signed counts, so do not treat store demand as fixed.",
      stress:
        "Reserve help at the tightest point. Extra drivers alone cannot clear a full sorting hub, and no priced reserve plan is supplied.",
    },
    eventChange: {
      optionId: "cutoff",
      title: "Keep the cutoff until the store gives a count",
      description:
        "The store wants later orders but cannot commit to box numbers. Require a firm limit before extending its shipping promise.",
      tradeoff:
        "You may lose late orders, but you avoid promising room for an unknown surge.",
      why: "An unbounded late order request makes the forecast less useful. A firm count protects the promises already made to other stores.",
      score: 95,
    },
    check: {
      question:
        "A hub is full, but drivers have spare time. Where should the next shift go?",
      options: [
        {
          id: "a",
          text: "More drivers on the road",
          explanation:
            "Drivers cannot deliver boxes that have not left the full hub.",
        },
        {
          id: "b",
          text: "The hub's sorting work",
          explanation:
            "Yes. Help at the full point can release boxes for drivers who already have room.",
        },
        {
          id: "c",
          text: "More sales calls",
          explanation:
            "More orders add pressure before the network can clear its current work.",
        },
      ],
      answerId: "b",
    },
  },
  "case-026": {
    skill: "Judge the next dollar",
    takeaway:
      "Money already lost is gone. Compare what each choice will cost and earn from today.",
    choices: {
      exit: choice(
        85,
        "The review shows a long path to profit. An orderly exit can cap future losses and free attention for the home business.",
        "Leaving still costs cash and jobs. Include staff help, stock sales, and claims when deciding how to wind down.",
      ),
      shrink: choice(
        70,
        "A smaller network could keep useful stores and lower losses. It needs its own cash plan, not just fewer locations.",
        "Fewer stores may leave the supply system costly. Check whether the remaining stores can support the network they still need.",
      ),
      reset: choice(
        65,
        "A strict cash cap and progress dates can make one more test reasonable. The long route to profit sets a high bar.",
        "You spend more before knowing whether the fix works. Stop when agreed limits are reached, not when hope finally runs out.",
      ),
      hold: choice(
        35,
        "Keeping the same plan avoids sudden disruption. It does not address the review's long loss period or explain why another transfer pays off.",
        "Stores keep running but need more cash. Past spending cannot show that the next dollar will earn a return.",
      ),
    },
    history: {
      decision:
        "Target chose to leave Canada in January 2015 and began a court-supervised wind-down.",
      result:
        "It closed all 133 Canadian stores during 2015. By April 1, its three distribution centres and Canadian headquarters had already closed.",
      connection:
        "The exit became a real operating shutdown, not just an announcement. The closures do not tell us what a smaller network would have earned.",
      sources: [
        {
          title: "Target Canadian exit, January 15, 2015",
          url: "https://corporate.target.com/press/release/2015/01/target-corporation-announces-plans-to-discontinue-canadian-operations",
        },
        {
          title: "Target April 1, 2015 wind-down update",
          url: "https://corporate.target.com/press/release/2015/04/target-canada-to-close-all-canadian-stores-by-april-12",
        },
        {
          title: "Target history: completed 2015 Canada closure",
          url: "https://corporate.target.com/about/purpose-history/history-timeline?country=259&highlightsOnly=true",
        },
      ],
    },
    terms: [
      {
        term: "Sunk cost",
        meaning: "Money already spent that this decision cannot get back.",
      },
      {
        term: "Wind-down",
        meaning: "The work of closing a business in an orderly way.",
      },
    ],
    researchNotes: {
      smaller:
        "The team considered smaller networks. Compare their future cash needs before treating a smaller footprint as a proven fix.",
      exit: "The large accounting loss is not the same as the cash needed to leave. Compare future cash under each choice.",
      home: "US sales look stronger, but sales growth is not a return forecast. Check where another dollar has the better use.",
      people:
        "Budget staff help, stock sales, and claims. This note gives no final lease bill, so the exit cost still has uncertainty.",
    },
    eventChange: {
      optionId: "reset",
      title: "Cap the next cash transfer",
      description:
        "Finance now needs a funding rule. Release a fixed amount for the reset and set a date to check progress.",
      tradeoff:
        "Stores get short-term funding, but missing the agreed progress test must stop another open-ended transfer.",
      why: "The next transfer is now due. A stated amount and stop date turn a loose reset promise into a bounded test.",
      score: 75,
    },
    check: {
      question:
        "A smaller network now has a credible plan to earn more future cash than an exit. What matters most?",
      options: [
        {
          id: "a",
          text: "How much was lost last year",
          explanation:
            "That money is already gone and does not decide which future path is better.",
        },
        {
          id: "b",
          text: "Avoiding the shame of leaving",
          explanation:
            "Pride does not pay future bills or make the smaller network work.",
        },
        {
          id: "c",
          text: "The new plan's cash needs and risks",
          explanation:
            "Yes. New evidence can change the choice when it improves the path from today.",
        },
      ],
      answerId: "c",
    },
  },
  "case-027": {
    skill: "Replace shared control with clear rules",
    takeaway:
      "Splitting firms does not remove their shared work. Someone still has to settle a failed payment.",
    choices: {
      split: choice(
        80,
        "Separate ownership may give payments room to serve other markets. Contracts can keep the checkout link, if duties and service rules are clear.",
        "The split adds cost and new disputes between firms. Do not count hoped-for partner sales as money already won.",
      ),
      autonomy: choice(
        80,
        "More freedom can test whether payments needs different goals without a full split. Shared ownership keeps some checkout work simpler.",
        "Rival markets may still distrust the owner. Track whether wider deal freedom leads to real partner interest.",
      ),
      partial: choice(
        60,
        "Outside owners can bring funds and pressure to focus. Keeping control may preserve the shared link, but it leaves conflicting interests.",
        "You add owners without fully removing the rival-market concern. Set voting and service rules before selling the stake.",
      ),
      hold: choice(
        55,
        "Staying together preserves familiar checkout links and shared control. That is useful while the cost and terms of separation are still open.",
        "Different goals may keep slowing decisions. Define what evidence would justify more freedom or a later split.",
      ),
    },
    history: {
      decision:
        "eBay separated PayPal into an independent public company on July 17, 2015, giving eBay owners the PayPal shares.",
      result:
        "The split was completed. eBay's next quarterly report showed $2.1 billion in revenue for its continuing business, with PayPal reported separately as a discontinued operation.",
      connection:
        "The boundary changed in the accounts and in ownership. That result alone does not prove the split created more value than staying together.",
      sources: [
        {
          title: "PayPal second-quarter 2015 filing: completed distribution",
          url: "https://www.sec.gov/Archives/edgar/data/1633917/000163391715000008/pypl10-qq22015.htm",
        },
        {
          title: "eBay third-quarter 2015 results, October 21, 2015",
          url: "https://www.ebayinc.com/stories/news/ebay-inc-reports-third-quarter-2015-results/",
        },
      ],
    },
    terms: [
      {
        term: "Spin-off",
        meaning:
          "Turn part of a firm into a separate company owned by the existing shareholders.",
      },
      {
        term: "Autonomy",
        meaning: "Freedom for a team to make its own choices.",
      },
    ],
    researchNotes: {
      reach:
        "The payment service already works across many markets. Its size makes independence plausible, but does not prove extra sales after a split.",
      market:
        "The market business is large too. Check how changed payment terms affect it, not only how payments could grow.",
      contracts:
        "Write rules for access, service, data, and disputes before splitting. This note does not provide agreed terms or a separation bill.",
      partners:
        "Independence may ease rivals' concerns. Seek actual partner demand before counting new deals as a reason to split.",
    },
    eventChange: {
      optionId: "split",
      title: "Split only with a checkout dispute rule",
      description:
        "Product teams now need an owner for failed checkouts. Set service duties and a dispute path before separating.",
      tradeoff:
        "Clear contracts protect checkout, but settling the terms may delay the split and limit each firm's freedom.",
      why: "The teams have named a shared job that could fall between firms. Assigning it makes the separation plan more workable.",
      score: 85,
    },
    check: {
      question:
        "Payments gets freedom to make deals, but rival markets still refuse because eBay owns it. What does that show?",
      options: [
        {
          id: "a",
          text: "Ownership may be the remaining barrier",
          explanation:
            "Yes. Team freedom did not remove the concern about who controls the business.",
        },
        {
          id: "b",
          text: "A split guarantees new sales",
          explanation:
            "No. Removing one concern does not make rivals sign a deal.",
        },
        {
          id: "c",
          text: "Payment volume must be falling",
          explanation:
            "The refusals tell us about those partners, not total payment volume.",
        },
      ],
      answerId: "a",
    },
  },
  "case-028": {
    skill: "Protect what you are buying",
    takeaway:
      "Buying a creative team is not enough. Keep the people and work habits that make it valuable.",
    choices: {
      buy: choice(
        80,
        "Ownership secures access and the terms protect studio operations. Giving creative leaders real authority helps preserve what Disney wants to buy.",
        "Shares still cost owners part of future profits. Price and staff retention matter even when no large cash payment leaves today.",
      ),
      partner: choice(
        85,
        "A new film deal could secure access with less commitment. The past partnership shows that ownership is not the only route.",
        "The firms keep separate goals and must agree terms again. Check rights to future films and what happens when the deal ends.",
      ),
      build: choice(
        65,
        "Building inside keeps control and grows your own skill. It can be sensible if you can support the team while it learns.",
        "Money does not quickly copy another studio's craft. Set milestones and avoid assuming that past partner hits will become your own.",
      ),
      hold: choice(
        55,
        "A short pause preserves room to check price and authority. Current commitments provide some time, but future access remains unsettled.",
        "Waiting without a deadline leaves the next film plan unclear. Use the pause to compare a new contract with the stock deal.",
      ),
    },
    history: {
      decision:
        "Disney completed its all-stock purchase of Pixar on May 5, 2006. Ed Catmull and John Lasseter took leadership roles across both animation studios.",
      result:
        "Disney's next earnings report recorded charges for abandoning Pixar sequel projects that Disney had started before the purchase.",
      connection:
        "The deal changed real creative work, not just the owner name. Stopping existing projects also shows that a handoff can have a cost.",
      sources: [
        {
          title: "Disney completed Pixar acquisition, May 5, 2006",
          url: "https://thewaltdisneycompany.com/press-releases/disney-completes-pixar-acquisition/",
        },
        {
          title:
            "Disney third-quarter 2006 report, page 5: abandoned sequel projects",
          url: "https://thewaltdisneycompany.com/app/uploads/2015/10/Q3-FY06-Earnings-Report.pdf",
        },
      ],
    },
    terms: [
      {
        term: "Stock deal",
        meaning: "Pay for a company with shares rather than cash.",
      },
      {
        term: "Dilution",
        meaning:
          "Existing owners hold a smaller part after new shares are issued.",
      },
    ],
    researchNotes: {
      contract:
        "The old film agreement shows a way to buy access without ownership. Compare new contract rights with what a purchase adds.",
      talent:
        "The draft preserves locations and gives studio leaders wider roles. Check whether those rights are enough to keep the people who matter.",
      price:
        "The share exchange gives away part of future profits. Compare that cost with film and product value, not just cash saved.",
      culture:
        "Decide who can approve or stop a film. This note supplies no forecast of future hits, so do not price them as certain.",
    },
    eventChange: {
      optionId: "buy",
      title: "Name who has final say before buying",
      description:
        "Animation managers now ask who controls films. Put final creative authority in the deal before bringing the studios together.",
      tradeoff:
        "Clear authority reduces stalled decisions, but current managers must give up some control and may resist.",
      why: "The managers' question exposes a live handoff problem. Settling film authority protects the creative work that gives the purchase value.",
      score: 85,
    },
    check: {
      question:
        "The price falls, but the key creative team says it will leave after a sale. What should change?",
      options: [
        {
          id: "a",
          text: "Buy because it is cheaper",
          explanation:
            "A lower price may still be too high if the team behind the value leaves.",
        },
        {
          id: "b",
          text: "Recheck the value and people terms",
          explanation:
            "Yes. The asset you hoped to buy has changed even though the price is lower.",
        },
        {
          id: "c",
          text: "Treat past hits as guaranteed future hits",
          explanation:
            "Past films do not replace the people and process needed for new ones.",
        },
      ],
      answerId: "b",
    },
  },
  "case-029": {
    skill: "Know your fallback before bargaining",
    takeaway:
      "Asking for more can work. Know what you keep if the buyer walks away.",
    choices: {
      engage: choice(
        85,
        "A large premium with no funding condition deserves serious talks. Checking value and closing terms lets the board learn without accepting immediately.",
        "Starting at the offer may anchor talks low. Keep a supported value range and check how the share payment can change.",
      ),
      negotiate: choice(
        80,
        "A supported counter can seek part of the buyer's expected gains. It works best with a credible plan if talks fail.",
        "The buyer can walk away. A higher ask needs more than pride or a savings figure supplied by the buyer.",
      ),
      reject: choice(
        55,
        "Independence can preserve upside if the plan is strong. The supplied facts do not yet show a current value case above the offer.",
        "Owners keep all the turnaround risk and lose a firm bidder. Set measurable goals that justify that choice.",
      ),
      hold: choice(
        60,
        "A short review can improve the board's value estimate and find other paths. The complex payment terms deserve care.",
        "A silent or open-ended delay can weaken talks. Set a response date and tell the buyer what the review must settle.",
      ),
    },
    history: {
      decision:
        "Yahoo and Microsoft negotiated but did not agree on price. Microsoft said it raised its offer to $33 a share while Yahoo sought at least $37.",
      result:
        "Microsoft withdrew its purchase proposal on May 3, 2008. The proposed acquisition did not close.",
      connection:
        "The counter faced a real walk-away risk. The failed deal alone does not prove what price Yahoo should have accepted in February.",
      sources: [
        {
          title: "Microsoft withdrawal and letter to Yahoo, May 3, 2008",
          url: "https://news.microsoft.com/source/2008/05/03/microsoft-withdraws-proposal-to-acquire-yahoo/",
        },
      ],
    },
    terms: [
      {
        term: "Premium",
        meaning:
          "The amount an offer is above the share price used for comparison.",
      },
      {
        term: "Exchange ratio",
        meaning: "How many buyer shares you get for each share you own.",
      },
    ],
    researchNotes: {
      stock:
        "The share count is fixed, not its cash value. Check the offer again as Microsoft's share price moves.",
      history:
        "Earlier talks ended with a bet on independence. Test that plan again instead of treating the old choice as today's proof.",
      savings:
        "The buyer forecasts gains from combining firms. Use that in talks, but owners receive only what the signed terms promise.",
      alternatives:
        "Compare the bid with a credible fallback. No rival bid is supplied, so do not bargain as if one is ready.",
    },
    eventChange: {
      optionId: "negotiate",
      title: "Counter with a range and a fallback",
      description:
        "Directors now demand a price they can defend. Set a supported range and decide what to do if Microsoft walks.",
      tradeoff:
        "A supported range can improve talks, but reaching your limit may mean losing the offer and funding the turnaround alone.",
      why: "The board's request makes the fallback explicit. A range tied to value gives the counter more support than simply asking for more.",
      score: 85,
    },
    check: {
      question:
        "A verified turnaround forecast is now well below the offer, and no rival bidder appears. What becomes stronger?",
      options: [
        {
          id: "a",
          text: "Demand any price you like",
          explanation:
            "The weak fallback gives less support for risking the bidder.",
        },
        {
          id: "b",
          text: "Reject to protect the old plan",
          explanation: "The new forecast weakens that plan's case.",
        },
        {
          id: "c",
          text: "Enter serious talks on closing terms",
          explanation:
            "Yes. A credible offer looks better when the independent path is worth less.",
        },
      ],
      answerId: "c",
    },
  },
  "case-030": {
    skill: "Separate team needs from customer needs",
    takeaway:
      "Two teams can have different goals while customers keep one easy place to get things done.",
    choices: {
      split: choice(
        45,
        "Separate sites may help teams focus, but no test shows a gain for members. People with both plans may face extra work.",
        "New names and accounts can add confusion after a price rise. Test the full member journey before making everyone switch.",
      ),
      shared: choice(
        90,
        "One brand and account preserve a familiar path while plans stay separate. That fits the lack of proof that members need two sites.",
        "Teams must share account and support rules. Assign owners for common tasks so the simple front door has reliable work behind it.",
      ),
      trial: choice(
        85,
        "A volunteer test can reveal extra searches, lists, and support work before a forced move. It helps test the supposed member benefit.",
        "Volunteers may be more patient than other members. Include people using both services and watch completed tasks, not just praise.",
      ),
      hold: choice(
        75,
        "Pausing gives members time to adjust to prices and gives the team room to study the split. That is reasonable after a big change.",
        "A pause does not settle team duties. Set a date and a member test so the decision does not drift.",
      ),
    },
    history: {
      decision:
        "Netflix announced a separate Qwikster brand and website for DVDs, then dropped the plan and kept the sites together.",
      result:
        "US membership fell by about 800,000 in the third quarter of 2011. Netflix blamed the price change and, to a lesser degree, the branding announcement.",
      connection:
        "The filing separates two sources of anger. Do not blame the whole loss on Qwikster or assume separate teams require separate customer accounts.",
      sources: [
        {
          title:
            "Netflix third-quarter 2011 filing: reversal and US membership loss",
          url: "https://www.sec.gov/Archives/edgar/data/1065280/000119312511284366/d222257d10q.htm",
        },
      ],
    },
    terms: [
      {
        term: "Customer journey",
        meaning:
          "All the steps a person takes to finish a task with a service.",
      },
      {
        term: "Churn",
        meaning:
          "The share of customers who stop using a paid service during a period.",
      },
    ],
    researchNotes: {
      disc: "Disc prices depend on use. Different costs can justify different plans without requiring different websites.",
      extras:
        "Members already manage disc choices and extra fees. Check how a second site changes that work before adding it.",
      journey:
        "Try finding and managing movies across both plans. No test here shows that two sites make those tasks easier.",
      teams:
        "Separate team goals can sit behind one account. Price the shared work before treating a site split as the only option.",
    },
    eventChange: {
      optionId: "shared",
      title: "Keep one account and one help route",
      description:
        "Support now asks who helps members with both plans. Keep a shared help path and name the team that owns each issue.",
      tradeoff:
        "Members avoid being sent between sites, but both teams must agree on who fixes shared account problems.",
      why: "The support question exposes work a split could push onto members. One help route preserves ease while teams take clear duties.",
      score: 95,
    },
    check: {
      question:
        "Two teams can now use one account, but have separate budgets. Must members use two websites?",
      options: [
        {
          id: "a",
          text: "No, test what helps members finish tasks",
          explanation:
            "Yes. Internal budgets do not decide the best customer path.",
        },
        {
          id: "b",
          text: "Yes, every team needs a site",
          explanation:
            "Team structure is not proof that members benefit from separate sites.",
        },
        {
          id: "c",
          text: "Only members who pay more",
          explanation: "A higher bill does not make extra account work useful.",
        },
      ],
      answerId: "a",
    },
  },
};
