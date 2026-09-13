import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Zap, 
  BarChart2, 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onSearchSubmit: (keyword: string) => void;
  onExploreExams: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchSubmit, onExploreExams }) => {
  const { isDarkMode } = useTheme();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearchSubmit(query.trim());
    } else {
      onExploreExams();
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* 3-4 Color Multi-tone Background Ambient Mesh & Radial Orbs */}
      {isDarkMode ? (
        <>
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        </>
      ) : (
        <>
          {/* Color 1: Sky Blue Aura (Top Left) */}
          <div className="absolute -top-12 -left-12 w-[520px] h-[520px] bg-sky-300/35 rounded-full blur-[100px] pointer-events-none" />
          {/* Color 2: Soft Lavender / Indigo Glow (Top Right) */}
          <div className="absolute top-10 right-0 w-[480px] h-[480px] bg-indigo-300/30 rounded-full blur-[110px] pointer-events-none" />
          {/* Color 3: Mint / Emerald Fresh Tint (Bottom Center) */}
          <div className="absolute -bottom-16 left-1/3 w-[440px] h-[440px] bg-emerald-300/25 rounded-full blur-[100px] pointer-events-none" />
          {/* Color 4: Warm Peach / Amber Accent (Center Right) */}
          <div className="absolute top-1/2 right-1/4 w-[360px] h-[360px] bg-amber-200/30 rounded-full blur-[90px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top pill badge */}
            <div 
              id="hero-top-badge"
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium font-bengali shadow-sm transition-all ${
                isDarkMode
                  ? 'bg-[#08223d]/80 border border-[#174871] text-cyan-300 shadow-cyan-950/40'
                  : 'bg-white/90 border border-sky-200 text-sky-800 shadow-sky-100/60'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-sky-600'}`} />
              <span>বাংলাদেশের সকল প্রতিযোগিতামূলক পরীক্ষার জন্য</span>
            </div>

            {/* Main Title */}
            <div className="space-y-1">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.25] sm:leading-[1.2] font-bengali ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                তোমার স্বপ্নের পরীক্ষায় <br />
                সফলতার{' '}
                <span className={
                  isDarkMode
                    ? 'text-[#00d2ff] underline decoration-[#00d2ff]/30 underline-offset-8'
                    : 'text-[#0284c7] underline decoration-sky-300 underline-offset-8'
                }>
                  প্রথম ধাপ
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-bengali font-normal ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              BCS, Admission, SSC, HSC সহ সকল পরীক্ষার জন্য <br className="hidden sm:inline" />
              অনলাইন মক টেস্ট, প্রশ্নব্যাংক ও প্র্যাকটিসের সেরা প্ল্যাটফর্ম।
            </p>

            {/* 4 Feature Badges Row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 pt-1 w-full">
              {/* Feature 1 */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isDarkMode
                  ? 'bg-[#07192f]/60 border-[#112d4f] text-slate-200'
                  : 'bg-white/90 border-slate-200 text-slate-700 shadow-xs'
              }`}>
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">Real Exam Environment</span>
              </div>

              {/* Feature 2 */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isDarkMode
                  ? 'bg-[#07192f]/60 border-[#112d4f] text-slate-200'
                  : 'bg-white/90 border-slate-200 text-slate-700 shadow-xs'
              }`}>
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">Instant Result & Analysis</span>
              </div>

              {/* Feature 3 */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isDarkMode
                  ? 'bg-[#07192f]/60 border-[#112d4f] text-slate-200'
                  : 'bg-white/90 border-slate-200 text-slate-700 shadow-xs'
              }`}>
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                  <BarChart2 className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">Performance Tracking</span>
              </div>

              {/* Feature 4 */}
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isDarkMode
                  ? 'bg-[#07192f]/60 border-[#112d4f] text-slate-200'
                  : 'bg-white/90 border-slate-200 text-slate-700 shadow-xs'
              }`}>
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">Secure & Trusted</span>
              </div>
            </div>

            {/* Big Search Input Box */}
            <div className="w-full pt-2">
              <form 
                onSubmit={handleSubmit}
                className={`rounded-xl md:rounded-full p-2 pl-4 flex flex-col sm:flex-row items-center gap-2 transition-all border ${
                  isDarkMode
                    ? 'bg-[#051a36] border-[#16436e] shadow-2xl shadow-cyan-950/50 focus-within:ring-2 focus-within:ring-cyan-400'
                    : 'bg-white border-slate-200/90 shadow-xl shadow-sky-900/5 focus-within:ring-2 focus-within:ring-sky-400'
                }`}
              >
                <div className="flex items-center gap-3 w-full flex-1">
                  <Search className={`w-5 h-5 shrink-0 ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`} />
                  <input
                    id="hero-exam-search-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="আপনি কোন পরীক্ষার জন্য প্রস্তুতি নিতে চান?"
                    className={`w-full py-2 text-sm sm:text-base font-bengali bg-transparent focus:outline-none ${
                      isDarkMode ? 'text-white placeholder:text-slate-400' : 'text-slate-900 placeholder:text-slate-400'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  id="hero-search-action-btn"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg sm:rounded-full bg-[#0284c7] hover:bg-[#0369a1] active:bg-[#075985] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shrink-0 font-bengali shadow-md shadow-sky-600/30 cursor-pointer"
                >
                  <span>পরীক্ষা খুঁজুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Tags under search */}
              <div className="flex items-center gap-2 mt-3 text-xs font-bengali">
                <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>জনপ্রিয় অনুসন্ধান:</span>
                {['Medical Admission', 'DU Admission', 'BCS', 'HSC', 'Bank & Govt.'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onSearchSubmit(tag)}
                    className={`transition-colors ${
                      isDarkMode
                        ? 'text-slate-300 hover:text-cyan-300 hover:underline'
                        : 'text-sky-700 hover:text-sky-900 hover:underline font-medium'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/4.8] sm:aspect-[4/4.5] flex items-center justify-center">
              
              {/* Atmospheric Backdrop Glow & Ring */}
              <div className={`absolute inset-0 rounded-3xl opacity-90 border shadow-2xl overflow-hidden ${
                isDarkMode
                  ? 'bg-gradient-to-tr from-[#05264a] via-[#0b3b6e] to-[#041224] border-[#1b4e85]/60'
                  : 'bg-gradient-to-tr from-[#0284c7]/90 via-[#0369a1] to-[#1e3a8a] border-sky-300/40 shadow-sky-900/15'
              }`}>
                {/* Architectural silhouette overlay */}
                <div 
                  className="absolute inset-0 opacity-25 mix-blend-screen bg-cover bg-center"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%)`
                  }}
                />
              </div>

              {/* Student Image */}
              <div className="relative z-10 w-full h-full p-3 flex items-end justify-center overflow-hidden rounded-3xl">
                <img 
                  src="/assets/hero_student.jpg" 
                  alt="ExamBD Successful Student"
                  className="w-full h-full object-cover object-top rounded-2xl drop-shadow-2xl filter contrast-105"
                  onError={(e) => {
                    // Fallback to high quality student avatar if local file is loading
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80";
                  }}
                />

                {/* Vignette Gradient at bottom for text contrast */}
                <div className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t pointer-events-none ${
                  isDarkMode
                    ? 'from-[#020b18] via-[#020b18]/50 to-transparent'
                    : 'from-[#0c2d48]/80 via-[#0c2d48]/30 to-transparent'
                }`} />
              </div>

              {/* Handwritten Note: "Better Preparation Brighter Future!" */}
              <div className="absolute -top-3 right-0 sm:-right-4 z-20 pointer-events-none select-none">
                <div className="flex flex-col items-center">
                  <div className={`font-handwriting text-2xl sm:text-3xl leading-tight font-bold tracking-wide transform rotate-3 text-center ${
                    isDarkMode
                      ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                      : 'text-indigo-950 sm:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]'
                  }`}>
                    Better <br />
                    Preparation <br />
                    Brighter <br />
                    Future!
                  </div>
                  {/* Hand-drawn style chalk arrow */}
                  <svg 
                    className={`w-16 h-14 drop-shadow transform -rotate-12 mt-1 opacity-95 ${
                      isDarkMode ? 'text-white' : 'text-sky-300'
                    }`} 
                    viewBox="0 0 100 80" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3.5"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M 75 10 C 65 35, 45 45, 20 65" />
                    <path d="M 18 48 L 18 67 L 38 65" />
                  </svg>
                </div>
              </div>

              {/* Little sparkles / stars decoration */}
              <div className="absolute top-4 left-6 text-cyan-300 opacity-80 animate-pulse pointer-events-none">
                ✦
              </div>
              <div className="absolute bottom-20 left-4 text-amber-300 opacity-90 pointer-events-none">
                ★
              </div>
              <div className="absolute top-20 right-6 text-white text-xs opacity-70 pointer-events-none">
                ✦
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
