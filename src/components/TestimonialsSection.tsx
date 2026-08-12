import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, X, Volume2, VolumeX, Award, ShieldCheck } from 'lucide-react';
import { TranslationStrings } from '../types';
import { ASSETS } from '../data/content';
import { analytics } from '../utils/analytics';
import { openWhatsApp } from '../utils/whatsapp';

interface TestimonialsSectionProps {
  t: TranslationStrings;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ t }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlayVideo = () => {
    analytics.track('testimonial_video_played');
    setVideoModalOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#13151A] tracking-tight"
          >
            {t.testimonials.heading}
          </h2>
        </div>

        {/* Testimonials 3-Card Grid matching Screenshot */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Ayush Kumar Quote Card */}
            <div
              id="testimonial-card-1"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <blockquote className="text-sm sm:text-base font-medium text-neutral-800 leading-relaxed">
                “Apne hours khud choose karta hoon, har week earning ho jaati hai. Routine bhi manage ho jaata hai aur payment ki tension bhi nahi.”
              </blockquote>

              <div className="mt-8 flex items-center space-x-3.5 pt-4 border-t border-neutral-100">
                <img
                  id="avatar-ayush-kumar"
                  src={ASSETS.avatarAyush}
                  alt="Ayush Kumar"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-neutral-200 shadow-xs"
                />
                <div>
                  <div className="text-sm font-bold text-[#13151A] leading-tight">
                    Ayush Kumar
                  </div>
                  <div className="text-xs text-neutral-500 font-medium leading-tight mt-0.5">
                    Delivery partner, Gujarat
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Interactive Video Testimonial Card (Center) */}
            <div
              id="testimonial-video-card"
              onClick={handlePlayVideo}
              className="group relative rounded-3xl overflow-hidden shadow-xl bg-[#13151A] aspect-[3/4] md:aspect-auto min-h-[380px] sm:min-h-[420px] cursor-pointer border border-neutral-800 flex items-center justify-center"
            >
              {/* Background Video Partner Image */}
              <img
                id="testimonial-video-thumbnail"
                src={ASSETS.testimonialVideo}
                alt="Watch Atish Story"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Large Centered Play Button */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 group-hover:bg-white text-[#13151A] flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#13151A] ml-1 text-[#13151A]" />
              </div>

              {/* Bottom Label on Video */}
              <div className="absolute bottom-5 left-6 right-6 z-10 flex items-center justify-between text-white">
                <div>
                  <div className="text-sm sm:text-base font-extrabold tracking-tight">
                    Atish's Story
                  </div>
                  <div className="text-[11px] text-neutral-300 font-medium">
                    1:45 min • Watch experience
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider">
                  Video
                </span>
              </div>
            </div>

            {/* Card 3: Atish Verma Quote Card */}
            <div
              id="testimonial-card-3"
              className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <blockquote className="text-sm sm:text-base font-medium text-neutral-800 leading-relaxed">
                “Main evenings mein part-time kaam karta hoon, jisse har week extra income ho jaati hai. Hours flexible hain aur payment time par milti hai.”
              </blockquote>

              <div className="mt-8 flex items-center space-x-3.5 pt-4 border-t border-neutral-100">
                <img
                  id="avatar-atish-verma"
                  src={ASSETS.avatarAtish}
                  alt="Atish Verma"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-neutral-200 shadow-xs"
                />
                <div>
                  <div className="text-sm font-bold text-[#13151A] leading-tight">
                    Atish Verma
                  </div>
                  <div className="text-xs text-neutral-500 font-medium leading-tight mt-0.5">
                    Delivery partner, Delhi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev/Next Navigation Controls matching screenshot */}
          <div className="hidden lg:flex items-center justify-between pointer-events-none absolute -inset-x-6 top-1/2 -translate-y-1/2">
            <button
              id="testimonial-prev-arrow"
              onClick={handlePrev}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg text-neutral-400 hover:text-[#13151A] flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              id="testimonial-next-arrow"
              onClick={handleNext}
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#13151A] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer hover:bg-neutral-900"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#13151A] border border-neutral-700 rounded-3xl overflow-hidden max-w-2xl w-full text-white shadow-2xl relative">
            {/* Header with Close */}
            <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold tracking-wide">Partner Journey: Atish Verma (Delhi)</span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-full bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-800 flex items-center justify-center">
                <img
                  src={ASSETS.testimonialVideo}
                  alt="Video Partner"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-white text-[#13151A] flex items-center justify-center shadow-lg mb-3">
                    <Play className="w-6 h-6 fill-[#13151A] ml-0.5" />
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white max-w-md">
                    “89200 89200 se join karke maine pehle hi mahine ₹32,000 kamaye, bina kisi fixed bandhan ke.”
                  </p>
                  <p className="text-xs text-neutral-300 mt-2 font-mono">
                    HD • 1080p • Verified Partner Interview
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-neutral-900 rounded-2xl p-4 sm:p-5 border border-neutral-800">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-3">
                  Key Takeaways from Atish's Experience:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-200">
                  <li className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Daily earnings: ₹1,200 - ₹1,500 on 4-5 hours evening shifts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Weekly automatic direct bank deposit without deductions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Joined via simple WhatsApp missed call to 89200 89200</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    openWhatsApp();
                  }}
                  className="flex-1 py-3 bg-white text-[#13151A] font-bold text-sm rounded-xl cursor-pointer hover:bg-neutral-200 transition-colors text-center"
                >
                  Join Like Atish on WhatsApp
                </button>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="px-6 py-3 bg-neutral-800 text-neutral-300 font-bold text-sm rounded-xl cursor-pointer hover:bg-neutral-700 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
