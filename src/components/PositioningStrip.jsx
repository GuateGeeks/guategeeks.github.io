import React from "react";

function PositioningStrip() {
  return (
    <section aria-label="Posicionamiento" className="pb-10 sm:pb-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl px-6 py-6 sm:px-10 sm:py-8 text-center">
          <p className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)] leading-relaxed tracking-tight">
            Instituciones que integran tecnologia hoy, lideran la educacion del
            manana.
          </p>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)]">
            Mas que un proveedor de tecnologia, somos un aliado estrategico en
            la innovacion educativa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PositioningStrip;
