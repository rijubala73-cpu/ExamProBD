import React, { useState } from 'react';
import { X, GraduationCap, Lock, Phone, User, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'register';
  onClose: () => void;
  onSwitchMode: (mode: 'login' | 'register') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  mode,
  onClose,
  onSwitchMode
}) => {
  const { isDarkMode } = useTheme();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(
      mode === 'login'
        ? 'সফলভাবে লগইন হয়েছে! ExamBD তে স্বাগতম।'
        : 'অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!'
    );
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`rounded-2xl w-full max-w-md p-6 sm:p-7 shadow-2xl relative border transition-colors ${
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

        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#0284c7] to-[#041d3d] border border-cyan-500/30 flex items-center justify-center mb-3">
            <GraduationCap className="w-6 h-6 text-cyan-300" />
          </div>
          <h3 className={`text-xl font-bold font-bengali ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {mode === 'login' ? 'ExamBD এ লগইন করুন' : 'নতুন অ্যাকাউন্ট তৈরি করুন'}
          </h3>
          <p className={`text-xs font-bengali mt-1 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {mode === 'login'
              ? 'আপনার প্রস্তুতি অব্যাহত রাখতে সাইন ইন করুন'
              : 'আজই যোগ দিন এবং সীমাহীন পরীক্ষা প্র্যাকটিস করুন'}
          </p>
        </div>

        {/* Success Alert */}
        {successMsg && (
          <div className={`mb-4 p-3 rounded-xl text-xs font-bengali flex items-center gap-2 border ${
            isDarkMode 
              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
              : 'bg-emerald-50 border-emerald-300 text-emerald-800'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'register' && (
            <div>
              <label className={`block text-xs font-bengali mb-1 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700 font-medium'
              }`}>
                আপনার পুরো নাম
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="যেমন: মোঃ সাকিব হাসান"
                  className={`w-full rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none font-bengali border transition-colors ${
                    isDarkMode
                      ? 'bg-[#081d38] border-[#163b66] text-white placeholder:text-slate-500 focus:border-cyan-400'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white'
                  }`}
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}

          <div>
            <label className={`block text-xs font-bengali mb-1 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700 font-medium'
            }`}>
              মোবাইল নম্বর
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="017XXXXXXXX"
                className={`w-full rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none font-sans border transition-colors ${
                  isDarkMode
                    ? 'bg-[#081d38] border-[#163b66] text-white placeholder:text-slate-500 focus:border-cyan-400'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white'
                }`}
              />
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className={`block text-xs font-bengali mb-1 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700 font-medium'
            }`}>
              পাসওয়ার্ড
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none font-sans border transition-colors ${
                  isDarkMode
                    ? 'bg-[#081d38] border-[#163b66] text-white placeholder:text-slate-500 focus:border-cyan-400'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white'
                }`}
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-sm font-bengali shadow-lg shadow-sky-600/30 transition-all mt-2 cursor-pointer"
          >
            {mode === 'login' ? 'লগইন করুন' : 'নিবন্ধন সম্পন্ন করুন'}
          </button>
        </form>

        {/* Switch Mode */}
        <div className={`mt-5 text-center text-xs font-bengali ${
          isDarkMode ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {mode === 'login' ? (
            <p>
              অ্যাকাউন্ট নেই?{' '}
              <button
                type="button"
                onClick={() => onSwitchMode('register')}
                className="text-sky-600 dark:text-[#00d2ff] hover:underline font-semibold cursor-pointer"
              >
                এখনই রেজিস্টার করুন
              </button>
            </p>
          ) : (
            <p>
              ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
              <button
                type="button"
                onClick={() => onSwitchMode('login')}
                className="text-sky-600 dark:text-[#00d2ff] hover:underline font-semibold cursor-pointer"
              >
                লগইন করুন
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
