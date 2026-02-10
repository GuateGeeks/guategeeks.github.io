import React, { useState } from 'react';
import { HiX, HiCheckCircle, HiXCircle, HiArrowRight } from 'react-icons/hi';
import { CgSpinner } from 'react-icons/cg';

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
      const res = await fetch('https://n8n-cloud.adawolfs.com/webhook/834a58dd-d0ae-4a02-93cb-4c91c2abcfa8', {
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
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-coral">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Hablemos de tu{' '}
            <span className="text-gradient-coral">laboratorio</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Cuéntanos tu contexto y te enviaremos una propuesta con equipo, currícula y capacitación.
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
                  <HiX className="w-4 h-4" aria-hidden="true" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(76, 175, 125, 0.2)' }}
                  >
                    <HiCheckCircle className="w-5 h-5 text-success" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Mensaje enviado con éxito</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">Te contactaremos pronto por WhatsApp o correo.</p>
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
                  <HiX className="w-4 h-4" aria-hidden="true" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(224, 85, 85, 0.2)' }}
                  >
                    <HiXCircle className="w-5 h-5 text-error" aria-hidden="true" />
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
                  <option>Laboratorios & Equipamiento (Robótica, 3D, Makerspace)</option>
                  <option>Formación & Empoderamiento Docente</option>
                  <option>Ecosistema & Cultura Digital (Talleres, eventos)</option>
                  <option>Asesoría General / Otro</option>
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
                      <CgSpinner className="animate-spin h-5 w-5 text-white" aria-hidden="true" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Enviar solicitud
                      <HiArrowRight className="w-5 h-5" aria-hidden="true" />
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
