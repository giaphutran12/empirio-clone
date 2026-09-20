import { useEffect, useRef } from "react";
import { ArrowRight, Clock3 } from "lucide-react";
import type { PlayableCase } from "@/lib/types";

type ResearchConfirmationProps = {
  task: PlayableCase["research"][number];
  remainingHours: number;
  busy: boolean;
  reviewing: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ResearchConfirmation({
  task,
  remainingHours,
  busy,
  reviewing,
  onConfirm,
  onCancel,
}: ResearchConfirmationProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    dialog?.showModal();
    return () => {
      dialog?.close();
      if (trigger instanceof HTMLElement && trigger.isConnected)
        trigger.focus();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="research-confirm"
      aria-labelledby="research-title"
      aria-describedby="research-description"
      style={{
        margin: 0,
        border: 0,
        width: "100%",
        height: "100%",
        maxWidth: "none",
        maxHeight: "none",
        color: "inherit",
      }}
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onCancel();
      }}
    >
      <div className="confirm-card">
        <span className="eyebrow">COMMISSION RESEARCH</span>
        <h2 id="research-title">{task.title}</h2>
        <p id="research-description">{task.description}</p>
        <div className="cost-preview">
          <Clock3 size={19} />
          <strong>{task.hours} hours</strong>
          <span>{remainingHours - task.hours}h will remain</span>
        </div>
        <p className="tiny-label">
          Results arrive immediately. Your remaining time will decrease.
        </p>
        <button className="button dark" disabled={busy} onClick={onConfirm}>
          {reviewing ? "Reviewing…" : "Commission investigation"}
          <ArrowRight size={17} />
        </button>
        <button className="text-button" disabled={busy} onClick={onCancel}>
          Keep my time
        </button>
      </div>
    </dialog>
  );
}
