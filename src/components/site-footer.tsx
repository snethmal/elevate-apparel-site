import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">Maison<span className="text-accent">.</span></p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Considered essentials, made slowly in small batches. Designed in Copenhagen, crafted in Portugal.
          </p>
          <form className="mt-6 flex max-w-sm border-b border-foreground/30 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="text-sm uppercase tracking-widest hover:text-accent">Subscribe</button>
          </form>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Shop</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-accent">All</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Outerwear</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Knitwear</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">House</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">Atelier</Link></li>
            <li><Link to="/journal" className="hover:text-accent">Journal</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Maison Studio. All rights reserved.</p>
          <p>Copenhagen — Porto</p>
        </div>
      </div>
    </footer>
  );
}
