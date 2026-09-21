import { puzzleLessons32 } from "./puzzles-32";
import { puzzleLessons38 } from "./puzzles-38";
import { puzzleLessons44 } from "./puzzles-44";
import { gymLesson } from "./gym";
import { lessons01 } from "./lessons-01";
import { lessons11 } from "./lessons-11";
import { lessons21 } from "./lessons-21";
import type { CaseLesson } from "./types";
export const lessons: Record<string, CaseLesson> = {
  ...lessons01,
  ...lessons11,
  ...lessons21,
  ...puzzleLessons32,
  ...puzzleLessons38,
  ...puzzleLessons44,
  "case-031": gymLesson,
};
