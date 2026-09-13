import React from 'react';
import { Check, ArrowRight, User, Crown } from 'lucide-react';
import { pricingPlans } from '../data/mockData';
import { PricingPlan } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PlansSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onViewAllPlans: () => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({
  onSelectPlan,
  onViewAllPlans
}) => {
  const { isDarkMode } = useTheme();

  return (
    <section id="plans" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className={`text-2xl sm:text-3xl font-bold font-bengali tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              আমাদের প্ল্যান
            </h2>
            <p className={`text-sm sm:text-base font-bengali mt-1 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              তোমার লক্ষ্য, তোমার প্ল্যান
            </p>
          </div>

          <button
            id="view-all-plans-btn"
            onClick={onViewAllPlans}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold font-bengali transition-colors group self-start sm:self-auto cursor-pointer ${
              isDarkMode ? 'text-[#00d2ff] hover:text-cyan-300' : 'text-[#0284c7] hover:text-sky-800'
            }`}
          >
            <span>সকল প্ল্যান দেখুন</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {pricingPlans.map((plan) => {
            const isLifetime = plan.id === 'lifetime';

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative border rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:scale-[1.015] hover:shadow-xl ${
                  isDarkMode
                    ? `bg-[#04162e] ${plan.borderColor} ${plan.glowColor || ''}`
                    : `bg-white ${plan.isPopular ? 'border-sky-400 ring-2 ring-sky-300/40 shadow-lg shadow-sky-500/10' : 'border-slate-200 shadow-sm hover:border-sky-300'}`
                }`}
              >
                {/* Card Top / Header */}
                <div>
                  <div className="flex items-center justify-between mb-3 min-h-[28px]">
                    <div className="flex items-center gap-2">
                      {isLifetime && (
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-sky-100 text-sky-600'
                        }`}>
                          <User className="w-4 h-4" />
                        </div>
                      )}
                      <h3 className={`text-lg sm:text-xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {plan.name}
                      </h3>
                      {isLifetime && (
                        <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />
                      )}
                    </div>

                    {plan.badge && (
                      <span className={`px-2.5 py-0.5 text-[11px] font-medium font-bengali rounded-full border ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price Row */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-2xl sm:text-3xl font-extrabold font-bengali ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {plan.price}
                      </span>
                      {plan.duration && (
                        <span className={`text-xs sm:text-sm font-bengali ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {plan.duration}
                        </span>
                      )}
                    </div>
                    {plan.priceNote && (
                      <p className={`text-[11px] font-bengali mt-1 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {plan.priceNote}
                      </p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className={`w-full h-px mb-4 ${
                    isDarkMode ? 'bg-[#142f52]' : 'bg-slate-100'
                  }`} />

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center gap-2.5 text-xs sm:text-sm font-bengali ${
                        isDarkMode ? 'text-slate-200' : 'text-slate-700'
                      }`}>
                        <Check className={`w-4 h-4 shrink-0 stroke-[2.5] ${
                          isDarkMode ? 'text-cyan-400' : 'text-sky-600'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button */}
                <button
                  id={`buy-plan-btn-${plan.id}`}
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm font-bengali flex items-center justify-center gap-1.5 transition-all cursor-pointer ${plan.buttonClass}`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
