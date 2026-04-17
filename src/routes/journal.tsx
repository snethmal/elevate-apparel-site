import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import p1 from "@/assets/product-1.jpg";
import p3 from "@/assets/product-3.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Maison" },
      { name: "description", content: "Notes from the atelier — on craft, materials, and the people behind Maison." },
      { property: "og:title", content: "Journal — Maison" },
      { property: "og:description", content: "Notes from the atelier on craft and materials." },
    ],
  }),
  component: Journal,
});

const posts = [
  { tag: "Materials", title: "On the cashmere we choose, and why", date: "Oct 2025", image: p1 },
  { tag: "Craft", title: "Inside the Porto atelier: a day with Marta", date: "Sep 2025", image: aboutImg },
  { tag: "Edit", title: "Building a quiet wardrobe — five pieces", date: "Aug 2025", image: p3 },
];

function Journal() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="mb-16 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Journal</p>
        <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">
          Notes from the <em className="italic text-accent">atelier</em>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="overflow-hidden bg-secondary/60">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
              {post.tag} — {post.date}
            </p>
            <h2 className="mt-2 font-display text-2xl leading-tight group-hover:text-accent">
              {post.title}
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
}
