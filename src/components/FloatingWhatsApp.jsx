import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const { lang, isRTL } = useLanguage();
  const defaultText = lang === 'en' 
    ? 'Hello, I would like to inquire about household staffing services in Qatar.' 
    : 'مرحباً، أود الاستفسار عن خدمات التوظيف المنزلي والكوادر في قطر.';
  
  const whatsappUrl = `https://wa.me/97474022250?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className={`hidden md:flex fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 items-center group`}>
      {/* Tooltip Label */}
      <span className={`${isRTL ? 'ml-3' : 'mr-3'} px-3.5 py-1.5 bg-[#380C1B] text-white text-xs font-semibold rounded-full shadow-lg border border-[#C5A059]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap`}>
        {lang === 'en' ? 'Chat on WhatsApp with Us' : 'تواصل معنا مباشرة عبر واتساب'}
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Direct Chat"
        className="w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white/70 hover:ring-[#25D366]/50 animate-bounce hover:animate-none cursor-pointer"
      >
        <FaWhatsapp size={32} className="text-white drop-shadow-md" />
      </a>
    </div>
  );
}
