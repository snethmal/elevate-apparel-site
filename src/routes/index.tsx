import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="grid min-h-[88vh] grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-between p-8 lg:col-span-5 lg:p-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Autumn / Winter — Vol. 04
          </p>
          <div>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              The art of <em className="italic text-accent">quiet</em> dressing.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              A studied edit of timeless pieces — soft tailoring, considered knitwear, and natural fibres made to be worn for years, not seasons.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/shop"
                className="inline-flex items-center border border-foreground bg-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground"
              >
                Shop the collection
              </Link>
              <Link to="/about" className="text-xs uppercase tracking-[0.2em] underline-offset-8 hover:underline">
                Our story
              </Link>
            </div>
          </div>
          <div className="hidden items-end justify-between text-xs uppercase tracking-widest text-muted-foreground lg:flex">
            <span>01 — Coat 02 / Camel</span>
            <span>Scroll ↓</span>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <img
            src={heroImg}
            alt="Model in oversized camel coat and wide-leg trousers"
            width={1536}
            height={1920}
            className="h-full max-h-[88vh] w-full object-cover"
          />
        </div>
      </section>

      {/* Marquee strip */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-6 py-5 text-xs uppercase tracking-[0.2em] text-muted-foreground lg:px-10">
          <span>Free shipping over €200</span>
          <span className="hidden sm:inline">·</span>
          <span>Crafted in Portugal</span>
          <span className="hidden sm:inline">·</span>
          <span>Lifetime repairs</span>
          <span className="hidden sm:inline">·</span>
          <span>Carbon-neutral delivery</span>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Featured</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              The new edit
            </h2>
          </div>
          <Link to="/shop" className="hidden text-xs uppercase tracking-[0.2em] underline-offset-8 hover:underline md:inline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group cursor-pointer">
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
      </section>

      {/* Atelier story */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:pb-32">
        <div className="order-2 lg:order-1">
          <img
            src={aboutImg}
            alt="Hands working with cream fabric in atelier"
            width={1280}
            height={1024}
            loading="lazy"
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Atelier</p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Slow craft, in <em className="italic text-accent">small</em> batches.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Every Maison piece is cut and sewn in our family-run atelier in Porto. We work in editions — not seasons — releasing only what we can make beautifully, by hand.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <p className="font-display text-3xl">12</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Artisans</p>
            </div>
            <div>
              <p className="font-display text-3xl">04</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Editions / yr</p>
            </div>
            <div>
              <p className="font-display text-3xl">100%</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Natural fibres</p>
            </div>
          </div>
          <Link
            to="/about"
            className="mt-10 self-start text-xs uppercase tracking-[0.2em] underline-offset-8 hover:underline"
          >
            Read our story →
          </Link>
        </div>
      </section>
    </>
  );
}
