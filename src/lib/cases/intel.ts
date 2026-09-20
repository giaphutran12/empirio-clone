import type { CaseDefinition } from "../types";

export const intel: CaseDefinition = {
  id: "case-003",
  version: 1,
  number: "03",
  title: "The next production run",
  subtitle: "A founding product. A contested future.",
  category: "Resource allocation",
  year: "1985",
  role: "You lead Company A, a semiconductor manufacturer.",
  objective:
    "Choose where to commit scarce manufacturing and development resources.",
  briefing:
    "Mid-1985. Your company makes memory chips and processors. A semiconductor downturn is squeezing the business. You need to decide where the next investment goes.",
  question: "What should Company A do with its DRAM business?",
  evidence: [
    {
      id: "memory-roots",
      label: "A product launched in 1970",
      kind: "fact",
      text: "The company introduced a landmark dynamic random-access memory (DRAM) chip in October 1970.",
      sourceIds: ["source-1"],
    },
    {
      id: "memory-adoption",
      label: "14 of 18 manufacturers",
      kind: "fact",
      text: "By 1972, 14 of 18 mainframe manufacturers across the US, Europe, and Japan used that chip.",
      sourceIds: ["source-1"],
    },
    {
      id: "processor-position",
      label: "A 1981 computer design win",
      kind: "fact",
      text: "A major computer maker selected the company’s processor for its personal computer, launched in August 1981.",
      sourceIds: ["source-2"],
    },
    {
      id: "capacity-spend",
      label: "US$388 million in 1984",
      kind: "fact",
      text: "Company capital spending reached US$388 million in 1984, a 168% increase over 1983.",
      sourceIds: ["source-3"],
    },
    {
      id: "industry-turn",
      label: "Demand turned in late 1984",
      kind: "fact",
      text: "The computer-industry boom broke in the fourth quarter of 1984 as new semiconductor capacity arrived, creating excess supply and price pressure.",
      sourceIds: ["source-3"],
    },
  ],
  research: [
    {
      id: "review-market",
      title: "Review market conditions",
      description: "Examine what changed in demand and capacity.",
      hours: 1,
      evidence: [
        {
          id: "licensed-competition",
          label: "Competitors had manufacturing licenses",
          kind: "fact",
          text: "During the preceding expansion, the company licensed other manufacturers to produce its processors and related chips. Management later described this as creating competition for its own products.",
          sourceIds: ["source-3"],
        },
        {
          id: "market-reading",
          label: "Cycle or durable disadvantage?",
          kind: "interpretation",
          text: "Industry oversupply can make several products look unattractive at once. The decision needs a view of relative competitiveness, not merely a forecast that the industry will recover.",
          sourceIds: ["source-3"],
        },
      ],
    },
    {
      id: "review-products",
      title: "Review the product portfolio",
      description: "Check whether all memory products face the same decision.",
      hours: 2,
      evidence: [
        {
          id: "different-memory",
          label: "More than one memory category",
          kind: "fact",
          text: "The company also developed erasable programmable read-only memory (EPROM), introduced in 1971, alongside its processor business.",
          sourceIds: ["source-4"],
        },
        {
          id: "portfolio-scope",
          label: "Define the decision boundary",
          kind: "interpretation",
          text: "Exiting DRAM need not mean abandoning every kind of memory. Compare product lines separately before treating the whole portfolio as one bet.",
          sourceIds: ["source-4"],
        },
      ],
    },
    {
      id: "review-allocation",
      title: "Review resource allocation",
      description: "Consider the practical cost of each investment path.",
      hours: 3,
      evidence: [
        {
          id: "allocation-gap",
          label: "Product economics unavailable",
          kind: "unknown",
          text: "We don’t have margins by product, a conversion budget, or an order backlog. Total capital spending doesn’t tell us how much DRAM is losing.",
          sourceIds: [],
        },
        {
          id: "allocation-reading",
          label: "Capacity has an alternative use",
          kind: "interpretation",
          text: "Resources committed to DRAM cannot simultaneously support another development program. Redeployment may also require training and equipment changes; we don’t have those costs.",
          sourceIds: [],
        },
      ],
    },
    {
      id: "review-transition",
      title: "Review customer commitments",
      description: "Consider what continuing or exiting would require.",
      hours: 2,
      evidence: [
        {
          id: "transition-gap",
          label: "Contract terms unavailable",
          kind: "unknown",
          text: "No customer-specific supply obligations or shutdown timetable are supplied. An exit recommendation needs a transition plan, not an assumption that shipments can stop immediately.",
          sourceIds: [],
        },
        {
          id: "transition-reading",
          label: "A staged choice",
          kind: "interpretation",
          text: "A staged exit may preserve customer relationships but delay redeployment. A recovery effort needs a stopping rule; keeping both programs funded needs an explicit resource tradeoff.",
          sourceIds: [],
        },
      ],
    },
  ],
  suggestedQuestions: [
    "What changed in the market?",
    "Which product lines are distinct?",
    "What financial evidence is missing?",
    "What would each option require operationally?",
  ],
  event: {
    title: "Engineering capacity tightens",
    text: "At the halfway mark, operations says the next development cycle can support either a major DRAM process upgrade or a major processor ramp, but not both at full scope.",
    evidence: {
      id: "engineering-limit",
      label: "Staffing update",
      kind: "simulation",
      text: "Keeping both programs means scaling them back or delaying one. Existing customer shipments can continue.",
      sourceIds: [],
    },
  },
  options: [
    {
      id: "exit",
      title: "Phase out DRAM",
      description:
        "Plan an orderly DRAM exit and redirect resources toward processors.",
      tradeoff:
        "Frees focus but gives up a product line and requires a customer transition.",
    },
    {
      id: "reinvest",
      title: "Reinvest in DRAM",
      description: "Prioritize a process upgrade to rebuild competitiveness.",
      tradeoff:
        "Preserves a recovery opportunity while committing scarce resources.",
    },
    {
      id: "balance",
      title: "Keep both programs",
      description:
        "Continue DRAM and processor development with shared resources.",
      tradeoff: "Preserves options but may reduce scope or stretch schedules.",
    },
    {
      id: "hold",
      title: "Do nothing for now",
      description: "Keep current operations and defer a major new commitment.",
      tradeoff:
        "Avoids an immediate irreversible choice while price pressure persists.",
    },
  ],
  reveal: {
    company: "Intel",
    title: "Leaving DRAM, not all memory",
    history:
      "Intel left the DRAM memory chip business in 1985. It put more work into other chips. It kept making another kind of memory, called EPROM. The change took time.",
    lesson:
      "Money already spent is gone. Ask where your next dollar and hour can do the most good.",
    sources: [
      {
        id: "source-1",
        title: "Intel history: the 1103 DRAM",
        url: "https://timeline.intel.com/1970/the-intel-1103-dram",
      },
      {
        id: "source-2",
        title: "Intel history: the processor and the IBM PC",
        url: "https://www.intel.com/content/www/us/en/history/virtual-vault/articles/the-8086-and-the-ibm-pc.html",
      },
      {
        id: "source-3",
        title:
          "Intel 1986 annual report: management’s account of the downturn and restructuring",
        url: "https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2025-05/history-1986-annual-report.pdf",
      },
      {
        id: "source-4",
        title: "Intel corporate history timeline, 1971 and 1985 entries",
        url: "https://timeline.intel.com/",
      },
    ],
    consequences: {
      exit: "You free up people and cash for other chips. You still need to help buyers switch.",
      reinvest:
        "Better chips might win buyers back. They might also use cash you need elsewhere.",
      balance:
        "You keep both paths open. But your team must slow down or do less on each.",
      hold: "You wait for the market to change. You also put off work that could help.",
    },
    rubric: [
      "Did you distinguish DRAM from other memory products?",
      "Did you consider alternative uses of resources?",
      "Did you avoid inventing product-level economics?",
      "Did you address customer transition and any simulation constraint?",
      "Did you define evidence that would change your mind?",
    ],
  },
};
