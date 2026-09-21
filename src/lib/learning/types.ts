export type ChoiceLesson = {
  score: number;
  verdict: "Strong move" | "Reasonable move" | "Risky move";
  why: string;
  tradeoff: string;
};
export type CaseLesson = {
  moneyComparison?: {
    title: string;
    period: string;
    rows: { label: string; sales: number; costs: number }[];
    note: string;
  };
  alternativeConditions?: string;
  skill: string;
  takeaway: string;
  choices: Record<string, ChoiceLesson>;
  history: {
    decision: string;
    result: string;
    connection: string;
    sources: { title: string; url: string }[];
  };
  check: {
    question: string;
    options: { id: string; text: string; explanation: string }[];
    answerId: string;
  };
  terms: { term: string; meaning: string }[];
  researchNotes: Record<string, string>;
  eventChange: {
    optionId: string;
    title: string;
    description: string;
    tradeoff: string;
    why: string;
    score: number;
  };
};
