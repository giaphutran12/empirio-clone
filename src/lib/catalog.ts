import { lessons } from "./learning";
import { newCoke } from "./cases/new-coke";
import { netflix } from "./cases/netflix";
import { intel } from "./cases/intel";
import { cases04to12 } from "./cases/batch-04";
import { cases13to21 } from "./cases/batch-13";
import { cases22to30 } from "./cases/batch-22";
import { InputError } from "./engine";
import type { CaseDefinition } from "./types";

const originalCases: CaseDefinition[] = [
  newCoke,
  netflix,
  intel,
  ...cases04to12,
  ...cases13to21,
  ...cases22to30,
];
// Keep version 1 available so saved research ledgers retain their original costs.
export const cases: CaseDefinition[] = originalCases.map((definition) => ({
  ...definition,
  version: 2,
  teaching: lessons[definition.id],
  research: definition.research.map((task) => ({
    ...task,
    hours: task.evidence.some((item) => item.kind === "fact") ? task.hours : 0,
    helpsWith: lessons[definition.id]?.researchNotes[task.id],
  })),
}));
export function getCase(id: string = cases[0].id, version = 2): CaseDefinition {
  const current = cases.find((item) => item.id === id);
  if (!current) throw new InputError("Unknown case.");
  if (version === 2) return current;
  if (version === 1) {
    const original = originalCases.find((item) => item.id === id)!;
    return { ...original, teaching: lessons[id] };
  }
  throw new InputError("This saved case version is not available.");
}
