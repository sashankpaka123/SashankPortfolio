import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ToolkitSection from '@/components/ToolkitSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sashank Paka | Full-Stack &amp; AI Engineer</title>
        <meta
          name="description"
          content="Sashank Paka — Full-Stack & AI Engineer. CS @ Virginia Tech (B.S.) and George Mason (M.S., 4.0 GPA). Building full-stack systems and AI products with React, Python, and RAG."
        />
        <meta name="keywords" content="Sashank Paka, Full-Stack Developer, AI Engineer, React, Python, LangChain, Virginia Tech, George Mason" />
        <meta property="og:title" content="Sashank Paka | Full-Stack & AI Engineer" />
        <meta
          property="og:description"
          content="Full-Stack & AI Engineer building full-stack systems and AI products with React, Python, and RAG."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sashankpaka.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ToolkitSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
