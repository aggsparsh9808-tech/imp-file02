import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        id="legal-modal"
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] flex flex-col border border-neutral-300 shadow-2xl relative text-[#13151A]"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 shrink-0">
          <div className="flex items-center space-x-2.5">
            {isTerms ? (
              <FileText className="w-6 h-6 text-[#13151A]" />
            ) : (
              <ShieldCheck className="w-6 h-6 text-[#13151A]" />
            )}
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#13151A]">
              {isTerms ? 'Terms and Conditions' : 'Privacy Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Legal Content */}
        <div className="overflow-y-auto py-6 pr-2 space-y-4 text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
          {isTerms ? (
            <>
              <p className="font-semibold text-neutral-900">
                1. Delivery Partner Independent Contractor Terms
              </p>
              <p>
                By registering on KAAM KA NUMBER (89200 89200), you agree to provide accurate identification and vehicle documentation. Delivery partners operate as independent service providers with full freedom to choose their shift timings, login intervals, and operating geographic zones.
              </p>

              <p className="font-semibold text-neutral-900">
                2. Payouts and Incentives
              </p>
              <p>
                Earnings figures represented on this platform (including up to ₹30,000+ per month) are illustrative based on peak performance, active hours, surge bonuses, customer ratings, and completed delivery volume. Payouts are settled on a scheduled cycle or via on-demand instant withdrawal as per verified partner credentials.
              </p>

              <p className="font-semibold text-neutral-900">
                3. Safety & Insurance Cover
              </p>
              <p>
                Accidental and medical insurance coverage up to ₹10 lakh applies exclusively to verified active delivery partners during ongoing active order fulfillments subject to policy terms and underwriter verification.
              </p>

              <p className="font-semibold text-neutral-900">
                4. Vehicle & Documentation
              </p>
              <p>
                Partners using motorized two-wheelers must maintain a valid Driving License, vehicle registration, and active pollution/insurance certification. EV rental schemes are subject to local vendor inventory and security deposit norms.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-neutral-900">
                1. Information We Collect
              </p>
              <p>
                When you initiate registration via phone, web form, or WhatsApp communication with 89200 89200, we collect your phone number, name, geographical location, and verification documents (Aadhaar, PAN, Driving License, Bank Details) solely to verify and onboard you as an active delivery partner.
              </p>

              <p className="font-semibold text-neutral-900">
                2. Data Security & Storage
              </p>
              <p>
                All personal information is encrypted during transmission and stored strictly on secure server architecture. We do not sell or trade your phone numbers or personal records to unauthorized third-party commercial marketing entities.
              </p>

              <p className="font-semibold text-neutral-900">
                3. WhatsApp & SMS Communications
              </p>
              <p>
                By submitting your contact number, you authorize KAAM KA NUMBER to send onboarding links, verification OTPs, shift reminders, payout alerts, and incentive notifications via WhatsApp and SMS.
              </p>

              <p className="font-semibold text-neutral-900">
                4. Your Rights
              </p>
              <p>
                You may request data verification, update your bank credentials, or deactivate your partner account anytime by contacting the dedicated 89200 89200 support helpline.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#13151A] text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-neutral-900"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
