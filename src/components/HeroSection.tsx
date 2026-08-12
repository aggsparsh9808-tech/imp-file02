import React, { useState } from 'react';
import { Check, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { TranslationStrings } from '../types';
import { ASSETS } from '../data/content';
import { analytics } from '../utils/analytics';

interface HeroSectionProps {
  t: TranslationStrings;
  onLeadSuccess: (phone: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t, onLeadSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validatePhone = (phone: string): boolean => {
    const clean = phone.replace(/\D/g, '');
    return clean.length === 10 && /^[6-9]/.test(clean);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const digitsOnly = rawVal.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(digitsOnly);
    if (errorMsg) setErrorMsg('');
    if (digitsOnly.length === 1) {
      analytics.track('registration_form_started');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      setErrorMsg('Please enter your contact number');
      return;
    }
    if (!validatePhone(phoneNumber)) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!agreedToTerms) {
      setErrorMsg('Please accept the terms to continue');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    analytics.track('registration_form_submitted', { phone: `+91${phoneNumber}` });

    // Simulate API registration request
    setTimeout(() => {
      setIsSubmitting(false);
      analytics.track('registration_form_success', { phone: `+91${phoneNumber}` });
      onLeadSuccess(phoneNumber);
    }, 650);
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-black text-white overflow-hidden pt-[68px] selection:bg-[#13151A] selection:text-white"
    >
      {/* ========================================================================= */}
      {/* 1. MOBILE & TABLET HERO (< lg) — EXACT COMPOSITION OF SOURCE IMAGE 2     */}
      {/* ========================================================================= */}
      <div id="hero-mobile-container" className="lg:hidden flex flex-col w-full">
        {/* UPPER PORTION: Rider Image with Exact Badge Composition */}
        <div
          id="hero-mobile-image-wrapper"
          className="relative w-full h-[52vh] min-h-[380px] max-h-[500px] bg-neutral-950 overflow-hidden"
        >
          <img
            id="hero-delivery-partner-image-mobile"
            src={ASSETS.hero}
            alt="89200 89200 Delivery Partner"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_18%] sm:object-[center_15%]"
          />

          {/* Subtle bottom gradient overlay for smooth transition into black content section */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

          {/* Top-Left Floating Credited Badge (IMAGE 2) */}
          <div
            id="badge-credited-income-mobile"
            className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/25 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center space-x-2.5 text-white"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#16A34A] flex items-center justify-center text-white shrink-0 shadow-sm">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-black tracking-tight text-white leading-none">
                + ₹30,000
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-neutral-300 leading-none mt-1">
                {t.hero.badges.credited}
              </div>
            </div>
          </div>

          {/* Middle-Left Badge: Food delivery work (IMAGE 2) */}
          <div
            id="badge-food-delivery-work-mobile"
            className="absolute top-[42%] left-4 z-20 inline-flex items-center bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 shadow-lg text-[11px] sm:text-xs font-bold tracking-wide text-white"
          >
            {t.hero.badges.foodDelivery}
          </div>

          {/* Bottom-Right Badge: Pan-India Hiring (IMAGE 2) */}
          <div
            id="badge-pan-india-hiring-mobile"
            className="absolute bottom-6 right-4 z-20 inline-flex items-center bg-black/65 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2 shadow-xl text-[11px] sm:text-xs font-bold tracking-wide text-white"
          >
            {t.hero.badges.panIndia}
          </div>
        </div>

        {/* LOWER PORTION: Solid Black Content Section (IMAGE 2) */}
        <div
          id="hero-mobile-content-wrapper"
          className="bg-black px-5 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16 text-white space-y-6"
        >
          {/* Headline & Subheadline */}
          <div className="space-y-2.5">
            <h1
              id="hero-main-headline-mobile"
              className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.15] text-white whitespace-pre-line"
            >
              {t.hero.headline}
            </h1>

            <p
              id="hero-subheadline-mobile"
              className="text-sm sm:text-base font-normal text-white/90 sm:text-neutral-300 leading-relaxed"
            >
              {t.hero.subheadline}
            </p>
          </div>

          {/* Registration Card (IMAGE 2) */}
          <div
            id="hero-registration-card-mobile"
            className="bg-[#181B22] border border-neutral-700/60 rounded-2xl p-5 sm:p-6 shadow-2xl"
          >
            <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight mb-4">
              {t.hero.formTitle}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label
                  htmlFor="hero-phone-input-mobile"
                  className="block text-xs font-medium text-neutral-300 mb-1"
                >
                  {t.hero.phoneLabel}
                </label>
                <div className="relative flex items-center rounded-xl bg-neutral-800/90 border border-neutral-600 focus-within:border-white transition-colors overflow-hidden">
                  <span className="pl-3.5 pr-2 text-xs sm:text-sm font-bold text-neutral-200 select-none">
                    +91
                  </span>
                  <div className="h-5 w-px bg-neutral-600 my-auto" />
                  <input
                    id="hero-phone-input-mobile"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder={t.hero.phonePlaceholder}
                    maxLength={10}
                    className="w-full bg-transparent px-3 py-2.5 text-sm sm:text-base font-semibold text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>
                {errorMsg && (
                  <p className="mt-1.5 text-xs text-red-400 font-medium flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errorMsg}</span>
                  </p>
                )}
              </div>

              {/* T&C Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  id="hero-terms-checkbox-mobile"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 rounded-sm bg-neutral-800 border-neutral-600 text-[#13151A] focus:ring-0 cursor-pointer accent-white"
                />
                <label
                  htmlFor="hero-terms-checkbox-mobile"
                  className="text-xs text-neutral-300 select-none cursor-pointer"
                >
                  {t.hero.termsLabel}
                </label>
              </div>

              {/* Submit Button */}
              <button
                id="hero-submit-button-mobile"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-white hover:bg-neutral-100 text-[#13151A] font-extrabold text-sm rounded-xl tracking-wide transition-all shadow-md active:scale-[0.99] disabled:opacity-75 cursor-pointer flex items-center justify-center space-x-2 min-h-[44px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#13151A]" />
                    <span>{t.hero.submittingBtn}</span>
                  </>
                ) : (
                  <span>{t.hero.submitBtn}</span>
                )}
              </button>

              {/* WhatsApp instant reply note */}
              <div className="flex items-center space-x-2 pt-1 text-[11px] sm:text-xs text-neutral-300 font-medium">
                <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-2.5 h-2.5 text-[#25D366]" />
                </div>
                <span>{t.hero.whatsappNote}</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP & LAPTOP HERO (>= lg) — EXACT COMPOSITION OF SOURCE IMAGE 1    */}
      {/* ========================================================================= */}
      <div
        id="hero-desktop-container"
        className="hidden lg:block relative w-full min-h-[640px] xl:min-h-[700px] 2xl:min-h-[740px] overflow-hidden"
      >
        {/* RIGHT SIDE: Dominant Rider Photograph with Smooth Edge Blend */}
        <div
          id="hero-desktop-image-layer"
          className="absolute right-0 top-0 bottom-0 w-[58%] xl:w-[56%] 2xl:w-[54%] h-full z-0 overflow-hidden pointer-events-none"
        >
          <img
            id="hero-delivery-partner-image"
            src={ASSETS.hero}
            alt="89200 89200 Delivery Partner"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_20%] xl:object-[60%_20%]"
          />

          {/* Left-edge smooth blend into black content area - only covers left 40% so rider's face & body are clear and bright */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        {/* FLOATING LABELS & BADGES (Positioned precisely as shown in IMAGE 1) */}
        {/* 1. Earnings badge (+ ₹30,000 Credited) positioned in the upper foliage */}
        <div
          id="badge-credited-income"
          className="absolute top-12 lg:top-14 xl:top-16 right-[33%] xl:right-[35%] 2xl:right-[37%] z-20 bg-black/60 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2.5 shadow-2xl flex items-center space-x-3 text-white pointer-events-none"
        >
          <div className="w-6 h-6 rounded-full bg-[#16A34A] flex items-center justify-center text-white shrink-0 shadow-sm">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <div>
            <div className="text-lg xl:text-xl font-black tracking-tight text-white leading-none">
              + ₹30,000
            </div>
            <div className="text-[11px] xl:text-xs font-medium text-neutral-300 leading-none mt-1">
              {t.hero.badges.credited}
            </div>
          </div>
        </div>

        {/* 2. Food delivery work pill positioned to the left of rider's chest */}
        <div
          id="badge-food-delivery-work"
          className="absolute top-[50%] right-[36%] xl:right-[38%] 2xl:right-[40%] z-20 inline-flex items-center bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-lg text-xs xl:text-sm font-bold tracking-wide text-white pointer-events-none"
        >
          {t.hero.badges.foodDelivery}
        </div>

        {/* 3. Pan-India Hiring pill positioned on bottom right over backpack */}
        <div
          id="badge-pan-india-hiring"
          className="absolute bottom-12 xl:bottom-16 right-8 xl:right-14 2xl:right-20 z-20 inline-flex items-center bg-black/65 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 shadow-xl text-xs xl:text-sm font-bold tracking-wide text-white pointer-events-none"
        >
          {t.hero.badges.panIndia}
        </div>

        {/* LEFT SIDE: Black Content Area with Headline, Subheadline & Registration Card */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 h-full min-h-[640px] xl:min-h-[700px] 2xl:min-h-[740px] flex items-center">
          <div className="w-full max-w-[500px] xl:max-w-[540px] py-12 lg:py-16 space-y-6">
            {/* Headline */}
            <h1
              id="hero-main-headline"
              className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white whitespace-pre-line"
            >
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheadline"
              className="text-base lg:text-lg font-medium text-neutral-300 leading-relaxed"
            >
              {t.hero.subheadline}
            </p>

            {/* Desktop Registration Card */}
            <div
              id="hero-registration-card"
              className="bg-[#181B22]/95 backdrop-blur-md border border-neutral-700/80 rounded-2xl p-6 shadow-2xl"
            >
              <h2 className="text-base lg:text-lg font-extrabold text-white tracking-tight mb-4">
                {t.hero.formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="hero-phone-input"
                    className="block text-xs font-medium text-neutral-300 mb-1"
                  >
                    {t.hero.phoneLabel}
                  </label>
                  <div className="relative flex items-center rounded-xl bg-neutral-800/90 border border-neutral-600 focus-within:border-white transition-colors overflow-hidden">
                    <span className="pl-3.5 pr-2 text-sm font-bold text-neutral-200 select-none">
                      +91
                    </span>
                    <div className="h-5 w-px bg-neutral-600 my-auto" />
                    <input
                      id="hero-phone-input"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      placeholder={t.hero.phonePlaceholder}
                      maxLength={10}
                      className="w-full bg-transparent px-3 py-2.5 text-base font-semibold text-white placeholder-neutral-500 focus:outline-none"
                    />
                  </div>
                  {errorMsg && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errorMsg}</span>
                    </p>
                  )}
                </div>

                {/* T&C Checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    id="hero-terms-checkbox"
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-4 h-4 rounded-sm bg-neutral-800 border-neutral-600 text-[#13151A] focus:ring-0 cursor-pointer accent-white"
                  />
                  <label
                    htmlFor="hero-terms-checkbox"
                    className="text-xs text-neutral-300 select-none cursor-pointer"
                  >
                    {t.hero.termsLabel}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  id="hero-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-white hover:bg-neutral-100 text-[#13151A] font-extrabold text-sm rounded-xl tracking-wide transition-all shadow-md active:scale-[0.99] disabled:opacity-75 cursor-pointer flex items-center justify-center space-x-2 min-h-[44px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#13151A]" />
                      <span>{t.hero.submittingBtn}</span>
                    </>
                  ) : (
                    <span>{t.hero.submitBtn}</span>
                  )}
                </button>

                {/* WhatsApp instant reply note */}
                <div className="flex items-center space-x-2 pt-1 text-xs text-neutral-300 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-2.5 h-2.5 text-[#25D366]" />
                  </div>
                  <span>{t.hero.whatsappNote}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
