import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageSquare, Globe } from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { analytics } from '../utils/analytics';
import { openWhatsApp } from '../utils/whatsapp';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationStrings;
  currentPage: 'home' | 'refer';
  onNavigate: (page: 'home' | 'refer', sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  t,
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      analytics.track('nav_click', { section: sectionId });
      onNavigate('home', sectionId);
    } else {
      onNavigate('home');
    }
  };

  const handleReferClick = () => {
    setMobileMenuOpen(false);
    analytics.track('refer_and_earn_nav_click');
    onNavigate('refer');
  };

  const languages: Array<{ code: Language; label: string; nativeName: string }> = [
    { code: 'hinglish', label: 'Hinglish', nativeName: 'Hinglish' },
    { code: 'hindi', label: 'हिंदी', nativeName: 'Hindi' },
    { code: 'english', label: 'English', nativeName: 'English' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#13151A]/10 py-3'
          : 'bg-white py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <button
          id="header-brand-logo"
          onClick={() => handleNavClick()}
          className="flex flex-col items-start text-left group cursor-pointer focus:outline-none"
          aria-label="KAAM KA NUMBER Home"
        >
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#13151A] uppercase leading-none">
            {t.brand.name}
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#13151A]/80 leading-tight mt-0.5">
            {t.brand.number}
          </span>
        </button>

        {/* Center: Navigation Links (Desktop) */}
        <nav
          id="desktop-nav-links"
          className="hidden md:flex items-center space-x-8 text-xs lg:text-sm font-semibold tracking-wider text-[#13151A]"
          aria-label="Main Navigation"
        >
          <button
            id="nav-home"
            onClick={() => handleNavClick('hero')}
            className={`hover:text-[#13151A]/70 transition-colors uppercase cursor-pointer ${
              currentPage === 'home' ? 'text-[#13151A]' : 'text-[#13151A]/60'
            }`}
          >
            {t.nav.home}
          </button>
          <button
            id="nav-impact"
            onClick={() => handleNavClick('impact')}
            className="hover:text-[#13151A]/70 transition-colors uppercase text-[#13151A]/80 cursor-pointer"
          >
            {t.nav.impact}
          </button>
          <button
            id="nav-benefits"
            onClick={() => handleNavClick('benefits')}
            className="hover:text-[#13151A]/70 transition-colors uppercase text-[#13151A]/80 cursor-pointer"
          >
            {t.nav.benefits}
          </button>
          <button
            id="nav-testimonials"
            onClick={() => handleNavClick('testimonials')}
            className="hover:text-[#13151A]/70 transition-colors uppercase text-[#13151A]/80 cursor-pointer"
          >
            {t.nav.testimonials}
          </button>
          <button
            id="nav-faq"
            onClick={() => handleNavClick('faq')}
            className="hover:text-[#13151A]/70 transition-colors uppercase text-[#13151A]/80 cursor-pointer"
          >
            {t.nav.faq}
          </button>
        </nav>

        {/* Right: Actions (Refer & Earn + Language + Mobile Trigger) */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Refer & Earn CTA button */}
          <button
            id="header-refer-cta"
            onClick={handleReferClick}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer whitespace-nowrap ${
              currentPage === 'refer'
                ? 'bg-white text-[#13151A] border-2 border-[#13151A]'
                : 'bg-[#13151A] text-white hover:bg-[#13151A]/90'
            }`}
          >
            {t.nav.referAndEarn}
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              id="language-selector-btn"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#13151A] hover:bg-[#F3F3F3] transition-colors border border-[#13151A]/20 cursor-pointer"
              aria-expanded={langDropdownOpen}
              aria-label="Select Language"
            >
              <span className="text-xs font-bold font-mono">अA</span>
              <span className="hidden xs:inline uppercase text-[11px]">
                {currentLang === 'hinglish' ? 'Hing' : currentLang === 'hindi' ? 'हिंदी' : 'Eng'}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div
                  id="language-dropdown-menu"
                  className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-[#13151A]/10 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                        analytics.track('language_changed', { lang: lang.code });
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium flex items-center justify-between cursor-pointer transition-colors ${
                        currentLang === lang.code
                          ? 'bg-[#13151A] text-white font-semibold'
                          : 'text-[#13151A] hover:bg-[#F3F3F3]'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {currentLang === lang.code && <span className="text-[10px]">✓</span>}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#13151A] hover:bg-[#F3F3F3] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-b border-[#13151A]/15 px-4 pt-3 pb-6 space-y-3 shadow-lg"
        >
          <div className="flex flex-col space-y-2 pt-2">
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('hero')}
              className="text-left px-3 py-2 text-sm font-bold text-[#13151A] hover:bg-[#F3F3F3] rounded-lg cursor-pointer"
            >
              {t.nav.home}
            </button>
            <button
              id="mobile-nav-impact"
              onClick={() => handleNavClick('impact')}
              className="text-left px-3 py-2 text-sm font-semibold text-[#13151A] hover:bg-[#F3F3F3] rounded-lg cursor-pointer"
            >
              {t.nav.impact}
            </button>
            <button
              id="mobile-nav-benefits"
              onClick={() => handleNavClick('benefits')}
              className="text-left px-3 py-2 text-sm font-semibold text-[#13151A] hover:bg-[#F3F3F3] rounded-lg cursor-pointer"
            >
              {t.nav.benefits}
            </button>
            <button
              id="mobile-nav-testimonials"
              onClick={() => handleNavClick('testimonials')}
              className="text-left px-3 py-2 text-sm font-semibold text-[#13151A] hover:bg-[#F3F3F3] rounded-lg cursor-pointer"
            >
              {t.nav.testimonials}
            </button>
            <button
              id="mobile-nav-faq"
              onClick={() => handleNavClick('faq')}
              className="text-left px-3 py-2 text-sm font-semibold text-[#13151A] hover:bg-[#F3F3F3] rounded-lg cursor-pointer"
            >
              {t.nav.faq}
            </button>
          </div>

          <div className="pt-3 border-t border-[#13151A]/10 space-y-2">
            <button
              id="mobile-refer-btn"
              onClick={handleReferClick}
              className="w-full py-3 bg-[#13151A] text-white text-center rounded-xl text-sm font-bold tracking-wide cursor-pointer"
            >
              {t.nav.referAndEarn}
            </button>

            <button
              id="mobile-whatsapp-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                analytics.track('mobile_menu_whatsapp_click');
                openWhatsApp();
              }}
              className="w-full py-2.5 border border-[#13151A] text-[#13151A] text-center rounded-xl text-xs font-bold tracking-wide flex items-center justify-center space-x-2 cursor-pointer hover:bg-[#F3F3F3]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp 89200 89200</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
