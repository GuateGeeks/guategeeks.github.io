import React from 'react';
import { WhatsAppIcon } from './Icons';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/50230044972"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
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
    </a>
  );
};

export default FloatingWhatsApp;
