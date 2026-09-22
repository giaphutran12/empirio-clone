import test from "node:test";
import assert from "node:assert/strict";
import { glossary, segmentText, withCaseTerms } from "../src/lib/glossary";

test("every glossary entry has a short meaning and a worked example", () => {
  const seen = new Set<string>();
  for (const entry of glossary) {
    assert.ok(entry.meaning.split(" ").length <= 24, entry.term);
    assert.ok(entry.example.length > 0, entry.term);
    for (const alias of [entry.term, ...(entry.aliases ?? [])]) {
      const key = alias.toLowerCase();
      assert.ok(!seen.has(key), `duplicate alias ${alias}`);
      seen.add(key);
    }
  }
});

test("terms are found by alias, plural and hyphen variants, longest first", () => {
  const segments = segmentText(
    "Fixed shop costs are $500. Goods cost 60%. You break even at 100 cups; the shipping subsidy hurts margins.",
  );
  const found = segments.filter((item) => item.entry).map((item) => item.text);
  assert.deepEqual(found, [
    "Fixed shop costs",
    "Goods cost",
    "break even",
    "shipping subsidy",
    "margins",
  ]);
  assert.equal(
    segments.find((item) => item.text === "shipping subsidy")?.entry?.term,
    "Subsidy",
  );
  assert.equal(
    segments.map((item) => item.text).join(""),
    "Fixed shop costs are $500. Goods cost 60%. You break even at 100 cups; the shipping subsidy hurts margins.",
  );
});

test("words inside other words are left alone", () => {
  const segments = segmentText(
    "The nonprofitable leaseholder churned nothing.",
  );
  assert.deepEqual(
    segments.filter((item) => item.entry).map((item) => item.text),
    ["churned"],
  );
});

test("case words override the shared meaning but keep the shared example", () => {
  const entries = withCaseTerms([
    { term: "Capacity", meaning: "How many cups the team can make." },
    { term: "Tool-day", meaning: "One tool booked for one day." },
  ]);
  const capacity = entries.find((item) => item.term === "Capacity")!;
  assert.equal(capacity.meaning, "How many cups the team can make.");
  assert.ok(capacity.example.length > 0);
  const segments = segmentText("Each tool-day at full capacity.", entries);
  assert.deepEqual(
    segments.filter((item) => item.entry).map((item) => item.entry!.term),
    ["Tool-day", "Capacity"],
  );
});
