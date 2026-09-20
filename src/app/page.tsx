import { Game } from "@/components/game";
import { cases } from "@/lib/catalog";
export default function Page() {
  const summaries = cases.map(
    ({
      id,
      version,
      number,
      title,
      subtitle,
      category,
      year,
      reveal,
      teaching,
    }) => ({
      company: reveal.company,
      skill: teaching?.skill ?? category,
      id,
      version,
      number,
      title,
      subtitle,
      category,
      year,
    }),
  );
  return <Game cases={summaries} />;
}
