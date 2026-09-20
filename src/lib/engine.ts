import type { CaseDefinition, PlayableCase } from "./types";

export const RESEARCH_HOURS = 6;
export class InputError extends Error {
  constructor(
    message: string,
    public status = 400,
  ) {
    super(message);
  }
}

/** Replay the ordered ledger. All clients and endpoints use this same accounting. */
export function replayResearch(
  definition: CaseDefinition,
  researchIds: string[],
) {
  if (
    !Array.isArray(researchIds) ||
    researchIds.length > definition.research.length
  )
    throw new InputError("Invalid research ledger.");
  const selected = new Set<string>();
  let usedHours = 0;
  const evidence = [...definition.evidence];
  let event: CaseDefinition["event"] | null = null;
  for (const id of researchIds) {
    const research = definition.research.find((item) => item.id === id);
    if (!research || selected.has(id))
      throw new InputError("Unknown or duplicate research.");
    if (usedHours + research.hours > RESEARCH_HOURS)
      throw new InputError("Not enough research hours.");
    selected.add(id);
    usedHours += research.hours;
    evidence.push(...research.evidence);
    if (!event && usedHours >= RESEARCH_HOURS / 2) {
      event = definition.event;
      evidence.push(event.evidence);
    }
  }
  return {
    usedHours,
    remainingHours: RESEARCH_HOURS - usedHours,
    evidence,
    event,
  };
}

export function toPlayableCase(
  definition: CaseDefinition,
  researchIds: string[] = [],
): PlayableCase {
  const {
    reveal: _reveal,
    event: _event,
    research,
    ...publicFields
  } = definition;
  const { remainingHours, evidence, event } = replayResearch(
    definition,
    researchIds,
  );
  return {
    ...publicFields,
    company: definition.reveal.company,
    research: research.map(({ evidence: _evidence, ...task }) => task),
    remainingHours,
    evidence,
    event,
  };
}

export async function readJsonBody(request: Request): Promise<unknown> {
  const limit = 32_768;
  if (Number(request.headers.get("content-length")) > limit)
    throw new InputError("Request body too large.", 413);
  if (!request.body) throw new InputError("A JSON body is required.");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > limit) {
      await reader.cancel();
      throw new InputError("Request body too large.", 413);
    }
    chunks.push(value);
  }
  const combined = new Uint8Array(bytes);
  let offset = 0;
  for (const chunk of chunks) {
    combined.set(chunk, offset);
    offset += chunk.length;
  }
  try {
    return JSON.parse(new TextDecoder().decode(combined));
  } catch {
    throw new InputError("Invalid JSON.");
  }
}

export function errorResponse(error: unknown) {
  return Response.json(
    {
      error:
        error instanceof InputError
          ? error.message
          : "Unable to process this request.",
    },
    { status: error instanceof InputError ? error.status : 500 },
  );
}
