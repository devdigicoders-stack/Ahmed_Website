import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MonthlyStaffing from './pages/MonthlyStaffing';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import LegalInfo from './pages/LegalInfo';
import TermsConditions from './pages/TermsConditions';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/monthly-staffing" element={<MonthlyStaffing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<LegalInfo />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col justify-between bg-[#FDFBF7] text-[#241E1E]">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
