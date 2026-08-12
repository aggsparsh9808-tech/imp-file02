import { AnalyticsEvent } from '../types';

const STORAGE_KEY = 'recruitment_analytics_events';

export const analytics = {
  track: (eventName: string, payload?: Record<string, unknown>): void => {
    const event: AnalyticsEvent = {
      eventName,
      payload,
      timestamp: new Date().toISOString(),
    };

    // Log to console in development
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      existing.push(event);
      // Keep only last 50 events locally
      if (existing.length > 50) existing.shift();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // Ignore local storage quota errors gracefully
    }

    // Custom hook for window analytics or GTM/Meta Pixel when real IDs are injected
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: eventName,
        ...payload,
      });
    }
  },

  getRecentEvents: (): AnalyticsEvent[] => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  },
};
