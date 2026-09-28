import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageTransition from '../components/PageTransition';
import SafeImage from '../components/SafeImage';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Send,
  ShieldCheck
} from 'lucide-react';
import { saveEnquiry } from '../services/enquiryService';

export default function Contact() {
  const { t, lang, isRTL } = useLanguage();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    emailAddress: '',
    serviceRequired: searchParams.get('type') || 'Housemaid',
    preferredDuration: 'Monthly',
    preferredStartDate: '',
    additionalRequirements: searchParams.get('staff') ? `Inquiry regarding Candidate Profile ID: ${searchParams.get('staff')}` : ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const prefillType = searchParams.get('type');
    const prefillStaff = searchParams.get('staff');
    if (prefillType || prefillStaff) {
      setFormData(prev => ({
        ...prev,
        serviceRequired: prefillType ? prefillType.charAt(0).toUpperCase() + prefillType.slice(1) : prev.serviceRequired,
        additionalRequirements: prefillStaff ? `Inquiry for Candidate ID: ${prefillStaff}` : prev.additionalRequirements
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save to enquiry system
    saveEnquiry(formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <PageTransition>
      <div className="space-y-12 py-4">

        {/* HERO SECTION */}
        <section className="relative py-10 bg-gradient-to-b from-[#FAF8F5] via-[#F3EDE2] to-[#FAF8F5] border-b border-[#E5DBCE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-[#5B132B]/10 text-[#5B132B] text-xs font-bold tracking-wider uppercase">
              {t.contact.badge}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#380C1B] max-w-4xl mx-auto leading-tight">
              {t.contact.heroTitle}
            </h1>
            <p className="text-xs sm:text-base text-[#665E5E] max-w-2xl mx-auto leading-relaxed">
              {t.contact.heroDesc}
            </p>
          </div>
        </section>

        {/* MAIN CONTACT & FORM CONTAINER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#E5DBCE] shadow-xl">
              {isSubmitted ? (
                <div className="py-6 px-4 sm:px-6 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={30} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#380C1B]">
                      {t.contact.successTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#665E5E] max-w-sm mx-auto leading-relaxed">
                      {t.contact.successMsg}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#5B132B] hover:bg-[#380C1B] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      {lang === 'en' ? 'Submit Another Request' : 'تقديم طلب آخر'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                      {lang === 'en' ? 'Online Enquiry' : 'طلب التوظيف الإلكتروني'}
                    </span>
                    <h2 className="text-2xl font-extrabold text-[#380C1B] mt-1">
                      {t.contact.formTitle}
                    </h2>
                    <p className="text-xs text-[#665E5E] mt-1">
                      {t.contact.formSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#380C1B]">
                        {t.contact.fullName} <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={lang === 'en' ? 'e.g. Mohammed Al-Thani' : 'مثال: محمد الكواري'}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#380C1B]">
                        {t.contact.mobileNumber} <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="+974 XXXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#380C1B]">
                        {t.contact.whatsappNumber}
                      </label>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        placeholder="+974 XXXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#380C1B]">
                        {t.contact.emailAddress}
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required Dropdown (PDF mandated options) */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#380C1B]">
                        {t.contact.serviceRequired} <span className="text-rose-600">*</span>
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                      >
                        <option value="Housemaid">{lang === 'en' ? 'Housemaid' : 'عاملة منزلية'}</option>
                        <option value="House Cook">{lang === 'en' ? 'House Cook' : 'طاهٍ منزلي'}</option>
                        <option value="Family Driver">{lang === 'en' ? 'Family Driver' : 'سائق عائلي'}</option>
                        <option value="Private Nurse">{lang === 'en' ? 'Private Nurse' : 'ممرضة خاصة'}</option>
                        <option value="Caregiver">{lang === 'en' ? 'Caregiver' : 'مقدم رعاية'}</option>
                        <option value="Other">{lang === 'en' ? 'Other Household Staff' : 'خدمة وتخصص آخر'}</option>
                      </select>
                    </div>

                    {/* Service Duration */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#380C1B]">
                        {t.contact.preferredDuration} <span className="text-rose-600">*</span>
                      </label>
                      <select
                        name="preferredDuration"
                        value={formData.preferredDuration}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                      >
                        <option value="Monthly">{lang === 'en' ? 'Monthly Contract' : 'عقد شهري منتظم'}</option>
                        <option value="3 Months">{lang === 'en' ? '3 Months Fixed' : '٣ أشهر'}</option>
                        <option value="6 Months">{lang === 'en' ? '6 Months Fixed' : '٦ أشهر'}</option>
                        <option value="Annual / Ongoing">{lang === 'en' ? 'Annual / Ongoing' : 'سنوي / مستمر'}</option>
                        <option value="Other">{lang === 'en' ? 'Other' : 'أخرى'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Start Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#380C1B]">
                      {t.contact.preferredStartDate}
                    </label>
                    <input
                      type="date"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                    />
                  </div>

                  {/* Additional Requirements */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#380C1B]">
                      {t.contact.additionalRequirements}
                    </label>
                    <textarea
                      name="additionalRequirements"
                      rows={4}
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      placeholder={lang === 'en' ? 'Describe specific family requirements, villa size, schedule, preferred language, or candidate ID...' : 'اذكر أية تفضيلات خاصة بالأسرة، مواعيد العمل، حجم الفيلا، أو رقم الكادر المطلوب...'}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DBCE] text-sm text-[#380C1B] focus:outline-none focus:border-[#5B132B]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5B132B] to-[#7E203E] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.submitting}</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t.contact.submitBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details & WhatsApp Direct Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Photo Banner */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-[#E5DBCE] h-60 relative group bg-[#F5EFE6]">
                <SafeImage
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=85"
                  alt="Staffing Consultation Qatar"
                  className="w-full h-full"
                  objectPosition="object-center"
                  imgClassName="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0915]/95 via-[#2B0915]/40 to-transparent flex items-end p-5 pointer-events-none z-10">
                  <div className="space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C5A059] text-[#2B0915] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {lang === 'en' ? 'Quick 2-Hour Response' : 'استجابة سريعة خلال ساعتين'}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-md">
                      {lang === 'en' ? 'Dedicated Staffing Consultant Assigned to Your Family' : 'مستشار توظيف مخصص لمتابعة متطلبات عائلتك'}
                    </h4>
                  </div>
                </div>
              </div>

              {/* WhatsApp Box (PDF Priority) */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#128C7E] to-[#075E54] text-white shadow-xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{t.contact.whatsappBox.title}</h3>
                    <p className="text-[11px] text-emerald-100">{lang === 'en' ? 'Direct Consultation in Qatar' : 'استشارة مباشرة وسريعة في قطر'}</p>
                  </div>
                </div>

                <p className="text-xs text-white/90 leading-relaxed">
                  {t.contact.whatsappBox.desc}
                </p>

                <a
                  href="https://wa.me/97455123456"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-white hover:text-[#075E54] text-white font-bold text-xs text-center shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  <span>{t.contact.whatsappBox.btn}</span>
                </a>
              </div>

              {/* Direct Office Information */}
              <div className="p-8 rounded-3xl bg-white border border-[#E5DBCE] shadow-md space-y-6">
                <h3 className="text-lg font-bold text-[#380C1B] border-b border-[#F0EAE1] pb-3">
                  {lang === 'en' ? 'Office & Contact Information' : 'بيانات التواصل والمقر'}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#5B132B]/10 text-[#5B132B] flex-shrink-0 mt-0.5">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8A8181] block uppercase">{t.contact.info.phoneLabel}</span>
                      <a href="tel:+97444556677" className="font-bold text-[#380C1B] hover:text-[#5B132B]">
                        {t.contact.info.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#5B132B]/10 text-[#5B132B] flex-shrink-0 mt-0.5">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8A8181] block uppercase">{t.contact.info.emailLabel}</span>
                      <a href="mailto:info@ahmedfacility.qa" className="font-bold text-[#380C1B] hover:text-[#5B132B]">
                        {t.contact.info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#5B132B]/10 text-[#5B132B] flex-shrink-0 mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8A8181] block uppercase">{t.contact.info.locationLabel}</span>
                      <p className="font-bold text-[#380C1B]">
                        {t.contact.info.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#5B132B]/10 text-[#5B132B] flex-shrink-0 mt-0.5">
                      <Clock size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#8A8181] block uppercase">{lang === 'en' ? 'Working Hours' : 'ساعات العمل'}</span>
                      <p className="font-semibold text-[#524848]">
                        {t.contact.info.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Integration (PDF Mandated) */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#8A8181] uppercase block mb-2">
                    {lang === 'en' ? 'Map Location — Doha, Qatar' : 'موقعنا على الخريطة — الدوحة'}
                  </span>
                  <div className="w-full h-44 rounded-2xl overflow-hidden border border-[#E5DBCE] relative">
                    <iframe
                      title="Ahmed Facility Services Doha Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.84852932373!2d51.44195655!3d25.286106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
