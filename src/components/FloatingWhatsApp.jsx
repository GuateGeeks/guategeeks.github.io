import React from 'react';
import { WhatsAppIcon } from './Icons';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/50230044972"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chatear por WhatsApp"
    >
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-2xl animate-ping opacity-20" style={{
        background: '#25D366',
        animationDuration: '3s',
      }} />
      
      {/* Button */}
      <div className="relative p-4 rounded-2xl text-white transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        <WhatsAppIcon />
      </div>

      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-xl text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
        }}
      >
        Chatear por WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
