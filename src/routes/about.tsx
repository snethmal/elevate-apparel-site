import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Atelier — Maison" },
      { name: "description", content: "Inside the Maison atelier — slow craft, natural fibres, and small-batch production in Porto." },
      { property: "og:title", content: "Atelier — Maison" },
      { property: "og:description", content: "Slow craft, natural fibres, small-batch production." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Atelier</p>
      <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
        We make <em className="italic text-accent">less</em>, so it lasts <em className="italic text-accent">longer</em>.
      </h1>

      <div className="mt-16">
        <img
          src={aboutImg}
          alt="Maison atelier in Porto"
          width={1280}
          height={1024}
          loading="lazy"
          className="aspect-[5/3] w-full object-cover"
        />
      </div>

      <div className="mx-auto mt-16 max-w-2xl space-y-6 text-base leading-relaxed text-foreground/90">
        <p>
          Maison began in 2018 in a quiet corner of Copenhagen — a single rail of garments designed to outlast trend. Today we work between two studios: design in Denmark, production in Portugal.
        </p>
        <p>
          Our atelier in Porto is family-run. Twelve artisans cut, sew, and finish every piece by hand. We release just four editions a year, in small runs, using only natural fibres traceable to their source.
        </p>
        <p>
          We don't believe in waste. Every offcut becomes something else; every garment comes with a lifetime repair promise.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border/60 pt-12 md:grid-cols-4">
        {[
          ["2018", "Founded"],
          ["Porto", "Atelier"],
          ["12", "Artisans"],
          ["100%", "Natural fibres"],
        ].map(([a, b]) => (
          <div key={b}>
            <p className="font-display text-3xl">{a}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
