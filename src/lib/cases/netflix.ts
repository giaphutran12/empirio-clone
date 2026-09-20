import type { CaseDefinition } from "../types";

export const netflix: CaseDefinition = {
  id: "case-002",
  version: 1,
  number: "02",
  title: "The acquisition offer",
  subtitle: "A small rival. A US$50 million question.",
  category: "Acquisition strategy",
  year: "2000",
  role: "You lead Company A, an established video-rental chain.",
  objective:
    "Decide whether a proposed acquisition is worth its price, risks, and management attention.",
  briefing:
    "It is 2000. Company B, a young DVD-by-mail business, proposes joining your rental chain. Assess the offer using information about its business before the meeting, reconstructed from later records. You have 6 simulated research hours. Names, the decision deadline, and the operating event are fictionalized.",
  question: "How should Company A respond to the acquisition proposal?",
  evidence: [
    {
      id: "asking-price",
      label: "US$50 million asking price",
      kind: "fact",
      text: "The sellers proposed a US$50 million acquisition price, according to their cofounder’s later firsthand account. This was an asking price, not an agreed valuation.",
      sourceIds: ["source-1"],
    },
    {
      id: "target-revenue",
      label: "US$5.006 million in 1999",
      kind: "fact",
      text: "The target’s 1999 revenue was US$5.006 million, recorded in its later public offering filing.",
      sourceIds: ["source-2"],
    },
    {
      id: "target-model",
      label: "DVDs ordered online, sent by mail",
      kind: "fact",
      text: "The target offered physical DVD delivery by mail. The proposal concerns a rental business, not an operating streaming platform.",
      sourceIds: ["source-1"],
    },
    {
      id: "proposed-roles",
      label: "A combined operating model",
      kind: "fact",
      text: "The sellers proposed running the online operation while the buyer ran the stores, according to the cofounder’s recollection.",
      sourceIds: ["source-1"],
    },
    {
      id: "subscription-offer",
      label: "No due dates or late fees",
      kind: "fact",
      text: "Before the meeting, the target had introduced a subscription offer without due dates or late fees, according to its cofounder.",
      sourceIds: ["source-1"],
    },
  ],
  research: [
    {
      id: "review-economics",
      title: "Review the target’s accounts",
      description:
        "Inspect historical profitability behind the revenue figure.",
      hours: 2,
      evidence: [
        {
          id: "target-loss",
          label: "US$29.845 million net loss",
          kind: "fact",
          text: "For 1999, the target recorded a US$29.845 million net loss and US$633,000 gross profit. These are historical figures in a later filing, not forecasts for 2000.",
          sourceIds: ["source-2"],
        },
        {
          id: "profit-reading",
          label: "Price is only part of the commitment",
          kind: "interpretation",
          text: "A purchase could require further funding. Gross profit does not cover all operating expenses, and a historical net loss is not a cash-burn or runway estimate.",
          sourceIds: [],
        },
      ],
    },
    {
      id: "review-financing",
      title: "Review the seller’s position",
      description: "Examine the conditions behind the proposed sale.",
      hours: 2,
      evidence: [
        {
          id: "funding-pressure",
          label: "Financing became harder",
          kind: "fact",
          text: "The cofounder recalled that fundraising became difficult after the April 2000 dot-com downturn, while acquiring subscription customers required upfront spending.",
          sourceIds: ["source-1"],
        },
        {
          id: "runway-unknown",
          label: "Runway unverified",
          kind: "unknown",
          text: "No verified cash balance, financing commitment, or months of runway are supplied. The seller’s pressure does not establish that the business is worthless or that the asking price is fair.",
          sourceIds: [],
        },
      ],
    },
    {
      id: "review-integration",
      title: "Review integration requirements",
      description: "Compare buying the team with building or partnering.",
      hours: 3,
      evidence: [
        {
          id: "integration-question",
          label: "Owning is not integrating",
          kind: "interpretation",
          text: "Buying the target would also require decisions about leadership, incentives, and the relationship with stores. A partnership could test cooperation, but access to the technology and team would need negotiation.",
          sourceIds: [],
        },
        {
          id: "integration-unknown",
          label: "No agreed terms",
          kind: "unknown",
          text: "This dossier contains no signed retention agreement, integration budget, or accepted partnership proposal. These remain conditions to negotiate, not assets already secured.",
          sourceIds: [],
        },
      ],
    },
    {
      id: "review-customer",
      title: "Review the customer proposition",
      description:
        "Compare the advantages and limits of store and mail delivery.",
      hours: 1,
      evidence: [
        {
          id: "delivery-tradeoff",
          label: "Convenience has different meanings",
          kind: "interpretation",
          text: "Mail removes a store visit but introduces waiting. Stores support immediate rental but require a trip. Test which customers value each offer instead of assuming one model serves everyone.",
          sourceIds: [],
        },
      ],
    },
  ],
  suggestedQuestions: [
    "What does the asking price buy?",
    "What do the historical accounts show?",
    "What is unverified about the seller?",
    "What would make each option defensible?",
  ],
  event: {
    title: "Simulation · integration team unavailable",
    text: "At the halfway mark, your operating team reports it cannot absorb the target into store systems in the current planning cycle. An acquisition would need a separately run unit at first.",
    evidence: {
      id: "integration-delay",
      label: "Fictional operating constraint",
      kind: "simulation",
      text: "In this simulation, buying remains possible, but immediate operational integration is unavailable. A purchase requires separate management and funding initially; partnership and internal development remain options. This is not a historical staffing report.",
      sourceIds: [],
    },
  },
  options: [
    {
      id: "buy",
      title: "Pursue the acquisition",
      description:
        "Negotiate a purchase around the asking price, subject to diligence.",
      tradeoff:
        "Secures a business and team but adds funding and execution risk.",
    },
    {
      id: "partner",
      title: "Propose a limited partnership",
      description: "Negotiate a joint trial before considering ownership.",
      tradeoff:
        "Limits commitment but requires seller agreement and may not secure the team.",
    },
    {
      id: "build",
      title: "Build an internal alternative",
      description:
        "Decline the purchase and fund your own mail-rental capability.",
      tradeoff: "Preserves control but takes time and development effort.",
    },
    {
      id: "hold",
      title: "Do nothing for now",
      description: "Decline the offer and maintain the current strategy.",
      tradeoff:
        "Avoids acquisition risk while leaving the emerging competitor independent.",
    },
  ],
  reveal: {
    company: "Blockbuster and Netflix",
    title: "The offer that did not become a deal",
    history:
      "Marc Randolph recalls offering Netflix to Blockbuster for US$50 million in 2000. Blockbuster did not buy it. His later account describes disappointment and the decision to keep competing. The famous story is a participant’s retrospective, not proof of how an acquisition would have unfolded.",
    lesson:
      "An asking price, a struggling seller, and an emerging business model deserve separate analysis. Hindsight cannot tell you whether ownership would preserve the target’s capabilities or whether another path would work. Judge the quality of the evaluation, not whether you recognized the names.",
    sources: [
      {
        id: "source-1",
        title:
          "Marc Randolph firsthand interview, The Tim Ferriss Show, February 2021",
        url: "https://tim.blog/2021/02/01/marc-randolph-transcript/",
      },
      {
        id: "source-2",
        title: "Netflix 2002 S-1/A: historical 1999 financial statements",
        url: "https://www.sec.gov/Archives/edgar/data/1065280/000101287002002125/ds1a.htm",
      },
    ],
    consequences: {
      buy: "Hypothetical: buying might add valuable capabilities, but integration, further funding, and staff retention could change the target’s trajectory. Its later independent success is not an acquisition return forecast.",
      partner:
        "Hypothetical: a trial could produce evidence with less capital at risk. The seller could reject it, and cooperation might not deliver the learning or exclusivity desired. No such outcome is established here.",
      build:
        "Hypothetical: internal development could fit existing systems or move too slowly. The dossier supplies no credible build cost or delivery schedule, so success cannot be assumed.",
      hold: "Historical element: Blockbuster did not acquire Netflix at this meeting. Keeping every aspect of strategy unchanged is hypothetical; rejecting this purchase alone does not explain either company’s later history.",
    },
    rubric: [
      "Did you separate price from future funding needs?",
      "Did you use the historical financial figures accurately?",
      "Did you consider integration and seller agreement?",
      "Did your plan respond to any simulation constraint you encountered?",
      "Did you avoid treating later success as guaranteed?",
    ],
  },
};
