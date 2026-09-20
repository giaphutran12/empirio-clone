import { Game } from "@/components/game";
import { cases } from "@/lib/catalog";
export default function Page() {
  const summaries = cases.map(
    ({ id, version, number, title, subtitle, category, year, reveal }) => ({
      company: reveal.company,
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
