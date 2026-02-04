import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProcessSection from './components/ProcessSection';
import ProgramsSection from './components/ProgramsSection';
import BenefitsSection from './components/BenefitsSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

  return (
    <div className={`min-h-screen font-sans`}>
      <ThreeBackground />
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <Services />
      <ProcessSection />
      <ProgramsSection />
      <BenefitsSection />
      <About />
      <ContactSection />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
