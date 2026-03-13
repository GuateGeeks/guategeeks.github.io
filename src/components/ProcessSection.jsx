import React from "react";
import {
  HiOutlineSearch,
  HiOutlineClipboardList,
  HiOutlineChartBar,
} from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";

const ProcessStep = ({ number, title, description, Icon, isLast, index }) => (
  <div className="relative group">
    {/* Connector line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px]">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(239, 133, 86, 0.3), rgba(239, 133, 86, 0.1))",
          }}
        />
        <div
          className="absolute top-0 left-0 h-full rounded-full glass-shimmer"
          style={{
            width: "30%",
            background:
              "linear-gradient(90deg, transparent, rgba(239, 133, 86, 0.5), transparent)",
          }}
        />
      </div>
    )}

    <div
      className="glass-card p-6 text-center relative overflow-visible"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Step number - floating glass badge */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
          style={{
            background: "linear-gradient(135deg, #ef8556, #f4a07a)",
            boxShadow: "0 4px 16px rgba(239, 133, 86, 0.35)",
          }}
        >
          {number}
        </div>
      </div>

      {/* Icon */}
      <div className="mt-4 mb-4 flex justify-center">
        {React.createElement(Icon, {
          className: "w-8 h-8 text-coral",
          "aria-hidden": "true",
        })}
      </div>

      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

function ProcessSection() {
  const steps = [
    {
      title: "Diagnóstico",
      description:
        "Analizamos infraestructura, necesidades educativas y objetivos institucionales para definir la mejor estrategia tecnologica.",
      Icon: HiOutlineSearch,
    },
    {
      title: "Diseño Integral",
      description:
        "Seleccionamos tecnologias, metodologias y planificacion academica alineadas al contexto de tu institucion.",
      Icon: HiOutlineClipboardList,
    },
    {
      title: "Implementación",
      description:
        "Instalamos el laboratorio y dejamos a tu equipo docente preparado para iniciar experiencias de aprendizaje.",
      Icon: IoRocketOutline,
    },
    {
      title: "Acompañamiento",
      description:
        "Brindamos soporte continuo, capacitacion y medicion de impacto para asegurar resultados sostenibles.",
      Icon: HiOutlineChartBar,
    },
  ];

  return (
    <section id="proceso" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-coral">
              Ruta de Activación
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Como activamos la{" "}
            <span className="text-gradient-coral">
              innovacion tecnologica en tu institucion
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              {...step}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
