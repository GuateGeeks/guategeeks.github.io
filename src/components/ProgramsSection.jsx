import React from 'react';
import { CheckIcon } from './Icons';

const ProgramCard = ({ title, subtitle, features, recommended, color }) => (
  <div className={`relative flex flex-col bg-[var(--bg-card)] rounded-2xl shadow-xl overflow-hidden border-2 ${recommended ? 'border-royal-violet scale-105 z-10' : 'border-transparent'} transition-transform duration-300 hover:scale-[1.02]`}>
    {recommended && (
      <div className="absolute top-0 right-0 bg-royal-violet text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
        Más Popular
      </div>
    )}
    <div className={`p-8 ${recommended ? 'bg-royal-violet/5' : ''}`}>
      <h3 className="text-2xl font-bold text-[var(--text-primary)]">{title}</h3>
      <p className={`mt-2 text-sm font-medium uppercase tracking-wide ${color.replace('bg-', 'text-')}`}>{subtitle}</p>
      
      <ul className="mt-8 space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${color} text-white`}>
              <CheckIcon />
            </span>
            <span className="ml-3 text-[var(--text-secondary)]">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <a href="#contacto" className={`block w-full py-3 px-6 text-center rounded-md shadow font-bold text-white transition-colors ${recommended ? 'bg-royal-violet hover:bg-royal-violet-600' : 'bg-strong-gray-500 hover:bg-strong-gray-600'}`}>
          Solicitar Detalles
        </a>
      </div>
    </div>
  </div>
);

function ProgramsSection() {
  const programs = [
    {
      title: "Programa Piloto",
      subtitle: "Implementación Corta",
      color: "bg-chartreuse",
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
      color: "bg-royal-violet",
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
      color: "bg-blue",
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
    <section id="programas" className="py-16 sm:py-24 bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-royal-violet font-semibold tracking-wide uppercase">Programas para Colegios</h2>
          <p className="mt-2 text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl">
            Modelos de Implementación Flexible
          </p>
          <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Elige el formato que mejor se adapte a los objetivos y presupuesto de tu institución.
          </p>
        </div>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto items-center">
          {programs.map((prog, index) => (
            <ProgramCard key={index} {...prog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
