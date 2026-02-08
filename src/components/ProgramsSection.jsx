import React, { useState, useEffect } from 'react';
import { CheckIcon } from './Icons';

function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  useEffect(() => {
    const el = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(el.classList.contains('dark'));
    });
    observer.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

const ProgramCard = ({ title, subtitle, features, recommended, accentColor, accentColorLight, accentGlow, index }) => {
  const isDark = useDarkMode();
  const visibleAccent = isDark ? (accentColorLight || accentColor) : accentColor;

  return (
  <div 
    className={`relative glass-card group ${recommended ? 'lg:scale-105 z-10' : ''}`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Background glow for recommended */}
    {recommended && (
      <div className="absolute -inset-[2px] rounded-[22px] -z-10" style={{
        background: 'linear-gradient(135deg, #ef8556, #f4a07a, #5fbad6)',
        opacity: 0.6,
        filter: 'blur(0px)',
      }} />
    )}

    {/* Recommended badge */}
    {recommended && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
        <div className="px-4 py-1 rounded-full text-xs font-semibold text-white"
          style={{
            background: 'linear-gradient(135deg, #ef8556, #f4a07a)',
            boxShadow: '0 4px 16px rgba(239, 133, 86, 0.4)',
          }}
        >
          Más Popular
        </div>
      </div>
    )}

    <div className="p-7 pt-8">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">{title}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider" style={{ color: visibleAccent }}>
          {subtitle}
        </p>
      </div>
      
      {/* Features */}
      <ul className="space-y-3.5 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5"
              style={{
                background: `${visibleAccent}20`,
                color: visibleAccent,
              }}
            >
              <CheckIcon />
            </div>
            <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* CTA */}
      <div className="space-y-3">
        <a 
          href="#contacto" 
          className={`block w-full py-3.5 text-center rounded-2xl font-semibold text-sm transition-all duration-300 ${
            recommended 
              ? 'text-white hover:shadow-lg hover:-translate-y-0.5' 
              : 'text-[var(--text-primary)] hover:bg-[var(--bg-glass-hover)] hover:-translate-y-0.5'
          }`}
          style={recommended ? {
            background: 'linear-gradient(135deg, #ef8556, #f4a07a)',
            boxShadow: '0 4px 16px rgba(239, 133, 86, 0.3)',
          } : {
            background: 'var(--bg-glass)',
            border: '1px solid var(--glass-border-subtle)',
          }}
        >
          Solicitar Detalles
        </a>
        <p className="text-center text-xs text-[var(--text-tertiary)] font-medium">
          Solicita tu cotización sin compromiso
        </p>
      </div>
    </div>

    {/* Subtle hover glow */}
    <div 
      className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
      style={{ 
        background: accentGlow,
        filter: 'blur(40px)',
        transform: 'scale(0.9)',
      }}
    />
  </div>
  );
};

function ProgramsSection() {
  const programs = [
    {
      title: "Programa Piloto",
      subtitle: "Implementación Corta",
      accentColor: "#3a8fa8",
      accentColorLight: "#5fbad6",
      accentGlow: "radial-gradient(circle, rgba(95, 186, 214, 0.15), transparent 70%)",
      features: [
        "Duración: 4 - 8 semanas",
        "1 Taller demostrativo por grado",
        "Capacitación básica docente",
        "Uso de equipo en préstamo",
        "Evaluación de viabilidad"
      ]
    },
    {
      title: "Programa Anual",
      subtitle: "Transformación Integral",
      accentColor: "#c4552e",
      accentColorLight: "#f4a07a",
      accentGlow: "radial-gradient(circle, rgba(239, 133, 86, 0.15), transparent 70%)",
      recommended: true,
      features: [
        "Duración: Ciclo escolar completo",
        "Currícula STEAM integrada",
        "Laboratorio permanente",
        "Certificación docente completa",
        "Club de robótica y competencias",
        "Escuela para padres trimestral"
      ]
    },
    {
      title: "Programa Trimestral",
      subtitle: "Módulos Temáticos",
      accentColor: "#685599",
      accentColorLight: "#8a78b8",
      accentGlow: "radial-gradient(circle, rgba(104, 85, 153, 0.15), transparent 70%)",
      features: [
        "Duración: 1 Unidad o Trimestre",
        "Enfoque en proyecto específico",
        "Materiales consumibles incluidos",
        "Acompañamiento semanal",
        "Feria de cierre de unidad"
      ]
    }
  ];

  return (
    <section id="programas" className="py-20 sm:py-28 section-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-coral">Programas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Modelos de Implementación{' '}
            <span className="text-gradient-coral">Flexible</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
             Elige el formato que mejor se adapte a los objetivos y presupuesto de tu institución.
          </p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto items-start">
          {programs.map((prog, index) => (
            <ProgramCard key={index} {...prog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
