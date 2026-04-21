import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          Sashank<span className="text-primary">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#education" className="hover:text-foreground transition-colors">Education</a>
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
        >
          Get in touch <span aria-hidden>→</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-b border-border px-6 pb-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2">About</a>
            <a href="#work" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2">Work</a>
            <a href="#stack" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2">Stack</a>
            <a href="#education" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2">Education</a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors w-fit"
            >
              Get in touch <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
