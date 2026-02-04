import React from 'react';

function Team() {
  return (
    <section className="py-12 sm:py-16 bg-soft-gray opacity-40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">Nuestros Instructores</h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 text-white/90">
          Equipo de geeks guatemaltecos expertos en tecnología, con experiencia docente y en la creación de experiencias educativas inmersivas.
        </p>
        <div className="bg-white/10 rounded-lg p-6 sm:p-8 backdrop-blur-sm inline-block w-full sm:w-auto">
          <p className="font-bold text-lg">Formados en integración de tecnología, Design Thinking y STEAM.</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
