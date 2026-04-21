const schools = [
  {
    school: 'George Mason University',
    degree: 'M.S. Computer Science',
    date: 'Jan 2026 — Dec 2027',
    note: 'GPA 4.0 / 4.0',
    place: 'Fairfax, VA',
  },
  {
    school: 'Virginia Tech',
    degree: 'B.S. Computer Science',
    date: 'Aug 2023 — Dec 2025',
    note: 'Computer Science Honor Society',
    place: 'Blacksburg, VA',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-28 bg-mist/60 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-12">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {schools.map((s) => (
            <div
              key={s.school}
              className="rounded-2xl bg-card ring-soft p-8 group hover:-translate-y-0.5 transition-transform"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                {s.date} · {s.place}
              </div>
              <h3 className="font-display font-bold text-2xl tracking-tight">{s.school}</h3>
              <div className="mt-2 text-foreground/80">{s.degree}</div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
