import type { CaseLesson } from "./learning/types";
export type Evidence = {
  id: string;
  label: string;
  text: string;
  kind: "fact" | "interpretation" | "unknown" | "simulation";
  sourceIds: string[];
};
export type Research = {
  id: string;
  title: string;
  description: string;
  hours: number;
  evidence: Evidence[];
  helpsWith?: string;
};
export type DecisionOption = {
  id: string;
  title: string;
  description: string;
  tradeoff: string;
};
export type Source = { id: string; title: string; url: string };
export type CaseDefinition = {
  teaching?: CaseLesson;
  id: string;
  version: number;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  objective: string;
  briefing: string;
  question: string;
  evidence: Evidence[];
  research: Research[];
  suggestedQuestions: string[];
  event: { title: string; text: string; evidence: Evidence };
  options: DecisionOption[];
  reveal: {
    company: string;
    identityAliases?: string[];
    title: string;
    history: string;
    lesson: string;
    sources: Source[];
    consequences: Record<string, string>;
    rubric: string[];
  };
};
export type CaseSummary = Pick<
  CaseDefinition,
  "id" | "version" | "number" | "title" | "subtitle" | "category" | "year"
> & { company: string; skill: string };
export type PlayableCase = Omit<
  CaseDefinition,
  "research" | "reveal" | "event" | "teaching"
> & {
  research: Omit<Research, "evidence">[];
  company: string;
  learning: { skill: string; terms: { term: string; meaning: string }[] };
  knownLimits: Evidence[];
  remainingHours: number;
  event: CaseDefinition["event"] | null;
};
export type AnalystReply = {
  answer: string;
  evidenceIds: string[];
  researchIds: string[];
  kind: "evidence" | "interpretation" | "unknown";
  fallback?: boolean;
};
export type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  reply?: AnalystReply;
};
export type Confidence = "low" | "medium" | "high";
export type Decision = {
  optionId: string;
  reasoning: string;
  confidence: Confidence;
};
export type Debrief = {
  copyVersion?: number;
  reveal: CaseDefinition["reveal"];
  feedback: { strength: string; missed: string; takeaway: string };
  score?: {
    total: number;
    verdict: string;
    parts: { label: string; points: number; reason: string }[];
    example: string;
    optionId: string;
  };
  lesson?: CaseLesson;
  personalized: boolean;
};
export type Session = {
  id: string;
  caseId: string;
  version: number;
  startedAt: string;
  researchIds: string[];
  messages: Message[];
  draft: string;
  decisionDraft?: Decision;
  decision?: Decision;
  debrief?: Debrief;
  informedReplay: boolean;
  practiceAnswerId?: string;
  coachMessages?: { role: "user" | "assistant"; text: string }[];
  coachDraft?: string;
};
