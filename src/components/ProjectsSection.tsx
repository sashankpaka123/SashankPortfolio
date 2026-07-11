import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NBA Season Simulator',
    subtitle: 'Python, React, Scikit-Learn, LangChain, FastAPI',
    tag: 'Predictive Analytics · RAG',
    date: 'Jan 2026 — Present',
    highlights: [
      'Engineered a full-stack forecasting dashboard utilizing FastAPI to serve real-time Monte Carlo season predictions to an interactive React client, orchestrating on-demand recalculations when users dynamically toggle player injuries or roster configurations.',
      'Developed a scikit-learn predictive pipeline evaluated on 13K+ historical games using chronological splits to eliminate look-ahead bias; engineered dynamic features including rolling pace-adjusted Net Ratings, schedule fatigue indexes, and a daily grid ranking team efficiencies.',
      'Optimized a stateful Monte Carlo simulation engine to execute 1,000+ full-season iterations (~1.3M game states) in under a second by extracting model coefficients to bypass scikit-learn\'s inference overhead via vectorized mathematical formulas.',
      'Built an interactive React frontend featuring client-side state synchronizations with backend ML parameters, integrating interactive roster-health controls and a custom 5-on-5 game simulator with live commentary generation.',
      'Integrated a LangChain LLM analyst utilizing context-injected prompt engineering to bridge quantitative model features (SRS, Net Rating, Spacing) and current roster contexts into automated, narrative forecast explanations.',
    ],
    stack: ['Python', 'Scikit-Learn', 'LangChain', 'FastAPI', 'React'],
    accent: 'from-primary/15 to-primary/5',
  },
  {
    title: 'Trekly',
    subtitle: 'React, Vite, Node.js, MongoDB Atlas, Google Maps',
    tag: 'Mapping · Real-time Safety',
    date: 'Aug — Dec 2025',
    highlights: [
      'A high-performance mapping interface integrating the Google Maps Platform with a modular pipeline that normalizes disparate hazard feeds. Synchronized drawers and discussion threads keep hikers informed of safety alerts in real time.',
    ],
    stack: ['React', 'Vite', 'Node.js', 'MongoDB Atlas', 'Google Maps'],
    accent: 'from-emerald-400/20 to-primary/5',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 bg-mist/60 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
              Projects
            </h2>
          </div>
          <a
            href="https://github.com/sashankpaka123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            More on GitHub →
          </a>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-3xl bg-card ring-soft overflow-hidden"
            >
              <div className="grid md:grid-cols-12 gap-8 p-8 md:p-10">
                {/* Numbered accent panel */}
                <div className={`md:col-span-4 rounded-2xl bg-gradient-to-br ${p.accent} relative overflow-hidden min-h-[200px] flex items-end p-6`}>
                  <div className="font-display text-7xl font-bold text-foreground/10 absolute top-4 left-6">
                    0{i + 1}
                  </div>
                  <div className="relative">
                    <div className="text-xs uppercase tracking-widest text-foreground/70">{p.tag}</div>
                    <div className="text-xs text-foreground/60 mt-1">{p.date}</div>
                  </div>
                </div>

                {/* Project details */}
                <div className="md:col-span-8">
                  <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
                    {p.title}
                  </h3>
                  <div className="mt-1 text-sm text-primary font-medium">{p.subtitle}</div>
                  <ul className="mt-4 space-y-3">
                    {p.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed text-[0.925rem]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1.5 rounded-full bg-mist text-foreground/80 border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
