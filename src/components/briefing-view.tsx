import { ArrowRight, Clock3 } from "lucide-react";
import type { PlayableCase } from "@/lib/types";
import { EvidenceCard } from "./evidence-card";

export function BriefingView({
  gameCase,
  onTalkToAnalyst,
}: {
  gameCase: PlayableCase;
  onTalkToAnalyst: () => void;
}) {
  return (
    <div className="briefing-view">
      <div className="briefing-lead">
        <div>
          <span className="eyebrow">YOUR SEAT AT THE TABLE</span>
          <h2>{gameCase.role}</h2>
          <p>{gameCase.briefing}</p>
        </div>
        <aside>
          <span className="eyebrow">THE MANDATE</span>
          <p>{gameCase.objective}</p>
          <div className="small-divider" />
          <span className="tiny-label">
            <Clock3 size={15} /> Six hours to make your call.
          </span>
        </aside>
      </div>
      <div className="section-heading">
        <h2>What you know.</h2>
      </div>
      <div className="evidence-grid">
        {gameCase.evidence.map((evidence, index) => (
          <EvidenceCard key={evidence.id} evidence={evidence} index={index} />
        ))}
      </div>
      <div className="decision-prompt">
        <span className="eyebrow">THE QUESTION ON THE TABLE</span>
        <h2>{gameCase.question}</h2>
        <button className="button dark" onClick={onTalkToAnalyst}>
          Talk to your analyst
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
