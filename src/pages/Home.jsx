import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Users, 
  Clock, 
  Star, 
  CheckCircle,
  CheckCircle2, 
  PhoneCall, 
  MessageSquare,
  Home as HomeIcon,
  ChefHat,
  Car,
  HeartPulse,
  Award
} from 'lucide-react';

export default function Home() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const servicesData = [
    {
      key: 'housemaids',
      item: t.services.items.housemaids,
      icon: HomeIcon,
      badge: lang === 'en' ? 'Top Requested' : 'الأكثر طلباً',
      color: 'from-amber-600/20 to-burgundy-900/10'
    },
    {
      key: 'houseCooks',
      item: t.services.items.houseCooks,
      icon: ChefHat,
      badge: lang === 'en' ? 'Gourmet Support' : 'طهي فاخر',
      color: 'from-rose-600/20 to-burgundy-900/10'
    },
    {
      key: 'familyDrivers',
      item: t.services.items.familyDrivers,
      icon: Car,
      badge: lang === 'en' ? 'Qatar Licensed' : 'رخصة قطرية',
      color: 'from-blue-600/20 to-burgundy-900/10'
    },
    {
      key: 'privateNurses',
      item: t.services.items.privateNurses,
      icon: HeartPulse,
      badge: lang === 'en' ? 'Licensed RN' : 'تمريض مرخص',
      color: 'from-teal-600/20 to-burgundy-900/10'
    },
    {
      key: 'caregivers',
      item: t.services.items.caregivers,
      icon: Award,
      badge: lang === 'en' ? 'Elderly Care' : 'رعاية كبار السن',
      color: 'from-emerald-600/20 to-burgundy-900/10'
    }
  ];

  return (
    <PageTransition>
      <div className="space-y-12 sm:space-y-16 overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] flex items-center justify-center pt-6 pb-10 bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5]">
          {/* Subtle decorative background pattern */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Hero Content */}
              <motion.div 
                initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Qatar Family Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B132B]/10 border border-[#5B132B]/20 text-[#5B132B] text-xs font-bold tracking-wide uppercase">
                  <Sparkles size={14} className="text-[#C5A059]" />
                  <span>{t.hero.tag}</span>
                </div>

                {/* Hero Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#380C1B] leading-[1.15] tracking-tight">
                  {lang === 'en' ? (
                    <>
                      Trusted <span className="text-[#5B132B] italic font-serif">Home & Family</span> Staffing in Qatar
                    </>
                  ) : (
                    <>
                      خدمات <span className="text-[#5B132B] font-serif">التوظيف المنزلي والعائلي</span> الموثوقة في قطر
                    </>
                  )}
                </h1>

                {/* Brand Positioning Tagline */}
                <p className="text-base sm:text-lg font-semibold text-[#C5A059]">
                  {t.positioning}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#524848] leading-relaxed max-w-2xl">
                  {t.hero.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    to="/monthly-staffing"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#5B132B] to-[#7E203E] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:from-[#380C1B] hover:to-[#5B132B] transition-all transform hover:-translate-y-1"
                  >
                    <span>{t.hero.ctaPrimary}</span>
                    <ArrowIcon size={18} className="text-[#E8D5B0]" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-[#380C1B] font-bold text-sm sm:text-base border border-[#D5C7B3] hover:border-[#5B132B] shadow-sm hover:bg-[#F7F3EB] transition-all transform hover:-translate-y-1"
                  >
                    <PhoneCall size={18} className="text-[#C5A059]" />
                    <span>{t.hero.ctaSecondary}</span>
                  </Link>
                </div>

                {/* Highlights / Trust Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E5DBCE]">
                  <div className="p-2.5 rounded-lg bg-white/80 border border-[#E5DBCE] text-center">
                    <span className="block font-bold text-base text-[#5B132B]">{t.hero.statsYears}</span>
                    <span className="text-[11px] text-[#665E5E]">{lang === 'en' ? 'Excellence' : 'خبرة وعراقة'}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/80 border border-[#E5DBCE] text-center">
                    <span className="block font-bold text-base text-[#5B132B]">{t.hero.statsPlaced}</span>
                    <span className="text-[11px] text-[#665E5E]">{lang === 'en' ? 'Served' : 'عائلة راضية'}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/80 border border-[#E5DBCE] text-center">
                    <span className="block font-bold text-base text-[#5B132B]">{t.hero.statsVetted}</span>
                    <span className="text-[11px] text-[#665E5E]">{lang === 'en' ? 'Legal Check' : 'فحص شامل'}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/80 border border-[#E5DBCE] text-center">
                    <span className="block font-bold text-base text-[#5B132B]">{t.hero.statsSatisfaction}</span>
                    <span className="text-[11px] text-[#665E5E]">{lang === 'en' ? 'Trust Rate' : 'نسبة الرضا'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Hero Visual Showcase */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                {/* Main Hero Card Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[420px] sm:h-[460px]">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80"
                    alt="Luxury Qatari Residence Staffing"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0915]/90 via-[#2B0915]/30 to-transparent pointer-events-none" />
                  
                  {/* Floating Trust Card Top */}
                  <div className="absolute top-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#5B132B] text-white flex items-center justify-center font-bold">
                        <ShieldCheck size={22} className="text-[#E8D5B0]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#380C1B]">
                          {lang === 'en' ? 'Vetted Qatari Household Staff' : 'عمالة منزلية معتمدة للبيوت القطرية'}
                        </h4>
                        <p className="text-[10px] text-[#665E5E]">
                          {lang === 'en' ? 'Monthly flexible contracts' : 'عقود شهرية مرنة وموثوقة'}
                        </p>
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* Floating Bottom Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#380C1B]/95 backdrop-blur-md border border-[#C5A059]/30 text-white">
                    <p className="text-xs text-[#E8D5B0] font-semibold mb-1 flex items-center gap-1.5">
                      <Sparkles size={13} className="text-[#C5A059]" />
                      <span>{lang === 'en' ? 'Complete Peace of Mind' : 'راحة بال تامة واطمئنان'}</span>
                    </p>
                    <p className="text-xs text-white/90 leading-relaxed">
                      {lang === 'en' 
                        ? 'From private housemaids & cooks to drivers & private nurses, we ensure the perfect match for your family.' 
                        : 'من عاملات المنازل والطهاة إلى السائقين والممرضات، نضمن لك التوافق التام مع عائلتك.'}
                    </p>
                  </div>
                </div>

                {/* Decorative Badge */}
                <div className={`absolute -bottom-6 ${isRTL ? '-left-4' : '-right-4'} p-4 bg-[#C5A059] text-[#380C1B] rounded-2xl shadow-xl border-2 border-white flex items-center gap-3 animate-pulse`}>
                  <Award size={28} />
                  <div>
                    <span className="font-extrabold text-sm block leading-none">100% Verified</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Qatar Standard</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* INTRODUCTION PHILOSOPHY SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E5DBCE] shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#5B132B]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E5DBCE] pb-5 lg:pb-0 lg:pr-6">
                <span className="px-3.5 py-1 rounded-full bg-[#C5A059]/15 text-[#9E7D3B] text-xs font-bold uppercase tracking-wider">
                  {t.intro.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#380C1B] mt-3 leading-snug">
                  {t.intro.title}
                </h2>
                <div className="w-12 h-1 bg-[#5B132B] rounded-full mt-3" />
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="space-y-3 text-xs sm:text-sm text-[#524848] leading-relaxed">
                  <p className="font-semibold text-[#2B0915]">
                    {t.intro.p1}
                  </p>
                  <p>
                    {t.intro.p2}
                  </p>
                  <p>
                    {t.intro.p3}
                  </p>
                </div>

                {/* Imagery Grid for Philosophy */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="rounded-2xl overflow-hidden h-28 sm:h-32 border border-[#E5DBCE] shadow-sm relative group">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=85"
                      alt="Qatari Villa Living"
                      className="w-full h-full"
                      imgClassName="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-2.5 pointer-events-none z-10">
                      <span className="text-[11px] font-bold text-white leading-tight drop-shadow-sm">
                        {lang === 'en' ? 'Private Villas' : 'فلل ومنازل خاصة'}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden h-28 sm:h-32 border border-[#E5DBCE] shadow-sm relative group">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=85"
                      alt="Gourmet Kitchen Service"
                      className="w-full h-full"
                      imgClassName="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-2.5 pointer-events-none z-10">
                      <span className="text-[11px] font-bold text-white leading-tight drop-shadow-sm">
                        {lang === 'en' ? 'Kitchen & Meals' : 'طهي عائلي فاخر'}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden h-28 sm:h-32 border border-[#E5DBCE] shadow-sm relative group">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=85"
                      alt="Compassionate Care"
                      className="w-full h-full"
                      imgClassName="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-2.5 pointer-events-none z-10">
                      <span className="text-[11px] font-bold text-white leading-tight drop-shadow-sm">
                        {lang === 'en' ? 'Family Care' : 'رعاية واهتمام'}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wide uppercase">
              {t.services.sectionBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#380C1B]">
              {t.services.title}
            </h2>
            <p className="text-sm sm:text-base text-[#665E5E]">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div 
                  key={srv.key}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#E5DBCE] hover:border-[#C5A059] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative h-56 overflow-hidden">
                      <SafeImage
                        src={srv.item.image}
                        alt={srv.item.title}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                      
                      {/* Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#5B132B] text-xs font-bold shadow-sm">
                        {srv.badge}
                      </span>

                      {/* Icon Circle */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-[#5B132B] text-[#E8D5B0] flex items-center justify-center shadow-lg group-hover:bg-[#C5A059] group-hover:text-[#380C1B] transition-colors">
                        <IconComp size={22} />
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-[#380C1B] group-hover:text-[#5B132B] transition-colors">
                        {srv.item.title}
                      </h3>
                      
                      <p className="text-xs font-semibold text-[#9E7D3B]">
                        {srv.item.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#665E5E] leading-relaxed">
                        {srv.item.desc}
                      </p>

                      {/* Key Areas List */}
                      <div className="pt-2 border-t border-[#F0EAE1] space-y-1.5">
                        <span className="text-[11px] font-bold text-[#380C1B] uppercase tracking-wider block">
                          {lang === 'en' ? 'Core Expertise:' : 'أبرز المهام والخدمات:'}
                        </span>
                        {srv.item.keyAreas.slice(0, 3).map((area, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2 text-xs text-[#524848]">
                            <CheckCircle size={13} className="text-[#C5A059] flex-shrink-0" />
                            <span className="truncate">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Link CTA */}
                  <div className="p-6 pt-0">
                    <Link
                      to={`/services#${srv.item.id}`}
                      className="w-full py-3 px-4 rounded-xl bg-[#FAF8F5] group-hover:bg-[#5B132B] text-[#380C1B] group-hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border border-[#E5DBCE] group-hover:border-[#5B132B]"
                    >
                      <span>{lang === 'en' ? `Explore ${srv.item.title} →` : `استكشف ${srv.item.title} ←`}</span>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Final Highlight Card */}
            <div className="bg-gradient-to-br from-[#5B132B] to-[#380C1B] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-[#C5A059]/40 relative overflow-hidden">
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#E8D5B0] text-xs font-bold tracking-wide uppercase">
                  {lang === 'en' ? 'Bespoke Requirement' : 'طلبات مخصصة'}
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {lang === 'en' ? 'Need a Custom Household Staffing Plan?' : 'هل تبحث عن ترتيبات توظيف خاصة بمنزلك؟'}
                </h3>
                <p className="text-xs sm:text-sm text-[#E8D5B0]/90 leading-relaxed">
                  {lang === 'en'
                    ? 'Our consultants will prepare customized staffing solutions tailored precisely to your villa size, schedule, and family needs.'
                    : 'يقوم مستشارونا بإعداد حلول توظيف مخصصة تماماً بناءً على حجم الفيلا، وجدول المواعيد، وخصوصية العائلة.'}
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="w-full py-3.5 rounded-xl bg-[#C5A059] text-[#380C1B] font-bold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all shadow-md"
                >
                  <span>{lang === 'en' ? 'Consult Our Team' : 'استشر فريقنا المتخصص'}</span>
                  <ArrowIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY FAMILIES CHOOSE US */}
        <section className="bg-[#F7F3EB] py-12 border-y border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
              <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wide uppercase">
                {t.whyChooseUs.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B]">
                {t.whyChooseUs.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#665E5E]">
                {t.whyChooseUs.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.whyChooseUs.cards.map((card, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E5DBCE] shadow-sm hover:shadow-lg transition-all hover:border-[#C5A059] space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#5B132B]/10 text-[#5B132B] flex items-center justify-center font-bold text-base">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#380C1B]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665E5E] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <span className="px-4 py-1.5 rounded-full bg-[#C5A059]/20 text-[#9E7D3B] text-xs font-bold tracking-wide uppercase">
              {t.howItWorks.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B]">
              {t.howItWorks.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#665E5E]">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {t.howItWorks.steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative p-5 rounded-2xl bg-white border border-[#E5DBCE] shadow-sm hover:shadow-xl transition-all space-y-2.5 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-serif text-[#C5A059] group-hover:text-[#5B132B] transition-colors">
                    {step.num}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E5DBCE] flex items-center justify-center text-[#5B132B]">
                    <CheckCircle2 size={15} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#380C1B]">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#665E5E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MONTHLY STAFFING HIGHLIGHT BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#380C1B] via-[#5B132B] to-[#7E203E] text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              <div className="lg:col-span-8 space-y-3">
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#E8D5B0] text-xs font-bold tracking-wide uppercase">
                  {t.monthlyStaffing.badge}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  {t.monthlyStaffing.heroTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#E8D5B0]/90 leading-relaxed max-w-2xl">
                  {t.monthlyStaffing.heroDesc}
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle size={15} className="text-[#C5A059]" />
                    <span>{lang === 'en' ? 'Vetted Personnel' : 'عمالة موثوقة ومفحوصة'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle size={15} className="text-[#C5A059]" />
                    <span>{lang === 'en' ? 'Continuous Replacement Policy' : 'سياسة استبدال سلسة'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle size={15} className="text-[#C5A059]" />
                    <span>{lang === 'en' ? 'Flexible Contracts' : 'عقود شهرية مريحة'}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <Link
                  to="/monthly-staffing"
                  className="w-full py-3 rounded-xl bg-[#C5A059] text-[#380C1B] font-bold text-center text-xs sm:text-sm shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5"
                >
                  {lang === 'en' ? 'Explore Monthly Staffing' : 'استكشف التوظيف الشهري'}
                </Link>
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-center text-xs sm:text-sm border border-white/20 transition-all"
                >
                  {t.monthlyStaffing.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CONVERSION CTA SECTION */}
        <section className="bg-white py-10 border-t border-[#E5DBCE]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold uppercase tracking-wider">
              {lang === 'en' ? 'Get Started Today' : 'ابدأ طلبك اليوم'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#380C1B]">
              {lang === 'en' ? 'Looking for Reliable Support at Home?' : 'هل تبحث عن دعم منزلي موثوق ومحترف؟'}
            </h2>
            <p className="text-xs sm:text-sm text-[#665E5E] max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'Tell us what your family needs, and our team will help you find a suitable staffing solution tailored for your peace of mind.'
                : 'أخبرنا باحتياجات عائلتك وسيقوم فريقنا بمساعدتك في اختيار أنسب الكوادر المنزلية التي تمنحك راحة البال التامة.'}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#5B132B] to-[#7E203E] text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                {t.nav.requestStaff}
              </Link>
              <a
                href="https://wa.me/97474022250"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#1ebe5d] transition-all transform hover:-translate-y-1 flex items-center gap-2"
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
