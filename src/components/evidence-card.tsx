import type { Evidence } from "@/lib/types";
import { Gloss } from "./gloss";
export function EvidenceCard({
  evidence,
  index,
}: {
  evidence: Evidence;
  index?: number;
}) {
  return (
    <article className={`evidence-card evidence-${evidence.kind}`}>
      <div className="evidence-top">
        <span className="eyebrow">
          {evidence.kind === "fact"
            ? "FACT"
            : evidence.kind === "simulation"
              ? "SCENARIO"
              : evidence.kind === "interpretation"
                ? "ASSESSMENT"
                : "UNKNOWN"}
        </span>
        {index !== undefined && (
          <span className="evidence-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3>
        <Gloss text={evidence.label} />
      </h3>
      <p>
        <Gloss text={evidence.text} />
      </p>
    </article>
  );
}
