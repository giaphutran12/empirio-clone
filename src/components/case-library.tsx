import { ArrowUpRight, ArrowRight, Clock3, Check, Layers3 } from "lucide-react";
import type { CaseSummary, Session } from "@/lib/types";
import { useState } from "react";

export function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark">↗</span> THE CALL
      <span className="brand-period">.</span>
    </span>
  );
}

export function CaseLibrary({
  cases,
  sessions,
  onOpen,
}: {
  cases: CaseSummary[];
  sessions: Session[];
  onOpen: (item: CaseSummary) => void;
}) {
  const [filter, setFilter] = useState("new");
  const [search, setSearch] = useState("");
  const completedIds = new Set(
    sessions
      .filter((session) => session.debrief)
      .map((session) => session.caseId),
  );
  const completed = completedIds.size;
  const activeIds = new Set(
    sessions.filter((item) => !item.debrief).map((item) => item.caseId),
  );
  const featured =
    cases.find(
      (item) => item.format === "scenario" && !completedIds.has(item.id),
    ) ??
    cases.find(
      (item) => activeIds.has(item.id) && !completedIds.has(item.id),
    ) ??
    cases.find((item) => !completedIds.has(item.id)) ??
    cases[0];
  const visibleCases = cases.filter((item) => {
    const matchesStatus =
      filter === "all" ||
      (filter === "new" && !completedIds.has(item.id)) ||
      (filter === "started" && activeIds.has(item.id)) ||
      (filter === "done" && completedIds.has(item.id));
    return (
      matchesStatus &&
      `${item.company} ${item.title} ${item.subtitle} ${item.category} ${item.skill} ${item.year}`
        .toLowerCase()
        .includes(search.toLowerCase().trim())
    );
  });
  return (
    <div className="library">
      <header className="site-header">
        <Brand />
        <span className="header-note">
          <span className="status-dot" /> YOUR DECISION ROOM
        </span>
      </header>
      <main>
        <div className="intro returning-intro">
          <h1>One choice. One useful lesson.</h1>
          <p>Real cases. Fresh challenges. No writing needed.</p>
        </div>
        <section className="featured" aria-label="Featured case">
          <div className="featured-copy">
            <div className="feature-meta">
              <span className="pill">YOUR NEXT CALL</span>
              <span>
                CASE {featured.number} / {featured.year}
              </span>
            </div>
            <span className="eyebrow">{featured.company}</span>
            <h2>{featured.title}</h2>
            <p>{featured.skill}</p>
            <div className="feature-bottom">
              <button className="button lime" onClick={() => onOpen(featured)}>
                {sessions.some(
                  (session) =>
                    session.caseId === featured.id && !session.debrief,
                )
                  ? "Continue the case"
                  : "Start this case"}
                <ArrowUpRight size={19} />
              </button>
              <span className="duration">
                <Clock3 size={15} /> 5–10 min
              </span>
            </div>
          </div>
          <div className="feature-art" aria-hidden="true">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-disc">
              <span>
                THE
                <br />
                NEXT
                <br />
                <i>MOVE.</i>
              </span>
            </div>
            <span className="art-coordinate">35° N / THE INFLECTION POINT</span>
            <span className="art-cross">+</span>
          </div>
        </section>
        <section className="case-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE CASE FILES</span>
              <h2>Pick your next case.</h2>
            </div>
            <span className="progress-label">
              {completed} / {cases.length} explored
            </span>
          </div>
          <div className="library-tools">
            <div
              className="case-filters"
              role="group"
              aria-label="Filter cases"
            >
              {[
                ["new", "New to you"],
                ["started", "Started"],
                ["done", "Done"],
                ["all", "All"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
            <label className="case-search">
              <span>Find a case</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Try pricing, growth, or a year"
              />
            </label>
          </div>
          <p className="case-count" role="status">
            {visibleCases.length} cases
          </p>
          <div className="case-grid">
            {visibleCases.map((item) => {
              const done = sessions.some(
                (session) => session.caseId === item.id && session.debrief,
              );
              const active = sessions.some(
                (session) => session.caseId === item.id && !session.debrief,
              );
              return (
                <button
                  className={`case-card case-${item.number}`}
                  key={item.id}
                  onClick={() => onOpen(item)}
                >
                  <div className="case-card-top">
                    <span className="case-number">{item.number}</span>
                    <span className="eyebrow">{item.company}</span>
                    <ArrowUpRight size={21} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.skill}</p>
                  <div className="case-card-bottom">
                    <span>
                      {done ? (
                        <>
                          <Check size={14} /> Explored · replay available
                        </>
                      ) : active ? (
                        "In progress"
                      ) : (
                        <>
                          <Clock3 size={14} /> 5–10 minutes
                        </>
                      )}
                    </span>
                    <span>{item.year}</span>
                  </div>
                </button>
              );
            })}
          </div>
          {visibleCases.length === 0 && (
            <p className="empty-cases">
              No cases here. Try another filter or search.
            </p>
          )}
        </section>
        <section className="how-it-works">
          <div className="how-label">
            <Layers3 size={20} />
            <span>
              Good judgment
              <br />
              takes practice.
            </span>
          </div>
          <div>
            <span className="step-number">01</span>
            <h3>Read the room</h3>
            <p>Get the facts, the stakes, and your seat at the table.</p>
          </div>
          <div>
            <span className="step-number">02</span>
            <h3>Ask better questions</h3>
            <p>Your analyst has evidence. More research costs time.</p>
          </div>
          <div>
            <span className="step-number">03</span>
            <h3>Make your call</h3>
            <p>Commit, uncover the history, and examine your thinking.</p>
          </div>
        </section>
        <div className="library-note">
          <span>The clock moves when you commission research.</span>
          <ArrowRight size={16} />
          <span>Take your time thinking.</span>
        </div>
      </main>
      <footer>
        <Brand />
        <p>Made for the moments before you know the ending.</p>
        <span>Progress stays on this device.</span>
      </footer>
    </div>
  );
}
