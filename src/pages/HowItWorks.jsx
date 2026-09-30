import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import { 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  PhoneCall, 
  MessageSquare,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function HowItWorks() {
  const { t, lang, isRTL } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <PageTransition>
      <div className="space-y-12 py-4">

        {/* HERO SECTION */}
        <section className="relative py-10 bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] border-b border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wider uppercase">
              {lang === 'en' ? 'Transparent & Simple Process' : 'إجراءات واضحة وشفافة'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#380C1B] max-w-4xl mx-auto leading-tight">
              {t.howItWorks.title}
            </h1>
            <p className="text-xs sm:text-base text-[#665E5E] max-w-2xl mx-auto leading-relaxed">
              {t.howItWorks.subtitle}
            </p>
          </div>
        </section>

        {/* 6-STEP PROCESS TIMELINE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-[#C5A059]/20 text-[#9E7D3B] text-xs font-bold uppercase tracking-wider">
              {lang === 'en' ? 'End-to-End Workflow' : 'مراحل التوظيف خطوة بخطوة'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B]">
              {lang === 'en' ? 'Step-by-Step Experience' : 'المراحل الست لتوفير الدعم المنزلي'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.howItWorks.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5DBCE] shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5B132B] to-[#380C1B] text-[#E8D5B0] flex items-center justify-center font-bold text-xl shadow-md">
                    {step.num}
                  </div>
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    {lang === 'en' ? `Phase ${idx + 1}` : `المرحلة ${idx + 1}`}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#380C1B] group-hover:text-[#5B132B] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#665E5E] leading-relaxed">
                  {step.desc}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#5B132B]">
                  <CheckCircle2 size={14} className="text-[#C5A059]" />
                  <span>{lang === 'en' ? 'Guaranteed Qatar Standard' : 'مطابق لأعلى المعايير في قطر'}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION & IMAGE) */}
        <section className="bg-[#F7F3EB] py-12 border-y border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-10">
              <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold uppercase tracking-wider">
                {t.faqs.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B]">
                {t.faqs.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#665E5E]">
                {t.faqs.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Photo Showcase Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white h-[420px] relative flex flex-col justify-between">
                  <div className="relative flex-grow overflow-hidden">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=85"
                      alt="Dedicated Household Staffing Support in Qatar"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B0915]/90 via-[#2B0915]/30 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#5B132B] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        {lang === 'en' ? 'Qatar Standards' : 'معايير الجودة القطرية'}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#C5A059] text-[#2B0915] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        100% Vetted
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-[#380C1B] shadow-lg border border-[#E5DBCE]/80" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                      <span className="text-[10px] font-extrabold text-[#5B132B] uppercase tracking-wider block mb-0.5">
                        {lang === 'en' ? 'Family Staffing Advisors' : 'مستشارو التوظيف المنزلي المعتمدون'}
                      </span>
                      <h4 className="text-sm font-bold text-[#380C1B] leading-snug">
                        {lang === 'en' ? 'Clear Contracts & Continuous Support' : 'عقود واضحة ومتابعة مستمرة لراحة بالك'}
                      </h4>
                      <p className="text-[11px] text-[#665E5E] mt-1 leading-relaxed">
                        {lang === 'en' ? 'Flexible monthly plans, thoroughly verified personnel, and complete peace of mind for Qatari households.' : 'خطط شهرية مرنة وكوادر موثوقة تلائم خصوصية وتقاليد المجتمع القطري.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Container Column */}
              <div className="lg:col-span-7 space-y-3">
                {t.faqs.items.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-white border border-[#E5DBCE] overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                        style={{ textAlign: isRTL ? 'right' : 'left' }}
                      >
                        <span className="font-bold text-xs sm:text-sm text-[#380C1B]">
                          {faq.q}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E5DBCE] flex items-center justify-center text-[#5B132B] flex-shrink-0">
                          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-[#524848] leading-relaxed border-t border-[#F0EAE1] bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* STILL HAVE QUESTIONS CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5DBCE] shadow-lg text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B]">
              {lang === 'en' ? 'Have a Specific Question About Household Staffing?' : 'هل لديك استفسار محدد حول متطلبات عائلتك؟'}
            </h3>
            <p className="text-xs sm:text-sm text-[#665E5E] max-w-xl mx-auto">
              {lang === 'en' 
                ? 'Our customer support and family staffing consultants are available to provide full assistance.' 
                : 'فريق خدمة العملاء ومستشارو التوظيف العائلي جاهزون لتقديم المشورة والإجابة عن كافة أسئلتكم.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-[#5B132B] hover:bg-[#380C1B] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>{t.nav.contactUs}</span>
                <ArrowIcon size={16} />
              </Link>
              <a
                href="https://wa.me/97474022250"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-[#1ebe5d] transition-all flex items-center gap-2"
              >
                <MessageSquare size={16} />
                <span>{t.contact.whatsappBox.btn}</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
