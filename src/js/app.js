import React, { useState, useEffect } from 'https://esm.sh/react@18';
import ReactDOM from 'https://esm.sh/react@18/client';

import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import CVModal from './components/CVModal.js';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showCVModal, setShowCVModal] = useState(false);

  // Active section scroll observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#0b0f19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* Sticky Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onOpenContact={handleOpenContact}
        onOpenCV={() => setShowCVModal(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCV={() => setShowCVModal(true)} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Viewer / Downloader Modal */}
      {showCVModal && (
        <CVModal onClose={() => setShowCVModal(false)} />
      )}

    </div>
  );
}

// Mount React Root
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
