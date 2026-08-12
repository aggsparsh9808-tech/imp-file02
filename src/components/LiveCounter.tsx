import React, { useState, useEffect } from 'react';
import { MessageSquare, Users, Sparkles, X } from 'lucide-react';
import { TranslationStrings } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { analytics } from '../utils/analytics';

interface LiveCounterProps {
  t: TranslationStrings;
}

export const LiveCounter: React.FC<LiveCounterProps> = ({ t }) => {
  const [activeCount, setActiveCount] = useState(2847);
  const [joinedCount, setJoinedCount] = useState(312);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasRecentSignup, setHasRecentSignup] = useState(false);
  const [recentSignupCity, setRecentSignupCity] = useState('Delhi NCR');

  const CITIES = ['Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur', 'Lucknow'];

  // Realistic random micro-increments simulating live platform traffic
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
      setActiveCount((prev) => Math.max(2500, prev + delta));

      // Occasional signup flash (every ~18 seconds)
      if (Math.random() > 0.6) {
        setJoinedCount((prev) => prev + 1);
        const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
        setRecentSignupCity(randomCity);
        setHasRecentSignup(true);
        setTimeout(() => setHasRecentSignup(false), 4500);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppHelp = () => {
    analytics.track('live_counter_whatsapp_click');
    openWhatsApp('Hi, mujhe delivery partner registration ke baare mein urgent help chahiye.');
  };

  if (isMinimized) {
    return (
      <button
        id="live-counter-minimized-btn"
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-5 right-5 z-40 bg-[#13151A] text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center space-x-2 border border-neutral-700 cursor-pointer"
        aria-label="Expand Live Help"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-white" />
      </button>
    );
  }

  return (
    <aside
      id="live-recruitment-counter"
      aria-label="Live Recruitment Activity"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-[340px] w-[calc(100vw-2rem)] sm:w-auto animate-in slide-in-from-bottom-5 duration-200"
    >
      <div className="bg-[#13151A]/95 backdrop-blur-md text-white rounded-2xl p-4 sm:p-4.5 shadow-2xl border border-neutral-700/80">
        {/* Top row: Live Pill + Close/Minimize */}
        <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-extrabold tracking-widest uppercase bg-neutral-800 px-2 py-0.5 rounded-md text-green-400">
              {t.liveCounter.liveBadge}
            </span>
            <span className="text-xs font-bold text-neutral-300">
              {activeCount.toLocaleString()} online
            </span>
          </div>

          <button
            id="live-counter-close-btn"
            onClick={() => setIsMinimized(true)}
            className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Minimize Live Counter"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Live Notification Popup or Stats */}
        <div className="py-2.5">
          {hasRecentSignup ? (
            <div className="flex items-center space-x-2 text-xs font-semibold text-green-300 animate-in fade-in">
              <Sparkles className="w-3.5 h-3.5 text-green-400 shrink-0" />
              <span>New partner just registered from {recentSignupCity}!</span>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs text-neutral-300 font-medium">
              <span>{joinedCount} partners joined today</span>
              <span className="text-[11px] text-neutral-400 font-mono">10m onboarding</span>
            </div>
          )}
        </div>

        {/* Action Button: 1-Tap WhatsApp Support */}
        <button
          id="live-counter-cta-btn"
          onClick={handleWhatsAppHelp}
          className="w-full py-2 px-3 bg-white text-[#13151A] hover:bg-neutral-100 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Chat on WhatsApp (89200 89200)</span>
        </button>
      </div>
    </aside>
  );
};
