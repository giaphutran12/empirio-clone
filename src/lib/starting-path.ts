import type { CaseSummary, Session } from "./types";

// Public ordering only. Evidence, scores, and outcomes stay in the server catalog.
export const startingCaseIds = ["case-032", "case-044", "case-009"];

export function startingCases(cases: CaseSummary[]) {
  return startingCaseIds.flatMap((id) =>
    cases.filter((item) => item.id === id),
  );
}

export function hasCurrentReview(item: CaseSummary, sessions: Session[]) {
  return sessions.some(
    (session) =>
      session.caseId === item.id &&
      session.version === item.version &&
      !!session.debrief,
  );
}

export function nextStartingCase(
  cases: CaseSummary[],
  sessions: Session[],
  currentId: string,
) {
  const path = startingCases(cases);
  const index = path.findIndex((item) => item.id === currentId);
  if (index < 0) return undefined;
  return [...path.slice(index + 1), ...path.slice(0, index)].find(
    (item) => !hasCurrentReview(item, sessions),
  );
}
