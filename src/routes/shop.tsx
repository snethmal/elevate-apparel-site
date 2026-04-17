import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Maison" },
      { name: "description", content: "Browse the latest edit of considered essentials from Maison." },
      { property: "og:title", content: "Shop — Maison" },
      { property: "og:description", content: "Browse the latest edit of considered essentials." },
    ],
  }),
  component: Shop,
});

const filters = ["All", "Outerwear", "Knitwear", "Trousers", "Shirts", "Accessories"];

function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Collection</p>
        <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">
          Autumn / Winter <em className="italic text-accent">2025</em>
        </h1>
      </div>

      <div className="mb-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-border/60 py-4 text-xs uppercase tracking-[0.2em]">
        {filters.map((f, i) => (
          <button
            key={f}
            className={i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-3">
        {[...products, ...products].map((p, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="overflow-hidden bg-secondary/60">
              <img
                src={p.image}
                alt={p.name}
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</p>
                <h3 className="mt-1 text-sm font-medium">{p.name}</h3>
              </div>
              <p className="text-sm">€{p.price}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
