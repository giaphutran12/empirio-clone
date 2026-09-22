"use client";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import {
  glossary,
  segmentText,
  withCaseTerms,
  type GlossaryEntry,
} from "@/lib/glossary";

type GlossaryContextValue = {
  entries: GlossaryEntry[];
  open: (entry: GlossaryEntry) => void;
};
const GlossaryContext = createContext<GlossaryContextValue>({
  entries: glossary,
  open: () => {},
});

/** Hold the one open definition for the whole page and merge case words in. */
export function GlossaryProvider({
  caseTerms = [],
  children,
}: {
  caseTerms?: { term: string; meaning: string }[];
  children: ReactNode;
}) {
  const [active, setActive] = useState<GlossaryEntry | null>(null);
  const entries = useMemo(() => withCaseTerms(caseTerms), [caseTerms]);
  const value = useMemo(() => ({ entries, open: setActive }), [entries]);
  return (
    <GlossaryContext.Provider value={value}>
      {children}
      {active && <TermDialog entry={active} onClose={() => setActive(null)} />}
    </GlossaryContext.Provider>
  );
}

/** Render text with every glossary word as a tappable term. */
export function Gloss({ text }: { text: string }) {
  const { entries, open } = useContext(GlossaryContext);
  const segments = useMemo(() => segmentText(text, entries), [text, entries]);
  return (
    <>
      {segments.map((segment, index) =>
        segment.entry ? (
          <button
            key={index}
            type="button"
            className="gloss-term"
            data-meaning={segment.entry.meaning}
            aria-label={`${segment.text}: ${segment.entry.meaning}`}
            onClick={(event) => {
              event.stopPropagation();
              open(segment.entry!);
            }}
          >
            {segment.text}
          </button>
        ) : (
          segment.text
        ),
      )}
    </>
  );
}

function TermDialog({
  entry,
  onClose,
}: {
  entry: GlossaryEntry;
  onClose: () => void;
}) {
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
      className="term-dialog"
      aria-labelledby="term-title"
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
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="term-card" role="document">
        <span className="eyebrow">WHAT IT MEANS</span>
        <h2 id="term-title">{entry.term}</h2>
        <p>{entry.meaning}</p>
        {entry.example && (
          <div className="term-example">
            <span className="eyebrow">FOR EXAMPLE</span>
            <p>{entry.example}</p>
          </div>
        )}
        <button className="button dark" onClick={onClose}>
          Got it
        </button>
        <button
          className="term-close"
          aria-label="Close definition"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>
    </dialog>
  );
}
