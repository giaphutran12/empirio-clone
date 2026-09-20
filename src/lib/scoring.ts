import { z } from "zod";
import type { CaseDefinition, Debrief } from "./types";

const mark = z.object({
  level: z.number().int().min(0).max(5),
  reason: z.string().min(1).max(180),
});
export const scoreSchema = z.object({
  choice: mark,
  facts: mark,
  risk: mark,
  nextStep: mark,
  optionId: z.string(),
  example: z.string().min(1).max(450),
});

export function scoreDecision(
  value: unknown,
  definition: CaseDefinition,
): Debrief["score"] | null {
  const result = scoreSchema.safeParse(value);
  if (
    !result.success ||
    !definition.options.some((option) => option.id === result.data.optionId)
  )
    return null;
  const marks = result.data;
  const parts = [
    { label: "Your choice", ...marks.choice },
    { label: "Use of facts", ...marks.facts },
    { label: "Spotting risk", ...marks.risk },
    { label: "Next step", ...marks.nextStep },
  ].map(({ label, level, reason }) => ({ label, points: level * 5, reason }));
  const total = parts.reduce((sum, part) => sum + part.points, 0);
  const verdict =
    total >= 80
      ? "Strong call"
      : total >= 60
        ? "Good start"
        : total >= 40
          ? "Needs more thought"
          : "Try a stronger reason";
  return {
    total,
    verdict,
    parts,
    example: marks.example,
    optionId: marks.optionId,
  };
}
