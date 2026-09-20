import { ArrowRight, ArrowUp, ExternalLink, RotateCcw } from "lucide-react";
import type { Session, PlayableCase, CaseSummary } from "@/lib/types";

export function DebriefView({
  session,
  gameCase,
  onReplay,
  onExit,
  onRetry,
  busy,
  online,
  nextCase,
  onNext,
  onPractice,
  onCoach,
  onCoachDraft,
}: {
  session: Session;
  gameCase: PlayableCase;
  onReplay: () => void;
  onExit: () => void;
  onRetry: () => void;
  busy: boolean;
  online: boolean;
  nextCase?: CaseSummary;
  onNext: () => void;
  onPractice: (id: string) => void;
  onCoach: (question?: string) => void;
  onCoachDraft: (draft: string) => void;
}) {
  if (!session.debrief || !session.decision) return null;
  const { reveal, feedback, score, lesson } = session.debrief;
  const choice = gameCase.options.find(
    (option) => option.id === session.decision?.optionId,
  );
  const practiceAnswer = lesson?.check.options.find(
    (option) => option.id === session.practiceAnswerId,
  );
  return (
    <div className="debrief-view teaching-review">
      <div className="lesson-heading">
        <span className="eyebrow">
          {reveal.company} · {gameCase.year}
        </span>
        <h1>Your call: {choice?.title}</h1>
      </div>
      <section className="lesson-verdict" aria-label="Your choice score">
        {score ? (
          <>
            <div className="choice-score">
              <strong>
                {score.total}
                <small>/100</small>
              </strong>
              <div>
                <span className="eyebrow">CHOICE SCORE</span>
                <h2>{score.verdict}</h2>
              </div>
            </div>
            <p>{score.example}</p>
          </>
        ) : (
          <>
            <h2>Your lesson is ready.</h2>
            <button
              className="button outline"
              disabled={busy || !online}
              onClick={onRetry}
            >
              Refresh lesson
            </button>
          </>
        )}
        <p className="key-tradeoff">
          <strong>The catch:</strong>{" "}
          {lesson?.choices[session.decision.optionId]?.tradeoff ??
            feedback.missed}
        </p>
        <details className="review-details">
          <summary>How this score works</summary>
          <p>
            Each choice has a score set for this case. It weighs the facts and
            tradeoffs you could see. Your notes and confidence do not change it.
          </p>
          <p>
            80–100: strong move. 60–79: reasonable move. Below 60: risky move.
            More than one move can make sense.
          </p>
          {session.informedReplay && <p>You have seen this case before.</p>}
        </details>
      </section>
      <section className="lesson-takeaway">
        <span className="eyebrow">THE IDEA TO KEEP</span>
        <h2>{lesson?.takeaway ?? feedback.takeaway}</h2>
      </section>
      <section className="history-section compact-history">
        <h2>What happened next</h2>
        {lesson ? (
          <>
            <p>
              <strong>The move.</strong> {lesson.history.decision}
            </p>
            <p>
              <strong>The result.</strong> {lesson.history.result}
            </p>
            <p>
              <strong>Why it matters.</strong> {lesson.history.connection}
            </p>
          </>
        ) : (
          <p>{reveal.history}</p>
        )}
      </section>
      {lesson && (
        <details className="review-details option-comparison">
          <summary>Compare all choices</summary>
          {gameCase.options.map((option) => {
            const mark = lesson.choices[option.id];
            return mark ? (
              <article key={option.id}>
                <div>
                  <h3>{option.title}</h3>
                  <strong>{mark.score}/100</strong>
                </div>
                <p>{mark.why}</p>
                <p>
                  <strong>The catch:</strong> {mark.tradeoff}
                </p>
              </article>
            ) : null;
          })}
        </details>
      )}
      {lesson && (
        <section className="practice-card" aria-label="Quick practice">
          <span className="eyebrow">TRY THE IDEA · ONE TAP</span>
          <h2>{lesson.check.question}</h2>
          <div className="practice-options">
            {lesson.check.options.map((option) => (
              <button
                key={option.id}
                className={`practice-option ${session.practiceAnswerId === option.id ? "selected" : ""}`}
                aria-pressed={session.practiceAnswerId === option.id}
                onClick={() => onPractice(option.id)}
              >
                {option.text}
              </button>
            ))}
          </div>
          {practiceAnswer && (
            <div className="practice-feedback" role="status">
              <strong>
                {practiceAnswer.id === lesson.check.answerId
                  ? "That’s it."
                  : "Look at the tradeoff."}
              </strong>
              <p>{practiceAnswer.explanation}</p>
              {practiceAnswer.id !== lesson.check.answerId && (
                <p>Try another choice.</p>
              )}
            </div>
          )}
        </section>
      )}
      <section className="lesson-coach" aria-label="Ask about your result">
        <h2>Want to understand it better?</h2>
        <div className="suggested-questions">
          {[
            "Why is my choice stronger or weaker?",
            "When would another choice work better?",
          ].map((question) => (
            <button
              key={question}
              disabled={busy || !online}
              onClick={() => onCoach(question)}
            >
              {question}
            </button>
          ))}
        </div>
        <div className="coach-messages" aria-live="polite">
          {session.coachMessages?.map((message, index) => (
            <div
              className={
                message.role === "user" ? "user-message" : "analyst-message"
              }
              key={index}
            >
              <span className="message-label">
                {message.role === "user" ? "YOU" : "COACH"}
              </span>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <form
          className="chat-form"
          onSubmit={(event) => {
            event.preventDefault();
            if (!busy && online && session.coachDraft?.trim()) onCoach();
          }}
        >
          <label className="sr-only" htmlFor="coach-question">
            Ask about your result
          </label>
          <textarea
            id="coach-question"
            rows={2}
            maxLength={1000}
            placeholder="Why would that work?"
            value={session.coachDraft ?? ""}
            disabled={busy}
            onChange={(event) => onCoachDraft(event.target.value)}
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
          />
          <button
            type="submit"
            aria-label="Send follow-up"
            disabled={busy || !online || !session.coachDraft?.trim()}
          >
            <ArrowUp size={20} />
          </button>
        </form>
        {busy && <p role="status">One moment…</p>}
      </section>
      {session.decision.reasoning && (
        <details className="review-details">
          <summary>Your optional note</summary>
          <blockquote>{session.decision.reasoning}</blockquote>
          <button
            className="button outline"
            disabled={busy || !online}
            onClick={() =>
              onCoach(
                "Help me improve my optional note. Keep this separate from my choice score.",
              )
            }
          >
            Coach my note
          </button>
        </details>
      )}
      <details className="source-list">
        <summary>Sources</summary>
        {[...reveal.sources, ...(lesson?.history.sources ?? [])]
          .filter(
            (source, index, all) =>
              all.findIndex((item) => item.url === source.url) === index,
          )
          .map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
            >
              {source.title}
              <ExternalLink size={15} />
            </a>
          ))}
      </details>
      <section className="next-lesson">
        <span className="eyebrow">KEEP PRACTICING</span>
        {nextCase && (
          <>
            <h2>
              {nextCase.company}: {nextCase.title}
            </h2>
            <p>{nextCase.skill} · 5–10 min</p>
          </>
        )}
        <button
          className="button dark"
          disabled={busy || !online}
          onClick={onNext}
        >
          Next case
          <ArrowRight size={18} />
        </button>
        <div className="debrief-actions">
          <button className="text-button" disabled={busy} onClick={onExit}>
            Browse all cases
          </button>
          <button
            className="text-button"
            disabled={busy || !online}
            onClick={onReplay}
          >
            <RotateCcw size={16} /> Play this case again
          </button>
        </div>
      </section>
    </div>
  );
}
