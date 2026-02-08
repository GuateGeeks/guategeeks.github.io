import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    institution: '',
    whatsapp: '',
    email: '',
    location: '',
    interest: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const isSubmitting = status === 'submitting';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const dismissStatus = () => setStatus('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://n8n.adawolfs.com/webhook/6cffade5-d1a0-4350-9d56-070530348b3e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFormData({
        name: '', role: '', institution: '', whatsapp: '',
        email: '', location: '', interest: '', message: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = "glass-input";

  const fields = [
    { name: 'name', label: 'Nombre completo', type: 'text', span: 2, autoComplete: 'name', required: true },
    { name: 'role', label: 'Cargo', type: 'text', placeholder: 'Director, Coordinador...', required: true },
    { name: 'institution', label: 'Institución Educativa', type: 'text', required: true },
    { name: 'whatsapp', label: 'WhatsApp', type: 'tel', autoComplete: 'tel', required: true },
    { name: 'email', label: 'Correo electrónico', type: 'email', autoComplete: 'email', required: true },
    { name: 'location', label: 'Ubicación (Municipio/Departamento)', type: 'text', span: 2, required: true },
  ];

  return (
    <section id="contacto" className="py-20 section-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-coral">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Hablemos sobre el{' '}
            <span className="text-gradient-coral">futuro</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Agenda una asesoría gratuita o solicita una propuesta personalizada.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto glass-card">
          <div className="p-8 sm:p-10">
            {/* Success message */}
            {status === 'success' && (
              <div role="alert" aria-live="assertive" className="glass-panel rounded-2xl p-5 mb-6 relative" style={{
                background: 'rgba(76, 175, 125, 0.1)',
                border: '1px solid rgba(76, 175, 125, 0.3)',
              }}>
                <button
                  onClick={dismissStatus}
                  className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Cerrar mensaje"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(76, 175, 125, 0.2)' }}
                  >
                    <svg className="w-5 h-5 text-success" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Mensaje enviado con éxito</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">Nuestro equipo se comunicará contigo pronto.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error message */}
            {status === 'error' && (
              <div role="alert" aria-live="assertive" className="glass-panel rounded-2xl p-5 mb-6 relative" style={{
                background: 'rgba(224, 85, 85, 0.1)',
                border: '1px solid rgba(224, 85, 85, 0.3)',
              }}>
                <button
                  onClick={dismissStatus}
                  className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Cerrar mensaje"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(224, 85, 85, 0.2)' }}
                  >
                    <svg className="w-5 h-5 text-error" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Error al enviar el mensaje</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">Por favor intenta de nuevo o contáctanos por WhatsApp.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <fieldset disabled={isSubmitting} className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6">
              {fields.map((field) => (
                <div key={field.name} className={field.span === 2 ? 'sm:col-span-2' : ''}>
                  <label 
                    htmlFor={field.name} 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      focusedField === field.name ? 'text-coral' : 'text-[var(--text-primary)]'
                    }`}
                  >
                    {field.label}
                  </label>
                  <input 
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    required={field.required}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    className={inputClasses}
                  />
                </div>
              ))}

              {/* Interest Select */}
              <div className="sm:col-span-2">
                <label 
                  htmlFor="interest" 
                  className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    focusedField === 'interest' ? 'text-coral' : 'text-[var(--text-primary)]'
                  }`}
                >
                  Me interesa principalmente
                </label>
                <select 
                  id="interest" 
                  name="interest" 
                  value={formData.interest}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('interest')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Equipamiento (Robótica/Laboratorios)</option>
                  <option>Capacitación Docente</option>
                  <option>Programa Anual Completo</option>
                  <option>Talleres Específicos</option>
                  <option>Asesoría General</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    focusedField === 'message' ? 'text-coral' : 'text-[var(--text-primary)]'
                  }`}
                >
                  Mensaje adicional
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses}
                  style={{ resize: 'none' }}
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full btn-primary text-base py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Enviar Solicitud
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
