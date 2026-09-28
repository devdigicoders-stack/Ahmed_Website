import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PrivacyPolicy() {
  const { lang, isRTL } = useLanguage();

  const content = {
    en: {
      badge: "Legal & Compliance",
      title: "Privacy Policy",
      subtitle: "How Ahmed for Facility Services collects, protects, and handles your personal information in the State of Qatar.",
      lastUpdated: "Last Updated: September 2026",
      intro: "Ahmed for Facility Services ('we', 'our', or 'us') is committed to safeguarding the privacy and personal data of our clients, website visitors, and household staffing applicants in accordance with the regulatory standards of the State of Qatar.",
      sections: [
        {
          icon: ShieldCheck,
          title: "1. Information We Collect",
          paragraphs: [
            "We collect information necessary to facilitate reliable household staffing and customer service requests, including:",
            "• Personal Details: Full name, QID/residency details (where legally required for contract processing).",
            "• Contact Data: Mobile phone number, WhatsApp contact number, and email address.",
            "• Staffing Requirements: Service category required (e.g., housemaid, cook, driver, nurse, caregiver), preferred start date, service duration, and specific villa/household preferences."
          ]
        },
        {
          icon: Lock,
          title: "2. How We Use Your Information",
          paragraphs: [
            "Your data is used exclusively for legitimate business and client relationship management purposes:",
            "• Processing and matching your household staffing enquiries with certified, vetted personnel.",
            "• Coordinating client communications via direct call, WhatsApp, or email.",
            "• Complying with Qatari labor, civil regulations, and corporate transparency requirements.",
            "• Continuous quality assurance, client satisfaction follow-ups, and service renewal coordination."
          ]
        },
        {
          icon: Eye,
          title: "3. Data Confidentiality & Family Privacy",
          paragraphs: [
            "We deeply respect the sanctity, cultural traditions, and privacy of Qatari homes and residences.",
            "• We never sell, rent, or trade your personal contact details to third-party marketing companies.",
            "• Staff candidate CVs and background screening reports are shared strictly with prospective employers for evaluation purposes.",
            "• All our internal staff and household personnel are bound by strict non-disclosure and privacy agreements."
          ]
        },
        {
          icon: FileText,
          title: "4. Security & Data Protection",
          paragraphs: [
            "We employ strict technical, administrative, and physical safeguards to protect all client records against unauthorized access, loss, alteration, or disclosure. All digital transmissions are encrypted through industry-standard protocols."
          ]
        },
        {
          icon: CheckCircle2,
          title: "5. Your Rights & Inquiries",
          paragraphs: [
            "You have the right to review, update, or request the deletion of your enquiry information from our records at any time. For questions regarding this Privacy Policy, please contact us at info@ahmedfacility.qa or call +974 4455 6677."
          ]
        }
      ],
      contactBoxTitle: "Have Questions About Your Privacy?",
      contactBoxDesc: "Our dedicated compliance and family relations team is available to assist you.",
      contactBtn: "Contact Our Team"
    },
    ar: {
      badge: "الشؤون القانونية والامتثال",
      title: "سياسة الخصوصية",
      subtitle: "كيف تقوم شركة أحمد لخدمات المرافق بجمع وحماية وإدارة بياناتك الشخصية في دولة قطر.",
      lastUpdated: "آخر تحديث: سبتمبر ٢٠٢٦",
      intro: "تلتزم شركة أحمد لخدمات المرافق ('نحن' أو 'الشركة') بالحفاظ التام على سرية وخصوصية البيانات الشخصية لعملائنا وزوار موقعنا والكوادر المنزلية، وفقاً لأعلى المعايير التنظيمية والقانونية المعمول بها في دولة قطر.",
      sections: [
        {
          icon: ShieldCheck,
          title: "١. البيانات التي نقوم بجمعها",
          paragraphs: [
            "نقوم بجمع البيانات الضرورية لتسهيل توفير الكوادر المنزلية المؤهلة وخدمة العملاء بكفاءة، وتشمل:",
            "• البيانات الشخصية: الاسم الكامل، وتفاصيل الهوية القطرية عند تحرير العقود الرسمية.",
            "• بيانات الاتصال: رقم الهاتف الجوال، رقم الواتساب، والبريد الإلكتروني.",
            "• متطلبات الخدمة: نوع الكادر المطلوب (عاملة منزلية، طاهٍ، سائق، ممرضة، مقدم رعاية)، تاريخ البدء المفضل، والمدة المطلوبة."
          ]
        },
        {
          icon: Lock,
          title: "٢. كيفية استخدام البيانات",
          paragraphs: [
            "تُستخدم بياناتك فقط للأغراض التشغيلية وتنسيق تقديم الخدمات المنزلية:",
            "• معالجة ومطابقة طلبك مع السير الذاتية للكوادر المؤهلة والمفحوصة قانونياً وصحياً.",
            "• التواصل المباشر معك عبر الهاتف أو الواتساب لمتابعة تفاصيل الطلب.",
            "• الامتثال للوائح العمل والإقامة المنظمة للخدمات المنزلية في دولة قطر.",
            "• ضمان جودة الخدمة والمتابعة الدورية بعد استلام الكادر للمهام."
          ]
        },
        {
          icon: Eye,
          title: "٣. سرية البيانات وحرمة البيوت القطرية",
          paragraphs: [
            "نحن ندرك ونحترم تماماً خصوصية وحرمة البيوت والعائلات في دولة قطر:",
            "• لا نقوم على الإطلاق ببيع أو مشاركة أو تأجير بيانات الاتصال الخاصة بك لأي جهات تسويقية خارجية.",
            "• تتم مشاركة بيانات الكوادر مع العميل المعني حصرياً لغايات الاختيار والتوظيف.",
            "• يلتزم جميع موظفينا وكوادرنا المنزلية باتفاقيات صارمة لحماية السرية والخصوصية."
          ]
        },
        {
          icon: FileText,
          title: "٤. أمن وحماية المعلومات",
          paragraphs: [
            "نطبق إجراءات أمنية وإدارية وتقنية متقدمة تضمن حماية السجلات والبيانات الرقمية من الوصول غير المصرح به أو التعديل أو الفقدان، مع استخدام التشفير القياسي الآمن."
          ]
        },
        {
          icon: CheckCircle2,
          title: "٥. حقوقك والاستفسارات",
          paragraphs: [
            "يحق لك في أي وقت طلب مراجعة بياناتك المسجلة لدينا أو تعديلها أو حذفها. لأي استفسارات تتعلق بسياسة الخصوصية، يسعدنا تواصلكم معنا عبر البريد info@ahmedfacility.qa أو الاتصال على الرقم ٤٤٥٥٦٦٧٧ ٩٧٤+."
          ]
        }
      ],
      contactBoxTitle: "هل لديك أي استفسار حول سياسة الخصوصية؟",
      contactBoxDesc: "فريق الامتثال وخدمة العملاء لدينا على أتم الاستعداد لمساعدتك والإجابة على كافة أسئلتك.",
      contactBtn: "تواصل مع فريقنا"
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

          {/* Policy Sections */}
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
