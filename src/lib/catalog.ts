import { newCoke } from "./cases/new-coke";
import { netflix } from "./cases/netflix";
import { intel } from "./cases/intel";
import { cases04to12 } from "./cases/batch-04";
import { cases13to21 } from "./cases/batch-13";
import { cases22to30 } from "./cases/batch-22";
import { InputError } from "./engine";
import type { CaseDefinition } from "./types";

export const cases: CaseDefinition[] = [
  newCoke,
  netflix,
  intel,
  ...cases04to12,
  ...cases13to21,
  ...cases22to30,
];
export function getCase(
  id: string = cases[0].id,
  version?: number,
): CaseDefinition {
  const definition = cases.find((item) => item.id === id);
  if (!definition) throw new InputError("Unknown case.");
  if (version !== undefined && version !== definition.version)
    throw new InputError(
      "This saved session uses a different case version. Start a new session.",
    );
  return definition;
}
