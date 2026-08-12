import React from 'react';
import { CheckCircle2, MessageSquare, ArrowRight, X, PhoneCall, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { analytics } from '../utils/analytics';

interface LeadSuccessModalProps {
  phone: string;
  onClose: () => void;
}

export const LeadSuccessModal: React.FC<LeadSuccessModalProps> = ({ phone, onClose }) => {
  const handleOpenWhatsApp = () => {
    analytics.track('success_modal_whatsapp_clicked', { phone });
    openWhatsApp(`Hi, maine website par +91 ${phone} submit kiya hai. Mujhe delivery partner onboarding process aage badhani hai.`);
    onClose();
  };

  return (
    <div
      id="lead-success-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        id="lead-success-modal"
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-neutral-300 shadow-2xl relative text-[#13151A] animate-in zoom-in-95 duration-150"
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 p-1.5 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>

        {/* Heading */}
        <div className="text-center">
          <h3 className="text-2xl font-black text-[#13151A] tracking-tight">
            Registration Received!
          </h3>
          <p className="mt-2 text-sm text-neutral-600 font-medium leading-relaxed">
            We have registered <span className="font-bold text-[#13151A]">+91 {phone}</span>. Your onboarding link has been prepared on WhatsApp.
          </p>
        </div>

        {/* Next Steps Checklist Box */}
        <div className="mt-6 bg-[#F3F3F3] rounded-2xl p-4 border border-neutral-200 space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center space-x-2.5 font-bold text-[#13151A]">
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
            <span>Instant 10-Minute Activation</span>
          </div>
          <div className="flex items-start space-x-2.5 text-neutral-600 font-medium">
            <span className="w-4 text-center font-bold text-[#13151A] shrink-0">1.</span>
            <span>Click below to open our official WhatsApp verified channel.</span>
          </div>
          <div className="flex items-start space-x-2.5 text-neutral-600 font-medium">
            <span className="w-4 text-center font-bold text-[#13151A] shrink-0">2.</span>
            <span>Upload Aadhaar & Driving License photo to start receiving delivery orders.</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 space-y-3">
          <button
            id="modal-continue-whatsapp-btn"
            onClick={handleOpenWhatsApp}
            className="w-full py-3.5 px-6 rounded-xl bg-[#13151A] hover:bg-neutral-900 text-white font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Continue Onboarding on WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-center text-xs font-bold text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
          >
            I'll check later
          </button>
        </div>
      </div>
    </div>
  );
};
