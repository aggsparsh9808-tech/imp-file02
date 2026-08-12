import React, { useEffect, useState, useRef } from 'react';
import { TranslationStrings } from '../types';

interface ImpactSectionProps {
  t: TranslationStrings;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p
          id="impact-eyebrow"
          className="text-xs sm:text-sm font-bold tracking-widest text-[#13151A]/70 uppercase"
        >
          {t.impact.eyebrow}
        </p>

        {/* Heading */}
        <h2
          id="impact-heading"
          className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-[#13151A] tracking-tight"
        >
          {t.impact.heading}
        </h2>

        {/* 3 Statistics Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {t.impact.stats.map((stat, idx) => (
            <div
              key={idx}
              id={`impact-stat-${idx}`}
              className="flex flex-col items-center justify-center p-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#13151A] leading-none">
                {stat.value}
              </div>
              <div className="mt-3 text-xs sm:text-sm lg:text-base font-semibold text-neutral-600 max-w-[200px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
