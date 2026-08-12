import { Language, TranslationStrings } from '../types';

import heroImg from '../assests/images/hero_delivery_partner_1786514494974.jpg';
import benefitsImg from '../assests/images/benefits_team_group_1786514525161.jpg';
import videoManImg from '../assests/images/testimonial_video_man_1786514545584.jpg';
import referGroupImg from '../assests/images/refer_earn_group_1786514570042.jpg';
import avatarAyush from '../assests/images/avatar_ayush_1786514592455.jpg';
import avatarAtish from '../assests/images/avatar_atish_1786514614711.jpg';


export const ASSETS = {
  hero: heroImg,
  benefitsTeam: benefitsImg,
  testimonialVideo: videoManImg,
  referGroup: referGroupImg,
  avatarAyush: avatarAyush,
  avatarAtish: avatarAtish,
};

export const BRAND_CONFIG = {
  name: 'KAAM KA NUMBER',
  number: '89200 89200',
  formattedNumber: '89200 89200',
  rawPhone: '918920089200',
  whatsappNumber: '918920089200',
  defaultWhatsAppMessage: 'Hi, mujhe delivery partner registration ke baare mein jaana hai.',
  referralWhatsAppMessage: 'Hi, mere paas delivery partner banne ke liye reference hai. Registration details chahiye.',
  initialLanguage: 'hinglish' as Language,
};

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  hinglish: {
    brand: {
      name: 'KAAM KA NUMBER',
      number: '89200 89200',
    },
    nav: {
      home: 'HOME',
      impact: 'IMPACT',
      benefits: 'BENEFITS',
      testimonials: 'TESTIMONIALS',
      faq: "FAQ'S",
      referAndEarn: 'Refer and earn',
    },
    hero: {
      headline: 'Kaam chahiye?\nAaj se shuru karo',
      subheadline: 'Mahine ka ₹30,000 tak kamao, Apni marzi se',
      formTitle: 'Abhi register karein',
      phoneLabel: 'Contact number',
      phonePlaceholder: 'Enter 10-digit number',
      termsLabel: 'T&C applied',
      submitBtn: 'Submit',
      submittingBtn: 'Submitting...',
      whatsappNote: 'Submit details, get an instant WhatsApp reply',
      badges: {
        credited: 'Credited',
        foodDelivery: 'Food delivery work',
        panIndia: 'Pan-India Hiring',
      },
    },
    onboarding: {
      title: 'Onboarding 3 simple steps mein',
      steps: [
        {
          number: '01',
          title: '89200 89200 pe misssed call ya WA karo',
          description: 'Bas ek missed call ya WhatsApp text bhejo aur instant registration link pao.',
        },
        {
          number: '02',
          title: 'Document upload karo',
          description: 'Aadhaar Card, Driving License aur basic details direct WhatsApp par upload karo.',
        },
        {
          number: '03',
          title: '10 min mai kaam shuru karo',
          description: 'Verification hote hi orders receive karna start karo aur daily payout pao.',
        },
      ],
    },
    impact: {
      eyebrow: 'THE IMPACT SO FAR',
      heading: 'Our Collective Strength.',
      stats: [
        {
          value: '6 lakh+',
          numericValue: 600000,
          suffix: ' lakh+',
          prefix: '',
          label: 'Active partners',
        },
        {
          value: '₹30,000+',
          numericValue: 30000,
          prefix: '₹',
          suffix: '+',
          label: 'Monthly earning potential',
        },
        {
          value: '₹450 Cr+',
          numericValue: 450,
          prefix: '₹',
          suffix: ' Cr+',
          label: 'Monthly payout to delivery partners',
        },
      ],
    },
    benefits: {
      eyebrow: 'JUDNE KE FAYDE',
      heading: 'Zyada Kamai, Zyada Aazadi',
      centerTitle: 'work part-time\nor full time',
      items: [
        {
          title: 'Flexible working hours',
          description: 'Apni suvidha ke anusar shifts aur timings select karo.',
          icon: 'clock',
          position: 'left',
        },
        {
          title: 'Anytime cash withdrawal',
          description: 'Apni kamai ko jab chahein tab apne bank account mein transfer karo.',
          icon: 'cash',
          position: 'left',
        },
        {
          title: 'vehicle rental available',
          description: 'Bina gaadi ke bhi kaam shuru karne ke liye EV aur petrol scooter rent par uplabdh.',
          icon: 'bike',
          position: 'left',
        },
        {
          title: 'Incentives and bonuses available',
          description: 'Peak hours, festivals aur weekend milestones par extra kamai.',
          icon: 'gift',
          position: 'right',
        },
        {
          title: 'Medical and accident cover up to ₹10 lakh',
          description: 'Aapki aur aapke parivaar ki suraksha ke liye comprehensive health coverage.',
          icon: 'shield',
          position: 'right',
        },
        {
          title: '24x7 emergency support for delivery partners',
          description: 'On-road aur in-app kisi bhi samasya ke liye round-the-clock live team assistance.',
          icon: 'support',
          position: 'right',
        },
      ],
    },
    testimonials: {
      heading: 'Log Kya Kehte Hai?',
      items: [
        {
          id: 't1',
          type: 'quote',
          name: 'Ayush Kumar',
          role: 'Delivery partner',
          location: 'Gujarat',
          quote: '“Apne hours khud choose karta hoon, har week earning ho jaati hai. Routine bhi manage ho jaata hai aur payment ki tension bhi nahi.”',
          avatar: avatarAyush,
        },
        {
          id: 't2',
          type: 'video',
          name: 'Atish Verma',
          role: 'Delivery partner',
          location: 'Delhi',
          videoThumbnail: videoManImg,
          videoDuration: '1:45 min',
          videoHighlights: [
            'Daily ₹1,200+ earning on flexible peak shifts',
            'Smooth on-boarding process within 10 minutes',
            'Weekly payouts directly to bank without delay',
          ],
        },
        {
          id: 't3',
          type: 'quote',
          name: 'Atish Verma',
          role: 'Delivery partner',
          location: 'Delhi',
          quote: '“Main evenings mein part-time kaam karta hoon, jisse har week extra income ho jaati hai. Hours flexible hain aur payment time par milti hai.”',
          avatar: avatarAtish,
        },
      ],
    },
    referBanner: {
      sectionHeading: 'Refer & Earn more',
      headline: '₹1 lakh tak kamao',
      subheadline: 'Bas doston ko refer karo',
      cta: 'Refer now',
    },
    faq: {
      eyebrow: 'GOT QUESTIONS?',
      heading: 'Frequently Asked Questions',
      items: [
        {
          question: 'Delivery partner banne ke liye kya documents chahiye?',
          answer: 'Aapko basic identity aur verification documents submit karne honge (Aadhaar Card, PAN Card, Driving License agar 2-wheeler chala rahe hain, aur Bank Account details). Exact requirements onboarding ke time par bata di jayengi.',
        },
        {
          question: 'Kya main part-time kaam kar sakta hoon?',
          answer: 'Haan, available working flexibility ke according aap part-time ya full-time kaam kar sakte hain. Aap morning, evening ya weekend shifts apni pasand ke hisaab se chun sakte hain.',
        },
        {
          question: 'Main kitna kama sakta hoon?',
          answer: 'Earning aapke working hours, location, orders aur applicable incentives par depend karti hai. Current communication mein monthly earning potential ₹30,000+ tak diya gaya hai.',
        },
        {
          question: 'Onboarding mein kitna time lagta hai?',
          answer: 'Approved communication ke according basic onboarding complete hone ke baad aap around 10 minutes mein kaam shuru kar sakte hain, subject to verification.',
        },
        {
          question: 'Mujhe help chahiye toh main kisse contact kar sakta hoon?',
          answer: 'Website par available WhatsApp contact button se directly 89200 89200 par support team se connect kiya ja sakta hai.',
        },
      ],
      helpText: 'Still have doubts or need registration help?',
      whatsappBtn: 'Chat on WhatsApp',
    },
    footer: {
      links: {
        home: 'Home',
        benefits: 'Benefits',
        testimonials: 'Testimonials',
        nextSteps: 'Next steps',
        referAndEarn: 'Refer and earn',
      },
      legal: {
        copyright: '©2026 - 8920089200. All Rights Reserved.',
        terms: 'Term and Conditions',
        privacy: 'Privacy Policy',
      },
    },
    liveCounter: {
      liveBadge: 'LIVE',
      activeText: '2,847 people are currently active',
      joinedText: '312 people joined today',
      ctaText: 'Need help?',
    },
    referPage: {
      headline: '₹1,00,000 tak kamao',
      subheadline: 'Bas doston ko refer karo aur har successful joining par instant milestone payouts pao',
      cta: 'Refer now on WhatsApp',
      heroBadges: [
        { text: '₹250 + ₹1,750 per Referral' },
        { text: 'Direct Bank / UPI Transfer' },
        { text: 'Unlimited Referral Cap' },
      ],
      formTitle: 'Generate your personalized referral link',
      formYourName: 'Your name (Aapka naam)',
      formYourPhone: 'Your WhatsApp number',
      formFriendPhone: "Friend's mobile number (Optional)",
      formSubmitBtn: 'Generate Referral Link',
      formSuccessMsg: 'Link ready! Share it with your friends on WhatsApp.',
      socialProof: {
        heading: 'Verified Referral Champions',
        stats: [
          { value: '₹2.8 Cr+', label: 'Total Referral Bonus Paid' },
          { value: '18,400+', label: 'Successful Delivery Referrals' },
          { value: '₹12,450', label: 'Avg Payout per Top Referrer' },
        ],
        testimonials: [
          {
            name: 'Vikas Sharma',
            role: 'Fleet Partner',
            location: 'Jaipur',
            amount: '₹34,000 earned',
            quote: 'Maine pichle mahine 14 doston ko refer kiya. Har friend ke milestone complete hote hi paisa seedhe bank account mein transfer ho gaya.',
          },
          {
            name: 'Sunil Rathore',
            role: 'Delivery Partner',
            location: 'Indore',
            amount: '₹21,000 earned',
            quote: 'WhatsApp par link share karna itna simple hai. 89200 89200 team khud unka document verification aur onboarding complete karwati hai.',
          },
          {
            name: 'Pradeep Yadav',
            role: 'Active Partner',
            location: 'Delhi NCR',
            amount: '₹48,000 earned',
            quote: 'Super bonus milestone se extra ₹12,000 bonus mila. Regular delivery earning ke sath ye meri sabse badi referral kamai hai.',
          },
        ],
      },
      milestones: {
        title: 'Transparent Milestone Payout Structure',
        subtitle: 'Aapko har referral par do clear stages aur super milestone bonus milta hai',
        stages: [
          {
            milestone: 'Stage 01',
            amount: '₹250 Instant',
            description: 'Jaise hi aapka refer kiya hua dost joining complete karke apni 1st delivery complete karta hai.',
          },
          {
            milestone: 'Stage 02',
            amount: '₹1,750 Milestone',
            description: 'Jab aapka dost pehle 15 dino ke andar 20 successful orders deliver karta hai.',
          },
          {
            milestone: 'Super Bonus',
            amount: 'Up to ₹25,000 Extra',
            description: '5+, 10+, ya 15+ doston ko ek mahine mein refer karne par high-volume milestone bonus.',
          },
        ],
      },
      calculatorTitle: 'Referral Earnings Calculator',
      calculatorSubtitle: 'Slider move karein aur dekhein aap kitna kama sakte hain',
      calculatorNote: 'Direct bank credit on milestone completion with WhatsApp alerts',
      howItWorksTitle: 'How Refer & Earn Works in 3 Simple Steps',
      howItWorksSubtitle: 'No complex codes or long forms — bas WhatsApp par connect karein',
      steps: [
        {
          step: '01',
          title: 'Share Your Referral Link / Code',
          desc: 'Apne WhatsApp se direct doston aur community groups mein referral message share karein.',
        },
        {
          step: '02',
          title: 'Friend Joins on 89200 89200',
          desc: 'Aapka dost 10 minute mein documents upload karke apni deliveries shuru karta hai.',
        },
        {
          step: '03',
          title: 'Get Direct Bank Payout',
          desc: 'Milestones complete hote hi referral amount aapke account mein bina kisi delay ke transfer hota hai.',
        },
      ],
      benefitsTitle: 'Why Refer on 89200 89200?',
      benefits: [
        'Highest per-referral payout in delivery sector (₹2,000+ per active friend)',
        'No maximum referral limit – refer 5, 20, ya 50+ friends without restriction',
        'Transparent real-time status tracking directly on WhatsApp (89200 89200)',
        'Additional monthly milestone bonuses on 5+ successful joins',
        'Dedicated 24x7 support desk for all referral queries',
      ],
      whoCanReferTitle: 'Who is Eligible to Refer?',
      whoCanRefer: [
        'All Active Delivery Partners across all operational cities',
        'Anyone looking to earn extra supplemental income through their social network',
        'College students, job seekers, and community coordinators',
        'Fleet owners, vehicle rental operators, and local shopkeepers',
      ],
      faqTitle: 'Refer & Earn - Frequently Asked Questions',
      faqSubtitle: 'Paisa kaise aayega aur kab milega — sabhi sawalon ke jawab yahan hain',
      faqItems: [
        {
          question: 'Referral ka paisa mere bank account mein kaise aayega?',
          answer: 'Aapka referral bonus aapke registered bank account ya UPI ID par direct transfer hota hai. Jab aapka dost delivery milestones complete karta hai, aapko WhatsApp par payment confirmation notification mil jata hai.',
        },
        {
          question: 'Milestone conditions kya hain?',
          answer: 'Pehla reward (₹250) dost ke first order delivery par credit hota hai, aur major payout (₹1,750) jab dost pehle 15 dino mein minimum 20 deliveries complete karta hai.',
        },
        {
          question: 'Kya main unlimited logon ko refer kar sakta hoon?',
          answer: 'Haan! 89200 89200 referral programme mein koi upper limit nahi hai. Aap jitne chahein utne doston ko refer kar sakte hain aur har successful partner par reward pa sakte hain.',
        },
        {
          question: 'Main apne refer kiye huye doston ka status kaise track karoon?',
          answer: 'Aap 89200 89200 WhatsApp number par "My Referrals" likh kar message bhej sakte hain. Hamara system aapko aapke referrals ki list, completed orders aur pending payouts ka live summary bhej dega.',
        },
        {
          question: 'Agar mera dost pehle se registered hai toh kya mujhe reward milega?',
          answer: 'Referral reward kewal new delivery partners ya un partners ke liye valid hai jinhone pichle 90 dino mein koi active delivery nahi ki hai.',
        },
      ],
      bottomCta: {
        title: 'Ready to Start Referring & Earning?',
        subtitle: 'Abhi apna referral link generate karein ya 89200 89200 par WhatsApp par baat karein.',
        button: 'Start Referring on WhatsApp (89200 89200)',
      },
    },
  },

  hindi: {
    brand: {
      name: 'KAAM KA NUMBER',
      number: '89200 89200',
    },
    nav: {
      home: 'होम',
      impact: 'प्रभाव',
      benefits: 'फायदे',
      testimonials: 'समीक्षाएं',
      faq: 'सवाल-जवाब',
      referAndEarn: 'रेफर करें और कमाएं',
    },
    hero: {
      headline: 'काम चाहिए?\nआज से शुरू करो',
      subheadline: 'महीने का ₹30,000 तक कमाओ, अपनी मर्जी से',
      formTitle: 'अभी रजिस्टर करें',
      phoneLabel: 'संपर्क नंबर',
      phonePlaceholder: '10 अंकों का नंबर दर्ज करें',
      termsLabel: 'नियम व शर्तें लागू',
      submitBtn: 'सबमिट करें',
      submittingBtn: 'जमा हो रहा है...',
      whatsappNote: 'विवरण सबमिट करते ही तुरंत व्हाट्सएप रिप्लाई पाएं',
      badges: {
        credited: 'जमा हुआ',
        foodDelivery: 'फूड डिलीवरी कार्य',
        panIndia: 'अखिल भारतीय भर्ती',
      },
    },
    onboarding: {
      title: 'ऑनबोर्डिंग 3 आसान चरणों में',
      steps: [
        {
          number: '01',
          title: '89200 89200 पर मिस्ड कॉल या व्हाट्सएप करें',
          description: 'बस एक मिस्ड कॉल या व्हाट्सएप संदेश भेजें और तुरंत पंजीकरण लिंक पाएं।',
        },
        {
          number: '02',
          title: 'दस्तावेज़ अपलोड करें',
          description: 'आधार कार्ड, ड्राइविंग लाइसेंस और बुनियादी जानकारी सीधे व्हाट्सएप पर अपलोड करें।',
        },
        {
          number: '03',
          title: '10 मिनट में काम शुरू करें',
          description: 'सत्यापन होते ही ऑर्डर प्राप्त करना शुरू करें और दैनिक भुगतान पाएं।',
        },
      ],
    },
    impact: {
      eyebrow: 'अब तक का प्रभाव',
      heading: 'हमारी सामूहिक शक्ति।',
      stats: [
        {
          value: '6 लाख+',
          numericValue: 600000,
          suffix: ' लाख+',
          prefix: '',
          label: 'सक्रिय डिलीवरी पार्टनर्स',
        },
        {
          value: '₹30,000+',
          numericValue: 30000,
          prefix: '₹',
          suffix: '+',
          label: 'मासिक कमाई की संभावना',
        },
        {
          value: '₹450 करोड़+',
          numericValue: 450,
          prefix: '₹',
          suffix: ' करोड़+',
          label: 'पार्टनर्स को मासिक भुगतान',
        },
      ],
    },
    benefits: {
      eyebrow: 'जुड़ने के फायदे',
      heading: 'ज्यादा कमाई, ज्यादा आजादी',
      centerTitle: 'पार्ट-टाइम या\nफुल-टाइम काम करें',
      items: [
        {
          title: 'लचीले काम के घंटे',
          description: 'अपनी सुविधा अनुसार शिफ्ट और समय चुनें।',
          icon: 'clock',
          position: 'left',
        },
        {
          title: 'कभी भी नकद निकासी',
          description: 'अपनी कमाई जब चाहें बैंक खाते में ट्रांसफर करें।',
          icon: 'cash',
          position: 'left',
        },
        {
          title: 'वाहन किराए पर उपलब्ध',
          description: 'बिना वाहन के भी काम शुरू करने के लिए ईवी और पेट्रोल स्कूटर किराए पर उपलब्ध।',
          icon: 'bike',
          position: 'left',
        },
        {
          title: 'इंसेंटिव और बोनस उपलब्ध',
          description: 'पीक आवर्स और वीकेंड पर अतिरिक्त कमाई।',
          icon: 'gift',
          position: 'right',
        },
        {
          title: '₹10 लाख तक का मेडिकल और दुर्घटना बीमा',
          description: 'आपके और आपके परिवार की सुरक्षा के लिए पूर्ण स्वास्थ्य सुरक्षा।',
          icon: 'shield',
          position: 'right',
        },
        {
          title: '24x7 आपातकालीन सहायता',
          description: 'सड़क पर या ऐप में किसी भी समस्या के लिए 24 घंटे सहायता।',
          icon: 'support',
          position: 'right',
        },
      ],
    },
    testimonials: {
      heading: 'लोग क्या कहते हैं?',
      items: [
        {
          id: 't1',
          type: 'quote',
          name: 'आयुष कुमार',
          role: 'डिलीवरी पार्टनर',
          location: 'गुजरात',
          quote: '“अपने घंटे खुद चुनता हूँ, हर हफ्ते कमाई हो जाती है। रूटीन भी मैनेज हो जाता है और पेमेंट की कोई चिंता नहीं।”',
          avatar: avatarAyush,
        },
        {
          id: 't2',
          type: 'video',
          name: 'अतीश वर्मा',
          role: 'डिलीवरी पार्टनर',
          location: 'दिल्ली',
          videoThumbnail: videoManImg,
          videoDuration: '1:45 मिनट',
          videoHighlights: [
            'पीक शिफ्ट में रोजाना ₹1,200+ की कमाई',
            '10 मिनट के भीतर आसान ऑनबोर्डिंग',
            'बिना किसी देरी के सीधा बैंक भुगतान',
          ],
        },
        {
          id: 't3',
          type: 'quote',
          name: 'अतीश वर्मा',
          role: 'डिलीवरी पार्टनर',
          location: 'दिल्ली',
          quote: '“मैं शाम को पार्ट-टाइम काम करता हूँ, जिससे हर हफ्ते अतिरिक्त आय हो जाती है। घंटे लचीले हैं और भुगतान समय पर मिलता है।”',
          avatar: avatarAtish,
        },
      ],
    },
    referBanner: {
      sectionHeading: 'रेफर करें और ज्यादा कमाएं',
      headline: '₹1 लाख तक कमाओ',
      subheadline: 'बस दोस्तों को रेफर करो',
      cta: 'अभी रेफर करें',
    },
    faq: {
      eyebrow: 'कोई सवाल?',
      heading: 'अक्सर पूछे जाने वाले प्रश्न',
      items: [
        {
          question: 'डिलीवरी पार्टनर बनने के लिए क्या दस्तावेज चाहिए?',
          answer: 'आपको बुनियादी पहचान और सत्यापन दस्तावेज (आधार कार्ड, पैन कार्ड, ड्राइविंग लाइसेंस और बैंक खाता विवरण) जमा करने होंगे।',
        },
        {
          question: 'क्या मैं पार्ट-टाइम काम कर सकता हूँ?',
          answer: 'हाँ, आप अपनी सुविधा अनुसार पार्ट-टाइम या फुल-टाइम काम कर सकते हैं।',
        },
        {
          question: 'मैं कितना कमा सकता हूँ?',
          answer: 'कमाई आपके काम के घंटों, स्थान और ऑर्डर पर निर्भर करती है। मासिक संभावित कमाई ₹30,000+ तक हो सकती है।',
        },
        {
          question: 'ऑनबोर्डिंग में कितना समय लगता है?',
          answer: 'दस्तावेज़ जमा करने के बाद आप लगभग 10 मिनट में काम शुरू कर सकते हैं।',
        },
        {
          question: 'मदद के लिए किससे संपर्क करें?',
          answer: 'वेबसाइट पर दिए गए व्हाट्सएप बटन से सीधे 89200 89200 पर सपोर्ट टीम से संपर्क करें।',
        },
      ],
      helpText: 'क्या आपके पास और सवाल हैं?',
      whatsappBtn: 'व्हाट्सएप पर बात करें',
    },
    footer: {
      links: {
        home: 'होम',
        benefits: 'फायदे',
        testimonials: 'समीक्षाएं',
        nextSteps: 'अगले कदम',
        referAndEarn: 'रेफर करें और कमाएं',
      },
      legal: {
        copyright: '©2026 - 8920089200. सर्वाधिकार सुरक्षित।',
        terms: 'नियम व शर्तें',
        privacy: 'गोपनीयता नीति',
      },
    },
    liveCounter: {
      liveBadge: 'लाइव',
      activeText: '2,847 लोग अभी सक्रिय हैं',
      joinedText: 'आज 312 लोग जुड़े',
      ctaText: 'मदद चाहिए?',
    },
    referPage: {
      headline: '₹1,00,000 तक कमाएं',
      subheadline: 'बस दोस्तों को रेफर करें और हर सफल जॉइनिंग पर माइलस्टोन रिवॉर्ड्स पाएं',
      cta: 'व्हाट्सएप पर रेफर करें',
      heroBadges: [
        { text: '₹250 + ₹1,750 प्रति रेफरल' },
        { text: 'सीधा बैंक / यूपीआई ट्रांसफर' },
        { text: 'कोई अधिकतम रेफरल सीमा नहीं' },
      ],
      formTitle: 'अपना व्यक्तिगत रेफरल लिंक बनाएं',
      formYourName: 'आपका नाम',
      formYourPhone: 'आपका व्हाट्सएप नंबर',
      formFriendPhone: 'दोस्त का मोबाइल नंबर (वैकल्पिक)',
      formSubmitBtn: 'रेफरल लिंक बनाएं',
      formSuccessMsg: 'लिंक तैयार है! इसे अपने दोस्तों के साथ व्हाट्सएप पर साझा करें।',
      socialProof: {
        heading: 'सत्यापित रेफरल चैंपियंस',
        stats: [
          { value: '₹2.8 करोड़+', label: 'कुल वितरित रेफरल बोनस' },
          { value: '18,400+', label: 'सफल डिलीवरी रेफरल्स' },
          { value: '₹12,450', label: 'शीर्ष रेफरर्स का औसत पेआउट' },
        ],
        testimonials: [
          {
            name: 'विकास शर्मा',
            role: 'फ्लीट पार्टनर',
            location: 'जयपुर',
            amount: '₹34,000 कमाए',
            quote: 'मैंने पिछले महीने 14 दोस्तों को रेफर किया। हर दोस्त के माइलस्टोन पूरा करते ही पैसा सीधे बैंक खाते में आ गया।',
          },
          {
            name: 'सुनील राठौड़',
            role: 'डिलीवरी पार्टनर',
            location: 'इंदौर',
            amount: '₹21,000 कमाए',
            quote: 'व्हाट्सएप पर लिंक भेजना बेहद आसान है। 89200 89200 की टीम खुद उनका वेरिफिकेशन और जॉइनिंग करवाती है।',
          },
          {
            name: 'प्रदीप यादव',
            role: 'सक्रिय पार्टनर',
            location: 'दिल्ली एनसीआर',
            amount: '₹48,000 कमाए',
            quote: 'सुपर बोनस माइलस्टोन से मुझे ₹12,000 अतिरिक्त बोनस मिला। डिलीवरी काम के साथ यह मेरी सबसे बड़ी रेफरल कमाई है।',
          },
        ],
      },
      milestones: {
        title: 'स्पष्ट माइलस्टोन भुगतान संरचना',
        subtitle: 'आपको प्रत्येक रेफरल पर दो चरणों और सुपर बोनस में भुगतान मिलता है',
        stages: [
          {
            milestone: 'पहला चरण',
            amount: '₹250 तुरंत',
            description: 'जैसे ही आपका दोस्त जॉइनिंग पूरी कर अपनी पहली डिलीवरी पूरी करता है।',
          },
          {
            milestone: 'दूसरा चरण',
            amount: '₹1,750 माइलस्टोन',
            description: 'जब आपका दोस्त पहले 15 दिनों में 20 सफल ऑर्डर डिलीवर करता है।',
          },
          {
            milestone: 'सुपर बोनस',
            amount: '₹25,000 तक अतिरिक्त',
            description: 'एक महीने में 5+, 10+, या 15+ दोस्तों को रेफर करने पर विशेष बोनस।',
          },
        ],
      },
      calculatorTitle: 'रेफरल कमाई कैलकुलेटर',
      calculatorSubtitle: 'स्लाइडर को आगे बढ़ाएं और देखें आप कितना कमा सकते हैं',
      calculatorNote: 'माइलस्टोन पूरा होते ही बैंक में सीधा क्रेडिट और व्हाट्सएप अलर्ट',
      howItWorksTitle: 'रेफर और अर्न 3 आसान चरणों में',
      howItWorksSubtitle: 'कोई जटिल कोड या फॉर्म नहीं — बस व्हाट्सएप पर शुरू करें',
      steps: [
        {
          step: '01',
          title: 'रेफरल लिंक / कोड शेयर करें',
          desc: 'अपने व्हाट्सएप से सीधे दोस्तों और ग्रुप्स में रेफरल मैसेज भेजें।',
        },
        {
          step: '02',
          title: 'दोस्त 89200 89200 पर जुड़ता है',
          desc: 'आपका दोस्त 10 मिनट में दस्तावेज अपलोड करके डिलीवरी शुरू करता है।',
        },
        {
          step: '03',
          title: 'सीधा बैंक भुगतान प्राप्त करें',
          desc: 'माइलस्टोन पूरा होते ही रेफरल राशि सीधे आपके खाते में जमा हो जाती है।',
        },
      ],
      benefitsTitle: '89200 89200 पर रेफर क्यों करें?',
      benefits: [
        'डिलीवरी सेक्टर में सबसे अधिक प्रति-रेफरल भुगतान (₹2,000+ प्रति पार्टनर)',
        'कोई रेफरल सीमा नहीं – 5, 20 या 50+ जितने चाहें दोस्त जोड़ें',
        'व्हाट्सएप (89200 89200) पर रीयल-टाइम स्थिति ट्रैकिंग',
        'महीने में 5+ रेफरल पर अतिरिक्त माइलस्टोन बोनस',
        'रेफरल संबंधी किसी भी सवाल के लिए 24x7 सपोर्ट डेस्क',
      ],
      whoCanReferTitle: 'कौन रेफर करने के योग्य है?',
      whoCanRefer: [
        'सभी शहरों के सक्रिय डिलीवरी पार्टनर्स',
        'कोई भी व्यक्ति जो अतिरिक्त आय कमाना चाहता है',
        'कॉलेज छात्र, नौकरी तलाशने वाले और कम्युनिटी मेंबर्स',
        'फ्लीट मालिक, वाहन रेंटल संचालक और स्थानीय दुकानदार',
      ],
      faqTitle: 'रेफर और अर्न - अक्सर पूछे जाने वाले प्रश्न',
      faqSubtitle: 'पैसा कैसे और कब मिलेगा — आपके सभी सवालों के जवाब',
      faqItems: [
        {
          question: 'रेफरल का पैसा बैंक खाते में कैसे आएगा?',
          answer: 'आपका रेफरल बोनस आपके पंजीकृत बैंक खाते या यूपीआई आईडी में सीधे ट्रांसफर किया जाता है। डिलीवरी पूरी होते ही व्हाट्सएप पर सूचना मिल जाती है।',
        },
        {
          question: 'माइलस्टोन की शर्तें क्या हैं?',
          answer: 'पहला इनाम (₹250) दोस्त की पहली डिलीवरी पर और दूसरा मुख्य पेआउट (₹1,750) पहले 15 दिनों में 20 डिलीवरी पूरी होने पर मिलता है।',
        },
        {
          question: 'क्या मैं असीमित लोगों को रेफर कर सकता हूँ?',
          answer: 'हाँ! 89200 89200 रेफरल प्रोग्राम में कोई अधिकतम सीमा नहीं है। आप जितने चाहें उतने दोस्तों को रेफर कर सकते हैं।',
        },
        {
          question: 'मैं अपने रेफर किए गए दोस्तों का स्टेटस कैसे देखूं?',
          answer: 'आप 89200 89200 व्हाट्सएप नंबर पर "My Referrals" लिखकर भेजें। सिस्टम आपको तुरंत लाइव स्टेटस भेज देगा।',
        },
        {
          question: 'अगर मेरा दोस्त पहले से पंजीकृत है तो क्या इनाम मिलेगा?',
          answer: 'रेफरल इनाम केवल नए पार्टनर्स या 90 दिनों से निष्क्रिय पार्टनर्स के लिए लागू होता है।',
        },
      ],
      bottomCta: {
        title: 'रेफर करना और कमाना शुरू करें',
        subtitle: 'अभी अपना लिंक बनाएं या सीधे व्हाट्सएप पर बात करें।',
        button: 'व्हाट्सएप पर रेफर करें (89200 89200)',
      },
    },
  },

  english: {
    brand: {
      name: 'KAAM KA NUMBER',
      number: '89200 89200',
    },
    nav: {
      home: 'HOME',
      impact: 'IMPACT',
      benefits: 'BENEFITS',
      testimonials: 'TESTIMONIALS',
      faq: "FAQ'S",
      referAndEarn: 'Refer and earn',
    },
    hero: {
      headline: 'Need work?\nStart today',
      subheadline: 'Earn up to ₹30,000 per month, on your own terms',
      formTitle: 'Register now',
      phoneLabel: 'Contact number',
      phonePlaceholder: 'Enter 10-digit number',
      termsLabel: 'T&C applied',
      submitBtn: 'Submit',
      submittingBtn: 'Submitting...',
      whatsappNote: 'Submit details, get an instant WhatsApp reply',
      badges: {
        credited: 'Credited',
        foodDelivery: 'Food delivery work',
        panIndia: 'Pan-India Hiring',
      },
    },
    onboarding: {
      title: 'Onboarding in 3 simple steps',
      steps: [
        {
          number: '01',
          title: 'Give a missed call or WhatsApp on 89200 89200',
          description: 'Simply send a WhatsApp message or give a missed call to get your instant joining link.',
        },
        {
          number: '02',
          title: 'Upload documents',
          description: 'Upload your Aadhaar Card, Driving License, and basic details directly on WhatsApp.',
        },
        {
          number: '03',
          title: 'Start working in 10 minutes',
          description: 'Start receiving food delivery orders right after verification with daily payouts.',
        },
      ],
    },
    impact: {
      eyebrow: 'THE IMPACT SO FAR',
      heading: 'Our Collective Strength.',
      stats: [
        {
          value: '6 lakh+',
          numericValue: 600000,
          suffix: ' lakh+',
          prefix: '',
          label: 'Active partners',
        },
        {
          value: '₹30,000+',
          numericValue: 30000,
          prefix: '₹',
          suffix: '+',
          label: 'Monthly earning potential',
        },
        {
          value: '₹450 Cr+',
          numericValue: 450,
          prefix: '₹',
          suffix: ' Cr+',
          label: 'Monthly payout to delivery partners',
        },
      ],
    },
    benefits: {
      eyebrow: 'BENEFITS OF JOINING',
      heading: 'Higher Earnings, Greater Freedom',
      centerTitle: 'work part-time\nor full time',
      items: [
        {
          title: 'Flexible working hours',
          description: 'Choose shifts and hours that fit your schedule.',
          icon: 'clock',
          position: 'left',
        },
        {
          title: 'Anytime cash withdrawal',
          description: 'Transfer your earnings to your bank account anytime you want.',
          icon: 'cash',
          position: 'left',
        },
        {
          title: 'vehicle rental available',
          description: 'EV and petrol two-wheelers available on rent so you can start without owning a bike.',
          icon: 'bike',
          position: 'left',
        },
        {
          title: 'Incentives and bonuses available',
          description: 'Earn extra through peak-hour incentives and weekend surge payouts.',
          icon: 'gift',
          position: 'right',
        },
        {
          title: 'Medical and accident cover up to ₹10 lakh',
          description: 'Comprehensive health and emergency insurance for you and your family.',
          icon: 'shield',
          position: 'right',
        },
        {
          title: '24x7 emergency support for delivery partners',
          description: 'Round-the-clock dedicated on-road emergency and app support team.',
          icon: 'support',
          position: 'right',
        },
      ],
    },
    testimonials: {
      heading: 'What People Say',
      items: [
        {
          id: 't1',
          type: 'quote',
          name: 'Ayush Kumar',
          role: 'Delivery partner',
          location: 'Gujarat',
          quote: '“I choose my own working hours and earn reliably every week. My daily routine stays balanced without any payout worries.”',
          avatar: avatarAyush,
        },
        {
          id: 't2',
          type: 'video',
          name: 'Atish Verma',
          role: 'Delivery partner',
          location: 'Delhi',
          videoThumbnail: videoManImg,
          videoDuration: '1:45 min',
          videoHighlights: [
            'Daily ₹1,200+ earnings during peak evening hours',
            'Completed WhatsApp onboarding in 10 minutes',
            'Instant payouts transferred directly to bank account',
          ],
        },
        {
          id: 't3',
          type: 'quote',
          name: 'Atish Verma',
          role: 'Delivery partner',
          location: 'Delhi',
          quote: '“I work part-time in the evenings to make extra supplemental income. The hours are flexible and payments always arrive on time.”',
          avatar: avatarAtish,
        },
      ],
    },
    referBanner: {
      sectionHeading: 'Refer & Earn more',
      headline: 'Earn up to ₹1 lakh',
      subheadline: 'Simply refer your friends',
      cta: 'Refer now',
    },
    faq: {
      eyebrow: 'GOT QUESTIONS?',
      heading: 'Frequently Asked Questions',
      items: [
        {
          question: 'What documents are required to become a delivery partner?',
          answer: 'You will need to submit standard identity and verification documents (Aadhaar Card, PAN Card, Driving License if using a 2-wheeler, and Bank Account details). Exact steps will be provided during WhatsApp onboarding.',
        },
        {
          question: 'Can I work part-time?',
          answer: 'Yes, you can work part-time or full-time according to your personal availability. You can pick morning, evening, or weekend slots freely.',
        },
        {
          question: 'How much can I earn?',
          answer: 'Earnings depend on your active working hours, city location, completed orders, and surge incentives. Our active partner communication indicates earning potential up to ₹30,000+ per month.',
        },
        {
          question: 'How long does onboarding take?',
          answer: 'Following the verified digital onboarding flow, you can complete document submission and begin deliveries in approximately 10 minutes.',
        },
        {
          question: 'How do I reach support if I need assistance?',
          answer: 'You can directly connect with our dedicated support team on WhatsApp at 89200 89200.',
        },
      ],
      helpText: 'Still have questions or need assistance?',
      whatsappBtn: 'Chat on WhatsApp',
    },
    footer: {
      links: {
        home: 'Home',
        benefits: 'Benefits',
        testimonials: 'Testimonials',
        nextSteps: 'Next steps',
        referAndEarn: 'Refer and earn',
      },
      legal: {
        copyright: '©2026 - 8920089200. All Rights Reserved.',
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy',
      },
    },
    liveCounter: {
      liveBadge: 'LIVE',
      activeText: '2,847 people are currently active',
      joinedText: '312 people joined today',
      ctaText: 'Need help?',
    },
    referPage: {
      headline: 'Earn up to ₹1,00,000',
      subheadline: 'Refer friends and earn instant milestone cash rewards on every verified onboarding',
      cta: 'Refer now on WhatsApp',
      heroBadges: [
        { text: '₹250 + ₹1,750 per Referral' },
        { text: 'Direct Bank / UPI Transfer' },
        { text: 'Unlimited Referral Cap' },
      ],
      formTitle: 'Generate your personalized referral link',
      formYourName: 'Your Full Name',
      formYourPhone: 'Your WhatsApp Number',
      formFriendPhone: "Friend's Mobile Number (Optional)",
      formSubmitBtn: 'Generate Referral Link',
      formSuccessMsg: 'Referral link ready! Share it directly on WhatsApp.',
      socialProof: {
        heading: 'Verified Referral Champions',
        stats: [
          { value: '₹2.8 Cr+', label: 'Total Referral Bonus Paid' },
          { value: '18,400+', label: 'Successful Delivery Referrals' },
          { value: '₹12,450', label: 'Avg Payout per Top Referrer' },
        ],
        testimonials: [
          {
            name: 'Vikas Sharma',
            role: 'Fleet Partner',
            location: 'Jaipur',
            amount: '₹34,000 earned',
            quote: 'I referred 14 friends last month. As soon as each friend finished their order milestones, the funds were sent straight to my bank account.',
          },
          {
            name: 'Sunil Rathore',
            role: 'Delivery Partner',
            location: 'Indore',
            amount: '₹21,000 earned',
            quote: 'Sharing the WhatsApp link is completely frictionless. The 89200 89200 team handles onboarding and verification seamlessly.',
          },
          {
            name: 'Pradeep Yadav',
            role: 'Active Partner',
            location: 'Delhi NCR',
            amount: '₹48,000 earned',
            quote: 'The super bonus tier gave me an extra ₹12,000 milestone bonus. Alongside delivery pay, this is my highest referral income yet.',
          },
        ],
      },
      milestones: {
        title: 'Transparent Milestone Payout Structure',
        subtitle: 'Earn across two simple delivery stages plus high-volume super bonus tiers',
        stages: [
          {
            milestone: 'Stage 01',
            amount: '₹250 Instant',
            description: 'Credited right after your referred friend finishes their very 1st delivery order.',
          },
          {
            milestone: 'Stage 02',
            amount: '₹1,750 Milestone',
            description: 'Credited when your friend completes 20 successful deliveries within their first 15 days.',
          },
          {
            milestone: 'Super Bonus',
            amount: 'Up to ₹25,000 Extra',
            description: 'Earn additional milestone multipliers when you refer 5+, 10+, or 15+ friends in a calendar month.',
          },
        ],
      },
      calculatorTitle: 'Referral Earnings Calculator',
      calculatorSubtitle: 'Slide to calculate your potential milestone and bonus earnings',
      calculatorNote: 'Direct weekly bank credit with real-time WhatsApp status notifications',
      howItWorksTitle: 'How Refer & Earn Works in 3 Simple Steps',
      howItWorksSubtitle: 'No complicated codes or confusing paperwork — manage everything on WhatsApp',
      steps: [
        {
          step: '01',
          title: 'Share Your Referral Link / Code',
          desc: 'Send your personalized WhatsApp referral link to friends, family, and local groups.',
        },
        {
          step: '02',
          title: 'Friend Joins on 89200 89200',
          desc: 'Your friend uploads simple documents in 10 minutes and starts completing food deliveries.',
        },
        {
          step: '03',
          title: 'Get Direct Bank Payout',
          desc: 'Milestone rewards are deposited directly into your bank or UPI without delays.',
        },
      ],
      benefitsTitle: 'Why Refer on 89200 89200?',
      benefits: [
        'Highest per-referral payout in the delivery industry (₹2,000+ per active partner)',
        'No referral cap – refer 5, 20, or 50+ friends without limits',
        'Transparent real-time tracking directly on WhatsApp (89200 89200)',
        'Additional monthly volume bonuses for 5+ successful onboarding referrals',
        'Dedicated 24x7 support desk for all referral and payout inquiries',
      ],
      whoCanReferTitle: 'Who is Eligible to Refer?',
      whoCanRefer: [
        'All Active Delivery Partners across all operational cities',
        'Anyone looking to earn extra supplemental income through their social network',
        'College students, job seekers, and community coordinators',
        'Fleet owners, vehicle rental operators, and local merchants',
      ],
      faqTitle: 'Refer & Earn - Frequently Asked Questions',
      faqSubtitle: 'Everything you need to know about milestone timelines and payouts',
      faqItems: [
        {
          question: 'How and when will I receive my referral payout?',
          answer: 'Your referral bonus is transferred directly to your registered bank account or UPI ID. You receive an instant WhatsApp alert whenever a milestone payout is processed.',
        },
        {
          question: 'What are the exact milestone requirements?',
          answer: 'The initial ₹250 is triggered on your friend’s 1st order delivery. The remaining ₹1,750 is unlocked once they complete 20 deliveries within 15 days.',
        },
        {
          question: 'Is there a limit to how many friends I can refer?',
          answer: 'No! There is zero upper limit. You can refer as many partners as you wish and earn rewards on every single one.',
        },
        {
          question: 'How do I check the live status of my referrals?',
          answer: 'Simply send a WhatsApp message with "My Referrals" to 89200 89200 to receive an instant breakdown of joined friends and pending payouts.',
        },
        {
          question: 'What if my friend is already a delivery partner?',
          answer: 'Referral rewards apply to brand-new delivery partners or existing partners who have been inactive for at least 90 days.',
        },
      ],
      bottomCta: {
        title: 'Ready to Start Referring & Earning?',
        subtitle: 'Generate your referral link now or speak directly with our team on WhatsApp.',
        button: 'Start Referring on WhatsApp (89200 89200)',
      },
    },
  },
};

