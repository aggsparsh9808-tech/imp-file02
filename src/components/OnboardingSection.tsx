import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PhoneCall, UploadCloud, Timer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TranslationStrings } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { analytics } from '../utils/analytics';

interface OnboardingSectionProps {
  t: TranslationStrings;
}

export const OnboardingSection: React.FC<OnboardingSectionProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeStepModal, setActiveStepModal] = useState<number | null>(null);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <PhoneCall className="w-6 h-6 text-white" />;
      case 1:
        return <UploadCloud className="w-6 h-6 text-white" />;
      case 2:
      default:
        return <Timer className="w-6 h-6 text-white" />;
    }
  };

  const handleStepClick = (index: number) => {
    analytics.track('onboarding_step_click', { stepIndex: index + 1 });
    if (index === 0) {
      openWhatsApp('Hi, mujhe delivery partner registration ke liye onboarding process start karni hai.');
    } else {
      setActiveStepModal(index);
    }
  };

  return (
    <section id="onboarding" className="py-10 sm:py-16 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accordion / Card Container matching screenshot */}
        <div
          id="onboarding-card-container"
          className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F3F3F3] border border-neutral-300 shadow-sm"
        >
          {/* Header Bar (Dark #13151A background with white text) */}
          <button
            id="onboarding-toggle-header"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-[#13151A] text-white px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between text-left cursor-pointer transition-colors hover:bg-neutral-900"
            aria-expanded={isOpen}
            aria-controls="onboarding-steps-content"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              {t.onboarding.title}
            </h2>
            <div className="p-1 rounded-full text-white/90">
              {isOpen ? (
                <ChevronUp className="w-6 h-6 stroke-[2.5]" />
              ) : (
                <ChevronDown className="w-6 h-6 stroke-[2.5]" />
              )}
            </div>
          </button>

          {/* Steps Body */}
          {isOpen && (
            <div id="onboarding-steps-content" className="divide-y divide-neutral-300">
              {t.onboarding.steps.map((step, idx) => (
                <div
                  key={step.number}
                  id={`onboarding-step-${step.number}`}
                  onClick={() => handleStepClick(idx)}
                  className="group px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between hover:bg-white/80 transition-all cursor-pointer"
                >
                  <div className="flex items-center space-x-5 sm:space-x-8">
                    {/* Black Rounded Square Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#13151A] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      {getStepIcon(idx)}
                    </div>

                    {/* Step Title & Details */}
                    <div>
                      <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-[#13151A] tracking-tight">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Indicator Arrow */}
                  <div className="hidden sm:flex items-center space-x-2 text-xs font-bold text-[#13151A]/60 group-hover:text-[#13151A] transition-colors">
                    <span className="uppercase text-[11px] tracking-wider">
                      {idx === 0 ? 'Start on WA' : 'View details'}
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Step Detail Modal */}
      {activeStepModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-neutral-300 shadow-2xl relative animate-in fade-in zoom-in-95">
            <h3 className="text-xl font-extrabold text-[#13151A] mb-3">
              {activeStepModal === 1 ? 'Required Documents for Verification' : '10-Minute Rapid Activation'}
            </h3>
            {activeStepModal === 1 ? (
              <div className="space-y-3 text-sm text-neutral-700">
                <p className="font-medium text-neutral-900">
                  Keep photos of the following documents ready on your phone:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#13151A]" />
                    <span><strong>Aadhaar Card</strong> (Front & Back)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#13151A]" />
                    <span><strong>PAN Card</strong></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#13151A]" />
                    <span><strong>Driving License</strong> (for bike/scooter)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#13151A]" />
                    <span><strong>Bank Account / Passbook</strong> for direct payouts</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-y-3 text-sm text-neutral-700">
                <p className="font-medium text-neutral-900">
                  How 10-minute onboarding works:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 font-medium">
                  <li>Automated AI document verification on WhatsApp in 2 minutes</li>
                  <li>Safety briefing and partner app login credentials generated</li>
                  <li>Go online immediately and accept your first food delivery order</li>
                </ol>
              </div>
            )}

            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => {
                  setActiveStepModal(null);
                  openWhatsApp();
                }}
                className="flex-1 py-3 bg-[#13151A] text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-neutral-900"
              >
                Proceed on WhatsApp
              </button>
              <button
                onClick={() => setActiveStepModal(null)}
                className="px-4 py-3 bg-[#F3F3F3] text-[#13151A] font-bold text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-neutral-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
