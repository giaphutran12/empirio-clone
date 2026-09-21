import type { CaseDefinition, Evidence } from "../types";
const detail = (id: string, label: string, text: string): Evidence => ({
  id,
  label,
  text,
  kind: "simulation",
  sourceIds: [],
});

export const gym: CaseDefinition = {
  id: "case-031",
  version: 1,
  number: "31",
  format: "scenario",
  title: "The $500 gym pitch",
  subtitle: "More cash today. A better business?",
  category: "Pricing",
  year: "Ad-inspired scenario",
  role: "You own a small gym.",
  objective: "Keep the gym open and find a plan that pays for its work.",
  briefing:
    "Your gym is losing money. A visitor has a fix: drop $50 monthly passes and sell a $500, 90-day challenge. Twenty buyers would pay $10,000 today. You need a plan for the next 90 days.",
  question: "Would you take the $500 bet?",
  evidence: [
    detail(
      "members",
      "100 members · $50 a month",
      "All 100 currently pay. If they stay, memberships bring in $5,000 each month.",
    ),
    detail(
      "bills",
      "$5,500 in monthly bills",
      "Rent, current staff and other running costs total $5,500 a month. Extra challenge coaching is not included.",
    ),
    detail(
      "cash",
      "$2,000 left in the bank",
      "That cash must cover any losses. There is no new loan lined up.",
    ),
    detail(
      "pitch",
      "$500 buys 90 days",
      "The pitch offers 20 places, daily check-ins and group coaching. Twenty buyers are a sales target, not signed customers.",
    ),
    detail(
      "attendance",
      "20% show up in a typical week",
      "Low use has not stopped the other members paying. We do not know if a higher price would make them attend.",
    ),
  ],
  research: [
    {
      id: "costs",
      title: "Price the coaching work",
      description: "Get a quote for the extra work in a 20-person group.",
      hours: 2,
      evidence: [
        detail(
          "coach-quote",
          "$3,000 per group",
          "A coach quotes $3,000 for one 20-person group over 90 days, on top of current bills. The quote covers sessions and check-ins.",
        ),
      ],
    },
    {
      id: "demand",
      title: "Ask who would pay",
      description:
        "Check interest in the offer and where those buyers come from.",
      hours: 2,
      evidence: [
        detail(
          "buyer-interest",
          "12 interested, none paid",
          "Twelve people say they might join at $500. Eight already pay for membership; four are new. No one has paid or agreed to a start date.",
        ),
      ],
    },
    {
      id: "capacity",
      title: "Check the floor and staff",
      description:
        "See whether three groups can fit alongside current members.",
      hours: 3,
      evidence: [
        detail(
          "capacity-limit",
          "Room for one extra group",
          "The current timetable has space for one coached group. Three groups need new class times and another staffing quote; the cost is not known.",
        ),
      ],
    },
    {
      id: "gaps",
      title: "Known gaps",
      description: "What we still do not know.",
      hours: 0,
      evidence: [
        {
          id: "renewals",
          label: "The next 90 days are unknown",
          text: "We have no paid sign-ups, measured fitness results, refund rate or repeat sales. Paying more does not prove people will show up.",
          kind: "unknown",
          sourceIds: [],
        },
      ],
    },
  ],
  suggestedQuestions: [
    "Compare both plans over 90 days.",
    "Is upfront cash the same as profit?",
    "What would make a small test worth doing?",
  ],
  event: {
    title: "The coach needs a booking",
    text: "The coach now wants a $1,000 nonrefundable booking payment today. It counts toward the full coaching bill. No customers have paid yet.",
    evidence: detail(
      "event",
      "$1,000 before any sales",
      "The coach now wants a $1,000 nonrefundable booking payment today. It counts toward the full coaching bill. No customers have paid yet.",
    ),
  },
  options: [
    {
      id: "replace",
      title: "Replace passes with the challenge",
      description: "End monthly passes and aim for 20 buyers at $500.",
      tradeoff:
        "Cash comes early, but one payment must cover three months of work.",
    },
    {
      id: "pilot",
      title: "Keep passes. Test one small group",
      description:
        "Keep memberships and test paid demand before a full launch. Set a spending cap and clear terms for refunds.",
      tradeoff:
        "You learn with less at stake, but a small test may not cover the gym’s losses.",
    },
    {
      id: "scale",
      title: "Launch three groups right away",
      description: "Aim for 60 buyers at $500 while keeping memberships.",
      tradeoff:
        "The sales target is larger. So are the staffing and space needs.",
    },
    {
      id: "hold",
      title: "Keep the current plan for now",
      description: "Keep $50 passes and make no change this round.",
      tradeoff:
        "You avoid new promises, but the current monthly loss continues.",
    },
  ],
  reveal: {
    company: "The gym",
    title: "The pitch skipped two months",
    history:
      "This is a practice case inspired by the ad transcript. The ad does not identify a gym or provide records of its results. The bills, cash and research findings here are authored scenario inputs.",
    lesson:
      "Compare the same length of time. Then subtract the full cost of doing the work.",
    sources: [],
    consequences: {
      replace:
        "At 20 paid places, $10,000 would not cover the $16,500 base bill for 90 days, even before coaching.",
      pilot:
        "A paid test can check demand, costs and lost memberships before you bet the gym.",
      scale:
        "Sixty paid places would bring in $30,000, but demand and capacity have not been proved.",
      hold: "At unchanged membership, the next 90 days lose $1,500 before any new work.",
    },
    rubric: [
      "Compare the same 90 days.",
      "Separate cash collected from profit.",
      "Count coaching and members who switch plans.",
      "Test paid demand before expanding.",
    ],
  },
};
