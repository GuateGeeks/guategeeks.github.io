import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import heroImg1 from '../assets/img/spike-kids.webp';
import heroImg2 from '../assets/img/spike-kids02.webp';
import heroImg3 from '../assets/img/spike-kids03.webp';

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    const handleMouseMove = (e) => {
      if (rafRef.current) return; // skip if a frame is already queued
      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePos({ x, y });
        rafRef.current = null;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center overflow-hidden pt-24">
      {/* Ambient gradient blobs - liquid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 liquid-blob"
          style={{
            background: 'radial-gradient(circle, rgba(239, 133, 86, 0.4), transparent 70%)',
            top: '-10%',
            right: '-10%',
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 liquid-blob"
          style={{
            background: 'radial-gradient(circle, rgba(104, 85, 153, 0.4), transparent 70%)',
            bottom: '-15%',
            left: '-10%',
            animationDelay: '2s',
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
            transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 liquid-blob"
          style={{
            background: 'radial-gradient(circle, rgba(95, 186, 214, 0.3), transparent 70%)',
            top: '40%',
            left: '30%',
            animationDelay: '4s',
            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
            transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-2 mb-8"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-2 h-2 rounded-full bg-coral" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Educación STEAM en Guatemala
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              <span className="block text-[var(--text-primary)]">Aceleración</span>
              <span className="block text-gradient-coral mt-1">Tecnológica</span>
              <span className="block text-[var(--text-primary)] text-3xl sm:text-4xl md:text-5xl mt-2 font-semibold opacity-80">
                para tu Institución
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transformamos colegios con robótica, educación STEAM y capacitación docente de alto impacto. El futuro comienza hoy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="btn-primary text-base">
                <span>Solicitar Propuesta</span>
                <HiArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://wa.me/50230044972" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base">
                <FaWhatsapp className="w-5 h-5 text-sky" aria-hidden="true" />
                <span>Agendar Asesoría</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              {[
                { number: '50+', label: 'Colegios' },
                { number: '200+', label: 'Docentes' },
                { number: '5K+', label: 'Estudiantes' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-gradient-coral">{stat.number}</div>
                  <div className="text-xs text-[var(--text-tertiary)] font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Composition - Glass Frames */}
          <div className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Image - Large Glass Frame */}
              <div 
                className="absolute inset-[10%] rounded-3xl overflow-hidden glass-card p-2 z-20"
                style={{
                  transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <img 
                  src={heroImg1} 
                  alt="Estudiantes con robot SPIKE" 
                  className="w-full h-full object-cover rounded-2xl"
                  width="480"
                  height="480"
                />
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Image 2 - Top Right */}
              <div 
                className="absolute top-0 right-0 w-[45%] rounded-2xl overflow-hidden glass-card p-1.5 z-30 animate-float"
                style={{
                  animationDelay: '0.5s',
                  transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
                  transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <img 
                  src={heroImg2} 
                  alt="Estudiantes en laboratorio" 
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                  width="216"
                  height="160"
                  loading="lazy"
                />
              </div>

              {/* Floating Image 3 - Bottom Left */}
              <div 
                className="absolute bottom-0 left-0 w-[45%] rounded-2xl overflow-hidden glass-card p-1.5 z-30 animate-float"
                style={{
                  animationDelay: '1.5s',
                  transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
                  transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <img 
                  src={heroImg3} 
                  alt="Aprendizaje práctico" 
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                  width="216"
                  height="160"
                  loading="lazy"
                />
              </div>

              {/* Decorative Glass Orbs */}
              <div 
                className="absolute -top-4 left-[20%] w-16 h-16 rounded-full z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(239, 133, 86, 0.3), rgba(239, 133, 86, 0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(239, 133, 86, 0.2)',
                  transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
                  transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  animation: 'pulseGlow 4s ease-in-out infinite',
                }}
              />
              <div 
                className="absolute -bottom-2 right-[20%] w-12 h-12 rounded-full z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(95, 186, 214, 0.3), rgba(95, 186, 214, 0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(95, 186, 214, 0.2)',
                  transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                  transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
              <div 
                className="absolute top-[45%] -right-4 w-10 h-10 rounded-full z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(104, 85, 153, 0.3), rgba(104, 85, 153, 0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(104, 85, 153, 0.2)',
                  transform: `translate(${mousePos.x * -6}px, ${mousePos.y * -6}px)`,
                  transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
