/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PlansSection } from './components/PlansSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { MockTestModal } from './components/MockTestModal';
import { AuthModal } from './components/AuthModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ExamCategory, PricingPlan } from './types';
import { examCategories, pricingPlans } from './data/mockData';

function AppContent() {
  const { isDarkMode } = useTheme();
  const [activeNav, setActiveNav] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory | null>(null);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'login'
  });
  const [checkoutModal, setCheckoutModal] = useState<{ isOpen: boolean; plan: PricingPlan | null }>({
    isOpen: false,
    plan: null
  });

  // Handle Search from Navbar or Hero
  const handleSearch = (keyword: string) => {
    const found = examCategories.find(
      (c) =>
        c.title.toLowerCase().includes(keyword.toLowerCase()) ||
        c.subtitle.toLowerCase().includes(keyword.toLowerCase()) ||
        keyword.toLowerCase().includes(c.id.toLowerCase())
    );

    if (found) {
      setSelectedCategory(found);
      setIsTestModalOpen(true);
    } else {
      // Default to first category mock test
      setSelectedCategory(examCategories[0]);
      setIsTestModalOpen(true);
    }
  };

  const handleSelectCategory = (category: ExamCategory) => {
    setSelectedCategory(category);
    setIsTestModalOpen(true);
  };

  const handleViewAllExams = () => {
    const elem = document.querySelector('#categories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllPlans = () => {
    const elem = document.querySelector('#plans');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setCheckoutModal({
      isOpen: true,
      plan
    });
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthModal({
      isOpen: true,
      mode
    });
  };

  return (
    <div className={`min-h-screen flex flex-col font-bengali selection:bg-cyan-500 selection:text-white transition-colors duration-300 relative overflow-x-hidden ${
      isDarkMode ? 'bg-[#020b18] text-slate-100' : 'bg-[#f0f7ff] text-slate-800'
    }`}>
      {/* 3-4 Color Light Background Gradients */}
      {!isDarkMode && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Tone 1: Sky Blue Aura */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[120px]" />
          {/* Tone 2: Soft Violet/Indigo Aura */}
          <div className="absolute top-1/4 -right-40 w-[650px] h-[650px] bg-indigo-200/35 rounded-full blur-[130px]" />
          {/* Tone 3: Fresh Emerald/Mint Aura */}
          <div className="absolute top-2/3 -left-20 w-[550px] h-[550px] bg-teal-200/30 rounded-full blur-[120px]" />
          {/* Tone 4: Warm Rose/Peach Sunset Glow */}
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[110px]" />
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        onSearch={handleSearch}
        onOpenAuth={handleOpenAuth}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onSearchSubmit={handleSearch}
          onExploreExams={handleViewAllExams}
        />

        {/* Subtle Horizontal Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`h-px bg-gradient-to-r from-transparent ${
            isDarkMode ? 'via-[#142d4d]' : 'via-sky-200/80'
          } to-transparent`} />
        </div>

        {/* 2. Categories Section ("পরীক্ষার বিভাগসমূহ") */}
        <CategoriesSection
          onSelectCategory={handleSelectCategory}
          onViewAllExams={handleViewAllExams}
          selectedCategoryId={selectedCategory?.id}
        />

        {/* Subtle Horizontal Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`h-px bg-gradient-to-r from-transparent ${
            isDarkMode ? 'via-[#142d4d]' : 'via-sky-200/80'
          } to-transparent`} />
        </div>

        {/* 3. Why Choose ExamBD Section & Special Offer Banner */}
        <WhyChooseUs
          onBuyPlanClick={() => handleSelectPlan(pricingPlans[1])} // Default to Popular Standard plan
        />

        {/* Subtle Horizontal Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`h-px bg-gradient-to-r from-transparent ${
            isDarkMode ? 'via-[#142d4d]' : 'via-sky-200/80'
          } to-transparent`} />
        </div>

        {/* 4. Pricing Plans Section ("আমাদের প্ল্যান") */}
        <PlansSection
          onSelectPlan={handleSelectPlan}
          onViewAllPlans={handleViewAllPlans}
        />

        {/* Subtle Horizontal Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`h-px bg-gradient-to-r from-transparent ${
            isDarkMode ? 'via-[#142d4d]' : 'via-sky-200/80'
          } to-transparent`} />
        </div>

        {/* 5. Testimonials & Stats Section ("হাজারো শিক্ষার্থীর বিশ্বাস") */}
        <TestimonialsSection />
      </main>

      {/* 6. Footer */}
      <Footer onNavClick={(sec) => setActiveNav(sec)} />

      {/* Interactive Modals */}
      <MockTestModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
        category={selectedCategory}
      />

      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onSwitchMode={(mode) => setAuthModal({ isOpen: true, mode })}
      />

      <CheckoutModal
        isOpen={checkoutModal.isOpen}
        plan={checkoutModal.plan}
        onClose={() => setCheckoutModal({ isOpen: false, plan: null })}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
