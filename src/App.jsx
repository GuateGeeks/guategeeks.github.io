import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check system preference or saved preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

  return (
    <div className={`min-h-screen font-sans ${isDark ? 'dark' : ''}`}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <About />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
