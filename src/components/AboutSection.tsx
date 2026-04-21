const AboutSection = () => {
  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">

          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.05]">
            About
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            CS graduate from <span className="text-foreground font-medium">Virginia Tech</span>. Pursuing a Master’s degree in CS from <span className="text-foreground font-medium">GMU (GPA 4.0)</span>. Designer and implementer of artificial intelligence applications and full stack applications.
          </p>
          <p>
            I enjoy designing applications that analyze data in an interesting way. Presently, I am working on creating an artificial intelligence-driven NBA Season Simulator that uses probabilistic forecasting and RAG to predict league standings. I had previously created an application called Trekly, which is a real-time hazard tracking system for hikers designed in React, Node.js, and Google maps technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
