import type { CaseLesson } from "./types";

export const lessons11: Record<string, CaseLesson> = {
  "case-011": {
    skill: "Buy time for the real business",
    takeaway:
      "A side sale is useful only if it buys time to test the main idea.",
    choices: {
      bridge: {
        score: 80,
        verdict: "Strong move",
        why: "A small batch tests a cash source while limiting the detour from home stays.",
        tradeoff:
          "Boxes take time and money before sales are sure. Keep host calls on the calendar.",
      },
      core: {
        score: 85,
        verdict: "Strong move",
        why: "Paid stays test the business you want to build. Early guests give you a place to start.",
        tradeoff:
          "Bookings may grow too slowly to cover rising debt. Set a cash limit for the test.",
      },
      fundraise: {
        score: 65,
        verdict: "Reasonable move",
        why: "A backer could fund more tests. But the team has no firm offer and weak growth so far.",
        tradeoff:
          "Pitch meetings use time without sure cash. Keep a second way to pay the bills.",
      },
      hold: {
        score: 70,
        verdict: "Reasonable move",
        why: "Stopping new spending can slow the debt while the founders earn money elsewhere.",
        tradeoff:
          "Less time on the site means slower learning. Set a date to review whether to restart.",
      },
    },
    history: {
      decision:
        "Airbnb's founders sold election-themed cereal in 2008 while trying to keep their home-stay business alive.",
      result:
        "Cofounder Nathan Blecharczyk said the sale brought $30,000 to reduce debt. Airbnb still needed funding and joined Y Combinator in January 2009.",
      connection:
        "The cereal bought breathing room. Its sales did not prove people would book stays. The founders still had to grow the main business.",
      sources: [
        {
          title: "Nathan Blecharczyk's firsthand account, May 24, 2021",
          url: "https://polsky.uchicago.edu/2021/05/24/fireside-chat-polsky-airbnb-cofounder-nathan-blecharczyk/",
        },
      ],
    },
    check: {
      question:
        "Suppose each cereal box would cost more to make and ship than buyers will pay. What should change?",
      options: [
        {
          id: "more",
          text: "Sell more boxes to raise cash",
          explanation:
            "More loss-making boxes would use more cash, even if sales looked busy.",
        },
        {
          id: "stop",
          text: "Pause the sale and find a cheaper bridge",
          explanation:
            "A bridge must leave usable cash. Change the costs, price or funding plan before making boxes.",
        },
        {
          id: "press",
          text: "Keep going because press is valuable",
          explanation:
            "Attention might help later, but it does not pay today's bill.",
        },
      ],
      answerId: "stop",
    },
    terms: [
      {
        term: "Bridge funding",
        meaning:
          "Short-term cash that keeps a business going until its next step.",
      },
      {
        term: "Burn",
        meaning: "How much cash a business uses up over a period.",
      },
      {
        term: "Paid demand",
        meaning: "People buying, rather than only saying they like an idea.",
      },
    ],
    researchNotes: {
      guests:
        "Shows what early guests valued, helping you choose which part of the stay to test next.",
      supply:
        "Shows hosts offer more than spare rooms. This may widen the stay idea worth testing.",
      funding:
        "Checks whether current bookings can fund the next step, which affects how urgent a cash bridge is.",
      cereal:
        "Shows which costs and orders you need before making boxes. It does not supply a demand test.",
    },
    eventChange: {
      optionId: "bridge",
      title: "Make press samples, pause host calls",
      description:
        "Use the short press window for a small cereal batch. Host calls must wait while you make samples.",
      tradeoff:
        "A chance at attention now costs time with the hosts your main business needs.",
      why: "The reporter creates a timely opening, but samples now displace host calls. Keep the detour small.",
      score: 75,
    },
  },
  "case-012": {
    skill: "Test a new use for what remains",
    takeaway:
      "Your own team's use is a clue. Outside teams must show they can use and pay for the tool.",
    choices: {
      pivot: {
        score: 80,
        verdict: "Strong move",
        why: "You have a working tool, a small team and cash left. A new bet has something real behind it.",
        tradeoff:
          "Building a paid product commits cash before outside demand is known. Set a spending limit and early buyer check.",
      },
      test: {
        score: 90,
        verdict: "Strong move",
        why: "An outside trial checks the biggest gap: whether the tool helps people who did not build it.",
        tradeoff:
          "A trial slows a full launch. Ask for repeat use and payment, not just kind words.",
      },
      sell: {
        score: 65,
        verdict: "Reasonable move",
        why: "A buyer might value the team or tool, giving you a way to recover some value.",
        tradeoff:
          "There is no offer yet. Buyer talks can use up the cash you hope to save.",
      },
      hold: {
        score: 60,
        verdict: "Reasonable move",
        why: "Closing avoids risking the remaining cash on another unproved idea.",
        tradeoff:
          "It gives up a working tool before a small outside test. Compare the cost of that test with closing.",
      },
    },
    history: {
      decision:
        "Tiny Speck used its remaining team and cash to move from the failed game Glitch to team chat. Slack launched in 2014.",
      result:
        "By April 30, 2019, Slack reported more than 95,000 paying customer groups. Its use had spread far beyond the team that built it.",
      connection:
        "Paying outside groups later showed demand. That success was not known at the start, when a small trial could still have found reasons to stop.",
      sources: [
        {
          title:
            "Board member John O'Farrell's firsthand account, June 20, 2019",
          url: "https://a16z.com/announcement/slack/",
        },
        {
          title: "Slack's SEC-filed first-quarter fiscal 2020 call",
          url: "https://www.sec.gov/Archives/edgar/data/1764925/000162828019007864/exhibit992-8xk.htm",
        },
      ],
    },
    check: {
      question:
        "Suppose trial teams use the tool each week but refuse to pay. What should you check before hiring more staff?",
      options: [
        {
          id: "paid",
          text: "Test an offer that a team will pay for",
          explanation:
            "Repeat use is promising. A paid offer checks whether that use can support a business.",
        },
        {
          id: "free",
          text: "Count free users as proof of a business",
          explanation:
            "Free use does not show enough money will come in to cover costs.",
        },
        {
          id: "quit",
          text: "Close because the trial proved nothing",
          explanation:
            "The trial found useful demand. The open question is what people will pay for.",
        },
      ],
      answerId: "paid",
    },
    terms: [
      {
        term: "Pivot",
        meaning: "A change in what a business sells or who it serves.",
      },
      {
        term: "Repeat use",
        meaning: "People coming back to use a product again.",
      },
      {
        term: "Sunk cost",
        meaning: "Money or time already spent that you cannot get back.",
      },
    ],
    researchNotes: {
      board:
        "Checks permission to use the cash left, which affects whether a new bet can go ahead.",
      signal:
        "Shows why more work on the game was not enough, helping you judge the next use of cash.",
      team: "Shows who remains to build the tool and where outside selling is still unproved.",
      buyers:
        "Helps shape a test of setup, repeat use and payment. It adds no outside customer results.",
    },
    eventChange: {
      optionId: "test",
      title: "Test setup without a guided call",
      description:
        "Make setup work for the willing outside team, then watch whether it uses the tool again.",
      tradeoff:
        "Scarce team time goes into setup before the trial can answer whether the tool stands on its own.",
      why: "The willing team cannot join a setup call. Spending limited time on setup makes this a useful outside test.",
      score: 85,
    },
  },
  "case-013": {
    skill: "Choose what cash must support",
    takeaway:
      "A profitable part can still tie up cash. Compare the cash each part needs with what you must protect.",
    choices: {
      focus: {
        score: 85,
        verdict: "Strong move",
        why: "Losses and a wide cost base call for focus. Seeking park buyers can free resources for the toy business.",
        tradeoff:
          "A sale gives up future income. Compare bids with the cost of keeping the parks before agreeing.",
      },
      toys: {
        score: 80,
        verdict: "Strong move",
        why: "Trimming toy work tackles costs while leaving time to judge whether the parks should be sold.",
        tradeoff:
          "You still own businesses beyond toys. Check their cash needs and which toy lines are safe to cut.",
      },
      growth: {
        score: 60,
        verdict: "Reasonable move",
        why: "Fresh toys could bring back buyers. But a new theme adds spending while the firm is losing money.",
        tradeoff:
          "Cash goes out before sales arrive. Protect funds for current needs and test demand before a large launch.",
      },
      hold: {
        score: 70,
        verdict: "Reasonable move",
        why: "Cuts are already under way. Giving them time can avoid a rushed sale of useful assets.",
        tradeoff:
          "Losses may keep using cash. Set a review date and a cash floor for waiting.",
      },
    },
    history: {
      decision:
        "LEGO narrowed its focus to toys and sold its LEGOLAND parks in July 2005 after deciding to sell them in 2004.",
      result:
        "LEGO reported a 505 million kroner net profit in 2005, after a 1,931 million loss in 2004. Both toy sales growth and cost cuts helped.",
      connection:
        "The recovery involved better trading, cost cuts and asset sales. It does not prove that selling any profitable business will fix a cash problem.",
      sources: [
        {
          title: "LEGO Annual Report 2005, management review and Note 7",
          url: "https://www.lego.com/cdn/cs/aboutus/assets/blt6eacf5a8b7af1359/Annual_Report_2005_ENG.pdf",
        },
      ],
    },
    check: {
      question:
        "Suppose the parks earn a profit but need cash for repairs before toy bills are due. Which fact matters most now?",
      options: [
        {
          id: "visitors",
          text: "How many people like visiting the parks",
          explanation:
            "Popularity alone does not show whether the firm can pay its bills on time.",
        },
        {
          id: "profit",
          text: "Whether the parks made a profit last year",
          explanation:
            "Last year's profit does not show when repair bills and cash receipts arrive.",
        },
        {
          id: "cash",
          text: "Cash needed and received before bills fall due",
          explanation:
            "The timing shows whether keeping the parks puts the toy business short of cash.",
        },
      ],
      answerId: "cash",
    },
    terms: [
      {
        term: "Profit",
        meaning: "Sales minus the costs counted for that period.",
      },
      {
        term: "Cash flow",
        meaning: "Money moving into and out of the business.",
      },
      {
        term: "Asset sale",
        meaning: "Selling something the business owns to another owner.",
      },
    ],
    researchNotes: {
      "c13-r1":
        "Checks what income a park sale gives up, so you do not treat every side business as a loss.",
      "c13-r2":
        "Shows the cost of earlier cuts, helping you plan how much cash another reset might need.",
      "c13-r3":
        "Explains why sales alone cannot tell you which toys to cut. Product profit figures are still missing.",
      "c13-r4":
        "Compares cash with short-term bank debt, which can change how long you can wait for a sale.",
    },
    eventChange: {
      optionId: "growth",
      title: "Launch a theme, delay the range reset",
      description:
        "Give the shared design team to new toys. Simplifying the old range must wait this season.",
      tradeoff:
        "The same team cannot do both major jobs now. A fresh theme delays the work to simplify toys.",
      why: "The team can support only one major reset. Choosing growth now gives up the simpler range this season.",
      score: 55,
    },
  },
  "case-014": {
    skill: "Make training change the work",
    takeaway:
      "A lesson needs time to practice and a later check that the skill stuck.",
    choices: {
      close: {
        score: 80,
        verdict: "Strong move",
        why: "Closing creates shared time for staff to practice coffee skills without serving customers at the same time.",
        tradeoff:
          "You lose an evening's trade across many shops. Check drinks later to see whether the lesson helped.",
      },
      rotate: {
        score: 85,
        verdict: "Strong move",
        why: "Small groups can practice while other staff serve buyers. This keeps the shops open and gives time for coaching.",
        tradeoff:
          "The schedule needs enough cover. Training during a rush could become watching instead of practicing.",
      },
      target: {
        score: 85,
        verdict: "Strong move",
        why: "Fresh drink checks can focus help where it is needed, instead of assuming every shop has the same problem.",
        tradeoff:
          "The checks take time and must be fair. Do not choose weak shops using old sales figures.",
      },
      hold: {
        score: 65,
        verdict: "Reasonable move",
        why: "Normal training avoids a large disruption when current skill gaps have not yet been measured.",
        tradeoff:
          "Fast growth may have left uneven skills. Review the current program rather than simply waiting.",
      },
    },
    history: {
      decision:
        "Starbucks closed nearly 7,100 company-run US shops for coffee training on February 26, 2008. Licensed shops were outside that evening's closure.",
      result:
        "Training took place, but the wider business still struggled. Sales at comparable company-run stores fell 3% worldwide in fiscal 2008 amid a weak economy.",
      connection:
        "One lesson did not settle the business problem. The sales drop also does not prove training failed. Drink checks would test the skill change more directly.",
      sources: [
        {
          title: "Seattle P-I reporter's on-site account, February 26, 2008",
          url: "https://www.seattlepi.com/business/article/starbucks-gives-an-express-course-in-espresso-1265614.php",
        },
        {
          title: "Starbucks fiscal 2008 annual report",
          url: "https://s203.q4cdn.com/326826266/files/doc_financials/SBUX2008ARv5_2008.pdf",
        },
      ],
    },
    check: {
      question:
        "Suppose fresh drink checks find problems in only a few shops, and spare trainers can visit them. What fits best?",
      options: [
        {
          id: "all",
          text: "Close every shop for the same lesson",
          explanation:
            "That uses a broad fix despite evidence that the need is limited.",
        },
        {
          id: "target",
          text: "Coach those shops and check drinks again",
          explanation:
            "The new evidence points to a focused fix, with a later check that it worked.",
        },
        {
          id: "none",
          text: "Skip training because most shops passed",
          explanation:
            "Most shops passing does not fix the known problems in the others.",
        },
      ],
      answerId: "target",
    },
    terms: [
      {
        term: "Licensed shop",
        meaning:
          "A shop run by another business with permission to use the brand.",
      },
      {
        term: "Comparable store sales",
        meaning:
          "Sales at older shops, compared with the same shops in an earlier period.",
      },
    ],
    researchNotes: {
      "c14-r1":
        "Shows how much sales depend on company-run shops, helping you weigh a broad closure.",
      "c14-r2":
        "Separates growth at existing shops from new openings, but cannot tell you which shops need training today.",
      "c14-r3":
        "Helps choose a practical skill check before deciding between a broad lesson and targeted help.",
      "c14-r4":
        "Shows what follow-up and licensed-shop coverage a training plan needs. It adds no measured training result.",
    },
    eventChange: {
      optionId: "rotate",
      title: "Train in shifts with cover or more days",
      description:
        "Keep shops open, but provide extra cover or spread lessons across more days so each person can practice.",
      tradeoff:
        "Keeping sales now requires more staff cover or a slower training rollout.",
      why: "People serving the queue cannot practice together. A rolling lesson still works only with cover or more days.",
      score: 75,
    },
  },
  "case-015": {
    skill: "Back a promise with useful help",
    takeaway:
      "A bold message earns trust when people can act on it and the business can keep its promise.",
    choices: {
      blunt: {
        score: 80,
        verdict: "Strong move",
        why: "A buy-less message fits the firm's stated purpose and admits that making clothes still harms nature.",
        tradeoff:
          "People may hear only the warning. Make repair help clear, and be ready to deliver it.",
      },
      care: {
        score: 90,
        verdict: "Strong move",
        why: "Care and repair give buyers a useful way to make clothes last, directly serving the buy-less goal.",
        tradeoff:
          "A quieter message may get less attention. The repair service still needs enough capacity to help.",
      },
      sale: {
        score: 65,
        verdict: "Reasonable move",
        why: "Selling durable gear supports wages and can help buyers choose items that last.",
        tradeoff:
          "It gives less weight to buying fewer things. Explain why a new purchase is needed.",
      },
      hold: {
        score: 80,
        verdict: "Strong move",
        why: "Improving repair support first can make the promise easier to keep when more people ask for help.",
        tradeoff:
          "You lose the holiday audience. Set a clear service goal and a date to revisit the ad.",
      },
    },
    history: {
      decision:
        "Patagonia ran its buy-less jacket ad on Black Friday 2011, linking it to a wider plan for repair, reuse and recycling.",
      result:
        "Its reuse plan became Worn Wear in 2013 and went online in 2017. In March 2021, Patagonia reported more than 130,000 repaired items since launch.",
      connection:
        "Later repair work gave the promise substance. The count does not show that the ad caused those repairs or that total clothing waste fell.",
      sources: [
        {
          title: "Patagonia's explanation of its 2011 jacket ad",
          url: "https://www.patagonia.com/stories/planet/activism/dont-buy-this-jacket-black-friday-and-the-new-york-times/story-18615.html",
        },
        {
          title: "Patagonia, Our Quest for Circularity, March 11, 2021",
          url: "https://eu.patagonia.com/no/en/stories/planet/our-footprint/our-quest-for-circularity/story-96496.html",
        },
      ],
    },
    check: {
      question:
        "Suppose repairs now have a long backlog, but the ad promises quick help. What should change first?",
      options: [
        {
          id: "promise",
          text: "Match the promise to what repair staff can do",
          explanation:
            "An honest wait time and a plan for the backlog protect trust and still help people keep gear.",
        },
        {
          id: "reach",
          text: "Buy more ad space",
          explanation:
            "More requests could make the gap between the promise and service worse.",
        },
        {
          id: "sales",
          text: "Count new sales as proof the promise works",
          explanation:
            "New sales do not show that people got the repair help promised.",
        },
      ],
      answerId: "promise",
    },
    terms: [
      {
        term: "Reuse",
        meaning: "Use an item again instead of replacing it with a new one.",
      },
      {
        term: "Repair capacity",
        meaning: "How many items a repair team can fix in a given time.",
      },
    ],
    researchNotes: {
      "c15-r1":
        "Checks an earlier blunt message, which helps judge audience fit without pretending it was a sales test.",
      "c15-r2":
        "Shows the repair and reuse promise that either ad must explain and support.",
      "c15-r3":
        "Shows a risk of readers missing the full message. It helps choose a clearer ad, not predict sales.",
      "c15-r4":
        "Shows gaps between product life and the firm's goals, helping decide whether service work should come first.",
    },
    eventChange: {
      optionId: "blunt",
      title: "Simplify the bold ad to show repair help",
      description:
        "Keep the buy-less line, but shorten the ad so readers can see the repair and reuse steps.",
      tradeoff:
        "The tight layout leaves room for fewer details. The headline must not crowd out the help.",
      why: "Repair details are hard to read in the new layout. A shorter ad can keep the message tied to action.",
      score: 75,
    },
  },
  "case-016": {
    skill: "Choose who the first demo serves",
    takeaway:
      "Pick a clear first audience. Make the first try easy, then give people a reason to return.",
    choices: {
      family: {
        score: 85,
        verdict: "Strong move",
        why: "Shared games fit the easy remote and the firm's aim to welcome people who do not usually play.",
        tradeoff:
          "Skilled fans may want more depth. Show a path from an easy first turn to games worth returning to.",
      },
      core: {
        score: 75,
        verdict: "Reasonable move",
        why: "Deep games give skilled fans a clear reason to buy and can show what the remote adds to familiar play.",
        tradeoff:
          "The first demo may miss new players, even though the handheld has reached them.",
      },
      both: {
        score: 80,
        verdict: "Strong move",
        why: "Serving both groups keeps existing fans involved while making room for a wider audience.",
        tradeoff:
          "An equal split can blur the launch message. Be clear about what each group should try first.",
      },
      hold: {
        score: 80,
        verdict: "Strong move",
        why: "Small demos can test whether people can start and enjoy the new way to play before a large campaign.",
        tradeoff:
          "Delaying big promotion can lose momentum. Use the demos to answer a clear launch question.",
      },
    },
    history: {
      decision:
        "Nintendo launched Wii in 2006 with its motion remote and games including Wii Sports and The Legend of Zelda: Twilight Princess.",
      result:
        "Nintendo reported 5.84 million Wii consoles sold worldwide in its first five months. It said both Wii Sports and Zelda sold well.",
      connection:
        "The range served different players. Strong sales do not show that every new buyer kept playing, or that the launch needed equal space for each audience.",
      sources: [
        {
          title: "Nintendo Annual Report 2007, operating results",
          url: "https://www.nintendo.co.jp/ir/pdf/2007/annual0703e.pdf",
        },
      ],
    },
    check: {
      question:
        "Suppose new players like the idea but cannot start the demo without help. What should come before more ads?",
      options: [
        {
          id: "ads",
          text: "Bring more people to the same demo",
          explanation: "More visitors would meet the same first-use problem.",
        },
        {
          id: "abandon",
          text: "Give up on all new players",
          explanation:
            "A poor first demo does not prove this whole audience is wrong.",
        },
        {
          id: "fix",
          text: "Simplify the first turn and test it again",
          explanation:
            "This checks whether the barrier is setup rather than lack of interest in playing.",
        },
      ],
      answerId: "fix",
    },
    terms: [
      { term: "Demo", meaning: "A short try that shows how a product works." },
      {
        term: "Launch audience",
        meaning:
          "The people you most want to reach when a product first goes on sale.",
      },
    ],
    researchNotes: {
      "c16-r1":
        "Shows the scale of handheld demand, helping judge the wider audience while keeping home-console demand unproved.",
      "c16-r2":
        "Tests the case for simple games with real sales evidence, rather than ease of use alone.",
      "c16-r3":
        "Helps plan a demo that checks first use and a second turn. It adds no trial results.",
      "c16-r4":
        "Shows cash available to support the launch and why a first demo needs more games behind it.",
    },
    eventChange: {
      optionId: "both",
      title: "Keep both groups, pick one lead demo",
      description:
        "Choose one game for the front window. The other can sell, but gets no equal place in the main display.",
      tradeoff:
        "Both audiences keep a game, but only one gets the retailer's main first impression.",
      why: "The retailer offers one main display. You can still sell both, but an equal split of launch space is gone.",
      score: 75,
    },
  },
  "case-017": {
    skill: "Price for value and renewals",
    takeaway:
      "A higher fee helps only if enough members keep paying. Check each tier, not just the total.",
    choices: {
      raise: {
        score: 85,
        verdict: "Strong move",
        why: "Small rises across both tiers can support income while a higher reward cap adds value for some top-tier members.",
        tradeoff:
          "The case does not show who will leave. Watch renewals and tier changes after the rise.",
      },
      basic: {
        score: 65,
        verdict: "Reasonable move",
        why: "Keeping the top price steady makes upgrading more attractive and adds income from the basic tier.",
        tradeoff:
          "The rise falls on basic members without a new reward. Some may leave instead of upgrading.",
      },
      top: {
        score: 80,
        verdict: "Strong move",
        why: "Keeping the entry fee protects access. A higher reward cap can support the higher top-tier price for frequent buyers.",
        tradeoff:
          "Top members who gain little from the cap may downgrade. Check income as well as member count.",
      },
      hold: {
        score: 85,
        verdict: "Strong move",
        why: "Sales are growing, and one lower profit quarter does not show members should pay more. Studying renewals is reasonable.",
        tradeoff:
          "Waiting gives up fee income now. Set a date and a clear question for the price review.",
      },
    },
    history: {
      decision:
        "Costco raised US and Canada annual fees to $60 and $120 in June 2017. The higher tier's reward cap rose to $1,000.",
      result:
        "In its May 2018 quarter, Costco reported 90% US and Canada renewal rates. Its 2017 fee increases added about $109 million over fiscal 2018's first 36 weeks.",
      connection:
        "Fees added income while reported renewals stayed high. Renewal rates lag, so that figure alone cannot show every member's response to the new price.",
      sources: [
        {
          title: "Costco fiscal 2017 Form 10-K, Membership",
          url: "https://www.sec.gov/Archives/edgar/data/909832/000090983217000014/cost10k90317.htm",
        },
        {
          title: "Costco quarter ended May 13, 2018, Form 10-Q",
          url: "https://www.sec.gov/Archives/edgar/data/909832/000090983218000008/cost10q51318.htm",
        },
      ],
    },
    check: {
      question:
        "Suppose total renewals stay high, but many top-tier members switch to basic. What should you check?",
      options: [
        {
          id: "total",
          text: "Only the total number of members",
          explanation:
            "That total hides the move from higher fees to lower fees.",
        },
        {
          id: "tier",
          text: "Fee income and renewals for each tier",
          explanation:
            "This shows whether downgrades are offsetting the extra income from higher prices.",
        },
        {
          id: "cap",
          text: "Only how many people used the reward cap",
          explanation:
            "The cap is one benefit. It does not measure the full effect of downgrades.",
        },
      ],
      answerId: "tier",
    },
    terms: [
      {
        term: "Renewal rate",
        meaning: "The share of members who pay to stay for another term.",
      },
      {
        term: "Tier",
        meaning: "One level of a plan, with its own price and benefits.",
      },
      {
        term: "Reward cap",
        meaning: "The most a member can earn from a reward in a period.",
      },
    ],
    researchNotes: {
      "c17-r1":
        "Shows which members gain from a higher reward cap, helping compare a broad rise with a top-tier rise.",
      "c17-r2":
        "Shows how many members the price change would reach, making both extra fees and lost renewals matter.",
      "c17-r3":
        "Separates the sources of the profit fall, so one headline number does not drive the fee choice.",
      "c17-r4":
        "Shows what to track after a fee change. It supplies no estimate of how many members will leave.",
    },
    eventChange: {
      optionId: "hold",
      title: "Keep the old fee for this notice batch",
      description:
        "Send this batch at the current price while you study renewal risk. A later rise needs another notice round.",
      tradeoff:
        "Waiting preserves today's price but adds another communication step if you change it later.",
      why: "The notice team needs a price now. Waiting remains possible, but a later rise requires another round of notices.",
      score: 75,
    },
  },
  "case-018": {
    skill: "Count the customer's work too",
    takeaway:
      "A smaller box is a better offer only if the buyer can turn it into a useful, safe product.",
    choices: {
      expand: {
        score: 85,
        verdict: "Strong move",
        why: "Existing kits give a starting point for lower shipping bulk. Proven fittings limit the risk of asking buyers to assemble more.",
        tradeoff:
          "More home assembly shifts work to buyers. Check the guide, missing parts and help costs as the range grows.",
      },
      pilot: {
        score: 90,
        verdict: "Strong move",
        why: "One more table tests the buyer's work before making the same change across a larger range.",
        tradeoff:
          "Savings arrive more slowly. Choose a table that exposes real fitting and instruction problems.",
      },
      built: {
        score: 65,
        verdict: "Reasonable move",
        why: "Ready-built tables spare customers assembly work and can suit buyers who need that service.",
        tradeoff:
          "Bulky shipping and damage are already problems. Find out whether buyers will cover the extra delivery cost.",
      },
      hold: {
        score: 75,
        verdict: "Reasonable move",
        why: "Keeping the current kits avoids adding new assembly problems while you learn from the range already on sale.",
        tradeoff:
          "It limits possible shipping savings. Use the pause to study real home assembly rather than wait without a test.",
      },
    },
    history: {
      decision:
        "IKEA expanded its use of flatpacks and home assembly as part of its low-price furniture offer.",
      result:
        "As IKEA grew in the 1960s and 1970s, missing parts and unclear guides frustrated buyers. The firm had to improve packing and assembly instructions.",
      connection:
        "Flatpacks cut shipping bulk but moved work into homes. The later problems show why a cheaper delivery system also needs reliable parts and clear steps.",
      sources: [
        {
          title: "IKEA Museum, Flatpacks: later supply and assembly problems",
          url: "https://ikeamuseum.com/en/explore/the-story-of-ikea/flatpacks/",
        },
      ],
    },
    check: {
      question:
        "Suppose the smaller new fitting fails a home assembly test, while the old one works. What is the best next move?",
      options: [
        {
          id: "old",
          text: "Keep the proven fitting while fixing the new one",
          explanation:
            "This keeps a working product available without sending an unproved joint into buyers' homes.",
        },
        {
          id: "ship",
          text: "Ship the new fitting because its box is smaller",
          explanation:
            "Packing savings do not outweigh a failed test of the finished table.",
        },
        {
          id: "stop",
          text: "Stop selling every home-assembly table",
          explanation:
            "One failed fitting does not erase the evidence that the older fitting works.",
        },
      ],
      answerId: "old",
    },
    terms: [
      {
        term: "Flatpack",
        meaning: "A product packed as parts in a flat box for later assembly.",
      },
      {
        term: "Fitting",
        meaning: "A part that joins or holds other parts together.",
      },
      {
        term: "Full cost",
        meaning:
          "All costs of making, delivering and helping someone use a product.",
      },
    ],
    researchNotes: {
      "c18-r1":
        "Checks the joint behind easy assembly, which affects whether more tables are ready for home building.",
      "c18-r2":
        "Shows the delivery wait buyers face elsewhere, helping judge what they gain for doing assembly work.",
      "c18-r3":
        "Identifies the home test needed before a wider range. It adds no measured assembly results.",
      "c18-r4":
        "Shows which costs a fair comparison must include. Shipping and support cost figures are still missing.",
    },
    eventChange: {
      optionId: "expand",
      title: "Expand with the older, tested fitting",
      description:
        "Use the proven fitting for the next table. Keep the smaller new fitting out until it passes a home test.",
      tradeoff:
        "You give up the new fitting's space saving to keep a tested way to build the table.",
      why: "The smaller fitting has not passed a home test. The older fitting lets expansion continue without that new unknown.",
      score: 80,
    },
  },
  "case-019": {
    skill: "Fix why people leave",
    takeaway:
      "More hires fill gaps once. Better pay and better work can help people stay, but both need checks.",
    choices: {
      pay: {
        score: 85,
        verdict: "Strong move",
        why: "Higher pay with clear terms gives people a reason to stay in work they find dull and demanding.",
        tradeoff:
          "Wages rise before gains are known. More pay alone does not make the pace safe or the tasks less dull.",
      },
      pace: {
        score: 85,
        verdict: "Strong move",
        why: "Slower or varied work tackles the difficult pace and dull tasks that are driving people away.",
        tradeoff:
          "Fewer cars may come off the line at first. Check whether steadier staffing and fewer faults repay the change.",
      },
      hire: {
        score: 70,
        verdict: "Reasonable move",
        why: "A larger trained pool can cover gaps and reduce pressure on the people already working.",
        tradeoff:
          "New staff may leave for the same reasons. Hiring needs a plan to improve what makes the work hard.",
      },
      hold: {
        score: 50,
        verdict: "Risky move",
        why: "Waiting avoids a large wage promise, but you already know people leave and struggle with the line's pace.",
        tradeoff:
          "More data has a cost when the same work problems continue. Address immediate gaps while learning.",
      },
    },
    history: {
      decision:
        "Ford introduced the $5 day and an eight-hour shift in 1914. Receiving the full pay depended on rules about workers' private lives.",
      result:
        "Crowds sought jobs. But a worker's wife wrote on January 23, 1914, asking Ford to investigate her husband's treatment on the line.",
      connection:
        "More people wanted jobs, yet complaints about treatment remained. Higher pay, fair terms and better working conditions need separate checks.",
      sources: [
        {
          title:
            "The Henry Ford: January 1914 applicant photograph and archival account",
          url: "https://www.thehenryford.org/collections/explore/artifact/35765",
        },
        {
          title:
            "The Henry Ford: $5 Day archive, including the January 23 worker-family letter",
          url: "https://www.thehenryford.org/collections/explore/sets/detail/henry-ford-5-day",
        },
      ],
    },
    check: {
      question:
        "Suppose higher pay brings in new hires, but injuries rise as the line speeds up. What should happen next?",
      options: [
        {
          id: "hire",
          text: "Hire more people to replace those hurt",
          explanation:
            "Replacing injured workers leaves the cause of the harm in place.",
        },
        {
          id: "pay",
          text: "Treat the larger hiring queue as success",
          explanation: "A popular job offer does not show the work is safe.",
        },
        {
          id: "safe",
          text: "Make the pace and tasks safe, then check again",
          explanation:
            "The new facts show a work-design problem that higher pay has not solved.",
        },
      ],
      answerId: "safe",
    },
    terms: [
      {
        term: "Turnover",
        meaning: "Workers leaving and needing to be replaced.",
      },
      {
        term: "Assembly line",
        meaning:
          "A sequence where each worker adds part of a product as it moves along.",
      },
      {
        term: "Output",
        meaning: "The amount of finished work a team produces.",
      },
    ],
    researchNotes: {
      "c19-r1":
        "Shows a quality cost of rushing, helping compare line speed with reliable finished cars.",
      "c19-r2":
        "Shows how work moves through the line, helping weigh a pace change against extra staffing.",
      "c19-r3":
        "Clarifies the pay terms you must set. It does not predict how many workers a $5 day would keep.",
      "c19-r4":
        "Shows how to compare pay and work changes through quits, injuries and faults. It adds no trial results.",
    },
    eventChange: {
      optionId: "hire",
      title: "Bring in new hires and coach them",
      description:
        "Use new people to cover the empty stations, with coaching before expecting the usual pace.",
      tradeoff:
        "New hires need help from the team. Empty stations cannot be filled with fully trained staff at once.",
      why: "The next run has empty stations, but replacements still need coaching. Hiring alone cannot restore the usual pace immediately.",
      score: 65,
    },
  },
  "case-020": {
    skill: "Trade knowledge with clear limits",
    takeaway:
      "A partner can help you learn and also become a stronger rival. Decide what both sides may share.",
    choices: {
      join: {
        score: 85,
        verdict: "Strong move",
        why: "A shared US plant offers local production while export limits remain. Sharing ownership also shares the new plant's burden.",
        tradeoff:
          "The partner learns your methods. Set clear training, use and exit terms before spending.",
      },
      own: {
        score: 75,
        verdict: "Reasonable move",
        why: "Your own US plant can reduce reliance on exports while keeping control over methods and decisions.",
        tradeoff:
          "You carry the cost and local learning alone. Compare that burden with the value of keeping control.",
      },
      license: {
        score: 75,
        verdict: "Reasonable move",
        why: "A narrow deal can earn money while limiting the methods and assets placed inside a shared business.",
        tradeoff:
          "You gain less direct experience running a US plant. Define what the license allows the buyer to use.",
      },
      hold: {
        score: 80,
        verdict: "Strong move",
        why: "Waiting for tighter terms can protect valuable know-how before a shared plant creates lasting ties.",
        tradeoff:
          "Exports remain limited while talks continue. Focus the delay on terms that would change the decision.",
      },
    },
    history: {
      decision:
        "Toyota and GM formed NUMMI in February 1984, each funding half of the new company. Toyota helped train the plant's leaders.",
      result:
        "The first Chevrolet Nova left the line in December 1984. Toyota trained 257 group and team leaders through early 1985. The partners agreed to extend their venture in 1993.",
      connection:
        "The partnership produced cars and practical learning. Doing that required training and shared methods, the same trade-off that needed clear limits before the deal.",
      sources: [
        {
          title: "Toyota 75-year history, NUMMI established",
          url: "https://www.toyota-global.com/company/history_of_toyota/75years/text/leaping_forward_as_a_global_corporation/chapter1/section3/item2.html",
        },
        {
          title: "Toyota 75-year history, NUMMI starts production",
          url: "https://www.toyota-global.com/company/history_of_toyota/75years/text/leaping_forward_as_a_global_corporation/chapter1/section3/item2_a.html",
        },
      ],
    },
    check: {
      question:
        "Suppose the partner now wants to use your methods in all its factories. What should you settle before agreeing?",
      options: [
        {
          id: "trust",
          text: "Whether its leaders seem friendly",
          explanation:
            "Good relations help, but they do not define what the partner is allowed to take elsewhere.",
        },
        {
          id: "scope",
          text: "Which uses are allowed and what you get in return",
          explanation:
            "The request changes the exchange. Set limits and value the wider access before agreeing.",
        },
        {
          id: "speed",
          text: "Only whether training can start sooner",
          explanation:
            "Faster training does not settle the lasting right to use the methods elsewhere.",
        },
      ],
      answerId: "scope",
    },
    terms: [
      {
        term: "Joint venture",
        meaning: "A business owned and run by two or more partners.",
      },
      {
        term: "Know-how",
        meaning: "Practical knowledge about how to do work well.",
      },
      {
        term: "License",
        meaning: "Permission to use something under agreed rules.",
      },
    ],
    researchNotes: {
      "c20-r1":
        "Shows why the partner wants the deal, helping you value both its help and what it may learn.",
      "c20-r2":
        "Shows the proposed size and term, helping compare a shared plant with owning one or waiting.",
      "c20-r3":
        "Names what your own teams fear sharing, helping you choose limits for training and model use.",
      "c20-r4":
        "Shows why a worker agreement matters to launch. Final work rules and training costs remain missing.",
    },
    eventChange: {
      optionId: "join",
      title: "Fund the plant with limits on wider training",
      description:
        "Decide which extra managers can train and what methods they may carry to other plants before agreeing.",
      tradeoff:
        "More learners may help the start, but wider training spreads more knowledge beyond this plant.",
      why: "The partner now asks to train more managers. A useful joint plant needs clear limits on that wider sharing.",
      score: 80,
    },
  },
};
