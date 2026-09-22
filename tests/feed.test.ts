import test from "node:test";
import assert from "node:assert/strict";
import { buildFeedSteps, clampStep, findingFor } from "../src/lib/feed";
import { toPlayableCase } from "../src/lib/engine";
import { cases, getCase } from "../src/lib/catalog";
import type { Message } from "../src/lib/types";

test("each screen holds one fact, one research task or one option", () => {
  for (const definition of cases) {
    const steps = buildFeedSteps(toPlayableCase(definition));
    assert.equal(steps[0].kind, "hook", definition.id);
    assert.equal(steps.at(-1)?.kind, "decide", definition.id);
    const facts = steps.filter((step) => step.kind === "fact");
    assert.equal(facts.length, definition.evidence.length, definition.id);
    assert.equal(
      steps.filter((step) => step.kind === "research").length,
      toPlayableCase(definition).research.length,
      definition.id,
    );
    assert.equal(
      steps.filter((step) => step.kind === "option").length,
      definition.options.length,
      definition.id,
    );
    assert.equal(steps.filter((step) => step.kind === "event").length, 0);
  }
});

test("research findings and the halfway development get their own screens, not fact screens", () => {
  const definition = getCase("case-035");
  const ids = definition.research.slice(0, 2).map((task) => task.id);
  const state = toPlayableCase(definition, ids);
  assert.ok(state.event, "two tasks reach the halfway event");
  assert.ok(state.researchFindingIds.length >= 2);
  const steps = buildFeedSteps(state);
  assert.equal(
    steps.filter((step) => step.kind === "fact").length,
    definition.evidence.length,
  );
  const eventIndex = steps.findIndex((step) => step.kind === "event");
  const lastResearch = steps.map((step) => step.kind).lastIndexOf("research");
  const firstOption = steps.findIndex((step) => step.kind === "option");
  assert.ok(eventIndex > lastResearch && eventIndex < firstOption);
  assert.equal(clampStep(99, steps), steps.length - 1);
  assert.equal(clampStep(-4, steps), 0);
});

test("a saved finding is matched by research id, or by commission order for older saves", () => {
  const finding = (text: string, researchId?: string): Message => ({
    id: text,
    role: "assistant",
    text,
    reply: { answer: "", evidenceIds: [], researchIds: [], kind: "evidence" },
    researchId,
  });
  const chat: Message = { id: "q", role: "user", text: "Why?" };
  const answer: Message = {
    id: "a",
    role: "assistant",
    text: "Because.",
    reply: {
      answer: "Because.",
      evidenceIds: [],
      researchIds: [],
      kind: "interpretation",
    },
  };
  const messages = [
    finding("first"),
    chat,
    answer,
    finding("second", "basket"),
  ];
  assert.equal(
    findingFor("basket", ["growth", "basket"], messages)?.text,
    "second",
  );
  assert.equal(
    findingFor("growth", ["growth", "basket"], messages)?.text,
    "first",
  );
  assert.equal(
    findingFor("carrier", ["growth", "basket"], messages),
    undefined,
  );
});
