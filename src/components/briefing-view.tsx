import { ArrowRight } from "lucide-react";
import type { PlayableCase } from "@/lib/types";
import { EvidenceCard } from "./evidence-card";
import { Gloss } from "./gloss";
export function BriefingView({
  gameCase,
  onTalkToAnalyst,
}: {
  gameCase: PlayableCase;
  onTalkToAnalyst: () => void;
}) {
  const freeIds = new Set(gameCase.knownLimits.map((item) => item.id));
  return (
    <div className="briefing-view compact-briefing">
      <div className="briefing-lead">
        <div>
          <span className="eyebrow">
            {gameCase.company} · {gameCase.year}
          </span>
          <h2>
            <Gloss text={gameCase.question} />
          </h2>
          <p>
            <Gloss text={gameCase.briefing} />
          </p>
        </div>
      </div>
      <div className="section-heading">
        <h2>The key facts</h2>
      </div>
      <div className="evidence-grid">
        {gameCase.evidence
          .filter((item) => !freeIds.has(item.id))
          .map((evidence, index) => (
            <EvidenceCard key={evidence.id} evidence={evidence} index={index} />
          ))}
      </div>
      {gameCase.learning.terms.length > 0 && (
        <section className="case-terms">
          <h3>Words to know</h3>
          <div>
            {gameCase.learning.terms.map((item) => (
              <details key={item.term}>
                <summary>{item.term}</summary>
                <p>{item.meaning}</p>
              </details>
            ))}
          </div>
        </section>
      )}
      {gameCase.knownLimits.length > 0 && (
        <details className="review-details known-gaps">
          <summary>Known gaps & free checks · no time cost</summary>
          {gameCase.knownLimits.map((item) => (
            <p key={item.id}>
              <strong>{item.label}.</strong> <Gloss text={item.text} />
            </p>
          ))}
        </details>
      )}
      <div className="briefing-actions">
        <p>
          <strong>You’ll practice:</strong>{" "}
          <Gloss text={gameCase.learning.skill} />
        </p>
        <button className="button outline" onClick={onTalkToAnalyst}>
          Ask a question or research
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
