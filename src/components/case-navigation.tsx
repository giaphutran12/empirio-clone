import {
  ArrowLeft,
  ArrowUp,
  Clock3,
  FileText,
  MessageSquare,
} from "lucide-react";
import type { PlayableCase } from "@/lib/types";
import { Brand } from "./case-library";

export type CaseTab = "briefing" | "analyst" | "decision";

export function GameHeader({
  gameCase,
  busy,
  onExit,
}: {
  gameCase: PlayableCase;
  busy: boolean;
  onExit: () => void;
}) {
  return (
    <header className="game-header">
      <button
        className="back-button"
        onClick={onExit}
        disabled={busy}
        aria-label="Back to case library"
      >
        <ArrowLeft size={19} />
        <span>Case files</span>
      </button>
      <Brand />
      <div
        className={`time-badge ${gameCase.remainingHours <= 2 ? "time-low" : ""}`}
      >
        <Clock3 size={16} />
        <strong>{gameCase.remainingHours}h</strong>
        <span> left</span>
      </div>
    </header>
  );
}

export function CaseNavigation({
  gameCase,
  informedReplay,
  tab,
  onTabChange,
}: {
  gameCase: PlayableCase;
  informedReplay: boolean;
  tab: CaseTab;
  onTabChange: (tab: CaseTab) => void;
}) {
  return (
    <>
      {" "}
      <div className="case-title-bar">
        <div>
          <span className="eyebrow">
            CASE {gameCase.number} · {gameCase.category}
            {informedReplay ? " · INFORMED REPLAY" : ""}
          </span>
          <h1>{gameCase.title}</h1>
        </div>
        <div
          className="time-track"
          aria-label={`${gameCase.remainingHours} of 6 hours remaining`}
        >
          {Array.from({ length: 6 }, (_, index) => (
            <span
              key={index}
              className={index < gameCase.remainingHours ? "available" : ""}
            />
          ))}
        </div>
      </div>
      <nav className="game-tabs" aria-label="Case views">
        {(
          [
            { id: "briefing", label: "The briefing", icon: FileText },
            { id: "analyst", label: "Your analyst", icon: MessageSquare },
            { id: "decision", label: "Your call", icon: ArrowUp },
          ] as const
        ).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={tab === id ? "active" : ""}
            aria-current={tab === id ? "page" : undefined}
          >
            <Icon size={17} />
            {label}
          </button>
        ))}
      </nav>{" "}
    </>
  );
}

export function DecisionDock({
  remainingHours,
  onDecide,
}: {
  remainingHours: number;
  onDecide: () => void;
}) {
  return (
    <div className="decision-dock">
      <span>
        {remainingHours === 0
          ? "Time to commit."
          : "You don’t need certainty to act."}
      </span>
      <button className="button dark" onClick={onDecide}>
        Make the call
        <ArrowUp size={17} />
      </button>
    </div>
  );
}
