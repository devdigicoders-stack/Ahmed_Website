import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import { Scale, FileCheck, ShieldAlert, CalendarClock, UserCheck, ArrowRight } from 'lucide-react';

export default function TermsConditions() {
  const { lang, isRTL } = useLanguage();

  const content = {
    en: {
      badge: "Terms of Service",
      title: "Terms & Conditions",
      subtitle: "Standard terms and conditions governing household staffing and facility services in Qatar.",
      lastUpdated: "Last Updated: September 2026",
      intro: "Welcome to Ahmed for Facility Services. By accessing our website or engaging our household and family staffing services, you agree to comply with and be bound by the following terms and conditions in accordance with the applicable laws of the State of Qatar.",
      sections: [
        {
          icon: Scale,
          title: "1. Scope of Staffing Services",
          paragraphs: [
            "• Ahmed for Facility Services acts as a trusted facilitator providing vetted, qualified household personnel on a flexible monthly staffing model.",
            "• Service categories include Housemaids, House Cooks, Family Drivers, Private Nurses, Caregivers, and general domestic support.",
            "• All candidate profiles and professional competencies are evaluated to match the specific domestic requirements agreed upon with the client."
          ]
        },
        {
          icon: UserCheck,
          title: "2. Client Responsibilities & Decorum",
          paragraphs: [
            "• Safe Working Environment: Clients agree to provide a respectful, secure, and dignified living/working atmosphere for all assigned personnel.",
            "• Compliance with Qatari Labor Standards: Working hours, rest periods, accommodation, and meal provisions must align with the Ministry of Labour regulations for domestic and facility workers in Qatar.",
            "• Scope of Duties: Assigned personnel should only perform tasks within their designated professional category."
          ]
        },
        {
          icon: CalendarClock,
          title: "3. Monthly Contracts & Invoicing",
          paragraphs: [
            "• Our monthly staffing arrangements provide continuous household stability without demanding inflexible long-term lock-in.",
            "• Monthly fees are agreed upon in advance and invoiced according to the formal service schedule.",
            "• Extensions, contract renewals, or category changes can be requested directly through your dedicated account manager."
          ]
        },
        {
          icon: FileCheck,
          title: "4. Replacement Guarantee & Trial Satisfaction",
          paragraphs: [
            "• We strive for a harmonious fit between each household and staff member.",
            "• If an assigned professional is deemed unsuitable within the initial agreed trial period, we facilitate a prompt, hassle-free replacement candidate at no extra recruitment charge.",
            "• Clients are supported by a dedicated family relations consultant throughout the duration of the service."
          ]
        },
        {
          icon: ShieldAlert,
          title: "5. Regulatory Compliance & Nursing Scope",
          paragraphs: [
            "• Nursing and healthcare caregiving references reflect verified credentials and authorized scope of practice under Qatar's health authority guidelines.",
            "• Neither party shall engage in any practices that violate local residency, sponsorship, or labor legislation."
          ]
        }
      ],
      contactBoxTitle: "Questions Regarding Our Terms?",
      contactBoxDesc: "Reach out to our customer care team for clear guidance on contract terms and staffing agreements.",
      contactBtn: "Speak With an Advisor"
    },
    ar: {
      badge: "الشروط واللوائح",
      title: "الشروط والأحكام",
      subtitle: "الشروط والضوابط العامة المنظمة لخدمات توفير الكوادر المنزلية والمرافق في دولة قطر.",
      lastUpdated: "آخر تحديث: سبتمبر ٢٠٢٦",
      intro: "مرحباً بكم في شركة أحمد لخدمات المرافق. إن استخدامكم لموقعنا الإلكتروني أو الاستفادة من خدمات توفير الكوادر المنزلية والعائلية يخضع للشروط والأحكام التالية وفقاً للأنظمة والتشريعات السارية في دولة قطر.",
      sections: [
        {
          icon: Scale,
          title: "١. نطاق الخدمات ونموذج التوظيف",
          paragraphs: [
            "• تقدم شركة أحمد لخدمات المرافق حلولاً موثوقة لتوفير الكوادر المنزلية المؤهلة بنظام العقود الشهرية المرنة والمريحة.",
            "• تشمل الخدمات: العاملات المنزليات، الطهاة، السائقين العائليين، الممرضات الخاصات، ومقدمي الرعاية.",
            "• يتم فحص وتدقيق كافة الكوادر لضمان مطابقتها لاحتياجات العائلة والبيئة المنزلية القطرية."
          ]
        },
        {
          icon: UserCheck,
          title: "٢. التزامات العميل وبيئة العمل",
          paragraphs: [
            "• توفير بيئة عمل وسكن لائقة ومحترمة تضمن كرامة وسلامة الكادر المنزلي وفق التقاليد والأعراف القطرية.",
            "• الالتزام بساعات العمل وفترات الراحة المقررة بموجب لوائح وزارة العمل في دولة قطر للعمالة المنزلية.",
            "• تكليف الكادر بالمهام المنصوص عليها ضمن نطاق تخصصه المتفق عليه."
          ]
        },
        {
          icon: CalendarClock,
          title: "٣. العقود الشهرية والدفع",
          paragraphs: [
            "• يمنح نموذج التوظيف الشهري العائلة الاستقرار والدعم المستمر دون إلزام بعقود طويلة الأجل معقدة.",
            "• يتم تحديد الرسوم الشهرية بوضوح وإصدار الفواتير وفق جدول الخدمات المتفق عليه مسبقاً.",
            "• يمكن طلب تجديد الخدمة أو تعديل المتطلبات بسهولة عبر مسؤول العلاقات المخصص لعائلتكم."
          ]
        },
        {
          icon: FileCheck,
          title: "٤. ضمان الاستبدال ورضا العائلة",
          paragraphs: [
            "• نحرص دائماً على تحقيق الانسجام التام بين الكادر والعائلة.",
            "• في حال عدم التوافق خلال فترة التجربة المقررة، تلتزم الشركة بتوفير كادر بديل مناسب فوراً وبكل سلاسة ودون رسوم استقدام إضافية.",
            "• يتولى مستشار خدمة العملاء المتابعة المستمرة لضمان تقديم أعلى درجات الرضا."
          ]
        },
        {
          icon: ShieldAlert,
          title: "٥. الامتثال القانوني والخدمات التخصصية",
          paragraphs: [
            "• تعكس كافة بيانات التمريض والرعاية التخصصية المؤهلات المعتمدة والنطاق المصرح به رسمياً وفق الأنظمة الصحية القطرية.",
            "• يلتزم الطرفان بالقوانين والأنظمة المعمول بها في دولة قطر بما يحفظ حقوق الجميع."
          ]
        }
      ],
      contactBoxTitle: "هل لديك استفسار حول بنود العقود والشروط؟",
      contactBoxDesc: "فريق مستشارينا جاهز لتوضيح كافة التفاصيل وتسهيل إجراءات استقدام وتعيين الكادر المناسب.",
      contactBtn: "تواصل مع مستشارنا"
    }
  }[lang];

  return (
    <PageTransition>
      <div className="py-12 space-y-12">
        
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#FAF8F5] to-[#FDFBF7] py-14 border-b border-[#E5DBCE]/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#5B132B]/10 text-[#5B132B]">
              {content.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#380C1B] tracking-tight">
              {content.title}
            </h1>
            <p className="text-sm sm:text-base text-[#665E5E] max-w-2xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
            <div className="text-xs text-[#8A8181] pt-2 font-medium">
              {content.lastUpdated}
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Intro Box */}
          <div className="p-6 rounded-2xl bg-white border border-[#E5DBCE] shadow-sm text-sm text-[#443C3C] leading-relaxed">
            {content.intro}
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {content.sections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DBCE] shadow-sm hover:shadow-md transition-shadow space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] flex items-center justify-center text-[#C5A059]">
                      <Icon size={22} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#380C1B]">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#524848] leading-relaxed pl-1 sm:pl-2">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#5B132B] to-[#380C1B] text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left" style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {content.contactBoxTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8D5B0]/80">
                {content.contactBoxDesc}
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b08d48] text-[#380C1B] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>{content.contactBtn}</span>
              <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
            </Link>
          </div>

        </section>

      </div>
    </PageTransition>
  );
}
