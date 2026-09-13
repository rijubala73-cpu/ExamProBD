import React, { useState } from 'react';
import { GraduationCap, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onSearch: (query: string) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearch,
  onOpenAuth,
  activeNav,
  setActiveNav
}) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'all-exams', label: 'All Exams', href: '#categories' },
    { id: 'plans', label: 'Plans', href: '#plans' },
    { id: 'question-bank', label: 'Question Bank', href: '#why-us' },
    { id: 'results', label: 'Results', href: '#testimonials' },
    { id: 'about', label: 'About', href: '#footer' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearch.trim()) {
      onSearch(navSearch);
    }
  };

  const scrollToSection = (id: string, href: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isDarkMode 
        ? 'bg-[#030b18]/90 border-[#142d4d] text-slate-100' 
        : 'bg-white/80 border-slate-200/80 text-slate-800 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
            onClick={() => scrollToSection('home', '#home')}
            id="nav-brand-logo"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0f172a] border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-900/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-cyan-300 drop-shadow" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tight leading-none ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Exam<span className="text-[#0284c7]">BD</span>
              </span>
              <span className={`text-[11px] font-medium tracking-wide flex items-center gap-1.5 mt-0.5 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Your Dream <span className="text-cyan-500 font-bold">•</span> Our Support
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id, item.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? isDarkMode ? 'text-white' : 'text-sky-600 font-semibold'
                      : isDarkMode
                        ? 'text-slate-300 hover:text-white hover:bg-[#091b35]'
                        : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50/70'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0284c7] rounded-full shadow-[0_0_8px_#0284c7]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Search Bar, Theme Toggle & Auth Buttons */}
          <div className="hidden md:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {/* Nav Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                id="nav-search-input"
                type="text"
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                placeholder="পরীক্ষা, বিভাগ বা কীওয়ার্ড খুঁজুন..."
                className={`w-48 xl:w-56 rounded-lg pl-3.5 pr-9 py-1.5 text-xs transition-all font-bengali ${
                  isDarkMode
                    ? 'bg-[#081b35] border border-[#1d3d63] text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400'
                    : 'bg-slate-100/90 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-inner'
                }`}
              />
              <button
                type="submit"
                id="nav-search-btn"
                className={`absolute right-2.5 top-1/2 -translate-y-1/2 transition-colors ${
                  isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-400 hover:text-sky-600'
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Dark Mode / Light Mode Option Button ("dark mood namea option rakho") */}
            <button
              id="theme-toggle-btn"
              onClick={toggleDarkMode}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium font-bengali transition-all border ${
                isDarkMode
                  ? 'bg-[#0b213f] text-amber-300 border-[#1f4a7c] hover:bg-[#102d54]'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
              title={isDarkMode ? 'লাইট মোডে পরিবর্তন করুন' : 'ডার্ক মোডে পরিবর্তন করুন'}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>লাইট মোড</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>ডার্ক মোড</span>
                </>
              )}
            </button>

            {/* Login Button */}
            <button
              id="nav-login-btn"
              onClick={() => onOpenAuth('login')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all border ${
                isDarkMode
                  ? 'text-slate-200 bg-[#091f3d]/60 hover:bg-[#0e2a52] border-[#1e4270]'
                  : 'text-slate-700 bg-white hover:bg-slate-50 border-slate-200 shadow-sm'
              }`}
            >
              Login
            </button>

            {/* Register Button */}
            <button
              id="nav-register-btn"
              onClick={() => onOpenAuth('register')}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] active:bg-[#075985] rounded-lg shadow-sm shadow-sky-900/20 transition-all"
            >
              Register
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg border transition-all ${
                isDarkMode
                  ? 'bg-[#0b213f] text-amber-300 border-[#1f4a7c]'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isDarkMode
                  ? 'text-slate-300 hover:text-white bg-[#081b35] border-[#1a385e]'
                  : 'text-slate-700 hover:text-slate-900 bg-white border-slate-200'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200 ${
          isDarkMode
            ? 'bg-[#030d1d] border-[#142d4d]'
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
              placeholder="পরীক্ষা, বিভাগ বা কীওয়ার্ড খুঁজুন..."
              className={`w-full rounded-lg pl-3.5 pr-9 py-2 text-sm font-bengali ${
                isDarkMode
                  ? 'bg-[#081b35] border border-[#1d3d63] text-slate-200 placeholder:text-slate-400'
                  : 'bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400'
              }`}
            />
            <button
              type="submit"
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-400 hover:text-sky-600'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Dark Mode toggle row in mobile */}
          <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-slate-200/50 bg-slate-100/50 dark:bg-[#081b35]/50 dark:border-[#1d3d63]">
            <span className={`text-sm font-medium font-bengali ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              ডার্ক মোড অপশন
            </span>
            <button
              onClick={toggleDarkMode}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border font-bengali font-semibold ${
                isDarkMode 
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/40' 
                  : 'bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>চালু</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>বন্ধ</span>
                </>
              )}
            </button>
          </div>

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, item.href)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  activeNav === item.id
                    ? isDarkMode
                      ? 'bg-[#00d2ff]/10 text-cyan-300 border-l-2 border-[#00d2ff]'
                      : 'bg-sky-50 text-sky-700 border-l-2 border-sky-600 font-semibold'
                    : isDarkMode
                      ? 'text-slate-300 hover:bg-[#091b35]'
                      : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className={`flex items-center gap-3 pt-2 border-t ${
            isDarkMode ? 'border-[#142d4d]' : 'border-slate-200'
          }`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg text-center border ${
                isDarkMode
                  ? 'text-slate-200 bg-[#091f3d] border-[#1e4270]'
                  : 'text-slate-700 bg-white border-slate-200'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('register');
              }}
              className="flex-1 py-2 text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-lg text-center"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
