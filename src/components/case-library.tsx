import { ArrowUpRight, ArrowRight, Clock3, Check, Layers3 } from "lucide-react";
import type { CaseSummary, Session } from "@/lib/types";

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
  const completed = new Set(
    sessions
      .filter((session) => session.debrief)
      .map((session) => session.caseId),
  ).size;
  const featured = cases[0];
  return (
    <div className="library">
      <header className="site-header">
        <Brand />
        <span className="header-note">
          <span className="status-dot" /> YOUR DECISION ROOM
        </span>
      </header>
      <main>
        <div className="intro">
          <div className="eyebrow">
            A LITTLE PRESSURE. A BETTER PERSPECTIVE.
          </div>
          <h1>
            The room is
            <br />
            waiting on <em>you.</em>
          </h1>
          <p>
            Real business crossroads. Incomplete information.
            <br className="desktop-break" /> Step into the chair and make the
            call.
          </p>
        </div>
        <section className="featured" aria-label="Featured case">
          <div className="featured-copy">
            <div className="feature-meta">
              <span className="pill">YOUR FIRST CALL</span>
              <span>
                CASE {featured.number} / {featured.year}
              </span>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.subtitle}</p>
            <div className="feature-bottom">
              <button className="button lime" onClick={() => onOpen(featured)}>
                {sessions.some(
                  (session) =>
                    session.caseId === featured.id && !session.debrief,
                )
                  ? "Continue the case"
                  : "Enter the boardroom"}
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
              <h2>History has a few questions.</h2>
            </div>
            <span className="progress-label">
              {completed} / {cases.length} explored
            </span>
          </div>
          <div className="case-grid">
            {cases.map((item) => {
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
                    <span className="eyebrow">{item.category}</span>
                    <ArrowUpRight size={21} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
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
          <span>Six simulated hours. No real-time countdown.</span>
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
