import type { CaseDefinition } from "../types";

export const cases04to12: CaseDefinition[] = [
  {
    id: "case-004",
    version: 1,
    number: "04",
    title: "The phone without keys",
    subtitle: "A new screen. A narrow path to market.",
    category: "Product",
    year: "2007",
    role: "You lead Apple, a maker of computers and music players.",
    objective: "Choose how to enter the phone market.",
    briefing:
      "It is January 2007. Your team has built a touch phone that also plays music and browses the web. You must choose a launch plan before the public reveal.",
    question: "How should you bring the phone to market?",
    evidence: [
      {
        id: "screen",
        label: "Touch, not keys",
        text: "The design uses a touch screen and an on-screen keyboard.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "bundle",
        label: "Several jobs, one device",
        text: "The phone combines calls, music, email and web browsing.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "network",
        label: "A single US carrier",
        text: "The proposed US deal gives one mobile network the phone on an exclusive basis.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "price",
        label: "A high entry price",
        text: "The launch plan sets US prices at $499 and $599 for different storage sizes.",
        kind: "fact",
        sourceIds: ["s1"],
      },
    ],
    research: [
      {
        id: "carrier",
        title: "Read the carrier deal",
        description: "Check the reach and cost of a single partner.",
        hours: 1,
        evidence: [
          {
            id: "carrier-reach",
            label: "A large starting base",
            text: "The proposed carrier has over 58 million subscribers.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "carrier-risk",
            label: "Reach has a limit",
            text: "People on other networks would need to switch. A large partner is not the whole market.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "software",
        title: "Check the daily tasks",
        description: "Look beyond the new screen.",
        hours: 2,
        evidence: [
          {
            id: "mail",
            label: "Email and the web",
            text: "The design supports common email accounts and full web pages.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "input-gap",
            label: "Typing speed is unproven",
            text: "We have no test of how fast new users type or how often they make errors.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "launch-map",
        title: "Read the rollout plan",
        description: "Check where and when the phone can ship.",
        hours: 2,
        evidence: [
          {
            id: "rollout",
            label: "Start in the US",
            text: "The draft plan targets the US in June, Europe late in 2007 and Asia in 2008.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "staging",
            label: "Learn in stages",
            text: "A staged launch may limit support load. It also gives rivals more time elsewhere.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "unit-cost",
        title: "Check the profit case",
        description: "Separate a premium price from profit.",
        hours: 3,
        evidence: [
          {
            id: "margin-gap",
            label: "Costs are missing",
            text: "We have no verified unit cost, carrier payment terms or return rate for this phone.",
            kind: "unknown",
            sourceIds: [],
          },
          {
            id: "price-test",
            label: "Test the full bill",
            text: "A buyer must accept both the device price and the service terms. Test that full cost with likely buyers.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What does the carrier deal rule out?",
      "What is not yet proved about daily use?",
      "What is missing from the profit case?",
    ],
    event: {
      title: "Carrier asks for a firm date",
      text: "Three hours in, your partner asks for a firm launch date before it trains store staff. Any wider carrier talks would delay that training.",
      evidence: {
        id: "event",
        label: "Carrier asks for a firm date",
        text: "Three hours in, your partner asks for a firm launch date before it trains store staff. Any wider carrier talks would delay that training.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "launch",
        title: "Launch with one carrier",
        description: "Keep the US plan and stage other markets.",
        tradeoff:
          "A clear launch path trades off against limited network choice.",
      },
      {
        id: "open",
        title: "Seek more carrier deals",
        description: "Reopen the deal to reach more phone buyers.",
        tradeoff: "More reach may delay launch and weaken your control.",
      },
      {
        id: "pilot",
        title: "Run a small paid pilot",
        description:
          "Test typing, service and support with invited buyers first.",
        tradeoff: "You learn from real use but give up a broad launch now.",
      },
      {
        id: "hold",
        title: "Hold the launch",
        description:
          "Keep selling current products while the phone team tests.",
        tradeoff: "You avoid a rushed promise but delay learning from buyers.",
      },
    ],
    reveal: {
      company: "Apple",
      identityAliases: ["Apple", "iPhone", "iPod", "Steve Jobs", "Cingular"],
      title: "The phone without keys",
      history:
        "Apple showed the iPhone in January 2007 with Cingular as its exclusive US carrier. It announced US prices of $499 and $599.",
      lesson:
        "A launch needs more than a good device. Test the whole path from price to service.",
      sources: [
        {
          id: "s1",
          title: "Apple iPhone announcement, January 9, 2007",
          url: "https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/",
        },
      ],
      consequences: {
        launch:
          "You could get a focused launch. Plan how to reach buyers who will not switch networks.",
        open: "You could reach more people. A deal delay may leave the product waiting.",
        pilot:
          "You could find daily-use faults early. A small group may not reflect the wider market.",
        hold: "You keep time to test. Set a clear condition for leaving the lab.",
      },
      rubric: [
        "Did you weigh carrier reach against access to other buyers?",
        "Did you separate a novel screen from proven ease of use?",
        "Did you address the training deadline?",
        "Did you avoid claiming a high price proves a high margin?",
      ],
    },
  },
  {
    id: "case-005",
    version: 1,
    number: "05",
    title: "The pocket music bet",
    subtitle: "Can ease of use earn a high price?",
    category: "Pricing",
    year: "2001",
    role: "You lead Apple, a computer maker entering portable music.",
    objective: "Set a price and scope that fit the first buyers.",
    briefing:
      "It is October 2001. Your team has a small music player ready for a launch review. The proposed price is $399. Decide whether its ease of use can earn that price.",
    question: "What should the first offer be?",
    evidence: [
      {
        id: "capacity",
        label: "A large music pocket",
        text: "The design holds up to 1,000 songs on a 5 GB drive.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "size",
        label: "Small enough to carry",
        text: "The player weighs 6.5 ounces and fits in a pocket.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "sync",
        label: "Links to your computers",
        text: "Songs and playlists copy over when users connect it to your company’s computer.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "price",
        label: "The proposed price",
        text: "The launch plan asks $399 in the US.",
        kind: "fact",
        sourceIds: ["s1"],
      },
    ],
    research: [
      {
        id: "speed",
        title: "Check the transfer time",
        description: "See what users gain before they press play.",
        hours: 1,
        evidence: [
          {
            id: "copy-time",
            label: "A faster fill",
            text: "The team claims 1,000 songs can copy in less than 10 minutes.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "test-speed",
            label: "A claim to test",
            text: "Check transfer time with a real music library before making speed the main pitch.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "battery",
        title: "Read the use specs",
        description: "Check what a day away from home needs.",
        hours: 2,
        evidence: [
          {
            id: "play-time",
            label: "Up to 10 hours",
            text: "The stated battery life is up to 10 hours of music. The cable also charges the player.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "battery-gap",
            label: "Real use may differ",
            text: "We have no independent battery test across volume levels and frequent song changes.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "kit",
        title: "Check the whole purchase",
        description: "See what comes in the box.",
        hours: 2,
        evidence: [
          {
            id: "included",
            label: "No extra charger needed",
            text: "The planned box includes headphones, a cable, a power adapter and music software.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "fit",
            label: "Start with current owners",
            text: "The sync flow fits people who already use your computers. It does not prove demand from all music fans.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "price-floor",
        title: "Test the price logic",
        description: "Ask what a cheaper offer would cost you.",
        hours: 3,
        evidence: [
          {
            id: "cost-gap",
            label: "No verified price floor",
            text: "We have no unit cost, target margin or buyer price test. A lower price cannot be assumed to pay for itself.",
            kind: "unknown",
            sourceIds: [],
          },
          {
            id: "value",
            label: "Sell saved effort",
            text: "Test whether buyers value carrying a large library and keeping it in sync, not just the storage size.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "Who can use the player today?",
      "What work does sync remove?",
      "What would justify $399?",
    ],
    event: {
      title: "Retail needs a simple pitch",
      text: "Three hours in, store staff ask you to pick one lead message: a low price or less work to carry a music library. They cannot build both displays in time.",
      evidence: {
        id: "event",
        label: "Retail needs a simple pitch",
        text: "Three hours in, store staff ask you to pick one lead message: a low price or less work to carry a music library. They cannot build both displays in time.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "premium",
        title: "Keep the $399 price",
        description: "Lead with the full music library and easy sync.",
        tradeoff: "Each sale may bring more cash, but fewer people may try it.",
      },
      {
        id: "lower",
        title: "Cut the entry price",
        description: "Accept less cash per device to lower the first hurdle.",
        tradeoff: "Demand may rise, but the cost floor is not verified.",
      },
      {
        id: "bundle",
        title: "Offer a computer bundle",
        description: "Give a deal to people buying a compatible computer.",
        tradeoff:
          "You reach a clear group but learn less about stand-alone demand.",
      },
      {
        id: "hold",
        title: "Delay the player",
        description: "Run price and battery tests before setting the offer.",
        tradeoff: "You reduce some unknowns but miss the planned sales window.",
      },
    ],
    reveal: {
      company: "Apple",
      identityAliases: [
        "Apple",
        "iPod",
        "iTunes",
        "Mac",
        "FireWire",
        "Steve Jobs",
      ],
      title: "The pocket music bet",
      history:
        "Apple announced the first iPod at $399 in October 2001. The offer joined a small hard-drive player with fast sync to a Mac.",
      lesson:
        "A high price needs a clear gain for a clear buyer. More features alone do not prove value.",
      sources: [
        {
          id: "s1",
          title: "Apple Presents iPod, October 23, 2001",
          url: "https://www.apple.com/newsroom/2001/10/23Apple-Presents-iPod/",
        },
      ],
      consequences: {
        premium:
          "You could earn a premium if saved effort matters enough. Watch paid demand, not praise.",
        lower:
          "You could open the door to more buyers. Check whether each sale still helps the business.",
        bundle:
          "You could sell to buyers who can use it at once. Keep the bundle from hiding weak player demand.",
        hold: "You gain more proof before pricing. Set a short test with a decision rule.",
      },
      rubric: [
        "Did you name the first buyer?",
        "Did you tie price to a daily gain?",
        "Did you separate company battery claims from test results?",
        "Did you avoid inventing a margin or price response?",
      ],
    },
  },
  {
    id: "case-006",
    version: 1,
    number: "06",
    title: "Rent the next release",
    subtitle: "Steady fees may unsettle loyal buyers.",
    category: "Pricing",
    year: "2013",
    role: "You lead Adobe, a firm that makes design software.",
    objective: "Choose how to sell the next major tools.",
    briefing:
      "It is spring 2013. Buyers can own a software version or pay for a plan with ongoing updates. The paid plan is growing. You must decide where the next new features will go.",
    question: "Should new features move to the paid plan only?",
    evidence: [
      {
        id: "two-models",
        label: "Two ways to buy",
        text: "Your firm has sold long-term software licenses and launched a paid plan in May 2012.",
        kind: "fact",
        sourceIds: ["s2"],
      },
      {
        id: "members",
        label: "A real paid base",
        text: "The plan ended the first fiscal quarter with 479,000 paid members.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "growth",
        label: "More people joined",
        text: "Paid membership rose by 153,000 from the prior quarter.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "cash",
        label: "Cash is coming in",
        text: "The firm reported $322 million in cash from operations for the first quarter.",
        kind: "fact",
        sourceIds: ["s1"],
      },
    ],
    research: [
      {
        id: "channel",
        title: "Read the sales mix",
        description: "Check what the strongest sales claim covers.",
        hours: 1,
        evidence: [
          {
            id: "site-mix",
            label: "The website is shifting",
            text: "The CEO said most creative purchases on the firm’s own site were now subscriptions.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "scope",
            label: "One channel is not all buyers",
            text: "That claim covers the company site. It does not give the mix across every reseller or large client.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "service",
        title: "Read the early offer",
        description: "Check what members already get.",
        hours: 2,
        evidence: [
          {
            id: "updates",
            label: "More than a payment plan",
            text: "The 2012 offer added frequent updates, online file storage and syncing.",
            kind: "fact",
            sourceIds: ["s2"],
          },
          {
            id: "value-gap",
            label: "Use is not shown",
            text: "We have no usage split showing which of these benefits keeps members paying.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "results",
        title: "Check the current accounts",
        description: "Separate company profit from plan profit.",
        hours: 2,
        evidence: [
          {
            id: "profit",
            label: "The firm is profitable",
            text: "First-quarter operating income was $98.2 million under standard accounting rules.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "profit-scope",
            label: "No plan profit here",
            text: "That is company-wide income. We do not have profit or churn for the paid plan alone.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "transition",
        title: "Plan for old customers",
        description: "Trace what a change asks loyal users to do.",
        hours: 3,
        evidence: [
          {
            id: "renewal",
            label: "A new kind of choice",
            text: "A buyer who keeps one version for years may value it differently from a buyer who wants each update.",
            kind: "interpretation",
            sourceIds: [],
          },
          {
            id: "retention-gap",
            label: "Leaving risk is unknown",
            text: "We have no test of how many license buyers would subscribe, keep an old version or leave.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "How strong is the paid-plan evidence?",
      "What does the website mix leave out?",
      "What do loyal license buyers risk?",
    ],
    event: {
      title: "A client needs a fixed path",
      text: "Three hours in, a large design client asks how its teams can keep using old files if it does not renew. Sales needs a clear answer before its next call.",
      evidence: {
        id: "event",
        label: "A client needs a fixed path",
        text: "Three hours in, a large design client asks how its teams can keep using old files if it does not renew. Sales needs a clear answer before its next call.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "switch",
        title: "Put new work in the paid plan",
        description:
          "Keep the current owned version on sale; send new features to members.",
        tradeoff: "A clearer model may anger buyers who dislike ongoing fees.",
      },
      {
        id: "both",
        title: "Build both versions",
        description: "Keep selling new owned versions and the paid plan.",
        tradeoff:
          "Buyer choice stays broad, but the team must serve both release paths.",
      },
      {
        id: "phase",
        title: "Phase in by product",
        description: "Move a limited tool group first and study renewals.",
        tradeoff: "A smaller risk gives slower learning about the whole suite.",
      },
      {
        id: "hold",
        title: "Keep the current mix",
        description: "Make no change to how the next release is sold yet.",
        tradeoff: "You avoid a sudden shift but keep the split roadmap.",
      },
    ],
    reveal: {
      company: "Adobe",
      identityAliases: [
        "Adobe",
        "Creative Cloud",
        "Creative Suite",
        "Photoshop",
        "Shantanu Narayen",
      ],
      title: "Rent the next release",
      history:
        "In May 2013, Adobe put future creative features in Creative Cloud. It kept CS6 for sale with a perpetual license.",
      lesson:
        "Growth in a paid plan is useful proof. It does not tell you how every old buyer will react.",
      sources: [
        {
          id: "s1",
          title: "Adobe Q1 earnings, March 19, 2013",
          url: "https://wwwimages.adobe.com/content/dam/acom/en/investor-relations/pdfs/Q113Earnings.pdf",
        },
        {
          id: "s2",
          title:
            "Adobe FY2013 10-K, historical 2012 offer and May 2013 decision",
          url: "https://www.adobe.com/content/dam/cc/en/investor-relations/pdfs/ADBE-10K-FY13-FINAL.pdf",
        },
      ],
      consequences: {
        switch:
          "You could focus development and grow repeat fees. Explain file access and the old-version path.",
        both: "You could retain more buyer choice. Check the cost of keeping both paths current.",
        phase:
          "You could test renewal and support needs. Avoid mistaking one tool’s users for all users.",
        hold: "You keep familiar terms. Set a date to settle the next-release model.",
      },
      rubric: [
        "Did you keep website sales separate from all sales?",
        "Did you use company cash and profit without calling them plan profit?",
        "Did you address file access for users who leave?",
        "Did you propose a way to measure renewal or churn?",
      ],
    },
  },
  {
    id: "case-007",
    version: 1,
    number: "07",
    title: "Open the engine",
    subtitle: "Let outsiders help build your core software.",
    category: "Product",
    year: "2014",
    role: "You lead Microsoft, a large software platform team.",
    objective: "Choose how much control to share with developers.",
    briefing:
      "It is autumn 2014. You have started to open parts of your developer tools. The next choice is bigger: let outsiders help build the engine that runs server apps, and bring it to rival systems.",
    question: "How far should you open the platform?",
    evidence: [
      {
        id: "compiler",
        label: "Some code is already open",
        text: "In April, the firm released the source for its language compiler preview.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "tools",
        label: "Developers can build on it",
        text: "The compiler exposes code information that tool makers can use.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "foundation",
        label: "A shared home exists",
        text: "An independent foundation was announced in April to support open development.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "cloud",
        label: "Your cloud serves many tools",
        text: "The firm’s spring cloud portal plan brought tools and services from different platforms together.",
        kind: "fact",
        sourceIds: ["s1"],
      },
    ],
    research: [
      {
        id: "extensions",
        title: "Read the compiler plan",
        description: "See what outsiders could build already.",
        hours: 1,
        evidence: [
          {
            id: "code-api",
            label: "Access below the editor",
            text: "The compiler gives outside tools access to its model of program code.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "use-case",
            label: "A reason to join",
            text: "This could help outsiders make code tools without rebuilding a compiler. It does not prove they will help your core engine.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "governance",
        title: "Read the foundation role",
        description: "Look for a way to share work.",
        hours: 2,
        evidence: [
          {
            id: "forum",
            label: "Business and community",
            text: "The foundation was set up as a forum for both commercial and community developers.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "rules-gap",
            label: "Rules still matter",
            text: "The case has no approved rules for reviewing outside fixes or settling disputes.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "cloud-fit",
        title: "Trace the business link",
        description: "Connect wider use to a way to earn.",
        hours: 2,
        evidence: [
          {
            id: "portal",
            label: "Tools and running apps",
            text: "The spring portal plan joined app development and operations in one place.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "revenue-path",
            label: "Usage is not revenue",
            text: "More developers could lead to demand for paid tools or hosting. We have no measured rate for that link.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "support",
        title: "Scope the support promise",
        description: "Check the work behind other systems.",
        hours: 3,
        evidence: [
          {
            id: "support-gap",
            label: "No full port budget",
            text: "We have no verified cost or deadline for testing and supporting the engine on rival systems.",
            kind: "unknown",
            sourceIds: [],
          },
          {
            id: "scope-choice",
            label: "Start with server work",
            text: "A server scope could limit the first job. Publishing code alone does not make it work on every system.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What is already open?",
      "Who would review outside changes?",
      "How could a wider platform earn money?",
    ],
    event: {
      title: "A partner wants a support promise",
      text: "Three hours in, a potential user says it will test the open engine only if you name who owns bug fixes on its server system. Your team has not set that duty.",
      evidence: {
        id: "event",
        label: "A partner wants a support promise",
        text: "Three hours in, a potential user says it will test the open engine only if you name who owns bug fixes on its server system. Your team has not set that duty.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "open",
        title: "Open the server engine",
        description:
          "Publish the code, accept fixes and fund work on other systems.",
        tradeoff: "A wider community means more review and support duties.",
      },
      {
        id: "read",
        title: "Let people read the code",
        description: "Publish source but keep changes inside your team.",
        tradeoff: "Users can inspect it, but cannot shape it on equal terms.",
      },
      {
        id: "port",
        title: "Support more systems first",
        description: "Keep the source closed while building official ports.",
        tradeoff: "You widen reach but carry the work yourself.",
      },
      {
        id: "hold",
        title: "Keep the current boundary",
        description:
          "Leave the engine closed and continue the smaller open projects.",
        tradeoff: "You preserve control but may leave outside users waiting.",
      },
    ],
    reveal: {
      company: "Microsoft",
      identityAliases: [
        "Microsoft",
        ".NET",
        "Roslyn",
        "Azure",
        "Visual Studio",
        "Scott Guthrie",
      ],
      title: "Open the engine",
      history:
        "In November 2014, Microsoft announced open source for the server-side .NET stack and work to run it on Linux and Mac.",
      lesson:
        "Open code is a promise to work with others. Name who owns quality and who pays for support.",
      sources: [
        {
          id: "s1",
          title: "Microsoft Build announcement, April 2014",
          url: "https://news.microsoft.com/source/asia/2014/04/03/20140404/",
        },
        {
          id: "s2",
          title: "Microsoft .NET announcement, November 12, 2014",
          url: "https://news.microsoft.com/source/2014/11/12/microsoft-takes-net-open-source-and-cross-platform-adds-new-development-capabilities-with-visual-studio-2015-net-2015-and-visual-studio-online/",
        },
      ],
      consequences: {
        open: "You could gain reach and outside help. Fund review and make ownership clear.",
        read: "You gain some trust through access. Outside teams may still want a voice in changes.",
        port: "You give users a supported path. The full cost of new systems stays with you.",
        hold: "You limit the new burden. State what evidence would justify a wider step.",
      },
      rubric: [
        "Did you distinguish reading code from sharing development?",
        "Did you name a support owner?",
        "Did you avoid equating free code with free maintenance?",
        "Did you explain a plausible paid business around broader use?",
      ],
    },
  },
  {
    id: "case-008",
    version: 1,
    number: "08",
    title: "A bookstore in your bag",
    subtitle: "Sell a device to change how books arrive.",
    category: "Product",
    year: "2007",
    role: "You lead Amazon, an online bookseller.",
    objective: "Choose whether to sell a dedicated reading device.",
    briefing:
      "It is November 2007. After years of work, your team has a wireless reader ready for a launch review. It would cost $399. You need a plan for both the device and the books.",
    question: "How should you enter digital reading?",
    evidence: [
      {
        id: "reader",
        label: "Built just for reading",
        text: "The device uses a black-and-white screen that reflects light rather than a backlight.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "price",
        label: "A $399 device",
        text: "The proposed US launch price is $399.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "store",
        label: "A ready book shelf",
        text: "The launch catalog has more than 90,000 books.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "wireless",
        label: "No computer required",
        text: "Readers can buy and download books through a mobile data network.",
        kind: "fact",
        sourceIds: ["s1"],
      },
    ],
    research: [
      {
        id: "connection",
        title: "Check the data bill",
        description: "Find who pays when a book arrives.",
        hours: 1,
        evidence: [
          {
            id: "data-cost",
            label: "The seller pays",
            text: "The plan includes wireless access without a monthly data bill for the reader.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "cost-risk",
            label: "A cost for each service",
            text: "A free data bill for the reader is still a cost for your firm. We have no usage-cost forecast.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "books",
        title: "Check popular titles",
        description: "See whether the shelf fits common demand.",
        hours: 2,
        evidence: [
          {
            id: "bestsellers",
            label: "Most, not all",
            text: "The catalog includes 101 of the 112 current bestsellers on a major US list.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "samples",
            label: "Try before buying",
            text: "Readers can get the first chapter of most books for free.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "selection",
            label: "Catalog fit matters",
            text: "A large total does not ensure a reader can find the book they want.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "speed",
        title: "Check the reading flow",
        description: "Trace a purchase from desire to reading.",
        hours: 2,
        evidence: [
          {
            id: "download",
            label: "A short wait",
            text: "The team says a book can download in less than a minute.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "signal-gap",
            label: "Coverage is not proved here",
            text: "We have no test of the purchase flow in weak-signal areas.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "economics",
        title: "Check the two-part business",
        description: "Separate device sales from book income.",
        hours: 3,
        evidence: [
          {
            id: "book-price",
            label: "A low price for new titles",
            text: "The plan prices new releases and bestsellers at $9.99 unless marked otherwise.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "margin-gap",
            label: "Supplier terms are missing",
            text: "We have no publisher payments, hardware cost or repeat-purchase forecast. Neither sticker price proves profit.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "Who pays for wireless access?",
      "What does the catalog leave out?",
      "What must happen after the first device sale?",
    ],
    event: {
      title: "A key title is delayed",
      text: "Three hours in, a publisher says a planned title will miss launch. The reader can still ship, but your store team must show buyers exactly which books they can get.",
      evidence: {
        id: "event",
        label: "A key title is delayed",
        text: "Three hours in, a publisher says a planned title will miss launch. The reader can still ship, but your store team must show buyers exactly which books they can get.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "device",
        title: "Launch device and store",
        description: "Sell the $399 reader with the book catalog.",
        tradeoff:
          "You control the reading flow but must support hardware and content.",
      },
      {
        id: "software",
        title: "Start with reading software",
        description: "Offer digital books on existing computers first.",
        tradeoff:
          "You avoid new hardware, but may lose the simple mobile reading flow.",
      },
      {
        id: "pilot",
        title: "Sell a limited reader run",
        description: "Test repeat book buying before a wider device push.",
        tradeoff:
          "You reduce the first commitment but may slow publisher support.",
      },
      {
        id: "hold",
        title: "Stay with print for now",
        description:
          "Keep selling paper books while you improve the digital offer.",
        tradeoff:
          "You avoid device risk but delay learning about digital habits.",
      },
    ],
    reveal: {
      company: "Amazon",
      identityAliases: ["Amazon", "Kindle", "Whispernet", "Jeff Bezos"],
      title: "A bookstore in your bag",
      history:
        "Amazon launched Kindle in November 2007 at $399, with wireless delivery and a digital book store.",
      lesson:
        "The device is one part of the deal. Content, service and repeat use must work together.",
      sources: [
        {
          id: "s1",
          title: "Introducing Amazon Kindle, November 19, 2007",
          url: "https://press.aboutamazon.com/2007/11/introducing-amazon-kindle",
        },
      ],
      consequences: {
        device:
          "You could make buying and reading simple. Track repeat book purchases and support costs.",
        software:
          "You could test digital demand cheaply. Computer reading may not test the pocket reader’s value.",
        pilot:
          "You could learn the cost and use pattern. A small catalog or group could skew the result.",
        hold: "You protect the current store. Pick a clear point to revisit digital reading.",
      },
      rubric: [
        "Did you assess the title people want, not just catalog size?",
        "Did you count wireless service as a company cost?",
        "Did you separate hardware and book economics?",
        "Did you address the missing launch title?",
      ],
    },
  },
  {
    id: "case-009",
    version: 1,
    number: "09",
    title: "One fee, many boxes",
    subtitle: "Make fast shipping feel free.",
    category: "Growth",
    year: "2005",
    role: "You lead Amazon, a large online store.",
    objective: "Choose a shipping offer that can earn repeat orders.",
    briefing:
      "It is February 2005. Your team proposes a yearly fee for unlimited fast shipping. Buyers could place small orders without waiting to fill a basket. You must weigh that ease against delivery costs.",
    question: "Should you launch the yearly shipping plan?",
    evidence: [
      {
        id: "fee",
        label: "A yearly fee",
        text: "The proposed membership costs $79 a year.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "speed",
        label: "Fast orders included",
        text: "The plan includes unlimited two-day shipping with no minimum purchase.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "cash",
        label: "A growing cash base",
        text: "The firm generated $477 million in free cash flow in 2004.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "sales",
        label: "An established store",
        text: "The firm recorded $6.92 billion in 2004 sales.",
        kind: "fact",
        sourceIds: ["s1"],
      },
    ],
    research: [
      {
        id: "household",
        title: "Read the sharing terms",
        description: "Check how many people a fee can cover.",
        hours: 1,
        evidence: [
          {
            id: "sharing",
            label: "One home can share",
            text: "The plan lets a member share benefits with up to four family members in the same household.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "sharing-risk",
            label: "More use per fee",
            text: "Sharing may help adoption, but one fee could cover many shipments.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "upgrade",
        title: "Read the faster option",
        description: "Check the paid step above the base plan.",
        hours: 2,
        evidence: [
          {
            id: "overnight",
            label: "An extra charge remains",
            text: "The proposed next-day upgrade costs $3.99 per item.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "mix",
            label: "Different speeds cost differently",
            text: "Do not treat all member orders as having the same delivery cost.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "baseline",
        title: "Read the past cash record",
        description: "Check the room to fund a test.",
        hours: 2,
        evidence: [
          {
            id: "cash-growth",
            label: "Cash flow rose",
            text: "Free cash flow grew from $346 million in 2003 to $477 million in 2004.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "scope",
            label: "Cash is not plan profit",
            text: "Past company cash flow gives room to invest. It does not show that the new plan will pay for itself.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "cohorts",
        title: "Check who is likely to join",
        description: "Look for the risk hidden in an average order.",
        hours: 3,
        evidence: [
          {
            id: "join-gap",
            label: "No member forecast",
            text: "We have no forecast of orders per member, item margins or shipping cost by group.",
            kind: "unknown",
            sourceIds: [],
          },
          {
            id: "selection",
            label: "Heavy users may join first",
            text: "Frequent buyers may gain most from the fee. Test whether new profit beats the added shipping bill for each group.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "Who gains most from the fee?",
      "Could more orders reduce profit?",
      "How should a pilot measure success?",
    ],
    event: {
      title: "Operations flags split orders",
      text: "Three hours in, the shipping team asks whether members can send each small item as soon as it is ready. Keeping that freedom means you cannot rely on grouped boxes to hold costs down.",
      evidence: {
        id: "event",
        label: "Operations flags split orders",
        text: "Three hours in, the shipping team asks whether members can send each small item as soon as it is ready. Keeping that freedom means you cannot rely on grouped boxes to hold costs down.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "unlimited",
        title: "Launch the full plan",
        description: "Keep the yearly fee and no order minimum.",
        tradeoff:
          "A simple promise may change habits, but heavy use can be costly.",
      },
      {
        id: "minimum",
        title: "Add an order minimum",
        description:
          "Use a yearly fee but require larger baskets for included shipping.",
        tradeoff:
          "Costs may fall, but the offer removes less shopping friction.",
      },
      {
        id: "pilot",
        title: "Test with a limited group",
        description:
          "Measure orders, item profit and delivery costs before widening access.",
        tradeoff: "You learn the economics but delay a simple offer for all.",
      },
      {
        id: "hold",
        title: "Keep current shipping fees",
        description: "Make no membership offer now.",
        tradeoff:
          "You keep known charges but leave the repeat-order idea untested.",
      },
    ],
    reveal: {
      company: "Amazon",
      identityAliases: ["Amazon", "Prime", "Jeff Bezos"],
      title: "One fee, many boxes",
      history:
        "Amazon introduced Prime in February 2005 for $79 a year. It offered unlimited two-day shipping without a purchase minimum.",
      lesson:
        "A flat fee hides a range of costs. Watch who joins and what they do after joining.",
      sources: [
        {
          id: "s1",
          title: "Amazon 2004 results and Prime launch, February 2, 2005",
          url: "https://press.aboutamazon.com/2005/2/amazon-com-announces-record-free-cash-flow-fueled-by-lower-prices-and-free-shipping-introduces-new-express-shipping-program-amazon-prime",
        },
      ],
      consequences: {
        unlimited:
          "You could make your store the easy default. Monitor profit after shipping for light and heavy users.",
        minimum:
          "You could limit small-order costs. Test whether the fee still feels worth paying.",
        pilot:
          "You could learn from real shipping bills. Make sure the group includes heavy users.",
        hold: "You keep the current cost model. Set a trigger for testing a new offer.",
      },
      rubric: [
        "Did you consider that frequent buyers may join first?",
        "Did you include split shipments and household use?",
        "Did you distinguish company cash flow from member profit?",
        "Did you name a useful test group and stop rule?",
      ],
    },
  },
  {
    id: "case-010",
    version: 1,
    number: "10",
    title: "When travel stops",
    subtitle: "Save the business without losing its core.",
    category: "Crisis",
    year: "2020",
    role: "You lead Airbnb, a home-stay booking company.",
    objective: "Choose where to cut and how to treat people.",
    briefing:
      "It is early May 2020. Travel has stalled. You have raised cash and cut spending, but the year still looks grim. You must decide what work the firm can keep and what that means for staff.",
    question: "How should you reduce the cost base?",
    evidence: [
      {
        id: "forecast",
        label: "A sharp revenue fall",
        text: "The current forecast puts this year’s revenue at less than half of 2019.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "funding",
        label: "New cash raised",
        text: "The company has raised $2 billion in capital in response.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "cuts",
        label: "Spending already cut",
        text: "Costs have already been cut across much of the business.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "uncertain",
        label: "No clear return date",
        text: "Leaders do not know exactly when travel will return.",
        kind: "fact",
        sourceIds: ["s1"],
      },
    ],
    research: [
      {
        id: "size",
        title: "Check the size of the team",
        description: "Put the decision in human terms.",
        hours: 1,
        evidence: [
          {
            id: "staff",
            label: "A large workforce",
            text: "The company has 7,500 employees before the proposed job cuts.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "cash-gap",
            label: "No runway calculation",
            text: "We have no full cash balance, monthly burn or severance budget. The capital raise alone does not give a runway.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "scope",
        title: "Map the lines of work",
        description: "See what sits beyond the core booking service.",
        hours: 2,
        evidence: [
          {
            id: "projects",
            label: "More than home stays",
            text: "The business has efforts in transport, media, hotels and luxury stays.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "focus",
            label: "Choose work before names",
            text: "Pick the work that fits the smaller business before deciding which roles it needs.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "demand",
        title: "Read the recovery view",
        description: "Separate a forecast from proof.",
        hours: 2,
        evidence: [
          {
            id: "view",
            label: "A different travel market",
            text: "Leadership expects future trips to be closer to home, safer and more affordable.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "forecast-limit",
            label: "A view, not a booking result",
            text: "That view can guide a plan, but it is not proof of how or when demand will return.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "care",
        title: "Design the exit and stay plans",
        description: "Trace the needs of people leaving and staying.",
        hours: 3,
        evidence: [
          {
            id: "care-plan",
            label: "Both groups need clarity",
            text: "People leaving need notice, pay terms and help finding work. Those staying need a clear scope and reason to trust the plan.",
            kind: "interpretation",
            sourceIds: [],
          },
          {
            id: "local-gap",
            label: "Country rules vary",
            text: "The case does not supply local job rules or each worker’s terms. A single global promise needs local review.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What has already been cut?",
      "Which work fits the likely return of travel?",
      "What would justify waiting?",
    ],
    event: {
      title: "Managers need one clear message",
      text: "Three hours in, managers report that rumors are spreading across teams. Staff need to know which work will stop, when decisions come and what support will be offered.",
      evidence: {
        id: "event",
        label: "Managers need one clear message",
        text: "Three hours in, managers report that rumors are spreading across teams. Staff need to know which work will stop, when decisions come and what support will be offered.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "focus",
        title: "Cut around a smaller core",
        description: "Stop side efforts and reduce roles tied to that work.",
        tradeoff:
          "You gain focus but lose people and the option to restart quickly.",
      },
      {
        id: "across",
        title: "Cut each team by the same share",
        description: "Spread the reduction across all business lines.",
        tradeoff: "It may seem even, but can leave every team too weak.",
      },
      {
        id: "temporary",
        title: "Seek temporary cost relief",
        description: "Use voluntary leave and reduced hours where agreed.",
        tradeoff: "You keep more skills but savings and consent are uncertain.",
      },
      {
        id: "hold",
        title: "Make no further cuts yet",
        description: "Use the new capital and wait for clearer demand.",
        tradeoff:
          "You avoid cuts now but risk using the cash before travel returns.",
      },
    ],
    reveal: {
      company: "Airbnb",
      identityAliases: ["Airbnb", "Brian Chesky", "Airbnb Studios"],
      title: "When travel stops",
      history:
        "Airbnb announced nearly 1,900 job cuts in May 2020 and narrowed its focus. Chesky’s staff note explained the plan and support for people leaving.",
      lesson:
        "Choose the work a smaller firm needs. Be clear and humane with the people affected.",
      sources: [
        {
          id: "s1",
          title: "Brian Chesky staff message, May 5, 2020",
          url: "https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky",
        },
      ],
      consequences: {
        focus:
          "You could preserve the core service. Explain why each line of work stays or ends.",
        across:
          "You could spread pain evenly. Equal cuts may not match what the business needs.",
        temporary:
          "You could keep scarce skills. Get consent and check whether savings last long enough.",
        hold: "You keep people for a recovery. State the cash or demand point that would force a new decision.",
      },
      rubric: [
        "Did you treat the revenue number as a forecast?",
        "Did you choose work before choosing headcount?",
        "Did you avoid treating raised capital as runway?",
        "Did you address staff clarity, support and local terms?",
      ],
    },
  },
  {
    id: "case-011",
    version: 1,
    number: "11",
    title: "Breakfast to buy time",
    subtitle: "A side sale could fund the real idea.",
    category: "Funding",
    year: "2008",
    role: "You help run Airbnb, a young home-stay website.",
    objective: "Find a short bridge without losing sight of the main business.",
    briefing:
      "It is fall 2008. Your home-stay site has had bursts of use but no steady growth. Cash is tight. A cofounder suggests selling election-themed cereal boxes to keep the team going.",
    question: "How should you fund the next stretch?",
    evidence: [
      {
        id: "traction",
        label: "Use comes in bursts",
        text: "The site has gained bookings around events but has not built steady growth.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "debt",
        label: "Debt is rising",
        text: "The founders are taking on debt and have not secured venture funding.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "skills",
        label: "Design is a team skill",
        text: "The founders who started the service were designers.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "origin",
        label: "Guests have tried it",
        text: "The first guests stayed in the founders’ home during a busy design conference.",
        kind: "fact",
        sourceIds: ["s1"],
      },
    ],
    research: [
      {
        id: "guests",
        title: "Review the first stays",
        description: "Look for value beneath the weak growth.",
        hours: 1,
        evidence: [
          {
            id: "local",
            label: "More than a bed",
            text: "The founders showed early guests around the city. Guests got a local view of the place.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "repeat-gap",
            label: "Repeat use is unknown",
            text: "We have no repeat-booking rate or proof that guests would use it away from a crowded event.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "supply",
        title: "Review what hosts list",
        description: "See whether the idea has room to grow.",
        hours: 2,
        evidence: [
          {
            id: "homes",
            label: "Hosts broadened the offer",
            text: "Hosts on the open site had begun offering full homes and unusual places, not just spare rooms.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "focus",
            label: "A possible core to test",
            text: "The range of homes gives you a path to test. It does not show that enough guests will book them.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "funding",
        title: "Check the founder position",
        description: "See what a bridge must solve.",
        hours: 2,
        evidence: [
          {
            id: "no-growth",
            label: "The business is not funding itself",
            text: "The cofounder’s account says the firm was not making money or gaining steady growth before the cereal effort.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "bridge-gap",
            label: "No precise cash target",
            text: "We have no verified weekly burn or amount needed to reach the next booking test.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "cereal",
        title: "Plan the side sale",
        description: "Check time, costs and signs of demand.",
        hours: 3,
        evidence: [
          {
            id: "sale-gap",
            label: "No paid orders yet",
            text: "The case has no pre-sale orders, unit cost or demand test for the proposed cereal boxes.",
            kind: "unknown",
            sourceIds: [],
          },
          {
            id: "cap",
            label: "Put a bound on the detour",
            text: "Use paid orders and a time limit before making many boxes. Ring-fence time to test the home-stay site.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What did the first guests value?",
      "What would a side sale actually prove?",
      "How much time should the detour get?",
    ],
    event: {
      title: "The press window is short",
      text: "Three hours in, a political reporter asks for a sample during the election news cycle. Making samples now will take the founders away from host calls.",
      evidence: {
        id: "event",
        label: "The press window is short",
        text: "Three hours in, a political reporter asks for a sample during the election news cycle. Making samples now will take the founders away from host calls.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "bridge",
        title: "Run a bounded cereal sale",
        description:
          "Make a small batch and use paid demand to decide whether to do more.",
        tradeoff: "It could bring cash, but is a detour from bookings.",
      },
      {
        id: "core",
        title: "Put all effort into stays",
        description:
          "Seek hosts and guests who can pay for the core service now.",
        tradeoff:
          "You test the real business while the cash problem stays urgent.",
      },
      {
        id: "fundraise",
        title: "Focus on a seed backer",
        description: "Use the early guest story to seek outside money.",
        tradeoff: "A backer could buy time, but there is no firm offer.",
      },
      {
        id: "hold",
        title: "Pause new spending",
        description: "Keep the site up while founders find other income.",
        tradeoff: "You slow the debt but may lose momentum and team focus.",
      },
    ],
    reveal: {
      company: "Airbnb",
      identityAliases: [
        "Airbnb",
        "AirBed",
        "Brian Chesky",
        "Joe Gebbia",
        "Nathan Blecharczyk",
        "Obama O",
        "Cap’n McCain",
      ],
      title: "Breakfast to buy time",
      history:
        "Airbnb’s founders sold election-themed cereal in 2008. Cofounder Nathan Blecharczyk later said the sale brought $30,000 to help pay down debt. It did not solve the core growth problem.",
      lesson:
        "A side sale can buy time. Decide in advance what that time will prove about the main idea.",
      sources: [
        {
          id: "s1",
          title:
            "Nathan Blecharczyk firsthand fireside chat report, May 24, 2021",
          url: "https://polsky.uchicago.edu/2021/05/24/fireside-chat-polsky-airbnb-cofounder-nathan-blecharczyk/",
        },
      ],
      consequences: {
        bridge:
          "You might gain cash and attention. Cap the time and keep a real booking test on the calendar.",
        core: "You learn whether guests value the core offer. Watch debt while you learn.",
        fundraise:
          "You might gain more time to build. Do not count an investor talk as money received.",
        hold: "You limit new spending. Agree on a date and cash target for restarting.",
      },
      rubric: [
        "Did you separate bridge income from proof of demand for stays?",
        "Did you put a time or cash bound on the side sale?",
        "Did you avoid treating later cereal sales as known in advance?",
        "Did you protect time for a core booking test?",
      ],
    },
  },
  {
    id: "case-012",
    version: 1,
    number: "12",
    title: "The tool left after the game",
    subtitle: "A failed game leaves a useful chat tool.",
    category: "Product",
    year: "2013",
    role: "You lead Tiny Speck, the team behind Slack. Your game has closed.",
    objective: "Decide whether the remaining team and cash deserve a new bet.",
    briefing:
      "It is early 2013. Your online game has closed. A small team remains with cash and an internal chat tool. You must decide whether to turn that tool into a business or stop.",
    question: "What should the remaining team do?",
    evidence: [
      {
        id: "game",
        label: "The game did not work as a business",
        text: "Despite efforts to grow, the online game was a commercial failure.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "staff",
        label: "A smaller team remains",
        text: "After the shutdown, eight of the former 40 employees remain.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "cash",
        label: "Cash is left",
        text: "A board member later recalled about $4 million remained at the pivot.",
        kind: "fact",
        sourceIds: ["s1"],
      },
      {
        id: "tool",
        label: "A tool built for the team",
        text: "The team had built its own chat tool while making the game.",
        kind: "fact",
        sourceIds: ["s2"],
      },
    ],
    research: [
      {
        id: "board",
        title: "Read the board’s response",
        description: "Check whether a new direction has backing.",
        hours: 1,
        evidence: [
          {
            id: "support",
            label: "Investors supported another try",
            text: "The board members backed using the remaining cash for team software.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "funding-limit",
            label: "Support is not more cash",
            text: "That support is permission to use money already left. It is not a new funding round.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "signal",
        title: "Read the late game review",
        description: "Check whether to keep chasing the old idea.",
        hours: 2,
        evidence: [
          {
            id: "october",
            label: "Growth efforts were not working",
            text: "In an October 2012 board note, the founder said more effort was not setting off game growth.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "sunk",
            label: "Past work is not a reason to continue",
            text: "Judge the next use of cash by what it can learn or earn, not the years already spent.",
            kind: "interpretation",
            sourceIds: [],
          },
        ],
      },
      {
        id: "team",
        title: "Check who is left",
        description: "Match the next job to the people still there.",
        hours: 2,
        evidence: [
          {
            id: "founders",
            label: "The founders stayed",
            text: "The remaining group includes the four founders and four other key staff.",
            kind: "fact",
            sourceIds: ["s1"],
          },
          {
            id: "sales-gap",
            label: "Selling to teams is unproved",
            text: "We have no record here of paid outside chat users or a repeatable sales process before this pivot.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
      {
        id: "buyers",
        title: "Plan an outside test",
        description: "Find what internal use cannot tell you.",
        hours: 3,
        evidence: [
          {
            id: "internal-limit",
            label: "Your team knows the tool",
            text: "An outside team must set it up and gain value without help from its makers. Test that gap.",
            kind: "interpretation",
            sourceIds: [],
          },
          {
            id: "retention-gap",
            label: "No outside retention data",
            text: "We have no pre-pivot data on repeat use, willingness to pay or support cost for outside teams.",
            kind: "unknown",
            sourceIds: [],
          },
        ],
      },
    ],
    suggestedQuestions: [
      "What survived the failed game?",
      "What does investor support actually cover?",
      "What must an outside trial prove?",
    ],
    event: {
      title: "A test team will try it alone",
      text: "Three hours in, an outside team agrees to try the chat tool, but cannot attend a guided setup call. You must decide whether to spend scarce time making setup work without you.",
      evidence: {
        id: "event",
        label: "A test team will try it alone",
        text: "Three hours in, an outside team agrees to try the chat tool, but cannot attend a guided setup call. You must decide whether to spend scarce time making setup work without you.",
        kind: "simulation",
        sourceIds: [],
      },
    },
    options: [
      {
        id: "pivot",
        title: "Build a paid team tool",
        description: "Use the remaining team and cash to pursue chat software.",
        tradeoff:
          "You get a fresh path but must learn a new customer and sales process.",
      },
      {
        id: "test",
        title: "Run a bounded outside trial",
        description:
          "Test setup, repeat use and willingness to pay before a full rebuild.",
        tradeoff: "You learn cheaply but delay a finished product.",
      },
      {
        id: "sell",
        title: "Seek a buyer for the team or tool",
        description: "Look for an owner who can make use of the assets.",
        tradeoff: "You may recover value, but no offer is in hand.",
      },
      {
        id: "hold",
        title: "Stop new development",
        description: "Preserve cash and prepare an orderly close.",
        tradeoff:
          "You avoid another loss but give up the chance to test the tool.",
      },
    ],
    reveal: {
      company: "Slack",
      identityAliases: ["Slack", "Tiny Speck", "Glitch", "Stewart Butterfield"],
      title: "The tool left after the game",
      history:
        "Tiny Speck moved from Glitch to team chat software. The product became Slack, which formally launched in 2014.",
      lesson:
        "A tool that helps your own team is a lead. Outside teams must show that it helps them too.",
      sources: [
        {
          id: "s1",
          title:
            "Board member John O’Farrell’s firsthand account, June 20, 2019",
          url: "https://a16z.com/announcement/slack/",
        },
        {
          id: "s2",
          title: "Slack Engineering on the tool’s origin and 2014 launch",
          url: "https://slack.engineering/building-the-next-evolution-of-cloud-networks-at-slack/",
        },
      ],
      consequences: {
        pivot:
          "You could put a strong team behind a new need. Set milestones before spending the remaining cash.",
        test: "You could learn whether the tool stands alone. A friendly trial still needs paid and repeat-use signals.",
        sell: "You could preserve some value. Keep a deadline so buyer talks do not consume the cash.",
        hold: "You could return or preserve what remains. Base the close on the next bet’s value, not shame over the game.",
      },
      rubric: [
        "Did you separate internal use from outside demand?",
        "Did you treat investor support as distinct from new funding?",
        "Did you set a cash or learning milestone?",
        "Did you address setup without founder help?",
      ],
    },
  },
];
