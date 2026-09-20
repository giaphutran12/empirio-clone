import type { Evidence } from "@/lib/types";
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
            ? "DOCUMENTED FACT"
            : evidence.kind.toUpperCase()}
        </span>
        {index !== undefined && (
          <span className="evidence-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3>{evidence.label}</h3>
      <p>{evidence.text}</p>
    </article>
  );
}
