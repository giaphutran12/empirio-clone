import type { DecisionOption, Evidence, Message, PlayableCase } from "./types";

/** One screen in the step-by-step feed. Each holds one or two pieces of information. */
export type FeedStep =
  | { kind: "hook" }
  | { kind: "fact"; evidence: Evidence; index: number; total: number }
  | { kind: "gaps" }
  | { kind: "prepare" }
  | { kind: "analyst" }
  | { kind: "research"; task: PlayableCase["research"][number]; index: number }
  | { kind: "event" }
  | { kind: "option"; option: DecisionOption; index: number }
  | { kind: "decide" };

/** Build the ordered screens for a case. The order is fixed so a saved step index stays valid
 * except when the halfway development appears, which inserts one screen before the options. */
export function buildFeedSteps(gameCase: PlayableCase): FeedStep[] {
  const freeIds = new Set(gameCase.knownLimits.map((item) => item.id));
  const facts = gameCase.evidence.filter((item) => !freeIds.has(item.id));
  const initialFacts = facts.filter(
    (item) => !isResearchFinding(gameCase, item),
  );
  const steps: FeedStep[] = [{ kind: "hook" }];
  initialFacts.forEach((evidence, index) =>
    steps.push({
      kind: "fact",
      evidence,
      index,
      total: initialFacts.length,
    }),
  );
  if (gameCase.knownLimits.length > 0) steps.push({ kind: "gaps" });
  steps.push({ kind: "prepare" }, { kind: "analyst" });
  gameCase.research.forEach((task, index) =>
    steps.push({ kind: "research", task, index }),
  );
  if (gameCase.event) steps.push({ kind: "event" });
  gameCase.options.forEach((option, index) =>
    steps.push({ kind: "option", option, index }),
  );
  steps.push({ kind: "decide" });
  return steps;
}

/** Evidence unlocked by research or the event is shown on its own step, not as a starting fact. */
function isResearchFinding(gameCase: PlayableCase, evidence: Evidence) {
  if (gameCase.event?.evidence.id === evidence.id) return true;
  return gameCase.researchFindingIds?.includes(evidence.id) ?? false;
}

export function clampStep(index: number, steps: FeedStep[]) {
  return Math.min(Math.max(0, index), Math.max(0, steps.length - 1));
}

/** Find the saved "What we found" message for a research task. Older saves lack the
 * research id, so fall back to matching the order in which research was commissioned. */
export function findingFor(
  taskId: string,
  researchIds: string[],
  messages: Message[],
): Message | undefined {
  const tagged = messages.find((message) => message.researchId === taskId);
  if (tagged) return tagged;
  const findings = messages.filter(
    (message) => message.role === "assistant" && message.reply?.answer === "",
  );
  const position = researchIds.indexOf(taskId);
  return position >= 0 ? findings[position] : undefined;
}

export function stepLabel(step: FeedStep): string {
  switch (step.kind) {
    case "hook":
      return "The situation";
    case "fact":
      return `Fact ${step.index + 1} of ${step.total}`;
    case "gaps":
      return "What nobody knows yet";
    case "prepare":
      return "Before you decide";
    case "analyst":
      return "Ask your analyst";
    case "research":
      return `Research ${step.index + 1}`;
    case "event":
      return "New development";
    case "option":
      return `Option ${String.fromCharCode(65 + step.index)}`;
    case "decide":
      return "Your call";
  }
}
