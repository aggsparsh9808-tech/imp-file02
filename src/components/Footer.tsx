import React from 'react';
import { TranslationStrings } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { analytics } from '../utils/analytics';
import { MessageSquare, Phone } from 'lucide-react';

interface FooterProps {
  t: TranslationStrings;
  onNavigate: (page: 'home' | 'refer', sectionId?: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onNavigate, onOpenLegal }) => {
  return (
    <footer id="main-footer" className="bg-white border-t border-neutral-200 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-100">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#13151A] tracking-tight uppercase">
                {t.brand.name}
              </span>
              <span className="text-sm font-bold text-neutral-600 mt-0.5 tracking-wider">
                {t.brand.number}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium max-w-sm leading-relaxed">
              India's leading flexible delivery recruitment helpline. Onboard in 10 minutes, work at your own schedule, and earn up to ₹30,000+ per month.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => {
                  analytics.track('footer_whatsapp_click');
                  openWhatsApp();
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#13151A] text-white text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Helpline</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-extrabold tracking-wider uppercase text-neutral-400 mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-[#13151A]">
                <li>
                  <button
                    onClick={() => onNavigate('home', 'hero')}
                    className="hover:underline cursor-pointer"
                  >
                    {t.footer.links.home}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('home', 'benefits')}
                    className="hover:underline cursor-pointer"
                  >
                    {t.footer.links.benefits}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('home', 'testimonials')}
                    className="hover:underline cursor-pointer"
                  >
                    {t.footer.links.testimonials}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-extrabold tracking-wider uppercase text-neutral-400 mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-[#13151A]">
                <li>
                  <button
                    onClick={() => onNavigate('home', 'onboarding')}
                    className="hover:underline cursor-pointer"
                  >
                    {t.footer.links.nextSteps}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('refer')}
                    className="hover:underline cursor-pointer text-[#13151A]"
                  >
                    {t.footer.links.referAndEarn}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('home', 'faq')}
                    className="hover:underline cursor-pointer"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Helpline */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-neutral-400">
              Registration Helpline
            </h4>
            <div className="bg-[#F3F3F3] p-4 rounded-2xl border border-neutral-200">
              <div className="flex items-center space-x-2 text-[#13151A] font-extrabold text-lg">
                <Phone className="w-4 h-4" />
                <span>89200 89200</span>
              </div>
              <p className="text-[11px] text-neutral-500 font-medium mt-1">
                Give a missed call or send a WhatsApp message anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
          <p id="footer-copyright">
            {t.footer.legal.copyright}
          </p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#13151A] cursor-pointer hover:underline"
            >
              {t.footer.legal.terms}
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#13151A] cursor-pointer hover:underline"
            >
              {t.footer.legal.privacy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
