import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import { staffProfiles } from '../data/staffData';
import { 
  Filter, 
  Search, 
  Star, 
  CheckCircle, 
  Globe, 
  ShieldCheck, 
  Briefcase, 
  Calendar,
  X,
  PhoneCall,
  Sparkles
} from 'lucide-react';

export default function OurProfessionals() {
  const { t, lang, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalStaff, setActiveModalStaff] = useState(null);

  const filteredStaff = useMemo(() => {
    return staffProfiles.filter((staff) => {
      const matchService = selectedService === 'all' || staff.serviceType === selectedService;
      
      const matchLanguage = selectedLanguage === 'all' || 
        staff.languages.some(l => l.toLowerCase().includes(selectedLanguage.toLowerCase()));

      const matchQuery = searchQuery === '' || 
        staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        staff.serviceTitleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        staff.serviceTitleAr.includes(searchQuery) ||
        staff.experienceArea.toLowerCase().includes(searchQuery.toLowerCase()) ||
        staff.experienceAreaAr.includes(searchQuery);

      return matchService && matchLanguage && matchQuery;
    });
  }, [selectedService, selectedLanguage, searchQuery]);

  return (
    <PageTransition>
      <div className="space-y-10 py-4">

        {/* HERO SECTION */}
        <section className="relative py-10 bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] border-b border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wider uppercase">
              {lang === 'en' ? 'Verified Talent Directory' : 'دليل الكوادر والمهنيين المعتمدين'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#380C1B] max-w-4xl mx-auto leading-tight">
              {t.professionals.heroTitle}
            </h1>
            <p className="text-xs sm:text-base text-[#665E5E] max-w-2xl mx-auto leading-relaxed">
              {t.professionals.heroDesc}
            </p>
          </div>
        </section>

        {/* SEARCH & FILTER CONTROLS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-3xl bg-white border border-[#E5DBCE] shadow-md space-y-6">
            
            {/* Search Input */}
            <div className="relative">
              <Search size={18} className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} text-[#8A8181]`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'en' ? 'Search by skill, title, keyword (e.g. Cooking, Majlis, Driver, Childcare)...' : 'ابحث بالمهارة، التخصص، أو الكلمات الدلالية (مثل: طبخ، مجالس، سائق)...'}
                className={`w-full py-3.5 ${isRTL ? 'pr-11 pl-4' : 'pl-11 pr-4'} rounded-2xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] placeholder-[#8A8181] focus:outline-none focus:border-[#5B132B] focus:ring-2 focus:ring-[#5B132B]/20 transition-all`}
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#F0EAE1]">
              
              {/* Service Categories */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#380C1B] mr-2">
                  {t.professionals.filterService}:
                </span>
                
                {[
                  { id: 'all', label: t.professionals.all },
                  { id: 'housemaids', label: t.services.items.housemaids.title },
                  { id: 'house-cooks', label: t.services.items.houseCooks.title },
                  { id: 'family-drivers', label: t.services.items.familyDrivers.title },
                  { id: 'private-nurses', label: t.services.items.privateNurses.title },
                  { id: 'caregivers', label: t.services.items.caregivers.title },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedService(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      selectedService === tab.id
                        ? 'bg-[#5B132B] text-white shadow-sm'
                        : 'bg-[#FAF8F5] text-[#524848] hover:bg-[#EBE5DA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Language Filter */}
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[#C5A059]" />
                <span className="text-xs font-bold text-[#380C1B]">{t.professionals.filterLang}:</span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-[#FAF8F5] border border-[#E5DBCE] text-xs font-medium rounded-lg px-2.5 py-1.5 text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                >
                  <option value="all">{lang === 'en' ? 'All Languages' : 'جميع اللغات'}</option>
                  <option value="arabic">{lang === 'en' ? 'Arabic Speaking' : 'متحدث باللغة العربية'}</option>
                  <option value="english">{lang === 'en' ? 'English Speaking' : 'متحدث باللغة الإنجليزية'}</option>
                </select>
              </div>

            </div>
          </div>
        </section>

        {/* STAFF GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStaff.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-[#E5DBCE] space-y-4">
              <p className="text-base text-[#665E5E]">
                {lang === 'en' ? 'No profiles found matching your current filters.' : 'لم يتم العثور على كوادر مطابقة لخيارات البحث المحددة.'}
              </p>
              <button
                onClick={() => { setSelectedService('all'); setSelectedLanguage('all'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-xl bg-[#5B132B] text-white text-xs font-bold"
              >
                {lang === 'en' ? 'Reset Filters' : 'إعادة تعيين الفلاتر'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStaff.map((staff) => (
                <div
                  key={staff.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E5DBCE] hover:border-[#C5A059] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Image & Badge */}
                    <div className="relative h-60 overflow-hidden">
                      <SafeImage
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                      
                      {/* ID Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#380C1B]/90 text-[#E8D5B0] text-xs font-bold border border-[#C5A059]/40">
                        {staff.id}
                      </span>

                      {/* Status */}
                      <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-700/90 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-ping" />
                        {lang === 'en' ? staff.status : staff.statusAr}
                      </span>

                      {/* Name & Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold">{staff.name}</h3>
                            <p className="text-xs text-[#E8D5B0] font-semibold">
                              {lang === 'en' ? staff.serviceTitleEn : staff.serviceTitleAr}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-amber-300">
                            <Star size={12} fill="currentColor" />
                            <span>{staff.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Body Info */}
                    <div className="p-6 space-y-4">
                      
                      {/* Key Meta */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE]">
                          <span className="text-[10px] text-[#8A8181] block uppercase">{lang === 'en' ? 'Experience:' : 'الخبرة:'}</span>
                          <span className="font-bold text-[#380C1B]">{lang === 'en' ? staff.experienceYears : staff.experienceYearsAr}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE]">
                          <span className="text-[10px] text-[#8A8181] block uppercase">{lang === 'en' ? 'Availability:' : 'التوفر:'}</span>
                          <span className="font-bold text-[#380C1B] truncate block">{lang === 'en' ? staff.availability : staff.availabilityAr}</span>
                        </div>
                      </div>

                      {/* Focus Area */}
                      <div>
                        <span className="text-[10px] font-bold text-[#8A8181] block uppercase tracking-wider mb-1">
                          {lang === 'en' ? 'Specialization & Background:' : 'مجال التخصص والخبرة:'}
                        </span>
                        <p className="text-xs text-[#524848] line-clamp-2">
                          {lang === 'en' ? staff.experienceArea : staff.experienceAreaAr}
                        </p>
                      </div>

                      {/* Languages */}
                      <div className="flex items-center gap-2 text-xs text-[#665E5E]">
                        <Globe size={13} className="text-[#C5A059]" />
                        <span className="font-medium">
                          {lang === 'en' ? staff.languages.join(' • ') : staff.languagesAr.join(' • ')}
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setActiveModalStaff(staff)}
                      className="py-2.5 px-3 rounded-xl bg-[#FAF8F5] hover:bg-[#EBE5DA] text-[#380C1B] font-bold text-xs transition-colors border border-[#E5DBCE]"
                    >
                      {t.professionals.viewProfile}
                    </button>
                    <Link
                      to={`/contact?staff=${staff.id}&type=${staff.serviceType}`}
                      className="py-2.5 px-3 rounded-xl bg-[#5B132B] hover:bg-[#380C1B] text-white font-bold text-xs text-center transition-colors shadow-sm"
                    >
                      {t.professionals.requestThis}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* PRIVACY & COMPLIANCE RULE BOX (Mandatory per PDF) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-[#E5DBCE] shadow-sm flex items-start gap-4">
            <ShieldCheck size={24} className="text-[#5B132B] flex-shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#524848] leading-relaxed">
              <strong className="text-[#380C1B] block">
                {lang === 'en' ? 'Privacy & Official Profiling Policy' : 'سياسة الخصوصية وتوثيق الملفات المهنية'}
              </strong>
              <p>{t.professionals.privacyNotice}</p>
            </div>
          </div>
        </section>

        {/* STAFF DETAIL MODAL */}
        {activeModalStaff && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E5DBCE] relative">
              <button
                onClick={() => setActiveModalStaff(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-[#380C1B] flex items-center justify-center hover:bg-[#5B132B] hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={activeModalStaff.image}
                  alt={activeModalStaff.name}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#C5A059] text-[#380C1B] font-bold uppercase">
                    {activeModalStaff.id}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{activeModalStaff.name}</h3>
                  <p className="text-xs text-[#E8D5B0]">
                    {lang === 'en' ? activeModalStaff.serviceTitleEn : activeModalStaff.serviceTitleAr}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE]">
                    <span className="text-[#8A8181] block">{lang === 'en' ? 'Origin / Background:' : 'الجنسية / الخبرة:'}</span>
                    <span className="font-bold text-[#380C1B]">{lang === 'en' ? activeModalStaff.nationality : activeModalStaff.nationalityAr}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE]">
                    <span className="text-[#8A8181] block">{lang === 'en' ? 'Experience Total:' : 'إجمالي سنوات الخبرة:'}</span>
                    <span className="font-bold text-[#380C1B]">{lang === 'en' ? activeModalStaff.experienceYears : activeModalStaff.experienceYearsAr}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#380C1B] uppercase mb-1">
                    {lang === 'en' ? 'Core Capabilities & Skills:' : 'أبرز المهارات المعتمدة:'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {(lang === 'en' ? activeModalStaff.skills : activeModalStaff.skillsAr).map((sk, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E5DBCE] text-xs font-semibold text-[#5B132B]">
                        <CheckCircle2 size={12} className="text-[#C5A059]" />
                        <span>{sk}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#380C1B] uppercase mb-1">
                    {lang === 'en' ? 'Detailed Experience Overview:' : 'نبذة عن الخبرة السابقة:'}
                  </h4>
                  <p className="text-xs text-[#524848] leading-relaxed">
                    {lang === 'en' ? activeModalStaff.experienceArea : activeModalStaff.experienceAreaAr}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border-t border-[#E5DBCE] flex justify-end gap-3">
                <button
                  onClick={() => setActiveModalStaff(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#524848] hover:bg-[#EBE5DA]"
                >
                  {lang === 'en' ? 'Close' : 'إغلاق'}
                </button>
                <Link
                  to={`/contact?staff=${activeModalStaff.id}&type=${activeModalStaff.serviceType}`}
                  onClick={() => setActiveModalStaff(null)}
                  className="px-5 py-2 rounded-xl bg-[#5B132B] text-white font-bold text-xs shadow-md hover:bg-[#380C1B]"
                >
                  {t.professionals.requestThis}
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
}
