import test from "node:test";
import assert from "node:assert/strict";
import { newCoke } from "../src/lib/cases/new-coke";
import { getCase } from "../src/lib/catalog";
import { replayResearch, toPlayableCase } from "../src/lib/engine";

test("initial case serializes neither reveal nor locked research nor event", () => {
  const state = toPlayableCase(newCoke);
  assert.equal(state.remainingHours, 6);
  assert.equal(state.event, null);
  assert.equal("reveal" in state, false);
  assert.deepEqual(state.evidence, newCoke.evidence);
  for (const task of state.research) assert.equal("evidence" in task, false);
  const serialized = JSON.stringify(state);
  assert.equal(serialized.includes(newCoke.reveal.company), false);
  for (const task of newCoke.research)
    for (const evidence of task.evidence)
      assert.equal(serialized.includes(evidence.text), false);
});
test("replay exposes only selected tasks, triggers event once halfway, and is deterministic", () => {
  const ids: string[] = [];
  let hours = 0;
  for (const task of newCoke.research) {
    if (hours + task.hours > 6) continue;
    ids.push(task.id);
    hours += task.hours;
    const state = replayResearch(newCoke, ids);
    assert.equal(state.remainingHours, 6 - hours);
    assert.equal(
      state.evidence.filter((item) => item.id === newCoke.event.evidence.id)
        .length,
      hours >= 3 ? 1 : 0,
    );
    for (const locked of newCoke.research.filter(
      (item) => !ids.includes(item.id),
    )) {
      for (const item of locked.evidence)
        assert.equal(
          state.evidence.some((evidence) => evidence.id === item.id),
          false,
        );
    }
  }
  assert.ok(hours >= 3);
  assert.deepEqual(replayResearch(newCoke, ids), replayResearch(newCoke, ids));
});
test("unknown tasks, duplicate tasks, overbudget ledgers and versions are rejected", () => {
  assert.throws(() => replayResearch(newCoke, ["missing"]));
  assert.throws(() =>
    replayResearch(newCoke, [newCoke.research[0].id, newCoke.research[0].id]),
  );
  const costlyTasks = {
    ...newCoke,
    research: newCoke.research.map((task) => ({ ...task, hours: 4 })),
  };
  assert.throws(() =>
    replayResearch(
      costlyTasks,
      costlyTasks.research.slice(0, 2).map((task) => task.id),
    ),
  );
  assert.throws(() => getCase(newCoke.id, newCoke.version + 1));
  assert.throws(() => getCase("missing"));
});

// Exercise authored case data directly, including every ordered research path.
import { cases } from "../src/lib/catalog";
for (const definition of cases) {
  test(`${definition.id}: authored content has a meaningful budget, valid sources, and complete consequences`, () => {
    assert.ok(
      definition.research.reduce((total, task) => total + task.hours, 0) > 6,
    );
    for (const task of definition.research)
      assert.ok(
        Number.isInteger(task.hours) && task.hours >= 1 && task.hours <= 3,
      );
    const sources = new Set(
      definition.reveal.sources.map((source) => source.id),
    );
    const allEvidence = [
      ...definition.evidence,
      ...definition.research.flatMap((task) => task.evidence),
      definition.event.evidence,
    ];
    assert.equal(
      new Set(allEvidence.map((evidence) => evidence.id)).size,
      allEvidence.length,
    );
    for (const evidence of allEvidence)
      for (const sourceId of evidence.sourceIds)
        assert.ok(
          sources.has(sourceId),
          `${evidence.id} references ${sourceId}`,
        );
    for (const option of definition.options)
      assert.ok(definition.reveal.consequences[option.id]?.trim());
    const initial = toPlayableCase(definition);
    const serialized = JSON.stringify(initial);
    assert.equal("reveal" in initial, false);
    assert.equal(initial.event, null);
    assert.equal(serialized.includes(definition.reveal.company), false);
    assert.equal(
      /coca.cola|\bcoke\b|netflix|blockbuster|\bintel\b/i.test(serialized),
      false,
    );
    assert.equal(serialized.includes(definition.reveal.history), false);
    for (const evidence of definition.research.flatMap((task) => task.evidence))
      assert.equal(serialized.includes(evidence.text), false);
  });
  test(`${definition.id}: all ordered research paths enforce budget and exactly one halfway event`, () => {
    function check(ids: string[], hours: number) {
      if (hours > 6) {
        assert.throws(() => replayResearch(definition, ids));
        return;
      }
      const state = replayResearch(definition, ids);
      assert.equal(state.remainingHours, 6 - hours);
      assert.equal(
        state.evidence.filter(
          (evidence) => evidence.id === definition.event.evidence.id,
        ).length,
        hours >= 3 ? 1 : 0,
      );
      for (const task of definition.research) {
        for (const evidence of task.evidence)
          assert.equal(
            state.evidence.some((item) => item.id === evidence.id),
            ids.includes(task.id),
          );
        if (!ids.includes(task.id))
          check([...ids, task.id], hours + task.hours);
      }
    }
    check([], 0);
  });
}
