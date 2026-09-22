"use client";
import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Check,
  Clock3,
  LoaderCircle,
  Search,
} from "lucide-react";
import {
  buildFeedSteps,
  clampStep,
  findingFor,
  stepLabel,
  type FeedStep,
} from "@/lib/feed";
import type { Confidence, Decision, PlayableCase, Session } from "@/lib/types";
import { AnalystChat } from "./analyst-view";
import { Gloss } from "./gloss";

type CaseFeedProps = {
  gameCase: PlayableCase;
  session: Session;
  step: number;
  onStep: (index: number) => void;
  busy: boolean;
  thinking: boolean;
  preparingDebrief: boolean;
  online: boolean;
  onResearch: (id: string) => void;
  onAsk: (question?: string) => void;
  onDraftChange: (draft: string) => void;
  onDecisionChange: (decision: Decision) => void;
  onSubmit: () => void;
};

const SWIPE_DISTANCE = 70;

/** One screen at a time. Next, swipe, or arrow keys move through the case. */
export function CaseFeed({
  gameCase,
  session,
  step,
  onStep,
  busy,
  thinking,
  preparingDebrief,
  online,
  onResearch,
  onAsk,
  onDraftChange,
  onDecisionChange,
  onSubmit,
}: CaseFeedProps) {
  const steps = buildFeedSteps(gameCase);
  const index = clampStep(step, steps);
  const current = steps[index];
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const atStart = index === 0;
  const atEnd = index === steps.length - 1;

  function go(next: number) {
    const target = clampStep(next, steps);
    if (target !== index) onStep(target);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [index]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "TEXTAREA" ||
          target.tagName === "INPUT" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      )
        return;
      if (document.querySelector("dialog[open]")) return;
      if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key)) {
        event.preventDefault();
        go(index + 1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        go(index - 1);
      } else if (event.key === " " && !(target instanceof HTMLButtonElement)) {
        event.preventDefault();
        go(index + 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function onTouchStart(event: React.TouchEvent) {
    const target = event.target as HTMLElement;
    if (target.closest("textarea, input, select")) {
      touchStart.current = null;
      return;
    }
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }
  function onTouchEnd(event: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dy) < SWIPE_DISTANCE || Math.abs(dx) > Math.abs(dy)) return;
    const pageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;
    if (dy < 0 && pageBottom) go(index + 1);
    if (dy > 0 && window.scrollY <= 0) go(index - 1);
  }

  const nextStep = steps[index + 1];
  return (
    <div
      className="case-feed"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="feed-progress"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={index + 1}
        aria-label={`Screen ${index + 1} of ${steps.length}`}
      >
        {steps.map((item, position) => (
          <span
            key={position}
            className={
              position < index ? "done" : position === index ? "current" : ""
            }
            data-kind={item.kind}
          />
        ))}
      </div>
      <article className="feed-step" key={index} data-kind={current.kind}>
        <span className="eyebrow feed-label">
          {stepLabel(current)} · {index + 1}/{steps.length}
        </span>
        <FeedScreen
          step={current}
          gameCase={gameCase}
          session={session}
          busy={busy}
          thinking={thinking}
          preparingDebrief={preparingDebrief}
          online={online}
          onResearch={onResearch}
          onAsk={onAsk}
          onDraftChange={onDraftChange}
          onDecisionChange={(decision) => {
            onDecisionChange(decision);
          }}
          onPick={(decision) => {
            onDecisionChange(decision);
            go(index + 1);
          }}
          onSubmit={onSubmit}
          onJump={(kind) => {
            const target = steps.findIndex((item) => item.kind === kind);
            if (target >= 0) go(target);
          }}
        />
      </article>
      <nav className="feed-nav" aria-label="Move through the case">
        <button
          className="feed-back"
          onClick={() => go(index - 1)}
          disabled={atStart}
          aria-label="Previous screen"
        >
          <ArrowUp size={18} />
          <span>Back</span>
        </button>
        <span className="feed-count">
          {index + 1} / {steps.length}
        </span>
        {atEnd ? (
          <span className="feed-end">Make your call above</span>
        ) : (
          <button
            className="button dark feed-next"
            onClick={() => go(index + 1)}
          >
            {nextStep?.kind === "event"
              ? "New development"
              : nextStep?.kind === "decide"
                ? "Make your call"
                : "Next"}
            <ArrowDown size={17} />
          </button>
        )}
      </nav>
    </div>
  );
}

type ScreenProps = {
  step: FeedStep;
  gameCase: PlayableCase;
  session: Session;
  busy: boolean;
  thinking: boolean;
  preparingDebrief: boolean;
  online: boolean;
  onResearch: (id: string) => void;
  onAsk: (question?: string) => void;
  onDraftChange: (draft: string) => void;
  onDecisionChange: (decision: Decision) => void;
  onPick: (decision: Decision) => void;
  onSubmit: () => void;
  onJump: (kind: FeedStep["kind"]) => void;
};

function FeedScreen(props: ScreenProps) {
  const { step, gameCase, session } = props;
  const decision: Decision = session.decision ||
    session.decisionDraft || {
      optionId: "",
      reasoning: "",
      confidence: "medium" as Confidence,
    };
  const locked = !!session.decision;

  switch (step.kind) {
    case "hook":
      return (
        <div className="feed-hook">
          <span className="eyebrow">
            CASE {gameCase.number} · {gameCase.category} ·{" "}
            {gameCase.format === "scenario"
              ? "Business puzzle"
              : `${gameCase.company} · ${gameCase.year}`}
          </span>
          <h1>{gameCase.title}</h1>
          <p className="feed-role">
            <Gloss text={gameCase.role} /> <Gloss text={gameCase.objective} />
          </p>
          <div className="feed-card">
            <h2>
              <Gloss text={gameCase.question} />
            </h2>
            <p>
              <Gloss text={gameCase.briefing} />
            </p>
          </div>
        </div>
      );
    case "fact":
      return (
        <div className="feed-fact">
          <span className="feed-number">
            {String(step.index + 1).padStart(2, "0")}
          </span>
          <h2>
            <Gloss text={step.evidence.label} />
          </h2>
          <p>
            <Gloss text={step.evidence.text} />
          </p>
          <p className="feed-hint">
            {step.evidence.kind === "unknown"
              ? "Nobody has this number yet."
              : step.evidence.kind === "interpretation"
                ? "This is someone’s read, not a measured fact."
                : "Keep this number in your head."}
          </p>
        </div>
      );
    case "gaps":
      return (
        <div className="feed-gaps">
          <h2>What nobody knows yet</h2>
          <p className="feed-hint">
            These checks are free. Nobody has the answer, so research cannot buy
            it.
          </p>
          {gameCase.knownLimits.map((item) => (
            <div className="feed-card" key={item.id}>
              <strong>{item.label}</strong>
              <p>
                <Gloss text={item.text} />
              </p>
            </div>
          ))}
        </div>
      );
    case "prepare":
      return (
        <div className="feed-prepare">
          <h2>Before you decide</h2>
          <div className="feed-card">
            <p>
              <strong>You’ll practice:</strong>{" "}
              <Gloss text={gameCase.learning.skill} />
            </p>
          </div>
          <div className="feed-card">
            <p>
              <Clock3 size={16} /> You have{" "}
              <strong>{gameCase.remainingHours} hours</strong> of research time.
              Questions to your analyst are free. Research spends hours.
            </p>
          </div>
          <p className="feed-hint">
            Next: ask a question, then pick what to check.
          </p>
        </div>
      );
    case "analyst":
      return (
        <div className="feed-analyst">
          <AnalystChat
            gameCase={gameCase}
            session={session}
            busy={props.busy}
            thinking={props.thinking}
            online={props.online}
            onResearch={props.onResearch}
            onAsk={props.onAsk}
            onDraftChange={props.onDraftChange}
            hideFindings
          />
        </div>
      );
    case "research": {
      const { task } = step;
      const done = session.researchIds.includes(task.id);
      const finding = done
        ? findingFor(task.id, session.researchIds, session.messages)
        : undefined;
      const tooLate = !done && task.hours > gameCase.remainingHours;
      const parts = finding?.text.split(/\n\n(?=Why it matters:)/) ?? [];
      return (
        <div className={`feed-research ${done ? "complete" : ""}`}>
          <span className="feed-cost">
            {done ? (
              <>
                <Check size={15} /> Checked
              </>
            ) : (
              <>
                <Clock3 size={15} /> Costs {task.hours}{" "}
                {task.hours === 1 ? "hour" : "hours"}
              </>
            )}
          </span>
          <h2>
            <Gloss text={task.title} />
          </h2>
          <p>
            <Gloss text={task.description} />
          </p>
          {task.helpsWith && !done && (
            <p className="feed-hint">
              <strong>Why check:</strong> <Gloss text={task.helpsWith} />
            </p>
          )}
          {done && finding && (
            <div className="feed-card feed-finding">
              {parts.map((part) => {
                const [label, ...rest] = part.split(": ");
                return (
                  <p key={label}>
                    <strong>{label}:</strong> <Gloss text={rest.join(": ")} />
                  </p>
                );
              })}
            </div>
          )}
          {!done && (
            <button
              className="button dark feed-action"
              disabled={props.busy || locked || tooLate || !props.online}
              onClick={() => props.onResearch(task.id)}
            >
              <Search size={16} />
              {tooLate
                ? "Not enough time left"
                : locked
                  ? "Decision already made"
                  : `Spend ${task.hours}h to check`}
            </button>
          )}
        </div>
      );
    }
    case "event":
      return gameCase.event ? (
        <div className="feed-event">
          <span className="eyebrow">SOMETHING CHANGED</span>
          <h2>{gameCase.event.title}</h2>
          <p>
            <Gloss text={gameCase.event.text} />
          </p>
          <p className="feed-hint">
            Your options may have changed too. Read them again before you
            decide.
          </p>
        </div>
      ) : null;
    case "option": {
      const { option } = step;
      const picked = decision.optionId === option.id;
      return (
        <div className={`feed-option ${picked ? "picked" : ""}`}>
          <span className="option-letter">
            {String.fromCharCode(65 + step.index)}
          </span>
          <h2>
            <Gloss text={option.title} />
          </h2>
          <p>
            <Gloss text={option.description} />
          </p>
          <p className="feed-tradeoff">
            <strong>The catch:</strong> <Gloss text={option.tradeoff} />
          </p>
          <button
            className={`button ${picked ? "lime" : "dark"} feed-action`}
            disabled={locked || props.busy}
            aria-pressed={picked}
            onClick={() => props.onPick({ ...decision, optionId: option.id })}
          >
            {picked ? (
              <>
                <Check size={16} /> Your pick
              </>
            ) : (
              <>
                Pick this one
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      );
    }
    case "decide":
      return (
        <div className="feed-decide">
          <h2>
            <Gloss text={gameCase.question} />
          </h2>
          <div
            className="feed-choices"
            role="radiogroup"
            aria-label="Your choice"
          >
            {gameCase.options.map((option, position) => {
              const picked = decision.optionId === option.id;
              return (
                <button
                  key={option.id}
                  role="radio"
                  aria-checked={picked}
                  className={`feed-choice ${picked ? "selected" : ""}`}
                  disabled={locked || props.busy}
                  onClick={() =>
                    props.onDecisionChange({ ...decision, optionId: option.id })
                  }
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + position)}
                  </span>
                  <span>{option.title}</span>
                  <span className="radio-dot">
                    {picked && <Check size={12} />}
                  </span>
                </button>
              );
            })}
          </div>
          <details className="optional-note">
            <summary>Add a note (optional)</summary>
            <label className="field-label" htmlFor="feed-reasoning">
              What are you thinking?
              <span>This does not change your score.</span>
            </label>
            <textarea
              className="reasoning-input"
              id="feed-reasoning"
              placeholder="My thought is…"
              rows={2}
              maxLength={1500}
              value={decision.reasoning}
              disabled={locked || props.busy}
              onChange={(event) =>
                props.onDecisionChange({
                  ...decision,
                  reasoning: event.target.value,
                })
              }
            />
          </details>
          <button
            className="button dark submit-call"
            onClick={props.onSubmit}
            disabled={props.busy || !props.online || !decision.optionId}
          >
            {props.preparingDebrief ? (
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
          {!decision.optionId && (
            <p className="feed-hint">
              Pick an option above, or{" "}
              <button
                className="text-link"
                onClick={() => props.onJump("option")}
              >
                read the options again
              </button>
              .
            </p>
          )}
          <p className="simulation-note">
            Your first choice is saved. You can practice again after the lesson.
          </p>
        </div>
      );
  }
}
