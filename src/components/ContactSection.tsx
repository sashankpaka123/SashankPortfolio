const ContactSection = () => {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="rounded-3xl bg-foreground text-background p-10 md:p-16 relative overflow-hidden">
          {/* Gradient orb decorations */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative">

            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1]">
              Contact
            </h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl">
              <ContactRow label="Email" value="sashankbpaka@gmail.com" href="mailto:sashankbpaka@gmail.com" />
              <ContactRow label="Phone" value="(210) 589-0871" href="tel:+12105890871" />
              <ContactRow label="GitHub" value="sashankpaka123" href="https://github.com/sashankpaka123" external />
              <ContactRow label="Location" value="Fairfax, VA" />
            </div>
          </div>
        </div>

        {/* Integrated footer */}
        <footer className="mt-10 flex items-center justify-between text-xs text-muted-foreground">
          <div>© 2026 Sashank Paka</div>
          <div>Designed & built with care.</div>
        </footer>
      </div>
    </section>
  );
};

function ContactRow({ label, value, href, external }: { label: string; value: string; href?: string; external?: boolean }) {
  const inner = (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
      <div className="text-xs uppercase tracking-widest text-white/50">{label}</div>
      <div className="mt-1 font-display font-semibold text-lg text-white flex items-center gap-2">
        {value} {href && <span className="text-primary">↗</span>}
      </div>
    </div>
  );
  if (!href) return inner;
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  );
}

export default ContactSection;
