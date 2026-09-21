"use client";
import { useEffect, useState } from "react";
import { Clock3, LoaderCircle, TriangleAlert, X } from "lucide-react";
import type {
  AnalystReply,
  CaseSummary,
  Debrief,
  Message,
  PlayableCase,
  Session,
} from "@/lib/types";
import { loadSessions, saveSessions } from "@/lib/storage";
import { CaseLibrary } from "./case-library";
import { BriefingView } from "./briefing-view";
import { AnalystView } from "./analyst-view";
import { DecisionView } from "./decision-view";
import { ResearchConfirmation } from "./research-confirmation";
import { DebriefView } from "./debrief";

import {
  GameHeader,
  CaseNavigation,
  DecisionDock,
  type CaseTab,
} from "./case-navigation";
type Busy = "opening" | "research" | "analyst" | "debrief" | "coach" | null;

async function request<T>(url: string, body?: unknown): Promise<T> {
  const response = await fetch(url, {
    method: body ? "POST" : "GET",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(60000),
  });
  const result = await response.json();
  if (!response.ok)
    throw new Error(
      result.error || "The request did not finish. Please try again.",
    );
  return result;
}

function caseUrl(session: Session, researchIds = session.researchIds) {
  return `/api/case?${new URLSearchParams({ id: session.caseId, version: String(session.version), research: researchIds.join(",") })}`;
}

function context(session: Session, messages = session.messages) {
  const recent = messages.slice(-20).map(({ role, text }) => ({ role, text }));
  while (
    recent.reduce((total, message) => total + message.text.length, 0) > 11000
  )
    recent.shift();
  return {
    caseId: session.caseId,
    version: session.version,
    researchIds: session.researchIds,
    messages: recent,
  };
}

/** Keep a complete attempt on this device while the server owns the evidence and rules. */
export function Game({ cases }: { cases: CaseSummary[] }) {
  const [collection, setCollection] = useState("scenario");
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [storageBlocked, setStorageBlocked] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [gameCase, setGameCase] = useState<PlayableCase | null>(null);
  const [tab, setTab] = useState<CaseTab>("briefing");
  const [busy, setBusy] = useState<Busy>(null);
  const [error, setError] = useState("");
  const [researchId, setResearchId] = useState<string | null>(null);
  const [eventNotice, setEventNotice] = useState(false);
  const [online, setOnline] = useState(true);
  const session = sessions.find((item) => item.id === activeId);

  useEffect(() => {
    try {
      setSessions(loadSessions());
    } catch {
      setStorageBlocked(true);
      setError(
        "Saved progress could not be read. Existing data has been left untouched; new progress cannot be saved.",
      );
    }
    setLoaded(true);
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  useEffect(() => {
    if (!loaded || storageBlocked) return;
    try {
      saveSessions(sessions);
    } catch {
      setStorageBlocked(true);
      setError(
        "Browser storage is full or unavailable. This session works, but progress cannot be saved.",
      );
    }
  }, [sessions, loaded, storageBlocked]);

  function updateSession(patch: Partial<Session>) {
    setSessions((previous) =>
      previous.map((item) =>
        item.id === activeId ? { ...item, ...patch } : item,
      ),
    );
  }

  async function refreshSavedReview(attempt: Session) {
    if (
      !attempt.decision ||
      !attempt.debrief ||
      (attempt.debrief.copyVersion === 4 && attempt.debrief.lesson)
    )
      return attempt;
    try {
      const debrief = await request<Debrief>("/api/debrief", {
        ...context(attempt),
        decision: attempt.decision,
      });
      const updated = { ...attempt, debrief };
      setSessions((previous) =>
        previous.map((item) => (item.id === attempt.id ? updated : item)),
      );
      return updated;
    } catch {
      // Keep the original review available if the refresh fails.
      return attempt;
    }
  }

  async function openCase(summary: CaseSummary, replay = false) {
    if (busy || !loaded) return;
    setBusy("opening");
    setError("");
    const existing =
      !replay &&
      [...sessions]
        .reverse()
        .find((item) => item.caseId === summary.id && !item.debrief);
    const completed =
      !replay &&
      [...sessions]
        .reverse()
        .find((item) => item.caseId === summary.id && item.debrief);
    const attempt: Session = existing ||
      completed || {
        id: crypto.randomUUID(),
        caseId: summary.id,
        version: summary.version,
        startedAt: new Date().toISOString(),
        researchIds: [],
        messages: [],
        draft: "",
        informedReplay: sessions.some(
          (item) => item.caseId === summary.id && item.debrief,
        ),
      };
    try {
      const nextCase = await request<PlayableCase>(caseUrl(attempt));
      await refreshSavedReview(attempt);
      if (!existing && !completed)
        setSessions((previous) => [...previous, attempt]);
      setActiveId(attempt.id);
      setGameCase(nextCase);
      setTab(attempt.decision ? "decision" : "briefing");
      setEventNotice(false);
      setResearchId(null);
      window.scrollTo(0, 0);
    } catch (cause) {
      setError(errorMessage(cause));
    } finally {
      setBusy(null);
    }
  }

  async function reviewAttempt(id: string) {
    const attempt = sessions.find((item) => item.id === id);
    if (!attempt || busy) return;
    setBusy("opening");
    setError("");
    try {
      setGameCase(await request<PlayableCase>(caseUrl(attempt)));
      await refreshSavedReview(attempt);
      setActiveId(id);
      window.scrollTo(0, 0);
    } catch (cause) {
      setError(errorMessage(cause));
    } finally {
      setBusy(null);
    }
  }

  async function commissionResearch() {
    if (!session || !gameCase || !researchId || busy) return;
    const ids = [...session.researchIds, researchId];
    setBusy("research");
    setError("");
    try {
      const updated = await request<PlayableCase>(caseUrl(session, ids));
      const newlyAvailable = updated.evidence.filter(
        (evidence) =>
          !gameCase.evidence.some((previous) => previous.id === evidence.id),
      );
      updateSession({
        researchIds: ids,
        messages: [
          ...session.messages,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            text: `What we found: ${newlyAvailable
              .filter((evidence) => evidence.id !== updated.event?.evidence.id)
              .map((evidence) => evidence.text)
              .join(
                " ",
              )}\n\nWhy it matters: ${updated.research.find((task) => task.id === researchId)?.helpsWith ?? "Use this to compare your choices."}`,
            reply: {
              answer: "",
              evidenceIds: newlyAvailable.map((evidence) => evidence.id),
              researchIds: [],
              kind: "evidence",
            },
          },
        ],
      });
      if (updated.event && !gameCase.event) setEventNotice(true);
      setGameCase(updated);
      setResearchId(null);
    } catch (cause) {
      setError(errorMessage(cause));
    } finally {
      setBusy(null);
    }
  }

  async function askAnalyst(question = session?.draft || "") {
    if (!session || busy || !question.trim()) return;
    setBusy("analyst");
    setError("");
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text: question.trim(),
    };
    updateSession({ draft: question });
    try {
      const reply = await request<AnalystReply>(
        "/api/analyst",
        context(session, [...session.messages, userMessage]),
      );
      updateSession({
        draft: "",
        messages: [
          ...session.messages,
          userMessage,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            text: reply.answer,
            reply,
          },
        ],
      });
    } catch (cause) {
      setError(errorMessage(cause));
    } finally {
      setBusy(null);
    }
  }

  async function submitDecision() {
    if (!session || busy) return;
    const decision = session.decision || session.decisionDraft;
    if (!decision?.optionId) return;
    setBusy("debrief");
    setError("");
    updateSession({ decision });
    try {
      const debrief = await request<Debrief>("/api/debrief", {
        ...context(session),
        decision,
      });
      updateSession({ debrief });
      window.scrollTo(0, 0);
    } catch (cause) {
      setError(errorMessage(cause));
    } finally {
      setBusy(null);
    }
  }

  async function askCoach(question = session?.coachDraft || "") {
    if (!session?.decision || !online || busy || !question.trim()) return;
    setBusy("coach");
    setError("");
    updateSession({ coachDraft: question });
    const messages = [
      ...(session.coachMessages ?? []),
      { role: "user" as const, text: question.trim() },
    ];
    try {
      const reply = await request<{ answer: string; fallback?: boolean }>(
        "/api/coach",
        {
          caseId: session.caseId,
          version: session.version,
          researchIds: session.researchIds,
          decision: session.decision,
          messages: messages.slice(-8),
        },
      );
      if (reply.fallback) {
        setError(
          "Live coaching is unavailable. Your lesson and score are still here. Try again shortly.",
        );
      } else
        updateSession({
          coachDraft: "",
          coachMessages: [
            ...messages,
            { role: "assistant", text: reply.answer },
          ],
        });
    } catch (cause) {
      setError(errorMessage(cause));
    } finally {
      setBusy(null);
    }
  }

  function leaveCase() {
    setActiveId(null);
    setGameCase(null);
    setError("");
    window.scrollTo(0, 0);
  }
  function switchTab(next: CaseTab) {
    setTab(next);
    setResearchId(null);
    setError("");
    window.scrollTo(0, 0);
  }

  const notices = (
    <>
      {!online && (
        <div className="global-notice">
          <TriangleAlert size={17} />
          You’re offline. Your saved progress is safe; reconnect to ask or
          investigate.
        </div>
      )}
      {error && (
        <div className="global-notice error" role="alert">
          {error}
          <button aria-label="Dismiss notice" onClick={() => setError("")}>
            <X size={17} />
          </button>
        </div>
      )}
    </>
  );
  if (!session || !gameCase)
    return (
      <>
        {notices}
        <CaseLibrary
          cases={cases}
          sessions={sessions}
          onOpen={openCase}
          collection={collection}
          onCollection={setCollection}
        />
        {busy === "opening" && (
          <div className="loading-toast" role="status">
            <LoaderCircle className="spin" size={17} />
            Opening the case file…
          </div>
        )}
      </>
    );

  const savedAttempts = sessions.filter(
    (item) => item.caseId === session.caseId && item.debrief,
  );
  const completedIds = new Set(
    sessions.filter((item) => item.debrief).map((item) => item.caseId),
  );
  const currentIndex = cases.findIndex((item) => item.id === session.caseId);
  const orderedNext = [
    ...cases.slice(currentIndex + 1),
    ...cases.slice(0, currentIndex),
  ];
  const sameCollection = orderedNext.filter(
    (item) => (item.format === "scenario") === (gameCase.format === "scenario"),
  );
  const nextCase =
    sameCollection.find(
      (item) =>
        !completedIds.has(item.id) && item.category === gameCase.category,
    ) ??
    sameCollection.find((item) => !completedIds.has(item.id)) ??
    orderedNext.find((item) => !completedIds.has(item.id)) ??
    orderedNext[0];
  const task = gameCase.research.find((item) => item.id === researchId);
  return (
    <div className="game-shell">
      {notices}
      <GameHeader gameCase={gameCase} busy={!!busy} onExit={leaveCase} />
      {session.debrief ? (
        <main className="game-main">
          {savedAttempts.length > 1 && (
            <label className="attempt-picker">
              Your saved calls
              <select
                aria-label="View saved attempt"
                value={session.id}
                disabled={!!busy}
                onChange={(event) => reviewAttempt(event.target.value)}
              >
                {savedAttempts.map((item, index) => (
                  <option key={item.id} value={item.id}>
                    {index === 0 ? "Original call" : `Informed replay ${index}`}{" "}
                    · {new Date(item.startedAt).toLocaleDateString()}
                  </option>
                ))}
              </select>
            </label>
          )}
          <DebriefView
            session={session}
            gameCase={gameCase}
            onExit={leaveCase}
            online={online}
            nextCase={nextCase}
            onNext={() =>
              nextCase
                ? openCase(nextCase, completedIds.has(nextCase.id))
                : leaveCase()
            }
            onPractice={(practiceAnswerId) =>
              updateSession({ practiceAnswerId })
            }
            onCoach={askCoach}
            onCoachDraft={(coachDraft) => updateSession({ coachDraft })}
            onRetry={() => submitDecision()}
            busy={!!busy}
            onReplay={() =>
              openCase(
                cases.find((item) => item.id === session.caseId)!,
                true,
              )
            }
          />
        </main>
      ) : (
        <>
          {session.version < 2 && (
            <div className="global-notice">
              Your saved research time is kept.{" "}
              <button
                className="text-button"
                disabled={!!busy}
                onClick={() =>
                  openCase(
                    cases.find((item) => item.id === session.caseId)!,
                    true,
                  )
                }
              >
                Start the updated case
              </button>
            </div>
          )}
          <CaseNavigation
            gameCase={gameCase}
            informedReplay={session.informedReplay}
            tab={tab}
            onTabChange={switchTab}
          />
          <main className="game-main">
            {eventNotice && gameCase.event && (
              <div className="event-notice" role="status">
                <div>
                  <span className="eyebrow">NEW DEVELOPMENT</span>
                  <h3>{gameCase.event.title}</h3>
                  <p>{gameCase.event.text}</p>
                </div>
                <button
                  aria-label="Dismiss development"
                  onClick={() => setEventNotice(false)}
                >
                  <X size={18} />
                </button>
              </div>
            )}
            {gameCase.remainingHours === 0 && (
              <div className="deadline-notice">
                <Clock3 size={19} />
                <span>
                  The research window has closed. Review what you know and make
                  your call.
                </span>
              </div>
            )}
            {tab === "briefing" && (
              <BriefingView
                gameCase={gameCase}
                onTalkToAnalyst={() => switchTab("analyst")}
              />
            )}
            {tab === "analyst" && (
              <AnalystView
                gameCase={gameCase}
                session={session}
                busy={!!busy}
                thinking={busy === "analyst"}
                online={online}
                onResearch={setResearchId}
                onAsk={askAnalyst}
                onDraftChange={(draft) => updateSession({ draft })}
              />
            )}
            {tab === "decision" && (
              <DecisionView
                gameCase={gameCase}
                session={session}
                busy={!!busy}
                preparingDebrief={busy === "debrief"}
                online={online}
                onChange={(decisionDraft) => updateSession({ decisionDraft })}
                onSubmit={submitDecision}
              />
            )}
          </main>
          {tab !== "decision" && (
            <DecisionDock
              remainingHours={gameCase.remainingHours}
              onDecide={() => switchTab("decision")}
            />
          )}
          {task && (
            <ResearchConfirmation
              task={task}
              remainingHours={gameCase.remainingHours}
              busy={!!busy}
              reviewing={busy === "research"}
              onConfirm={commissionResearch}
              onCancel={() => setResearchId(null)}
            />
          )}
        </>
      )}
    </div>
  );
}

function errorMessage(error: unknown) {
  if (error instanceof Error && /timeout|abort/i.test(error.name))
    return "The request timed out. Your draft and research time are unchanged. Try again.";
  return error instanceof Error
    ? error.message
    : "Connection interrupted. Your progress is unchanged. Try again.";
}
