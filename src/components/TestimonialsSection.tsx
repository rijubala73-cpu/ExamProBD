import React from 'react';
import { Users, FileCheck, Award, MessageSquareQuote } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const TestimonialsSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="testimonials" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className={`text-2xl sm:text-3xl font-bold font-bengali tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            হাজারো শিক্ষার্থীর বিশ্বাস
          </h2>
          <p className={`text-sm sm:text-base font-bengali mt-1 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            তাদের সফলতার গল্পই আমাদের অনুপ্রেরণা
          </p>
        </div>

        {/* Grid: 3 Testimonials (left/top) + Stats Box (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 3 Testimonial Cards (8 cols on lg) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`rounded-xl p-4.5 flex flex-col justify-between transition-all border ${
                  isDarkMode
                    ? 'bg-[#04162e] border-[#133256] hover:border-[#1e487a]'
                    : 'bg-white border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md'
                }`}
              >
                {/* Avatar & Quote */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className={`w-11 h-11 rounded-full object-cover border-2 shadow-sm ${
                        isDarkMode ? 'border-cyan-500/40' : 'border-sky-400'
                      }`}
                    />
                    <div>
                      <h4 className={`text-sm font-bold font-bengali ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {t.name}
                      </h4>
                      <p className={`text-[11px] font-medium ${
                        isDarkMode ? 'text-cyan-400' : 'text-sky-600 font-semibold'
                      }`}>
                        {t.exam}
                      </p>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-[13px] font-bengali leading-relaxed italic ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    “{t.quote}”
                  </p>
                </div>

                <div className={`mt-4 pt-2 flex items-center justify-between text-[11px] font-bengali border-t ${
                  isDarkMode ? 'border-[#0e2747] text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span>ভেরিফাইড শিক্ষার্থী</span>
                  <span className={isDarkMode ? 'text-emerald-400' : 'text-amber-500'}>★★★★★</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Box (4 cols on lg) */}
          <div className="lg:col-span-4">
            <div className={`h-full rounded-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-xl border ${
              isDarkMode
                ? 'bg-gradient-to-br from-[#051c38] via-[#04162e] to-[#020b18] border-[#143d66]'
                : 'bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#1e3a8a] border-sky-300/40 shadow-sky-900/15 text-white'
            }`}>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                
                {/* Metric 1 */}
                <div className="space-y-1">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 border ${
                    isDarkMode 
                      ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' 
                      : 'bg-white/20 text-cyan-200 border-white/30'
                  }`}>
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    1M+
                  </div>
                  <div className={`text-[11px] font-bengali ${isDarkMode ? 'text-slate-400' : 'text-cyan-100'}`}>
                    মোট ব্যবহারকারী
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 border ${
                    isDarkMode 
                      ? 'bg-blue-500/15 text-blue-400 border-blue-500/30' 
                      : 'bg-white/20 text-cyan-200 border-white/30'
                  }`}>
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    10K+
                  </div>
                  <div className={`text-[11px] font-bengali ${isDarkMode ? 'text-slate-400' : 'text-cyan-100'}`}>
                    মক টেস্ট
                  </div>
                </div>

                {/* Metric 3 */}
                <div className={`col-span-2 pt-2 flex items-baseline gap-2 border-t ${
                  isDarkMode ? 'border-[#133256]' : 'border-white/20'
                }`}>
                  <span className={`text-2xl sm:text-3xl font-extrabold ${
                    isDarkMode ? 'text-[#00d2ff]' : 'text-cyan-200'
                  }`}>
                    95%+
                  </span>
                  <span className={`text-xs font-bengali ${
                    isDarkMode ? 'text-slate-300' : 'text-cyan-100'
                  }`}>
                    সফল শিক্ষার্থী
                  </span>
                </div>

              </div>

              {/* Chalk handwritten: "Together We Can" with doodle underline */}
              <div className="mt-4 pt-3 flex justify-end relative z-10 select-none pointer-events-none">
                <div className="text-right">
                  <div className={`font-handwriting text-2xl sm:text-3xl font-bold tracking-wider transform -rotate-6 drop-shadow ${
                    isDarkMode ? 'text-cyan-300' : 'text-cyan-200'
                  }`}>
                    Together <br />
                    We Can
                  </div>
                  {/* Swoosh wave underline */}
                  <svg
                    className={`w-24 h-4 -mt-1 ml-auto opacity-80 ${
                      isDarkMode ? 'text-cyan-400' : 'text-cyan-300'
                    }`}
                    viewBox="0 0 100 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M 5 12 Q 35 2 65 12 T 95 10" />
                  </svg>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
