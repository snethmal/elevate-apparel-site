import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison" },
      { name: "description", content: "Get in touch with the Maison studio in Copenhagen and atelier in Porto." },
      { property: "og:title", content: "Contact — Maison" },
      { property: "og:description", content: "Get in touch with the Maison studio." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
        <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">
          Say <em className="italic text-accent">hello</em>.
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          For press, wholesale, or care questions — we read every message and reply within two working days.
        </p>

        <div className="mt-12 space-y-8 text-sm">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Studio</p>
            <p className="mt-2">Bredgade 14<br />1260 Copenhagen, Denmark</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Atelier</p>
            <p className="mt-2">Rua das Flores 92<br />4050-262 Porto, Portugal</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
            <p className="mt-2">hello@maison.studio</p>
          </div>
        </div>
      </div>

      <form className="space-y-8 border-l border-border/60 pl-0 lg:pl-12">
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
          <input
            type="text"
            className="mt-2 w-full border-b border-border bg-transparent py-3 text-base outline-none focus:border-foreground"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
          <input
            type="email"
            className="mt-2 w-full border-b border-border bg-transparent py-3 text-base outline-none focus:border-foreground"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
          <textarea
            rows={5}
            className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-base outline-none focus:border-foreground"
          />
        </div>
        <button
          type="submit"
          className="border border-foreground bg-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
