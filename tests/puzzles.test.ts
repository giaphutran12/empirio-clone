import test from "node:test";
import assert from "node:assert/strict";
import { cases } from "../src/lib/catalog";
import { toPlayableCase } from "../src/lib/engine";

test("twenty distinct puzzles accompany the thirty historical cases", () => {
  const puzzles = cases.filter((item) => item.format === "scenario");
  assert.equal(puzzles.length, 20);
  assert.equal(cases.length - puzzles.length, 30);
  assert.equal(new Set(puzzles.map((item) => item.title)).size, 20);
  assert.equal(new Set(puzzles.map((item) => item.teaching!.skill)).size, 20);
  for (const puzzle of puzzles) {
    const lesson = puzzle.teaching!;
    assert.ok(lesson.alternativeConditions, puzzle.id);
    assert.ok(lesson.moneyComparison, puzzle.id);
    assert.ok(lesson.moneyComparison.rows.length >= 2, puzzle.id);
    for (const row of lesson.moneyComparison.rows) {
      assert.ok(Number.isFinite(row.sales) && row.sales >= 0, puzzle.id);
      assert.ok(Number.isFinite(row.costs) && row.costs >= 0, puzzle.id);
    }
    const initial = JSON.stringify(toPlayableCase(puzzle));
    assert.ok(!initial.includes(lesson.history.result), puzzle.id);
    assert.ok(!initial.includes(lesson.alternativeConditions), puzzle.id);
    assert.ok(!initial.includes(lesson.check.question), puzzle.id);
    assert.ok(
      puzzle.research.reduce((sum, task) => sum + task.hours, 0) > 6,
      puzzle.id,
    );
  }
});
