import { useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUp,
  BookOpen,
  Check,
  ChevronDown,
  LoaderCircle,
  Search,
} from "lucide-react";
import { cleanAnalystCopy } from "@/lib/analyst-copy";
import type { PlayableCase, Session } from "@/lib/types";
import { Gloss } from "./gloss";

type AnalystViewProps = {
  gameCase: PlayableCase;
  session: Session;
  busy: boolean;
  thinking: boolean;
  online: boolean;
  onResearch: (id: string) => void;
  onAsk: (question?: string) => void;
  onDraftChange: (draft: string) => void;
};

export function AnalystView(props: AnalystViewProps) {
  const { gameCase, session, busy, online, onResearch } = props;
  return (
    <div className="analyst-view">
      <AnalystChat {...props} />
      <aside className="research-panel">
        <span className="eyebrow">GO A LEVEL DEEPER</span>
        <h2>Research desk</h2>
        <p className="research-intro">
          Research takes time. Choose what could change your mind.
        </p>
        {gameCase.knownLimits.length > 0 && (
          <details className="review-details known-gaps">
            <summary>Known gaps & free checks</summary>
            {gameCase.knownLimits.map((item) => (
              <p key={item.id}>
                <Gloss text={item.text} />
              </p>
            ))}
          </details>
        )}
        {gameCase.research.map((research) => {
          const done = session.researchIds.includes(research.id);
          return (
            <button
              className={`research-card ${done ? "complete" : ""}`}
              key={research.id}
              disabled={
                done ||
                busy ||
                !!session.decision ||
                research.hours > gameCase.remainingHours ||
                !online
              }
              onClick={() => onResearch(research.id)}
            >
              <div>
                <span className="research-icon">
                  {done ? <Check size={17} /> : <Search size={17} />}
                </span>
                <span className="research-cost">
                  {done ? "REVIEWED" : `${research.hours}H`}
                </span>
              </div>
              <h3>{research.title}</h3>
              <p>
                <Gloss text={research.description} />
              </p>
              {research.helpsWith && (
                <p className="research-value">
                  <strong>Why check:</strong>{" "}
                  <Gloss text={research.helpsWith} />
                </p>
              )}
              <span className="research-action">
                {done
                  ? "Added to your evidence"
                  : research.hours > gameCase.remainingHours
                    ? "Not enough time remaining"
                    : "Review investigation"}
                {!done && <ArrowRight size={15} />}
              </span>
            </button>
          );
        })}
        <div className="research-principle">
          <BookOpen size={17} />
          <p>
            More information is useful only if it might change the decision.
          </p>
        </div>
      </aside>
    </div>
  );
}

/** The conversation alone, shared by the tab layout and the step feed. */
export function AnalystChat({
  gameCase,
  session,
  busy,
  thinking,
  online,
  onResearch,
  onAsk,
  onDraftChange,
  hideFindings = false,
}: AnalystViewProps & { hideFindings?: boolean }) {
  const chatEnd = useRef<HTMLDivElement>(null);
  const messages = hideFindings
    ? session.messages.filter(
        (message) =>
          !(message.role === "assistant" && message.reply?.answer === ""),
      )
    : session.messages;
  useEffect(() => {
    if (messages.length === 0) return;
    chatEnd.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "end",
    });
  }, [messages.length]);
  const referenceLabels = [
    ...gameCase.evidence.map((item) => item.label),
    ...gameCase.research.map((item) => item.title),
  ];
  return (
    <section className="conversation">
      <div className="analyst-heading">
        <span className="avatar">
          A<span />
        </span>
        <div>
          <h2>Your analyst</h2>
          <span>What would you like to know?</span>
        </div>
        <span className="tiny-label">AI</span>
      </div>
      <div className="messages" aria-live="polite">
        <div className="analyst-message intro-message">
          <span className="message-label">ANALYST</span>
          <p>
            Ask me to explain a fact or compare the choices. Questions are free.
            Research costs time.
          </p>
        </div>
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user" ? "user-message" : "analyst-message"
            }
          >
            <span className="message-label">
              {message.role === "user"
                ? "YOU"
                : message.reply?.fallback
                  ? "ANALYST · LIMITED ANSWER"
                  : "ANALYST"}
            </span>
            <p>
              {message.role === "user" ? (
                message.text
              ) : (
                <Gloss text={cleanAnalystCopy(message.text, referenceLabels)} />
              )}
            </p>
            {message.reply && (
              <>
                <span className="answer-kind">
                  {message.reply.kind === "evidence"
                    ? "Based on the facts"
                    : message.reply.kind === "unknown"
                      ? "Nobody knows yet"
                      : "The analyst’s read"}
                </span>
                {message.reply.evidenceIds.length > 0 && (
                  <details className="message-evidence">
                    <summary>
                      Facts used · {message.reply.evidenceIds.length}
                      <ChevronDown size={14} />
                    </summary>
                    {message.reply.evidenceIds.map((id) => {
                      const evidence = gameCase.evidence.find(
                        (item) => item.id === id,
                      );
                      return evidence ? (
                        <p key={id}>
                          <strong>{evidence.label}:</strong>{" "}
                          <Gloss text={evidence.text} />
                        </p>
                      ) : null;
                    })}
                  </details>
                )}
                {message.reply.researchIds.map((id) => {
                  const research = gameCase.research.find(
                    (item) => item.id === id,
                  );
                  return research && !session.researchIds.includes(id) ? (
                    <button
                      key={id}
                      className="research-suggestion"
                      disabled={
                        busy ||
                        !!session.decision ||
                        research.hours > gameCase.remainingHours
                      }
                      onClick={() => onResearch(id)}
                    >
                      <Search size={14} />
                      {research.title}
                      <span>{research.hours}h</span>
                    </button>
                  ) : null;
                })}
              </>
            )}
          </div>
        ))}
        {thinking && (
          <div className="thinking" role="status">
            <LoaderCircle size={15} className="spin" />
            Your analyst is reviewing the evidence…
          </div>
        )}
        <div ref={chatEnd} />
      </div>
      {!session.decision && (
        <>
          <div className="suggested-questions">
            {gameCase.suggestedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => onAsk(question)}
                disabled={busy || !online}
              >
                {question}
                <ArrowUp size={13} />
              </button>
            ))}
          </div>
          <form
            className="chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              if (!busy && online && session.draft.trim()) onAsk();
            }}
          >
            <label className="sr-only" htmlFor="analyst-question">
              Ask your analyst
            </label>
            <textarea
              id="analyst-question"
              placeholder="What do we need to know?"
              rows={2}
              maxLength={1000}
              value={session.draft}
              onChange={(event) => onDraftChange(event.target.value)}
              onKeyDown={(event) => {
                if (
                  event.key !== "Enter" ||
                  event.shiftKey ||
                  event.nativeEvent.isComposing ||
                  event.nativeEvent.keyCode === 229
                )
                  return;
                event.preventDefault();
                if (!event.repeat) event.currentTarget.form?.requestSubmit();
              }}
              disabled={busy}
            />
            <button
              aria-label="Send question"
              type="submit"
              disabled={busy || !session.draft.trim() || !online}
            >
              <ArrowUp size={21} />
            </button>
          </form>
          <p className="chat-note">Questions are free. Research costs time.</p>
        </>
      )}
    </section>
  );
}
