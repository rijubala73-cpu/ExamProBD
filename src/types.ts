export type ExamGroupId = 'academic' | 'admission' | 'jobs';

export interface ExamGroupInfo {
  id: ExamGroupId;
  number: string;
  name: string;
  nameBengali: string;
  badgeBengali: string;
  description: string;
}

export interface ExamCategory {
  id: string;
  groupId: ExamGroupId;
  title: string;
  subtitle: string;
  iconName: string;
  colorTheme: {
    bg: string;
    text: string;
    border: string;
    hoverBorder: string;
    badgeBg: string;
  };
  totalExams: number;
  questionCount: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  price: string;
  duration?: string;
  priceNote?: string;
  features: string[];
  buttonText: string;
  buttonClass: string;
  borderColor: string;
  glowColor?: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  exam: string;
  quote: string;
  avatar: string;
}

export interface MockQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
