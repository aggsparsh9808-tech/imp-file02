import { BRAND_CONFIG } from '../data/content';

/**
 * Builds a dynamic, compliant WhatsApp direct link (wa.me)
 */
export function getWhatsAppUrl(customMessage?: string, customNumber?: string): string {
  const phone = customNumber || BRAND_CONFIG.rawPhone;
  const text = encodeURIComponent(customMessage || BRAND_CONFIG.defaultWhatsAppMessage);
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Opens WhatsApp safely in a new browser tab/window or native app
 */
export function openWhatsApp(customMessage?: string, customNumber?: string): void {
  const url = getWhatsAppUrl(customMessage, customNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}
