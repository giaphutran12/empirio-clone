import { askCoach, coachSchema, parseInput } from "@/lib/ai";
import { getCase } from "@/lib/catalog";
import { errorResponse, readJsonBody } from "@/lib/engine";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    const input = parseInput(coachSchema, await readJsonBody(request));
    return Response.json(
      await askCoach(getCase(input.caseId, input.version), input),
    );
  } catch (error) {
    return errorResponse(error);
  }
}
