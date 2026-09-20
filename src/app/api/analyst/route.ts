import { askAnalyst, conversationSchema, parseInput } from "@/lib/ai";
import { getCase } from "@/lib/catalog";
import { errorResponse, readJsonBody } from "@/lib/engine";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    const input = parseInput(conversationSchema, await readJsonBody(request));
    return Response.json(
      await askAnalyst(
        getCase(input.caseId, input.version),
        input.researchIds,
        input.messages,
      ),
    );
  } catch (error) {
    return errorResponse(error);
  }
}
