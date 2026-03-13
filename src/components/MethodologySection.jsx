import React from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlinePuzzle,
  HiOutlineSparkles,
} from "react-icons/hi";

const methodologyItems = [
  {
    title: "STEAM",
    description:
      "Integramos ciencia, tecnologia, ingenieria, arte y matematicas en experiencias conectadas con retos reales.",
    Icon: HiOutlineAcademicCap,
  },
  {
    title: "Aprendizaje Basado en Proyectos (ABP / PBL)",
    description:
      "Los estudiantes aprenden creando soluciones concretas, colaborando y presentando resultados medibles.",
    Icon: HiOutlineLightBulb,
  },
  {
    title: "Design Thinking",
    description:
      "Fomentamos empatia, ideacion, prototipado y mejora continua para resolver problemas del contexto escolar.",
    Icon: HiOutlineSparkles,
  },
  {
    title: "Gamificacion",
    description:
      "Aplicamos dinamicas de juego para elevar motivacion, participacion y persistencia en el aprendizaje.",
    Icon: HiOutlinePuzzle,
  },
];

function MethodologySection() {
  return (
    <section id="metodologia" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-coral">
              Metodologia
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Como <span className="text-gradient-coral">aprendemos</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            Integramos metodologias educativas activas que potencian el
            aprendizaje y convierten la tecnologia en resultados academicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methodologyItems.map((item) => (
            <article key={item.title} className="glass-card p-6 sm:p-7">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(239, 133, 86, 0.14)",
                  border: "1px solid rgba(239, 133, 86, 0.3)",
                }}
              >
                <item.Icon className="w-6 h-6 text-coral" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodologySection;
