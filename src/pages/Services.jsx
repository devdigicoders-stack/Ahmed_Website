import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import { 
  CheckCircle2, 
  Home as HomeIcon, 
  ChefHat, 
  Car, 
  HeartPulse, 
  Award, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

export default function Services() {
  const { t, lang, isRTL } = useLanguage();
  const location = useLocation();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  const servicesList = [
    {
      id: 'housemaids',
      item: t.services.items.housemaids,
      icon: HomeIcon,
      badge: lang === 'en' ? 'Housekeeping & Care' : 'التدبير المنزلي والنظافة',
      fullDescription: lang === 'en' 
        ? 'Our experienced housemaids are thoroughly vetted, trained in modern housekeeping standards, and respectful of Qatari household traditions. Whether you require meticulous daily cleaning, delicate garment laundry, wardrobe organization, or routine household upkeep, our staff ensures your residence remains pristine and welcoming.'
        : 'تتمتع عاملات المنازل لدينا بتدريب رفيع وخبرة عملية واسعة في معايير النظافة والتدبير المنزلي مع احترام كامل لتقاليد وخصوصية البيوت القطرية. سواء كنت بحاجة إلى تنظيف يومي شامل، أو عناية خاصة بالملابس والأقمشة الحساسة، أو ترتيب الخزائن والغرف، فإن كوادرنا تضمن بقاء منزلك في أبهى صورة.',
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&auto=format&fit=crop&q=80"
    },
    {
      id: 'house-cooks',
      item: t.services.items.houseCooks,
      icon: ChefHat,
      badge: lang === 'en' ? 'Culinary Excellence' : 'فنون الطهي والمأكولات',
      fullDescription: lang === 'en'
        ? 'Skilled private cooks ready to prepare wholesome family meals, traditional Qatari dishes (Machboos, Biryani, Saloona, Harees), and international gourmet cuisines. They maintain high kitchen hygiene standards, manage grocery requirements efficiently, and tailor daily menus to meet your family’s dietary preferences.'
        : 'طهاة منزليون محترفون ومستعدون لتحضير أشهى الوجبات العائلية الصحية، والأكلات القطرية والخليجية التراثية (مثل المجبوس، والبرياني، والصالونة، والهريس)، بالإضافة إلى الأطباق العالمية المتنوعة. يلتزم طهاتنا بأعلى معايير النظافة وإدارة مستلزمات المطبخ وتنسيق قوائم الطعام حسب رغبة العائلة.',
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&auto=format&fit=crop&q=80"
    },
    {
      id: 'family-drivers',
      item: t.services.items.familyDrivers,
      icon: Car,
      badge: lang === 'en' ? 'Safe Transportation' : 'قيادة آمنة وتنقلات منتظمة',
      fullDescription: lang === 'en'
        ? 'Professional family drivers with valid Qatar driving licenses, clean safety records, and extensive navigation knowledge across Doha, Lusail, Al Wakrah, and all municipalities. Reliable for school runs, private family appointments, shopping trips, VIP errands, and luxury vehicle upkeep.'
        : 'سائقو عائلات محترفون يحملون رخص قيادة قطرية سارية وسجلات قيادة ممتازة، مع دراية شاملة بكافة مناطق وشوارع الدوحة، ولوسيل، والوكرة وكافة البلديات. جاهزون لنقل الطلاب والمدارس، المشاوير العائلية الخاصة، التسوق، والعناية الكاملة بمركبات الأسرة بأعلى درجات الانضباط واللباقة.',
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1000&auto=format&fit=crop&q=80"
    },
    {
      id: 'private-nurses',
      item: t.services.items.privateNurses,
      icon: HeartPulse,
      badge: lang === 'en' ? 'Dedicated Health Support' : 'رعاية تمريضية منزلية',
      fullDescription: lang === 'en'
        ? 'Qualified and licensed private nurses delivering compassionate home-based support. From vitals monitoring, medication management, post-surgery recovery care to personalized clinical assistance for family members with chronic medical conditions, provided with warmth, clinical accuracy, and total confidentiality.'
        : 'ممرضات خاصات مؤهلات ومرخصات لتقديم الرعاية التمريضية المنزلية الشاملة بكل حنان واحتراف. تشمل خدماتنا متابعة العلامات الحيوية، تنظيم وإعطاء الأدوية، رعاية ما بعد العمليات الجراحية، والدعم المخصص لأفراد الأسرة الذين يعانون من حالات صحية خاصة بأقصى درجات الدقة والسرية.',
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1000&auto=format&fit=crop&q=80"
    },
    {
      id: 'caregivers',
      item: t.services.items.caregivers,
      icon: Award,
      badge: lang === 'en' ? 'Elderly & Special Care' : 'رعاية كبار السن وذوي الاحتياج',
      fullDescription: lang === 'en'
        ? 'Compassionate caregivers providing dependable day-to-day assistance and companionship for senior family members and individuals needing support with mobility, personal grooming, nutrition, and daily routines. They bring patience, kindness, and attentive emotional support into the home.'
        : 'مقدمو رعاية متفانون يقدمون الدعم اليومي الحنون والمرافقة الطيبة لكبار السن وأفراد العائلة الذين يحتاجون إلى مساعدة في الحركة، والنظافة الشخصية، والتغذية السليمة، ومتابعة الروتين اليومي، مما يمنحهم شعوراً بالراحة والاطمئنان والكرامة.',
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1000&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <PageTransition>
      <div className="space-y-12 py-4">

        {/* HERO SECTION */}
        <section className="relative py-10 bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] border-b border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wider uppercase">
              {lang === 'en' ? 'Our Household Staffing Services' : 'خدمات التوظيف المنزلي المتخصصة'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#380C1B] max-w-4xl mx-auto leading-tight">
              {t.services.title}
            </h1>
            <p className="text-xs sm:text-base text-[#665E5E] max-w-2xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </section>

        {/* DETAILED SERVICES LIST */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {servicesList.map((srv, idx) => {
            const isEven = idx % 2 === 1;
            const IconComp = srv.icon;

            return (
              <div
                key={srv.id}
                id={srv.id}
                className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-white border border-[#E5DBCE] shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#5B132B] text-[#E8D5B0] flex items-center justify-center shadow-md">
                        <IconComp size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                          {srv.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#380C1B]">
                          {srv.item.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-[#5B132B]">
                      {srv.item.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#524848] leading-relaxed">
                      {srv.fullDescription}
                    </p>

                    {/* Key Service Areas Box */}
                    <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DBCE] space-y-3">
                      <h4 className="font-bold text-xs text-[#380C1B] uppercase tracking-wider">
                        {lang === 'en' ? 'Key Service Areas:' : 'أبرز مجالات ومهام الخدمة:'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {srv.item.keyAreas.map((area, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#443C3C]">
                            <CheckCircle2 size={16} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <Link
                        to="/contact"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5B132B] to-[#7E203E] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        <span>{lang === 'en' ? `Request ${srv.item.title}` : `طلب كادر ${srv.item.title}`}</span>
                        <ArrowIcon size={16} />
                      </Link>


                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F5] h-[320px] sm:h-[360px]">
                      <SafeImage
                        src={srv.image}
                        alt={srv.item.title}
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#380C1B]/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 text-[#380C1B]">
                        <span className="text-[11px] font-bold text-[#5B132B] block">
                          {lang === 'en' ? 'Verified in Qatar' : 'معتمد في قطر'}
                        </span>
                        <span className="text-xs font-semibold">
                          {lang === 'en' ? 'Flexible Monthly Arrangements' : 'عقود شهرية ميسرة وبدائل مرنة'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

        {/* COMPLIANCE FOOTNOTE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#5B132B]/5 border border-[#5B132B]/20 flex items-start gap-4">
            <ShieldCheck size={24} className="text-[#5B132B] flex-shrink-0 mt-1" />
            <div className="text-xs text-[#524848] leading-relaxed">
              <strong className="text-[#380C1B] block mb-1">
                {lang === 'en' ? 'Compliance & Quality Standards Notice:' : 'ملاحظة الامتثال ومعايير الجودة:'}
              </strong>
              {lang === 'en'
                ? 'All private nurses and specialized healthcare staff provided hold verified qualifications and operate strictly within permitted regulatory scopes in the State of Qatar. We never publish unsupported promises.'
                : 'جميع الممرضات وكوادر الرعاية المتخصصة حاصلات على مؤهلات وتراخيص معتمدة ويعملن بدقة ضمن النطاق المصرح به قانونياً في دولة قطر.'}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
