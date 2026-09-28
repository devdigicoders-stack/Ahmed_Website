import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import { 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Home as HomeIcon, 
  ChefHat, 
  Car, 
  HeartPulse, 
  Award,
  Layers,
  FileText,
  Clock,
  MessageSquare
} from 'lucide-react';

export default function MonthlyStaffing() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const monthlyStaffOptions = [
    {
      title: lang === 'en' ? 'Housemaid' : 'عاملة منزلية',
      sub: lang === 'en' ? 'Monthly Household Assistance' : 'مساعدة وتدبير منزلي شهري',
      icon: HomeIcon,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80',
      features: [
        lang === 'en' ? 'Regular housekeeping & dusting' : 'تنظيف وتدبير يومي منتظم',
        lang === 'en' ? 'Laundry, pressing & wardrobe care' : 'غسيل وكي وترتيب الملابس',
        lang === 'en' ? 'Kitchen assistance & meal setup' : 'مساعدة المطبخ وتجهيز المائدة',
      ]
    },
    {
      title: lang === 'en' ? 'House Cook' : 'طاهٍ منزلي',
      sub: lang === 'en' ? 'Monthly Cooking Support' : 'طهي وإعداد وجبات شهري',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80',
      features: [
        lang === 'en' ? 'Fresh daily breakfast, lunch & dinner' : 'إعداد وجبات الفطور والغداء والعشاء',
        lang === 'en' ? 'Authentic Qatari & international dishes' : 'أكلات قطرية تراثية وأطباق عالمية',
        lang === 'en' ? 'Strict kitchen sanitation & pantry care' : 'تعقيم المطبخ ومتابعة المشتريات',
      ]
    },
    {
      title: lang === 'en' ? 'Family Driver' : 'سائق عائلي',
      sub: lang === 'en' ? 'Monthly Family Transportation' : 'تنقلات وتوصيل عائلي شهري',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop&q=80',
      features: [
        lang === 'en' ? 'Dedicated school & university runs' : 'توصيل المدارس والجامعات يومياً',
        lang === 'en' ? 'Family appointments & VIP errands' : 'مشاوير العائلة والمناسبات الخاصة',
        lang === 'en' ? 'Careful vehicle maintenance & safety' : 'صيانة ونظافة سيارات العائلة',
      ]
    },
    {
      title: lang === 'en' ? 'Caregiver' : 'مقدم رعاية',
      sub: lang === 'en' ? 'Monthly Care Support' : 'رعاية واهتمام شهري بالمسنين',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80',
      features: [
        lang === 'en' ? 'Elderly personal assistance & mobility' : 'مساعدة كبار السن ودعم الحركة',
        lang === 'en' ? 'Warm emotional companionship' : 'مرافقة حنونة ودعم معنوي واجتماعي',
        lang === 'en' ? 'Daily routine & nutrition monitoring' : 'متابعة الروتين الصحي والتغذية',
      ]
    },
    {
      title: lang === 'en' ? 'Private Nurse' : 'ممرضة خاصة',
      sub: lang === 'en' ? 'Monthly Private Nursing Support' : 'تمريض منزلي تخصصي شهري',
      icon: HeartPulse,
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80',
      features: [
        lang === 'en' ? 'Post-op & specialized health care' : 'رعاية ما بعد العمليات والحالات الدقيقة',
        lang === 'en' ? 'Medication timing & vital sign check' : 'تنظيم الأدوية ومتابعة العلامات الحيوية',
        lang === 'en' ? 'Registered & clinical home protocols' : 'كوادر تمريضية مرخصة ومعتمدة',
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="space-y-12 py-4">

        {/* HERO SECTION */}
        <section className="relative py-10 bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] border-b border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wider uppercase">
              {t.monthlyStaffing.badge}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#380C1B] max-w-4xl mx-auto leading-tight">
              {t.monthlyStaffing.heroTitle}
            </h1>
            <p className="text-xs sm:text-base text-[#665E5E] max-w-2xl mx-auto leading-relaxed">
              {t.monthlyStaffing.heroDesc}
            </p>
          </div>
        </section>

        {/* CONSISTENT SUPPORT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5DBCE] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                {lang === 'en' ? 'Monthly Excellence' : 'الاستقرار والاطمئنان'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B]">
                {t.monthlyStaffing.consistentTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#524848] leading-relaxed">
                {t.monthlyStaffing.consistentDesc}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DBCE] text-center w-full space-y-3">
                <span className="text-4xl font-extrabold text-[#5B132B]">30+</span>
                <p className="text-xs font-bold text-[#380C1B] uppercase">
                  {lang === 'en' ? 'Days Guaranteed Continuity' : 'استمرارية مضمونة طوال الشهر'}
                </p>
                <p className="text-[11px] text-[#665E5E]">
                  {lang === 'en' ? 'Smooth renewals and quick replacement guarantee' : 'تجديد سلس وضمان استبدال فوري عند الحاجة'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MONTHLY SERVICE OPTIONS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wide uppercase">
              {lang === 'en' ? 'Available Profiles' : 'الباقات المتاحة'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#380C1B]">
              {t.monthlyStaffing.optionsTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#665E5E]">
              {lang === 'en'
                ? 'Select the household staffing role required on an ongoing monthly schedule.'
                : 'اختر تخصص الكادر المنزلي المطلوب بنظام التوظيف والتعاقد الشهري المنتظم.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyStaffOptions.map((opt, idx) => {
              const IconComp = opt.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-[#E5DBCE] shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Card Photo Header */}
                    <div className="relative h-44 overflow-hidden">
                      <SafeImage
                        src={opt.image}
                        alt={opt.title}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                      
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#5B132B] shadow-sm">
                        {lang === 'en' ? 'Monthly Service' : 'تعاقد شهري'}
                      </span>

                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-[#5B132B] text-[#E8D5B0] flex items-center justify-center shadow-md">
                          <IconComp size={18} />
                        </div>
                        <h3 className="text-base font-bold text-white leading-tight">{opt.title}</h3>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <p className="text-xs text-[#9E7D3B] font-semibold">{opt.sub}</p>

                      <div className="space-y-1.5 pt-2 border-t border-[#F0EAE1]">
                        {opt.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-[#524848]">
                            <CheckCircle2 size={13} className="text-[#C5A059] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/contact"
                      className="w-full py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#5B132B] text-[#380C1B] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-[#E5DBCE]"
                    >
                      <span>{lang === 'en' ? 'Inquire for Monthly Contract' : 'طلب تعاقد شهري'}</span>
                      <ArrowIcon size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* MONTHLY SERVICE BENEFITS */}
        <section className="bg-[#F7F3EB] py-16 border-y border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Key Advantages' : 'مزايا العقود الشهرية'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#380C1B]">
                {t.monthlyStaffing.benefitsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.monthlyStaffing.benefits.map((ben, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E5DBCE] shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#5B132B] text-[#E8D5B0] flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#380C1B]">{ben.title}</h3>
                  <p className="text-xs text-[#665E5E] leading-relaxed">{ben.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW MONTHLY STAFFING WORKS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#E5DBCE] shadow-lg space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="px-4 py-1 rounded-full bg-[#C5A059]/20 text-[#9E7D3B] text-xs font-bold uppercase tracking-wider">
                {lang === 'en' ? 'Simple Process' : 'خطوات بدء التوظيف الشهري'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B]">
                {lang === 'en' ? 'How Monthly Staffing Works' : 'كيفية الاستفادة من نظام التوظيف الشهري'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: lang === 'en' ? 'Submit Requirement' : 'تقديم الطلب', desc: lang === 'en' ? 'Tell us the type of professional you need.' : 'شاركنا التخصص والمهام المطلوبة.' },
                { title: lang === 'en' ? 'Share Preferences' : 'تحديد التفضيلات', desc: lang === 'en' ? 'Tell us about schedule, family preferences & details.' : 'وضح الجدول الزمني وتفضيلات الأسرة.' },
                { title: lang === 'en' ? 'Candidate Selection' : 'ترشيح الكوادر', desc: lang === 'en' ? 'Our team presents suitable available options.' : 'نقدم لك أفضل الملفات المتاحة.' },
                { title: lang === 'en' ? 'Confirmation' : 'تأكيد واختيار', desc: lang === 'en' ? 'Select your preferred professional & complete formalities.' : 'اختر الشخص الأنسب وأكمل التوثيق.' },
                { title: lang === 'en' ? 'Service Begins' : 'انطلاق الخدمة', desc: lang === 'en' ? 'Your professional begins the agreed monthly service.' : 'يبدأ الكادر المنزلي العمل فوراً.' },
              ].map((step, sIdx) => (
                <div key={sIdx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5DBCE] text-center space-y-2">
                  <span className="w-8 h-8 rounded-full bg-[#5B132B] text-white inline-flex items-center justify-center text-xs font-bold">
                    {sIdx + 1}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#380C1B]">{step.title}</h4>
                  <p className="text-[11px] text-[#665E5E] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#5B132B] to-[#380C1B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#C5A059]/40">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                {t.monthlyStaffing.ctaTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8D5B0]/90">
                {t.monthlyStaffing.ctaSubtitle}
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#C5A059] text-[#380C1B] font-bold text-sm shadow-md hover:bg-white transition-all whitespace-nowrap flex items-center gap-2"
            >
              <span>{t.monthlyStaffing.ctaButton}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
