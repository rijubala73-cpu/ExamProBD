import React from 'react';
import { 
  CheckSquare, 
  Clock, 
  BarChart3, 
  TrendingUp, 
  HelpCircle, 
  ShieldCheck, 
  Target, 
  ArrowRight, 
  Crown
} from 'lucide-react';
import { whyChooseFeatures } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface WhyChooseUsProps {
  onBuyPlanClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBuyPlanClick }) => {
  const { isDarkMode } = useTheme();

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-us" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Side: 6 Features (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Why Choose ExamBD?
              </h2>
              <p className={`text-sm sm:text-base font-bengali mt-1.5 mb-8 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                শুধু একটি পরীক্ষা নয়, তোমার স্বপ্ন পূরণের সম্পূর্ণ প্রস্তুতি।
              </p>

              {/* 6 Features: 3 cols x 2 rows */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {whyChooseFeatures.map((feat) => (
                  <div key={feat.id} className="flex flex-col items-start space-y-2.5">
                    {/* Icon Container */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs ${feat.color}`}>
                      {getFeatureIcon(feat.iconName)}
                    </div>
                    {/* Title */}
                    <div>
                      <h4 className={`text-sm font-bold font-bengali leading-snug ${
                        isDarkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {feat.title}
                      </h4>
                      <p className={`text-[11px] font-bengali mt-0.5 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {feat.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Special Offer Banner Card (6 cols on lg) */}
          <div className="lg:col-span-6">
            <div className={`h-full rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-2xl flex flex-col justify-between border ${
              isDarkMode
                ? 'bg-gradient-to-br from-[#061d3b] via-[#04162e] to-[#020b18] border-[#164673]'
                : 'bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#1e3a8a] border-sky-300/40 shadow-sky-900/15 text-white'
            }`}>
              
              {/* Background ambient glow */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative z-10">
                {/* Offer Text (7 cols on sm) */}
                <div className="sm:col-span-7 flex flex-col items-start space-y-4">
                  
                  {/* Top Target Icon + Special Offer Badge */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                      isDarkMode 
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-[#00d2ff]' 
                        : 'bg-white/20 border-white/40 text-cyan-200'
                    }`}>
                      <Target className="w-5 h-5 animate-spin-slow" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border tracking-wide ${
                      isDarkMode 
                        ? 'bg-blue-600/30 text-blue-300 border-blue-500/40' 
                        : 'bg-white/25 text-white border-white/40 backdrop-blur-xs'
                    }`}>
                      Special Offer
                    </span>
                  </div>

                  {/* Offer Heading */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-bengali leading-tight">
                    আজই শুরু করো <br />
                    তোমার প্রস্তুতি!
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-cyan-50/90 font-bengali leading-relaxed">
                    সেরা প্ল্যান কিনে আনলিমিটেড পরীক্ষা দাও এবং নিজের অগ্রগতি দেখো।
                  </p>

                  {/* CTA Button */}
                  <button
                    id="special-offer-buy-btn"
                    onClick={onBuyPlanClick}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm font-bengali shadow-lg transition-all hover:gap-3 cursor-pointer ${
                      isDarkMode
                        ? 'bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-cyan-900/40'
                        : 'bg-white hover:bg-slate-50 text-sky-800 shadow-sky-950/20'
                    }`}
                  >
                    <span>প্ল্যান কিনুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Illustration & Chalk Doodle (5 cols on sm) */}
                <div className="sm:col-span-5 relative flex flex-col items-center justify-center">
                  
                  {/* Handwritten Doodle above illustration: 'Dream Plan Achieve' */}
                  <div className="mb-2 text-center select-none pointer-events-none">
                    <div className="flex items-center justify-center text-amber-300 mb-0.5">
                      <Crown className="w-4 h-4" />
                    </div>
                    <div className="font-handwriting text-white text-lg sm:text-xl font-bold leading-none tracking-wide drop-shadow">
                      ‘Dream <br />
                      Plan <br />
                      Achieve’
                    </div>
                    <div className="text-cyan-200 text-xs mt-0.5 flex justify-center gap-1">
                      <span>✦</span>
                      <span>★</span>
                    </div>
                  </div>

                  {/* Laptop & Books Graphic */}
                  <div className="relative w-full max-w-[200px] aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-lg bg-black/20">
                    <img
                      src="/assets/study_banner.jpg"
                      alt="ExamBD Study Material & Mock Test"
                      className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
