export type Language = 'hinglish' | 'hindi' | 'english';

export interface TranslationStrings {
  brand: {
    name: string;
    number: string;
  };
  nav: {
    home: string;
    impact: string;
    benefits: string;
    testimonials: string;
    faq: string;
    referAndEarn: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    formTitle: string;
    phoneLabel: string;
    phonePlaceholder: string;
    termsLabel: string;
    submitBtn: string;
    submittingBtn: string;
    whatsappNote: string;
    badges: {
      credited: string;
      foodDelivery: string;
      panIndia: string;
    };
  };
  onboarding: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description?: string;
    }>;
  };
  impact: {
    eyebrow: string;
    heading: string;
    stats: Array<{
      value: string;
      numericValue?: number;
      suffix?: string;
      prefix?: string;
      label: string;
    }>;
  };
  benefits: {
    eyebrow: string;
    heading: string;
    centerTitle: string;
    items: Array<{
      title: string;
      description?: string;
      icon: string;
      position: 'left' | 'right';
    }>;
  };
  testimonials: {
    heading: string;
    items: Array<{
      id: string;
      type: 'quote' | 'video';
      name: string;
      role: string;
      location: string;
      quote?: string;
      avatar?: string;
      videoThumbnail?: string;
      videoDuration?: string;
      videoHighlights?: string[];
    }>;
  };
  referBanner: {
    sectionHeading: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
    helpText: string;
    whatsappBtn: string;
  };
  footer: {
    links: {
      home: string;
      benefits: string;
      testimonials: string;
      nextSteps: string;
      referAndEarn: string;
    };
    legal: {
      copyright: string;
      terms: string;
      privacy: string;
    };
  };
  liveCounter: {
    liveBadge: string;
    activeText: string;
    joinedText: string;
    ctaText: string;
  };
  referPage: {
    headline: string;
    subheadline: string;
    cta: string;
    heroBadges: Array<{ text: string }>;
    formTitle: string;
    formYourName: string;
    formYourPhone: string;
    formFriendPhone: string;
    formSubmitBtn: string;
    formSuccessMsg: string;
    socialProof: {
      heading: string;
      stats: Array<{ value: string; label: string }>;
      testimonials: Array<{
        name: string;
        role: string;
        location: string;
        amount: string;
        quote: string;
      }>;
    };
    milestones: {
      title: string;
      subtitle: string;
      stages: Array<{
        milestone: string;
        amount: string;
        description: string;
      }>;
    };
    calculatorTitle: string;
    calculatorSubtitle: string;
    calculatorNote: string;
    howItWorksTitle: string;
    howItWorksSubtitle: string;
    steps: Array<{
      step: string;
      title: string;
      desc: string;
    }>;
    benefitsTitle: string;
    benefits: string[];
    whoCanReferTitle: string;
    whoCanRefer: string[];
    faqTitle: string;
    faqSubtitle: string;
    faqItems: Array<{
      question: string;
      answer: string;
    }>;
    bottomCta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
}

export interface AnalyticsEvent {
  eventName: string;
  payload?: Record<string, unknown>;
  timestamp: string;
}

export interface LeadSubmission {
  phone: string;
  agreedToTerms: boolean;
  source: string;
  createdAt: string;
}
