import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import type { Confidence, Decision, PlayableCase, Session } from "@/lib/types";

export function DecisionView({
  gameCase,
  session,
  busy,
  preparingDebrief,
  online,
  onChange,
  onSubmit,
}: {
  gameCase: PlayableCase;
  session: Session;
  busy: boolean;
  preparingDebrief: boolean;
  online: boolean;
  onChange: (decision: Decision) => void;
  onSubmit: () => void;
}) {
  const decision = session.decision ||
    session.decisionDraft || {
      optionId: "",
      reasoning: "",
      confidence: "medium" as Confidence,
    };
  const locked = !!session.decision;
  return (
    <div className="decision-view">
      <span className="eyebrow">YOUR MOVE</span>
      <h2>{gameCase.question}</h2>
      <p className="decision-description">
        Tap your choice. Then see the tradeoff and the lesson. No typing needed.
      </p>
      <div className="options">
        {gameCase.options.map((option, index) => (
          <button
            className={`option ${decision.optionId === option.id ? "selected" : ""}`}
            key={option.id}
            aria-pressed={decision.optionId === option.id}
            disabled={locked || busy}
            onClick={() => onChange({ ...decision, optionId: option.id })}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span>
              <strong>{option.title}</strong>
              <span>{option.description}</span>
              <small>{option.tradeoff}</small>
            </span>
            <span className="radio-dot">
              {decision.optionId === option.id && <Check size={12} />}
            </span>
          </button>
        ))}
      </div>
      <details className="optional-note">
        <summary>Add a note (optional)</summary>
        <label className="field-label" htmlFor="reasoning">
          What are you thinking?
          <span>This does not change your choice score.</span>
        </label>
        <textarea
          className="reasoning-input"
          id="reasoning"
          placeholder="My thought is…"
          rows={2}
          maxLength={1500}
          value={decision.reasoning}
          disabled={locked || busy}
          onChange={(event) =>
            onChange({ ...decision, reasoning: event.target.value })
          }
        />
      </details>
      <button
        className="button dark submit-call"
        onClick={onSubmit}
        disabled={busy || !online || !decision.optionId}
      >
        {preparingDebrief ? (
          <>
            <LoaderCircle size={18} className="spin" />
            Opening your lesson…
          </>
        ) : locked ? (
          <>
            Retry the reveal
            <ArrowRight size={18} />
          </>
        ) : (
          <>
            Make my call
            <ArrowRight size={18} />
          </>
        )}
      </button>
      <p className="simulation-note">
        Your first choice is saved. You can practice again after the lesson.
      </p>
    </div>
  );
}
