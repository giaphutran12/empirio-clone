import type { Session } from "./types";
const storageKey = "the-call:sessions:v1";

/** Preserve separate attempts so hindsight never overwrites the original call. */
export function loadSessions(): Session[] {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return [];
  const parsed: unknown = JSON.parse(saved);
  if (!Array.isArray(parsed) || !parsed.every(isSession))
    throw new Error(
      "Your saved sessions could not be read. Export browser data before clearing it.",
    );
  return parsed;
}

function isSession(value: unknown): value is Session {
  if (!value || typeof value !== "object") return false;
  const entry = value as Session;
  return (
    typeof entry.id === "string" &&
    typeof entry.caseId === "string" &&
    typeof entry.version === "number" &&
    Array.isArray(entry.researchIds) &&
    entry.researchIds.every((id) => typeof id === "string") &&
    Array.isArray(entry.messages) &&
    entry.messages.every(
      (message) =>
        typeof message.text === "string" &&
        ["user", "assistant"].includes(message.role),
    ) &&
    typeof entry.draft === "string"
  );
}

/** Persist only player-owned state; hidden case evidence stays on the server. */
export function saveSessions(sessions: Session[]) {
  localStorage.setItem(storageKey, JSON.stringify(sessions));
}

export type Layout = "feed" | "tabs";
const layoutKey = "the-call:layout:v1";

/** Reading mode is a device preference, not part of any attempt. Default to the step feed. */
export function loadLayout(): Layout {
  try {
    return localStorage.getItem(layoutKey) === "tabs" ? "tabs" : "feed";
  } catch {
    return "feed";
  }
}
export function saveLayout(layout: Layout) {
  try {
    localStorage.setItem(layoutKey, layout);
  } catch {
    // A blocked store only loses the preference, never progress.
  }
}
