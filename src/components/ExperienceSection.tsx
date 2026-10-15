import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Soontra',
    role: 'AI/ML & Full-Stack Engineer',
    tag: 'AI/ML · Full-Stack',
    date: 'Jun — Sep 2026',
    highlights: [
      'Contributed to an AI-powered content platform using Python, LLMs, and AI agents to support automated content creation, media management, and workflow optimization.',
      'Assisted in developing multimodal data pipelines using Python, FFmpeg, and transcription models for a platform indexing 3,500+ video and audio files.',
      'Supported semantic search development using vector embeddings and pgvector within a system containing 91K+ indexed content items.',
      'Helped build and test AI agent workflows for content generation, intelligent search, and task automation on a platform with 950+ agent executions.',
      'Assisted with backend development and cloud infrastructure using AWS and APIs for a distributed media processing system handling 36K+ jobs.',
    ],
    stack: ['Python', 'LLMs', 'AI Agents', 'pgvector', 'FFmpeg', 'AWS', 'REST APIs'],
    accent: 'from-sky-500/20 to-primary/5',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
              Experience
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-3xl bg-card ring-soft overflow-hidden"
            >
              <div className="grid md:grid-cols-12 gap-8 p-8 md:p-10">
                {/* Accent panel */}
                <div className={`md:col-span-4 rounded-2xl bg-gradient-to-br ${p.accent} relative overflow-hidden min-h-[200px] flex items-end p-6`}>
                  <div className="font-display text-7xl font-bold text-foreground/10 absolute top-4 left-6">
                    0{i + 1}
                  </div>
                  <div className="relative">
                    <div className="text-xs uppercase tracking-widest text-foreground/70">{p.tag}</div>
                    <div className="text-xs text-foreground/60 mt-1">{p.date}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-8">
                  <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
                    {p.title}
                  </h3>
                  <div className="mt-1 text-sm text-primary font-medium">{p.role}</div>
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

export default ExperienceSection;
