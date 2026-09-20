import type { CaseDefinition, Debrief } from "./types";
import { InputError, toPlayableCase } from "./engine";

/** Choice marks are authored with the case, never inferred from writing length. */
export function scoreChoice(
  definition: CaseDefinition,
  optionId: string,
  researchIds: string[] = [],
): NonNullable<Debrief["score"]> {
  const state = toPlayableCase(definition, researchIds);
  const lesson = definition.teaching;
  const mark = lesson?.choices[optionId];
  if (!mark || !definition.options.some((option) => option.id === optionId))
    throw new InputError("This choice has no reviewed lesson.");
  const change = lesson?.eventChange;
  const changed =
    definition.version >= 2 && !!state.event && change?.optionId === optionId;
  const total = changed ? change.score : mark.score;
  const why = changed ? change.why : mark.why;
  if (!Number.isInteger(total) || total < 0 || total > 100)
    throw new InputError("This choice needs a valid case score.");
  return {
    total,
    verdict:
      total >= 80
        ? "Strong move"
        : total >= 60
          ? "Reasonable move"
          : "Risky move",
    parts: [{ label: "Your choice", points: total, reason: why }],
    example: why,
    optionId,
  };
}
