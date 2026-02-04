import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    institution: '',
    whatsapp: '',
    email: '',
    location: '',
    interest: 'Selecciona una opción',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        role: '',
        institution: '',
        whatsapp: '',
        email: '',
        location: '',
        interest: 'Selecciona una opción',
        message: ''
      });
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-16 bg-[var(--bg-secondary)] backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-base text-royal-violet font-semibold tracking-wide uppercase">Contacto</h2>
            <p className="mt-2 text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl">
                Hablemos sobre el futuro de tu institución
            </p>
            <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                Agenda una asesoría gratuita o solicita una propuesta personalizada.
            </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[var(--bg-card)] rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            {status === 'success' ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                      ¡Mensaje enviado con éxito!
                    </h3>
                    <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                      <p>Gracias por contactarnos. Nuestro equipo se comunicará contigo pronto.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)]">Nombre completo</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name" 
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-strong-gray-600 shadow-sm focus:border-royal-violet focus:ring-royal-violet bg-white dark:bg-strong-gray-800 text-[var(--text-primary)] py-3 px-4" 
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-[var(--text-primary)]">Cargo</label>
                <input 
                  type="text" 
                  name="role" 
                  id="role" 
                  required
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Director, Coordinador..." 
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-strong-gray-600 shadow-sm focus:border-royal-violet focus:ring-royal-violet bg-white dark:bg-strong-gray-800 text-[var(--text-primary)] py-3 px-4" 
                />
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-[var(--text-primary)]">Institución Educativa</label>
                <input 
                  type="text" 
                  name="institution" 
                  id="institution" 
                  required
                  value={formData.institution}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-strong-gray-600 shadow-sm focus:border-royal-violet focus:ring-royal-violet bg-white dark:bg-strong-gray-800 text-[var(--text-primary)] py-3 px-4" 
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-[var(--text-primary)]">WhatsApp</label>
                <input 
                  type="tel" 
                  name="whatsapp" 
                  id="whatsapp" 
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  autoComplete="tel" 
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-strong-gray-600 shadow-sm focus:border-royal-violet focus:ring-royal-violet bg-white dark:bg-strong-gray-800 text-[var(--text-primary)] py-3 px-4" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)]">Correo electrónico</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-strong-gray-600 shadow-sm focus:border-royal-violet focus:ring-royal-violet bg-white dark:bg-strong-gray-800 text-[var(--text-primary)] py-3 px-4" 
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-[var(--text-primary)]">Ubicación (Municipio/Departamento)</label>
                <input 
                  type="text" 
                  name="location" 
                  id="location" 
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-strong-gray-600 shadow-sm focus:border-royal-violet focus:ring-royal-violet bg-white dark:bg-strong-gray-800 text-[var(--text-primary)] py-3 px-4" 
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="interest" className="block text-sm font-medium text-[var(--text-primary)]">Me interesa principalmente</label>
                <select 
                  id="interest" 
                  name="interest" 
                  value={formData.interest}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-strong-gray-600 shadow-sm focus:border-royal-violet focus:ring-royal-violet bg-white dark:bg-strong-gray-800 text-[var(--text-primary)] py-3 px-4"
                >
                  <option>Selecciona una opción</option>
                  <option>Equipamiento (Robótica/Laboratorios)</option>
                  <option>Capacitación Docente</option>
                  <option>Programa Anual Completo</option>
                  <option>Talleres Específicos</option>
                  <option>Asesoría General</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)]">Mensaje adicional</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-strong-gray-600 shadow-sm focus:border-royal-violet focus:ring-royal-violet bg-white dark:bg-strong-gray-800 text-[var(--text-primary)] py-3 px-4"
                ></textarea>
              </div>

              <div className="sm:col-span-2">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full btn-primary text-lg py-4 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 flex justify-center items-center ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : 'Enviar Solicitud'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
