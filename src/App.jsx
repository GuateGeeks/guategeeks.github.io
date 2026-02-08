import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
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

// Lazy-load Three.js background to reduce initial bundle size
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

// Intersection Observer hook for scroll-triggered animations
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// Hook to detect prefers-reduced-motion
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
}

// Animated section wrapper - respects prefers-reduced-motion
function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return (
    <div
      ref={ref}
      className={`${prefersReducedMotion ? '' : 'transition-all duration-700'} ${className}`}
      style={prefersReducedMotion ? {} : {
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
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
    <div className="min-h-screen font-sans">
      {/* Skip to content link for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:rounded-2xl focus:text-white focus:text-sm focus:font-semibold focus:outline-none"
        style={{ background: 'linear-gradient(135deg, #8400e2, #a01bff)' }}
      >
        Saltar al contenido
      </a>

      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <div className="relative z-10">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <main id="main-content">
          <Hero />
          <AnimatedSection>
            <Services />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ProcessSection />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ProgramsSection />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <BenefitsSection />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <About />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ContactSection />
          </AnimatedSection>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </div>
  );
}

export { AnimatedSection, useInView, usePrefersReducedMotion };
export default App;
