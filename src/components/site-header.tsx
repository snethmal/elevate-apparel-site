import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const linkProps = {
    className: "text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors",
    activeProps: { className: "text-foreground font-medium" },
  };
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="font-display text-xl tracking-tight">
          Maison<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/shop" {...linkProps}>Shop</Link>
          <Link to="/about" {...linkProps}>Atelier</Link>
          <Link to="/journal" {...linkProps}>Journal</Link>
          <Link to="/contact" {...linkProps}>Contact</Link>
        </nav>
        <div className="flex items-center gap-5 text-sm">
          <button className="hidden text-foreground/70 hover:text-foreground sm:block" aria-label="Search">Search</button>
          <button className="text-foreground/70 hover:text-foreground" aria-label="Cart">
            Bag <span className="text-foreground">(0)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
