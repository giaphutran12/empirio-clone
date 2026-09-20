import { getCase } from "@/lib/catalog";
import { errorResponse, InputError, toPlayableCase } from "@/lib/engine";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const version = params.has("version")
      ? Number(params.get("version"))
      : undefined;
    if (version !== undefined && (!Number.isInteger(version) || version < 1))
      throw new InputError("Invalid case version.");
    const research = params.get("research") || "";
    if (research.length > 1000)
      throw new InputError("Research ledger too large.");
    return Response.json(
      toPlayableCase(
        getCase(params.get("id") || undefined, version),
        research ? research.split(",") : [],
      ),
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return errorResponse(error);
  }
}
