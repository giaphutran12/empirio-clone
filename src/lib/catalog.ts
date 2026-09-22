import { spotlightCases } from "./cases/spotlight";
import { puzzleCases32 } from "./cases/puzzles-32";
import { puzzleCases38 } from "./cases/puzzles-38";
import { puzzleCases44 } from "./cases/puzzles-44";
import { gym } from "./cases/gym";
import { lessons } from "./learning";
import { newCoke } from "./cases/new-coke";
import { netflix } from "./cases/netflix";
import { intel } from "./cases/intel";
import { cases04to12 } from "./cases/batch-04";
import { cases13to21 } from "./cases/batch-13";
import { cases22to30 } from "./cases/batch-22";
import { InputError, hasResearchFindings } from "./engine";
import type { CaseDefinition } from "./types";

const originalCases: CaseDefinition[] = [
  newCoke,
  netflix,
  intel,
  ...cases04to12,
  ...cases13to21,
  ...cases22to30,
  gym,
  ...puzzleCases32,
  ...puzzleCases38,
  ...puzzleCases44,
];
// Keep version 1 available so saved research ledgers retain their original costs.
const versionTwoCases: CaseDefinition[] = originalCases.map((definition) => ({
  ...definition,
  version: 2,
  teaching: lessons[definition.id],
  research: definition.research.map((task) => ({
    ...task,
    hours: hasResearchFindings(definition, task) ? task.hours : 0,
    helpsWith: lessons[definition.id]?.researchNotes[task.id],
  })),
}));
export const cases: CaseDefinition[] = versionTwoCases.map((previous) => {
  const definition = spotlightCases.find((item) => item.id === previous.id);
  if (!definition) return previous;
  return {
    ...definition,
    research: definition.research.map((task) => ({
      ...task,
      hours: hasResearchFindings(definition, task) ? task.hours : 0,
      helpsWith: definition.teaching?.researchNotes[task.id],
    })),
  };
});
export function getCase(
  id: string = cases[0].id,
  version?: number,
): CaseDefinition {
  const current = cases.find((item) => item.id === id);
  if (!current) throw new InputError("Unknown case.");
  if (version === undefined || version === current.version) return current;
  if (version === 2) return versionTwoCases.find((item) => item.id === id)!;
  if (version === 1) {
    const original = originalCases.find((item) => item.id === id)!;
    return { ...original, teaching: lessons[id] };
  }
  throw new InputError("This saved case version is not available.");
}
