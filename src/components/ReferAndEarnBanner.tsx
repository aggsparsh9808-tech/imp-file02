import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TranslationStrings } from '../types';
import { ASSETS } from '../data/content';
import { analytics } from '../utils/analytics';

interface ReferAndEarnBannerProps {
  t: TranslationStrings;
  onNavigateToRefer: () => void;
}

export const ReferAndEarnBanner: React.FC<ReferAndEarnBannerProps> = ({
  t,
  onNavigateToRefer,
}) => {
  const handleReferClick = () => {
    analytics.track('home_refer_banner_click');
    onNavigateToRefer();
  };

  return (
    <section id="refer-and-earn" className="py-14 sm:py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading above card */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="refer-banner-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#13151A] tracking-tight"
          >
            {t.referBanner.sectionHeading}
          </h2>
        </div>

        {/* Large Rounded Black Card matching Reference */}
        <div
          id="refer-banner-card"
          className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-[#13151A] text-white shadow-2xl border border-neutral-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[380px] sm:min-h-[440px]">
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 z-10">
              <h3
                id="refer-banner-headline"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
              >
                {t.referBanner.headline}
              </h3>
              <p
                id="refer-banner-subheadline"
                className="mt-2 sm:mt-3 text-base sm:text-xl font-medium text-neutral-300 tracking-wide"
              >
                {t.referBanner.subheadline}
              </p>

              {/* Refer now Pill Button */}
              <div className="mt-6 sm:mt-8">
                <button
                  id="refer-banner-cta-btn"
                  onClick={handleReferClick}
                  className="inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-[#13151A] font-bold text-sm sm:text-base tracking-wide hover:bg-neutral-100 transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
                >
                  <span>{t.referBanner.cta}</span>
                  <div className="w-6 h-6 rounded-full bg-[#13151A] text-white flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 h-full relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px]">
              <img
                id="refer-banner-group-image"
                src={ASSETS.referGroup}
                alt="Friends referring delivery partners"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-right"
              />
              {/* Gradient blend on left edge of image */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#13151A] via-[#13151A]/40 to-transparent lg:w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
