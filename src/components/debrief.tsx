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
}: {
  session: Session;
  gameCase: PlayableCase;
  onReplay: () => void;
  onExit: () => void;
}) {
  if (!session.debrief || !session.decision) return null;
  const { reveal, feedback, personalized } = session.debrief;
  const choice = gameCase.options.find(
    (option) => option.id === session.decision?.optionId,
  );
  return (
    <div className="debrief-view">
      <div className="reveal-heading">
        <span className="eyebrow">THE HISTORY BEHIND YOUR CALL</span>
        <h1>{reveal.company}</h1>
        <p>{reveal.title}</p>
      </div>
      <section className="your-call">
        <span className="eyebrow">YOU CHOSE</span>
        <h2>{choice?.title}</h2>
        <blockquote>“{session.decision.reasoning}”</blockquote>
        <span className="tiny-label">
          {session.decision.confidence} confidence ·{" "}
          {session.informedReplay ? "Informed replay" : "First attempt"}
        </span>
      </section>
      <section className="history-section">
        <span className="eyebrow">WHAT ACTUALLY HAPPENED</span>
        <p>{reveal.history}</p>
      </section>
      <section className="consequence">
        <span className="eyebrow">YOUR OPTION · HYPOTHETICAL CONSEQUENCES</span>
        <p>{reveal.consequences[session.decision.optionId]}</p>
      </section>
      <div className="section-heading">
        <h2>Your decision, examined.</h2>
        <span className="tiny-label">
          {personalized
            ? "AI reflection · grounded in your attempt"
            : "Written case guidance · AI reflection unavailable"}
        </span>
      </div>
      <div className="feedback-grid">
        <article>
          <CheckCircle2 size={22} />
          <h3>A strong move</h3>
          <p>{feedback.strength}</p>
        </article>
        <article>
          <ScanEye size={22} />
          <h3>Look again</h3>
          <p>{feedback.missed}</p>
        </article>
        <article>
          <Lightbulb size={22} />
          <h3>Take it with you</h3>
          <p>{feedback.takeaway}</p>
        </article>
      </div>
      <div className="lesson">
        <span className="eyebrow">THE PRINCIPLE</span>
        <p>{reveal.lesson}</p>
      </div>
      <details className="source-list">
        <summary>Sources & how this case was reconstructed</summary>
        <p>
          The evidence comes from the sources below. The deadline, research
          costs, board prompt, and unchosen outcomes are teaching simulations.
          Missing records do not establish what executives did or did not know.
        </p>
        {reveal.sources.map((source) => (
          <a key={source.id} href={source.url} target="_blank" rel="noreferrer">
            {source.title}
            <ExternalLink size={15} />
          </a>
        ))}
        <p>
          This exercise examines reasoning, not a scientifically validated
          measure of business ability.
        </p>
      </details>
      <div className="debrief-actions">
        <button className="button dark" onClick={onExit}>
          Explore another case
          <ArrowRight size={18} />
        </button>
        <button className="button outline" onClick={onReplay}>
          <RotateCcw size={16} />
          Replay with hindsight
        </button>
      </div>
    </div>
  );
}
