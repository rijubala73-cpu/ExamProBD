import { ExamCategory, ExamGroupInfo, FeatureItem, PricingPlan, Testimonial, MockQuestion } from '../types';

export const examGroups: ExamGroupInfo[] = [
  {
    id: 'academic',
    number: '1',
    name: 'Academic',
    nameBengali: 'একাডেমিক প্রস্তুতি',
    badgeBengali: 'গ্রুপ ১',
    description: 'মাধ্যমিক ও উচ্চ মাধ্যমিক পরীক্ষার প্রস্তুতি'
  },
  {
    id: 'admission',
    number: '2',
    name: 'Admission',
    nameBengali: 'ভর্তি পরীক্ষা প্রস্তুতি',
    badgeBengali: 'গ্রুপ ২',
    description: 'মেডিকেল, ইঞ্জিনিয়ারিং ও পাবলিক বিশ্ববিদ্যালয় ভর্তি পরীক্ষা'
  },
  {
    id: 'jobs',
    number: '3',
    name: 'Jobs',
    nameBengali: 'চাকরি ও ক্যারিয়ার প্রস্তুতি',
    badgeBengali: 'গ্রুপ ৩',
    description: 'বিসিএস, সরকারি ব্যাংক ও বিভিন্ন সরকারি নিয়োগ পরীক্ষা'
  }
];

export const examCategories: ExamCategory[] = [
  // 1. Academic Group
  {
    id: 'ssc',
    groupId: 'academic',
    title: 'SSC',
    subtitle: 'মাধ্যমিক স্কুল সার্টিফিকেট (সকল বিভাগ)',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-amber-500/15',
      text: 'text-amber-500',
      border: 'border-amber-500/30',
      hoverBorder: 'hover:border-amber-400',
      badgeBg: 'bg-amber-500/10'
    },
    totalExams: 35,
    questionCount: 8500
  },
  {
    id: 'hsc',
    groupId: 'academic',
    title: 'HSC',
    subtitle: 'উচ্চ মাধ্যমিক সার্টিফিকেট পরীক্ষা',
    iconName: 'FileText',
    colorTheme: {
      bg: 'bg-purple-500/15',
      text: 'text-purple-500',
      border: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400',
      badgeBg: 'bg-purple-500/10'
    },
    totalExams: 40,
    questionCount: 9200
  },

  // 2. Admission Group
  {
    id: 'medical-admission',
    groupId: 'admission',
    title: 'Medical Admission',
    subtitle: 'মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা',
    iconName: 'Stethoscope',
    colorTheme: {
      bg: 'bg-rose-500/15',
      text: 'text-rose-500',
      border: 'border-rose-500/30',
      hoverBorder: 'hover:border-rose-400',
      badgeBg: 'bg-rose-500/10'
    },
    totalExams: 45,
    questionCount: 12500
  },
  {
    id: 'engineering-admission',
    groupId: 'admission',
    title: 'Engineering Admission',
    subtitle: 'BUET, RUET, KUET, CUET ও ইঞ্জিনিয়ারিং গুচ্ছ',
    iconName: 'Cpu',
    colorTheme: {
      bg: 'bg-blue-500/15',
      text: 'text-blue-500',
      border: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-400',
      badgeBg: 'bg-blue-500/10'
    },
    totalExams: 50,
    questionCount: 14000
  },
  {
    id: 'du-admission',
    groupId: 'admission',
    title: 'DU Admission',
    subtitle: 'ঢাকা বিশ্ববিদ্যালয় (ক, খ, গ ইউনিট)',
    iconName: 'GraduationCap',
    colorTheme: {
      bg: 'bg-sky-500/15',
      text: 'text-sky-500',
      border: 'border-sky-500/30',
      hoverBorder: 'hover:border-sky-400',
      badgeBg: 'bg-sky-500/10'
    },
    totalExams: 42,
    questionCount: 11000
  },
  {
    id: 'ru-admission',
    groupId: 'admission',
    title: 'RU Admission',
    subtitle: 'রাজশাহী বিশ্ববিদ্যালয় ভর্তি পরীক্ষা',
    iconName: 'School',
    colorTheme: {
      bg: 'bg-emerald-500/15',
      text: 'text-emerald-500',
      border: 'border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-400',
      badgeBg: 'bg-emerald-500/10'
    },
    totalExams: 30,
    questionCount: 8000
  },
  {
    id: 'cu-admission',
    groupId: 'admission',
    title: 'CU Admission',
    subtitle: 'চট্টগ্রাম বিশ্ববিদ্যালয় ভর্তি পরীক্ষা',
    iconName: 'Building2',
    colorTheme: {
      bg: 'bg-teal-500/15',
      text: 'text-teal-500',
      border: 'border-teal-500/30',
      hoverBorder: 'hover:border-teal-400',
      badgeBg: 'bg-teal-500/10'
    },
    totalExams: 28,
    questionCount: 7500
  },
  {
    id: 'ju-admission',
    groupId: 'admission',
    title: 'JU Admission',
    subtitle: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয় ভর্তি পরীক্ষা',
    iconName: 'Compass',
    colorTheme: {
      bg: 'bg-indigo-500/15',
      text: 'text-indigo-500',
      border: 'border-indigo-500/30',
      hoverBorder: 'hover:border-indigo-400',
      badgeBg: 'bg-indigo-500/10'
    },
    totalExams: 28,
    questionCount: 7200
  },
  {
    id: 'agri-admission',
    groupId: 'admission',
    title: 'Agricultural Admission',
    subtitle: 'কৃষি গুচ্ছ সমন্বিত ভর্তি পরীক্ষা',
    iconName: 'Sprout',
    colorTheme: {
      bg: 'bg-green-500/15',
      text: 'text-green-500',
      border: 'border-green-500/30',
      hoverBorder: 'hover:border-green-400',
      badgeBg: 'bg-green-500/10'
    },
    totalExams: 25,
    questionCount: 6500
  },
  {
    id: 'nursing-admission',
    groupId: 'admission',
    title: 'Nursing Admission',
    subtitle: 'বিএসসি ও ডিপ্লোমা নার্সিং ভর্তি পরীক্ষা',
    iconName: 'HeartPulse',
    colorTheme: {
      bg: 'bg-pink-500/15',
      text: 'text-pink-500',
      border: 'border-pink-500/30',
      hoverBorder: 'hover:border-pink-400',
      badgeBg: 'bg-pink-500/10'
    },
    totalExams: 20,
    questionCount: 5500
  },
  {
    id: 'other-uni-admission',
    groupId: 'admission',
    title: 'অন্যান্য বিশ্ববিদ্যালয় Admission',
    subtitle: 'জিএসটি সাধারণ ও বিজ্ঞান প্রযুক্তি গুচ্ছ ভর্তি',
    iconName: 'Layers',
    colorTheme: {
      bg: 'bg-cyan-500/15',
      text: 'text-cyan-500',
      border: 'border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-400',
      badgeBg: 'bg-cyan-500/10'
    },
    totalExams: 35,
    questionCount: 9000
  },

  // 3. Jobs Group
  {
    id: 'bcs',
    groupId: 'jobs',
    title: 'BCS',
    subtitle: 'বিসিএস প্রিলিমিনারি ও লিখিত প্রস্তুতি',
    iconName: 'Landmark',
    colorTheme: {
      bg: 'bg-cyan-500/15',
      text: 'text-cyan-500',
      border: 'border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-400',
      badgeBg: 'bg-cyan-500/10'
    },
    totalExams: 48,
    questionCount: 15000
  },
  {
    id: 'bank-govt',
    groupId: 'jobs',
    title: 'Bank & Govt.',
    subtitle: 'বাংলাদেশ ব্যাংক ও বিভিন্ন সরকারি নিয়োগ পরীক্ষা',
    iconName: 'Briefcase',
    colorTheme: {
      bg: 'bg-teal-500/15',
      text: 'text-teal-500',
      border: 'border-teal-500/30',
      hoverBorder: 'hover:border-teal-400',
      badgeBg: 'bg-teal-500/10'
    },
    totalExams: 55,
    questionCount: 16500
  }
];

export const whyChooseFeatures: FeatureItem[] = [
  {
    id: 'f1',
    title: 'সাজানো প্রশ্নব্যাংক',
    subtitle: '(বিভাগভিত্তিক + অধ্যায়ভিত্তিক)',
    iconName: 'CheckSquare',
    color: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30'
  },
  {
    id: 'f2',
    title: 'সময় নির্ধারিত পরীক্ষা',
    subtitle: '(বাস্তব পরীক্ষার মতো)',
    iconName: 'Clock',
    color: 'text-purple-400 bg-purple-500/15 border-purple-500/30'
  },
  {
    id: 'f3',
    title: 'স্বয়ংক্রিয় ফলাফল',
    subtitle: '(তাৎক্ষণিক রেজাল্ট + বিশ্লেষণ)',
    iconName: 'BarChart3',
    color: 'text-blue-400 bg-blue-500/15 border-blue-500/30'
  },
  {
    id: 'f4',
    title: 'পারফরম্যান্স ট্র্যাকিং',
    subtitle: '(দুর্বলতা চিহ্নিত করুন)',
    iconName: 'TrendingUp',
    color: 'text-rose-400 bg-rose-500/15 border-rose-500/30'
  },
  {
    id: 'f5',
    title: 'প্রশ্নের ব্যাখ্যা',
    subtitle: '(প্রতিটি প্রশ্নের সঠিক সমাধান)',
    iconName: 'HelpCircle',
    color: 'text-violet-400 bg-violet-500/15 border-violet-500/30'
  },
  {
    id: 'f6',
    title: 'নিরাপদ ও নির্ভরযোগ্য',
    subtitle: '(আপনার তথ্য ১০০% নিরাপদ)',
    iconName: 'ShieldCheck',
    color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    badge: 'সাশ্রয়ী অফার',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    price: '৳ ২০০',
    duration: '/ ৭ দিন',
    features: [
      'এক্সাম অ্যাক্সেস',
      'সীমিত প্রশ্নব্যাংক',
      'রেজাল্ট দেখুন'
    ],
    buttonText: 'কিনুন',
    buttonClass: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400/80',
    glowColor: 'hover:shadow-emerald-500/10'
  },
  {
    id: 'standard',
    name: 'Standard',
    badge: 'জনপ্রিয়',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    price: '৳ ৩৫০',
    duration: '/ ১৫ দিন',
    features: [
      'সকল ক্যাটাগরির পরীক্ষা',
      'প্রশ্নের ব্যাখ্যা',
      'পারফরম্যান্স ট্র্যাকিং'
    ],
    buttonText: 'কিনুন',
    buttonClass: 'bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-950/50',
    borderColor: 'border-sky-500/40 hover:border-sky-400',
    glowColor: 'hover:shadow-sky-500/15',
    isPopular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'সেরা পছন্দ',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    price: '৳ ৬০০',
    duration: '/ ৩০ দিন',
    features: [
      'সকল ক্যাটাগরির পরীক্ষা',
      'সম্পূর্ণ প্রশ্নব্যাংক',
      'অ্যানালিটিক্স + র‍্যাংকিং',
      'রেজাল্ট ডাউনলোড'
    ],
    buttonText: 'কিনুন',
    buttonClass: 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-950/50',
    borderColor: 'border-purple-500/40 hover:border-purple-400',
    glowColor: 'hover:shadow-purple-500/15'
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '৳ ২৫০০',
    priceNote: 'একবারই পেমেন্ট, সারাজীবন',
    features: [
      'সকল ফিচার আনলিমিটেড',
      'লাইফটাইম অ্যাক্সেস',
      'বিশেষ সাপোর্ট'
    ],
    buttonText: 'কিনুন',
    buttonClass: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/50',
    borderColor: 'border-blue-500/40 hover:border-blue-400',
    glowColor: 'hover:shadow-blue-500/15'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'রাফি',
    exam: 'HSC 2024',
    quote: 'ExamBD আমার প্রস্তুতিতে বড় পরিবর্তন এনেছে। রেজাল্ট খুবই ভালো ছিল!',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't2',
    name: 'তাসনিম',
    exam: 'BCS 2023',
    quote: 'প্রশ্নের মান অনেক ভালো আর ব্যাখ্যাগুলো খুবই সহজভাবে বোঝা যায়।',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't3',
    name: 'মেহেদী',
    exam: 'NU 2024',
    quote: 'নিয়মিত প্র্যাকটিসের জন্য আমি Admission এ ভালো রেজাল্ট করেছি।',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  }
];

export const mockQuestions: MockQuestion[] = [
  // BCS / Jobs
  {
    id: 1,
    category: 'bcs',
    question: 'বাংলা সাহিত্যের প্রথম আধুনিক কবি কে?',
    options: ['মাইকেল মধুসূদন দত্ত', 'রবীন্দ্রনাথ ঠাকুর', 'কাজী নজরুল ইসলাম', 'ঈশ্বরচন্দ্র বিদ্যাসাগর'],
    correctIndex: 0,
    explanation: 'মাইকেল মধুসূদন দত্তকে বাংলা সাহিত্যের প্রথম সার্থক আধুনিক কবি বলা হয়। তাঁর বিখ্যাত মহাকাব্য "মেঘনাদবধ কাব্য"।'
  },
  {
    id: 2,
    category: 'bank-govt',
    question: 'একটি সংখ্যার ৬০% থেকে ৬০ বিয়োগ করলে ফলাফল ৬০ হয়। সংখ্যাটি কত?',
    options: ['১০০', '১৫০', '২০০', '২৫০'],
    correctIndex: 2,
    explanation: 'ধরি সংখ্যাটি x। ৬০% of x - ৬০ = ৬০ => ০.৬x = ১২০ => x = ১২০ / ০.৬ = ২০০।'
  },
  // Academic: SSC & HSC
  {
    id: 3,
    category: 'ssc',
    question: 'নিচের কোনটি সালোকসংশ্লেষণের আলোক পর্যায়ে তৈরি হয়?',
    options: ['ATP ও NADPH', 'গ্লুকোজ', 'পানি ও অক্সিজেন', 'ল্যাকটিক এসিড'],
    correctIndex: 0,
    explanation: 'সালোকসংশ্লেষণের আলোক পর্যায়ে আলোকশক্তি রাসায়নিক শক্তিতে রূপান্তরিত হয়ে ATP এবং NADPH তৈরি করে।'
  },
  {
    id: 4,
    category: 'hsc',
    question: 'আদর্শ গ্যাসের ক্ষেত্রে সমোষ্ণ প্রক্রিয়ায় নিচের কোনটি ধ্রুবক থাকে?',
    options: ['তাপমাত্রা (T)', 'চাপ (P)', 'আয়তন (V)', 'এনট্রপি (S)'],
    correctIndex: 0,
    explanation: 'সমোষ্ণ প্রক্রিয়ায় (Isothermal process) সিস্টেমের তাপমাত্রা (T) সর্বদা ধ্রুব থাকে।'
  },
  // Admission: Medical & Engineering
  {
    id: 5,
    category: 'medical-admission',
    question: 'মানবদেহের কোন অঙ্গে ইউরিয়া সংশ্লেষিত হয়?',
    options: ['যকৃৎ (Liver)', 'বৃক্ক (Kidney)', 'হৃদপিণ্ড (Heart)', 'ফুসফুস (Lungs)'],
    correctIndex: 0,
    explanation: 'অরনিথিন চক্রের মাধ্যমে যকৃতে (Liver) অতিরিক্ত অ্যামিনো এসিড থেকে বিষাক্ত অ্যামোনিয়া ইউরিয়ায় রূপান্তরিত হয়।'
  },
  {
    id: 6,
    category: 'engineering-admission',
    question: 'lim (x->0) [sin(5x) / x] এর মান কত?',
    options: ['0', '1', '5', 'অসীম'],
    correctIndex: 2,
    explanation: 'আমরা জানি lim(u->0) [sin(u)/u] = 1। এখানে 5 * lim(5x->0) [sin(5x)/(5x)] = 5 * 1 = 5।'
  },
  // Admission: DU, RU, CU, JU
  {
    id: 7,
    category: 'du-admission',
    question: 'The antonym of the word "Fragile" is —',
    options: ['Delicate', 'Sturdy', 'Weak', 'Brittle'],
    correctIndex: 1,
    explanation: 'Fragile অর্থ ভঙ্গুর, এর বিপরীত শব্দ হলো Sturdy (দৃঢ়, শক্তপোক্ত)।'
  },
  {
    id: 8,
    category: 'ru-admission',
    question: '"অপরাজেয় বাংলা" ভাস্কর্যটির স্থপতি কে?',
    options: ['সৈয়দ আব্দুল্লাহ খালিদ', 'শামীম শিকদার', 'হামিদুজ্জামান খান', 'মৃণাল হক'],
    correctIndex: 0,
    explanation: 'ঢাকা বিশ্ববিদ্যালয়ের কলাভবনের সামনে অবস্থিত ঐতিহাসিক মুক্তিযুদ্ধভিত্তিক ভাস্কর্য "অপরাজেয় বাংলা"-র ভাস্কর সৈয়দ আব্দুল্লাহ খালিদ।'
  },
  {
    id: 9,
    category: 'cu-admission',
    question: 'বায়ুমণ্ডলের কোন স্তরে বেতার তরঙ্গ প্রতিফলিত হয়?',
    options: ['আয়নোস্ফিয়ার', 'ট্রপোস্ফিয়ার', 'স্ট্রাটোস্ফিয়ার', 'মেসোস্ফিয়ার'],
    correctIndex: 0,
    explanation: 'বায়ুমণ্ডলের থার্মোস্ফিয়ারের আয়নোস্ফিয়ার (Ionosphere) স্তর থেকে বেতার তরঙ্গ পৃথিবীতে প্রতিফলিত হয়ে ফিরে আসে।'
  },
  {
    id: 10,
    category: 'ju-admission',
    question: 'সিরিজের পরবর্তী সংখ্যাটি কত? ২, ৬, ১২, ২০, ৩০, ?',
    options: ['৪০', '৪২', '৪৬', '৪৮'],
    correctIndex: 1,
    explanation: 'পার্থক্যগুলো লক্ষ্য করুন: +৪, +৬, +৮, +১০, এরপর +১২ হবে। তাই ৩০ + ১২ = ৪২।'
  },
  {
    id: 11,
    category: 'agri-admission',
    question: 'মাটির উর্বরতা বৃদ্ধিতে সাহায্যকারী মিথোজীবী ব্যাকটেরিয়া কোনটি?',
    options: ['Rhizobium', 'E. coli', 'Salmonella', 'Lactobacillus'],
    correctIndex: 0,
    explanation: 'Rhizobium ব্যাকটেরিয়া শিমজাতীয় উদ্ভিদের মূলে নডিউল তৈরি করে বায়ুমণ্ডলের নাইট্রোজেন মাটিতে সংবন্ধন করে উর্বরতা বাড়ায়।'
  },
  {
    id: 12,
    category: 'nursing-admission',
    question: 'রক্তের কোন উপাদানটি রক্ত জমাট বাঁধতে (clotting) সাহায্য করে?',
    options: ['অনুচক্রিকা (Platelets)', 'লোহিত রক্তকণিকা', 'শ্বেত রক্তকণিকা', 'হিমোগ্লোবিন'],
    correctIndex: 0,
    explanation: 'অনুচক্রিকা বা প্লাটিলেট ক্ষতস্থানে থ্রম্বোপ্লাস্টিন নিঃসরণ করে রক্ত জমাট বাঁধাতে অপরিহার্য ভূমিকা রাখে।'
  },
  {
    id: 13,
    category: 'other-uni-admission',
    question: 'বঙ্গবন্ধু শেখ মুজিবুর রহমান কোন ঐতিহাসিক ভাষণে "এবারের সংগ্রাম মুক্তির সংগ্রাম" ঘোষণা করেন?',
    options: ['৭ই মার্চের ভাষণ', '১০ই জানুয়ারির ভাষণ', '২৬শে মার্চের ঘোষণা', '১৭ই এপ্রিলের শপথ'],
    correctIndex: 0,
    explanation: '১৯৭১ সালের ৭ই মার্চ রেসকোর্স ময়দানে (বর্তমানে সোহরাওয়ার্দী উদ্যান) বঙ্গবন্ধু তাঁর ঐতিহাসিক ভাষণে এই অমর ঘোষণা প্রদান করেন।'
  }
];
