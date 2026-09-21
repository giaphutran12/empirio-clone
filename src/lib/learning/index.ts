import { gymLesson } from "./gym";
import { lessons01 } from "./lessons-01";
import { lessons11 } from "./lessons-11";
import { lessons21 } from "./lessons-21";
import type { CaseLesson } from "./types";
export const lessons: Record<string, CaseLesson> = {
  ...lessons01,
  ...lessons11,
  ...lessons21,
  "case-031": gymLesson,
};
