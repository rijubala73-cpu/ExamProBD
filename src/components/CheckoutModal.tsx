import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { PricingPlan } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CheckoutModalProps {
  isOpen: boolean;
  plan: PricingPlan | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  plan,
  onClose
}) => {
  const { isDarkMode } = useTheme();
  const [selectedMethod, setSelectedMethod] = useState<'bkash' | 'nagad' | 'card'>('bkash');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !plan) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`rounded-2xl w-full max-w-md p-6 shadow-2xl relative border transition-colors ${
        isDarkMode
          ? 'bg-[#04162e] border-[#174871] text-slate-100'
          : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-1.5 rounded-lg border transition-colors cursor-pointer ${
            isDarkMode
              ? 'bg-[#081f3d] text-slate-400 hover:text-white border-[#143761]'
              : 'bg-slate-100 text-slate-500 hover:text-slate-900 border-slate-200'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className={`text-xl font-bold font-bengali ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              পেমেন্ট সফল হয়েছে!
            </h3>
            <p className={`text-xs font-bengali max-w-xs mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              আপনার {plan.name} প্ল্যান সক্রিয় করা হয়েছে। এখন সকল মক টেস্ট আনলক করা হয়েছে।
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                isDarkMode ? 'text-cyan-400' : 'text-sky-600'
              }`}>
                অর্ডার নিশ্চিতকরণ
              </span>
              <h3 className={`text-xl font-bold font-bengali mt-0.5 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {plan.name} প্ল্যান ক্রয় করুন
              </h3>
              <p className={`text-xs font-bengali ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {plan.price} {plan.duration || ''}
              </p>
            </div>

            {/* Plan summary box */}
            <div className={`p-3.5 rounded-xl border mb-4 space-y-2 ${
              isDarkMode ? 'bg-[#071e3b] border-[#143d6a]' : 'bg-sky-50/70 border-sky-100'
            }`}>
              <div className={`flex justify-between text-xs font-bengali ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <span>প্ল্যানের নাম:</span>
                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{plan.name}</span>
              </div>
              <div className={`flex justify-between text-xs font-bengali ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <span>মোট প্রদেয় মূল্য:</span>
                <span className={`font-bold text-sm ${isDarkMode ? 'text-cyan-300' : 'text-sky-600'}`}>{plan.price}</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 mb-5">
              <label className={`block text-xs font-semibold font-bengali ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                পেমেন্ট মাধ্যম বেছে নিন:
              </label>

              <div className="grid grid-cols-3 gap-2">
                {/* bKash */}
                <button
                  type="button"
                  onClick={() => setSelectedMethod('bkash')}
                  className={`p-2.5 rounded-xl border text-xs font-bold font-bengali flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    selectedMethod === 'bkash'
                      ? 'bg-[#e2136e]/15 border-[#e2136e] text-[#e2136e] ring-1 ring-[#e2136e]'
                      : isDarkMode
                        ? 'bg-[#081d38] border-[#163b66] text-slate-400 hover:bg-[#0a274d]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-sm">বিকাশ</span>
                  <span className="text-[10px] text-[#e2136e]">bKash</span>
                </button>

                {/* Nagad */}
                <button
                  type="button"
                  onClick={() => setSelectedMethod('nagad')}
                  className={`p-2.5 rounded-xl border text-xs font-bold font-bengali flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    selectedMethod === 'nagad'
                      ? 'bg-[#f7941d]/15 border-[#f7941d] text-[#f7941d] ring-1 ring-[#f7941d]'
                      : isDarkMode
                        ? 'bg-[#081d38] border-[#163b66] text-slate-400 hover:bg-[#0a274d]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-sm">নগদ</span>
                  <span className="text-[10px] text-[#f7941d]">Nagad</span>
                </button>

                {/* Card */}
                <button
                  type="button"
                  onClick={() => setSelectedMethod('card')}
                  className={`p-2.5 rounded-xl border text-xs font-bold font-bengali flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    selectedMethod === 'card'
                      ? 'bg-blue-600/15 border-blue-500 text-blue-600 ring-1 ring-blue-500'
                      : isDarkMode
                        ? 'bg-[#081d38] border-[#163b66] text-slate-400 hover:bg-[#0a274d]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span className="text-[10px]">কার্ড / ব্যাংক</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleConfirm} className="space-y-4">
              <div>
                <label className={`block text-xs font-bengali mb-1 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700 font-medium'
                }`}>
                  আপনার {selectedMethod === 'bkash' ? 'বিকাশ' : selectedMethod === 'nagad' ? 'নগদ' : 'মোবাইল'} নম্বর
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className={`w-full rounded-xl px-3 py-2 text-sm focus:outline-none border transition-colors ${
                    isDarkMode
                      ? 'bg-[#081d38] border-[#163b66] text-white placeholder:text-slate-500 focus:border-cyan-400'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white'
                  }`}
                />
              </div>

              <div className={`flex items-center gap-2 text-[11px] font-bengali ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>নিরাপদ ও এনক্রিপ্টেড পেমেন্ট গেটওয়ে</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-sm font-bengali shadow-lg shadow-sky-600/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{plan.price} পেমেন্ট নিশ্চিত করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
