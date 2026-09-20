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
      <span className="eyebrow">THE MOMENT OF JUDGMENT</span>
      <h2>{gameCase.question}</h2>
      <p className="decision-description">
        There’s a case for more than one answer. Choose your move and tell us
        what you’re betting on.
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
      <label className="field-label" htmlFor="reasoning">
        What’s your reasoning?
        <span>
          A sentence or two. What matters most, and what risk are you accepting?
        </span>
      </label>
      <textarea
        className="reasoning-input"
        id="reasoning"
        placeholder="I would choose this because…"
        rows={3}
        maxLength={1500}
        value={decision.reasoning}
        disabled={locked || busy}
        onChange={(event) =>
          onChange({ ...decision, reasoning: event.target.value })
        }
      />
      <fieldset className="confidence">
        <legend>How confident are you?</legend>
        {(["low", "medium", "high"] as const).map((level) => (
          <button
            type="button"
            key={level}
            disabled={locked || busy}
            aria-pressed={decision.confidence === level}
            className={decision.confidence === level ? "selected" : ""}
            onClick={() => onChange({ ...decision, confidence: level })}
          >
            {level}
          </button>
        ))}
      </fieldset>
      <button
        className="button dark submit-call"
        onClick={onSubmit}
        disabled={
          busy || !online || !decision.optionId || !decision.reasoning.trim()
        }
      >
        {preparingDebrief ? (
          <>
            <LoaderCircle size={18} className="spin" />
            Preparing your debrief…
          </>
        ) : locked ? (
          <>
            Retry the reveal
            <ArrowRight size={18} />
          </>
        ) : (
          <>
            Commit & reveal the history
            <ArrowRight size={18} />
          </>
        )}
      </button>
      <p className="simulation-note">
        Your call is final for this attempt. You can replay afterward, with
        hindsight.
      </p>
    </div>
  );
}
