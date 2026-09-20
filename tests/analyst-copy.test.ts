import test from "node:test";
import assert from "node:assert/strict";
import { cleanAnalystCopy } from "../src/lib/analyst-copy";
import { newCoke } from "../src/lib/cases/new-coke";

test("removes duplicate citation asides from saved replies but preserves actual qualifications", () => {
  const labels = newCoke.evidence.map((item) => item.label);
  assert.equal(
    cleanAnalystCopy(
      "Strong taste results (evidence: “Nearly 200,000 consumers”, “99 years of continuity”) add confidence (interpretation), but costs (US$50 million) remain unknown.",
      labels,
    ),
    "Strong taste results add confidence, but costs (US$50 million) remain unknown.",
  );
  assert.equal(
    cleanAnalystCopy(
      "Results (Nearly 200,000 consumers vs. real purchases) differ.",
      labels,
    ),
    "Results (Nearly 200,000 consumers vs. real purchases) differ.",
  );
});
