import test from "node:test";
import assert from "node:assert/strict";
import { scoreDecision } from "../src/lib/scoring";
import { newCoke } from "../src/lib/cases/new-coke";
import { fallbackDebrief } from "../src/lib/ai";
const grade = {
  choice: { level: 4, reason: "A small test limits harm." },
  facts: { level: 3, reason: "You used the taste tests." },
  risk: { level: 2, reason: "You did not check loyal buyers." },
  nextStep: { level: 1, reason: "Set a stop rule." },
  optionId: newCoke.options[0].id,
  example:
    "Check if loyal buyers will keep buying before removing their old drink.",
};
test("server adds four marks and ignores an invented total", () => {
  const score = scoreDecision({ ...grade, total: 100 }, newCoke);
  assert.equal(score?.total, 50);
  assert.equal(score?.verdict, "Needs more thought");
  assert.deepEqual(
    score?.parts.map((p) => p.points),
    [20, 15, 10, 5],
  );
});
test("reject out-of-range, fractional, missing marks and invented example options", () => {
  for (const level of [-1, 6, 2.5, "5"])
    assert.equal(
      scoreDecision({ ...grade, facts: { ...grade.facts, level } }, newCoke),
      null,
    );
  assert.equal(scoreDecision({ ...grade, risk: undefined }, newCoke), null);
  assert.equal(scoreDecision({ ...grade, optionId: "fake" }, newCoke), null);
});
test("unavailable feedback never invents a score", () => {
  assert.equal(
    fallbackDebrief(newCoke, {
      optionId: "test",
      reasoning: "Try it first",
      confidence: "low",
    }).score,
    undefined,
  );
});
