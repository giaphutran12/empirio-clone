import test from "node:test";
import assert from "node:assert/strict";
import { getCase } from "../src/lib/catalog";
import { toPlayableCase } from "../src/lib/engine";
import { buildAnalystContext } from "../src/lib/ai";

test("gym research costs time without presenting invented records as historical facts", () => {
  const gym = getCase("case-031");
  const opening = toPlayableCase(gym);
  assert.equal(opening.format, "scenario");
  assert.equal(opening.research.reduce((sum, item) => sum + item.hours, 0), 7);
  assert.ok(opening.evidence.every(item => item.kind !== "fact"));
  const serialized = JSON.stringify(buildAnalystContext(gym, []));
  assert.ok(!serialized.includes("$3,000 per group"));
  assert.ok(!serialized.includes("12 interested"));
  assert.ok(!serialized.includes("moneyComparison"));
  const researched = toPlayableCase(gym, ["costs", "demand"]);
  assert.equal(researched.remainingHours, 2);
  assert.ok(researched.evidence.some(item => item.id === "coach-quote"));
  assert.ok(researched.event);
  assert.match(researched.options.find(item => item.id === "pilot")!.description, /1,000/);
});
test("gym comparison uses 90 days of sales and bills for each plan", () => {
  const rows = getCase("case-031").teaching!.moneyComparison!.rows;
  assert.equal(rows[0].sales, 100 * 50 * 3);
  assert.equal(rows[0].costs, 5500 * 3);
  assert.equal(rows[1].sales, 20 * 500);
  assert.equal(rows[1].costs, 5500 * 3 + 3000);
  assert.equal(rows[2].sales, 60 * 500);
  assert.equal(rows[2].costs, 5500 * 3 + 3 * 3000);
  assert.deepEqual(rows.map(row => row.sales - row.costs), [-1500, -9500, 4500]);
});
