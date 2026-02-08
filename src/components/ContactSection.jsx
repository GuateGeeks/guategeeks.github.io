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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setStatus('success');
      setFormData({
        name: '', role: '', institution: '', whatsapp: '',
        email: '', location: '', interest: '', message: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const inputClasses = "glass-input";

  const fields = [
    { name: 'name', label: 'Nombre completo', type: 'text', span: 2, autoComplete: 'name', required: true },
    { name: 'role', label: 'Cargo', type: 'text', placeholder: 'Director, Coordinador...', required: true },
    { name: 'institution', label: 'Institucion Educativa', type: 'text', required: true },
    { name: 'whatsapp', label: 'WhatsApp', type: 'tel', autoComplete: 'tel', required: true },
    { name: 'email', label: 'Correo electronico', type: 'email', autoComplete: 'email', required: true },
    { name: 'location', label: 'Ubicacion (Municipio/Departamento)', type: 'text', span: 2, required: true },
  ];

  return (
    <section id="contacto" className="py-20 section-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-royal-violet">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Hablemos sobre el{' '}
            <span className="text-gradient-violet">futuro</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Agenda una asesoria gratuita o solicita una propuesta personalizada.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto glass-card">
          <div className="p-8 sm:p-10">
            {/* Success message */}
            {status === 'success' && (
              <div className="glass-panel rounded-2xl p-5 mb-6" style={{
                background: 'rgba(0, 211, 123, 0.1)',
                border: '1px solid rgba(0, 211, 123, 0.3)',
              }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0, 211, 123, 0.2)' }}
                  >
                    <svg className="w-5 h-5 text-emerald" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Mensaje enviado con exito</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">Nuestro equipo se comunicara contigo pronto.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6">
              {fields.map((field) => (
                <div key={field.name} className={field.span === 2 ? 'sm:col-span-2' : ''}>
                  <label 
                    htmlFor={field.name} 
                    className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      focusedField === field.name ? 'text-royal-violet' : 'text-[var(--text-primary)]'
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
                    focusedField === 'interest' ? 'text-royal-violet' : 'text-[var(--text-primary)]'
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
                  <option value="">Selecciona una opcion</option>
                  <option>Equipamiento (Robotica/Laboratorios)</option>
                  <option>Capacitacion Docente</option>
                  <option>Programa Anual Completo</option>
                  <option>Talleres Especificos</option>
                  <option>Asesoria General</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    focusedField === 'message' ? 'text-royal-violet' : 'text-[var(--text-primary)]'
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
                  disabled={status === 'submitting'}
                  className={`w-full btn-primary text-base py-4 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Enviar Solicitud
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
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
