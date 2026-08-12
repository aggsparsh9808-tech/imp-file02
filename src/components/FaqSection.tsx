import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, HelpCircle } from 'lucide-react';
import { TranslationStrings } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { analytics } from '../utils/analytics';

interface FaqSectionProps {
  t: TranslationStrings;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    const nextState = openIndex === index ? null : index;
    setOpenIndex(nextState);
    if (nextState !== null) {
      analytics.track('faq_item_opened', { faqIndex: index, question: t.faq.items[index]?.question });
    }
  };

  const handleWhatsAppHelp = () => {
    analytics.track('faq_whatsapp_help_clicked');
    openWhatsApp('Hi, mujhe delivery partner registration ke baare mein kuch doubts hain.');
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            id="faq-eyebrow"
            className="text-xs sm:text-sm font-bold tracking-widest text-[#13151A]/70 uppercase"
          >
            {t.faq.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-[#13151A] tracking-tight"
          >
            {t.faq.heading}
          </h2>
        </div>

        {/* Accordion Container with clean horizontal dividers */}
        <div
          id="faq-accordion-list"
          className="divide-y divide-neutral-200 border-t border-b border-neutral-200"
        >
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} id={`faq-item-${idx}`} className="py-5 sm:py-6">
                <button
                  id={`faq-question-btn-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#13151A] group-hover:text-neutral-700 transition-colors pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#13151A] text-white rotate-180'
                        : 'bg-[#F3F3F3] text-[#13151A] group-hover:bg-neutral-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="mt-3.5 pr-8 text-sm sm:text-base text-neutral-600 font-medium leading-relaxed animate-in fade-in duration-150"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div
          id="faq-help-box"
          className="mt-12 bg-[#F3F3F3] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-200"
        >
          <div className="flex items-center space-x-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#13151A] flex items-center justify-center text-white shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#13151A]">
                {t.faq.helpText}
              </p>
              <p className="text-xs text-neutral-500 font-medium">
                Our support team is active 24x7 to guide your onboarding.
              </p>
            </div>
          </div>

          <button
            id="faq-whatsapp-btn"
            onClick={handleWhatsAppHelp}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#13151A] text-white font-bold text-xs sm:text-sm tracking-wide hover:bg-neutral-900 transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.faq.whatsappBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
