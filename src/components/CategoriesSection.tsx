import React, { useState } from 'react';
import { 
  Landmark, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  School, 
  Briefcase, 
  Layers, 
  ArrowRight,
  Stethoscope,
  Cpu,
  Building2,
  Compass,
  Sprout,
  HeartPulse,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ExamCategory, ExamGroupId } from '../types';
import { examCategories, examGroups } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface CategoriesSectionProps {
  onSelectCategory: (category: ExamCategory) => void;
  onViewAllExams: () => void;
  selectedCategoryId?: string;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onViewAllExams,
  selectedCategoryId
}) => {
  const { isDarkMode } = useTheme();
  const [activeGroupFilter, setActiveGroupFilter] = useState<'all' | ExamGroupId>('all');

  // Map icon strings to Lucide components
  const renderCategoryIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 sm:w-6 sm:h-6" };
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen {...iconProps} />;
      case 'FileText':
        return <FileText {...iconProps} />;
      case 'Stethoscope':
        return <Stethoscope {...iconProps} />;
      case 'Cpu':
        return <Cpu {...iconProps} />;
      case 'GraduationCap':
        return <GraduationCap {...iconProps} />;
      case 'School':
        return <School {...iconProps} />;
      case 'Building2':
        return <Building2 {...iconProps} />;
      case 'Compass':
        return <Compass {...iconProps} />;
      case 'Sprout':
        return <Sprout {...iconProps} />;
      case 'HeartPulse':
        return <HeartPulse {...iconProps} />;
      case 'Landmark':
        return <Landmark {...iconProps} />;
      case 'Briefcase':
        return <Briefcase {...iconProps} />;
      case 'Layers':
      default:
        return <Layers {...iconProps} />;
    }
  };

  // Filter groups to display
  const groupsToDisplay = activeGroupFilter === 'all' 
    ? examGroups 
    : examGroups.filter(g => g.id === activeGroupFilter);

  return (
    <section id="categories" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border transition-colors shadow-xs"
              style={{
                backgroundColor: isDarkMode ? 'rgba(6, 182, 212, 0.1)' : 'rgba(2, 132, 199, 0.08)',
                color: isDarkMode ? '#22d3ee' : '#0284c7',
                borderColor: isDarkMode ? 'rgba(6, 182, 212, 0.25)' : 'rgba(2, 132, 199, 0.2)'
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>৩টি বিশেষ ক্যাটাগরি গ্রুপ</span>
            </div>
            
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-bengali tracking-tight flex items-center gap-2.5 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <span>পরীক্ষার বিভাগসমূহ</span>
            </h2>
            <p className={`text-sm sm:text-base font-bengali mt-1.5 max-w-2xl ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Academic, Admission এবং Jobs — আপনার নির্দিষ্ট লক্ষ্য অনুযায়ী প্রস্তুতকৃত এক্সক্লুসিভ প্রশ্নব্যাংক ও মক টেস্ট
            </p>
          </div>

          <button
            id="view-all-exams-btn"
            onClick={onViewAllExams}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold font-bengali transition-colors group self-start md:self-auto cursor-pointer ${
              isDarkMode ? 'text-[#00d2ff] hover:text-cyan-300' : 'text-[#0284c7] hover:text-sky-700'
            }`}
          >
            <span>সব পরীক্ষা একসাথে দেখুন ({examCategories.length}টি)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Group Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {/* All tab */}
          <button
            id="group-tab-all"
            onClick={() => setActiveGroupFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-bengali flex items-center gap-2 transition-all cursor-pointer shrink-0 border ${
              activeGroupFilter === 'all'
                ? isDarkMode
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-950/40 ring-1 ring-cyan-500/40'
                  : 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20'
                : isDarkMode
                  ? 'bg-[#04162e] text-slate-400 hover:text-slate-200 border-[#143255] hover:bg-[#072044]'
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>সকল গ্রুপ</span>
            <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-semibold ${
              activeGroupFilter === 'all'
                ? isDarkMode ? 'bg-cyan-500/30 text-white' : 'bg-white/20 text-white'
                : isDarkMode ? 'bg-[#081e3d] text-slate-400' : 'bg-slate-100 text-slate-500'
            }`}>
              {examCategories.length}
            </span>
          </button>

          {/* Group 1: Academic Tab */}
          <button
            id="group-tab-academic"
            onClick={() => setActiveGroupFilter('academic')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-bengali flex items-center gap-2 transition-all cursor-pointer shrink-0 border ${
              activeGroupFilter === 'academic'
                ? isDarkMode
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md shadow-amber-950/40 ring-1 ring-amber-500/40'
                  : 'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-600/20'
                : isDarkMode
                  ? 'bg-[#04162e] text-slate-400 hover:text-slate-200 border-[#143255] hover:bg-[#072044]'
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="font-sans font-bold">1. Academic</span>
            <span className="text-xs font-normal font-bengali">(এসএসসি ও এইচএসসি)</span>
            <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-semibold ${
              activeGroupFilter === 'academic'
                ? isDarkMode ? 'bg-amber-500/30 text-white' : 'bg-white/20 text-white'
                : isDarkMode ? 'bg-[#081e3d] text-slate-400' : 'bg-slate-100 text-slate-500'
            }`}>
              2
            </span>
          </button>

          {/* Group 2: Admission Tab */}
          <button
            id="group-tab-admission"
            onClick={() => setActiveGroupFilter('admission')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-bengali flex items-center gap-2 transition-all cursor-pointer shrink-0 border ${
              activeGroupFilter === 'admission'
                ? isDarkMode
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-md shadow-sky-950/40 ring-1 ring-sky-500/40'
                  : 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20'
                : isDarkMode
                  ? 'bg-[#04162e] text-slate-400 hover:text-slate-200 border-[#143255] hover:bg-[#072044]'
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="font-sans font-bold">2. Admission</span>
            <span className="text-xs font-normal font-bengali">(বিশ্ববিদ্যালয় ভর্তি)</span>
            <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-semibold ${
              activeGroupFilter === 'admission'
                ? isDarkMode ? 'bg-sky-500/30 text-white' : 'bg-white/20 text-white'
                : isDarkMode ? 'bg-[#081e3d] text-slate-400' : 'bg-slate-100 text-slate-500'
            }`}>
              9
            </span>
          </button>

          {/* Group 3: Jobs Tab */}
          <button
            id="group-tab-jobs"
            onClick={() => setActiveGroupFilter('jobs')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-bengali flex items-center gap-2 transition-all cursor-pointer shrink-0 border ${
              activeGroupFilter === 'jobs'
                ? isDarkMode
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/50 shadow-md shadow-teal-950/40 ring-1 ring-teal-500/40'
                  : 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20'
                : isDarkMode
                  ? 'bg-[#04162e] text-slate-400 hover:text-slate-200 border-[#143255] hover:bg-[#072044]'
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="font-sans font-bold">3. Jobs</span>
            <span className="text-xs font-normal font-bengali">(বিসিএস ও ব্যাংক জব)</span>
            <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-semibold ${
              activeGroupFilter === 'jobs'
                ? isDarkMode ? 'bg-teal-500/30 text-white' : 'bg-white/20 text-white'
                : isDarkMode ? 'bg-[#081e3d] text-slate-400' : 'bg-slate-100 text-slate-500'
            }`}>
              2
            </span>
          </button>
        </div>

        {/* Render Each Group with clear structural division */}
        <div className="space-y-10">
          {groupsToDisplay.map((group) => {
            const categoriesInGroup = examCategories.filter(c => c.groupId === group.id);

            // Group thematic styling
            const getGroupBadgeClasses = () => {
              if (group.id === 'academic') {
                return isDarkMode 
                  ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' 
                  : 'bg-amber-50 text-amber-700 border-amber-200';
              }
              if (group.id === 'admission') {
                return isDarkMode 
                  ? 'bg-sky-500/15 text-sky-300 border-sky-500/30' 
                  : 'bg-sky-50 text-sky-700 border-sky-200';
              }
              return isDarkMode 
                ? 'bg-teal-500/15 text-teal-300 border-teal-500/30' 
                : 'bg-teal-50 text-teal-700 border-teal-200';
            };

            return (
              <div 
                key={group.id} 
                id={`group-section-${group.id}`}
                className={`rounded-2xl p-5 sm:p-6 md:p-7 border transition-all ${
                  isDarkMode
                    ? 'bg-[#04142b]/60 border-[#112d4f]'
                    : 'bg-white/80 border-slate-200/90 shadow-xs backdrop-blur-xs'
                }`}
              >
                {/* Group Heading Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-dashed border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    {/* Group Number & Name Pill */}
                    <div className={`px-3.5 py-1.5 rounded-xl border font-bold text-sm sm:text-base flex items-center gap-2 ${getGroupBadgeClasses()}`}>
                      <span className="font-mono font-extrabold">{group.number}.</span>
                      <span className="font-sans font-bold">{group.name}</span>
                    </div>

                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold font-bengali ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {group.nameBengali}
                      </h3>
                      <p className={`text-xs sm:text-sm font-bengali ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Exam Count Pill */}
                  <div className={`text-xs font-semibold px-3 py-1 rounded-full border self-start sm:self-auto shrink-0 ${
                    isDarkMode
                      ? 'bg-[#081e3a] text-slate-300 border-[#163c69]'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    মোট {categoriesInGroup.length} টি ক্যাটাগরি
                  </div>
                </div>

                {/* Categories Grid for this Group */}
                <div className={`grid gap-4 ${
                  group.id === 'academic' || group.id === 'jobs'
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {categoriesInGroup.map((category) => {
                    const isSelected = selectedCategoryId === category.id;

                    return (
                      <div
                        key={category.id}
                        id={`category-card-${category.id}`}
                        onClick={() => onSelectCategory(category)}
                        className={`group relative border rounded-xl p-4 sm:p-5 flex flex-col justify-between gap-4 cursor-pointer transition-all duration-200 ${
                          isDarkMode
                            ? isSelected
                              ? 'border-[#00d2ff] bg-[#082247] ring-1 ring-[#00d2ff]/40 shadow-cyan-900/30'
                              : 'bg-[#04162e] hover:bg-[#072044] border-[#133256] hover:border-[#225187] shadow-sm hover:shadow-lg'
                            : isSelected
                              ? 'border-[#0284c7] bg-sky-50/90 ring-1 ring-sky-400/40 shadow-md shadow-sky-500/10'
                              : 'bg-white hover:bg-slate-50/90 border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-md'
                        }`}
                      >
                        {/* Top: Icon + Title + Arrow */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3.5 min-w-0">
                            {/* Rounded Icon Box */}
                            <div 
                              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${category.colorTheme.bg} ${category.colorTheme.text} border ${category.colorTheme.border}`}
                            >
                              {renderCategoryIcon(category.iconName)}
                            </div>

                            {/* Title & Subtitle */}
                            <div className="min-w-0">
                              <h4 className={`text-base sm:text-lg font-bold tracking-wide transition-colors ${
                                isDarkMode
                                  ? 'text-white group-hover:text-cyan-300'
                                  : 'text-slate-900 group-hover:text-sky-700'
                              }`}>
                                {category.title}
                              </h4>
                              <p className={`text-xs font-bengali line-clamp-1 mt-0.5 ${
                                isDarkMode ? 'text-slate-400' : 'text-slate-500'
                              }`}>
                                {category.subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Arrow */}
                          <div className={`p-1.5 rounded-lg transition-all shrink-0 ${
                            isDarkMode
                              ? 'text-slate-400 group-hover:text-[#00d2ff] group-hover:translate-x-1'
                              : 'text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1'
                          }`}>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Bottom Stats Footer */}
                        <div className={`pt-3 border-t flex items-center justify-between text-[11px] sm:text-xs font-bengali ${
                          isDarkMode
                            ? 'border-slate-800/80 text-slate-400'
                            : 'border-slate-100 text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{category.totalExams}টি মক টেস্ট</span>
                          </div>
                          
                          <span className="font-mono font-medium">
                            {category.questionCount.toLocaleString('bn-BD')} টি প্রশ্ন
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
