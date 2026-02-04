import React from 'react';
import { WhatsAppIcon } from './Icons';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/50230044972"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default FloatingWhatsApp;
