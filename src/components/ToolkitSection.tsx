const categories = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    title: 'AI / ML',
    items: ['LangChain', 'Pinecone', 'ChromaDB', 'LLMs', 'Embeddings', 'RAG', 'Pandas', 'NumPy'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'Material UI', 'D3'],
  },
];

const ToolkitSection = () => {
  return (
    <section id="stack" className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">

            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
              Toolkit
            </h2>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl bg-card ring-soft p-8 hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6">
                  {cat.title}
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1 h-1 rounded-full bg-foreground/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
