import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import { 
  ShieldCheck, 
  Heart, 
  Eye, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  Award,
  Users,
  Compass,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function About() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <PageTransition>
      <div className="space-y-12 sm:space-y-16 py-4">

        {/* HERO SECTION */}
        <section className="relative py-10 bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] border-b border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wider uppercase">
              {lang === 'en' ? 'About Ahmed Facility Services' : 'عن أحمد لخدمات المرافق والتوظيف'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#380C1B] max-w-4xl mx-auto leading-tight">
              {t.aboutUs.heroTitle}
            </h1>
            <p className="text-xs sm:text-base text-[#665E5E] max-w-2xl mx-auto leading-relaxed">
              {t.aboutUs.heroDesc}
            </p>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-[#C5A059]/20 text-[#9E7D3B] text-xs font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Our Identity' : 'هويتنا ومكانتنا'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B] leading-snug">
                {t.aboutUs.whoWeAreTitle}
              </h2>
              
              <div className="space-y-3 text-xs sm:text-sm text-[#524848] leading-relaxed">
                <p className="font-semibold text-[#380C1B]">
                  {t.aboutUs.whoWeAreP1}
                </p>
                <p>
                  {t.aboutUs.whoWeAreP2}
                </p>
                <p>
                  {t.aboutUs.whoWeAreP3}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DBCE] shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#5B132B]/10 text-[#5B132B] flex items-center justify-center font-bold">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#380C1B]">{lang === 'en' ? 'Vetted Staff' : 'فحص أمني ومهني'}</h4>
                    <span className="text-[10px] text-[#665E5E]">{lang === 'en' ? 'Rigorous verification' : 'تدقيق شامل وسجلات معتمدة'}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E5DBCE] shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#5B132B]/10 text-[#5B132B] flex items-center justify-center font-bold">
                    <Heart size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#380C1B]">{lang === 'en' ? 'Family Respect' : 'احترام الخصوصية'}</h4>
                    <span className="text-[10px] text-[#665E5E]">{lang === 'en' ? 'Highest discretion' : 'حرمة وسرية البيوت'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[380px]">
                <SafeImage
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80"
                  alt="Professional Household Atmosphere"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380C1B]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5DBCE]">
                  <p className="text-[11px] font-bold text-[#5B132B] uppercase tracking-wider mb-0.5">
                    {lang === 'en' ? 'Qatar Premier Standard' : 'المعيار القطري الرفيع'}
                  </p>
                  <p className="text-xs text-[#380C1B] font-semibold">
                    {lang === 'en' 
                      ? '“We believe exceptional household staff are the backbone of a peaceful, well-ordered family home.”'
                      : '«نؤمن بأن الكادر المنزلي الكفء هو ركيزة الطمأنينة والاستقرار في كل بيت عائلي.»'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="bg-[#F7F3EB] py-12 border-y border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Mission */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5DBCE] shadow-md space-y-4 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#5B132B] text-[#E8D5B0] flex items-center justify-center shadow-md">
                  <Target size={24} />
                </div>
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                  {lang === 'en' ? 'Our Mission' : 'رسالتنا'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#380C1B]">
                  {t.aboutUs.missionTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#524848] leading-relaxed">
                  {t.aboutUs.missionDesc}
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5DBCE] shadow-md space-y-4 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A059] text-[#380C1B] flex items-center justify-center shadow-md">
                  <Eye size={24} />
                </div>
                <span className="text-xs font-bold text-[#5B132B] uppercase tracking-wider block">
                  {lang === 'en' ? 'Our Vision' : 'رؤيتنا المستقبلية'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#380C1B]">
                  {t.aboutUs.visionTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#524848] leading-relaxed">
                  {t.aboutUs.visionDesc}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold uppercase tracking-wider">
              {lang === 'en' ? 'Guiding Principles' : 'مبادئنا الراسخة'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#380C1B]">
              {t.aboutUs.valuesTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#665E5E]">
              {lang === 'en' 
                ? 'The core foundational values that shape every relationship we establish in Qatar.' 
                : 'القيم الأساسية التي توجه كافة تعاملاتنا مع العائلات والكوادر في قطر.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.aboutUs.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5DBCE] shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] flex items-center justify-center font-black text-[#5B132B]">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#380C1B]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665E5E] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#5B132B] to-[#380C1B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#C5A059]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                {lang === 'en' ? 'Ready to Experience Trusted Household Staffing?' : 'هل أنت مستعد لتجربة خدمات توظيف منزلي موثوقة؟'}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8D5B0]/90">
                {lang === 'en' ? 'Our family consultants are ready to assist you today.' : 'مستشارونا على أتم الاستعداد لمساعدتك في اختيار الكادر المناسب.'}
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-white text-[#380C1B] font-bold text-sm shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>{t.nav.requestStaff}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
