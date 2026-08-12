import React, { useState } from 'react';
import {
  ArrowLeft,
  Share2,
  Calculator,
  Users,
  Award,
  CheckCircle2,
  MessageSquare,
  Gift,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Copy,
  Check,
  ChevronDown,
  PhoneCall,
  ShieldCheck,
  Wallet,
  Clock,
  Zap,
} from 'lucide-react';
import { TranslationStrings } from '../types';
import { ASSETS, BRAND_CONFIG } from '../data/content';
import { openWhatsApp, getWhatsAppUrl } from '../utils/whatsapp';
import { analytics } from '../utils/analytics';

interface ReferAndEarnPageProps {
  t: TranslationStrings;
  onBackToHome: () => void;
}

export const ReferAndEarnPage: React.FC<ReferAndEarnPageProps> = ({
  t,
  onBackToHome,
}) => {
  const [referralCount, setReferralCount] = useState<number>(5);
  const [referrerName, setReferrerName] = useState<string>('');
  const [referrerPhone, setReferrerPhone] = useState<string>('');
  const [friendPhone, setFriendPhone] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [linkGenerated, setLinkGenerated] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Earning calculation based on ₹2,000 base per active friend (₹250 stage 1 + ₹1,750 stage 2) + milestone volume bonuses
  const calculateEarnings = (count: number): { base: number; bonus: number; total: number } => {
    const basePerPartner = 2000;
    const base = count * basePerPartner;
    let bonus = 0;
    if (count >= 15) {
      bonus = 25000;
    } else if (count >= 10) {
      bonus = 12000;
    } else if (count >= 5) {
      bonus = 5000;
    }
    const total = Math.min(100000, base + bonus);
    return { base, bonus, total };
  };

  const earnings = calculateEarnings(referralCount);

  // Formulate custom referral message
  const generateReferralMessage = () => {
    const cleanName = referrerName.trim();
    if (cleanName) {
      return `Hi! Mere dost ${cleanName} ne mujhe 89200 89200 par delivery partner banne ke liye refer kiya hai. Mujhe 10-minute onboarding link bhejein taaki main kaam shuru kar sakun.`;
    }
    return `Hi! Mere dost ne mujhe 89200 89200 par delivery partner banne ke liye refer kiya hai. Mujhe 10-minute onboarding link bhejein.`;
  };

  const handleShareWhatsApp = (customMessage?: string) => {
    const message = customMessage || generateReferralMessage();
    analytics.track('refer_page_share_whatsapp', {
      referralCount,
      hasCustomName: Boolean(referrerName.trim()),
      hasReferrerPhone: Boolean(referrerPhone.trim()),
      hasFriendPhone: Boolean(friendPhone.trim()),
    });
    openWhatsApp(message);
  };

  const handleGenerateLink = (e: React.FormEvent) => {
    e.preventDefault();
    setLinkGenerated(true);
    analytics.track('refer_page_link_generated', {
      name: referrerName,
      phone: referrerPhone,
      friendPhone: friendPhone,
    });
  };

  const handleCopyLink = () => {
    const message = generateReferralMessage();
    const url = getWhatsAppUrl(message);
    navigator.clipboard?.writeText(url);
    setCopied(true);
    analytics.track('refer_page_copy_link');
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
    analytics.track('refer_faq_toggle', { index });
  };

  return (
    <div id="refer-and-earn-page" className="pt-24 pb-20 bg-white text-[#13151A]">
      {/* 1. Top Breadcrumb & Quick Anchor Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-b border-neutral-100 pb-4">
          <button
            id="refer-back-to-home-btn"
            onClick={() => {
              analytics.track('refer_page_back_click');
              onBackToHome();
            }}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#13151A] hover:text-neutral-600 transition-colors p-2 rounded-lg hover:bg-neutral-100 cursor-pointer self-start"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center space-x-2 overflow-x-auto text-[11px] sm:text-xs font-bold text-neutral-600 py-1">
            <a
              href="#milestones-section"
              className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              Milestones
            </a>
            <a
              href="#calculator-section"
              className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              Calculator
            </a>
            <a
              href="#how-it-works-section"
              className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#benefits-section"
              className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              Benefits
            </a>
            <a
              href="#faq-section"
              className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Section with 2-Column Banner & Interactive Referral Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-[#13151A] text-white shadow-2xl border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 z-10 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-neutral-800/90 border border-neutral-700 rounded-full px-3.5 py-1.5 text-xs font-extrabold tracking-wider text-neutral-200 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>89200 89200 Official Referral Programme</span>
              </div>

              <h1
                id="refer-page-headline"
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
              >
                {t.referPage.headline}
              </h1>

              <p
                id="refer-page-subheadline"
                className="text-base sm:text-lg text-neutral-300 font-medium max-w-xl leading-relaxed"
              >
                {t.referPage.subheadline}
              </p>

              {/* Badges strip */}
              <div className="flex flex-wrap gap-2 pt-1">
                {t.referPage.heroBadges?.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 text-xs font-bold text-neutral-200 border border-neutral-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>{badge.text}</span>
                  </span>
                ))}
              </div>

              {/* Quick WhatsApp Action and Link Generator */}
              <div className="pt-4 border-t border-neutral-800 space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    id="refer-hero-instant-whatsapp-btn"
                    onClick={() => handleShareWhatsApp()}
                    className="px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#13151A] font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center space-x-2.5 transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                    <span>{t.referPage.cta}</span>
                  </button>

                  <a
                    href="#referral-link-form"
                    className="px-6 py-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center space-x-2 border border-neutral-700 transition-colors cursor-pointer"
                  >
                    <span>Generate Custom Link</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[360px] bg-neutral-900 flex items-center justify-center overflow-hidden">
              <img
                src={ASSETS.referGroup}
                alt="Delivery partner referral network"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#13151A] via-transparent to-transparent" />
              
              {/* Floating Highlight Card on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md text-[#13151A] p-4 rounded-2xl border border-neutral-200 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500">
                      Per Successful Join
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-[#13151A]">
                      ₹2,000 + Bonuses
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#13151A] text-white flex items-center justify-center font-black text-sm">
                    100%
                  </div>
                </div>
                <p className="text-[11px] text-neutral-600 font-semibold mt-1">
                  ₹250 on 1st order + ₹1,750 on milestone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof Strip & Top Champions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#F3F3F3] rounded-3xl p-6 sm:p-10 border border-neutral-200">
          {/* Key Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pb-8 border-b border-neutral-300">
            {t.referPage.socialProof.stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-black text-[#13151A] tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-600 mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonials Title */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#13151A] tracking-tight">
              {t.referPage.socialProof.heading}
            </h2>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.referPage.socialProof.testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-extrabold text-sm text-[#13151A]">{test.name}</h3>
                      <p className="text-[11px] text-neutral-500 font-semibold">{test.role} • {test.location}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#13151A] text-white text-xs font-black rounded-lg">
                      {test.amount}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center space-x-1 text-[11px] font-bold text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>Verified 89200 89200 Payout</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Transparent Milestone Payout Breakdown */}
      <section id="milestones-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
            <Zap className="w-4 h-4 text-[#13151A]" />
            <span>Guaranteed Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#13151A] tracking-tight">
            {t.referPage.milestones.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-2">
            {t.referPage.milestones.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.referPage.milestones.stages.map((stage, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-200 flex flex-col justify-between relative ${
                idx === 1
                  ? 'bg-[#13151A] text-white border-neutral-800 shadow-xl'
                  : 'bg-[#F3F3F3] text-[#13151A] border-neutral-200 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                      idx === 1 ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-[#13151A]'
                    }`}
                  >
                    {stage.milestone}
                  </span>
                  <Award className={`w-5 h-5 ${idx === 1 ? 'text-white' : 'text-[#13151A]'}`} />
                </div>

                <div
                  className={`text-3xl sm:text-4xl font-black tracking-tight mb-3 ${
                    idx === 1 ? 'text-white' : 'text-[#13151A]'
                  }`}
                >
                  {stage.amount}
                </div>

                <p
                  className={`text-xs sm:text-sm font-medium leading-relaxed ${
                    idx === 1 ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  {stage.description}
                </p>
              </div>

              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold ${
                  idx === 1 ? 'border-neutral-800 text-neutral-300' : 'border-neutral-300 text-neutral-600'
                }`}
              >
                <span>Automated Bank Transfer</span>
                <CheckCircle2 className={`w-4 h-4 ${idx === 1 ? 'text-white' : 'text-green-600'}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Interactive Earnings Calculator & Custom Link Generator */}
      <section id="calculator-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#F3F3F3] rounded-3xl p-6 sm:p-10 lg:p-12 border border-neutral-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#13151A] tracking-tight">
              {t.referPage.calculatorTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
              {t.referPage.calculatorSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider & Personalize Controls (Left) */}
            <div className="lg:col-span-7 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label
                    htmlFor="referral-count-slider"
                    className="text-sm sm:text-base font-bold text-[#13151A]"
                  >
                    Number of Friends to Refer:
                  </label>
                  <span className="text-2xl font-black text-[#13151A] bg-[#F3F3F3] px-4 py-1 rounded-xl">
                    {referralCount} {referralCount === 1 ? 'Friend' : 'Friends'}
                  </span>
                </div>

                <input
                  id="referral-count-slider"
                  type="range"
                  min="1"
                  max="30"
                  value={referralCount}
                  onChange={(e) => setReferralCount(parseInt(e.target.value, 10))}
                  className="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#13151A]"
                />

                <div className="flex justify-between text-[11px] font-bold text-neutral-400 mt-2">
                  <span>1 friend</span>
                  <span>5 (Bonus)</span>
                  <span>10 (Super)</span>
                  <span>15+ (Max Multiplier)</span>
                  <span>30</span>
                </div>
              </div>

              {/* Milestone tier pill indicators */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px]">
                <div className={`p-2.5 rounded-xl border ${referralCount >= 5 ? 'bg-[#13151A] text-white border-[#13151A]' : 'bg-neutral-50 text-neutral-400 border-neutral-200'}`}>
                  <span className="font-bold block">5+ Friends</span>
                  <span>+₹5,000 Bonus</span>
                </div>
                <div className={`p-2.5 rounded-xl border ${referralCount >= 10 ? 'bg-[#13151A] text-white border-[#13151A]' : 'bg-neutral-50 text-neutral-400 border-neutral-200'}`}>
                  <span className="font-bold block">10+ Friends</span>
                  <span>+₹12,000 Bonus</span>
                </div>
                <div className={`p-2.5 rounded-xl border ${referralCount >= 15 ? 'bg-[#13151A] text-white border-[#13151A]' : 'bg-neutral-50 text-neutral-400 border-neutral-200'}`}>
                  <span className="font-bold block">15+ Friends</span>
                  <span>+₹25,000 Bonus</span>
                </div>
              </div>

              {/* Personalized Link Generator Form */}
              <div id="referral-link-form" className="pt-4 border-t border-neutral-100 space-y-3">
                <span className="block text-xs font-bold text-neutral-800">
                  {t.referPage.formTitle}:
                </span>
                
                <form onSubmit={handleGenerateLink} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={referrerName}
                      onChange={(e) => setReferrerName(e.target.value)}
                      placeholder={t.referPage.formYourName}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm font-semibold text-[#13151A] focus:outline-none focus:border-[#13151A]"
                    />
                    <input
                      type="tel"
                      value={referrerPhone}
                      onChange={(e) => setReferrerPhone(e.target.value)}
                      placeholder={t.referPage.formYourPhone}
                      maxLength={10}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm font-semibold text-[#13151A] focus:outline-none focus:border-[#13151A]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="submit"
                      className="flex-1 py-2.5 bg-[#13151A] text-white rounded-xl text-xs font-bold tracking-wide hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      {t.referPage.formSubmitBtn}
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="px-4 py-2.5 bg-[#F3F3F3] hover:bg-neutral-200 text-[#13151A] rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Link' : 'Copy Share Link'}</span>
                    </button>
                  </div>
                </form>

                {linkGenerated && (
                  <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-200 flex items-center justify-between text-xs font-semibold text-[#13151A]">
                    <span>✓ {t.referPage.formSuccessMsg}</span>
                    <button
                      onClick={() => handleShareWhatsApp()}
                      className="text-xs font-bold underline cursor-pointer ml-2"
                    >
                      Share Now
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Estimated Total Calculation (Right) */}
            <div className="lg:col-span-5 bg-[#13151A] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Total Referral Earning Potential
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1 tracking-tight">
                  ₹{earnings.total.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-neutral-400 mt-1 font-medium">
                  {t.referPage.calculatorNote}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-neutral-800 text-xs sm:text-sm">
                <div className="flex justify-between text-neutral-300">
                  <span>Base Milestone Reward ({referralCount} × ₹2,000):</span>
                  <span className="font-bold text-white">₹{earnings.base.toLocaleString('en-IN')}</span>
                </div>
                {earnings.bonus > 0 && (
                  <div className="flex justify-between text-neutral-200 font-semibold">
                    <span>High-Volume Milestone Bonus:</span>
                    <span className="font-bold text-white">+ ₹{earnings.bonus.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    const customMsg = `Hi! Maine 89200 89200 referral calculator par check kiya hai ki ${referralCount} doston ko refer karke ₹${earnings.total.toLocaleString('en-IN')} kamaye ja sakte hain. Mujhe mera personalized referral link activate karwana hai.`;
                    handleShareWhatsApp(customMsg);
                  }}
                  className="w-full py-3.5 bg-white hover:bg-neutral-100 text-[#13151A] font-extrabold text-sm rounded-xl tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-[#13151A]" />
                  <span>Share Calculation on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works (3 Simple Steps) */}
      <section id="how-it-works-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
            <Clock className="w-4 h-4" />
            <span>Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#13151A] tracking-tight">
            {t.referPage.howItWorksTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
            {t.referPage.howItWorksSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.referPage.steps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#13151A] text-white font-black text-lg flex items-center justify-center mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#13151A] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Benefits & Who Can Refer Section (Bento Grid) */}
      <section id="benefits-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Referral Benefits */}
          <div className="bg-[#F3F3F3] p-8 sm:p-10 rounded-3xl border border-neutral-200">
            <h3 className="text-xl sm:text-2xl font-black text-[#13151A] mb-6 tracking-tight flex items-center space-x-2.5">
              <Gift className="w-6 h-6 text-[#13151A]" />
              <span>{t.referPage.benefitsTitle}</span>
            </h3>
            <ul className="space-y-4">
              {t.referPage.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#13151A] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who Can Refer */}
          <div className="bg-[#F3F3F3] p-8 sm:p-10 rounded-3xl border border-neutral-200">
            <h3 className="text-xl sm:text-2xl font-black text-[#13151A] mb-6 tracking-tight flex items-center space-x-2.5">
              <Users className="w-6 h-6 text-[#13151A]" />
              <span>{t.referPage.whoCanReferTitle}</span>
            </h3>
            <ul className="space-y-4">
              {t.referPage.whoCanRefer.map((who, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#13151A] shrink-0 mt-0.5" />
                  <span>{who}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Dedicated Referral FAQ Section */}
      <section id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#13151A] tracking-tight">
            {t.referPage.faqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
            {t.referPage.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {t.referPage.faqItems.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F3F3F3] border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center cursor-pointer hover:bg-neutral-200/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-sm sm:text-base text-[#13151A] pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-300 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#13151A] text-white' : 'text-[#13151A]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed border-t border-neutral-200/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Bottom High-Impact CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#13151A] text-white p-8 sm:p-14 rounded-3xl sm:rounded-4xl shadow-2xl border border-neutral-800 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-neutral-800 px-3.5 py-1.5 rounded-full text-xs font-bold text-neutral-300 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>Instant WhatsApp Referral Desk</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto">
            {t.referPage.bottomCta.title}
          </h3>

          <p className="text-xs sm:text-base text-neutral-300 font-medium max-w-xl mx-auto leading-relaxed">
            {t.referPage.bottomCta.subtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handleShareWhatsApp()}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-[#13151A] hover:bg-neutral-100 font-extrabold text-sm sm:text-base rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              <span>{t.referPage.bottomCta.button}</span>
            </button>

            <button
              onClick={() => {
                analytics.track('refer_page_call_click');
                window.location.href = 'tel:8920089200';
              }}
              className="inline-flex items-center space-x-2 px-6 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm rounded-full border border-neutral-700 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call 89200 89200</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
