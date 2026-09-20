import {
  ArrowRight,
  ExternalLink,
  RotateCcw,
  CheckCircle2,
  ScanEye,
  Lightbulb,
} from "lucide-react";
import type { Session, PlayableCase } from "@/lib/types";
export function DebriefView({
  session,
  gameCase,
  onReplay,
  onExit,
  onRetry,
  busy,
}: {
  session: Session;
  gameCase: PlayableCase;
  onReplay: () => void;
  onExit: () => void;
  onRetry: () => void;
  busy: boolean;
}) {
  if (!session.debrief || !session.decision) return null;
  const { reveal, feedback, personalized, score } = session.debrief;
  const choice = gameCase.options.find(
    (option) => option.id === session.decision?.optionId,
  );
  return (
    <div className="debrief-view">
      <div className="reveal-heading">
        <span className="eyebrow">THE REAL STORY</span>
        <h1>{reveal.company}</h1>
        <p>{reveal.title}</p>
      </div>
      <section className="your-call">
        <span className="eyebrow">YOU CHOSE</span>
        <h2>{choice?.title}</h2>
        <details className="review-details">
          <summary>Your notes</summary>
          <blockquote>“{session.decision.reasoning}”</blockquote>
        </details>
        <span className="tiny-label">
          {session.decision.confidence} confidence ·{" "}
          {session.informedReplay ? "Informed replay" : "First attempt"}
        </span>
      </section>
      <section className="decision-score" aria-label="Your score">
        {score ? (
          <>
            <span className="eyebrow">YOUR SCORE</span>
            <div className="score-head">
              <strong>
                {score.total}
                <small>/100</small>
              </strong>
              <h2>{score.verdict}</h2>
            </div>
            <p>Based on your choice and your reason.</p>
            <details className="review-details">
              <summary>How you scored</summary>
              {score.parts.map((part) => (
                <div className="score-part" key={part.label}>
                  <div>
                    <strong>{part.label}</strong>
                    <span>{part.points}/25</span>
                  </div>
                  <p>{part.reason}</p>
                </div>
              ))}
            </details>
            <details className="review-details">
              <summary>A strong answer</summary>
              <strong>
                {
                  gameCase.options.find(
                    (option) => option.id === score.optionId,
                  )?.title
                }
              </strong>
              <p>{score.example}</p>
            </details>
          </>
        ) : (
          <>
            <h2>Your score isn’t ready.</h2>
            <button
              className="button outline"
              disabled={busy}
              onClick={onRetry}
            >
              {busy ? "Scoring…" : "Try again"}
            </button>
          </>
        )}
      </section>
      <section className="history-section">
        <span className="eyebrow">WHAT HAPPENED</span>
        <p>{reveal.history}</p>
      </section>
      <div className="section-heading">
        <h2>Your call.</h2>
        {!personalized && (
          <span className="tiny-label">Live feedback unavailable</span>
        )}
      </div>
      <div className="feedback-grid">
        <article>
          <CheckCircle2 size={22} />
          <h3>What worked</h3>
          <p>{feedback.strength}</p>
        </article>
        <article>
          <ScanEye size={22} />
          <h3>What you missed</h3>
          <p>{feedback.missed}</p>
        </article>
        <article>
          <Lightbulb size={22} />
          <h3>Next time</h3>
          <p>{feedback.takeaway}</p>
        </article>
      </div>
      <details className="review-details">
        <summary>More about this choice</summary>
        <p>{reveal.consequences[session.decision.optionId]}</p>
        <p>{reveal.lesson}</p>
      </details>
      <details className="source-list">
        <summary>Sources</summary>
        {reveal.sources.map((source) => (
          <a key={source.id} href={source.url} target="_blank" rel="noreferrer">
            {source.title}
            <ExternalLink size={15} />
          </a>
        ))}
      </details>
      <div className="debrief-actions">
        <button className="button dark" onClick={onExit}>
          Next case
          <ArrowRight size={18} />
        </button>
        <button className="button outline" onClick={onReplay}>
          <RotateCcw size={16} />
          Play again
        </button>
      </div>
    </div>
  );
}
