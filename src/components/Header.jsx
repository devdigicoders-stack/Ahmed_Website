import React, { useState, useEffect } from 'react';
import logo from '../assets/Ahmed For Facility Servies Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  Globe, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export default function Header() {
  const { lang, toggleLanguage, t, isRTL } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.aboutUs, path: '/about' },
    { 
      name: t.nav.services, 
      path: '/services', 
      hasDropdown: true,
      subItems: [
        { name: t.services.items.housemaids.title, path: '/services#housemaids' },
        { name: t.services.items.houseCooks.title, path: '/services#house-cooks' },
        { name: t.services.items.familyDrivers.title, path: '/services#family-drivers' },
        { name: t.services.items.privateNurses.title, path: '/services#private-nurses' },
        { name: t.services.items.caregivers.title, path: '/services#caregivers' },
      ] 
    },
    { name: t.nav.monthlyStaffing, path: '/monthly-staffing' },
    { name: t.nav.ourProfessionals, path: '/our-professionals' },
    { name: t.nav.howItWorks, path: '/how-it-works' },
    { name: t.nav.contactUs, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Notification / Info Bar */}
      <div className="bg-[#380C1B] text-[#E8D5B0] text-xs py-1.5 px-4 sm:px-8 border-b border-[#5B132B]/40">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C5A059] text-[#380C1B] tracking-wide flex-shrink-0">
              <ShieldCheck size={11} />
              <span>QATAR</span>
            </span>
            <span className="opacity-95 font-medium truncate text-[11px] sm:text-xs">
              {lang === 'en' 
                ? 'Verified & Dedicated Household Staffing in Doha and across Qatar' 
                : 'كوادر منزلية معتمدة وموثوقة للعائلات في الدوحة وكافة أنحاء قطر'}
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] flex-shrink-0">
            <a 
              href="tel:+97474022250" 
              className="hover:text-white flex items-center gap-1.5 transition-colors font-semibold"
            >
              <Phone size={12} className="text-[#C5A059]" />
              <span>+974 7402 2250</span>
            </a>
            <span className="text-[#5B132B] hidden sm:inline">|</span>
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1.5 font-bold text-[#C5A059] hover:text-white px-2 py-0.5 rounded border border-[#C5A059]/40 hover:border-[#C5A059] transition-all cursor-pointer"
            >
              <Globe size={13} />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-md py-2.5' 
            : 'bg-[#FDFBF7] py-3.5 border-b border-[#EBE5DA]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* 1. Left: Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <img
              src={logo}
              alt="Ahmed for Facility Services Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-[#380C1B] tracking-tight leading-tight group-hover:text-[#5B132B] transition-colors whitespace-nowrap">
                Ahmed for Facility Services
              </span>
              <span className="text-[10px] font-bold tracking-wider text-[#C5A059] uppercase whitespace-nowrap">
                Facility Services • Qatar
              </span>
            </div>
          </Link>

          {/* 2. Center: Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-1 px-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.path} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs xl:text-[13px] font-bold tracking-tight whitespace-nowrap transition-all ${
                        isActive || location.pathname.startsWith('/services')
                          ? 'text-[#5B132B] bg-[#5B132B]/5 font-extrabold'
                          : 'text-[#4A4040] hover:text-[#5B132B] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200 text-[#C5A059]" />
                    </Link>

                    {/* Submenu Dropdown */}
                    {servicesDropdown && (
                      <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-1 w-56 bg-white rounded-2xl shadow-2xl border border-[#EBE5DA] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-2 text-xs text-[#380C1B] hover:bg-[#FAF8F5] hover:text-[#5B132B] font-semibold transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-bold tracking-tight whitespace-nowrap transition-all relative ${
                    isActive 
                      ? 'text-[#5B132B] bg-[#5B132B]/5 font-extrabold' 
                      : 'text-[#4A4040] hover:text-[#5B132B] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#D5C7B3] hover:border-[#5B132B] text-xs font-bold text-[#380C1B] hover:bg-[#FAF8F5] transition-all whitespace-nowrap cursor-pointer shadow-sm"
              title="Switch Language"
            >
              <Globe size={13} className="text-[#C5A059]" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Request Staff CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#5B132B] to-[#7E203E] text-white text-xs font-bold shadow-md hover:shadow-lg hover:from-[#380C1B] hover:to-[#5B132B] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>{t.nav.requestStaff}</span>
              <Sparkles size={13} className="text-[#E8D5B0]" />
            </Link>
          </div>

          {/* Mobile Menu Trigger & AR Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-[#D5C7B3] text-xs font-bold text-[#380C1B] bg-white"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-[#380C1B] hover:bg-[#5B132B] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#EBE5DA] px-4 pt-3 pb-6 space-y-1.5 animate-in slide-in-from-top-3 duration-200 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'bg-[#5B132B] text-white'
                    : 'text-[#380C1B] hover:bg-[#FAF8F5]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-3 border-t border-[#EBE5DA]">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#5B132B] to-[#7E203E] text-white font-bold shadow-md flex items-center justify-center gap-2"
              >
                <span>{t.nav.requestStaff}</span>
                <Sparkles size={15} className="text-[#E8D5B0]" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
