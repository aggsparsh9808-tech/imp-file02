import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OnboardingSection } from './components/OnboardingSection';
import { ImpactSection } from './components/ImpactSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReferAndEarnBanner } from './components/ReferAndEarnBanner';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LiveCounter } from './components/LiveCounter';
import { LeadSuccessModal } from './components/LeadSuccessModal';
import { ReferAndEarnPage } from './components/ReferAndEarnPage';
import { LegalModal } from './components/LegalModal';
import { Language } from './types';
import { BRAND_CONFIG, TRANSLATIONS } from './data/content';
import { analytics } from './utils/analytics';
import { openWhatsApp } from './utils/whatsapp';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('user_preferred_language') as Language;
    return saved && TRANSLATIONS[saved] ? saved : BRAND_CONFIG.initialLanguage;
  });

  const [currentPage, setCurrentPage] = useState<'home' | 'refer'>('home');
  const [submittedPhone, setSubmittedPhone] = useState<string | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    localStorage.setItem('user_preferred_language', currentLang);
  }, [currentLang]);

  useEffect(() => {
    analytics.track('page_view', { page: currentPage, language: currentLang });
  }, [currentPage, currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleNavigate = (page: 'home' | 'refer', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLeadSuccess = (phone: string) => {
    setSubmittedPhone(phone);
  };

  return (
    <div className="min-h-screen bg-white text-[#13151A] flex flex-col font-sans selection:bg-[#13151A] selection:text-white">
      {/* Fixed Navigation Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero Section with Lead Form & High-Converting Value Proposition */}
            <HeroSection t={t} onLeadSuccess={handleLeadSuccess} />

            {/* 2. Rapid 3-Step Onboarding Interactive Accordion */}
            <OnboardingSection t={t} />

            {/* 3. The Impact So Far - Verified Statistics */}
            <ImpactSection t={t} />

            {/* 4. Benefits Section - 3 Left, Center Team Card, 3 Right */}
            <BenefitsSection t={t} />

            {/* 5. Testimonials Section - Ayush Quote, Interactive Video, Atish Quote */}
            <TestimonialsSection t={t} />

            {/* 6. Refer & Earn Hero Banner */}
            <ReferAndEarnBanner t={t} onNavigateToRefer={() => handleNavigate('refer')} />

            {/* 7. Frequently Asked Questions & 24x7 WhatsApp Help */}
            <FaqSection t={t} />
          </>
        ) : (
          /* Dedicated Refer & Earn Programme View */
          <ReferAndEarnPage t={t} onBackToHome={() => handleNavigate('home')} />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        t={t}
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating Live Activity Counter & Quick Chat */}
      <LiveCounter t={t} />

      {/* Sticky Quick-Action Bar for Mobile Screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-2.5 px-4 flex items-center space-x-3 shadow-lg">
        <button
          onClick={() => {
            if (currentPage === 'home') {
              const heroForm = document.getElementById('hero-phone-input-mobile') || document.getElementById('hero-phone-input');
              if (heroForm) {
                heroForm.focus();
                heroForm.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            } else {
              handleNavigate('home');
            }
          }}
          className="flex-1 py-3 bg-[#13151A] text-white font-bold text-xs rounded-xl shadow-md cursor-pointer text-center"
        >
          {t.hero.submitBtn} (Register)
        </button>

        <button
          onClick={() => {
            analytics.track('mobile_sticky_whatsapp_click');
            openWhatsApp();
          }}
          className="flex items-center justify-center space-x-1.5 px-4 py-3 bg-[#25D366] text-white font-bold text-xs rounded-xl shadow-md cursor-pointer shrink-0"
          aria-label="WhatsApp 89200 89200"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>89200 89200</span>
        </button>
      </div>

      {/* Lead Submission Success Dialog */}
      {submittedPhone && (
        <LeadSuccessModal
          phone={submittedPhone}
          onClose={() => setSubmittedPhone(null)}
        />
      )}

      {/* Legal T&C / Privacy Policy Dialog */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
