import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/Ahmed For Facility Servies Logo.png';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  HeartHandshake
} from 'lucide-react';

export default function Footer() {
  const { t, lang, isRTL } = useLanguage();

  return (
    <footer className="bg-[#2B0915] text-[#FAF8F5] pt-16 pb-8 border-t-4 border-[#C5A059]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/10">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-lg bg-[#C5A059]/20 text-[#C5A059]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">
                {lang === 'en' ? 'Fully Vetted & Compliant' : 'كوادر موثوقة ومفحوصة قانونياً'}
              </h4>
              <p className="text-xs text-[#E8D5B0]/80 mt-1">
                {lang === 'en' ? 'Background verified personnel tailored for Qatari homes.' : 'تدقيق شامل للخلفيات بما يلائم حرمة وتقاليد البيوت القطرية.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-lg bg-[#C5A059]/20 text-[#C5A059]">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">
                {lang === 'en' ? 'Flexible Monthly Model' : 'عقود شهرية مريحة ومرنة'}
              </h4>
              <p className="text-xs text-[#E8D5B0]/80 mt-1">
                {lang === 'en' ? 'Reliable support month after month without rigid lock-in.' : 'دعم منزلي مستمر يمنح العائلة الاستقرار التام والمرونة.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-lg bg-[#C5A059]/20 text-[#C5A059]">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">
                {lang === 'en' ? 'Dedicated Family Support' : 'متابعة وإشراف عائلي مستمر'}
              </h4>
              <p className="text-xs text-[#E8D5B0]/80 mt-1">
                {lang === 'en' ? 'Dedicated consultant ensuring your complete satisfaction.' : 'مدير علاقات مخصص لضمان تلبية كافة تطلعات العائلة.'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <img src={logo} alt="Ahmed for Facility Services" className="w-14 h-14 md:w-16 md:h-16 object-contain flex-shrink-0" />
              <div>
                <span className="font-extrabold text-xl md:text-2xl text-white block tracking-tight">
                  Ahmed for Facility Services
                </span>
                <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block mt-0.5">
                  Facility & Household Staffing • Qatar
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E8D5B0]/80 leading-relaxed pr-4">
              {t.footer.aboutText}
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E8D5B0] inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-[#C5A059] flex-shrink-0" />
              <span className="font-semibold text-[#C5A059]">Doha, Qatar: </span>
              <span>4th Flr, HUB Business Center, Royal Plaza Mall, Al Sadd</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8D5B0]/80">
              <li>
                <Link to="/services#housemaids" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight size={13} className="text-[#C5A059]" />
                  {t.services.items.housemaids.title}
                </Link>
              </li>
              <li>
                <Link to="/services#house-cooks" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight size={13} className="text-[#C5A059]" />
                  {t.services.items.houseCooks.title}
                </Link>
              </li>
              <li>
                <Link to="/services#family-drivers" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight size={13} className="text-[#C5A059]" />
                  {t.services.items.familyDrivers.title}
                </Link>
              </li>
              <li>
                <Link to="/services#private-nurses" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight size={13} className="text-[#C5A059]" />
                  {t.services.items.privateNurses.title}
                </Link>
              </li>
              <li>
                <Link to="/services#caregivers" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight size={13} className="text-[#C5A059]" />
                  {t.services.items.caregivers.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Links */}
          <div>
            <h4 className="font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8D5B0]/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">{t.nav.aboutUs}</Link>
              </li>
              <li>
                <Link to="/monthly-staffing" className="hover:text-white transition-colors">{t.nav.monthlyStaffing}</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">{t.nav.howItWorks}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">{t.nav.contactUs}</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Support */}
          <div>
            <h4 className="font-bold text-base text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              {lang === 'en' ? 'Direct Contact' : 'الاتصال المباشر'}
            </h4>
            <div className="space-y-3 text-xs text-[#E8D5B0]">
              <a href="tel:+97474022250" className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors min-w-0">
                <Phone size={14} className="text-[#C5A059] flex-shrink-0" />
                <span className="truncate">+974 7402 2250</span>
              </a>
              <a href="https://wa.me/97474022250" target="_blank" rel="noreferrer" className="flex items-center gap-2 p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 transition-colors font-medium min-w-0">
                <FaWhatsapp size={15} className="flex-shrink-0" />
                <span className="truncate">+974 7402 2250</span>
              </a>
              <a href="mailto:info@ahmedforfacilityservices.com" className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors min-w-0">
                <Mail size={14} className="text-[#C5A059] flex-shrink-0" />
                <span className="truncate text-[10px]">info@ahmedforfacilityservices.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Compliance Note as per PDF Requirement */}
        <div className="py-4 text-[11px] text-[#E8D5B0]/60 text-center leading-relaxed border-b border-white/5">
          <p>{t.footer.complianceNote}</p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D5B0]/70">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
            <span>•</span>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">{t.footer.termsConditions}</Link>
            <span>•</span>
            <a
              href={import.meta.env.VITE_ADMIN_PORTAL_URL || 'http://localhost:5174'}
              target="_blank"
              rel="noreferrer"
              className="text-[#C5A059] hover:underline transition-colors flex items-center gap-1 font-semibold"
            >
              <ShieldCheck size={13} />
              <span>{lang === 'en' ? 'Admin Portal' : 'لوحة الإدارة'}</span>
            </a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="pt-4 pb-2 text-center border-t border-white/5 mt-4">
          <p className="text-[11px] text-[#E8D5B0]/50">
            {lang === 'en' ? 'Designed & Developed by' : 'تصميم وتطوير بواسطة'}{' '}
            <a
              href="https://www.worknestconnect.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#C5A059] hover:text-white hover:underline transition-colors font-semibold"
            >
              Worknest Connect
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
