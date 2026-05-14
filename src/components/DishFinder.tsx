import { useMemo, useState } from "react";
import { dishes, type Dish } from "@/data/menu";
import { Star, Sparkles, Search } from "lucide-react";

const QUICK_MOODS = [
  { label: "Rainy day comfort", q: "rainy comfort warm noodles soup" },
  { label: "Spicy & crispy", q: "spicy crispy peri peri wings" },
  { label: "Date night", q: "date pasta pizza dessert" },
  { label: "Group hang", q: "group shareable pizza fries wings" },
  { label: "Something sweet", q: "sweet dessert mousse coffee" },
  { label: "Vegetarian", q: "vegetarian paneer cheese pasta" },
];

function score(d: Dish, q: string): number {
  if (!q.trim()) return 0;
  const tokens = q.toLowerCase().split(/[^a-z]+/).filter(Boolean);
  const haystack = [
    d.name,
    d.cuisine,
    d.blurb,
    ...d.tags,
    ...d.vibe,
    ...d.reviews.map((r) => r.quote),
  ]
    .join(" ")
    .toLowerCase();
  let s = 0;
  for (const t of tokens) {
    if (!t || t.length < 2) continue;
    if (d.name.toLowerCase().includes(t)) s += 6;
    if (d.tags.some((x) => x.includes(t))) s += 4;
    if (d.vibe.some((x) => x.includes(t))) s += 3;
    if (haystack.includes(t)) s += 1;
  }
  // boost dishes guests rave about
  s += Math.min(d.reviews.length, 4);
  return s;
}

export function DishFinder() {
  const [q, setQ] = useState("");

  const ranked = useMemo(() => {
    if (!q.trim()) return [];
    return dishes
      .map((d) => ({ d, s: score(d, q) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 3)
      .map((x) => x.d);
  }, [q]);

  const adjacent = useMemo(() => {
    if (ranked.length === 0) return [];
    const names = new Set(ranked.map((d) => d.name));
    const adjNames = new Set<string>();
    ranked.forEach((d) => d.pairsWith.forEach((n) => !names.has(n) && adjNames.add(n)));
    return dishes.filter((d) => adjNames.has(d.name)).slice(0, 4);
  }, [ranked]);

  return (
    <section id="finder" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-script text-2xl text-primary mb-2">our little secret</p>
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            Tell us what you're <span className="text-gradient">craving</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We'll read between the lines of hundreds of guest reviews and point you to the
            dish you didn't know you needed — plus what to order alongside it.
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl bg-card shadow-warm border border-border/60 p-2 flex items-center gap-2 focus-within:ring-2 focus-within:ring-primary/50 transition">
            <Search className="ml-3 h-5 w-5 text-muted-foreground shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. ‘something spicy & cheesy', ‘rainy day comfort', ‘date night'…"
              className="flex-1 bg-transparent outline-none px-2 py-4 text-lg placeholder:text-muted-foreground/70"
              aria-label="Describe your craving"
            />
            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl gradient-warm text-primary-foreground px-5 py-3 font-medium hover:opacity-90 transition shadow-soft"
              onClick={() => setQ((s) => s || "anything")}
            >
              <Sparkles className="h-4 w-4" /> Suggest
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {QUICK_MOODS.map((m) => (
              <button
                key={m.label}
                onClick={() => setQ(m.q)}
                className="text-sm px-3 py-1.5 rounded-full border border-border bg-card/60 hover:bg-accent hover:text-accent-foreground transition"
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {ranked.length > 0 && (
          <div className="mt-12 grid gap-6">
            <div>
              <p className="font-script text-xl text-primary">we'd start you with</p>
              <div className="grid md:grid-cols-3 gap-5 mt-3">
                {ranked.map((d, i) => (
                  <DishCard key={d.name} dish={d} highlight={i === 0} />
                ))}
              </div>
            </div>

            {adjacent.length > 0 && (
              <div className="mt-6">
                <p className="font-script text-xl text-primary">guests also pair these</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {adjacent.map((d) => (
                    <button
                      key={d.name}
                      onClick={() => setQ(d.name)}
                      className="group rounded-2xl border border-border bg-card px-4 py-3 hover:shadow-soft hover:-translate-y-0.5 transition"
                    >
                      <div className="font-display text-lg">{d.name}</div>
                      <div className="text-xs text-muted-foreground">{d.cuisine}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function DishCard({ dish, highlight }: { dish: Dish; highlight?: boolean }) {
  const top = dish.reviews[0];
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1 animate-reveal ${
        highlight ? "ring-2 ring-primary/40" : ""
      }`}
    >
      {dish.image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/10 to-transparent" />
          {highlight && (
            <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full gradient-warm text-primary-foreground shadow-soft">
              Top match
            </span>
          )}
        </div>
      )}
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl">{dish.name}</h3>
          <span className="text-xs text-muted-foreground">{dish.cuisine}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{dish.blurb}</p>
        {top && (
          <blockquote className="mt-4 text-sm border-l-2 border-primary/60 pl-3 italic text-foreground/80">
            “{top.quote.replace(/^\W+|\W+$/g, "")}”
            <footer className="not-italic mt-1 text-xs text-muted-foreground flex items-center gap-1">
              — {top.name}
              <span className="inline-flex items-center text-saffron">
                {Array.from({ length: top.stars }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </span>
            </footer>
          </blockquote>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {dish.tags.slice(0, 4).map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
