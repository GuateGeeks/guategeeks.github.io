import React from 'react';

const ProcessStep = ({ number, title, description, isLast }) => (
  <div className="relative flex flex-col items-center p-6 text-center z-10">
    <div className="w-16 h-16 rounded-full bg-royal-violet text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ring-4 ring-white dark:ring-strong-gray-800 z-10">
      {number}
    </div>
    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{title}</h3>
    <p className="text-[var(--text-secondary)]">{description}</p>
    
    {!isLast && (
      <div className="hidden lg:block absolute top-14 left-1/2 w-full h-1 bg-gray-200 dark:bg-strong-gray-700 -z-0" />
    )}
  </div>
);

function ProcessSection() {
  const steps = [
    {
      title: "Diagnóstico",
      description: "Evaluamos la infraestructura actual y las necesidades específicas de tu comunidad educativa."
    },
    {
      title: "Propuesta",
      description: "Diseñamos un plan de implementación a medida, seleccionando el equipo y currícula ideal."
    },
    {
      title: "Implementación",
      description: "Ejecutamos la instalación de laboratorios y realizamos la capacitación intensiva docente."
    },
    {
      title: "Seguimiento",
      description: "Brindamos soporte continuo, actualizaciones y medición de impacto en el aprendizaje."
    }
  ];

  return (
    <section className="py-16 bg-[var(--bg-primary)] backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-royal-violet font-semibold tracking-wide uppercase">Nuestro Proceso</h2>
          <p className="mt-2 text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl">
            Cómo Transformamos tu Colegio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              number={index + 1} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
