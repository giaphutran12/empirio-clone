import test from "node:test";
import assert from "node:assert/strict";
import { cases, getCase } from "../src/lib/catalog";
import {
  startingCases,
  nextStartingCase,
  hasCurrentReview,
} from "../src/lib/starting-path";
import { toPlayableCase } from "../src/lib/engine";
import type { CaseSummary, Session } from "../src/lib/types";

const summaries: CaseSummary[] = cases.map((item) => ({
  ...item,
  company: item.reveal.company,
  skill: item.teaching!.skill,
}));
const reviewed = (id: string, version: number) =>
  ({ caseId: id, version, debrief: {} }) as Session;

test("starting path crosses collections in order and finishes after three current reviews", () => {
  assert.deepEqual(
    startingCases(summaries).map((item) => item.id),
    ["case-032", "case-044", "case-009"],
  );
  const sessions = [reviewed("case-032", 3)];
  assert.equal(
    nextStartingCase(summaries, sessions, "case-032")?.id,
    "case-044",
  );
  sessions.push(reviewed("case-044", 3));
  assert.equal(
    nextStartingCase(summaries, sessions, "case-044")?.id,
    "case-009",
  );
  sessions.push(reviewed("case-009", 3));
  assert.equal(nextStartingCase(summaries, sessions, "case-009"), undefined);
});

test("old reviews stay valid but do not mark a revised case explored", () => {
  const summary = startingCases(summaries)[0];
  assert.equal(hasCurrentReview(summary, [reviewed(summary.id, 2)]), false);
  assert.equal(hasCurrentReview(summary, [reviewed(summary.id, 3)]), true);
  assert.equal(getCase("case-032", 2).title, "The coffee discount trap");
  assert.equal(getCase("case-044", 2).title, "The ad that sells at a loss");
  for (const item of startingCases(summaries)) {
    assert.equal(getCase(item.id, 1).version, 1);
    assert.equal(getCase(item.id, 2).version, 2);
    assert.equal(getCase(item.id).version, 3);
    assert.equal(getCase(item.id, 3).version, 3);
  }
});

test("starting cases hide outcomes, comparisons and transfer answers before commitment", () => {
  for (const item of startingCases(summaries)) {
    const definition = getCase(item.id);
    const serialized = JSON.stringify(toPlayableCase(definition));
    assert.ok(!serialized.includes(definition.teaching!.history.result));
    assert.ok(!serialized.includes(definition.teaching!.check.question));
    assert.ok(!serialized.includes('"moneyComparison"'));
    assert.ok(!serialized.includes('"choices"'));
    assert.ok(!serialized.includes('"reveal"'));
    assert.ok(!serialized.includes("https://"));
    for (const task of definition.research.filter((task) => task.hours > 0))
      for (const evidence of task.evidence)
        assert.ok(
          !serialized.includes(evidence.text),
          `${item.id}: ${task.id}`,
        );
  }
});
