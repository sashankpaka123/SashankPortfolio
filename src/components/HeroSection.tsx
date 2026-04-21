import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="top" className="relative gradient-mesh pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >


          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter">
            Sashank Paka
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-display">
            Full-Stack &amp; AI Engineer
          </p>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Computer Science student at Virginia Tech (B.S.) and George Mason (M.S., 4.0 GPA) building full-stack systems and AI products with React, Python, and RAG.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition-colors"
            >
              View my work <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:sashankbpaka@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-mist transition-colors ring-soft"
            >
              sashankbpaka@gmail.com
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <Stat value="4.0" label="Master's GPA" />
            <Stat value="3+" label="Shipped projects" />
            <Stat value="30%" label="API perf. gains" />
          </div>
        </motion.div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <PortraitCard />
        </motion.div>
      </div>
    </section>
  );
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold tracking-tight">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function PortraitCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
      <div className="relative rounded-[1.75rem] bg-card ring-soft overflow-hidden">
        <div className="aspect-[4/5] overflow-hidden bg-mist">
          {/* Portrait image — add your photo at src/assets/sashank.jpg */}
          <img
            src={`${import.meta.env.BASE_URL}sashank.jpg`}
            alt="Portrait of Sashank Paka"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback: hide broken image
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        <div className="p-5 border-t border-border flex items-center justify-between">
          <div>
            <div className="font-display font-semibold">Sashank Paka</div>
            <div className="text-xs text-muted-foreground mt-0.5">Fairfax, VA · CS @ VT → GMU</div>
          </div>
          <a
            href="https://github.com/sashankpaka123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-mist transition-colors"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
