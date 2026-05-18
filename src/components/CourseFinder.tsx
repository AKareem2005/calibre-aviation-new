import { useMemo, useState } from "react";
import { courses, type Course } from "@/data/calibre";
import { Plane, Sparkles, ArrowRight } from "lucide-react";

const PROMPTS = [
  "I want to fly and travel the world",
  "I love working outdoors with my hands",
  "I'm good with computers and details",
  "I love talking to people",
  "I want a uniformed airport job",
];

function score(c: Course, q: string) {
  const s = q.toLowerCase();
  let sc = 0;
  if (s.includes(c.name.toLowerCase())) sc += 8;
  c.vibes.forEach((v) => s.includes(v) && (sc += 2));
  c.goals.forEach((g) => s.includes(g) && (sc += 3));
  c.modules.forEach((m) => s.includes(m.toLowerCase().split(" ")[0]) && (sc += 1));
  return sc;
}

export function CourseFinder() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const ranked = courses
      .map((c) => ({ c, s: score(c, q) }))
      .sort((a, b) => b.s - a.s);
    const top = ranked[0];
    if (!top || top.s === 0) return [];
    const others = ranked.slice(1, 3).filter((r) => r.s > 0);
    return [top, ...others];
  }, [q]);

  return (
    <section id="finder" className="relative py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent-foreground bg-accent/30 border border-accent/40 px-3 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5" /> Find Your Runway
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 text-balance">
            Tell us what you want ?
            <br />
            <span className="text-gradient-sky">We'll point you to the gate 🛫</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Describe your dream day in one sentence — we'll match you to the right Calibre programme and the courses graduates pair it with.
          </p>
        </div>

        <div className="relative rounded-3xl bg-card border border-border shadow-sky p-2 md:p-3">
          <div className="flex items-center gap-3 px-4">
            <Plane className="h-5 w-5 text-primary shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. I want to fly and meet people from everywhere…"
              className="w-full bg-transparent py-4 outline-none text-lg placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {PROMPTS.map((p) => (
              <button
                key={p}
                onClick={() => setQ(p)}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {results.length > 0 && (
          <div className="mt-8 grid md:grid-cols-3 gap-5 animate-reveal">
            {results.map((r, i) => (
              <a
                key={r.c.slug}
                href="#courses"
                className={`group relative rounded-2xl overflow-hidden border bg-card hover:-translate-y-1 transition-all duration-500 ${
                  i === 0 ? "md:col-span-2 border-accent shadow-gold" : "border-border shadow-soft"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={r.c.image} alt={r.c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  {i === 0 && (
                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest bg-accent text-accent-foreground px-2 py-1 rounded">
                      Best match
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {r.c.duration} programme
                  </p>
                  <h3 className="font-display text-3xl mt-1">{r.c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{r.c.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium">
                    Explore programme <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {q.trim() && results.length === 0 && (
          <p className="mt-8 text-center text-muted-foreground">
            Hmm — try one of the suggestions above, or just say what you'd love to do.
          </p>
        )}
      </div>
    </section>
  );
}
